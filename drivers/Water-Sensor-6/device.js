'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class WaterSensor6 extends ZwaveDevice {
	onMeshInit() {

		// enable debugging
		this.enableDebug();

		// print the node's info to the console
		this.printNode();

		// register capabilities for this device
		this.registerCapability('alarm_water', 'NOTIFICATION', {
			report: 'NOTIFICATION_REPORT',
			getOpts: {
				//getOnStart: true, // get the initial value on app start
				//pollInterval: 'poll_interval' // maps to device settings
			},
			reportParser(report) {
				return report['Event'] === 2;
			}
		});

		this.registerCapability('measure_battery', 'BATTERY');

	}
}

module.exports = WaterSensor6;
