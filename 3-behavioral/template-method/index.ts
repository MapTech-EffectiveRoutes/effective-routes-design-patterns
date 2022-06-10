import {OrderTemplate} from "./abstract/order-template";
import {WebOrder} from "./concrete/web-order";
import {StoreOrder} from "./concrete/store-order";

export class Client {
    public execute(): void {
        console.log("Web Order:");
        let webOrder: OrderTemplate = new WebOrder();
        webOrder.processOrder();

        console.log("\nStore Order:");
        let storeOrder: OrderTemplate = new StoreOrder();
        storeOrder.processOrder();
    }
}

const client: Client = new Client();
client.execute();