import {Subject} from "../abstract/subject";
import {User} from "../abstract/client";

export class ConcreteSubject implements Subject {
    public state: number;
    private observers: User[] = [];

    public attach(observer: User): void {
        const isExist = this.observers.indexOf(observer) !== -1;
        if (isExist) {
            return console.log('Message: Client has been attached already.');
        }
        console.log('Subject: Attached a Client.');
        this.observers.push(observer);
    }

    public detach(observer: User): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent Client.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached a Client.');
    }

    public notify(): void {
        console.log('Subject: Notifying (' + this.observers.length + ') Clients...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public packageOnTransit(): void {
        console.log('\nNotification: Your package is on its way.');
        this.state = 1;
        console.log(`Subject: Package status(0: still processing, 1: On transit): ${this.state}`);
        this.notify();
    }
}