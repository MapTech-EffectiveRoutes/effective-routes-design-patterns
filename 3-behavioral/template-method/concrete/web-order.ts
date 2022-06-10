import {OrderTemplate} from "../abstract/order-template";

export class WebOrder extends OrderTemplate {
    public doCheckout(): void {
        console.log("Get items from cart,");
        console.log("Set gift preferences,");
        console.log("Set delivery address,");
        console.log("Set billing address.");
    }

    public doPayment(): void {
        console.log("Process payment without Card present");
    }

    public doDelivery(): void {
        console.log("Ship the item to address");
    }

    public doReceipt(): void {
        console.log("Email receipt");
    }
}