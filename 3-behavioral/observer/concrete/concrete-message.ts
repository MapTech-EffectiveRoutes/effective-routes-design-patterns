import {Message} from "../abstract/message";
import {User} from "../abstract/client";

export class ConcreteMessage implements Message {
    public state: number;
    private observers: User[] = [];

    public attach(observer: User): void {
        const isExist = this.observers.indexOf(observer) !== -1;
        if (isExist) {
            return console.log('Message: Client has been attached already.');
        }
        console.log('Message: Attached a Client.');
        this.observers.push(observer);
    }

    public detach(observer: User): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Message: Nonexistent Client.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Message: Detached a Client.');
    }

    public notify(): void {
        console.log('Message: Notifying (' + this.observers.length + ') Clients...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public packageOnTransit(): void {
        console.log('\nMessage: Your package is on its way.');
        this.state = 1;
        console.log(`Message: Package status(0: still processing, 1: On transit): ${this.state}`);
        this.notify();
    }
}