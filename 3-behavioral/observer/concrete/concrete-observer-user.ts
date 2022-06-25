import {User} from "../abstract/client";
import {Message} from "../abstract/message";
import {ConcreteMessage} from "./concrete-message";

export class ConcreteObserverClient implements User {
    public update(subject: Message): void {
        console.log('Client: Notification recieved.');
    }
}