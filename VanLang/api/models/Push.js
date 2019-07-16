/* eslint-disable no-unused-vars */
/**
 * Push.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const delay = require('delay');
let apps = {};
let processing = false;

let doPush = async (app, message) => {
  return app.messaging().send(message);
};

module.exports = {
  SEND_STATUS: {
    PENDING: 1,
    SUCCESS: 2,
    FAIL: 3,
  },
  attributes: {
    notification: { model: 'notifications' },
    device: { model: 'device' },
    sendStatus: { type: 'number', defaultsTo: 1 },
    error: { type: 'string' },
  },
  bootstrap: async () => {
    Push.collectNotification();
    let files = fs.readdirSync(path.join(__dirname, '../../apps'));
    files.map(file => {
      let bundle = path.basename(file, '.json');
      apps[bundle] = admin.initializeApp(
        {
          credential: admin.credential.cert(require(`../../apps/${file}`)),
        },
        bundle
      );
    });
  },
  collectNotification: async () => {
    processing = true;
    let nNotifications = 5;
    let notifications = await Notifications.find({
      where: { isPush: 0 },
      limit: nNotifications,
    });
    for (var i = 0; i < notifications.length; i++) {
      await Notifications.update({ id: notifications[i].id }).set({
        isPush: 1,
      });
      try {
        let rs = await Push.pushNotification(notifications[i]);
      } catch (err) {
        continue;
      }
    }
    if (notifications.length < nNotifications) {
      //wait 10 seconds for next collect
      processing = false;
      await delay(1000);
    }
    Push.collectNotification();
  },
  pushNotification: async notification => {
    let devices = [];
    if (notification.app) {
      devices = await Device.find({
        where: { user: notification.user, bundleId: notification.app },
        select: ['fcmToken', 'id', 'bundleId'],
      });
    } else {
      devices = await Device.find({
        where: { user: notification.user },
        select: ['fcmToken', 'id', 'bundleId'],
      });
    }
    let notificationCount = await Notification.count({
      user: notification.user,
      isRead: 0,
      isDisplay: 1,
    });
    await Students.update({ id: notification.user }).set({
      notifications: notificationCount,
    });
    let promises = [];
    if (!notification.data) {
      notification.data = {};
    }
    notification.data.notificationCount = notificationCount + '';
    devices.map(async d => {
      var message = {
        data: notification.data,
        notification: { title: notification.title, body: notification.body },
        token: d.fcmToken,
      };
      if (d.systemName === 'Android') {
        message.android = {
          notification: {
            icon: 'ic_stat_ic_notif.png',
            color: '#E76E26',
            sound: 'default',
          },
        };
      } else {
        message.apns = {
          payload: {
            aps: {
              badge: notificationCount,
              sound: 'default',
            },
          },
        };
      }
      try {
        try {
          if (notification.app) {
            await doPush(apps[notification.app], message);
          } else {
            if (!apps[d.bundleId]) {
              throw { message: `cannot find app bundle ${d.bundleId}` };
            }
            await doPush(apps[d.bundleId], message);
          }
          await Push.create({
            notification: notification.id,
            device: d.id,
            sendStatus: Push.SEND_STATUS.SUCCESS,
          });
        } catch (err) {
          await Push.create({
            notification: notification.id,
            device: d.id,
            sendStatus: Push.SEND_STATUS.FAIL,
            error: err.message,
          });
        }
      } catch (err) {}
    });
  },
};
