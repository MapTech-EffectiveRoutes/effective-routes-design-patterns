import {UserState} from "../abstract/user-state";
import {InactiveUser} from "./inactive-user";

export class ActiveUser extends UserState {
    public handle(): void {
        console.log('Active handles request1.');
        console.log('Active wants to change the state of the context.');
        //this.user.transitionTo(new InactiveUser());
    }
}