import {OrderState} from "../abstract/order-state";
import {Delivered} from "./Delivered";

export class Traveling extends OrderState {
    public handle(): void {
        console.log('Traveling to the destiny');
        //this.user.transitionTo(new InactiveUser());

    }
}