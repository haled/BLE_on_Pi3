// code came from https://github.com/sandeepmistry/node-eddystone-beacon-scanner/blob/master/examples/basic.js

var beaconScanner = require('eddystone-beacon-scanner');

beaconScanner.on('found', function(beacon) {
  console.log('found Eddystone Beacon:\n', JSON.stringify(beacon, null, 2));
});

beaconScanner.on('updated', function(beacon) {
  console.log('updated Eddystone Beacon:\n', JSON.stringify(beacon, null, 2));
});

beaconScanner.on('lost', function(beacon) {
  console.log('lost Eddystone beacon:\n', JSON.stringify(beacon, null, 2));
});

beaconScanner.startScanning(true);