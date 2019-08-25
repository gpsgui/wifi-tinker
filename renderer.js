// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var wifi = require('node-wifi')

const std = 'wlp2s0f0'
const ext = 'wlx00e02da707e8'
var lista = ''
wifi.init({
    iface: null
});

// Scan networks
scan = () => {
    wifi.scan(function(err, networks) {
        if (err) {
            console.log(err);
        } else {
            console.log(networks);

            lista = ''
            for(var i = 0; i < networks.length; i++){
                lista+= '<li>' + networks[i].ssid + '\t' +                   networks[i].signal_level +  '</li>'
            }
            document.getElementById("name").children[0].innerHTML = lista
        }
    })
}
// Adding Event Listeners
addEventListener('onCreated',scan())