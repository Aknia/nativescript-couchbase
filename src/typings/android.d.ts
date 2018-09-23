
declare namespace com {
    export namespace couchbase {
        export namespace lite {
            export namespace Database {
                export class As {}
            }

            export class Database {
                public constructor(name: string, config: DatabaseConfiguration);

                public save(document: com.couchbase.lite.MutableDocument);

                public delete(document: com.couchbase.lite.Document);

                public getDocument(id: string): com.couchbase.lite.Document;
            }

            export class DatabaseConfiguration {
                public constructor(androidContext: any);
            }

            export class Document {
                public getId(): string;

                public toMutable(): com.couchbase.lite.MutableDocument;

                public getString(key: string): string;

                public getBoolean(key: string): boolean;
            }

            export class MutableDocument extends com.couchbase.lite.Document {
                public constructor();

                public getId(): string;

                public setString(key: string, value: string);

                public setBoolean(key: string, value: boolean);

                public setValue(key: string, value: any);
            }

            export class DataSource {
                public static database(database: com.couchbase.lite.Database): com.couchbase.lite.Database.As;
            }

            export class QueryBuilder {
                public static select(...select: com.couchbase.lite.SelectResult[]): com.couchbase.lite.Select;
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

            export class Dictionary {
                public getString(key: string): string;

                public getBoolean(key: string): boolean;

                public getKeys(): java.util.List<string>

                public toList(): java.util.List<java.lang.Object>
            }

            export class MutableDictionary extends Dictionary {

            }

            export class Meta {
                public static id: MetaExpression;

                public static sequence: MetaExpression;
            }

            export class MetaExpression extends Meta {
            }

            export class Result {
                public getString(key: string): string;

                public getBoolean(key: string): boolean;

                public getValue(key: string): java.lang.Object;

                public getKeys(): java.util.List<string>

                public toList(): java.util.List<java.lang.Object>

                public getDictionary(key: string): com.couchbase.lite.Dictionary

                public toMap(): java.util.Map<string, java.lang.Object>

            }

            export class ResultSet {
                public allResults(): java.util.List<com.couchbase.lite.Result>;

                public next(): com.couchbase.lite.Result;

                public iterator(): java.util.Iterator<com.couchbase.lite.Result>
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

                public static property(key: string): com.couchbase.lite.SelectResult.As;

                public static expression(key: com.couchbase.lite.Expression): com.couchbase.lite.SelectResult.As;
            }

            export class Expression {
                public static property(key: string): com.couchbase.lite.PropertyExpression;

                public static string(value: string): com.couchbase.lite.Expression;
            }

            export class PropertyExpression {
                public equalTo(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
            }
        }
    }
}