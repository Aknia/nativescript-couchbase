import * as utils from 'tns-core-modules/utils/utils';

export class Couchbase {
    private database: com.couchbase.lite.Database;

    public constructor() {
        this.database = new com.couchbase.lite.Database('test', new com.couchbase.lite.DatabaseConfiguration(utils.ad.getApplicationContext()));

        // let mutable = new com.couchbase.lite.MutableDocument();
        // mutable.setString('test', 'myValue');
        // this.database.save(mutable);

        // let document = this.database.getDocument(mutable.getId());
        // console.log(document.getString('test'));
    }

    public select() {
        let query = com.couchbase.lite.QueryBuilder
            .select([com.couchbase.lite.SelectResult.all()])
            .from(com.couchbase.lite.DataSource.database(this.database))
            .where(com.couchbase.lite.Expression.property('test').equalTo(com.couchbase.lite.Expression.string('myValue')))
        ;

        let result = query.execute();

        let first = result.next();
        console.log(first.getKeys(), first.getString('test'), first.toList());
    }
}
