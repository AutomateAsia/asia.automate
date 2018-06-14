'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DoorWindowSensor5 extends ZwaveDevice {
	onMeshInit() {

		// enable debugging
		this.enableDebug();

		// print the node's info to the console
		this.printNode();

		// register capabilities for this device
		this.registerCapability('alarm_contact', 'NOTIFICATION', {
			report: 'NOTIFICATION_REPORT',
			getOpts: {
				//getOnStart: true, // get the initial value on app start
				//pollInterval: 'poll_interval' // maps to device settings
			},
			reportParser(report) {
				if (report['Event'] === 22){
					//contact open
					return true;
				}
				if (report['Event'] === 23){
					//contact close
					return false;
				}
				return null;
			}
		});

		this.registerCapability('alarm_tamper', 'NOTIFICATION', {
			report: 'NOTIFICATION_REPORT',
			getOpts: {
				//getOnStart: true, // get the initial value on app start
				//pollInterval: 'poll_interval' // maps to device settings
			},
			reportParser(report) {
				if (report['Event'] === 3){
					//tamper started
					return true;
				}
				if (report['Event'] === 0){
					//tamper ended
					return false;
				}
				return null;
			}
		});

		this.registerCapability('measure_battery', 'BATTERY');

	}
}

module.exports = DoorWindowSensor5;
