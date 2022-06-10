"use strict";
exports.__esModule = true;
var light_1 = require("./receiver/light");
var switch_1 = require("./invoker/switch");
var toggle_command_1 = require("./concrete/toggle-command");
var all_lights_command_1 = require("./concrete/all-lights-command");
function clientCode() {
    var bedroomLight = new light_1.Light();
    var kitchenLight = new light_1.Light();
    var officeLight = new light_1.Light();
    var toggleCommand1 = new toggle_command_1.ToggleCommand(bedroomLight);
    var toggleCommand2 = new toggle_command_1.ToggleCommand(kitchenLight);
    var toggleCommand3 = new toggle_command_1.ToggleCommand(officeLight);
    var lightSwitch = new switch_1.Switch();
    /*lightSwitch.invoke(toggleCommand1);
    lightSwitch.invoke(toggleCommand2);
    lightSwitch.invoke(toggleCommand3);
    lightSwitch.invoke(toggleCommand1);
    lightSwitch.invoke(toggleCommand2);
    lightSwitch.invoke(toggleCommand3);*/
    console.log("****************************");
    var lights = [];
    lights.push(kitchenLight);
    lights.push(bedroomLight);
    lights.push(officeLight);
    var allLightsCommand = new all_lights_command_1.AllLightsCommand(lights);
    lightSwitch.invoke(allLightsCommand);
    lightSwitch.invoke(allLightsCommand);
    lightSwitch.invoke(allLightsCommand);
}
clientCode();
