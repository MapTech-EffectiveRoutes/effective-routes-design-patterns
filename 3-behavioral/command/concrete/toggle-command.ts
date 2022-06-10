import {Command} from "../abstract/command";
import {Light} from "../receiver/light";

export class ToggleCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.toggle();
    }
}