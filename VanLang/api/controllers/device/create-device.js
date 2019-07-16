module.exports = {
  friendlyName: 'Create device',

  description: '',

  inputs: {
    device: {
      description: 'device of student',
      type: 'json',
    },
  },

  exits: {},

  fn: async function(inputs, exits) {
    sails.log.info(`====> device/create-device`);
    try {
      if (inputs.device) {
        let deviceMapStudent = await Device.findOne({
          user: inputs.device.user,
        });
        if (!deviceMapStudent) {
          await Device.create({
            user: inputs.device.user,
            apiLevel: inputs.device.apiLevel.toString(),
            appName: inputs.device.appName,
            batteryLevel: inputs.device.batteryLevel,
            brand: inputs.device.brand,
            buildNumber: inputs.device.buildNumber.toString(),
            bundleId: inputs.device.bundleId,
            carrier: inputs.device.carrier,
            deviceCountry: inputs.device.deviceCountry,
            deviceId: inputs.device.deviceId,
            deviceLocale: inputs.device.deviceLocale,
            deviceName: inputs.device.deviceName,
            firstInstallTime: inputs.device.firstInstallTime.toString(),
            fontScale: inputs.device.fontScale,
            freeDiskStorage: inputs.device.freeDiskStorage.toString(),
            ip: inputs.device.ip,
            referrer: inputs.device.referrer,
            instanceId: inputs.device.instanceId,
            lastUpdateTime: inputs.device.lastUpdateTime.toString(),
            mac: inputs.device.mac,
            manufacturer: inputs.device.manufacturer,
            maxMemory: inputs.device.maxMemory,
            model: inputs.device.model,
            phoneNumber: inputs.device.phoneNumber,
            readableVersion: inputs.device.readableVersion,
            serialNumber: inputs.device.serialNumber,
            systemName: inputs.device.systemName,
            systemVersion: inputs.device.systemVersion,
            timezone: inputs.device.timezone,
            storageSize: inputs.device.storageSize.toString(),
            totalMemory: inputs.device.totalMemory.toString(),
            uniqueId: inputs.device.uniqueId,
            userAgent: inputs.device.userAgent,
            is24hour: inputs.device.is24hour,
            isEmulator: inputs.device.isEmulator,
            isPinOrFingerprintSet: inputs.device.isPinOrFingerprintSet,
            isTablet: inputs.device.isTablet,
          }).exec((err, created) => {
            if (err) {
              sails.log.error(err);
              return exits.success({
                code: 2,
                messsage: 'Hệ thống đang bận',
                data: { err: error.messsage },
              });
            }
            return exits.success({
              code: 0,
              messsage: '',
              data: created,
            });
          });
        } else {
          exits.success({
            code: 0,
            messsage: '',
            data: deviceMapStudent,
          });
        }
      }
    } catch (error) {
      sails.log.error(error);
      return exits.success({
        code: 1,
        messsage: 'Hệ thống đang bận',
        data: { err: error.messsage },
      });
    }
  },
};
