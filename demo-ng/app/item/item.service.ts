import { Injectable } from "@angular/core";

import { Item } from "./item";
import { Database, DatabaseConfiguration, MutableDocument, QueryBuilder, SelectResult, DataSource } from 'nativescript-couchbase';
import * as utils from 'tns-core-modules/utils/utils';

@Injectable()
export class ItemService {
    private database: Database;

    public constructor() {
        this.database = new Database('test', new DatabaseConfiguration(utils.ad.getApplicationContext()));
    }

    public addValue() {
        let mutable = new MutableDocument();
        mutable.setString('test', 'myValuePouetss');

        this.database.save(mutable);

        let document = this.database.getDocument(mutable.getId());
        console.log(document.getString('test'));
    }

    public getValues(): Array<any> {
        let query = QueryBuilder
            .select([SelectResult.all()])
            .from(DataSource.database(this.database))
            // .where(Expression.property('test').equalTo(Expression.string('myValuePouetsss')))
        ;

        let result = query.execute();

        let iterator = result.iterator();

        let items = [];
        while (iterator.hasNext()) {
            items.push(iterator.next().getDictionary('test'));
        }

        return items;
    }
}
