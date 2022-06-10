"use strict";
exports.__esModule = true;
var sandwich_director_1 = require("./director/sandwich-director");
var monte_cristo_sandwich_builder_1 = require("./builder/concrete/monte-cristo-sandwich-builder");
function clientCode() {
    var builder; // Abstract Builder
    //builder = new ClubSandwichBuilder(); // Concrete Builder
    builder = new monte_cristo_sandwich_builder_1.MonteCristoSandwichBuilder(); // Concrete Builder
    //builder = new MySandwichBuilder(); // Concrete Builder
    //builder = new OtherSandwichBuilder(); // Concrete Builder
    var sandwichDirector = new sandwich_director_1.SandwichDirector(builder);
    sandwichDirector.buildSandwich();
    var sandwich = sandwichDirector.getSandwich();
    sandwich.display();
}
clientCode();
