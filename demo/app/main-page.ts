import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';

import { HelloWorldModel } from './main-view-model';

import * as utils from 'tns-core-modules/utils/utils';
import { Database, DatabaseConfiguration, MutableDocument } from 'nativescript-couchbase';
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';


// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onTap(args: GestureEventData) {
    // console.log(args);
    let database = new Database('test', new DatabaseConfiguration(utils.ad.getApplicationContext()));

    let mutable = new MutableDocument();
    mutable.setString('test', 'myValuePouetss');

    database.save(mutable);

    let document = database.getDocument(mutable.getId());
    console.log(document.getString('test'));
    // couchbase.select();
}

// public constructor() {
    //     this.database = new com.couchbase.lite.Database('testou', new com.couchbase.lite.DatabaseConfiguration(utils.ad.getApplicationContext()));
    // }

    // public select() {
    //     let mutable = new com.couchbase.lite.MutableDocument();
    //     mutable.setString('test', 'myValuePouetsss');
    //     mutable.setBoolean('fuckYou', true);
    //     this.database.save(mutable);

    //     let document = this.database.getDocument(mutable.getId());
    //     console.log(document.getString('test'), document.getBoolean('fuckYou'));

    //     let query = com.couchbase.lite.QueryBuilder
    //         .select([com.couchbase.lite.SelectResult.all()])
    //         .from(com.couchbase.lite.DataSource.database(this.database))
    //         // .where(com.couchbase.lite.Expression.property('test').equalTo(com.couchbase.lite.Expression.string('myValuePouetsss')))
    //     ;

    //     let result = query.execute();

    //     let first = result.next().getDictionary('testou');

    //     console.log(first.getKeys(), first.getString('test'), first.getBoolean('fuckYou'));
    // }