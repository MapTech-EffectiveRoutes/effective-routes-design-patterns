import {Light} from "./receiver/light";
import {Switch} from "./invoker/switch";
import {Command} from "./abstract/command";
import {ToggleCommand} from "./concrete/toggle-command";
import {AllLightsCommand} from "./concrete/all-lights-command";

function clientCode() {
    let bedroomLight: Light = new Light();
    let kitchenLight: Light = new Light();
    let officeLight: Light = new Light();

    let toggleCommand1: Command = new ToggleCommand(bedroomLight);
    let toggleCommand2: Command = new ToggleCommand(kitchenLight);
    let toggleCommand3: Command = new ToggleCommand(officeLight);

    let lightSwitch: Switch = new Switch();
    /*lightSwitch.invoke(toggleCommand1);
    lightSwitch.invoke(toggleCommand2);
    lightSwitch.invoke(toggleCommand3);
    lightSwitch.invoke(toggleCommand1);
    lightSwitch.invoke(toggleCommand2);
    lightSwitch.invoke(toggleCommand3);*/

    console.log("****************************");

    let lights: Light[]= [];
    lights.push(kitchenLight);
    lights.push(bedroomLight);
    lights.push(officeLight);

    let allLightsCommand: Command = new AllLightsCommand(lights);

    lightSwitch.invoke(allLightsCommand);
    lightSwitch.invoke(allLightsCommand);
    lightSwitch.invoke(allLightsCommand);
}

clientCode();