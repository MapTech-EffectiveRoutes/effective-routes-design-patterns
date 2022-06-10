"use strict";
exports.__esModule = true;
var subsystem1_1 = require("./subsystem1");
var subsystem2_1 = require("./subsystem2");
var facade_1 = require("./facade");
function clientCode() {
    var subsystem1 = new subsystem1_1.Subsystem1();
    var subsystem2 = new subsystem2_1.Subsystem2();
    var facade = new facade_1.Facade(subsystem1, subsystem2);
    //console.log(facade.publishOnAllSocialNetworks());
    console.log(facade.operation());
}
clientCode();
