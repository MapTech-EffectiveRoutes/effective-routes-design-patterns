export class Flyweight {
    //brand + model + color
    private readonly intrinsicState: any;

    constructor(intrinsicState: any) {
        this.intrinsicState = intrinsicState;
    }

    public operation(extrinsicState): void { // plates, owner
        const sharedState = JSON.stringify(this.intrinsicState); //intrinsic
        const uniqueState = JSON.stringify(extrinsicState); //extrinsic
        console.log(`*** Flyweight: Displaying shared (${sharedState}) and unique (${uniqueState}) state.`);
    }
}