'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class HeavyDutySwitch extends ZwaveDevice {
	onMeshInit() {

		// enable debugging
		this.enableDebug();

		// print the node's info to the console
		this.printNode();

		// register capabilities for this device
		this.registerCapability('onoff', 'SWITCH_BINARY');

	}
}

module.exports = HeavyDutySwitch;
