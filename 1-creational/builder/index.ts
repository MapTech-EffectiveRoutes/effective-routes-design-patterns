import {SandwichDirector} from "./director/sandwich-director";
import {MySandwichBuilder} from "./builder/concrete/my-sandwich-builder";
import {Sandwich} from "./product/sandwich";
import {ClubSandwichBuilder} from "./builder/concrete/club-sandwich-builder";
import {SandwichBuilder} from "./builder/abstract/sandwich-builder";
import {OtherSandwichBuilder} from "./builder/concrete/other-sandwich-builder";
import { MonteCristoSandwichBuilder } from "./builder/concrete/monte-cristo-sandwich-builder";

function clientCode() {
    let builder: SandwichBuilder; // Abstract Builder
    //builder = new ClubSandwichBuilder(); // Concrete Builder
    builder = new MonteCristoSandwichBuilder(); // Concrete Builder
    //builder = new MySandwichBuilder(); // Concrete Builder
    //builder = new OtherSandwichBuilder(); // Concrete Builder
    let sandwichDirector: SandwichDirector = new SandwichDirector(builder);
    sandwichDirector.buildSandwich();
    let sandwich: Sandwich = sandwichDirector.getSandwich();
    sandwich.display();
}

clientCode();