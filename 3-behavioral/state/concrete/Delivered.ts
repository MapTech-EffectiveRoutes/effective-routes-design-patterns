import {OrderState} from "../abstract/order-state";
import {Traveling} from "./traveling";

export class Delivered extends OrderState {
    public handle(): void {
        console.log('Product delivered');
        //this.user.transitionTo(new ActiveUser());
    }
}