var request = require('request');
var fs = require('fs');
var path = require('path');

var certFile = path.resolve(__dirname, 'ssl/certificate.pem');
//var keyFile = path.resolve(__dirname, 'certs/client.key');
//var caFile = path.resolve(__dirname, 'certs/ca.cert.pem');

var mainUrl = 'https://www1.agenciatributaria.gob.es/wlpl/BUGC-JDIT/Cnec';

/*var options = {
    url: mainUrl,
    cert: fs.readFileSync(certFile),
    key: fs.readFileSync(keyFile),
    passphrase: 'password',
    ca: fs.readFileSync(caFile)
};*/

var bufferCertFile = fs.readFileSync(certFile);

/*var formData = {
  radio1 : true,
  nif: '25625767H',
  apellido: 'EXPOSITO GONZALEZ JAVIER'
}*/

/*var options = {
    method: 'POST',
    cert: bufferCertFile,
    formData: formData
};*/

var options = {
    hostname: 'www1.agenciatributaria.gob.es', 
    port: 443, 
    path: '/wlpl/BUGC-JDIT/Cnec', 
    method: 'POST', 
    ca: bufferCertFile,
    //cert: bufferCertFile,
    formData: {
      areaDatos : '25625767H; JAVIER EXPOSITO GONZALEZ'
    }
};

request(mainUrl, options, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('Error:', err);
  }
  console.log('POST successful! Server responded with:', body);
});
