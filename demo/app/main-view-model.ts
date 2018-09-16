import { Observable } from 'tns-core-modules/data/observable';
import { Couchbase } from 'nativescript-couchbase';

export class HelloWorldModel extends Observable {
  public message: string;
  private couchbase: Couchbase;

  constructor() {
    super();

    this.couchbase = new Couchbase();
    this.message = this.couchbase.message;
  }
}
