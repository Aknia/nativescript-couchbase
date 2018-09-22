import { Injectable } from "@angular/core";

import { Item } from "./item";
import { Database, DatabaseConfiguration, MutableDocument, QueryBuilder } from 'nativescript-couchbase';
import * as utils from 'tns-core-modules/utils/utils';

@Injectable()
export class ItemService {
    private database: Database;

    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
        { id: 3, name: "Piqué", role: "Defender" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        { id: 5, name: "Sergio", role: "Midfielder" },
        { id: 6, name: "Denis Suárez", role: "Midfielder" },
        { id: 7, name: "Arda", role: "Midfielder" },
        { id: 8, name: "A. Iniesta", role: "Midfielder" },
        { id: 9, name: "Suárez", role: "Forward" },
        { id: 10, name: "Messi", role: "Forward" },
        { id: 11, name: "Neymar", role: "Forward" },
        { id: 12, name: "Rafinha", role: "Midfielder" },
        { id: 13, name: "Cillessen", role: "Goalkeeper" },
        { id: 14, name: "Mascherano", role: "Defender" },
        { id: 17, name: "Paco Alcácer", role: "Forward" },
        { id: 18, name: "Jordi Alba", role: "Defender" },
        { id: 19, name: "Digne", role: "Defender" },
        { id: 20, name: "Sergi Roberto", role: "Midfielder" },
        { id: 21, name: "André Gomes", role: "Midfielder" },
        { id: 22, name: "Aleix Vidal", role: "Midfielder" },
        { id: 23, name: "Umtiti", role: "Defender" },
        { id: 24, name: "Mathieu", role: "Defender" },
        { id: 25, name: "Masip", role: "Goalkeeper" },
    );

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

    public getValues() {
        let query = QueryBuilder
            .select([com.couchbase.lite.SelectResult.all()])
            .from(com.couchbase.lite.DataSource.database(this.database))
            // .where(com.couchbase.lite.Expression.property('test').equalTo(com.couchbase.lite.Expression.string('myValuePouetsss')))
        ;

        let result = query.execute();

        console.log(result.allResults().size());
    }


    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
