import {RealSubject} from "./concrete/real-subject";
import {Proxy} from "./concrete/proxy";
import {CallType} from "./call-type";

function clientCode() {
    console.log('Client: Executing the client code with a real subject:');
    const realSubject = new RealSubject();
    //realSubject.request();

    //console.log('');

    console.log('Client: Executing the same client code with a proxy:');
    const proxy = new Proxy(realSubject, CallType.REMOTE);
    //proxy.request();
    proxy.apiRequest();
}

clientCode();