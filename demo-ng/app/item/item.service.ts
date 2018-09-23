import { Injectable } from "@angular/core";

import { Item } from "./item";
import { Database, DatabaseConfiguration, MutableDocument, QueryBuilder, SelectResult, DataSource, Meta } from 'nativescript-couchbase';
import * as utils from 'tns-core-modules/utils/utils';

@Injectable()
export class ItemService {
    private database: Database;

    public constructor() {
        this.database = new Database('test', new DatabaseConfiguration(utils.ad.getApplicationContext()));
    }

    public addValue(item) {
        let mutable = new MutableDocument();

        for (let i in item) {
            mutable.setValue(i, item[i]);
        }

        this.database.save(mutable);
    }

    public deleteValue(item) {
        this.database.delete(this.database.getDocument(item.getValue('id')));
    }

    public getValues(): Array<any> {
        let query = QueryBuilder
            .select([SelectResult.expression(Meta.id), SelectResult.property('string')])
            .from(DataSource.database(this.database))
            // .where(Expression.property('test').equalTo(Expression.string('myValuePouetsss')))
        ;

        let result = query.execute();

        let iterator = result.iterator();

        let items = [];
        while (iterator.hasNext()) {
            let item = iterator.next();
            items.push(item);
        }

        return items;
    }
}
