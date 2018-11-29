const request = require('request');
let fs = require("fs");
const path = require("path");

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const certFile = path.resolve(__dirname, 'certificate/BEA-cert.crt')
const keyFile = path.resolve(__dirname, 'certificate/BEA.key')
const caFile = path.resolve(__dirname, 'certificate/BEA_crt.pem')

const options = {
  header: {
    'x-ibm-client-id': "93c153cfc316df604348a1f56d174ab8",
    'x-ibm-client-secret': "c1866cc4c3bb5089e7a8166372b072b9",
  },
  url: "https://uapigw.jtetbwkl.com.hk/bea/api/bea/fx/v1/fxrate",
  method: 'GET',
  // cert: fs.readFileSync(certFile),
  key: fs.readFileSync(keyFile),
  passphrase: 'jetco123',
  ca: fs.readFileSync(caFile)
};

request(options, (error, response, data) => {
  if (!error && response.statusCode == 200) {
    console.log("test success", data);
  } else {
    console.log("test fail", error);
  }
});