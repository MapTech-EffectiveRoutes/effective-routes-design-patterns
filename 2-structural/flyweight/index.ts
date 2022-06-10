import {FlyweightFactory} from "./flyweight-factory";

function clientCode() {
    const factory = new FlyweightFactory([
        ['Chevrolet', 'Camaro2018', 'white'],
        ['Mercedes Benz', 'C300', 'black'],
        ['Mercedes Benz', 'C500', 'red'],
        ['BMW', 'M5', 'red'],
        ['BMW', 'X6', 'white']
    ]);
    factory.listFlyweights();
    addCarToPoliceDatabase(factory, 'ARXTQY1', 'Franco', 'Chevrolet', 'Camaro2018', 'white');
    addCarToPoliceDatabase(factory, 'CL234IR', 'Efrain', 'Chevrolet', 'Camaro2018', 'white');
    addCarToPoliceDatabase(factory, 'PE00001', 'Juan Pérez', 'BMW', 'X6', 'white');
    addCarToPoliceDatabase(factory, 'PE00002', 'Juan Pérez', 'BMW', 'M5', 'red');
    addCarToPoliceDatabase(factory, 'PE00003', 'Rodrigo', 'Chevrolet', 'Camaro2018', 'white');
    factory.listFlyweights();
}

function addCarToPoliceDatabase(flyweightFactory: FlyweightFactory, plates: string, owner: string, brand: string, model: string, color: string,) {
    console.log('\nClient: Verifying if adding a car to database.');
    const flyweight = flyweightFactory.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}

clientCode();