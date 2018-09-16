declare namespace com {
    export namespace couchbase {
        export namespace lite {
            export namespace Database {
                export class As {}
            }

            export class Database {
                public constructor(name: string, config?: DatabaseConfiguration);

                public save(document: com.couchbase.lite.MutableDocument);

                public getDocument(id: string): com.couchbase.lite.Document;
            }

            export class DatabaseConfiguration {
                public constructor(androidContext: any);
            }

            export class Document {
                public getId(): string;

                public toMutable(): com.couchbase.lite.MutableDocument;

                public getString(name: string): string;
            }

            export class MutableDocument {
                public constructor();

                public getId(): string;

                public setString(name: string, value: string);
            }

            export class DataSource {
                public static database(database: com.couchbase.lite.Database): com.couchbase.lite.Database.As;
            }

            export class QueryBuilder {
                public static select(select: com.couchbase.lite.SelectResult): com.couchbase.lite.Select;
            }

            export class Select {
                public from(database: com.couchbase.lite.Database.As): com.couchbase.lite.From;
            }

            export class From {
                public where(where: com.couchbase.lite.Expression): com.couchbase.lite.Where;

                public execute(): com.couchbase.lite.ResultSet;
            }

            export class Where {
                public execute(): com.couchbase.lite.ResultSet;
            }

            export class Result {
                public getString(name: string): string;
            }

            export class ResultSet {
                public allResults(): com.couchbase.lite.Result[];

                public next(): com.couchbase.lite.Result;
            }

            export interface Query {

            }

            export namespace SelectResult {
                export class From extends SelectResult {

                }

                export class As extends SelectResult {

                }
            }

            export class SelectResult {
                public static all(): com.couchbase.lite.SelectResult.From;

                public static property(name: string): com.couchbase.lite.SelectResult.As;
            }

            export class Expression {
                public static property(name: string): com.couchbase.lite.PropertyExpression;

                public static string(value: string): com.couchbase.lite.Expression;
            }

            export class PropertyExpression {
                public equalTo(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
            }
        }
    }
}