import {Subject} from "../abstract/subject";
import {RealSubject} from "./real-subject";
import {CallType} from "../call-type";

export class Proxy implements Subject {
    private realSubject: RealSubject;
    private readonly callType: CallType;

    constructor(realSubject: RealSubject, callType: CallType) {
        this.realSubject = realSubject;
        this.callType = callType;
    }

    public apiRequest(): void {
        if (this.callType == CallType.LOCAL)
        {
            console.log('Response from local proxy');
            return;
        }
        if (this.callType == CallType.REMOTE) {
            this.realSubject.apiRequest();
            return;
        }
        console.log('Invalid Call');
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }
}