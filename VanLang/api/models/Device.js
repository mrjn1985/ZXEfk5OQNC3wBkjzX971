/**
 * Device.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    user: { type: 'number' },
    apiLevel: { type: 'string' },
    appName: { type: 'string' },
    batteryLevel: { type: 'string' },
    brand: { type: 'string' },
    buildNumber: { type: 'string' },
    bundleId: { type: 'string' },
    carrier: { type: 'string' },
    deviceCountry: { type: 'string' },
    deviceId: { type: 'string' },
    deviceLocale: { type: 'string' },
    deviceName: { type: 'string' },
    firstInstallTime: { type: 'string' },
    fontScale: { type: 'string' },
    freeDiskStorage: { type: 'string' },
    ip: { type: 'string' },
    referrer: { type: 'string' },
    instanceId: { type: 'string' },
    lastUpdateTime: { type: 'string' },
    mac: { type: 'string' },
    manufacturer: { type: 'string' },
    maxMemory: { type: 'string' },
    model: { type: 'string' },
    phoneNumber: { type: 'string' },
    readableVersion: { type: 'string' },
    serialNumber: { type: 'string' },
    systemName: { type: 'string' },
    systemVersion: { type: 'string' },
    timezone: { type: 'string' },
    storageSize: { type: 'string' },
    totalMemory: { type: 'string' },
    uniqueId: { type: 'string' },
    userAgent: { type: 'string' },
    is24hour: { type: 'string' },
    isEmulator: { type: 'string' },
    isPinOrFingerprintSet: { type: 'string' },
    isTablet: { type: 'string' },
  },
};
