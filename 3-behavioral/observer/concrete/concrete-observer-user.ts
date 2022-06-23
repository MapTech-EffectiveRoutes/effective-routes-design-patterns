import {User} from "../abstract/client";
import {Subject} from "../abstract/subject";
import {ConcreteSubject} from "./concrete-subject";

export class ConcreteObserverClient implements User {
    public update(subject: Subject): void {
        console.log('Client: Notification recieved.');
    }
}