var express = require('express');
var miio = require('miio');
var router = express.Router();
const device = miio.device({ address: 'replace-me', token: 'replace-me' });

router.get('/activateCleaning', function (req, res) {
    device
        .then(device => {
            device.activateCleaning()
            res.status(200).send("Activated cleaning");
        })
        .catch(err => { res.status(200).send("An error occured attempting to activate cleaning") });
});

router.get('/activateCharging', function (req, res) {
    device
        .then(device => {
            device.activateCharging()
            res.status(200).send("Activated charging");
        })
        .catch(err => { res.status(200).send("An error occured attempting to activate charging") });
});

router.get('/pauseCleaning', function (req, res) {
    device
        .then(device => {
            device.pause()
            res.status(200).send("Paused cleaning");
        })
        .catch(err => { res.status(200).send("An error occured attempting to pause cleaning") });
});


module.exports = router;