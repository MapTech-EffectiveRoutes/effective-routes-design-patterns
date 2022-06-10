import {OrderTemplate} from "../abstract/order-template";

export class StoreOrder extends OrderTemplate {
    public doCheckout(): void {
        console.log("Ring up items from cart.");
    }

    public doPayment(): void {
        console.log("Process payment with Card present");
    }

    public doDelivery(): void {
        console.log("Bag items at counter");
    }

    public doReceipt(): void {
        console.log("Print receipt");
    }
}