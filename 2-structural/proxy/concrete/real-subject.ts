import {Subject} from "../abstract/subject";

export class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }

    public apiRequest(): void {
        console.log('RealSubject: Handling Remote API Request');
    }
}