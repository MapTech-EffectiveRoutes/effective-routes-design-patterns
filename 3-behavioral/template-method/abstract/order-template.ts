export abstract class OrderTemplate {
    protected isGift: boolean;

    abstract doCheckout(): void;
    abstract doPayment(): void;
    abstract doReceipt(): void;
    abstract doDelivery(): void;

    public wrapGift(): void {
        console.log("Gift wrapped.");
    }

    public processOrder(): void {
        this.doCheckout();
        this.doPayment();
        if (this.isGift) {
            this.wrapGift();
        } else {
            this.doReceipt();
        }
        this.doDelivery();
    }
}