import {ConcreteMessage} from "./concrete/concrete-message";

import {Message} from "./abstract/message";
import {User} from "./abstract/client";
import {ConcreteObserverClient} from "./concrete/concrete-observer-user";

export class Notification {
    public execute(): void {
        const subject: ConcreteMessage = new ConcreteMessage();

        const observer: User = new ConcreteObserverClient();
        
        subject.attach(observer);
        subject.packageOnTransit();

    }
}

const client: Notification = new Notification();
client.execute();