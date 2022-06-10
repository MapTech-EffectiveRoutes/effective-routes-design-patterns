import {SandwichBuilder} from "../abstract/sandwich-builder";
import {BreadType} from "../../enums/bread-type";
import {CheeseType} from "../../enums/cheese-type";
import {MeatType} from "../../enums/meat-type";

export class OtherSandwichBuilder extends SandwichBuilder {
    public prepareBread(): void {
        this.sandwich.setBreadType(BreadType.WHEAT);
        this.sandwich.setToasted(true);
    }

    public applyMeatAndCheese(): void {
        this.sandwich.setMeatType(MeatType.TURKEY);
        this.sandwich.setCheeseType(CheeseType.CHEDDAR);
    }

    public applyVegetables(): void {
        this.sandwich.setVegetables(["Tomato", "Lettuce"]);
    }

    public addCondiments(): void {
        this.sandwich.setHasMayonnaise(false);
        this.sandwich.setHasMustard(true);
    }
}