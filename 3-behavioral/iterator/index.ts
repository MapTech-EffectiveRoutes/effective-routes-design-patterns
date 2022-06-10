import {WordsAggregate} from "./concret/words-aggregate";

export class Client {
    public execute(): void {
        const words = new WordsAggregate();
        words.addItem('First');
        words.addItem('Second');
        words.addItem('Third');

        /*const iterator = words.getIterator();

        console.log('Straight traversal:');
        while (iterator.valid()) {
            console.log(iterator.next());
        }
        console.log('');*/

        console.log('Reverse traversal:');
        const reverseIterator = words.getReverseIterator();
        while (reverseIterator.valid()) {
            console.log(reverseIterator.next());
        }
    }
}

const client: Client = new Client();
client.execute();