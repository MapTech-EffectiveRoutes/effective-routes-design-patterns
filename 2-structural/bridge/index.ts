import {Formatter} from "./implementor/abstract/formatter";
import {Book} from "./abstraction/refined/book";
import {Paper} from "./abstraction/refined/paper";
import {FormatterFactory} from "./factory/formatter-factory";
import {FormatterType} from "./factory/formatter-type";
import {Brochure} from "./abstraction/refined/brochure";
import {Thesis} from "./abstraction/refined/thesis";
import { Draft } from "./abstraction/refined/draft";

function clientCode() {
    let fomatter: Formatter = FormatterFactory.getType(FormatterType.BACKWARDS);
    
    let draft: Draft = new Draft(fomatter);
    draft.changeText("Text of the draft");
    draft.print();

    console.log("*************************************************************");
    let thesis: Thesis = new Thesis(fomatter);
    thesis.changeAuthor("Juan Pérez");
    thesis.changeTitle("Design Patterns");
    thesis.changeText("Text of the thesis");
    thesis.changeReferences("References of the thesis");
    thesis.print();

    console.log("*************************************************************");
    let book: Book = new Book(fomatter);
    book.changeAuthor("Robert C. Martin");
    book.changeTitle("Clean Code");
    book.changeText("Text of the book");
    book.print();

    console.log("*************************************************************");
    let apaFomatter: Formatter = FormatterFactory.getType(FormatterType.APA);
    let paper: Paper = new Paper(apaFomatter);
    paper.changeAuthor("Juan Pérez");
    paper.changeTitle("Design Patterns");
    paper.changeText("Text of the paper");
    paper.changeReferences("References of the paper");
    paper.print();
}

clientCode();