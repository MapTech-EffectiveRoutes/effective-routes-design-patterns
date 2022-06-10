import {Context} from "./context/context";
import {FedEx} from "./concret/FedEx";
import {DHL} from "./concret/DHL";
import {OlvaCourier} from "./concret/OlvaCourier";

export class Client {
    public execute(): void {
        const context = new Context();
        console.log(context.calculateCost('data'));

        context.setStrategy(new DHL());
        console.log(context.calculateCost('data'));

        context.setStrategy(new FedEx());
        console.log(context.calculateCost('data'));

        context.setStrategy(new OlvaCourier());
        console.log(context.calculateCost('data'));
    }
}

const client: Client = new Client();
client.execute();