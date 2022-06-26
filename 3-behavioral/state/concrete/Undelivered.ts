import {OrderState} from "../abstract/order-state";
import {Traveling} from "./traveling";

export class Undelivered extends OrderState {
    public handle(): void {
        console.log('A delivery error occurredy');
        //this.user.transitionTo(new InactiveUser());

    }
}