import {User} from "./user";
import {InactiveUser} from "./concrete/inactive-user";
import {ActiveUser} from "./concrete/active-user";

export class Client {
    public execute(): void {
        let user = new User(new ActiveUser());
        user.request();
        user.transitionTo(new InactiveUser());
        user.request();
        user.transitionTo(new ActiveUser());
        user.request();
    }
}

const client: Client = new Client();
client.execute();