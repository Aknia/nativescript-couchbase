import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
    documentsSize = 0;

    constructor() {
        super();
    }
}
