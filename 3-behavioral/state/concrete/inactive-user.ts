import {UserState} from "../abstract/user-state";
import {ActiveUser} from "./active-user";

export class InactiveUser extends UserState {
    public handle(): void {
        console.log('InactiveUser handles request2.');
        console.log('InactiveUser wants to change the state of the context.');
        //this.user.transitionTo(new ActiveUser());
    }
}