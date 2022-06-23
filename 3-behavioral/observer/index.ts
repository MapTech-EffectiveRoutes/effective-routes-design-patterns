import {ConcreteSubject} from "./concrete/concrete-subject";

import {Subject} from "./abstract/subject";
import {User} from "./abstract/client";
import {ConcreteObserverClient} from "./concrete/concrete-observer-user";

export class Notification {
    public execute(): void {
        const subject: ConcreteSubject = new ConcreteSubject();

        const observer: User = new ConcreteObserverClient();
        
        subject.attach(observer);
        subject.packageOnTransit();

    }
}

const client: Notification = new Notification();
client.execute();