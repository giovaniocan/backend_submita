
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model ArticleVersion
 * 
 */
export type ArticleVersion = $Result.DefaultSelection<Prisma.$ArticleVersionPayload>
/**
 * Model ArticleKeyword
 * 
 */
export type ArticleKeyword = $Result.DefaultSelection<Prisma.$ArticleKeywordPayload>
/**
 * Model RelatedAuthor
 * 
 */
export type RelatedAuthor = $Result.DefaultSelection<Prisma.$RelatedAuthorPayload>
/**
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>
/**
 * Model EventEvaluator
 * 
 */
export type EventEvaluator = $Result.DefaultSelection<Prisma.$EventEvaluatorPayload>
/**
 * Model ArticleEvaluatorAssignment
 * 
 */
export type ArticleEvaluatorAssignment = $Result.DefaultSelection<Prisma.$ArticleEvaluatorAssignmentPayload>
/**
 * Model Checklist
 * 
 */
export type Checklist = $Result.DefaultSelection<Prisma.$ChecklistPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model QuestionResponse
 * 
 */
export type QuestionResponse = $Result.DefaultSelection<Prisma.$QuestionResponsePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ArticleStatus: {
  SUBMITTED: 'SUBMITTED',
  IN_EVALUATION: 'IN_EVALUATION',
  APPROVED: 'APPROVED',
  IN_CORRECTION: 'IN_CORRECTION',
  REJECTED: 'REJECTED'
};

export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus]


export const EvaluationStatus: {
  APPROVED: 'APPROVED',
  TO_CORRECTION: 'TO_CORRECTION',
  REJECTED: 'REJECTED'
};

export type EvaluationStatus = (typeof EvaluationStatus)[keyof typeof EvaluationStatus]


export const EventStatus: {
  IN_PREPARATION: 'IN_PREPARATION',
  SUBMISSIONS_OPEN: 'SUBMISSIONS_OPEN',
  IN_EVALUATION: 'IN_EVALUATION',
  FINISHED: 'FINISHED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const EvaluationType: {
  DIRECT: 'DIRECT',
  PAIR: 'PAIR',
  PANEL: 'PANEL'
};

export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType]


export const RoleType: {
  STUDENT: 'STUDENT',
  EVALUATOR: 'EVALUATOR',
  COORDINATOR: 'COORDINATOR'
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType]


export const QuestionType: {
  YES_NO: 'YES_NO',
  SCALE: 'SCALE',
  TEXT: 'TEXT'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]

}

export type ArticleStatus = $Enums.ArticleStatus

export const ArticleStatus: typeof $Enums.ArticleStatus

export type EvaluationStatus = $Enums.EvaluationStatus

export const EvaluationStatus: typeof $Enums.EvaluationStatus

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type EvaluationType = $Enums.EvaluationType

export const EvaluationType: typeof $Enums.EvaluationType

export type RoleType = $Enums.RoleType

export const RoleType: typeof $Enums.RoleType

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleVersion`: Exposes CRUD operations for the **ArticleVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleVersions
    * const articleVersions = await prisma.articleVersion.findMany()
    * ```
    */
  get articleVersion(): Prisma.ArticleVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleKeyword`: Exposes CRUD operations for the **ArticleKeyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleKeywords
    * const articleKeywords = await prisma.articleKeyword.findMany()
    * ```
    */
  get articleKeyword(): Prisma.ArticleKeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatedAuthor`: Exposes CRUD operations for the **RelatedAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelatedAuthors
    * const relatedAuthors = await prisma.relatedAuthor.findMany()
    * ```
    */
  get relatedAuthor(): Prisma.RelatedAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventEvaluator`: Exposes CRUD operations for the **EventEvaluator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventEvaluators
    * const eventEvaluators = await prisma.eventEvaluator.findMany()
    * ```
    */
  get eventEvaluator(): Prisma.EventEvaluatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleEvaluatorAssignment`: Exposes CRUD operations for the **ArticleEvaluatorAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleEvaluatorAssignments
    * const articleEvaluatorAssignments = await prisma.articleEvaluatorAssignment.findMany()
    * ```
    */
  get articleEvaluatorAssignment(): Prisma.ArticleEvaluatorAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklist`: Exposes CRUD operations for the **Checklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checklists
    * const checklists = await prisma.checklist.findMany()
    * ```
    */
  get checklist(): Prisma.ChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionResponse`: Exposes CRUD operations for the **QuestionResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionResponses
    * const questionResponses = await prisma.questionResponse.findMany()
    * ```
    */
  get questionResponse(): Prisma.QuestionResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Event: 'Event',
    Article: 'Article',
    ArticleVersion: 'ArticleVersion',
    ArticleKeyword: 'ArticleKeyword',
    RelatedAuthor: 'RelatedAuthor',
    Evaluation: 'Evaluation',
    EventEvaluator: 'EventEvaluator',
    ArticleEvaluatorAssignment: 'ArticleEvaluatorAssignment',
    Checklist: 'Checklist',
    Question: 'Question',
    QuestionResponse: 'QuestionResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "article" | "articleVersion" | "articleKeyword" | "relatedAuthor" | "evaluation" | "eventEvaluator" | "articleEvaluatorAssignment" | "checklist" | "question" | "questionResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      ArticleVersion: {
        payload: Prisma.$ArticleVersionPayload<ExtArgs>
        fields: Prisma.ArticleVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>
          }
          findFirst: {
            args: Prisma.ArticleVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>
          }
          findMany: {
            args: Prisma.ArticleVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>[]
          }
          create: {
            args: Prisma.ArticleVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>
          }
          createMany: {
            args: Prisma.ArticleVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>[]
          }
          delete: {
            args: Prisma.ArticleVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>
          }
          update: {
            args: Prisma.ArticleVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>
          }
          deleteMany: {
            args: Prisma.ArticleVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>[]
          }
          upsert: {
            args: Prisma.ArticleVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleVersionPayload>
          }
          aggregate: {
            args: Prisma.ArticleVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleVersion>
          }
          groupBy: {
            args: Prisma.ArticleVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleVersionCountAggregateOutputType> | number
          }
        }
      }
      ArticleKeyword: {
        payload: Prisma.$ArticleKeywordPayload<ExtArgs>
        fields: Prisma.ArticleKeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleKeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleKeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>
          }
          findFirst: {
            args: Prisma.ArticleKeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleKeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>
          }
          findMany: {
            args: Prisma.ArticleKeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>[]
          }
          create: {
            args: Prisma.ArticleKeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>
          }
          createMany: {
            args: Prisma.ArticleKeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleKeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>[]
          }
          delete: {
            args: Prisma.ArticleKeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>
          }
          update: {
            args: Prisma.ArticleKeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>
          }
          deleteMany: {
            args: Prisma.ArticleKeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleKeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleKeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>[]
          }
          upsert: {
            args: Prisma.ArticleKeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleKeywordPayload>
          }
          aggregate: {
            args: Prisma.ArticleKeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleKeyword>
          }
          groupBy: {
            args: Prisma.ArticleKeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleKeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleKeywordCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleKeywordCountAggregateOutputType> | number
          }
        }
      }
      RelatedAuthor: {
        payload: Prisma.$RelatedAuthorPayload<ExtArgs>
        fields: Prisma.RelatedAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatedAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatedAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>
          }
          findFirst: {
            args: Prisma.RelatedAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatedAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>
          }
          findMany: {
            args: Prisma.RelatedAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>[]
          }
          create: {
            args: Prisma.RelatedAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>
          }
          createMany: {
            args: Prisma.RelatedAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelatedAuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>[]
          }
          delete: {
            args: Prisma.RelatedAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>
          }
          update: {
            args: Prisma.RelatedAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>
          }
          deleteMany: {
            args: Prisma.RelatedAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatedAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelatedAuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>[]
          }
          upsert: {
            args: Prisma.RelatedAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedAuthorPayload>
          }
          aggregate: {
            args: Prisma.RelatedAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatedAuthor>
          }
          groupBy: {
            args: Prisma.RelatedAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatedAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatedAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<RelatedAuthorCountAggregateOutputType> | number
          }
        }
      }
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      EventEvaluator: {
        payload: Prisma.$EventEvaluatorPayload<ExtArgs>
        fields: Prisma.EventEvaluatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventEvaluatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventEvaluatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>
          }
          findFirst: {
            args: Prisma.EventEvaluatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventEvaluatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>
          }
          findMany: {
            args: Prisma.EventEvaluatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>[]
          }
          create: {
            args: Prisma.EventEvaluatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>
          }
          createMany: {
            args: Prisma.EventEvaluatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventEvaluatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>[]
          }
          delete: {
            args: Prisma.EventEvaluatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>
          }
          update: {
            args: Prisma.EventEvaluatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>
          }
          deleteMany: {
            args: Prisma.EventEvaluatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventEvaluatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventEvaluatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>[]
          }
          upsert: {
            args: Prisma.EventEvaluatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEvaluatorPayload>
          }
          aggregate: {
            args: Prisma.EventEvaluatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventEvaluator>
          }
          groupBy: {
            args: Prisma.EventEvaluatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventEvaluatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventEvaluatorCountArgs<ExtArgs>
            result: $Utils.Optional<EventEvaluatorCountAggregateOutputType> | number
          }
        }
      }
      ArticleEvaluatorAssignment: {
        payload: Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>
        fields: Prisma.ArticleEvaluatorAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleEvaluatorAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleEvaluatorAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ArticleEvaluatorAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleEvaluatorAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>
          }
          findMany: {
            args: Prisma.ArticleEvaluatorAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>[]
          }
          create: {
            args: Prisma.ArticleEvaluatorAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>
          }
          createMany: {
            args: Prisma.ArticleEvaluatorAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleEvaluatorAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ArticleEvaluatorAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>
          }
          update: {
            args: Prisma.ArticleEvaluatorAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ArticleEvaluatorAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleEvaluatorAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleEvaluatorAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ArticleEvaluatorAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleEvaluatorAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ArticleEvaluatorAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleEvaluatorAssignment>
          }
          groupBy: {
            args: Prisma.ArticleEvaluatorAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleEvaluatorAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleEvaluatorAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleEvaluatorAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Checklist: {
        payload: Prisma.$ChecklistPayload<ExtArgs>
        fields: Prisma.ChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findFirst: {
            args: Prisma.ChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findMany: {
            args: Prisma.ChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          create: {
            args: Prisma.ChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          createMany: {
            args: Prisma.ChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          delete: {
            args: Prisma.ChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          update: {
            args: Prisma.ChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          aggregate: {
            args: Prisma.ChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklist>
          }
          groupBy: {
            args: Prisma.ChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionResponse: {
        payload: Prisma.$QuestionResponsePayload<ExtArgs>
        fields: Prisma.QuestionResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          findFirst: {
            args: Prisma.QuestionResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          findMany: {
            args: Prisma.QuestionResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          create: {
            args: Prisma.QuestionResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          createMany: {
            args: Prisma.QuestionResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          delete: {
            args: Prisma.QuestionResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          update: {
            args: Prisma.QuestionResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          deleteMany: {
            args: Prisma.QuestionResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          upsert: {
            args: Prisma.QuestionResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          aggregate: {
            args: Prisma.QuestionResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionResponse>
          }
          groupBy: {
            args: Prisma.QuestionResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionResponseCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    article?: ArticleOmit
    articleVersion?: ArticleVersionOmit
    articleKeyword?: ArticleKeywordOmit
    relatedAuthor?: RelatedAuthorOmit
    evaluation?: EvaluationOmit
    eventEvaluator?: EventEvaluatorOmit
    articleEvaluatorAssignment?: ArticleEvaluatorAssignmentOmit
    checklist?: ChecklistOmit
    question?: QuestionOmit
    questionResponse?: QuestionResponseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    articles: number
    evaluations: number
    eventEvaluators: number
    questionResponses: number
    articleAssignments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    evaluations?: boolean | UserCountOutputTypeCountEvaluationsArgs
    eventEvaluators?: boolean | UserCountOutputTypeCountEventEvaluatorsArgs
    questionResponses?: boolean | UserCountOutputTypeCountQuestionResponsesArgs
    articleAssignments?: boolean | UserCountOutputTypeCountArticleAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventEvaluatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventEvaluatorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleEvaluatorAssignmentWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    articles: number
    eventEvaluators: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | EventCountOutputTypeCountArticlesArgs
    eventEvaluators?: boolean | EventCountOutputTypeCountEventEvaluatorsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventEvaluatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventEvaluatorWhereInput
  }


  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    versions: number
    keywords: number
    relatedAuthors: number
    evaluatorAssignments: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | ArticleCountOutputTypeCountVersionsArgs
    keywords?: boolean | ArticleCountOutputTypeCountKeywordsArgs
    relatedAuthors?: boolean | ArticleCountOutputTypeCountRelatedAuthorsArgs
    evaluatorAssignments?: boolean | ArticleCountOutputTypeCountEvaluatorAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleVersionWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleKeywordWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountRelatedAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedAuthorWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountEvaluatorAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleEvaluatorAssignmentWhereInput
  }


  /**
   * Count Type ArticleVersionCountOutputType
   */

  export type ArticleVersionCountOutputType = {
    evaluations: number
    questionResponses: number
  }

  export type ArticleVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | ArticleVersionCountOutputTypeCountEvaluationsArgs
    questionResponses?: boolean | ArticleVersionCountOutputTypeCountQuestionResponsesArgs
  }

  // Custom InputTypes
  /**
   * ArticleVersionCountOutputType without action
   */
  export type ArticleVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersionCountOutputType
     */
    select?: ArticleVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleVersionCountOutputType without action
   */
  export type ArticleVersionCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * ArticleVersionCountOutputType without action
   */
  export type ArticleVersionCountOutputTypeCountQuestionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
  }


  /**
   * Count Type EventEvaluatorCountOutputType
   */

  export type EventEvaluatorCountOutputType = {
    articleAssignments: number
  }

  export type EventEvaluatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articleAssignments?: boolean | EventEvaluatorCountOutputTypeCountArticleAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * EventEvaluatorCountOutputType without action
   */
  export type EventEvaluatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluatorCountOutputType
     */
    select?: EventEvaluatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventEvaluatorCountOutputType without action
   */
  export type EventEvaluatorCountOutputTypeCountArticleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleEvaluatorAssignmentWhereInput
  }


  /**
   * Count Type ChecklistCountOutputType
   */

  export type ChecklistCountOutputType = {
    questions: number
    events: number
  }

  export type ChecklistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ChecklistCountOutputTypeCountQuestionsArgs
    events?: boolean | ChecklistCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCountOutputType
     */
    select?: ChecklistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    questionResponses: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionResponses?: boolean | QuestionCountOutputTypeCountQuestionResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.RoleType | null
    isFirstLogin: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isFromBpk: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.RoleType | null
    isFirstLogin: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isFromBpk: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    isFirstLogin: number
    isActive: number
    createdAt: number
    updatedAt: number
    isFromBpk: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isFirstLogin?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    isFromBpk?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isFirstLogin?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    isFromBpk?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isFirstLogin?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    isFromBpk?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.RoleType
    isFirstLogin: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    isFromBpk: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isFromBpk?: boolean
    articles?: boolean | User$articlesArgs<ExtArgs>
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    eventEvaluators?: boolean | User$eventEvaluatorsArgs<ExtArgs>
    questionResponses?: boolean | User$questionResponsesArgs<ExtArgs>
    articleAssignments?: boolean | User$articleAssignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isFromBpk?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isFromBpk?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isFromBpk?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "isFirstLogin" | "isActive" | "createdAt" | "updatedAt" | "isFromBpk", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | User$articlesArgs<ExtArgs>
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    eventEvaluators?: boolean | User$eventEvaluatorsArgs<ExtArgs>
    questionResponses?: boolean | User$questionResponsesArgs<ExtArgs>
    articleAssignments?: boolean | User$articleAssignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      eventEvaluators: Prisma.$EventEvaluatorPayload<ExtArgs>[]
      questionResponses: Prisma.$QuestionResponsePayload<ExtArgs>[]
      articleAssignments: Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.RoleType
      isFirstLogin: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      isFromBpk: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluations<T extends User$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, User$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventEvaluators<T extends User$eventEvaluatorsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventEvaluatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionResponses<T extends User$questionResponsesArgs<ExtArgs> = {}>(args?: Subset<T, User$questionResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articleAssignments<T extends User$articleAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$articleAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'RoleType'>
    readonly isFirstLogin: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isFromBpk: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * User.evaluations
   */
  export type User$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * User.eventEvaluators
   */
  export type User$eventEvaluatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    where?: EventEvaluatorWhereInput
    orderBy?: EventEvaluatorOrderByWithRelationInput | EventEvaluatorOrderByWithRelationInput[]
    cursor?: EventEvaluatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventEvaluatorScalarFieldEnum | EventEvaluatorScalarFieldEnum[]
  }

  /**
   * User.questionResponses
   */
  export type User$questionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    cursor?: QuestionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * User.articleAssignments
   */
  export type User$articleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    where?: ArticleEvaluatorAssignmentWhereInput
    orderBy?: ArticleEvaluatorAssignmentOrderByWithRelationInput | ArticleEvaluatorAssignmentOrderByWithRelationInput[]
    cursor?: ArticleEvaluatorAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleEvaluatorAssignmentScalarFieldEnum | ArticleEvaluatorAssignmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    banner: string | null
    description: string | null
    eventStartDate: Date | null
    eventEndDate: Date | null
    submissionStartDate: Date | null
    submissionEndDate: Date | null
    status: $Enums.EventStatus | null
    evaluationType: $Enums.EvaluationType | null
    isActive: boolean | null
    checklistId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    banner: string | null
    description: string | null
    eventStartDate: Date | null
    eventEndDate: Date | null
    submissionStartDate: Date | null
    submissionEndDate: Date | null
    status: $Enums.EventStatus | null
    evaluationType: $Enums.EvaluationType | null
    isActive: boolean | null
    checklistId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    banner: number
    description: number
    eventStartDate: number
    eventEndDate: number
    submissionStartDate: number
    submissionEndDate: number
    status: number
    evaluationType: number
    isActive: number
    checklistId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    banner?: true
    description?: true
    eventStartDate?: true
    eventEndDate?: true
    submissionStartDate?: true
    submissionEndDate?: true
    status?: true
    evaluationType?: true
    isActive?: true
    checklistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    banner?: true
    description?: true
    eventStartDate?: true
    eventEndDate?: true
    submissionStartDate?: true
    submissionEndDate?: true
    status?: true
    evaluationType?: true
    isActive?: true
    checklistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    banner?: true
    description?: true
    eventStartDate?: true
    eventEndDate?: true
    submissionStartDate?: true
    submissionEndDate?: true
    status?: true
    evaluationType?: true
    isActive?: true
    checklistId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    banner: string | null
    description: string | null
    eventStartDate: Date
    eventEndDate: Date
    submissionStartDate: Date
    submissionEndDate: Date
    status: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive: boolean
    checklistId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    banner?: boolean
    description?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    submissionStartDate?: boolean
    submissionEndDate?: boolean
    status?: boolean
    evaluationType?: boolean
    isActive?: boolean
    checklistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articles?: boolean | Event$articlesArgs<ExtArgs>
    eventEvaluators?: boolean | Event$eventEvaluatorsArgs<ExtArgs>
    checklist?: boolean | Event$checklistArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    banner?: boolean
    description?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    submissionStartDate?: boolean
    submissionEndDate?: boolean
    status?: boolean
    evaluationType?: boolean
    isActive?: boolean
    checklistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checklist?: boolean | Event$checklistArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    banner?: boolean
    description?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    submissionStartDate?: boolean
    submissionEndDate?: boolean
    status?: boolean
    evaluationType?: boolean
    isActive?: boolean
    checklistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checklist?: boolean | Event$checklistArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    banner?: boolean
    description?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    submissionStartDate?: boolean
    submissionEndDate?: boolean
    status?: boolean
    evaluationType?: boolean
    isActive?: boolean
    checklistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "banner" | "description" | "eventStartDate" | "eventEndDate" | "submissionStartDate" | "submissionEndDate" | "status" | "evaluationType" | "isActive" | "checklistId" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Event$articlesArgs<ExtArgs>
    eventEvaluators?: boolean | Event$eventEvaluatorsArgs<ExtArgs>
    checklist?: boolean | Event$checklistArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | Event$checklistArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | Event$checklistArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      eventEvaluators: Prisma.$EventEvaluatorPayload<ExtArgs>[]
      checklist: Prisma.$ChecklistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      banner: string | null
      description: string | null
      eventStartDate: Date
      eventEndDate: Date
      submissionStartDate: Date
      submissionEndDate: Date
      status: $Enums.EventStatus
      evaluationType: $Enums.EvaluationType
      isActive: boolean
      checklistId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Event$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Event$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventEvaluators<T extends Event$eventEvaluatorsArgs<ExtArgs> = {}>(args?: Subset<T, Event$eventEvaluatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checklist<T extends Event$checklistArgs<ExtArgs> = {}>(args?: Subset<T, Event$checklistArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly banner: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly eventStartDate: FieldRef<"Event", 'DateTime'>
    readonly eventEndDate: FieldRef<"Event", 'DateTime'>
    readonly submissionStartDate: FieldRef<"Event", 'DateTime'>
    readonly submissionEndDate: FieldRef<"Event", 'DateTime'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly evaluationType: FieldRef<"Event", 'EvaluationType'>
    readonly isActive: FieldRef<"Event", 'Boolean'>
    readonly checklistId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.articles
   */
  export type Event$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Event.eventEvaluators
   */
  export type Event$eventEvaluatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    where?: EventEvaluatorWhereInput
    orderBy?: EventEvaluatorOrderByWithRelationInput | EventEvaluatorOrderByWithRelationInput[]
    cursor?: EventEvaluatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventEvaluatorScalarFieldEnum | EventEvaluatorScalarFieldEnum[]
  }

  /**
   * Event.checklist
   */
  export type Event$checklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    currentVersion: number | null
    evaluationsDone: number | null
  }

  export type ArticleSumAggregateOutputType = {
    currentVersion: number | null
    evaluationsDone: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    thematicArea: string | null
    currentVersion: number | null
    evaluationsDone: number | null
    status: $Enums.ArticleStatus | null
    eventId: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    thematicArea: string | null
    currentVersion: number | null
    evaluationsDone: number | null
    status: $Enums.ArticleStatus | null
    eventId: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    thematicArea: number
    currentVersion: number
    evaluationsDone: number
    status: number
    eventId: number
    userId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    currentVersion?: true
    evaluationsDone?: true
  }

  export type ArticleSumAggregateInputType = {
    currentVersion?: true
    evaluationsDone?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    thematicArea?: true
    currentVersion?: true
    evaluationsDone?: true
    status?: true
    eventId?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    thematicArea?: true
    currentVersion?: true
    evaluationsDone?: true
    status?: true
    eventId?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    thematicArea?: true
    currentVersion?: true
    evaluationsDone?: true
    status?: true
    eventId?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    title: string
    summary: string
    thematicArea: string | null
    currentVersion: number
    evaluationsDone: number
    status: $Enums.ArticleStatus
    eventId: string
    userId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    thematicArea?: boolean
    currentVersion?: boolean
    evaluationsDone?: boolean
    status?: boolean
    eventId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Article$versionsArgs<ExtArgs>
    keywords?: boolean | Article$keywordsArgs<ExtArgs>
    relatedAuthors?: boolean | Article$relatedAuthorsArgs<ExtArgs>
    evaluatorAssignments?: boolean | Article$evaluatorAssignmentsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    thematicArea?: boolean
    currentVersion?: boolean
    evaluationsDone?: boolean
    status?: boolean
    eventId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    thematicArea?: boolean
    currentVersion?: boolean
    evaluationsDone?: boolean
    status?: boolean
    eventId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    thematicArea?: boolean
    currentVersion?: boolean
    evaluationsDone?: boolean
    status?: boolean
    eventId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "summary" | "thematicArea" | "currentVersion" | "evaluationsDone" | "status" | "eventId" | "userId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Article$versionsArgs<ExtArgs>
    keywords?: boolean | Article$keywordsArgs<ExtArgs>
    relatedAuthors?: boolean | Article$relatedAuthorsArgs<ExtArgs>
    evaluatorAssignments?: boolean | Article$evaluatorAssignmentsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      versions: Prisma.$ArticleVersionPayload<ExtArgs>[]
      keywords: Prisma.$ArticleKeywordPayload<ExtArgs>[]
      relatedAuthors: Prisma.$RelatedAuthorPayload<ExtArgs>[]
      evaluatorAssignments: Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      summary: string
      thematicArea: string | null
      currentVersion: number
      evaluationsDone: number
      status: $Enums.ArticleStatus
      eventId: string
      userId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    versions<T extends Article$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Article$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keywords<T extends Article$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, Article$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedAuthors<T extends Article$relatedAuthorsArgs<ExtArgs> = {}>(args?: Subset<T, Article$relatedAuthorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluatorAssignments<T extends Article$evaluatorAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Article$evaluatorAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly summary: FieldRef<"Article", 'String'>
    readonly thematicArea: FieldRef<"Article", 'String'>
    readonly currentVersion: FieldRef<"Article", 'Int'>
    readonly evaluationsDone: FieldRef<"Article", 'Int'>
    readonly status: FieldRef<"Article", 'ArticleStatus'>
    readonly eventId: FieldRef<"Article", 'String'>
    readonly userId: FieldRef<"Article", 'String'>
    readonly isActive: FieldRef<"Article", 'Boolean'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.versions
   */
  export type Article$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    where?: ArticleVersionWhereInput
    orderBy?: ArticleVersionOrderByWithRelationInput | ArticleVersionOrderByWithRelationInput[]
    cursor?: ArticleVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleVersionScalarFieldEnum | ArticleVersionScalarFieldEnum[]
  }

  /**
   * Article.keywords
   */
  export type Article$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    where?: ArticleKeywordWhereInput
    orderBy?: ArticleKeywordOrderByWithRelationInput | ArticleKeywordOrderByWithRelationInput[]
    cursor?: ArticleKeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleKeywordScalarFieldEnum | ArticleKeywordScalarFieldEnum[]
  }

  /**
   * Article.relatedAuthors
   */
  export type Article$relatedAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    where?: RelatedAuthorWhereInput
    orderBy?: RelatedAuthorOrderByWithRelationInput | RelatedAuthorOrderByWithRelationInput[]
    cursor?: RelatedAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatedAuthorScalarFieldEnum | RelatedAuthorScalarFieldEnum[]
  }

  /**
   * Article.evaluatorAssignments
   */
  export type Article$evaluatorAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    where?: ArticleEvaluatorAssignmentWhereInput
    orderBy?: ArticleEvaluatorAssignmentOrderByWithRelationInput | ArticleEvaluatorAssignmentOrderByWithRelationInput[]
    cursor?: ArticleEvaluatorAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleEvaluatorAssignmentScalarFieldEnum | ArticleEvaluatorAssignmentScalarFieldEnum[]
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model ArticleVersion
   */

  export type AggregateArticleVersion = {
    _count: ArticleVersionCountAggregateOutputType | null
    _avg: ArticleVersionAvgAggregateOutputType | null
    _sum: ArticleVersionSumAggregateOutputType | null
    _min: ArticleVersionMinAggregateOutputType | null
    _max: ArticleVersionMaxAggregateOutputType | null
  }

  export type ArticleVersionAvgAggregateOutputType = {
    version: number | null
  }

  export type ArticleVersionSumAggregateOutputType = {
    version: number | null
  }

  export type ArticleVersionMinAggregateOutputType = {
    id: string | null
    version: number | null
    pdfPath: string | null
    articleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleVersionMaxAggregateOutputType = {
    id: string | null
    version: number | null
    pdfPath: string | null
    articleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleVersionCountAggregateOutputType = {
    id: number
    version: number
    pdfPath: number
    articleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleVersionAvgAggregateInputType = {
    version?: true
  }

  export type ArticleVersionSumAggregateInputType = {
    version?: true
  }

  export type ArticleVersionMinAggregateInputType = {
    id?: true
    version?: true
    pdfPath?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleVersionMaxAggregateInputType = {
    id?: true
    version?: true
    pdfPath?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleVersionCountAggregateInputType = {
    id?: true
    version?: true
    pdfPath?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleVersion to aggregate.
     */
    where?: ArticleVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleVersions to fetch.
     */
    orderBy?: ArticleVersionOrderByWithRelationInput | ArticleVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleVersions
    **/
    _count?: true | ArticleVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleVersionMaxAggregateInputType
  }

  export type GetArticleVersionAggregateType<T extends ArticleVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleVersion[P]>
      : GetScalarType<T[P], AggregateArticleVersion[P]>
  }




  export type ArticleVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleVersionWhereInput
    orderBy?: ArticleVersionOrderByWithAggregationInput | ArticleVersionOrderByWithAggregationInput[]
    by: ArticleVersionScalarFieldEnum[] | ArticleVersionScalarFieldEnum
    having?: ArticleVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleVersionCountAggregateInputType | true
    _avg?: ArticleVersionAvgAggregateInputType
    _sum?: ArticleVersionSumAggregateInputType
    _min?: ArticleVersionMinAggregateInputType
    _max?: ArticleVersionMaxAggregateInputType
  }

  export type ArticleVersionGroupByOutputType = {
    id: string
    version: number
    pdfPath: string
    articleId: string
    createdAt: Date
    updatedAt: Date
    _count: ArticleVersionCountAggregateOutputType | null
    _avg: ArticleVersionAvgAggregateOutputType | null
    _sum: ArticleVersionSumAggregateOutputType | null
    _min: ArticleVersionMinAggregateOutputType | null
    _max: ArticleVersionMaxAggregateOutputType | null
  }

  type GetArticleVersionGroupByPayload<T extends ArticleVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleVersionGroupByOutputType[P]>
        }
      >
    >


  export type ArticleVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    pdfPath?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    evaluations?: boolean | ArticleVersion$evaluationsArgs<ExtArgs>
    questionResponses?: boolean | ArticleVersion$questionResponsesArgs<ExtArgs>
    _count?: boolean | ArticleVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleVersion"]>

  export type ArticleVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    pdfPath?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleVersion"]>

  export type ArticleVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    pdfPath?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleVersion"]>

  export type ArticleVersionSelectScalar = {
    id?: boolean
    version?: boolean
    pdfPath?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "pdfPath" | "articleId" | "createdAt" | "updatedAt", ExtArgs["result"]["articleVersion"]>
  export type ArticleVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    evaluations?: boolean | ArticleVersion$evaluationsArgs<ExtArgs>
    questionResponses?: boolean | ArticleVersion$questionResponsesArgs<ExtArgs>
    _count?: boolean | ArticleVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ArticleVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $ArticleVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleVersion"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      questionResponses: Prisma.$QuestionResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      version: number
      pdfPath: string
      articleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleVersion"]>
    composites: {}
  }

  type ArticleVersionGetPayload<S extends boolean | null | undefined | ArticleVersionDefaultArgs> = $Result.GetResult<Prisma.$ArticleVersionPayload, S>

  type ArticleVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleVersionCountAggregateInputType | true
    }

  export interface ArticleVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleVersion'], meta: { name: 'ArticleVersion' } }
    /**
     * Find zero or one ArticleVersion that matches the filter.
     * @param {ArticleVersionFindUniqueArgs} args - Arguments to find a ArticleVersion
     * @example
     * // Get one ArticleVersion
     * const articleVersion = await prisma.articleVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleVersionFindUniqueArgs>(args: SelectSubset<T, ArticleVersionFindUniqueArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleVersionFindUniqueOrThrowArgs} args - Arguments to find a ArticleVersion
     * @example
     * // Get one ArticleVersion
     * const articleVersion = await prisma.articleVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleVersionFindFirstArgs} args - Arguments to find a ArticleVersion
     * @example
     * // Get one ArticleVersion
     * const articleVersion = await prisma.articleVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleVersionFindFirstArgs>(args?: SelectSubset<T, ArticleVersionFindFirstArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleVersionFindFirstOrThrowArgs} args - Arguments to find a ArticleVersion
     * @example
     * // Get one ArticleVersion
     * const articleVersion = await prisma.articleVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleVersions
     * const articleVersions = await prisma.articleVersion.findMany()
     * 
     * // Get first 10 ArticleVersions
     * const articleVersions = await prisma.articleVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleVersionWithIdOnly = await prisma.articleVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleVersionFindManyArgs>(args?: SelectSubset<T, ArticleVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleVersion.
     * @param {ArticleVersionCreateArgs} args - Arguments to create a ArticleVersion.
     * @example
     * // Create one ArticleVersion
     * const ArticleVersion = await prisma.articleVersion.create({
     *   data: {
     *     // ... data to create a ArticleVersion
     *   }
     * })
     * 
     */
    create<T extends ArticleVersionCreateArgs>(args: SelectSubset<T, ArticleVersionCreateArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleVersions.
     * @param {ArticleVersionCreateManyArgs} args - Arguments to create many ArticleVersions.
     * @example
     * // Create many ArticleVersions
     * const articleVersion = await prisma.articleVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleVersionCreateManyArgs>(args?: SelectSubset<T, ArticleVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleVersions and returns the data saved in the database.
     * @param {ArticleVersionCreateManyAndReturnArgs} args - Arguments to create many ArticleVersions.
     * @example
     * // Create many ArticleVersions
     * const articleVersion = await prisma.articleVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleVersions and only return the `id`
     * const articleVersionWithIdOnly = await prisma.articleVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleVersion.
     * @param {ArticleVersionDeleteArgs} args - Arguments to delete one ArticleVersion.
     * @example
     * // Delete one ArticleVersion
     * const ArticleVersion = await prisma.articleVersion.delete({
     *   where: {
     *     // ... filter to delete one ArticleVersion
     *   }
     * })
     * 
     */
    delete<T extends ArticleVersionDeleteArgs>(args: SelectSubset<T, ArticleVersionDeleteArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleVersion.
     * @param {ArticleVersionUpdateArgs} args - Arguments to update one ArticleVersion.
     * @example
     * // Update one ArticleVersion
     * const articleVersion = await prisma.articleVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleVersionUpdateArgs>(args: SelectSubset<T, ArticleVersionUpdateArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleVersions.
     * @param {ArticleVersionDeleteManyArgs} args - Arguments to filter ArticleVersions to delete.
     * @example
     * // Delete a few ArticleVersions
     * const { count } = await prisma.articleVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleVersionDeleteManyArgs>(args?: SelectSubset<T, ArticleVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleVersions
     * const articleVersion = await prisma.articleVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleVersionUpdateManyArgs>(args: SelectSubset<T, ArticleVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleVersions and returns the data updated in the database.
     * @param {ArticleVersionUpdateManyAndReturnArgs} args - Arguments to update many ArticleVersions.
     * @example
     * // Update many ArticleVersions
     * const articleVersion = await prisma.articleVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleVersions and only return the `id`
     * const articleVersionWithIdOnly = await prisma.articleVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleVersion.
     * @param {ArticleVersionUpsertArgs} args - Arguments to update or create a ArticleVersion.
     * @example
     * // Update or create a ArticleVersion
     * const articleVersion = await prisma.articleVersion.upsert({
     *   create: {
     *     // ... data to create a ArticleVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleVersion we want to update
     *   }
     * })
     */
    upsert<T extends ArticleVersionUpsertArgs>(args: SelectSubset<T, ArticleVersionUpsertArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleVersionCountArgs} args - Arguments to filter ArticleVersions to count.
     * @example
     * // Count the number of ArticleVersions
     * const count = await prisma.articleVersion.count({
     *   where: {
     *     // ... the filter for the ArticleVersions we want to count
     *   }
     * })
    **/
    count<T extends ArticleVersionCountArgs>(
      args?: Subset<T, ArticleVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleVersionAggregateArgs>(args: Subset<T, ArticleVersionAggregateArgs>): Prisma.PrismaPromise<GetArticleVersionAggregateType<T>>

    /**
     * Group by ArticleVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleVersionGroupByArgs['orderBy'] }
        : { orderBy?: ArticleVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleVersion model
   */
  readonly fields: ArticleVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluations<T extends ArticleVersion$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, ArticleVersion$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionResponses<T extends ArticleVersion$questionResponsesArgs<ExtArgs> = {}>(args?: Subset<T, ArticleVersion$questionResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleVersion model
   */
  interface ArticleVersionFieldRefs {
    readonly id: FieldRef<"ArticleVersion", 'String'>
    readonly version: FieldRef<"ArticleVersion", 'Int'>
    readonly pdfPath: FieldRef<"ArticleVersion", 'String'>
    readonly articleId: FieldRef<"ArticleVersion", 'String'>
    readonly createdAt: FieldRef<"ArticleVersion", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleVersion findUnique
   */
  export type ArticleVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArticleVersion to fetch.
     */
    where: ArticleVersionWhereUniqueInput
  }

  /**
   * ArticleVersion findUniqueOrThrow
   */
  export type ArticleVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArticleVersion to fetch.
     */
    where: ArticleVersionWhereUniqueInput
  }

  /**
   * ArticleVersion findFirst
   */
  export type ArticleVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArticleVersion to fetch.
     */
    where?: ArticleVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleVersions to fetch.
     */
    orderBy?: ArticleVersionOrderByWithRelationInput | ArticleVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleVersions.
     */
    cursor?: ArticleVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleVersions.
     */
    distinct?: ArticleVersionScalarFieldEnum | ArticleVersionScalarFieldEnum[]
  }

  /**
   * ArticleVersion findFirstOrThrow
   */
  export type ArticleVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArticleVersion to fetch.
     */
    where?: ArticleVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleVersions to fetch.
     */
    orderBy?: ArticleVersionOrderByWithRelationInput | ArticleVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleVersions.
     */
    cursor?: ArticleVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleVersions.
     */
    distinct?: ArticleVersionScalarFieldEnum | ArticleVersionScalarFieldEnum[]
  }

  /**
   * ArticleVersion findMany
   */
  export type ArticleVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArticleVersions to fetch.
     */
    where?: ArticleVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleVersions to fetch.
     */
    orderBy?: ArticleVersionOrderByWithRelationInput | ArticleVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleVersions.
     */
    cursor?: ArticleVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleVersions.
     */
    skip?: number
    distinct?: ArticleVersionScalarFieldEnum | ArticleVersionScalarFieldEnum[]
  }

  /**
   * ArticleVersion create
   */
  export type ArticleVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleVersion.
     */
    data: XOR<ArticleVersionCreateInput, ArticleVersionUncheckedCreateInput>
  }

  /**
   * ArticleVersion createMany
   */
  export type ArticleVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleVersions.
     */
    data: ArticleVersionCreateManyInput | ArticleVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleVersion createManyAndReturn
   */
  export type ArticleVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleVersions.
     */
    data: ArticleVersionCreateManyInput | ArticleVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleVersion update
   */
  export type ArticleVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleVersion.
     */
    data: XOR<ArticleVersionUpdateInput, ArticleVersionUncheckedUpdateInput>
    /**
     * Choose, which ArticleVersion to update.
     */
    where: ArticleVersionWhereUniqueInput
  }

  /**
   * ArticleVersion updateMany
   */
  export type ArticleVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleVersions.
     */
    data: XOR<ArticleVersionUpdateManyMutationInput, ArticleVersionUncheckedUpdateManyInput>
    /**
     * Filter which ArticleVersions to update
     */
    where?: ArticleVersionWhereInput
    /**
     * Limit how many ArticleVersions to update.
     */
    limit?: number
  }

  /**
   * ArticleVersion updateManyAndReturn
   */
  export type ArticleVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * The data used to update ArticleVersions.
     */
    data: XOR<ArticleVersionUpdateManyMutationInput, ArticleVersionUncheckedUpdateManyInput>
    /**
     * Filter which ArticleVersions to update
     */
    where?: ArticleVersionWhereInput
    /**
     * Limit how many ArticleVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleVersion upsert
   */
  export type ArticleVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleVersion to update in case it exists.
     */
    where: ArticleVersionWhereUniqueInput
    /**
     * In case the ArticleVersion found by the `where` argument doesn't exist, create a new ArticleVersion with this data.
     */
    create: XOR<ArticleVersionCreateInput, ArticleVersionUncheckedCreateInput>
    /**
     * In case the ArticleVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleVersionUpdateInput, ArticleVersionUncheckedUpdateInput>
  }

  /**
   * ArticleVersion delete
   */
  export type ArticleVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
    /**
     * Filter which ArticleVersion to delete.
     */
    where: ArticleVersionWhereUniqueInput
  }

  /**
   * ArticleVersion deleteMany
   */
  export type ArticleVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleVersions to delete
     */
    where?: ArticleVersionWhereInput
    /**
     * Limit how many ArticleVersions to delete.
     */
    limit?: number
  }

  /**
   * ArticleVersion.evaluations
   */
  export type ArticleVersion$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * ArticleVersion.questionResponses
   */
  export type ArticleVersion$questionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    cursor?: QuestionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * ArticleVersion without action
   */
  export type ArticleVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleVersion
     */
    select?: ArticleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleVersion
     */
    omit?: ArticleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleVersionInclude<ExtArgs> | null
  }


  /**
   * Model ArticleKeyword
   */

  export type AggregateArticleKeyword = {
    _count: ArticleKeywordCountAggregateOutputType | null
    _min: ArticleKeywordMinAggregateOutputType | null
    _max: ArticleKeywordMaxAggregateOutputType | null
  }

  export type ArticleKeywordMinAggregateOutputType = {
    id: string | null
    name: string | null
    articleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleKeywordMaxAggregateOutputType = {
    id: string | null
    name: string | null
    articleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleKeywordCountAggregateOutputType = {
    id: number
    name: number
    articleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleKeywordMinAggregateInputType = {
    id?: true
    name?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleKeywordMaxAggregateInputType = {
    id?: true
    name?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleKeywordCountAggregateInputType = {
    id?: true
    name?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleKeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleKeyword to aggregate.
     */
    where?: ArticleKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleKeywords to fetch.
     */
    orderBy?: ArticleKeywordOrderByWithRelationInput | ArticleKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleKeywords
    **/
    _count?: true | ArticleKeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleKeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleKeywordMaxAggregateInputType
  }

  export type GetArticleKeywordAggregateType<T extends ArticleKeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleKeyword[P]>
      : GetScalarType<T[P], AggregateArticleKeyword[P]>
  }




  export type ArticleKeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleKeywordWhereInput
    orderBy?: ArticleKeywordOrderByWithAggregationInput | ArticleKeywordOrderByWithAggregationInput[]
    by: ArticleKeywordScalarFieldEnum[] | ArticleKeywordScalarFieldEnum
    having?: ArticleKeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleKeywordCountAggregateInputType | true
    _min?: ArticleKeywordMinAggregateInputType
    _max?: ArticleKeywordMaxAggregateInputType
  }

  export type ArticleKeywordGroupByOutputType = {
    id: string
    name: string
    articleId: string
    createdAt: Date
    updatedAt: Date
    _count: ArticleKeywordCountAggregateOutputType | null
    _min: ArticleKeywordMinAggregateOutputType | null
    _max: ArticleKeywordMaxAggregateOutputType | null
  }

  type GetArticleKeywordGroupByPayload<T extends ArticleKeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleKeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleKeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleKeywordGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleKeywordGroupByOutputType[P]>
        }
      >
    >


  export type ArticleKeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleKeyword"]>

  export type ArticleKeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleKeyword"]>

  export type ArticleKeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleKeyword"]>

  export type ArticleKeywordSelectScalar = {
    id?: boolean
    name?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleKeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "articleId" | "createdAt" | "updatedAt", ExtArgs["result"]["articleKeyword"]>
  export type ArticleKeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ArticleKeywordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ArticleKeywordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $ArticleKeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleKeyword"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      articleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleKeyword"]>
    composites: {}
  }

  type ArticleKeywordGetPayload<S extends boolean | null | undefined | ArticleKeywordDefaultArgs> = $Result.GetResult<Prisma.$ArticleKeywordPayload, S>

  type ArticleKeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleKeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleKeywordCountAggregateInputType | true
    }

  export interface ArticleKeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleKeyword'], meta: { name: 'ArticleKeyword' } }
    /**
     * Find zero or one ArticleKeyword that matches the filter.
     * @param {ArticleKeywordFindUniqueArgs} args - Arguments to find a ArticleKeyword
     * @example
     * // Get one ArticleKeyword
     * const articleKeyword = await prisma.articleKeyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleKeywordFindUniqueArgs>(args: SelectSubset<T, ArticleKeywordFindUniqueArgs<ExtArgs>>): Prisma__ArticleKeywordClient<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleKeyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleKeywordFindUniqueOrThrowArgs} args - Arguments to find a ArticleKeyword
     * @example
     * // Get one ArticleKeyword
     * const articleKeyword = await prisma.articleKeyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleKeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleKeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleKeywordClient<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleKeyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleKeywordFindFirstArgs} args - Arguments to find a ArticleKeyword
     * @example
     * // Get one ArticleKeyword
     * const articleKeyword = await prisma.articleKeyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleKeywordFindFirstArgs>(args?: SelectSubset<T, ArticleKeywordFindFirstArgs<ExtArgs>>): Prisma__ArticleKeywordClient<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleKeyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleKeywordFindFirstOrThrowArgs} args - Arguments to find a ArticleKeyword
     * @example
     * // Get one ArticleKeyword
     * const articleKeyword = await prisma.articleKeyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleKeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleKeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleKeywordClient<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleKeywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleKeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleKeywords
     * const articleKeywords = await prisma.articleKeyword.findMany()
     * 
     * // Get first 10 ArticleKeywords
     * const articleKeywords = await prisma.articleKeyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleKeywordWithIdOnly = await prisma.articleKeyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleKeywordFindManyArgs>(args?: SelectSubset<T, ArticleKeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleKeyword.
     * @param {ArticleKeywordCreateArgs} args - Arguments to create a ArticleKeyword.
     * @example
     * // Create one ArticleKeyword
     * const ArticleKeyword = await prisma.articleKeyword.create({
     *   data: {
     *     // ... data to create a ArticleKeyword
     *   }
     * })
     * 
     */
    create<T extends ArticleKeywordCreateArgs>(args: SelectSubset<T, ArticleKeywordCreateArgs<ExtArgs>>): Prisma__ArticleKeywordClient<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleKeywords.
     * @param {ArticleKeywordCreateManyArgs} args - Arguments to create many ArticleKeywords.
     * @example
     * // Create many ArticleKeywords
     * const articleKeyword = await prisma.articleKeyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleKeywordCreateManyArgs>(args?: SelectSubset<T, ArticleKeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleKeywords and returns the data saved in the database.
     * @param {ArticleKeywordCreateManyAndReturnArgs} args - Arguments to create many ArticleKeywords.
     * @example
     * // Create many ArticleKeywords
     * const articleKeyword = await prisma.articleKeyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleKeywords and only return the `id`
     * const articleKeywordWithIdOnly = await prisma.articleKeyword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleKeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleKeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleKeyword.
     * @param {ArticleKeywordDeleteArgs} args - Arguments to delete one ArticleKeyword.
     * @example
     * // Delete one ArticleKeyword
     * const ArticleKeyword = await prisma.articleKeyword.delete({
     *   where: {
     *     // ... filter to delete one ArticleKeyword
     *   }
     * })
     * 
     */
    delete<T extends ArticleKeywordDeleteArgs>(args: SelectSubset<T, ArticleKeywordDeleteArgs<ExtArgs>>): Prisma__ArticleKeywordClient<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleKeyword.
     * @param {ArticleKeywordUpdateArgs} args - Arguments to update one ArticleKeyword.
     * @example
     * // Update one ArticleKeyword
     * const articleKeyword = await prisma.articleKeyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleKeywordUpdateArgs>(args: SelectSubset<T, ArticleKeywordUpdateArgs<ExtArgs>>): Prisma__ArticleKeywordClient<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleKeywords.
     * @param {ArticleKeywordDeleteManyArgs} args - Arguments to filter ArticleKeywords to delete.
     * @example
     * // Delete a few ArticleKeywords
     * const { count } = await prisma.articleKeyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleKeywordDeleteManyArgs>(args?: SelectSubset<T, ArticleKeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleKeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleKeywords
     * const articleKeyword = await prisma.articleKeyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleKeywordUpdateManyArgs>(args: SelectSubset<T, ArticleKeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleKeywords and returns the data updated in the database.
     * @param {ArticleKeywordUpdateManyAndReturnArgs} args - Arguments to update many ArticleKeywords.
     * @example
     * // Update many ArticleKeywords
     * const articleKeyword = await prisma.articleKeyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleKeywords and only return the `id`
     * const articleKeywordWithIdOnly = await prisma.articleKeyword.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleKeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleKeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleKeyword.
     * @param {ArticleKeywordUpsertArgs} args - Arguments to update or create a ArticleKeyword.
     * @example
     * // Update or create a ArticleKeyword
     * const articleKeyword = await prisma.articleKeyword.upsert({
     *   create: {
     *     // ... data to create a ArticleKeyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleKeyword we want to update
     *   }
     * })
     */
    upsert<T extends ArticleKeywordUpsertArgs>(args: SelectSubset<T, ArticleKeywordUpsertArgs<ExtArgs>>): Prisma__ArticleKeywordClient<$Result.GetResult<Prisma.$ArticleKeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleKeywordCountArgs} args - Arguments to filter ArticleKeywords to count.
     * @example
     * // Count the number of ArticleKeywords
     * const count = await prisma.articleKeyword.count({
     *   where: {
     *     // ... the filter for the ArticleKeywords we want to count
     *   }
     * })
    **/
    count<T extends ArticleKeywordCountArgs>(
      args?: Subset<T, ArticleKeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleKeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleKeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleKeywordAggregateArgs>(args: Subset<T, ArticleKeywordAggregateArgs>): Prisma.PrismaPromise<GetArticleKeywordAggregateType<T>>

    /**
     * Group by ArticleKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleKeywordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleKeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleKeywordGroupByArgs['orderBy'] }
        : { orderBy?: ArticleKeywordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleKeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleKeyword model
   */
  readonly fields: ArticleKeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleKeyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleKeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleKeyword model
   */
  interface ArticleKeywordFieldRefs {
    readonly id: FieldRef<"ArticleKeyword", 'String'>
    readonly name: FieldRef<"ArticleKeyword", 'String'>
    readonly articleId: FieldRef<"ArticleKeyword", 'String'>
    readonly createdAt: FieldRef<"ArticleKeyword", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleKeyword", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleKeyword findUnique
   */
  export type ArticleKeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * Filter, which ArticleKeyword to fetch.
     */
    where: ArticleKeywordWhereUniqueInput
  }

  /**
   * ArticleKeyword findUniqueOrThrow
   */
  export type ArticleKeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * Filter, which ArticleKeyword to fetch.
     */
    where: ArticleKeywordWhereUniqueInput
  }

  /**
   * ArticleKeyword findFirst
   */
  export type ArticleKeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * Filter, which ArticleKeyword to fetch.
     */
    where?: ArticleKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleKeywords to fetch.
     */
    orderBy?: ArticleKeywordOrderByWithRelationInput | ArticleKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleKeywords.
     */
    cursor?: ArticleKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleKeywords.
     */
    distinct?: ArticleKeywordScalarFieldEnum | ArticleKeywordScalarFieldEnum[]
  }

  /**
   * ArticleKeyword findFirstOrThrow
   */
  export type ArticleKeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * Filter, which ArticleKeyword to fetch.
     */
    where?: ArticleKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleKeywords to fetch.
     */
    orderBy?: ArticleKeywordOrderByWithRelationInput | ArticleKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleKeywords.
     */
    cursor?: ArticleKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleKeywords.
     */
    distinct?: ArticleKeywordScalarFieldEnum | ArticleKeywordScalarFieldEnum[]
  }

  /**
   * ArticleKeyword findMany
   */
  export type ArticleKeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * Filter, which ArticleKeywords to fetch.
     */
    where?: ArticleKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleKeywords to fetch.
     */
    orderBy?: ArticleKeywordOrderByWithRelationInput | ArticleKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleKeywords.
     */
    cursor?: ArticleKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleKeywords.
     */
    skip?: number
    distinct?: ArticleKeywordScalarFieldEnum | ArticleKeywordScalarFieldEnum[]
  }

  /**
   * ArticleKeyword create
   */
  export type ArticleKeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleKeyword.
     */
    data: XOR<ArticleKeywordCreateInput, ArticleKeywordUncheckedCreateInput>
  }

  /**
   * ArticleKeyword createMany
   */
  export type ArticleKeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleKeywords.
     */
    data: ArticleKeywordCreateManyInput | ArticleKeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleKeyword createManyAndReturn
   */
  export type ArticleKeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleKeywords.
     */
    data: ArticleKeywordCreateManyInput | ArticleKeywordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleKeyword update
   */
  export type ArticleKeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleKeyword.
     */
    data: XOR<ArticleKeywordUpdateInput, ArticleKeywordUncheckedUpdateInput>
    /**
     * Choose, which ArticleKeyword to update.
     */
    where: ArticleKeywordWhereUniqueInput
  }

  /**
   * ArticleKeyword updateMany
   */
  export type ArticleKeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleKeywords.
     */
    data: XOR<ArticleKeywordUpdateManyMutationInput, ArticleKeywordUncheckedUpdateManyInput>
    /**
     * Filter which ArticleKeywords to update
     */
    where?: ArticleKeywordWhereInput
    /**
     * Limit how many ArticleKeywords to update.
     */
    limit?: number
  }

  /**
   * ArticleKeyword updateManyAndReturn
   */
  export type ArticleKeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * The data used to update ArticleKeywords.
     */
    data: XOR<ArticleKeywordUpdateManyMutationInput, ArticleKeywordUncheckedUpdateManyInput>
    /**
     * Filter which ArticleKeywords to update
     */
    where?: ArticleKeywordWhereInput
    /**
     * Limit how many ArticleKeywords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleKeyword upsert
   */
  export type ArticleKeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleKeyword to update in case it exists.
     */
    where: ArticleKeywordWhereUniqueInput
    /**
     * In case the ArticleKeyword found by the `where` argument doesn't exist, create a new ArticleKeyword with this data.
     */
    create: XOR<ArticleKeywordCreateInput, ArticleKeywordUncheckedCreateInput>
    /**
     * In case the ArticleKeyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleKeywordUpdateInput, ArticleKeywordUncheckedUpdateInput>
  }

  /**
   * ArticleKeyword delete
   */
  export type ArticleKeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
    /**
     * Filter which ArticleKeyword to delete.
     */
    where: ArticleKeywordWhereUniqueInput
  }

  /**
   * ArticleKeyword deleteMany
   */
  export type ArticleKeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleKeywords to delete
     */
    where?: ArticleKeywordWhereInput
    /**
     * Limit how many ArticleKeywords to delete.
     */
    limit?: number
  }

  /**
   * ArticleKeyword without action
   */
  export type ArticleKeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleKeyword
     */
    select?: ArticleKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleKeyword
     */
    omit?: ArticleKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleKeywordInclude<ExtArgs> | null
  }


  /**
   * Model RelatedAuthor
   */

  export type AggregateRelatedAuthor = {
    _count: RelatedAuthorCountAggregateOutputType | null
    _min: RelatedAuthorMinAggregateOutputType | null
    _max: RelatedAuthorMaxAggregateOutputType | null
  }

  export type RelatedAuthorMinAggregateOutputType = {
    id: string | null
    coAuthorName: string | null
    articleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelatedAuthorMaxAggregateOutputType = {
    id: string | null
    coAuthorName: string | null
    articleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelatedAuthorCountAggregateOutputType = {
    id: number
    coAuthorName: number
    articleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RelatedAuthorMinAggregateInputType = {
    id?: true
    coAuthorName?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelatedAuthorMaxAggregateInputType = {
    id?: true
    coAuthorName?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelatedAuthorCountAggregateInputType = {
    id?: true
    coAuthorName?: true
    articleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RelatedAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatedAuthor to aggregate.
     */
    where?: RelatedAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedAuthors to fetch.
     */
    orderBy?: RelatedAuthorOrderByWithRelationInput | RelatedAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatedAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelatedAuthors
    **/
    _count?: true | RelatedAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatedAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatedAuthorMaxAggregateInputType
  }

  export type GetRelatedAuthorAggregateType<T extends RelatedAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatedAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatedAuthor[P]>
      : GetScalarType<T[P], AggregateRelatedAuthor[P]>
  }




  export type RelatedAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedAuthorWhereInput
    orderBy?: RelatedAuthorOrderByWithAggregationInput | RelatedAuthorOrderByWithAggregationInput[]
    by: RelatedAuthorScalarFieldEnum[] | RelatedAuthorScalarFieldEnum
    having?: RelatedAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatedAuthorCountAggregateInputType | true
    _min?: RelatedAuthorMinAggregateInputType
    _max?: RelatedAuthorMaxAggregateInputType
  }

  export type RelatedAuthorGroupByOutputType = {
    id: string
    coAuthorName: string
    articleId: string
    createdAt: Date
    updatedAt: Date
    _count: RelatedAuthorCountAggregateOutputType | null
    _min: RelatedAuthorMinAggregateOutputType | null
    _max: RelatedAuthorMaxAggregateOutputType | null
  }

  type GetRelatedAuthorGroupByPayload<T extends RelatedAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatedAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatedAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatedAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], RelatedAuthorGroupByOutputType[P]>
        }
      >
    >


  export type RelatedAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coAuthorName?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedAuthor"]>

  export type RelatedAuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coAuthorName?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedAuthor"]>

  export type RelatedAuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coAuthorName?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedAuthor"]>

  export type RelatedAuthorSelectScalar = {
    id?: boolean
    coAuthorName?: boolean
    articleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RelatedAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coAuthorName" | "articleId" | "createdAt" | "updatedAt", ExtArgs["result"]["relatedAuthor"]>
  export type RelatedAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type RelatedAuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type RelatedAuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $RelatedAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelatedAuthor"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coAuthorName: string
      articleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["relatedAuthor"]>
    composites: {}
  }

  type RelatedAuthorGetPayload<S extends boolean | null | undefined | RelatedAuthorDefaultArgs> = $Result.GetResult<Prisma.$RelatedAuthorPayload, S>

  type RelatedAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatedAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatedAuthorCountAggregateInputType | true
    }

  export interface RelatedAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelatedAuthor'], meta: { name: 'RelatedAuthor' } }
    /**
     * Find zero or one RelatedAuthor that matches the filter.
     * @param {RelatedAuthorFindUniqueArgs} args - Arguments to find a RelatedAuthor
     * @example
     * // Get one RelatedAuthor
     * const relatedAuthor = await prisma.relatedAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatedAuthorFindUniqueArgs>(args: SelectSubset<T, RelatedAuthorFindUniqueArgs<ExtArgs>>): Prisma__RelatedAuthorClient<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelatedAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatedAuthorFindUniqueOrThrowArgs} args - Arguments to find a RelatedAuthor
     * @example
     * // Get one RelatedAuthor
     * const relatedAuthor = await prisma.relatedAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatedAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatedAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatedAuthorClient<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatedAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedAuthorFindFirstArgs} args - Arguments to find a RelatedAuthor
     * @example
     * // Get one RelatedAuthor
     * const relatedAuthor = await prisma.relatedAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatedAuthorFindFirstArgs>(args?: SelectSubset<T, RelatedAuthorFindFirstArgs<ExtArgs>>): Prisma__RelatedAuthorClient<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatedAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedAuthorFindFirstOrThrowArgs} args - Arguments to find a RelatedAuthor
     * @example
     * // Get one RelatedAuthor
     * const relatedAuthor = await prisma.relatedAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatedAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatedAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatedAuthorClient<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelatedAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelatedAuthors
     * const relatedAuthors = await prisma.relatedAuthor.findMany()
     * 
     * // Get first 10 RelatedAuthors
     * const relatedAuthors = await prisma.relatedAuthor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatedAuthorWithIdOnly = await prisma.relatedAuthor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelatedAuthorFindManyArgs>(args?: SelectSubset<T, RelatedAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelatedAuthor.
     * @param {RelatedAuthorCreateArgs} args - Arguments to create a RelatedAuthor.
     * @example
     * // Create one RelatedAuthor
     * const RelatedAuthor = await prisma.relatedAuthor.create({
     *   data: {
     *     // ... data to create a RelatedAuthor
     *   }
     * })
     * 
     */
    create<T extends RelatedAuthorCreateArgs>(args: SelectSubset<T, RelatedAuthorCreateArgs<ExtArgs>>): Prisma__RelatedAuthorClient<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelatedAuthors.
     * @param {RelatedAuthorCreateManyArgs} args - Arguments to create many RelatedAuthors.
     * @example
     * // Create many RelatedAuthors
     * const relatedAuthor = await prisma.relatedAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatedAuthorCreateManyArgs>(args?: SelectSubset<T, RelatedAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelatedAuthors and returns the data saved in the database.
     * @param {RelatedAuthorCreateManyAndReturnArgs} args - Arguments to create many RelatedAuthors.
     * @example
     * // Create many RelatedAuthors
     * const relatedAuthor = await prisma.relatedAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelatedAuthors and only return the `id`
     * const relatedAuthorWithIdOnly = await prisma.relatedAuthor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelatedAuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, RelatedAuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelatedAuthor.
     * @param {RelatedAuthorDeleteArgs} args - Arguments to delete one RelatedAuthor.
     * @example
     * // Delete one RelatedAuthor
     * const RelatedAuthor = await prisma.relatedAuthor.delete({
     *   where: {
     *     // ... filter to delete one RelatedAuthor
     *   }
     * })
     * 
     */
    delete<T extends RelatedAuthorDeleteArgs>(args: SelectSubset<T, RelatedAuthorDeleteArgs<ExtArgs>>): Prisma__RelatedAuthorClient<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelatedAuthor.
     * @param {RelatedAuthorUpdateArgs} args - Arguments to update one RelatedAuthor.
     * @example
     * // Update one RelatedAuthor
     * const relatedAuthor = await prisma.relatedAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatedAuthorUpdateArgs>(args: SelectSubset<T, RelatedAuthorUpdateArgs<ExtArgs>>): Prisma__RelatedAuthorClient<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelatedAuthors.
     * @param {RelatedAuthorDeleteManyArgs} args - Arguments to filter RelatedAuthors to delete.
     * @example
     * // Delete a few RelatedAuthors
     * const { count } = await prisma.relatedAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatedAuthorDeleteManyArgs>(args?: SelectSubset<T, RelatedAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatedAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelatedAuthors
     * const relatedAuthor = await prisma.relatedAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatedAuthorUpdateManyArgs>(args: SelectSubset<T, RelatedAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatedAuthors and returns the data updated in the database.
     * @param {RelatedAuthorUpdateManyAndReturnArgs} args - Arguments to update many RelatedAuthors.
     * @example
     * // Update many RelatedAuthors
     * const relatedAuthor = await prisma.relatedAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelatedAuthors and only return the `id`
     * const relatedAuthorWithIdOnly = await prisma.relatedAuthor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelatedAuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, RelatedAuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelatedAuthor.
     * @param {RelatedAuthorUpsertArgs} args - Arguments to update or create a RelatedAuthor.
     * @example
     * // Update or create a RelatedAuthor
     * const relatedAuthor = await prisma.relatedAuthor.upsert({
     *   create: {
     *     // ... data to create a RelatedAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelatedAuthor we want to update
     *   }
     * })
     */
    upsert<T extends RelatedAuthorUpsertArgs>(args: SelectSubset<T, RelatedAuthorUpsertArgs<ExtArgs>>): Prisma__RelatedAuthorClient<$Result.GetResult<Prisma.$RelatedAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelatedAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedAuthorCountArgs} args - Arguments to filter RelatedAuthors to count.
     * @example
     * // Count the number of RelatedAuthors
     * const count = await prisma.relatedAuthor.count({
     *   where: {
     *     // ... the filter for the RelatedAuthors we want to count
     *   }
     * })
    **/
    count<T extends RelatedAuthorCountArgs>(
      args?: Subset<T, RelatedAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatedAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelatedAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelatedAuthorAggregateArgs>(args: Subset<T, RelatedAuthorAggregateArgs>): Prisma.PrismaPromise<GetRelatedAuthorAggregateType<T>>

    /**
     * Group by RelatedAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedAuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelatedAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatedAuthorGroupByArgs['orderBy'] }
        : { orderBy?: RelatedAuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelatedAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatedAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelatedAuthor model
   */
  readonly fields: RelatedAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelatedAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatedAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RelatedAuthor model
   */
  interface RelatedAuthorFieldRefs {
    readonly id: FieldRef<"RelatedAuthor", 'String'>
    readonly coAuthorName: FieldRef<"RelatedAuthor", 'String'>
    readonly articleId: FieldRef<"RelatedAuthor", 'String'>
    readonly createdAt: FieldRef<"RelatedAuthor", 'DateTime'>
    readonly updatedAt: FieldRef<"RelatedAuthor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RelatedAuthor findUnique
   */
  export type RelatedAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * Filter, which RelatedAuthor to fetch.
     */
    where: RelatedAuthorWhereUniqueInput
  }

  /**
   * RelatedAuthor findUniqueOrThrow
   */
  export type RelatedAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * Filter, which RelatedAuthor to fetch.
     */
    where: RelatedAuthorWhereUniqueInput
  }

  /**
   * RelatedAuthor findFirst
   */
  export type RelatedAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * Filter, which RelatedAuthor to fetch.
     */
    where?: RelatedAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedAuthors to fetch.
     */
    orderBy?: RelatedAuthorOrderByWithRelationInput | RelatedAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatedAuthors.
     */
    cursor?: RelatedAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatedAuthors.
     */
    distinct?: RelatedAuthorScalarFieldEnum | RelatedAuthorScalarFieldEnum[]
  }

  /**
   * RelatedAuthor findFirstOrThrow
   */
  export type RelatedAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * Filter, which RelatedAuthor to fetch.
     */
    where?: RelatedAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedAuthors to fetch.
     */
    orderBy?: RelatedAuthorOrderByWithRelationInput | RelatedAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatedAuthors.
     */
    cursor?: RelatedAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatedAuthors.
     */
    distinct?: RelatedAuthorScalarFieldEnum | RelatedAuthorScalarFieldEnum[]
  }

  /**
   * RelatedAuthor findMany
   */
  export type RelatedAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * Filter, which RelatedAuthors to fetch.
     */
    where?: RelatedAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedAuthors to fetch.
     */
    orderBy?: RelatedAuthorOrderByWithRelationInput | RelatedAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelatedAuthors.
     */
    cursor?: RelatedAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedAuthors.
     */
    skip?: number
    distinct?: RelatedAuthorScalarFieldEnum | RelatedAuthorScalarFieldEnum[]
  }

  /**
   * RelatedAuthor create
   */
  export type RelatedAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a RelatedAuthor.
     */
    data: XOR<RelatedAuthorCreateInput, RelatedAuthorUncheckedCreateInput>
  }

  /**
   * RelatedAuthor createMany
   */
  export type RelatedAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelatedAuthors.
     */
    data: RelatedAuthorCreateManyInput | RelatedAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelatedAuthor createManyAndReturn
   */
  export type RelatedAuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * The data used to create many RelatedAuthors.
     */
    data: RelatedAuthorCreateManyInput | RelatedAuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatedAuthor update
   */
  export type RelatedAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a RelatedAuthor.
     */
    data: XOR<RelatedAuthorUpdateInput, RelatedAuthorUncheckedUpdateInput>
    /**
     * Choose, which RelatedAuthor to update.
     */
    where: RelatedAuthorWhereUniqueInput
  }

  /**
   * RelatedAuthor updateMany
   */
  export type RelatedAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelatedAuthors.
     */
    data: XOR<RelatedAuthorUpdateManyMutationInput, RelatedAuthorUncheckedUpdateManyInput>
    /**
     * Filter which RelatedAuthors to update
     */
    where?: RelatedAuthorWhereInput
    /**
     * Limit how many RelatedAuthors to update.
     */
    limit?: number
  }

  /**
   * RelatedAuthor updateManyAndReturn
   */
  export type RelatedAuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * The data used to update RelatedAuthors.
     */
    data: XOR<RelatedAuthorUpdateManyMutationInput, RelatedAuthorUncheckedUpdateManyInput>
    /**
     * Filter which RelatedAuthors to update
     */
    where?: RelatedAuthorWhereInput
    /**
     * Limit how many RelatedAuthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatedAuthor upsert
   */
  export type RelatedAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the RelatedAuthor to update in case it exists.
     */
    where: RelatedAuthorWhereUniqueInput
    /**
     * In case the RelatedAuthor found by the `where` argument doesn't exist, create a new RelatedAuthor with this data.
     */
    create: XOR<RelatedAuthorCreateInput, RelatedAuthorUncheckedCreateInput>
    /**
     * In case the RelatedAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatedAuthorUpdateInput, RelatedAuthorUncheckedUpdateInput>
  }

  /**
   * RelatedAuthor delete
   */
  export type RelatedAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
    /**
     * Filter which RelatedAuthor to delete.
     */
    where: RelatedAuthorWhereUniqueInput
  }

  /**
   * RelatedAuthor deleteMany
   */
  export type RelatedAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatedAuthors to delete
     */
    where?: RelatedAuthorWhereInput
    /**
     * Limit how many RelatedAuthors to delete.
     */
    limit?: number
  }

  /**
   * RelatedAuthor without action
   */
  export type RelatedAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedAuthor
     */
    select?: RelatedAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedAuthor
     */
    omit?: RelatedAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedAuthorInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    grade: number | null
  }

  export type EvaluationSumAggregateOutputType = {
    grade: number | null
  }

  export type EvaluationMinAggregateOutputType = {
    id: string | null
    grade: number | null
    evaluationDescription: string | null
    evaluationDate: Date | null
    userId: string | null
    status: $Enums.EvaluationStatus | null
    articleVersionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvaluationMaxAggregateOutputType = {
    id: string | null
    grade: number | null
    evaluationDescription: string | null
    evaluationDate: Date | null
    userId: string | null
    status: $Enums.EvaluationStatus | null
    articleVersionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvaluationCountAggregateOutputType = {
    id: number
    grade: number
    evaluationDescription: number
    evaluationDate: number
    userId: number
    status: number
    articleVersionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    grade?: true
  }

  export type EvaluationSumAggregateInputType = {
    grade?: true
  }

  export type EvaluationMinAggregateInputType = {
    id?: true
    grade?: true
    evaluationDescription?: true
    evaluationDate?: true
    userId?: true
    status?: true
    articleVersionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvaluationMaxAggregateInputType = {
    id?: true
    grade?: true
    evaluationDescription?: true
    evaluationDate?: true
    userId?: true
    status?: true
    articleVersionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvaluationCountAggregateInputType = {
    id?: true
    grade?: true
    evaluationDescription?: true
    evaluationDate?: true
    userId?: true
    status?: true
    articleVersionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    id: string
    grade: number
    evaluationDescription: string | null
    evaluationDate: Date
    userId: string
    status: $Enums.EvaluationStatus
    articleVersionId: string
    createdAt: Date
    updatedAt: Date
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    evaluationDescription?: boolean
    evaluationDate?: boolean
    userId?: boolean
    status?: boolean
    articleVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    evaluationDescription?: boolean
    evaluationDate?: boolean
    userId?: boolean
    status?: boolean
    articleVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    evaluationDescription?: boolean
    evaluationDate?: boolean
    userId?: boolean
    status?: boolean
    articleVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectScalar = {
    id?: boolean
    grade?: boolean
    evaluationDescription?: boolean
    evaluationDate?: boolean
    userId?: boolean
    status?: boolean
    articleVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grade" | "evaluationDescription" | "evaluationDate" | "userId" | "status" | "articleVersionId" | "createdAt" | "updatedAt", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      articleVersion: Prisma.$ArticleVersionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      grade: number
      evaluationDescription: string | null
      evaluationDate: Date
      userId: string
      status: $Enums.EvaluationStatus
      articleVersionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluations and returns the data saved in the database.
     * @param {EvaluationCreateManyAndReturnArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations and returns the data updated in the database.
     * @param {EvaluationUpdateManyAndReturnArgs} args - Arguments to update many Evaluations.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    articleVersion<T extends ArticleVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleVersionDefaultArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly id: FieldRef<"Evaluation", 'String'>
    readonly grade: FieldRef<"Evaluation", 'Int'>
    readonly evaluationDescription: FieldRef<"Evaluation", 'String'>
    readonly evaluationDate: FieldRef<"Evaluation", 'DateTime'>
    readonly userId: FieldRef<"Evaluation", 'String'>
    readonly status: FieldRef<"Evaluation", 'EvaluationStatus'>
    readonly articleVersionId: FieldRef<"Evaluation", 'String'>
    readonly createdAt: FieldRef<"Evaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"Evaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation createManyAndReturn
   */
  export type EvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation updateManyAndReturn
   */
  export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
  }


  /**
   * Model EventEvaluator
   */

  export type AggregateEventEvaluator = {
    _count: EventEvaluatorCountAggregateOutputType | null
    _min: EventEvaluatorMinAggregateOutputType | null
    _max: EventEvaluatorMaxAggregateOutputType | null
  }

  export type EventEvaluatorMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventEvaluatorMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventEvaluatorCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventEvaluatorMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventEvaluatorMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventEvaluatorCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventEvaluatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventEvaluator to aggregate.
     */
    where?: EventEvaluatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventEvaluators to fetch.
     */
    orderBy?: EventEvaluatorOrderByWithRelationInput | EventEvaluatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventEvaluatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventEvaluators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventEvaluators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventEvaluators
    **/
    _count?: true | EventEvaluatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventEvaluatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventEvaluatorMaxAggregateInputType
  }

  export type GetEventEvaluatorAggregateType<T extends EventEvaluatorAggregateArgs> = {
        [P in keyof T & keyof AggregateEventEvaluator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventEvaluator[P]>
      : GetScalarType<T[P], AggregateEventEvaluator[P]>
  }




  export type EventEvaluatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventEvaluatorWhereInput
    orderBy?: EventEvaluatorOrderByWithAggregationInput | EventEvaluatorOrderByWithAggregationInput[]
    by: EventEvaluatorScalarFieldEnum[] | EventEvaluatorScalarFieldEnum
    having?: EventEvaluatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventEvaluatorCountAggregateInputType | true
    _min?: EventEvaluatorMinAggregateInputType
    _max?: EventEvaluatorMaxAggregateInputType
  }

  export type EventEvaluatorGroupByOutputType = {
    id: string
    eventId: string
    userId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: EventEvaluatorCountAggregateOutputType | null
    _min: EventEvaluatorMinAggregateOutputType | null
    _max: EventEvaluatorMaxAggregateOutputType | null
  }

  type GetEventEvaluatorGroupByPayload<T extends EventEvaluatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventEvaluatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventEvaluatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventEvaluatorGroupByOutputType[P]>
            : GetScalarType<T[P], EventEvaluatorGroupByOutputType[P]>
        }
      >
    >


  export type EventEvaluatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    articleAssignments?: boolean | EventEvaluator$articleAssignmentsArgs<ExtArgs>
    _count?: boolean | EventEvaluatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventEvaluator"]>

  export type EventEvaluatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventEvaluator"]>

  export type EventEvaluatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventEvaluator"]>

  export type EventEvaluatorSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventEvaluatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["eventEvaluator"]>
  export type EventEvaluatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    articleAssignments?: boolean | EventEvaluator$articleAssignmentsArgs<ExtArgs>
    _count?: boolean | EventEvaluatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventEvaluatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventEvaluatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventEvaluatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventEvaluator"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      articleAssignments: Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventEvaluator"]>
    composites: {}
  }

  type EventEvaluatorGetPayload<S extends boolean | null | undefined | EventEvaluatorDefaultArgs> = $Result.GetResult<Prisma.$EventEvaluatorPayload, S>

  type EventEvaluatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventEvaluatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventEvaluatorCountAggregateInputType | true
    }

  export interface EventEvaluatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventEvaluator'], meta: { name: 'EventEvaluator' } }
    /**
     * Find zero or one EventEvaluator that matches the filter.
     * @param {EventEvaluatorFindUniqueArgs} args - Arguments to find a EventEvaluator
     * @example
     * // Get one EventEvaluator
     * const eventEvaluator = await prisma.eventEvaluator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventEvaluatorFindUniqueArgs>(args: SelectSubset<T, EventEvaluatorFindUniqueArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventEvaluator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventEvaluatorFindUniqueOrThrowArgs} args - Arguments to find a EventEvaluator
     * @example
     * // Get one EventEvaluator
     * const eventEvaluator = await prisma.eventEvaluator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventEvaluatorFindUniqueOrThrowArgs>(args: SelectSubset<T, EventEvaluatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventEvaluator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEvaluatorFindFirstArgs} args - Arguments to find a EventEvaluator
     * @example
     * // Get one EventEvaluator
     * const eventEvaluator = await prisma.eventEvaluator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventEvaluatorFindFirstArgs>(args?: SelectSubset<T, EventEvaluatorFindFirstArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventEvaluator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEvaluatorFindFirstOrThrowArgs} args - Arguments to find a EventEvaluator
     * @example
     * // Get one EventEvaluator
     * const eventEvaluator = await prisma.eventEvaluator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventEvaluatorFindFirstOrThrowArgs>(args?: SelectSubset<T, EventEvaluatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventEvaluators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEvaluatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventEvaluators
     * const eventEvaluators = await prisma.eventEvaluator.findMany()
     * 
     * // Get first 10 EventEvaluators
     * const eventEvaluators = await prisma.eventEvaluator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventEvaluatorWithIdOnly = await prisma.eventEvaluator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventEvaluatorFindManyArgs>(args?: SelectSubset<T, EventEvaluatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventEvaluator.
     * @param {EventEvaluatorCreateArgs} args - Arguments to create a EventEvaluator.
     * @example
     * // Create one EventEvaluator
     * const EventEvaluator = await prisma.eventEvaluator.create({
     *   data: {
     *     // ... data to create a EventEvaluator
     *   }
     * })
     * 
     */
    create<T extends EventEvaluatorCreateArgs>(args: SelectSubset<T, EventEvaluatorCreateArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventEvaluators.
     * @param {EventEvaluatorCreateManyArgs} args - Arguments to create many EventEvaluators.
     * @example
     * // Create many EventEvaluators
     * const eventEvaluator = await prisma.eventEvaluator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventEvaluatorCreateManyArgs>(args?: SelectSubset<T, EventEvaluatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventEvaluators and returns the data saved in the database.
     * @param {EventEvaluatorCreateManyAndReturnArgs} args - Arguments to create many EventEvaluators.
     * @example
     * // Create many EventEvaluators
     * const eventEvaluator = await prisma.eventEvaluator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventEvaluators and only return the `id`
     * const eventEvaluatorWithIdOnly = await prisma.eventEvaluator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventEvaluatorCreateManyAndReturnArgs>(args?: SelectSubset<T, EventEvaluatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventEvaluator.
     * @param {EventEvaluatorDeleteArgs} args - Arguments to delete one EventEvaluator.
     * @example
     * // Delete one EventEvaluator
     * const EventEvaluator = await prisma.eventEvaluator.delete({
     *   where: {
     *     // ... filter to delete one EventEvaluator
     *   }
     * })
     * 
     */
    delete<T extends EventEvaluatorDeleteArgs>(args: SelectSubset<T, EventEvaluatorDeleteArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventEvaluator.
     * @param {EventEvaluatorUpdateArgs} args - Arguments to update one EventEvaluator.
     * @example
     * // Update one EventEvaluator
     * const eventEvaluator = await prisma.eventEvaluator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventEvaluatorUpdateArgs>(args: SelectSubset<T, EventEvaluatorUpdateArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventEvaluators.
     * @param {EventEvaluatorDeleteManyArgs} args - Arguments to filter EventEvaluators to delete.
     * @example
     * // Delete a few EventEvaluators
     * const { count } = await prisma.eventEvaluator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventEvaluatorDeleteManyArgs>(args?: SelectSubset<T, EventEvaluatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventEvaluators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEvaluatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventEvaluators
     * const eventEvaluator = await prisma.eventEvaluator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventEvaluatorUpdateManyArgs>(args: SelectSubset<T, EventEvaluatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventEvaluators and returns the data updated in the database.
     * @param {EventEvaluatorUpdateManyAndReturnArgs} args - Arguments to update many EventEvaluators.
     * @example
     * // Update many EventEvaluators
     * const eventEvaluator = await prisma.eventEvaluator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventEvaluators and only return the `id`
     * const eventEvaluatorWithIdOnly = await prisma.eventEvaluator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventEvaluatorUpdateManyAndReturnArgs>(args: SelectSubset<T, EventEvaluatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventEvaluator.
     * @param {EventEvaluatorUpsertArgs} args - Arguments to update or create a EventEvaluator.
     * @example
     * // Update or create a EventEvaluator
     * const eventEvaluator = await prisma.eventEvaluator.upsert({
     *   create: {
     *     // ... data to create a EventEvaluator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventEvaluator we want to update
     *   }
     * })
     */
    upsert<T extends EventEvaluatorUpsertArgs>(args: SelectSubset<T, EventEvaluatorUpsertArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventEvaluators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEvaluatorCountArgs} args - Arguments to filter EventEvaluators to count.
     * @example
     * // Count the number of EventEvaluators
     * const count = await prisma.eventEvaluator.count({
     *   where: {
     *     // ... the filter for the EventEvaluators we want to count
     *   }
     * })
    **/
    count<T extends EventEvaluatorCountArgs>(
      args?: Subset<T, EventEvaluatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventEvaluatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventEvaluator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEvaluatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventEvaluatorAggregateArgs>(args: Subset<T, EventEvaluatorAggregateArgs>): Prisma.PrismaPromise<GetEventEvaluatorAggregateType<T>>

    /**
     * Group by EventEvaluator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEvaluatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventEvaluatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventEvaluatorGroupByArgs['orderBy'] }
        : { orderBy?: EventEvaluatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventEvaluatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventEvaluatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventEvaluator model
   */
  readonly fields: EventEvaluatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventEvaluator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventEvaluatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    articleAssignments<T extends EventEvaluator$articleAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, EventEvaluator$articleAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventEvaluator model
   */
  interface EventEvaluatorFieldRefs {
    readonly id: FieldRef<"EventEvaluator", 'String'>
    readonly eventId: FieldRef<"EventEvaluator", 'String'>
    readonly userId: FieldRef<"EventEvaluator", 'String'>
    readonly isActive: FieldRef<"EventEvaluator", 'Boolean'>
    readonly createdAt: FieldRef<"EventEvaluator", 'DateTime'>
    readonly updatedAt: FieldRef<"EventEvaluator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventEvaluator findUnique
   */
  export type EventEvaluatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * Filter, which EventEvaluator to fetch.
     */
    where: EventEvaluatorWhereUniqueInput
  }

  /**
   * EventEvaluator findUniqueOrThrow
   */
  export type EventEvaluatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * Filter, which EventEvaluator to fetch.
     */
    where: EventEvaluatorWhereUniqueInput
  }

  /**
   * EventEvaluator findFirst
   */
  export type EventEvaluatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * Filter, which EventEvaluator to fetch.
     */
    where?: EventEvaluatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventEvaluators to fetch.
     */
    orderBy?: EventEvaluatorOrderByWithRelationInput | EventEvaluatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventEvaluators.
     */
    cursor?: EventEvaluatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventEvaluators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventEvaluators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventEvaluators.
     */
    distinct?: EventEvaluatorScalarFieldEnum | EventEvaluatorScalarFieldEnum[]
  }

  /**
   * EventEvaluator findFirstOrThrow
   */
  export type EventEvaluatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * Filter, which EventEvaluator to fetch.
     */
    where?: EventEvaluatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventEvaluators to fetch.
     */
    orderBy?: EventEvaluatorOrderByWithRelationInput | EventEvaluatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventEvaluators.
     */
    cursor?: EventEvaluatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventEvaluators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventEvaluators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventEvaluators.
     */
    distinct?: EventEvaluatorScalarFieldEnum | EventEvaluatorScalarFieldEnum[]
  }

  /**
   * EventEvaluator findMany
   */
  export type EventEvaluatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * Filter, which EventEvaluators to fetch.
     */
    where?: EventEvaluatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventEvaluators to fetch.
     */
    orderBy?: EventEvaluatorOrderByWithRelationInput | EventEvaluatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventEvaluators.
     */
    cursor?: EventEvaluatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventEvaluators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventEvaluators.
     */
    skip?: number
    distinct?: EventEvaluatorScalarFieldEnum | EventEvaluatorScalarFieldEnum[]
  }

  /**
   * EventEvaluator create
   */
  export type EventEvaluatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * The data needed to create a EventEvaluator.
     */
    data: XOR<EventEvaluatorCreateInput, EventEvaluatorUncheckedCreateInput>
  }

  /**
   * EventEvaluator createMany
   */
  export type EventEvaluatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventEvaluators.
     */
    data: EventEvaluatorCreateManyInput | EventEvaluatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventEvaluator createManyAndReturn
   */
  export type EventEvaluatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * The data used to create many EventEvaluators.
     */
    data: EventEvaluatorCreateManyInput | EventEvaluatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventEvaluator update
   */
  export type EventEvaluatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * The data needed to update a EventEvaluator.
     */
    data: XOR<EventEvaluatorUpdateInput, EventEvaluatorUncheckedUpdateInput>
    /**
     * Choose, which EventEvaluator to update.
     */
    where: EventEvaluatorWhereUniqueInput
  }

  /**
   * EventEvaluator updateMany
   */
  export type EventEvaluatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventEvaluators.
     */
    data: XOR<EventEvaluatorUpdateManyMutationInput, EventEvaluatorUncheckedUpdateManyInput>
    /**
     * Filter which EventEvaluators to update
     */
    where?: EventEvaluatorWhereInput
    /**
     * Limit how many EventEvaluators to update.
     */
    limit?: number
  }

  /**
   * EventEvaluator updateManyAndReturn
   */
  export type EventEvaluatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * The data used to update EventEvaluators.
     */
    data: XOR<EventEvaluatorUpdateManyMutationInput, EventEvaluatorUncheckedUpdateManyInput>
    /**
     * Filter which EventEvaluators to update
     */
    where?: EventEvaluatorWhereInput
    /**
     * Limit how many EventEvaluators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventEvaluator upsert
   */
  export type EventEvaluatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * The filter to search for the EventEvaluator to update in case it exists.
     */
    where: EventEvaluatorWhereUniqueInput
    /**
     * In case the EventEvaluator found by the `where` argument doesn't exist, create a new EventEvaluator with this data.
     */
    create: XOR<EventEvaluatorCreateInput, EventEvaluatorUncheckedCreateInput>
    /**
     * In case the EventEvaluator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventEvaluatorUpdateInput, EventEvaluatorUncheckedUpdateInput>
  }

  /**
   * EventEvaluator delete
   */
  export type EventEvaluatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
    /**
     * Filter which EventEvaluator to delete.
     */
    where: EventEvaluatorWhereUniqueInput
  }

  /**
   * EventEvaluator deleteMany
   */
  export type EventEvaluatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventEvaluators to delete
     */
    where?: EventEvaluatorWhereInput
    /**
     * Limit how many EventEvaluators to delete.
     */
    limit?: number
  }

  /**
   * EventEvaluator.articleAssignments
   */
  export type EventEvaluator$articleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    where?: ArticleEvaluatorAssignmentWhereInput
    orderBy?: ArticleEvaluatorAssignmentOrderByWithRelationInput | ArticleEvaluatorAssignmentOrderByWithRelationInput[]
    cursor?: ArticleEvaluatorAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleEvaluatorAssignmentScalarFieldEnum | ArticleEvaluatorAssignmentScalarFieldEnum[]
  }

  /**
   * EventEvaluator without action
   */
  export type EventEvaluatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEvaluator
     */
    select?: EventEvaluatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEvaluator
     */
    omit?: EventEvaluatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEvaluatorInclude<ExtArgs> | null
  }


  /**
   * Model ArticleEvaluatorAssignment
   */

  export type AggregateArticleEvaluatorAssignment = {
    _count: ArticleEvaluatorAssignmentCountAggregateOutputType | null
    _min: ArticleEvaluatorAssignmentMinAggregateOutputType | null
    _max: ArticleEvaluatorAssignmentMaxAggregateOutputType | null
  }

  export type ArticleEvaluatorAssignmentMinAggregateOutputType = {
    id: string | null
    eventEvaluatorId: string | null
    articleId: string | null
    userId: string | null
    isCorrected: boolean | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleEvaluatorAssignmentMaxAggregateOutputType = {
    id: string | null
    eventEvaluatorId: string | null
    articleId: string | null
    userId: string | null
    isCorrected: boolean | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleEvaluatorAssignmentCountAggregateOutputType = {
    id: number
    eventEvaluatorId: number
    articleId: number
    userId: number
    isCorrected: number
    assignedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleEvaluatorAssignmentMinAggregateInputType = {
    id?: true
    eventEvaluatorId?: true
    articleId?: true
    userId?: true
    isCorrected?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleEvaluatorAssignmentMaxAggregateInputType = {
    id?: true
    eventEvaluatorId?: true
    articleId?: true
    userId?: true
    isCorrected?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleEvaluatorAssignmentCountAggregateInputType = {
    id?: true
    eventEvaluatorId?: true
    articleId?: true
    userId?: true
    isCorrected?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleEvaluatorAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleEvaluatorAssignment to aggregate.
     */
    where?: ArticleEvaluatorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleEvaluatorAssignments to fetch.
     */
    orderBy?: ArticleEvaluatorAssignmentOrderByWithRelationInput | ArticleEvaluatorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleEvaluatorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleEvaluatorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleEvaluatorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleEvaluatorAssignments
    **/
    _count?: true | ArticleEvaluatorAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleEvaluatorAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleEvaluatorAssignmentMaxAggregateInputType
  }

  export type GetArticleEvaluatorAssignmentAggregateType<T extends ArticleEvaluatorAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleEvaluatorAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleEvaluatorAssignment[P]>
      : GetScalarType<T[P], AggregateArticleEvaluatorAssignment[P]>
  }




  export type ArticleEvaluatorAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleEvaluatorAssignmentWhereInput
    orderBy?: ArticleEvaluatorAssignmentOrderByWithAggregationInput | ArticleEvaluatorAssignmentOrderByWithAggregationInput[]
    by: ArticleEvaluatorAssignmentScalarFieldEnum[] | ArticleEvaluatorAssignmentScalarFieldEnum
    having?: ArticleEvaluatorAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleEvaluatorAssignmentCountAggregateInputType | true
    _min?: ArticleEvaluatorAssignmentMinAggregateInputType
    _max?: ArticleEvaluatorAssignmentMaxAggregateInputType
  }

  export type ArticleEvaluatorAssignmentGroupByOutputType = {
    id: string
    eventEvaluatorId: string
    articleId: string
    userId: string
    isCorrected: boolean
    assignedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: ArticleEvaluatorAssignmentCountAggregateOutputType | null
    _min: ArticleEvaluatorAssignmentMinAggregateOutputType | null
    _max: ArticleEvaluatorAssignmentMaxAggregateOutputType | null
  }

  type GetArticleEvaluatorAssignmentGroupByPayload<T extends ArticleEvaluatorAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleEvaluatorAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleEvaluatorAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleEvaluatorAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleEvaluatorAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ArticleEvaluatorAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventEvaluatorId?: boolean
    articleId?: boolean
    userId?: boolean
    isCorrected?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventEvaluator?: boolean | EventEvaluatorDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleEvaluatorAssignment"]>

  export type ArticleEvaluatorAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventEvaluatorId?: boolean
    articleId?: boolean
    userId?: boolean
    isCorrected?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventEvaluator?: boolean | EventEvaluatorDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleEvaluatorAssignment"]>

  export type ArticleEvaluatorAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventEvaluatorId?: boolean
    articleId?: boolean
    userId?: boolean
    isCorrected?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventEvaluator?: boolean | EventEvaluatorDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleEvaluatorAssignment"]>

  export type ArticleEvaluatorAssignmentSelectScalar = {
    id?: boolean
    eventEvaluatorId?: boolean
    articleId?: boolean
    userId?: boolean
    isCorrected?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleEvaluatorAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventEvaluatorId" | "articleId" | "userId" | "isCorrected" | "assignedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["articleEvaluatorAssignment"]>
  export type ArticleEvaluatorAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventEvaluator?: boolean | EventEvaluatorDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleEvaluatorAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventEvaluator?: boolean | EventEvaluatorDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleEvaluatorAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventEvaluator?: boolean | EventEvaluatorDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticleEvaluatorAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleEvaluatorAssignment"
    objects: {
      eventEvaluator: Prisma.$EventEvaluatorPayload<ExtArgs>
      article: Prisma.$ArticlePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventEvaluatorId: string
      articleId: string
      userId: string
      isCorrected: boolean
      assignedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleEvaluatorAssignment"]>
    composites: {}
  }

  type ArticleEvaluatorAssignmentGetPayload<S extends boolean | null | undefined | ArticleEvaluatorAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload, S>

  type ArticleEvaluatorAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleEvaluatorAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleEvaluatorAssignmentCountAggregateInputType | true
    }

  export interface ArticleEvaluatorAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleEvaluatorAssignment'], meta: { name: 'ArticleEvaluatorAssignment' } }
    /**
     * Find zero or one ArticleEvaluatorAssignment that matches the filter.
     * @param {ArticleEvaluatorAssignmentFindUniqueArgs} args - Arguments to find a ArticleEvaluatorAssignment
     * @example
     * // Get one ArticleEvaluatorAssignment
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleEvaluatorAssignmentFindUniqueArgs>(args: SelectSubset<T, ArticleEvaluatorAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ArticleEvaluatorAssignmentClient<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleEvaluatorAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleEvaluatorAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ArticleEvaluatorAssignment
     * @example
     * // Get one ArticleEvaluatorAssignment
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleEvaluatorAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleEvaluatorAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleEvaluatorAssignmentClient<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleEvaluatorAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEvaluatorAssignmentFindFirstArgs} args - Arguments to find a ArticleEvaluatorAssignment
     * @example
     * // Get one ArticleEvaluatorAssignment
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleEvaluatorAssignmentFindFirstArgs>(args?: SelectSubset<T, ArticleEvaluatorAssignmentFindFirstArgs<ExtArgs>>): Prisma__ArticleEvaluatorAssignmentClient<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleEvaluatorAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEvaluatorAssignmentFindFirstOrThrowArgs} args - Arguments to find a ArticleEvaluatorAssignment
     * @example
     * // Get one ArticleEvaluatorAssignment
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleEvaluatorAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleEvaluatorAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleEvaluatorAssignmentClient<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleEvaluatorAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEvaluatorAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleEvaluatorAssignments
     * const articleEvaluatorAssignments = await prisma.articleEvaluatorAssignment.findMany()
     * 
     * // Get first 10 ArticleEvaluatorAssignments
     * const articleEvaluatorAssignments = await prisma.articleEvaluatorAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleEvaluatorAssignmentWithIdOnly = await prisma.articleEvaluatorAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleEvaluatorAssignmentFindManyArgs>(args?: SelectSubset<T, ArticleEvaluatorAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleEvaluatorAssignment.
     * @param {ArticleEvaluatorAssignmentCreateArgs} args - Arguments to create a ArticleEvaluatorAssignment.
     * @example
     * // Create one ArticleEvaluatorAssignment
     * const ArticleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.create({
     *   data: {
     *     // ... data to create a ArticleEvaluatorAssignment
     *   }
     * })
     * 
     */
    create<T extends ArticleEvaluatorAssignmentCreateArgs>(args: SelectSubset<T, ArticleEvaluatorAssignmentCreateArgs<ExtArgs>>): Prisma__ArticleEvaluatorAssignmentClient<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleEvaluatorAssignments.
     * @param {ArticleEvaluatorAssignmentCreateManyArgs} args - Arguments to create many ArticleEvaluatorAssignments.
     * @example
     * // Create many ArticleEvaluatorAssignments
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleEvaluatorAssignmentCreateManyArgs>(args?: SelectSubset<T, ArticleEvaluatorAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleEvaluatorAssignments and returns the data saved in the database.
     * @param {ArticleEvaluatorAssignmentCreateManyAndReturnArgs} args - Arguments to create many ArticleEvaluatorAssignments.
     * @example
     * // Create many ArticleEvaluatorAssignments
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleEvaluatorAssignments and only return the `id`
     * const articleEvaluatorAssignmentWithIdOnly = await prisma.articleEvaluatorAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleEvaluatorAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleEvaluatorAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleEvaluatorAssignment.
     * @param {ArticleEvaluatorAssignmentDeleteArgs} args - Arguments to delete one ArticleEvaluatorAssignment.
     * @example
     * // Delete one ArticleEvaluatorAssignment
     * const ArticleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.delete({
     *   where: {
     *     // ... filter to delete one ArticleEvaluatorAssignment
     *   }
     * })
     * 
     */
    delete<T extends ArticleEvaluatorAssignmentDeleteArgs>(args: SelectSubset<T, ArticleEvaluatorAssignmentDeleteArgs<ExtArgs>>): Prisma__ArticleEvaluatorAssignmentClient<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleEvaluatorAssignment.
     * @param {ArticleEvaluatorAssignmentUpdateArgs} args - Arguments to update one ArticleEvaluatorAssignment.
     * @example
     * // Update one ArticleEvaluatorAssignment
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleEvaluatorAssignmentUpdateArgs>(args: SelectSubset<T, ArticleEvaluatorAssignmentUpdateArgs<ExtArgs>>): Prisma__ArticleEvaluatorAssignmentClient<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleEvaluatorAssignments.
     * @param {ArticleEvaluatorAssignmentDeleteManyArgs} args - Arguments to filter ArticleEvaluatorAssignments to delete.
     * @example
     * // Delete a few ArticleEvaluatorAssignments
     * const { count } = await prisma.articleEvaluatorAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleEvaluatorAssignmentDeleteManyArgs>(args?: SelectSubset<T, ArticleEvaluatorAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleEvaluatorAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEvaluatorAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleEvaluatorAssignments
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleEvaluatorAssignmentUpdateManyArgs>(args: SelectSubset<T, ArticleEvaluatorAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleEvaluatorAssignments and returns the data updated in the database.
     * @param {ArticleEvaluatorAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ArticleEvaluatorAssignments.
     * @example
     * // Update many ArticleEvaluatorAssignments
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleEvaluatorAssignments and only return the `id`
     * const articleEvaluatorAssignmentWithIdOnly = await prisma.articleEvaluatorAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleEvaluatorAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleEvaluatorAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleEvaluatorAssignment.
     * @param {ArticleEvaluatorAssignmentUpsertArgs} args - Arguments to update or create a ArticleEvaluatorAssignment.
     * @example
     * // Update or create a ArticleEvaluatorAssignment
     * const articleEvaluatorAssignment = await prisma.articleEvaluatorAssignment.upsert({
     *   create: {
     *     // ... data to create a ArticleEvaluatorAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleEvaluatorAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ArticleEvaluatorAssignmentUpsertArgs>(args: SelectSubset<T, ArticleEvaluatorAssignmentUpsertArgs<ExtArgs>>): Prisma__ArticleEvaluatorAssignmentClient<$Result.GetResult<Prisma.$ArticleEvaluatorAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleEvaluatorAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEvaluatorAssignmentCountArgs} args - Arguments to filter ArticleEvaluatorAssignments to count.
     * @example
     * // Count the number of ArticleEvaluatorAssignments
     * const count = await prisma.articleEvaluatorAssignment.count({
     *   where: {
     *     // ... the filter for the ArticleEvaluatorAssignments we want to count
     *   }
     * })
    **/
    count<T extends ArticleEvaluatorAssignmentCountArgs>(
      args?: Subset<T, ArticleEvaluatorAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleEvaluatorAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleEvaluatorAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEvaluatorAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleEvaluatorAssignmentAggregateArgs>(args: Subset<T, ArticleEvaluatorAssignmentAggregateArgs>): Prisma.PrismaPromise<GetArticleEvaluatorAssignmentAggregateType<T>>

    /**
     * Group by ArticleEvaluatorAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleEvaluatorAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleEvaluatorAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleEvaluatorAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ArticleEvaluatorAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleEvaluatorAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleEvaluatorAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleEvaluatorAssignment model
   */
  readonly fields: ArticleEvaluatorAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleEvaluatorAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleEvaluatorAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventEvaluator<T extends EventEvaluatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventEvaluatorDefaultArgs<ExtArgs>>): Prisma__EventEvaluatorClient<$Result.GetResult<Prisma.$EventEvaluatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleEvaluatorAssignment model
   */
  interface ArticleEvaluatorAssignmentFieldRefs {
    readonly id: FieldRef<"ArticleEvaluatorAssignment", 'String'>
    readonly eventEvaluatorId: FieldRef<"ArticleEvaluatorAssignment", 'String'>
    readonly articleId: FieldRef<"ArticleEvaluatorAssignment", 'String'>
    readonly userId: FieldRef<"ArticleEvaluatorAssignment", 'String'>
    readonly isCorrected: FieldRef<"ArticleEvaluatorAssignment", 'Boolean'>
    readonly assignedAt: FieldRef<"ArticleEvaluatorAssignment", 'DateTime'>
    readonly createdAt: FieldRef<"ArticleEvaluatorAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleEvaluatorAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleEvaluatorAssignment findUnique
   */
  export type ArticleEvaluatorAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEvaluatorAssignment to fetch.
     */
    where: ArticleEvaluatorAssignmentWhereUniqueInput
  }

  /**
   * ArticleEvaluatorAssignment findUniqueOrThrow
   */
  export type ArticleEvaluatorAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEvaluatorAssignment to fetch.
     */
    where: ArticleEvaluatorAssignmentWhereUniqueInput
  }

  /**
   * ArticleEvaluatorAssignment findFirst
   */
  export type ArticleEvaluatorAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEvaluatorAssignment to fetch.
     */
    where?: ArticleEvaluatorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleEvaluatorAssignments to fetch.
     */
    orderBy?: ArticleEvaluatorAssignmentOrderByWithRelationInput | ArticleEvaluatorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleEvaluatorAssignments.
     */
    cursor?: ArticleEvaluatorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleEvaluatorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleEvaluatorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleEvaluatorAssignments.
     */
    distinct?: ArticleEvaluatorAssignmentScalarFieldEnum | ArticleEvaluatorAssignmentScalarFieldEnum[]
  }

  /**
   * ArticleEvaluatorAssignment findFirstOrThrow
   */
  export type ArticleEvaluatorAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEvaluatorAssignment to fetch.
     */
    where?: ArticleEvaluatorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleEvaluatorAssignments to fetch.
     */
    orderBy?: ArticleEvaluatorAssignmentOrderByWithRelationInput | ArticleEvaluatorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleEvaluatorAssignments.
     */
    cursor?: ArticleEvaluatorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleEvaluatorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleEvaluatorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleEvaluatorAssignments.
     */
    distinct?: ArticleEvaluatorAssignmentScalarFieldEnum | ArticleEvaluatorAssignmentScalarFieldEnum[]
  }

  /**
   * ArticleEvaluatorAssignment findMany
   */
  export type ArticleEvaluatorAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleEvaluatorAssignments to fetch.
     */
    where?: ArticleEvaluatorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleEvaluatorAssignments to fetch.
     */
    orderBy?: ArticleEvaluatorAssignmentOrderByWithRelationInput | ArticleEvaluatorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleEvaluatorAssignments.
     */
    cursor?: ArticleEvaluatorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleEvaluatorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleEvaluatorAssignments.
     */
    skip?: number
    distinct?: ArticleEvaluatorAssignmentScalarFieldEnum | ArticleEvaluatorAssignmentScalarFieldEnum[]
  }

  /**
   * ArticleEvaluatorAssignment create
   */
  export type ArticleEvaluatorAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleEvaluatorAssignment.
     */
    data: XOR<ArticleEvaluatorAssignmentCreateInput, ArticleEvaluatorAssignmentUncheckedCreateInput>
  }

  /**
   * ArticleEvaluatorAssignment createMany
   */
  export type ArticleEvaluatorAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleEvaluatorAssignments.
     */
    data: ArticleEvaluatorAssignmentCreateManyInput | ArticleEvaluatorAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleEvaluatorAssignment createManyAndReturn
   */
  export type ArticleEvaluatorAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleEvaluatorAssignments.
     */
    data: ArticleEvaluatorAssignmentCreateManyInput | ArticleEvaluatorAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleEvaluatorAssignment update
   */
  export type ArticleEvaluatorAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleEvaluatorAssignment.
     */
    data: XOR<ArticleEvaluatorAssignmentUpdateInput, ArticleEvaluatorAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ArticleEvaluatorAssignment to update.
     */
    where: ArticleEvaluatorAssignmentWhereUniqueInput
  }

  /**
   * ArticleEvaluatorAssignment updateMany
   */
  export type ArticleEvaluatorAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleEvaluatorAssignments.
     */
    data: XOR<ArticleEvaluatorAssignmentUpdateManyMutationInput, ArticleEvaluatorAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ArticleEvaluatorAssignments to update
     */
    where?: ArticleEvaluatorAssignmentWhereInput
    /**
     * Limit how many ArticleEvaluatorAssignments to update.
     */
    limit?: number
  }

  /**
   * ArticleEvaluatorAssignment updateManyAndReturn
   */
  export type ArticleEvaluatorAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ArticleEvaluatorAssignments.
     */
    data: XOR<ArticleEvaluatorAssignmentUpdateManyMutationInput, ArticleEvaluatorAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ArticleEvaluatorAssignments to update
     */
    where?: ArticleEvaluatorAssignmentWhereInput
    /**
     * Limit how many ArticleEvaluatorAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleEvaluatorAssignment upsert
   */
  export type ArticleEvaluatorAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleEvaluatorAssignment to update in case it exists.
     */
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    /**
     * In case the ArticleEvaluatorAssignment found by the `where` argument doesn't exist, create a new ArticleEvaluatorAssignment with this data.
     */
    create: XOR<ArticleEvaluatorAssignmentCreateInput, ArticleEvaluatorAssignmentUncheckedCreateInput>
    /**
     * In case the ArticleEvaluatorAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleEvaluatorAssignmentUpdateInput, ArticleEvaluatorAssignmentUncheckedUpdateInput>
  }

  /**
   * ArticleEvaluatorAssignment delete
   */
  export type ArticleEvaluatorAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ArticleEvaluatorAssignment to delete.
     */
    where: ArticleEvaluatorAssignmentWhereUniqueInput
  }

  /**
   * ArticleEvaluatorAssignment deleteMany
   */
  export type ArticleEvaluatorAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleEvaluatorAssignments to delete
     */
    where?: ArticleEvaluatorAssignmentWhereInput
    /**
     * Limit how many ArticleEvaluatorAssignments to delete.
     */
    limit?: number
  }

  /**
   * ArticleEvaluatorAssignment without action
   */
  export type ArticleEvaluatorAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleEvaluatorAssignment
     */
    select?: ArticleEvaluatorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleEvaluatorAssignment
     */
    omit?: ArticleEvaluatorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleEvaluatorAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Checklist
   */

  export type AggregateChecklist = {
    _count: ChecklistCountAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  export type ChecklistMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChecklistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChecklistCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChecklistMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChecklistMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChecklistCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklist to aggregate.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checklists
    **/
    _count?: true | ChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistMaxAggregateInputType
  }

  export type GetChecklistAggregateType<T extends ChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklist[P]>
      : GetScalarType<T[P], AggregateChecklist[P]>
  }




  export type ChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithAggregationInput | ChecklistOrderByWithAggregationInput[]
    by: ChecklistScalarFieldEnum[] | ChecklistScalarFieldEnum
    having?: ChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistCountAggregateInputType | true
    _min?: ChecklistMinAggregateInputType
    _max?: ChecklistMaxAggregateInputType
  }

  export type ChecklistGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChecklistCountAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  type GetChecklistGroupByPayload<T extends ChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | Checklist$questionsArgs<ExtArgs>
    events?: boolean | Checklist$eventsArgs<ExtArgs>
    _count?: boolean | ChecklistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["checklist"]>
  export type ChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Checklist$questionsArgs<ExtArgs>
    events?: boolean | Checklist$eventsArgs<ExtArgs>
    _count?: boolean | ChecklistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChecklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checklist"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["checklist"]>
    composites: {}
  }

  type ChecklistGetPayload<S extends boolean | null | undefined | ChecklistDefaultArgs> = $Result.GetResult<Prisma.$ChecklistPayload, S>

  type ChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistCountAggregateInputType | true
    }

  export interface ChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checklist'], meta: { name: 'Checklist' } }
    /**
     * Find zero or one Checklist that matches the filter.
     * @param {ChecklistFindUniqueArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistFindUniqueArgs>(args: SelectSubset<T, ChecklistFindUniqueArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistFindUniqueOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistFindFirstArgs>(args?: SelectSubset<T, ChecklistFindFirstArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checklists
     * const checklists = await prisma.checklist.findMany()
     * 
     * // Get first 10 Checklists
     * const checklists = await prisma.checklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistWithIdOnly = await prisma.checklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistFindManyArgs>(args?: SelectSubset<T, ChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checklist.
     * @param {ChecklistCreateArgs} args - Arguments to create a Checklist.
     * @example
     * // Create one Checklist
     * const Checklist = await prisma.checklist.create({
     *   data: {
     *     // ... data to create a Checklist
     *   }
     * })
     * 
     */
    create<T extends ChecklistCreateArgs>(args: SelectSubset<T, ChecklistCreateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checklists.
     * @param {ChecklistCreateManyArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistCreateManyArgs>(args?: SelectSubset<T, ChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checklists and returns the data saved in the database.
     * @param {ChecklistCreateManyAndReturnArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checklist.
     * @param {ChecklistDeleteArgs} args - Arguments to delete one Checklist.
     * @example
     * // Delete one Checklist
     * const Checklist = await prisma.checklist.delete({
     *   where: {
     *     // ... filter to delete one Checklist
     *   }
     * })
     * 
     */
    delete<T extends ChecklistDeleteArgs>(args: SelectSubset<T, ChecklistDeleteArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checklist.
     * @param {ChecklistUpdateArgs} args - Arguments to update one Checklist.
     * @example
     * // Update one Checklist
     * const checklist = await prisma.checklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistUpdateArgs>(args: SelectSubset<T, ChecklistUpdateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checklists.
     * @param {ChecklistDeleteManyArgs} args - Arguments to filter Checklists to delete.
     * @example
     * // Delete a few Checklists
     * const { count } = await prisma.checklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistDeleteManyArgs>(args?: SelectSubset<T, ChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistUpdateManyArgs>(args: SelectSubset<T, ChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists and returns the data updated in the database.
     * @param {ChecklistUpdateManyAndReturnArgs} args - Arguments to update many Checklists.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChecklistUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checklist.
     * @param {ChecklistUpsertArgs} args - Arguments to update or create a Checklist.
     * @example
     * // Update or create a Checklist
     * const checklist = await prisma.checklist.upsert({
     *   create: {
     *     // ... data to create a Checklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checklist we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistUpsertArgs>(args: SelectSubset<T, ChecklistUpsertArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCountArgs} args - Arguments to filter Checklists to count.
     * @example
     * // Count the number of Checklists
     * const count = await prisma.checklist.count({
     *   where: {
     *     // ... the filter for the Checklists we want to count
     *   }
     * })
    **/
    count<T extends ChecklistCountArgs>(
      args?: Subset<T, ChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistAggregateArgs>(args: Subset<T, ChecklistAggregateArgs>): Prisma.PrismaPromise<GetChecklistAggregateType<T>>

    /**
     * Group by Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checklist model
   */
  readonly fields: ChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Checklist$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Checklist$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Checklist$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Checklist$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checklist model
   */
  interface ChecklistFieldRefs {
    readonly id: FieldRef<"Checklist", 'String'>
    readonly name: FieldRef<"Checklist", 'String'>
    readonly description: FieldRef<"Checklist", 'String'>
    readonly isActive: FieldRef<"Checklist", 'Boolean'>
    readonly createdAt: FieldRef<"Checklist", 'DateTime'>
    readonly updatedAt: FieldRef<"Checklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checklist findUnique
   */
  export type ChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findUniqueOrThrow
   */
  export type ChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findFirst
   */
  export type ChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findFirstOrThrow
   */
  export type ChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findMany
   */
  export type ChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklists to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist create
   */
  export type ChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a Checklist.
     */
    data: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
  }

  /**
   * Checklist createMany
   */
  export type ChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checklist createManyAndReturn
   */
  export type ChecklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checklist update
   */
  export type ChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a Checklist.
     */
    data: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
    /**
     * Choose, which Checklist to update.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist updateMany
   */
  export type ChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
  }

  /**
   * Checklist updateManyAndReturn
   */
  export type ChecklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
  }

  /**
   * Checklist upsert
   */
  export type ChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the Checklist to update in case it exists.
     */
    where: ChecklistWhereUniqueInput
    /**
     * In case the Checklist found by the `where` argument doesn't exist, create a new Checklist with this data.
     */
    create: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
    /**
     * In case the Checklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
  }

  /**
   * Checklist delete
   */
  export type ChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter which Checklist to delete.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist deleteMany
   */
  export type ChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklists to delete
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to delete.
     */
    limit?: number
  }

  /**
   * Checklist.questions
   */
  export type Checklist$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Checklist.events
   */
  export type Checklist$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Checklist without action
   */
  export type ChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuestionSumAggregateOutputType = {
    order: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    description: string | null
    type: $Enums.QuestionType | null
    isRequired: boolean | null
    checklistId: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    type: $Enums.QuestionType | null
    isRequired: boolean | null
    checklistId: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    description: number
    type: number
    isRequired: number
    checklistId: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    order?: true
  }

  export type QuestionSumAggregateInputType = {
    order?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    description?: true
    type?: true
    isRequired?: true
    checklistId?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    description?: true
    type?: true
    isRequired?: true
    checklistId?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    description?: true
    type?: true
    isRequired?: true
    checklistId?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    description: string
    type: $Enums.QuestionType
    isRequired: boolean
    checklistId: string
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    type?: boolean
    isRequired?: boolean
    checklistId?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    questionResponses?: boolean | Question$questionResponsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    type?: boolean
    isRequired?: boolean
    checklistId?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    type?: boolean
    isRequired?: boolean
    checklistId?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    description?: boolean
    type?: boolean
    isRequired?: boolean
    checklistId?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "type" | "isRequired" | "checklistId" | "order" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    questionResponses?: boolean | Question$questionResponsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      checklist: Prisma.$ChecklistPayload<ExtArgs>
      questionResponses: Prisma.$QuestionResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      type: $Enums.QuestionType
      isRequired: boolean
      checklistId: string
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checklist<T extends ChecklistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistDefaultArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionResponses<T extends Question$questionResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Question$questionResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly description: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'QuestionType'>
    readonly isRequired: FieldRef<"Question", 'Boolean'>
    readonly checklistId: FieldRef<"Question", 'String'>
    readonly order: FieldRef<"Question", 'Int'>
    readonly isActive: FieldRef<"Question", 'Boolean'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.questionResponses
   */
  export type Question$questionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    cursor?: QuestionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionResponse
   */

  export type AggregateQuestionResponse = {
    _count: QuestionResponseCountAggregateOutputType | null
    _avg: QuestionResponseAvgAggregateOutputType | null
    _sum: QuestionResponseSumAggregateOutputType | null
    _min: QuestionResponseMinAggregateOutputType | null
    _max: QuestionResponseMaxAggregateOutputType | null
  }

  export type QuestionResponseAvgAggregateOutputType = {
    scaleResponse: number | null
  }

  export type QuestionResponseSumAggregateOutputType = {
    scaleResponse: number | null
  }

  export type QuestionResponseMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    articleVersionId: string | null
    userId: string | null
    booleanResponse: boolean | null
    scaleResponse: number | null
    textResponse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionResponseMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    articleVersionId: string | null
    userId: string | null
    booleanResponse: boolean | null
    scaleResponse: number | null
    textResponse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionResponseCountAggregateOutputType = {
    id: number
    questionId: number
    articleVersionId: number
    userId: number
    booleanResponse: number
    scaleResponse: number
    textResponse: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionResponseAvgAggregateInputType = {
    scaleResponse?: true
  }

  export type QuestionResponseSumAggregateInputType = {
    scaleResponse?: true
  }

  export type QuestionResponseMinAggregateInputType = {
    id?: true
    questionId?: true
    articleVersionId?: true
    userId?: true
    booleanResponse?: true
    scaleResponse?: true
    textResponse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionResponseMaxAggregateInputType = {
    id?: true
    questionId?: true
    articleVersionId?: true
    userId?: true
    booleanResponse?: true
    scaleResponse?: true
    textResponse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionResponseCountAggregateInputType = {
    id?: true
    questionId?: true
    articleVersionId?: true
    userId?: true
    booleanResponse?: true
    scaleResponse?: true
    textResponse?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionResponse to aggregate.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionResponses
    **/
    _count?: true | QuestionResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionResponseMaxAggregateInputType
  }

  export type GetQuestionResponseAggregateType<T extends QuestionResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionResponse[P]>
      : GetScalarType<T[P], AggregateQuestionResponse[P]>
  }




  export type QuestionResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithAggregationInput | QuestionResponseOrderByWithAggregationInput[]
    by: QuestionResponseScalarFieldEnum[] | QuestionResponseScalarFieldEnum
    having?: QuestionResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionResponseCountAggregateInputType | true
    _avg?: QuestionResponseAvgAggregateInputType
    _sum?: QuestionResponseSumAggregateInputType
    _min?: QuestionResponseMinAggregateInputType
    _max?: QuestionResponseMaxAggregateInputType
  }

  export type QuestionResponseGroupByOutputType = {
    id: string
    questionId: string
    articleVersionId: string
    userId: string
    booleanResponse: boolean | null
    scaleResponse: number | null
    textResponse: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionResponseCountAggregateOutputType | null
    _avg: QuestionResponseAvgAggregateOutputType | null
    _sum: QuestionResponseSumAggregateOutputType | null
    _min: QuestionResponseMinAggregateOutputType | null
    _max: QuestionResponseMaxAggregateOutputType | null
  }

  type GetQuestionResponseGroupByPayload<T extends QuestionResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionResponseGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionResponseGroupByOutputType[P]>
        }
      >
    >


  export type QuestionResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    articleVersionId?: boolean
    userId?: boolean
    booleanResponse?: boolean
    scaleResponse?: boolean
    textResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    articleVersionId?: boolean
    userId?: boolean
    booleanResponse?: boolean
    scaleResponse?: boolean
    textResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    articleVersionId?: boolean
    userId?: boolean
    booleanResponse?: boolean
    scaleResponse?: boolean
    textResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectScalar = {
    id?: boolean
    questionId?: boolean
    articleVersionId?: boolean
    userId?: boolean
    booleanResponse?: boolean
    scaleResponse?: boolean
    textResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "articleVersionId" | "userId" | "booleanResponse" | "scaleResponse" | "textResponse" | "createdAt" | "updatedAt", ExtArgs["result"]["questionResponse"]>
  export type QuestionResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    articleVersion?: boolean | ArticleVersionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionResponse"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      articleVersion: Prisma.$ArticleVersionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      articleVersionId: string
      userId: string
      booleanResponse: boolean | null
      scaleResponse: number | null
      textResponse: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questionResponse"]>
    composites: {}
  }

  type QuestionResponseGetPayload<S extends boolean | null | undefined | QuestionResponseDefaultArgs> = $Result.GetResult<Prisma.$QuestionResponsePayload, S>

  type QuestionResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionResponseCountAggregateInputType | true
    }

  export interface QuestionResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionResponse'], meta: { name: 'QuestionResponse' } }
    /**
     * Find zero or one QuestionResponse that matches the filter.
     * @param {QuestionResponseFindUniqueArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionResponseFindUniqueArgs>(args: SelectSubset<T, QuestionResponseFindUniqueArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionResponseFindUniqueOrThrowArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindFirstArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionResponseFindFirstArgs>(args?: SelectSubset<T, QuestionResponseFindFirstArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindFirstOrThrowArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionResponses
     * const questionResponses = await prisma.questionResponse.findMany()
     * 
     * // Get first 10 QuestionResponses
     * const questionResponses = await prisma.questionResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionResponseWithIdOnly = await prisma.questionResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionResponseFindManyArgs>(args?: SelectSubset<T, QuestionResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionResponse.
     * @param {QuestionResponseCreateArgs} args - Arguments to create a QuestionResponse.
     * @example
     * // Create one QuestionResponse
     * const QuestionResponse = await prisma.questionResponse.create({
     *   data: {
     *     // ... data to create a QuestionResponse
     *   }
     * })
     * 
     */
    create<T extends QuestionResponseCreateArgs>(args: SelectSubset<T, QuestionResponseCreateArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionResponses.
     * @param {QuestionResponseCreateManyArgs} args - Arguments to create many QuestionResponses.
     * @example
     * // Create many QuestionResponses
     * const questionResponse = await prisma.questionResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionResponseCreateManyArgs>(args?: SelectSubset<T, QuestionResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionResponses and returns the data saved in the database.
     * @param {QuestionResponseCreateManyAndReturnArgs} args - Arguments to create many QuestionResponses.
     * @example
     * // Create many QuestionResponses
     * const questionResponse = await prisma.questionResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionResponses and only return the `id`
     * const questionResponseWithIdOnly = await prisma.questionResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionResponse.
     * @param {QuestionResponseDeleteArgs} args - Arguments to delete one QuestionResponse.
     * @example
     * // Delete one QuestionResponse
     * const QuestionResponse = await prisma.questionResponse.delete({
     *   where: {
     *     // ... filter to delete one QuestionResponse
     *   }
     * })
     * 
     */
    delete<T extends QuestionResponseDeleteArgs>(args: SelectSubset<T, QuestionResponseDeleteArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionResponse.
     * @param {QuestionResponseUpdateArgs} args - Arguments to update one QuestionResponse.
     * @example
     * // Update one QuestionResponse
     * const questionResponse = await prisma.questionResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionResponseUpdateArgs>(args: SelectSubset<T, QuestionResponseUpdateArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionResponses.
     * @param {QuestionResponseDeleteManyArgs} args - Arguments to filter QuestionResponses to delete.
     * @example
     * // Delete a few QuestionResponses
     * const { count } = await prisma.questionResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionResponseDeleteManyArgs>(args?: SelectSubset<T, QuestionResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionResponses
     * const questionResponse = await prisma.questionResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionResponseUpdateManyArgs>(args: SelectSubset<T, QuestionResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionResponses and returns the data updated in the database.
     * @param {QuestionResponseUpdateManyAndReturnArgs} args - Arguments to update many QuestionResponses.
     * @example
     * // Update many QuestionResponses
     * const questionResponse = await prisma.questionResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionResponses and only return the `id`
     * const questionResponseWithIdOnly = await prisma.questionResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionResponse.
     * @param {QuestionResponseUpsertArgs} args - Arguments to update or create a QuestionResponse.
     * @example
     * // Update or create a QuestionResponse
     * const questionResponse = await prisma.questionResponse.upsert({
     *   create: {
     *     // ... data to create a QuestionResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionResponse we want to update
     *   }
     * })
     */
    upsert<T extends QuestionResponseUpsertArgs>(args: SelectSubset<T, QuestionResponseUpsertArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseCountArgs} args - Arguments to filter QuestionResponses to count.
     * @example
     * // Count the number of QuestionResponses
     * const count = await prisma.questionResponse.count({
     *   where: {
     *     // ... the filter for the QuestionResponses we want to count
     *   }
     * })
    **/
    count<T extends QuestionResponseCountArgs>(
      args?: Subset<T, QuestionResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionResponseAggregateArgs>(args: Subset<T, QuestionResponseAggregateArgs>): Prisma.PrismaPromise<GetQuestionResponseAggregateType<T>>

    /**
     * Group by QuestionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionResponseGroupByArgs['orderBy'] }
        : { orderBy?: QuestionResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionResponse model
   */
  readonly fields: QuestionResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    articleVersion<T extends ArticleVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleVersionDefaultArgs<ExtArgs>>): Prisma__ArticleVersionClient<$Result.GetResult<Prisma.$ArticleVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionResponse model
   */
  interface QuestionResponseFieldRefs {
    readonly id: FieldRef<"QuestionResponse", 'String'>
    readonly questionId: FieldRef<"QuestionResponse", 'String'>
    readonly articleVersionId: FieldRef<"QuestionResponse", 'String'>
    readonly userId: FieldRef<"QuestionResponse", 'String'>
    readonly booleanResponse: FieldRef<"QuestionResponse", 'Boolean'>
    readonly scaleResponse: FieldRef<"QuestionResponse", 'Int'>
    readonly textResponse: FieldRef<"QuestionResponse", 'String'>
    readonly createdAt: FieldRef<"QuestionResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestionResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionResponse findUnique
   */
  export type QuestionResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse findUniqueOrThrow
   */
  export type QuestionResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse findFirst
   */
  export type QuestionResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionResponses.
     */
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse findFirstOrThrow
   */
  export type QuestionResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionResponses.
     */
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse findMany
   */
  export type QuestionResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponses to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse create
   */
  export type QuestionResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionResponse.
     */
    data: XOR<QuestionResponseCreateInput, QuestionResponseUncheckedCreateInput>
  }

  /**
   * QuestionResponse createMany
   */
  export type QuestionResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionResponses.
     */
    data: QuestionResponseCreateManyInput | QuestionResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionResponse createManyAndReturn
   */
  export type QuestionResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionResponses.
     */
    data: QuestionResponseCreateManyInput | QuestionResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionResponse update
   */
  export type QuestionResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionResponse.
     */
    data: XOR<QuestionResponseUpdateInput, QuestionResponseUncheckedUpdateInput>
    /**
     * Choose, which QuestionResponse to update.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse updateMany
   */
  export type QuestionResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionResponses.
     */
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuestionResponses to update
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to update.
     */
    limit?: number
  }

  /**
   * QuestionResponse updateManyAndReturn
   */
  export type QuestionResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * The data used to update QuestionResponses.
     */
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuestionResponses to update
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionResponse upsert
   */
  export type QuestionResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionResponse to update in case it exists.
     */
    where: QuestionResponseWhereUniqueInput
    /**
     * In case the QuestionResponse found by the `where` argument doesn't exist, create a new QuestionResponse with this data.
     */
    create: XOR<QuestionResponseCreateInput, QuestionResponseUncheckedCreateInput>
    /**
     * In case the QuestionResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionResponseUpdateInput, QuestionResponseUncheckedUpdateInput>
  }

  /**
   * QuestionResponse delete
   */
  export type QuestionResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter which QuestionResponse to delete.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse deleteMany
   */
  export type QuestionResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionResponses to delete
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to delete.
     */
    limit?: number
  }

  /**
   * QuestionResponse without action
   */
  export type QuestionResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    isFirstLogin: 'isFirstLogin',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isFromBpk: 'isFromBpk'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    banner: 'banner',
    description: 'description',
    eventStartDate: 'eventStartDate',
    eventEndDate: 'eventEndDate',
    submissionStartDate: 'submissionStartDate',
    submissionEndDate: 'submissionEndDate',
    status: 'status',
    evaluationType: 'evaluationType',
    isActive: 'isActive',
    checklistId: 'checklistId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    summary: 'summary',
    thematicArea: 'thematicArea',
    currentVersion: 'currentVersion',
    evaluationsDone: 'evaluationsDone',
    status: 'status',
    eventId: 'eventId',
    userId: 'userId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const ArticleVersionScalarFieldEnum: {
    id: 'id',
    version: 'version',
    pdfPath: 'pdfPath',
    articleId: 'articleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleVersionScalarFieldEnum = (typeof ArticleVersionScalarFieldEnum)[keyof typeof ArticleVersionScalarFieldEnum]


  export const ArticleKeywordScalarFieldEnum: {
    id: 'id',
    name: 'name',
    articleId: 'articleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleKeywordScalarFieldEnum = (typeof ArticleKeywordScalarFieldEnum)[keyof typeof ArticleKeywordScalarFieldEnum]


  export const RelatedAuthorScalarFieldEnum: {
    id: 'id',
    coAuthorName: 'coAuthorName',
    articleId: 'articleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RelatedAuthorScalarFieldEnum = (typeof RelatedAuthorScalarFieldEnum)[keyof typeof RelatedAuthorScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    id: 'id',
    grade: 'grade',
    evaluationDescription: 'evaluationDescription',
    evaluationDate: 'evaluationDate',
    userId: 'userId',
    status: 'status',
    articleVersionId: 'articleVersionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const EventEvaluatorScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventEvaluatorScalarFieldEnum = (typeof EventEvaluatorScalarFieldEnum)[keyof typeof EventEvaluatorScalarFieldEnum]


  export const ArticleEvaluatorAssignmentScalarFieldEnum: {
    id: 'id',
    eventEvaluatorId: 'eventEvaluatorId',
    articleId: 'articleId',
    userId: 'userId',
    isCorrected: 'isCorrected',
    assignedAt: 'assignedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleEvaluatorAssignmentScalarFieldEnum = (typeof ArticleEvaluatorAssignmentScalarFieldEnum)[keyof typeof ArticleEvaluatorAssignmentScalarFieldEnum]


  export const ChecklistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChecklistScalarFieldEnum = (typeof ChecklistScalarFieldEnum)[keyof typeof ChecklistScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    type: 'type',
    isRequired: 'isRequired',
    checklistId: 'checklistId',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionResponseScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    articleVersionId: 'articleVersionId',
    userId: 'userId',
    booleanResponse: 'booleanResponse',
    scaleResponse: 'scaleResponse',
    textResponse: 'textResponse',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionResponseScalarFieldEnum = (typeof QuestionResponseScalarFieldEnum)[keyof typeof QuestionResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoleType'
   */
  export type EnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType'>
    


  /**
   * Reference to a field of type 'RoleType[]'
   */
  export type ListEnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'EvaluationType'
   */
  export type EnumEvaluationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationType'>
    


  /**
   * Reference to a field of type 'EvaluationType[]'
   */
  export type ListEnumEvaluationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ArticleStatus'
   */
  export type EnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus'>
    


  /**
   * Reference to a field of type 'ArticleStatus[]'
   */
  export type ListEnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus[]'>
    


  /**
   * Reference to a field of type 'EvaluationStatus'
   */
  export type EnumEvaluationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationStatus'>
    


  /**
   * Reference to a field of type 'EvaluationStatus[]'
   */
  export type ListEnumEvaluationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationStatus[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleTypeFilter<"User"> | $Enums.RoleType
    isFirstLogin?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isFromBpk?: BoolFilter<"User"> | boolean
    articles?: ArticleListRelationFilter
    evaluations?: EvaluationListRelationFilter
    eventEvaluators?: EventEvaluatorListRelationFilter
    questionResponses?: QuestionResponseListRelationFilter
    articleAssignments?: ArticleEvaluatorAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isFirstLogin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFromBpk?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    evaluations?: EvaluationOrderByRelationAggregateInput
    eventEvaluators?: EventEvaluatorOrderByRelationAggregateInput
    questionResponses?: QuestionResponseOrderByRelationAggregateInput
    articleAssignments?: ArticleEvaluatorAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleTypeFilter<"User"> | $Enums.RoleType
    isFirstLogin?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isFromBpk?: BoolFilter<"User"> | boolean
    articles?: ArticleListRelationFilter
    evaluations?: EvaluationListRelationFilter
    eventEvaluators?: EventEvaluatorListRelationFilter
    questionResponses?: QuestionResponseListRelationFilter
    articleAssignments?: ArticleEvaluatorAssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isFirstLogin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFromBpk?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleTypeWithAggregatesFilter<"User"> | $Enums.RoleType
    isFirstLogin?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isFromBpk?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: UuidFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    banner?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    eventStartDate?: DateTimeFilter<"Event"> | Date | string
    eventEndDate?: DateTimeFilter<"Event"> | Date | string
    submissionStartDate?: DateTimeFilter<"Event"> | Date | string
    submissionEndDate?: DateTimeFilter<"Event"> | Date | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFilter<"Event"> | $Enums.EvaluationType
    isActive?: BoolFilter<"Event"> | boolean
    checklistId?: UuidNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    articles?: ArticleListRelationFilter
    eventEvaluators?: EventEvaluatorListRelationFilter
    checklist?: XOR<ChecklistNullableScalarRelationFilter, ChecklistWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    banner?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    submissionStartDate?: SortOrder
    submissionEndDate?: SortOrder
    status?: SortOrder
    evaluationType?: SortOrder
    isActive?: SortOrder
    checklistId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    eventEvaluators?: EventEvaluatorOrderByRelationAggregateInput
    checklist?: ChecklistOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    banner?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    eventStartDate?: DateTimeFilter<"Event"> | Date | string
    eventEndDate?: DateTimeFilter<"Event"> | Date | string
    submissionStartDate?: DateTimeFilter<"Event"> | Date | string
    submissionEndDate?: DateTimeFilter<"Event"> | Date | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFilter<"Event"> | $Enums.EvaluationType
    isActive?: BoolFilter<"Event"> | boolean
    checklistId?: UuidNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    articles?: ArticleListRelationFilter
    eventEvaluators?: EventEvaluatorListRelationFilter
    checklist?: XOR<ChecklistNullableScalarRelationFilter, ChecklistWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    banner?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    submissionStartDate?: SortOrder
    submissionEndDate?: SortOrder
    status?: SortOrder
    evaluationType?: SortOrder
    isActive?: SortOrder
    checklistId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    banner?: StringNullableWithAggregatesFilter<"Event"> | string | null
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventStartDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    eventEndDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    submissionStartDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    submissionEndDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeWithAggregatesFilter<"Event"> | $Enums.EvaluationType
    isActive?: BoolWithAggregatesFilter<"Event"> | boolean
    checklistId?: UuidNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: UuidFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    summary?: StringFilter<"Article"> | string
    thematicArea?: StringNullableFilter<"Article"> | string | null
    currentVersion?: IntFilter<"Article"> | number
    evaluationsDone?: IntFilter<"Article"> | number
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    eventId?: UuidFilter<"Article"> | string
    userId?: UuidFilter<"Article"> | string
    isActive?: BoolFilter<"Article"> | boolean
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    versions?: ArticleVersionListRelationFilter
    keywords?: ArticleKeywordListRelationFilter
    relatedAuthors?: RelatedAuthorListRelationFilter
    evaluatorAssignments?: ArticleEvaluatorAssignmentListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    thematicArea?: SortOrderInput | SortOrder
    currentVersion?: SortOrder
    evaluationsDone?: SortOrder
    status?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    versions?: ArticleVersionOrderByRelationAggregateInput
    keywords?: ArticleKeywordOrderByRelationAggregateInput
    relatedAuthors?: RelatedAuthorOrderByRelationAggregateInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    summary?: StringFilter<"Article"> | string
    thematicArea?: StringNullableFilter<"Article"> | string | null
    currentVersion?: IntFilter<"Article"> | number
    evaluationsDone?: IntFilter<"Article"> | number
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    eventId?: UuidFilter<"Article"> | string
    userId?: UuidFilter<"Article"> | string
    isActive?: BoolFilter<"Article"> | boolean
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    versions?: ArticleVersionListRelationFilter
    keywords?: ArticleKeywordListRelationFilter
    relatedAuthors?: RelatedAuthorListRelationFilter
    evaluatorAssignments?: ArticleEvaluatorAssignmentListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    thematicArea?: SortOrderInput | SortOrder
    currentVersion?: SortOrder
    evaluationsDone?: SortOrder
    status?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    summary?: StringWithAggregatesFilter<"Article"> | string
    thematicArea?: StringNullableWithAggregatesFilter<"Article"> | string | null
    currentVersion?: IntWithAggregatesFilter<"Article"> | number
    evaluationsDone?: IntWithAggregatesFilter<"Article"> | number
    status?: EnumArticleStatusWithAggregatesFilter<"Article"> | $Enums.ArticleStatus
    eventId?: UuidWithAggregatesFilter<"Article"> | string
    userId?: UuidWithAggregatesFilter<"Article"> | string
    isActive?: BoolWithAggregatesFilter<"Article"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type ArticleVersionWhereInput = {
    AND?: ArticleVersionWhereInput | ArticleVersionWhereInput[]
    OR?: ArticleVersionWhereInput[]
    NOT?: ArticleVersionWhereInput | ArticleVersionWhereInput[]
    id?: UuidFilter<"ArticleVersion"> | string
    version?: IntFilter<"ArticleVersion"> | number
    pdfPath?: StringFilter<"ArticleVersion"> | string
    articleId?: UuidFilter<"ArticleVersion"> | string
    createdAt?: DateTimeFilter<"ArticleVersion"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleVersion"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    evaluations?: EvaluationListRelationFilter
    questionResponses?: QuestionResponseListRelationFilter
  }

  export type ArticleVersionOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    pdfPath?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
    evaluations?: EvaluationOrderByRelationAggregateInput
    questionResponses?: QuestionResponseOrderByRelationAggregateInput
  }

  export type ArticleVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    articleId_version?: ArticleVersionArticleIdVersionCompoundUniqueInput
    AND?: ArticleVersionWhereInput | ArticleVersionWhereInput[]
    OR?: ArticleVersionWhereInput[]
    NOT?: ArticleVersionWhereInput | ArticleVersionWhereInput[]
    version?: IntFilter<"ArticleVersion"> | number
    pdfPath?: StringFilter<"ArticleVersion"> | string
    articleId?: UuidFilter<"ArticleVersion"> | string
    createdAt?: DateTimeFilter<"ArticleVersion"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleVersion"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    evaluations?: EvaluationListRelationFilter
    questionResponses?: QuestionResponseListRelationFilter
  }, "id" | "articleId_version">

  export type ArticleVersionOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    pdfPath?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleVersionCountOrderByAggregateInput
    _avg?: ArticleVersionAvgOrderByAggregateInput
    _max?: ArticleVersionMaxOrderByAggregateInput
    _min?: ArticleVersionMinOrderByAggregateInput
    _sum?: ArticleVersionSumOrderByAggregateInput
  }

  export type ArticleVersionScalarWhereWithAggregatesInput = {
    AND?: ArticleVersionScalarWhereWithAggregatesInput | ArticleVersionScalarWhereWithAggregatesInput[]
    OR?: ArticleVersionScalarWhereWithAggregatesInput[]
    NOT?: ArticleVersionScalarWhereWithAggregatesInput | ArticleVersionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ArticleVersion"> | string
    version?: IntWithAggregatesFilter<"ArticleVersion"> | number
    pdfPath?: StringWithAggregatesFilter<"ArticleVersion"> | string
    articleId?: UuidWithAggregatesFilter<"ArticleVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArticleVersion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleVersion"> | Date | string
  }

  export type ArticleKeywordWhereInput = {
    AND?: ArticleKeywordWhereInput | ArticleKeywordWhereInput[]
    OR?: ArticleKeywordWhereInput[]
    NOT?: ArticleKeywordWhereInput | ArticleKeywordWhereInput[]
    id?: UuidFilter<"ArticleKeyword"> | string
    name?: StringFilter<"ArticleKeyword"> | string
    articleId?: UuidFilter<"ArticleKeyword"> | string
    createdAt?: DateTimeFilter<"ArticleKeyword"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleKeyword"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }

  export type ArticleKeywordOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
  }

  export type ArticleKeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleKeywordWhereInput | ArticleKeywordWhereInput[]
    OR?: ArticleKeywordWhereInput[]
    NOT?: ArticleKeywordWhereInput | ArticleKeywordWhereInput[]
    name?: StringFilter<"ArticleKeyword"> | string
    articleId?: UuidFilter<"ArticleKeyword"> | string
    createdAt?: DateTimeFilter<"ArticleKeyword"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleKeyword"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }, "id">

  export type ArticleKeywordOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleKeywordCountOrderByAggregateInput
    _max?: ArticleKeywordMaxOrderByAggregateInput
    _min?: ArticleKeywordMinOrderByAggregateInput
  }

  export type ArticleKeywordScalarWhereWithAggregatesInput = {
    AND?: ArticleKeywordScalarWhereWithAggregatesInput | ArticleKeywordScalarWhereWithAggregatesInput[]
    OR?: ArticleKeywordScalarWhereWithAggregatesInput[]
    NOT?: ArticleKeywordScalarWhereWithAggregatesInput | ArticleKeywordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ArticleKeyword"> | string
    name?: StringWithAggregatesFilter<"ArticleKeyword"> | string
    articleId?: UuidWithAggregatesFilter<"ArticleKeyword"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArticleKeyword"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleKeyword"> | Date | string
  }

  export type RelatedAuthorWhereInput = {
    AND?: RelatedAuthorWhereInput | RelatedAuthorWhereInput[]
    OR?: RelatedAuthorWhereInput[]
    NOT?: RelatedAuthorWhereInput | RelatedAuthorWhereInput[]
    id?: UuidFilter<"RelatedAuthor"> | string
    coAuthorName?: StringFilter<"RelatedAuthor"> | string
    articleId?: UuidFilter<"RelatedAuthor"> | string
    createdAt?: DateTimeFilter<"RelatedAuthor"> | Date | string
    updatedAt?: DateTimeFilter<"RelatedAuthor"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }

  export type RelatedAuthorOrderByWithRelationInput = {
    id?: SortOrder
    coAuthorName?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
  }

  export type RelatedAuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RelatedAuthorWhereInput | RelatedAuthorWhereInput[]
    OR?: RelatedAuthorWhereInput[]
    NOT?: RelatedAuthorWhereInput | RelatedAuthorWhereInput[]
    coAuthorName?: StringFilter<"RelatedAuthor"> | string
    articleId?: UuidFilter<"RelatedAuthor"> | string
    createdAt?: DateTimeFilter<"RelatedAuthor"> | Date | string
    updatedAt?: DateTimeFilter<"RelatedAuthor"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }, "id">

  export type RelatedAuthorOrderByWithAggregationInput = {
    id?: SortOrder
    coAuthorName?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RelatedAuthorCountOrderByAggregateInput
    _max?: RelatedAuthorMaxOrderByAggregateInput
    _min?: RelatedAuthorMinOrderByAggregateInput
  }

  export type RelatedAuthorScalarWhereWithAggregatesInput = {
    AND?: RelatedAuthorScalarWhereWithAggregatesInput | RelatedAuthorScalarWhereWithAggregatesInput[]
    OR?: RelatedAuthorScalarWhereWithAggregatesInput[]
    NOT?: RelatedAuthorScalarWhereWithAggregatesInput | RelatedAuthorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RelatedAuthor"> | string
    coAuthorName?: StringWithAggregatesFilter<"RelatedAuthor"> | string
    articleId?: UuidWithAggregatesFilter<"RelatedAuthor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RelatedAuthor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RelatedAuthor"> | Date | string
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    id?: UuidFilter<"Evaluation"> | string
    grade?: IntFilter<"Evaluation"> | number
    evaluationDescription?: StringNullableFilter<"Evaluation"> | string | null
    evaluationDate?: DateTimeFilter<"Evaluation"> | Date | string
    userId?: UuidFilter<"Evaluation"> | string
    status?: EnumEvaluationStatusFilter<"Evaluation"> | $Enums.EvaluationStatus
    articleVersionId?: UuidFilter<"Evaluation"> | string
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    articleVersion?: XOR<ArticleVersionScalarRelationFilter, ArticleVersionWhereInput>
  }

  export type EvaluationOrderByWithRelationInput = {
    id?: SortOrder
    grade?: SortOrder
    evaluationDescription?: SortOrderInput | SortOrder
    evaluationDate?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    articleVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    articleVersion?: ArticleVersionOrderByWithRelationInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_articleVersionId?: EvaluationUserIdArticleVersionIdCompoundUniqueInput
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    grade?: IntFilter<"Evaluation"> | number
    evaluationDescription?: StringNullableFilter<"Evaluation"> | string | null
    evaluationDate?: DateTimeFilter<"Evaluation"> | Date | string
    userId?: UuidFilter<"Evaluation"> | string
    status?: EnumEvaluationStatusFilter<"Evaluation"> | $Enums.EvaluationStatus
    articleVersionId?: UuidFilter<"Evaluation"> | string
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    articleVersion?: XOR<ArticleVersionScalarRelationFilter, ArticleVersionWhereInput>
  }, "id" | "userId_articleVersionId">

  export type EvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    grade?: SortOrder
    evaluationDescription?: SortOrderInput | SortOrder
    evaluationDate?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    articleVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _avg?: EvaluationAvgOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
    _sum?: EvaluationSumOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Evaluation"> | string
    grade?: IntWithAggregatesFilter<"Evaluation"> | number
    evaluationDescription?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
    evaluationDate?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
    userId?: UuidWithAggregatesFilter<"Evaluation"> | string
    status?: EnumEvaluationStatusWithAggregatesFilter<"Evaluation"> | $Enums.EvaluationStatus
    articleVersionId?: UuidWithAggregatesFilter<"Evaluation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
  }

  export type EventEvaluatorWhereInput = {
    AND?: EventEvaluatorWhereInput | EventEvaluatorWhereInput[]
    OR?: EventEvaluatorWhereInput[]
    NOT?: EventEvaluatorWhereInput | EventEvaluatorWhereInput[]
    id?: UuidFilter<"EventEvaluator"> | string
    eventId?: UuidFilter<"EventEvaluator"> | string
    userId?: UuidFilter<"EventEvaluator"> | string
    isActive?: BoolFilter<"EventEvaluator"> | boolean
    createdAt?: DateTimeFilter<"EventEvaluator"> | Date | string
    updatedAt?: DateTimeFilter<"EventEvaluator"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    articleAssignments?: ArticleEvaluatorAssignmentListRelationFilter
  }

  export type EventEvaluatorOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    articleAssignments?: ArticleEvaluatorAssignmentOrderByRelationAggregateInput
  }

  export type EventEvaluatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_userId?: EventEvaluatorEventIdUserIdCompoundUniqueInput
    AND?: EventEvaluatorWhereInput | EventEvaluatorWhereInput[]
    OR?: EventEvaluatorWhereInput[]
    NOT?: EventEvaluatorWhereInput | EventEvaluatorWhereInput[]
    eventId?: UuidFilter<"EventEvaluator"> | string
    userId?: UuidFilter<"EventEvaluator"> | string
    isActive?: BoolFilter<"EventEvaluator"> | boolean
    createdAt?: DateTimeFilter<"EventEvaluator"> | Date | string
    updatedAt?: DateTimeFilter<"EventEvaluator"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    articleAssignments?: ArticleEvaluatorAssignmentListRelationFilter
  }, "id" | "eventId_userId">

  export type EventEvaluatorOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventEvaluatorCountOrderByAggregateInput
    _max?: EventEvaluatorMaxOrderByAggregateInput
    _min?: EventEvaluatorMinOrderByAggregateInput
  }

  export type EventEvaluatorScalarWhereWithAggregatesInput = {
    AND?: EventEvaluatorScalarWhereWithAggregatesInput | EventEvaluatorScalarWhereWithAggregatesInput[]
    OR?: EventEvaluatorScalarWhereWithAggregatesInput[]
    NOT?: EventEvaluatorScalarWhereWithAggregatesInput | EventEvaluatorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventEvaluator"> | string
    eventId?: UuidWithAggregatesFilter<"EventEvaluator"> | string
    userId?: UuidWithAggregatesFilter<"EventEvaluator"> | string
    isActive?: BoolWithAggregatesFilter<"EventEvaluator"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EventEvaluator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventEvaluator"> | Date | string
  }

  export type ArticleEvaluatorAssignmentWhereInput = {
    AND?: ArticleEvaluatorAssignmentWhereInput | ArticleEvaluatorAssignmentWhereInput[]
    OR?: ArticleEvaluatorAssignmentWhereInput[]
    NOT?: ArticleEvaluatorAssignmentWhereInput | ArticleEvaluatorAssignmentWhereInput[]
    id?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    eventEvaluatorId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    articleId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    userId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    isCorrected?: BoolFilter<"ArticleEvaluatorAssignment"> | boolean
    assignedAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
    createdAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
    eventEvaluator?: XOR<EventEvaluatorScalarRelationFilter, EventEvaluatorWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArticleEvaluatorAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    eventEvaluatorId?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    isCorrected?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventEvaluator?: EventEvaluatorOrderByWithRelationInput
    article?: ArticleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ArticleEvaluatorAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventEvaluatorId_articleId?: ArticleEvaluatorAssignmentEventEvaluatorIdArticleIdCompoundUniqueInput
    AND?: ArticleEvaluatorAssignmentWhereInput | ArticleEvaluatorAssignmentWhereInput[]
    OR?: ArticleEvaluatorAssignmentWhereInput[]
    NOT?: ArticleEvaluatorAssignmentWhereInput | ArticleEvaluatorAssignmentWhereInput[]
    eventEvaluatorId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    articleId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    userId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    isCorrected?: BoolFilter<"ArticleEvaluatorAssignment"> | boolean
    assignedAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
    createdAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
    eventEvaluator?: XOR<EventEvaluatorScalarRelationFilter, EventEvaluatorWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "eventEvaluatorId_articleId">

  export type ArticleEvaluatorAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    eventEvaluatorId?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    isCorrected?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleEvaluatorAssignmentCountOrderByAggregateInput
    _max?: ArticleEvaluatorAssignmentMaxOrderByAggregateInput
    _min?: ArticleEvaluatorAssignmentMinOrderByAggregateInput
  }

  export type ArticleEvaluatorAssignmentScalarWhereWithAggregatesInput = {
    AND?: ArticleEvaluatorAssignmentScalarWhereWithAggregatesInput | ArticleEvaluatorAssignmentScalarWhereWithAggregatesInput[]
    OR?: ArticleEvaluatorAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ArticleEvaluatorAssignmentScalarWhereWithAggregatesInput | ArticleEvaluatorAssignmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ArticleEvaluatorAssignment"> | string
    eventEvaluatorId?: UuidWithAggregatesFilter<"ArticleEvaluatorAssignment"> | string
    articleId?: UuidWithAggregatesFilter<"ArticleEvaluatorAssignment"> | string
    userId?: UuidWithAggregatesFilter<"ArticleEvaluatorAssignment"> | string
    isCorrected?: BoolWithAggregatesFilter<"ArticleEvaluatorAssignment"> | boolean
    assignedAt?: DateTimeWithAggregatesFilter<"ArticleEvaluatorAssignment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ArticleEvaluatorAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleEvaluatorAssignment"> | Date | string
  }

  export type ChecklistWhereInput = {
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    id?: UuidFilter<"Checklist"> | string
    name?: StringFilter<"Checklist"> | string
    description?: StringNullableFilter<"Checklist"> | string | null
    isActive?: BoolFilter<"Checklist"> | boolean
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
    questions?: QuestionListRelationFilter
    events?: EventListRelationFilter
  }

  export type ChecklistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type ChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    name?: StringFilter<"Checklist"> | string
    description?: StringNullableFilter<"Checklist"> | string | null
    isActive?: BoolFilter<"Checklist"> | boolean
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
    questions?: QuestionListRelationFilter
    events?: EventListRelationFilter
  }, "id">

  export type ChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChecklistCountOrderByAggregateInput
    _max?: ChecklistMaxOrderByAggregateInput
    _min?: ChecklistMinOrderByAggregateInput
  }

  export type ChecklistScalarWhereWithAggregatesInput = {
    AND?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    OR?: ChecklistScalarWhereWithAggregatesInput[]
    NOT?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Checklist"> | string
    name?: StringWithAggregatesFilter<"Checklist"> | string
    description?: StringNullableWithAggregatesFilter<"Checklist"> | string | null
    isActive?: BoolWithAggregatesFilter<"Checklist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: UuidFilter<"Question"> | string
    description?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    isRequired?: BoolFilter<"Question"> | boolean
    checklistId?: UuidFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    checklist?: XOR<ChecklistScalarRelationFilter, ChecklistWhereInput>
    questionResponses?: QuestionResponseListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checklist?: ChecklistOrderByWithRelationInput
    questionResponses?: QuestionResponseOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    description?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    isRequired?: BoolFilter<"Question"> | boolean
    checklistId?: UuidFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    checklist?: XOR<ChecklistScalarRelationFilter, ChecklistWhereInput>
    questionResponses?: QuestionResponseListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Question"> | string
    description?: StringWithAggregatesFilter<"Question"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType
    isRequired?: BoolWithAggregatesFilter<"Question"> | boolean
    checklistId?: UuidWithAggregatesFilter<"Question"> | string
    order?: IntWithAggregatesFilter<"Question"> | number
    isActive?: BoolWithAggregatesFilter<"Question"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type QuestionResponseWhereInput = {
    AND?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    OR?: QuestionResponseWhereInput[]
    NOT?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    id?: UuidFilter<"QuestionResponse"> | string
    questionId?: UuidFilter<"QuestionResponse"> | string
    articleVersionId?: UuidFilter<"QuestionResponse"> | string
    userId?: UuidFilter<"QuestionResponse"> | string
    booleanResponse?: BoolNullableFilter<"QuestionResponse"> | boolean | null
    scaleResponse?: IntNullableFilter<"QuestionResponse"> | number | null
    textResponse?: StringNullableFilter<"QuestionResponse"> | string | null
    createdAt?: DateTimeFilter<"QuestionResponse"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionResponse"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    articleVersion?: XOR<ArticleVersionScalarRelationFilter, ArticleVersionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuestionResponseOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    articleVersionId?: SortOrder
    userId?: SortOrder
    booleanResponse?: SortOrderInput | SortOrder
    scaleResponse?: SortOrderInput | SortOrder
    textResponse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    articleVersion?: ArticleVersionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type QuestionResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId_articleVersionId_userId?: QuestionResponseQuestionIdArticleVersionIdUserIdCompoundUniqueInput
    AND?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    OR?: QuestionResponseWhereInput[]
    NOT?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    questionId?: UuidFilter<"QuestionResponse"> | string
    articleVersionId?: UuidFilter<"QuestionResponse"> | string
    userId?: UuidFilter<"QuestionResponse"> | string
    booleanResponse?: BoolNullableFilter<"QuestionResponse"> | boolean | null
    scaleResponse?: IntNullableFilter<"QuestionResponse"> | number | null
    textResponse?: StringNullableFilter<"QuestionResponse"> | string | null
    createdAt?: DateTimeFilter<"QuestionResponse"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionResponse"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    articleVersion?: XOR<ArticleVersionScalarRelationFilter, ArticleVersionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "questionId_articleVersionId_userId">

  export type QuestionResponseOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    articleVersionId?: SortOrder
    userId?: SortOrder
    booleanResponse?: SortOrderInput | SortOrder
    scaleResponse?: SortOrderInput | SortOrder
    textResponse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionResponseCountOrderByAggregateInput
    _avg?: QuestionResponseAvgOrderByAggregateInput
    _max?: QuestionResponseMaxOrderByAggregateInput
    _min?: QuestionResponseMinOrderByAggregateInput
    _sum?: QuestionResponseSumOrderByAggregateInput
  }

  export type QuestionResponseScalarWhereWithAggregatesInput = {
    AND?: QuestionResponseScalarWhereWithAggregatesInput | QuestionResponseScalarWhereWithAggregatesInput[]
    OR?: QuestionResponseScalarWhereWithAggregatesInput[]
    NOT?: QuestionResponseScalarWhereWithAggregatesInput | QuestionResponseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"QuestionResponse"> | string
    questionId?: UuidWithAggregatesFilter<"QuestionResponse"> | string
    articleVersionId?: UuidWithAggregatesFilter<"QuestionResponse"> | string
    userId?: UuidWithAggregatesFilter<"QuestionResponse"> | string
    booleanResponse?: BoolNullableWithAggregatesFilter<"QuestionResponse"> | boolean | null
    scaleResponse?: IntNullableWithAggregatesFilter<"QuestionResponse"> | number | null
    textResponse?: StringNullableWithAggregatesFilter<"QuestionResponse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuestionResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestionResponse"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorUncheckedCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUncheckedUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventCreateInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutEventInput
    eventEvaluators?: EventEvaluatorCreateNestedManyWithoutEventInput
    checklist?: ChecklistCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    checklistId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutEventInput
    eventEvaluators?: EventEvaluatorUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutEventNestedInput
    eventEvaluators?: EventEvaluatorUpdateManyWithoutEventNestedInput
    checklist?: ChecklistUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checklistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutEventNestedInput
    eventEvaluators?: EventEvaluatorUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    checklistId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checklistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    versions?: ArticleVersionCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArticleVersionUncheckedCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordUncheckedCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorUncheckedCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutArticlesNestedInput
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    versions?: ArticleVersionUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArticleVersionUncheckedUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUncheckedUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUncheckedUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleVersionCreateInput = {
    id?: string
    version: number
    pdfPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutVersionsInput
    evaluations?: EvaluationCreateNestedManyWithoutArticleVersionInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutArticleVersionInput
  }

  export type ArticleVersionUncheckedCreateInput = {
    id?: string
    version: number
    pdfPath: string
    articleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutArticleVersionInput
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutArticleVersionInput
  }

  export type ArticleVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutVersionsNestedInput
    evaluations?: EvaluationUpdateManyWithoutArticleVersionNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutArticleVersionNestedInput
  }

  export type ArticleVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutArticleVersionNestedInput
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutArticleVersionNestedInput
  }

  export type ArticleVersionCreateManyInput = {
    id?: string
    version: number
    pdfPath: string
    articleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleKeywordCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutKeywordsInput
  }

  export type ArticleKeywordUncheckedCreateInput = {
    id?: string
    name: string
    articleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleKeywordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutKeywordsNestedInput
  }

  export type ArticleKeywordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleKeywordCreateManyInput = {
    id?: string
    name: string
    articleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleKeywordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleKeywordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatedAuthorCreateInput = {
    id?: string
    coAuthorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutRelatedAuthorsInput
  }

  export type RelatedAuthorUncheckedCreateInput = {
    id?: string
    coAuthorName: string
    articleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatedAuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coAuthorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutRelatedAuthorsNestedInput
  }

  export type RelatedAuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coAuthorName?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatedAuthorCreateManyInput = {
    id?: string
    coAuthorName: string
    articleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatedAuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coAuthorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatedAuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coAuthorName?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    status?: $Enums.EvaluationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEvaluationsInput
    articleVersion: ArticleVersionCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    userId: string
    status?: $Enums.EvaluationStatus
    articleVersionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
    articleVersion?: ArticleVersionUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    articleVersionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateManyInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    userId: string
    status?: $Enums.EvaluationStatus
    articleVersionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    articleVersionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventEvaluatorCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutEventEvaluatorsInput
    user: UserCreateNestedOneWithoutEventEvaluatorsInput
    articleAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutEventEvaluatorInput
  }

  export type EventEvaluatorUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutEventEvaluatorInput
  }

  export type EventEvaluatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventEvaluatorsNestedInput
    user?: UserUpdateOneRequiredWithoutEventEvaluatorsNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutEventEvaluatorNestedInput
  }

  export type EventEvaluatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutEventEvaluatorNestedInput
  }

  export type EventEvaluatorCreateManyInput = {
    id?: string
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventEvaluatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventEvaluatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentCreateInput = {
    id?: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventEvaluator: EventEvaluatorCreateNestedOneWithoutArticleAssignmentsInput
    article: ArticleCreateNestedOneWithoutEvaluatorAssignmentsInput
    user: UserCreateNestedOneWithoutArticleAssignmentsInput
  }

  export type ArticleEvaluatorAssignmentUncheckedCreateInput = {
    id?: string
    eventEvaluatorId: string
    articleId: string
    userId: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleEvaluatorAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEvaluator?: EventEvaluatorUpdateOneRequiredWithoutArticleAssignmentsNestedInput
    article?: ArticleUpdateOneRequiredWithoutEvaluatorAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutArticleAssignmentsNestedInput
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventEvaluatorId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentCreateManyInput = {
    id?: string
    eventEvaluatorId: string
    articleId: string
    userId: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleEvaluatorAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventEvaluatorId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutChecklistInput
    events?: EventCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutChecklistInput
    events?: EventUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutChecklistNestedInput
    events?: EventUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutChecklistNestedInput
    events?: EventUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    description: string
    type?: $Enums.QuestionType
    isRequired?: boolean
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    checklist: ChecklistCreateNestedOneWithoutQuestionsInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    description: string
    type?: $Enums.QuestionType
    isRequired?: boolean
    checklistId: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneRequiredWithoutQuestionsNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    checklistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    description: string
    type?: $Enums.QuestionType
    isRequired?: boolean
    checklistId: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    checklistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseCreateInput = {
    id?: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutQuestionResponsesInput
    articleVersion: ArticleVersionCreateNestedOneWithoutQuestionResponsesInput
    user: UserCreateNestedOneWithoutQuestionResponsesInput
  }

  export type QuestionResponseUncheckedCreateInput = {
    id?: string
    questionId: string
    articleVersionId: string
    userId: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestionResponsesNestedInput
    articleVersion?: ArticleVersionUpdateOneRequiredWithoutQuestionResponsesNestedInput
    user?: UserUpdateOneRequiredWithoutQuestionResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    articleVersionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseCreateManyInput = {
    id?: string
    questionId: string
    articleVersionId: string
    userId: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    articleVersionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type EventEvaluatorListRelationFilter = {
    every?: EventEvaluatorWhereInput
    some?: EventEvaluatorWhereInput
    none?: EventEvaluatorWhereInput
  }

  export type QuestionResponseListRelationFilter = {
    every?: QuestionResponseWhereInput
    some?: QuestionResponseWhereInput
    none?: QuestionResponseWhereInput
  }

  export type ArticleEvaluatorAssignmentListRelationFilter = {
    every?: ArticleEvaluatorAssignmentWhereInput
    some?: ArticleEvaluatorAssignmentWhereInput
    none?: ArticleEvaluatorAssignmentWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventEvaluatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleEvaluatorAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isFirstLogin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFromBpk?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isFirstLogin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFromBpk?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isFirstLogin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFromBpk?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type EnumEvaluationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationType | EnumEvaluationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationType[] | ListEnumEvaluationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationType[] | ListEnumEvaluationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationTypeFilter<$PrismaModel> | $Enums.EvaluationType
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type ChecklistNullableScalarRelationFilter = {
    is?: ChecklistWhereInput | null
    isNot?: ChecklistWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    banner?: SortOrder
    description?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    submissionStartDate?: SortOrder
    submissionEndDate?: SortOrder
    status?: SortOrder
    evaluationType?: SortOrder
    isActive?: SortOrder
    checklistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    banner?: SortOrder
    description?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    submissionStartDate?: SortOrder
    submissionEndDate?: SortOrder
    status?: SortOrder
    evaluationType?: SortOrder
    isActive?: SortOrder
    checklistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    banner?: SortOrder
    description?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    submissionStartDate?: SortOrder
    submissionEndDate?: SortOrder
    status?: SortOrder
    evaluationType?: SortOrder
    isActive?: SortOrder
    checklistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type EnumEvaluationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationType | EnumEvaluationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationType[] | ListEnumEvaluationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationType[] | ListEnumEvaluationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationTypeWithAggregatesFilter<$PrismaModel> | $Enums.EvaluationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluationTypeFilter<$PrismaModel>
    _max?: NestedEnumEvaluationTypeFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ArticleVersionListRelationFilter = {
    every?: ArticleVersionWhereInput
    some?: ArticleVersionWhereInput
    none?: ArticleVersionWhereInput
  }

  export type ArticleKeywordListRelationFilter = {
    every?: ArticleKeywordWhereInput
    some?: ArticleKeywordWhereInput
    none?: ArticleKeywordWhereInput
  }

  export type RelatedAuthorListRelationFilter = {
    every?: RelatedAuthorWhereInput
    some?: RelatedAuthorWhereInput
    none?: RelatedAuthorWhereInput
  }

  export type ArticleVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleKeywordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelatedAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    thematicArea?: SortOrder
    currentVersion?: SortOrder
    evaluationsDone?: SortOrder
    status?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    currentVersion?: SortOrder
    evaluationsDone?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    thematicArea?: SortOrder
    currentVersion?: SortOrder
    evaluationsDone?: SortOrder
    status?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    thematicArea?: SortOrder
    currentVersion?: SortOrder
    evaluationsDone?: SortOrder
    status?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    currentVersion?: SortOrder
    evaluationsDone?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type ArticleVersionArticleIdVersionCompoundUniqueInput = {
    articleId: string
    version: number
  }

  export type ArticleVersionCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    pdfPath?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleVersionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ArticleVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    pdfPath?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleVersionMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    pdfPath?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleVersionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ArticleKeywordCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleKeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleKeywordMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelatedAuthorCountOrderByAggregateInput = {
    id?: SortOrder
    coAuthorName?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelatedAuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    coAuthorName?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelatedAuthorMinOrderByAggregateInput = {
    id?: SortOrder
    coAuthorName?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEvaluationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationStatus | EnumEvaluationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationStatusFilter<$PrismaModel> | $Enums.EvaluationStatus
  }

  export type ArticleVersionScalarRelationFilter = {
    is?: ArticleVersionWhereInput
    isNot?: ArticleVersionWhereInput
  }

  export type EvaluationUserIdArticleVersionIdCompoundUniqueInput = {
    userId: string
    articleVersionId: string
  }

  export type EvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    evaluationDescription?: SortOrder
    evaluationDate?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    articleVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationAvgOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    evaluationDescription?: SortOrder
    evaluationDate?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    articleVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    evaluationDescription?: SortOrder
    evaluationDate?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    articleVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationSumOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type EnumEvaluationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationStatus | EnumEvaluationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationStatusWithAggregatesFilter<$PrismaModel> | $Enums.EvaluationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluationStatusFilter<$PrismaModel>
    _max?: NestedEnumEvaluationStatusFilter<$PrismaModel>
  }

  export type EventEvaluatorEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type EventEvaluatorCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventEvaluatorMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventEvaluatorMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventEvaluatorScalarRelationFilter = {
    is?: EventEvaluatorWhereInput
    isNot?: EventEvaluatorWhereInput
  }

  export type ArticleEvaluatorAssignmentEventEvaluatorIdArticleIdCompoundUniqueInput = {
    eventEvaluatorId: string
    articleId: string
  }

  export type ArticleEvaluatorAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    eventEvaluatorId?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    isCorrected?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleEvaluatorAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    eventEvaluatorId?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    isCorrected?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleEvaluatorAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    eventEvaluatorId?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    isCorrected?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type ChecklistScalarRelationFilter = {
    is?: ChecklistWhereInput
    isNot?: ChecklistWhereInput
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type QuestionResponseQuestionIdArticleVersionIdUserIdCompoundUniqueInput = {
    questionId: string
    articleVersionId: string
    userId: string
  }

  export type QuestionResponseCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    articleVersionId?: SortOrder
    userId?: SortOrder
    booleanResponse?: SortOrder
    scaleResponse?: SortOrder
    textResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionResponseAvgOrderByAggregateInput = {
    scaleResponse?: SortOrder
  }

  export type QuestionResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    articleVersionId?: SortOrder
    userId?: SortOrder
    booleanResponse?: SortOrder
    scaleResponse?: SortOrder
    textResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionResponseMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    articleVersionId?: SortOrder
    userId?: SortOrder
    booleanResponse?: SortOrder
    scaleResponse?: SortOrder
    textResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionResponseSumOrderByAggregateInput = {
    scaleResponse?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type EvaluationCreateNestedManyWithoutUserInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EventEvaluatorCreateNestedManyWithoutUserInput = {
    create?: XOR<EventEvaluatorCreateWithoutUserInput, EventEvaluatorUncheckedCreateWithoutUserInput> | EventEvaluatorCreateWithoutUserInput[] | EventEvaluatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutUserInput | EventEvaluatorCreateOrConnectWithoutUserInput[]
    createMany?: EventEvaluatorCreateManyUserInputEnvelope
    connect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
  }

  export type QuestionResponseCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionResponseCreateWithoutUserInput, QuestionResponseUncheckedCreateWithoutUserInput> | QuestionResponseCreateWithoutUserInput[] | QuestionResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutUserInput | QuestionResponseCreateOrConnectWithoutUserInput[]
    createMany?: QuestionResponseCreateManyUserInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type ArticleEvaluatorAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutUserInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput> | ArticleEvaluatorAssignmentCreateWithoutUserInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyUserInputEnvelope
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EventEvaluatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventEvaluatorCreateWithoutUserInput, EventEvaluatorUncheckedCreateWithoutUserInput> | EventEvaluatorCreateWithoutUserInput[] | EventEvaluatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutUserInput | EventEvaluatorCreateOrConnectWithoutUserInput[]
    createMany?: EventEvaluatorCreateManyUserInputEnvelope
    connect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
  }

  export type QuestionResponseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionResponseCreateWithoutUserInput, QuestionResponseUncheckedCreateWithoutUserInput> | QuestionResponseCreateWithoutUserInput[] | QuestionResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutUserInput | QuestionResponseCreateOrConnectWithoutUserInput[]
    createMany?: QuestionResponseCreateManyUserInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutUserInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput> | ArticleEvaluatorAssignmentCreateWithoutUserInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyUserInputEnvelope
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoleType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type EvaluationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutUserInput | EvaluationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutUserInput | EvaluationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutUserInput | EvaluationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EventEvaluatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventEvaluatorCreateWithoutUserInput, EventEvaluatorUncheckedCreateWithoutUserInput> | EventEvaluatorCreateWithoutUserInput[] | EventEvaluatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutUserInput | EventEvaluatorCreateOrConnectWithoutUserInput[]
    upsert?: EventEvaluatorUpsertWithWhereUniqueWithoutUserInput | EventEvaluatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventEvaluatorCreateManyUserInputEnvelope
    set?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    disconnect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    delete?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    connect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    update?: EventEvaluatorUpdateWithWhereUniqueWithoutUserInput | EventEvaluatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventEvaluatorUpdateManyWithWhereWithoutUserInput | EventEvaluatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventEvaluatorScalarWhereInput | EventEvaluatorScalarWhereInput[]
  }

  export type QuestionResponseUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutUserInput, QuestionResponseUncheckedCreateWithoutUserInput> | QuestionResponseCreateWithoutUserInput[] | QuestionResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutUserInput | QuestionResponseCreateOrConnectWithoutUserInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutUserInput | QuestionResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionResponseCreateManyUserInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutUserInput | QuestionResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutUserInput | QuestionResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type ArticleEvaluatorAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutUserInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput> | ArticleEvaluatorAssignmentCreateWithoutUserInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutUserInput | ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyUserInputEnvelope
    set?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    disconnect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    delete?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    update?: ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutUserInput | ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutUserInput | ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleEvaluatorAssignmentScalarWhereInput | ArticleEvaluatorAssignmentScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutUserInput | EvaluationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutUserInput | EvaluationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutUserInput | EvaluationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EventEvaluatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventEvaluatorCreateWithoutUserInput, EventEvaluatorUncheckedCreateWithoutUserInput> | EventEvaluatorCreateWithoutUserInput[] | EventEvaluatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutUserInput | EventEvaluatorCreateOrConnectWithoutUserInput[]
    upsert?: EventEvaluatorUpsertWithWhereUniqueWithoutUserInput | EventEvaluatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventEvaluatorCreateManyUserInputEnvelope
    set?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    disconnect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    delete?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    connect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    update?: EventEvaluatorUpdateWithWhereUniqueWithoutUserInput | EventEvaluatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventEvaluatorUpdateManyWithWhereWithoutUserInput | EventEvaluatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventEvaluatorScalarWhereInput | EventEvaluatorScalarWhereInput[]
  }

  export type QuestionResponseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutUserInput, QuestionResponseUncheckedCreateWithoutUserInput> | QuestionResponseCreateWithoutUserInput[] | QuestionResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutUserInput | QuestionResponseCreateOrConnectWithoutUserInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutUserInput | QuestionResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionResponseCreateManyUserInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutUserInput | QuestionResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutUserInput | QuestionResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutUserInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput> | ArticleEvaluatorAssignmentCreateWithoutUserInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutUserInput | ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyUserInputEnvelope
    set?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    disconnect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    delete?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    update?: ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutUserInput | ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutUserInput | ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleEvaluatorAssignmentScalarWhereInput | ArticleEvaluatorAssignmentScalarWhereInput[]
  }

  export type ArticleCreateNestedManyWithoutEventInput = {
    create?: XOR<ArticleCreateWithoutEventInput, ArticleUncheckedCreateWithoutEventInput> | ArticleCreateWithoutEventInput[] | ArticleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutEventInput | ArticleCreateOrConnectWithoutEventInput[]
    createMany?: ArticleCreateManyEventInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type EventEvaluatorCreateNestedManyWithoutEventInput = {
    create?: XOR<EventEvaluatorCreateWithoutEventInput, EventEvaluatorUncheckedCreateWithoutEventInput> | EventEvaluatorCreateWithoutEventInput[] | EventEvaluatorUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutEventInput | EventEvaluatorCreateOrConnectWithoutEventInput[]
    createMany?: EventEvaluatorCreateManyEventInputEnvelope
    connect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
  }

  export type ChecklistCreateNestedOneWithoutEventsInput = {
    create?: XOR<ChecklistCreateWithoutEventsInput, ChecklistUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutEventsInput
    connect?: ChecklistWhereUniqueInput
  }

  export type ArticleUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ArticleCreateWithoutEventInput, ArticleUncheckedCreateWithoutEventInput> | ArticleCreateWithoutEventInput[] | ArticleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutEventInput | ArticleCreateOrConnectWithoutEventInput[]
    createMany?: ArticleCreateManyEventInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type EventEvaluatorUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventEvaluatorCreateWithoutEventInput, EventEvaluatorUncheckedCreateWithoutEventInput> | EventEvaluatorCreateWithoutEventInput[] | EventEvaluatorUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutEventInput | EventEvaluatorCreateOrConnectWithoutEventInput[]
    createMany?: EventEvaluatorCreateManyEventInputEnvelope
    connect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type EnumEvaluationTypeFieldUpdateOperationsInput = {
    set?: $Enums.EvaluationType
  }

  export type ArticleUpdateManyWithoutEventNestedInput = {
    create?: XOR<ArticleCreateWithoutEventInput, ArticleUncheckedCreateWithoutEventInput> | ArticleCreateWithoutEventInput[] | ArticleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutEventInput | ArticleCreateOrConnectWithoutEventInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutEventInput | ArticleUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ArticleCreateManyEventInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutEventInput | ArticleUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutEventInput | ArticleUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type EventEvaluatorUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventEvaluatorCreateWithoutEventInput, EventEvaluatorUncheckedCreateWithoutEventInput> | EventEvaluatorCreateWithoutEventInput[] | EventEvaluatorUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutEventInput | EventEvaluatorCreateOrConnectWithoutEventInput[]
    upsert?: EventEvaluatorUpsertWithWhereUniqueWithoutEventInput | EventEvaluatorUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventEvaluatorCreateManyEventInputEnvelope
    set?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    disconnect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    delete?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    connect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    update?: EventEvaluatorUpdateWithWhereUniqueWithoutEventInput | EventEvaluatorUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventEvaluatorUpdateManyWithWhereWithoutEventInput | EventEvaluatorUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventEvaluatorScalarWhereInput | EventEvaluatorScalarWhereInput[]
  }

  export type ChecklistUpdateOneWithoutEventsNestedInput = {
    create?: XOR<ChecklistCreateWithoutEventsInput, ChecklistUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutEventsInput
    upsert?: ChecklistUpsertWithoutEventsInput
    disconnect?: ChecklistWhereInput | boolean
    delete?: ChecklistWhereInput | boolean
    connect?: ChecklistWhereUniqueInput
    update?: XOR<XOR<ChecklistUpdateToOneWithWhereWithoutEventsInput, ChecklistUpdateWithoutEventsInput>, ChecklistUncheckedUpdateWithoutEventsInput>
  }

  export type ArticleUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ArticleCreateWithoutEventInput, ArticleUncheckedCreateWithoutEventInput> | ArticleCreateWithoutEventInput[] | ArticleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutEventInput | ArticleCreateOrConnectWithoutEventInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutEventInput | ArticleUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ArticleCreateManyEventInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutEventInput | ArticleUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutEventInput | ArticleUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type EventEvaluatorUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventEvaluatorCreateWithoutEventInput, EventEvaluatorUncheckedCreateWithoutEventInput> | EventEvaluatorCreateWithoutEventInput[] | EventEvaluatorUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutEventInput | EventEvaluatorCreateOrConnectWithoutEventInput[]
    upsert?: EventEvaluatorUpsertWithWhereUniqueWithoutEventInput | EventEvaluatorUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventEvaluatorCreateManyEventInputEnvelope
    set?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    disconnect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    delete?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    connect?: EventEvaluatorWhereUniqueInput | EventEvaluatorWhereUniqueInput[]
    update?: EventEvaluatorUpdateWithWhereUniqueWithoutEventInput | EventEvaluatorUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventEvaluatorUpdateManyWithWhereWithoutEventInput | EventEvaluatorUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventEvaluatorScalarWhereInput | EventEvaluatorScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutArticlesInput = {
    create?: XOR<EventCreateWithoutArticlesInput, EventUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: EventCreateOrConnectWithoutArticlesInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleVersionCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleVersionCreateWithoutArticleInput, ArticleVersionUncheckedCreateWithoutArticleInput> | ArticleVersionCreateWithoutArticleInput[] | ArticleVersionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleVersionCreateOrConnectWithoutArticleInput | ArticleVersionCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleVersionCreateManyArticleInputEnvelope
    connect?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
  }

  export type ArticleKeywordCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleKeywordCreateWithoutArticleInput, ArticleKeywordUncheckedCreateWithoutArticleInput> | ArticleKeywordCreateWithoutArticleInput[] | ArticleKeywordUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleKeywordCreateOrConnectWithoutArticleInput | ArticleKeywordCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleKeywordCreateManyArticleInputEnvelope
    connect?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
  }

  export type RelatedAuthorCreateNestedManyWithoutArticleInput = {
    create?: XOR<RelatedAuthorCreateWithoutArticleInput, RelatedAuthorUncheckedCreateWithoutArticleInput> | RelatedAuthorCreateWithoutArticleInput[] | RelatedAuthorUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: RelatedAuthorCreateOrConnectWithoutArticleInput | RelatedAuthorCreateOrConnectWithoutArticleInput[]
    createMany?: RelatedAuthorCreateManyArticleInputEnvelope
    connect?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
  }

  export type ArticleEvaluatorAssignmentCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutArticleInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput> | ArticleEvaluatorAssignmentCreateWithoutArticleInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyArticleInputEnvelope
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
  }

  export type ArticleVersionUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleVersionCreateWithoutArticleInput, ArticleVersionUncheckedCreateWithoutArticleInput> | ArticleVersionCreateWithoutArticleInput[] | ArticleVersionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleVersionCreateOrConnectWithoutArticleInput | ArticleVersionCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleVersionCreateManyArticleInputEnvelope
    connect?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
  }

  export type ArticleKeywordUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleKeywordCreateWithoutArticleInput, ArticleKeywordUncheckedCreateWithoutArticleInput> | ArticleKeywordCreateWithoutArticleInput[] | ArticleKeywordUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleKeywordCreateOrConnectWithoutArticleInput | ArticleKeywordCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleKeywordCreateManyArticleInputEnvelope
    connect?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
  }

  export type RelatedAuthorUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<RelatedAuthorCreateWithoutArticleInput, RelatedAuthorUncheckedCreateWithoutArticleInput> | RelatedAuthorCreateWithoutArticleInput[] | RelatedAuthorUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: RelatedAuthorCreateOrConnectWithoutArticleInput | RelatedAuthorCreateOrConnectWithoutArticleInput[]
    createMany?: RelatedAuthorCreateManyArticleInputEnvelope
    connect?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
  }

  export type ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutArticleInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput> | ArticleEvaluatorAssignmentCreateWithoutArticleInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyArticleInputEnvelope
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumArticleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ArticleStatus
  }

  export type EventUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<EventCreateWithoutArticlesInput, EventUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: EventCreateOrConnectWithoutArticlesInput
    upsert?: EventUpsertWithoutArticlesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutArticlesInput, EventUpdateWithoutArticlesInput>, EventUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticleVersionUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleVersionCreateWithoutArticleInput, ArticleVersionUncheckedCreateWithoutArticleInput> | ArticleVersionCreateWithoutArticleInput[] | ArticleVersionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleVersionCreateOrConnectWithoutArticleInput | ArticleVersionCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleVersionUpsertWithWhereUniqueWithoutArticleInput | ArticleVersionUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleVersionCreateManyArticleInputEnvelope
    set?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
    disconnect?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
    delete?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
    connect?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
    update?: ArticleVersionUpdateWithWhereUniqueWithoutArticleInput | ArticleVersionUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleVersionUpdateManyWithWhereWithoutArticleInput | ArticleVersionUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleVersionScalarWhereInput | ArticleVersionScalarWhereInput[]
  }

  export type ArticleKeywordUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleKeywordCreateWithoutArticleInput, ArticleKeywordUncheckedCreateWithoutArticleInput> | ArticleKeywordCreateWithoutArticleInput[] | ArticleKeywordUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleKeywordCreateOrConnectWithoutArticleInput | ArticleKeywordCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleKeywordUpsertWithWhereUniqueWithoutArticleInput | ArticleKeywordUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleKeywordCreateManyArticleInputEnvelope
    set?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
    disconnect?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
    delete?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
    connect?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
    update?: ArticleKeywordUpdateWithWhereUniqueWithoutArticleInput | ArticleKeywordUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleKeywordUpdateManyWithWhereWithoutArticleInput | ArticleKeywordUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleKeywordScalarWhereInput | ArticleKeywordScalarWhereInput[]
  }

  export type RelatedAuthorUpdateManyWithoutArticleNestedInput = {
    create?: XOR<RelatedAuthorCreateWithoutArticleInput, RelatedAuthorUncheckedCreateWithoutArticleInput> | RelatedAuthorCreateWithoutArticleInput[] | RelatedAuthorUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: RelatedAuthorCreateOrConnectWithoutArticleInput | RelatedAuthorCreateOrConnectWithoutArticleInput[]
    upsert?: RelatedAuthorUpsertWithWhereUniqueWithoutArticleInput | RelatedAuthorUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: RelatedAuthorCreateManyArticleInputEnvelope
    set?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
    disconnect?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
    delete?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
    connect?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
    update?: RelatedAuthorUpdateWithWhereUniqueWithoutArticleInput | RelatedAuthorUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: RelatedAuthorUpdateManyWithWhereWithoutArticleInput | RelatedAuthorUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: RelatedAuthorScalarWhereInput | RelatedAuthorScalarWhereInput[]
  }

  export type ArticleEvaluatorAssignmentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutArticleInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput> | ArticleEvaluatorAssignmentCreateWithoutArticleInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutArticleInput | ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyArticleInputEnvelope
    set?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    disconnect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    delete?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    update?: ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutArticleInput | ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutArticleInput | ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleEvaluatorAssignmentScalarWhereInput | ArticleEvaluatorAssignmentScalarWhereInput[]
  }

  export type ArticleVersionUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleVersionCreateWithoutArticleInput, ArticleVersionUncheckedCreateWithoutArticleInput> | ArticleVersionCreateWithoutArticleInput[] | ArticleVersionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleVersionCreateOrConnectWithoutArticleInput | ArticleVersionCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleVersionUpsertWithWhereUniqueWithoutArticleInput | ArticleVersionUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleVersionCreateManyArticleInputEnvelope
    set?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
    disconnect?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
    delete?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
    connect?: ArticleVersionWhereUniqueInput | ArticleVersionWhereUniqueInput[]
    update?: ArticleVersionUpdateWithWhereUniqueWithoutArticleInput | ArticleVersionUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleVersionUpdateManyWithWhereWithoutArticleInput | ArticleVersionUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleVersionScalarWhereInput | ArticleVersionScalarWhereInput[]
  }

  export type ArticleKeywordUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleKeywordCreateWithoutArticleInput, ArticleKeywordUncheckedCreateWithoutArticleInput> | ArticleKeywordCreateWithoutArticleInput[] | ArticleKeywordUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleKeywordCreateOrConnectWithoutArticleInput | ArticleKeywordCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleKeywordUpsertWithWhereUniqueWithoutArticleInput | ArticleKeywordUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleKeywordCreateManyArticleInputEnvelope
    set?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
    disconnect?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
    delete?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
    connect?: ArticleKeywordWhereUniqueInput | ArticleKeywordWhereUniqueInput[]
    update?: ArticleKeywordUpdateWithWhereUniqueWithoutArticleInput | ArticleKeywordUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleKeywordUpdateManyWithWhereWithoutArticleInput | ArticleKeywordUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleKeywordScalarWhereInput | ArticleKeywordScalarWhereInput[]
  }

  export type RelatedAuthorUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<RelatedAuthorCreateWithoutArticleInput, RelatedAuthorUncheckedCreateWithoutArticleInput> | RelatedAuthorCreateWithoutArticleInput[] | RelatedAuthorUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: RelatedAuthorCreateOrConnectWithoutArticleInput | RelatedAuthorCreateOrConnectWithoutArticleInput[]
    upsert?: RelatedAuthorUpsertWithWhereUniqueWithoutArticleInput | RelatedAuthorUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: RelatedAuthorCreateManyArticleInputEnvelope
    set?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
    disconnect?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
    delete?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
    connect?: RelatedAuthorWhereUniqueInput | RelatedAuthorWhereUniqueInput[]
    update?: RelatedAuthorUpdateWithWhereUniqueWithoutArticleInput | RelatedAuthorUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: RelatedAuthorUpdateManyWithWhereWithoutArticleInput | RelatedAuthorUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: RelatedAuthorScalarWhereInput | RelatedAuthorScalarWhereInput[]
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutArticleInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput> | ArticleEvaluatorAssignmentCreateWithoutArticleInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutArticleInput | ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyArticleInputEnvelope
    set?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    disconnect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    delete?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    update?: ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutArticleInput | ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutArticleInput | ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleEvaluatorAssignmentScalarWhereInput | ArticleEvaluatorAssignmentScalarWhereInput[]
  }

  export type ArticleCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ArticleCreateWithoutVersionsInput, ArticleUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutVersionsInput
    connect?: ArticleWhereUniqueInput
  }

  export type EvaluationCreateNestedManyWithoutArticleVersionInput = {
    create?: XOR<EvaluationCreateWithoutArticleVersionInput, EvaluationUncheckedCreateWithoutArticleVersionInput> | EvaluationCreateWithoutArticleVersionInput[] | EvaluationUncheckedCreateWithoutArticleVersionInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutArticleVersionInput | EvaluationCreateOrConnectWithoutArticleVersionInput[]
    createMany?: EvaluationCreateManyArticleVersionInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type QuestionResponseCreateNestedManyWithoutArticleVersionInput = {
    create?: XOR<QuestionResponseCreateWithoutArticleVersionInput, QuestionResponseUncheckedCreateWithoutArticleVersionInput> | QuestionResponseCreateWithoutArticleVersionInput[] | QuestionResponseUncheckedCreateWithoutArticleVersionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutArticleVersionInput | QuestionResponseCreateOrConnectWithoutArticleVersionInput[]
    createMany?: QuestionResponseCreateManyArticleVersionInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutArticleVersionInput = {
    create?: XOR<EvaluationCreateWithoutArticleVersionInput, EvaluationUncheckedCreateWithoutArticleVersionInput> | EvaluationCreateWithoutArticleVersionInput[] | EvaluationUncheckedCreateWithoutArticleVersionInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutArticleVersionInput | EvaluationCreateOrConnectWithoutArticleVersionInput[]
    createMany?: EvaluationCreateManyArticleVersionInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type QuestionResponseUncheckedCreateNestedManyWithoutArticleVersionInput = {
    create?: XOR<QuestionResponseCreateWithoutArticleVersionInput, QuestionResponseUncheckedCreateWithoutArticleVersionInput> | QuestionResponseCreateWithoutArticleVersionInput[] | QuestionResponseUncheckedCreateWithoutArticleVersionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutArticleVersionInput | QuestionResponseCreateOrConnectWithoutArticleVersionInput[]
    createMany?: QuestionResponseCreateManyArticleVersionInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type ArticleUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ArticleCreateWithoutVersionsInput, ArticleUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutVersionsInput
    upsert?: ArticleUpsertWithoutVersionsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutVersionsInput, ArticleUpdateWithoutVersionsInput>, ArticleUncheckedUpdateWithoutVersionsInput>
  }

  export type EvaluationUpdateManyWithoutArticleVersionNestedInput = {
    create?: XOR<EvaluationCreateWithoutArticleVersionInput, EvaluationUncheckedCreateWithoutArticleVersionInput> | EvaluationCreateWithoutArticleVersionInput[] | EvaluationUncheckedCreateWithoutArticleVersionInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutArticleVersionInput | EvaluationCreateOrConnectWithoutArticleVersionInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutArticleVersionInput | EvaluationUpsertWithWhereUniqueWithoutArticleVersionInput[]
    createMany?: EvaluationCreateManyArticleVersionInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutArticleVersionInput | EvaluationUpdateWithWhereUniqueWithoutArticleVersionInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutArticleVersionInput | EvaluationUpdateManyWithWhereWithoutArticleVersionInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type QuestionResponseUpdateManyWithoutArticleVersionNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutArticleVersionInput, QuestionResponseUncheckedCreateWithoutArticleVersionInput> | QuestionResponseCreateWithoutArticleVersionInput[] | QuestionResponseUncheckedCreateWithoutArticleVersionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutArticleVersionInput | QuestionResponseCreateOrConnectWithoutArticleVersionInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutArticleVersionInput | QuestionResponseUpsertWithWhereUniqueWithoutArticleVersionInput[]
    createMany?: QuestionResponseCreateManyArticleVersionInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutArticleVersionInput | QuestionResponseUpdateWithWhereUniqueWithoutArticleVersionInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutArticleVersionInput | QuestionResponseUpdateManyWithWhereWithoutArticleVersionInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutArticleVersionNestedInput = {
    create?: XOR<EvaluationCreateWithoutArticleVersionInput, EvaluationUncheckedCreateWithoutArticleVersionInput> | EvaluationCreateWithoutArticleVersionInput[] | EvaluationUncheckedCreateWithoutArticleVersionInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutArticleVersionInput | EvaluationCreateOrConnectWithoutArticleVersionInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutArticleVersionInput | EvaluationUpsertWithWhereUniqueWithoutArticleVersionInput[]
    createMany?: EvaluationCreateManyArticleVersionInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutArticleVersionInput | EvaluationUpdateWithWhereUniqueWithoutArticleVersionInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutArticleVersionInput | EvaluationUpdateManyWithWhereWithoutArticleVersionInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type QuestionResponseUncheckedUpdateManyWithoutArticleVersionNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutArticleVersionInput, QuestionResponseUncheckedCreateWithoutArticleVersionInput> | QuestionResponseCreateWithoutArticleVersionInput[] | QuestionResponseUncheckedCreateWithoutArticleVersionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutArticleVersionInput | QuestionResponseCreateOrConnectWithoutArticleVersionInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutArticleVersionInput | QuestionResponseUpsertWithWhereUniqueWithoutArticleVersionInput[]
    createMany?: QuestionResponseCreateManyArticleVersionInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutArticleVersionInput | QuestionResponseUpdateWithWhereUniqueWithoutArticleVersionInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutArticleVersionInput | QuestionResponseUpdateManyWithWhereWithoutArticleVersionInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type ArticleCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<ArticleCreateWithoutKeywordsInput, ArticleUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutKeywordsInput
    connect?: ArticleWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutKeywordsNestedInput = {
    create?: XOR<ArticleCreateWithoutKeywordsInput, ArticleUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutKeywordsInput
    upsert?: ArticleUpsertWithoutKeywordsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutKeywordsInput, ArticleUpdateWithoutKeywordsInput>, ArticleUncheckedUpdateWithoutKeywordsInput>
  }

  export type ArticleCreateNestedOneWithoutRelatedAuthorsInput = {
    create?: XOR<ArticleCreateWithoutRelatedAuthorsInput, ArticleUncheckedCreateWithoutRelatedAuthorsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutRelatedAuthorsInput
    connect?: ArticleWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutRelatedAuthorsNestedInput = {
    create?: XOR<ArticleCreateWithoutRelatedAuthorsInput, ArticleUncheckedCreateWithoutRelatedAuthorsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutRelatedAuthorsInput
    upsert?: ArticleUpsertWithoutRelatedAuthorsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutRelatedAuthorsInput, ArticleUpdateWithoutRelatedAuthorsInput>, ArticleUncheckedUpdateWithoutRelatedAuthorsInput>
  }

  export type UserCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleVersionCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<ArticleVersionCreateWithoutEvaluationsInput, ArticleVersionUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ArticleVersionCreateOrConnectWithoutEvaluationsInput
    connect?: ArticleVersionWhereUniqueInput
  }

  export type EnumEvaluationStatusFieldUpdateOperationsInput = {
    set?: $Enums.EvaluationStatus
  }

  export type UserUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    upsert?: UserUpsertWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvaluationsInput, UserUpdateWithoutEvaluationsInput>, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type ArticleVersionUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<ArticleVersionCreateWithoutEvaluationsInput, ArticleVersionUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ArticleVersionCreateOrConnectWithoutEvaluationsInput
    upsert?: ArticleVersionUpsertWithoutEvaluationsInput
    connect?: ArticleVersionWhereUniqueInput
    update?: XOR<XOR<ArticleVersionUpdateToOneWithWhereWithoutEvaluationsInput, ArticleVersionUpdateWithoutEvaluationsInput>, ArticleVersionUncheckedUpdateWithoutEvaluationsInput>
  }

  export type EventCreateNestedOneWithoutEventEvaluatorsInput = {
    create?: XOR<EventCreateWithoutEventEvaluatorsInput, EventUncheckedCreateWithoutEventEvaluatorsInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventEvaluatorsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventEvaluatorsInput = {
    create?: XOR<UserCreateWithoutEventEvaluatorsInput, UserUncheckedCreateWithoutEventEvaluatorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventEvaluatorsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleEvaluatorAssignmentCreateNestedManyWithoutEventEvaluatorInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput> | ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyEventEvaluatorInputEnvelope
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
  }

  export type ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutEventEvaluatorInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput> | ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyEventEvaluatorInputEnvelope
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutEventEvaluatorsNestedInput = {
    create?: XOR<EventCreateWithoutEventEvaluatorsInput, EventUncheckedCreateWithoutEventEvaluatorsInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventEvaluatorsInput
    upsert?: EventUpsertWithoutEventEvaluatorsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventEvaluatorsInput, EventUpdateWithoutEventEvaluatorsInput>, EventUncheckedUpdateWithoutEventEvaluatorsInput>
  }

  export type UserUpdateOneRequiredWithoutEventEvaluatorsNestedInput = {
    create?: XOR<UserCreateWithoutEventEvaluatorsInput, UserUncheckedCreateWithoutEventEvaluatorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventEvaluatorsInput
    upsert?: UserUpsertWithoutEventEvaluatorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventEvaluatorsInput, UserUpdateWithoutEventEvaluatorsInput>, UserUncheckedUpdateWithoutEventEvaluatorsInput>
  }

  export type ArticleEvaluatorAssignmentUpdateManyWithoutEventEvaluatorNestedInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput> | ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput[]
    upsert?: ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutEventEvaluatorInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyEventEvaluatorInputEnvelope
    set?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    disconnect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    delete?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    update?: ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutEventEvaluatorInput[]
    updateMany?: ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutEventEvaluatorInput[]
    deleteMany?: ArticleEvaluatorAssignmentScalarWhereInput | ArticleEvaluatorAssignmentScalarWhereInput[]
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutEventEvaluatorNestedInput = {
    create?: XOR<ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput> | ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput[] | ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput[]
    connectOrCreate?: ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput[]
    upsert?: ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutEventEvaluatorInput[]
    createMany?: ArticleEvaluatorAssignmentCreateManyEventEvaluatorInputEnvelope
    set?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    disconnect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    delete?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    connect?: ArticleEvaluatorAssignmentWhereUniqueInput | ArticleEvaluatorAssignmentWhereUniqueInput[]
    update?: ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutEventEvaluatorInput[]
    updateMany?: ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutEventEvaluatorInput | ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutEventEvaluatorInput[]
    deleteMany?: ArticleEvaluatorAssignmentScalarWhereInput | ArticleEvaluatorAssignmentScalarWhereInput[]
  }

  export type EventEvaluatorCreateNestedOneWithoutArticleAssignmentsInput = {
    create?: XOR<EventEvaluatorCreateWithoutArticleAssignmentsInput, EventEvaluatorUncheckedCreateWithoutArticleAssignmentsInput>
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutArticleAssignmentsInput
    connect?: EventEvaluatorWhereUniqueInput
  }

  export type ArticleCreateNestedOneWithoutEvaluatorAssignmentsInput = {
    create?: XOR<ArticleCreateWithoutEvaluatorAssignmentsInput, ArticleUncheckedCreateWithoutEvaluatorAssignmentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutEvaluatorAssignmentsInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticleAssignmentsInput = {
    create?: XOR<UserCreateWithoutArticleAssignmentsInput, UserUncheckedCreateWithoutArticleAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EventEvaluatorUpdateOneRequiredWithoutArticleAssignmentsNestedInput = {
    create?: XOR<EventEvaluatorCreateWithoutArticleAssignmentsInput, EventEvaluatorUncheckedCreateWithoutArticleAssignmentsInput>
    connectOrCreate?: EventEvaluatorCreateOrConnectWithoutArticleAssignmentsInput
    upsert?: EventEvaluatorUpsertWithoutArticleAssignmentsInput
    connect?: EventEvaluatorWhereUniqueInput
    update?: XOR<XOR<EventEvaluatorUpdateToOneWithWhereWithoutArticleAssignmentsInput, EventEvaluatorUpdateWithoutArticleAssignmentsInput>, EventEvaluatorUncheckedUpdateWithoutArticleAssignmentsInput>
  }

  export type ArticleUpdateOneRequiredWithoutEvaluatorAssignmentsNestedInput = {
    create?: XOR<ArticleCreateWithoutEvaluatorAssignmentsInput, ArticleUncheckedCreateWithoutEvaluatorAssignmentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutEvaluatorAssignmentsInput
    upsert?: ArticleUpsertWithoutEvaluatorAssignmentsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutEvaluatorAssignmentsInput, ArticleUpdateWithoutEvaluatorAssignmentsInput>, ArticleUncheckedUpdateWithoutEvaluatorAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutArticleAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutArticleAssignmentsInput, UserUncheckedCreateWithoutArticleAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleAssignmentsInput
    upsert?: UserUpsertWithoutArticleAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleAssignmentsInput, UserUpdateWithoutArticleAssignmentsInput>, UserUncheckedUpdateWithoutArticleAssignmentsInput>
  }

  export type QuestionCreateNestedManyWithoutChecklistInput = {
    create?: XOR<QuestionCreateWithoutChecklistInput, QuestionUncheckedCreateWithoutChecklistInput> | QuestionCreateWithoutChecklistInput[] | QuestionUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutChecklistInput | QuestionCreateOrConnectWithoutChecklistInput[]
    createMany?: QuestionCreateManyChecklistInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutChecklistInput = {
    create?: XOR<EventCreateWithoutChecklistInput, EventUncheckedCreateWithoutChecklistInput> | EventCreateWithoutChecklistInput[] | EventUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChecklistInput | EventCreateOrConnectWithoutChecklistInput[]
    createMany?: EventCreateManyChecklistInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutChecklistInput = {
    create?: XOR<QuestionCreateWithoutChecklistInput, QuestionUncheckedCreateWithoutChecklistInput> | QuestionCreateWithoutChecklistInput[] | QuestionUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutChecklistInput | QuestionCreateOrConnectWithoutChecklistInput[]
    createMany?: QuestionCreateManyChecklistInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutChecklistInput = {
    create?: XOR<EventCreateWithoutChecklistInput, EventUncheckedCreateWithoutChecklistInput> | EventCreateWithoutChecklistInput[] | EventUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChecklistInput | EventCreateOrConnectWithoutChecklistInput[]
    createMany?: EventCreateManyChecklistInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<QuestionCreateWithoutChecklistInput, QuestionUncheckedCreateWithoutChecklistInput> | QuestionCreateWithoutChecklistInput[] | QuestionUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutChecklistInput | QuestionCreateOrConnectWithoutChecklistInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutChecklistInput | QuestionUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: QuestionCreateManyChecklistInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutChecklistInput | QuestionUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutChecklistInput | QuestionUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type EventUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<EventCreateWithoutChecklistInput, EventUncheckedCreateWithoutChecklistInput> | EventCreateWithoutChecklistInput[] | EventUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChecklistInput | EventCreateOrConnectWithoutChecklistInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutChecklistInput | EventUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: EventCreateManyChecklistInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutChecklistInput | EventUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: EventUpdateManyWithWhereWithoutChecklistInput | EventUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<QuestionCreateWithoutChecklistInput, QuestionUncheckedCreateWithoutChecklistInput> | QuestionCreateWithoutChecklistInput[] | QuestionUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutChecklistInput | QuestionCreateOrConnectWithoutChecklistInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutChecklistInput | QuestionUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: QuestionCreateManyChecklistInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutChecklistInput | QuestionUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutChecklistInput | QuestionUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<EventCreateWithoutChecklistInput, EventUncheckedCreateWithoutChecklistInput> | EventCreateWithoutChecklistInput[] | EventUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChecklistInput | EventCreateOrConnectWithoutChecklistInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutChecklistInput | EventUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: EventCreateManyChecklistInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutChecklistInput | EventUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: EventUpdateManyWithWhereWithoutChecklistInput | EventUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ChecklistCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ChecklistCreateWithoutQuestionsInput, ChecklistUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutQuestionsInput
    connect?: ChecklistWhereUniqueInput
  }

  export type QuestionResponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput> | QuestionResponseCreateWithoutQuestionInput[] | QuestionResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutQuestionInput | QuestionResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionResponseCreateManyQuestionInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type QuestionResponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput> | QuestionResponseCreateWithoutQuestionInput[] | QuestionResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutQuestionInput | QuestionResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionResponseCreateManyQuestionInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type ChecklistUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ChecklistCreateWithoutQuestionsInput, ChecklistUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutQuestionsInput
    upsert?: ChecklistUpsertWithoutQuestionsInput
    connect?: ChecklistWhereUniqueInput
    update?: XOR<XOR<ChecklistUpdateToOneWithWhereWithoutQuestionsInput, ChecklistUpdateWithoutQuestionsInput>, ChecklistUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionResponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput> | QuestionResponseCreateWithoutQuestionInput[] | QuestionResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutQuestionInput | QuestionResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput | QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionResponseCreateManyQuestionInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput | QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutQuestionInput | QuestionResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type QuestionResponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput> | QuestionResponseCreateWithoutQuestionInput[] | QuestionResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutQuestionInput | QuestionResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput | QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionResponseCreateManyQuestionInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput | QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutQuestionInput | QuestionResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutQuestionResponsesInput = {
    create?: XOR<QuestionCreateWithoutQuestionResponsesInput, QuestionUncheckedCreateWithoutQuestionResponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionResponsesInput
    connect?: QuestionWhereUniqueInput
  }

  export type ArticleVersionCreateNestedOneWithoutQuestionResponsesInput = {
    create?: XOR<ArticleVersionCreateWithoutQuestionResponsesInput, ArticleVersionUncheckedCreateWithoutQuestionResponsesInput>
    connectOrCreate?: ArticleVersionCreateOrConnectWithoutQuestionResponsesInput
    connect?: ArticleVersionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionResponsesInput = {
    create?: XOR<UserCreateWithoutQuestionResponsesInput, UserUncheckedCreateWithoutQuestionResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateOneRequiredWithoutQuestionResponsesNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionResponsesInput, QuestionUncheckedCreateWithoutQuestionResponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionResponsesInput
    upsert?: QuestionUpsertWithoutQuestionResponsesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutQuestionResponsesInput, QuestionUpdateWithoutQuestionResponsesInput>, QuestionUncheckedUpdateWithoutQuestionResponsesInput>
  }

  export type ArticleVersionUpdateOneRequiredWithoutQuestionResponsesNestedInput = {
    create?: XOR<ArticleVersionCreateWithoutQuestionResponsesInput, ArticleVersionUncheckedCreateWithoutQuestionResponsesInput>
    connectOrCreate?: ArticleVersionCreateOrConnectWithoutQuestionResponsesInput
    upsert?: ArticleVersionUpsertWithoutQuestionResponsesInput
    connect?: ArticleVersionWhereUniqueInput
    update?: XOR<XOR<ArticleVersionUpdateToOneWithWhereWithoutQuestionResponsesInput, ArticleVersionUpdateWithoutQuestionResponsesInput>, ArticleVersionUncheckedUpdateWithoutQuestionResponsesInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionResponsesNestedInput = {
    create?: XOR<UserCreateWithoutQuestionResponsesInput, UserUncheckedCreateWithoutQuestionResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionResponsesInput
    upsert?: UserUpsertWithoutQuestionResponsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionResponsesInput, UserUpdateWithoutQuestionResponsesInput>, UserUncheckedUpdateWithoutQuestionResponsesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedEnumEvaluationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationType | EnumEvaluationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationType[] | ListEnumEvaluationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationType[] | ListEnumEvaluationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationTypeFilter<$PrismaModel> | $Enums.EvaluationType
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedEnumEvaluationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationType | EnumEvaluationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationType[] | ListEnumEvaluationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationType[] | ListEnumEvaluationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationTypeWithAggregatesFilter<$PrismaModel> | $Enums.EvaluationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluationTypeFilter<$PrismaModel>
    _max?: NestedEnumEvaluationTypeFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type NestedEnumEvaluationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationStatus | EnumEvaluationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationStatusFilter<$PrismaModel> | $Enums.EvaluationStatus
  }

  export type NestedEnumEvaluationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationStatus | EnumEvaluationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationStatusWithAggregatesFilter<$PrismaModel> | $Enums.EvaluationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluationStatusFilter<$PrismaModel>
    _max?: NestedEnumEvaluationStatusFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ArticleCreateWithoutUserInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutArticlesInput
    versions?: ArticleVersionCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    eventId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArticleVersionUncheckedCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordUncheckedCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorUncheckedCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutUserInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleCreateManyUserInputEnvelope = {
    data: ArticleCreateManyUserInput | ArticleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationCreateWithoutUserInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    status?: $Enums.EvaluationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    articleVersion: ArticleVersionCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateWithoutUserInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    status?: $Enums.EvaluationStatus
    articleVersionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationCreateOrConnectWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput>
  }

  export type EvaluationCreateManyUserInputEnvelope = {
    data: EvaluationCreateManyUserInput | EvaluationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventEvaluatorCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutEventEvaluatorsInput
    articleAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutEventEvaluatorInput
  }

  export type EventEvaluatorUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutEventEvaluatorInput
  }

  export type EventEvaluatorCreateOrConnectWithoutUserInput = {
    where: EventEvaluatorWhereUniqueInput
    create: XOR<EventEvaluatorCreateWithoutUserInput, EventEvaluatorUncheckedCreateWithoutUserInput>
  }

  export type EventEvaluatorCreateManyUserInputEnvelope = {
    data: EventEvaluatorCreateManyUserInput | EventEvaluatorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionResponseCreateWithoutUserInput = {
    id?: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutQuestionResponsesInput
    articleVersion: ArticleVersionCreateNestedOneWithoutQuestionResponsesInput
  }

  export type QuestionResponseUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    articleVersionId: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionResponseCreateOrConnectWithoutUserInput = {
    where: QuestionResponseWhereUniqueInput
    create: XOR<QuestionResponseCreateWithoutUserInput, QuestionResponseUncheckedCreateWithoutUserInput>
  }

  export type QuestionResponseCreateManyUserInputEnvelope = {
    data: QuestionResponseCreateManyUserInput | QuestionResponseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleEvaluatorAssignmentCreateWithoutUserInput = {
    id?: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventEvaluator: EventEvaluatorCreateNestedOneWithoutArticleAssignmentsInput
    article: ArticleCreateNestedOneWithoutEvaluatorAssignmentsInput
  }

  export type ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    eventEvaluatorId: string
    articleId: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleEvaluatorAssignmentCreateOrConnectWithoutUserInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    create: XOR<ArticleEvaluatorAssignmentCreateWithoutUserInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ArticleEvaluatorAssignmentCreateManyUserInputEnvelope = {
    data: ArticleEvaluatorAssignmentCreateManyUserInput | ArticleEvaluatorAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
  }

  export type ArticleUpdateManyWithWhereWithoutUserInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: UuidFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    summary?: StringFilter<"Article"> | string
    thematicArea?: StringNullableFilter<"Article"> | string | null
    currentVersion?: IntFilter<"Article"> | number
    evaluationsDone?: IntFilter<"Article"> | number
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    eventId?: UuidFilter<"Article"> | string
    userId?: UuidFilter<"Article"> | string
    isActive?: BoolFilter<"Article"> | boolean
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type EvaluationUpsertWithWhereUniqueWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutUserInput, EvaluationUncheckedUpdateWithoutUserInput>
    create: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutUserInput, EvaluationUncheckedUpdateWithoutUserInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutUserInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutUserInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    id?: UuidFilter<"Evaluation"> | string
    grade?: IntFilter<"Evaluation"> | number
    evaluationDescription?: StringNullableFilter<"Evaluation"> | string | null
    evaluationDate?: DateTimeFilter<"Evaluation"> | Date | string
    userId?: UuidFilter<"Evaluation"> | string
    status?: EnumEvaluationStatusFilter<"Evaluation"> | $Enums.EvaluationStatus
    articleVersionId?: UuidFilter<"Evaluation"> | string
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
  }

  export type EventEvaluatorUpsertWithWhereUniqueWithoutUserInput = {
    where: EventEvaluatorWhereUniqueInput
    update: XOR<EventEvaluatorUpdateWithoutUserInput, EventEvaluatorUncheckedUpdateWithoutUserInput>
    create: XOR<EventEvaluatorCreateWithoutUserInput, EventEvaluatorUncheckedCreateWithoutUserInput>
  }

  export type EventEvaluatorUpdateWithWhereUniqueWithoutUserInput = {
    where: EventEvaluatorWhereUniqueInput
    data: XOR<EventEvaluatorUpdateWithoutUserInput, EventEvaluatorUncheckedUpdateWithoutUserInput>
  }

  export type EventEvaluatorUpdateManyWithWhereWithoutUserInput = {
    where: EventEvaluatorScalarWhereInput
    data: XOR<EventEvaluatorUpdateManyMutationInput, EventEvaluatorUncheckedUpdateManyWithoutUserInput>
  }

  export type EventEvaluatorScalarWhereInput = {
    AND?: EventEvaluatorScalarWhereInput | EventEvaluatorScalarWhereInput[]
    OR?: EventEvaluatorScalarWhereInput[]
    NOT?: EventEvaluatorScalarWhereInput | EventEvaluatorScalarWhereInput[]
    id?: UuidFilter<"EventEvaluator"> | string
    eventId?: UuidFilter<"EventEvaluator"> | string
    userId?: UuidFilter<"EventEvaluator"> | string
    isActive?: BoolFilter<"EventEvaluator"> | boolean
    createdAt?: DateTimeFilter<"EventEvaluator"> | Date | string
    updatedAt?: DateTimeFilter<"EventEvaluator"> | Date | string
  }

  export type QuestionResponseUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionResponseWhereUniqueInput
    update: XOR<QuestionResponseUpdateWithoutUserInput, QuestionResponseUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionResponseCreateWithoutUserInput, QuestionResponseUncheckedCreateWithoutUserInput>
  }

  export type QuestionResponseUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionResponseWhereUniqueInput
    data: XOR<QuestionResponseUpdateWithoutUserInput, QuestionResponseUncheckedUpdateWithoutUserInput>
  }

  export type QuestionResponseUpdateManyWithWhereWithoutUserInput = {
    where: QuestionResponseScalarWhereInput
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionResponseScalarWhereInput = {
    AND?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
    OR?: QuestionResponseScalarWhereInput[]
    NOT?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
    id?: UuidFilter<"QuestionResponse"> | string
    questionId?: UuidFilter<"QuestionResponse"> | string
    articleVersionId?: UuidFilter<"QuestionResponse"> | string
    userId?: UuidFilter<"QuestionResponse"> | string
    booleanResponse?: BoolNullableFilter<"QuestionResponse"> | boolean | null
    scaleResponse?: IntNullableFilter<"QuestionResponse"> | number | null
    textResponse?: StringNullableFilter<"QuestionResponse"> | string | null
    createdAt?: DateTimeFilter<"QuestionResponse"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionResponse"> | Date | string
  }

  export type ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    update: XOR<ArticleEvaluatorAssignmentUpdateWithoutUserInput, ArticleEvaluatorAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleEvaluatorAssignmentCreateWithoutUserInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    data: XOR<ArticleEvaluatorAssignmentUpdateWithoutUserInput, ArticleEvaluatorAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: ArticleEvaluatorAssignmentScalarWhereInput
    data: XOR<ArticleEvaluatorAssignmentUpdateManyMutationInput, ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleEvaluatorAssignmentScalarWhereInput = {
    AND?: ArticleEvaluatorAssignmentScalarWhereInput | ArticleEvaluatorAssignmentScalarWhereInput[]
    OR?: ArticleEvaluatorAssignmentScalarWhereInput[]
    NOT?: ArticleEvaluatorAssignmentScalarWhereInput | ArticleEvaluatorAssignmentScalarWhereInput[]
    id?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    eventEvaluatorId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    articleId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    userId?: UuidFilter<"ArticleEvaluatorAssignment"> | string
    isCorrected?: BoolFilter<"ArticleEvaluatorAssignment"> | boolean
    assignedAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
    createdAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleEvaluatorAssignment"> | Date | string
  }

  export type ArticleCreateWithoutEventInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticlesInput
    versions?: ArticleVersionCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutEventInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArticleVersionUncheckedCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordUncheckedCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorUncheckedCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutEventInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutEventInput, ArticleUncheckedCreateWithoutEventInput>
  }

  export type ArticleCreateManyEventInputEnvelope = {
    data: ArticleCreateManyEventInput | ArticleCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventEvaluatorCreateWithoutEventInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventEvaluatorsInput
    articleAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutEventEvaluatorInput
  }

  export type EventEvaluatorUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutEventEvaluatorInput
  }

  export type EventEvaluatorCreateOrConnectWithoutEventInput = {
    where: EventEvaluatorWhereUniqueInput
    create: XOR<EventEvaluatorCreateWithoutEventInput, EventEvaluatorUncheckedCreateWithoutEventInput>
  }

  export type EventEvaluatorCreateManyEventInputEnvelope = {
    data: EventEvaluatorCreateManyEventInput | EventEvaluatorCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistCreateWithoutEventsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutEventsInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutEventsInput, ChecklistUncheckedCreateWithoutEventsInput>
  }

  export type ArticleUpsertWithWhereUniqueWithoutEventInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutEventInput, ArticleUncheckedUpdateWithoutEventInput>
    create: XOR<ArticleCreateWithoutEventInput, ArticleUncheckedCreateWithoutEventInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutEventInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutEventInput, ArticleUncheckedUpdateWithoutEventInput>
  }

  export type ArticleUpdateManyWithWhereWithoutEventInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutEventInput>
  }

  export type EventEvaluatorUpsertWithWhereUniqueWithoutEventInput = {
    where: EventEvaluatorWhereUniqueInput
    update: XOR<EventEvaluatorUpdateWithoutEventInput, EventEvaluatorUncheckedUpdateWithoutEventInput>
    create: XOR<EventEvaluatorCreateWithoutEventInput, EventEvaluatorUncheckedCreateWithoutEventInput>
  }

  export type EventEvaluatorUpdateWithWhereUniqueWithoutEventInput = {
    where: EventEvaluatorWhereUniqueInput
    data: XOR<EventEvaluatorUpdateWithoutEventInput, EventEvaluatorUncheckedUpdateWithoutEventInput>
  }

  export type EventEvaluatorUpdateManyWithWhereWithoutEventInput = {
    where: EventEvaluatorScalarWhereInput
    data: XOR<EventEvaluatorUpdateManyMutationInput, EventEvaluatorUncheckedUpdateManyWithoutEventInput>
  }

  export type ChecklistUpsertWithoutEventsInput = {
    update: XOR<ChecklistUpdateWithoutEventsInput, ChecklistUncheckedUpdateWithoutEventsInput>
    create: XOR<ChecklistCreateWithoutEventsInput, ChecklistUncheckedCreateWithoutEventsInput>
    where?: ChecklistWhereInput
  }

  export type ChecklistUpdateToOneWithWhereWithoutEventsInput = {
    where?: ChecklistWhereInput
    data: XOR<ChecklistUpdateWithoutEventsInput, ChecklistUncheckedUpdateWithoutEventsInput>
  }

  export type ChecklistUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type EventCreateWithoutArticlesInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    eventEvaluators?: EventEvaluatorCreateNestedManyWithoutEventInput
    checklist?: ChecklistCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    checklistId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventEvaluators?: EventEvaluatorUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutArticlesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutArticlesInput, EventUncheckedCreateWithoutArticlesInput>
  }

  export type UserCreateWithoutArticlesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorUncheckedCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleVersionCreateWithoutArticleInput = {
    id?: string
    version: number
    pdfPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationCreateNestedManyWithoutArticleVersionInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutArticleVersionInput
  }

  export type ArticleVersionUncheckedCreateWithoutArticleInput = {
    id?: string
    version: number
    pdfPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutArticleVersionInput
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutArticleVersionInput
  }

  export type ArticleVersionCreateOrConnectWithoutArticleInput = {
    where: ArticleVersionWhereUniqueInput
    create: XOR<ArticleVersionCreateWithoutArticleInput, ArticleVersionUncheckedCreateWithoutArticleInput>
  }

  export type ArticleVersionCreateManyArticleInputEnvelope = {
    data: ArticleVersionCreateManyArticleInput | ArticleVersionCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleKeywordCreateWithoutArticleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleKeywordUncheckedCreateWithoutArticleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleKeywordCreateOrConnectWithoutArticleInput = {
    where: ArticleKeywordWhereUniqueInput
    create: XOR<ArticleKeywordCreateWithoutArticleInput, ArticleKeywordUncheckedCreateWithoutArticleInput>
  }

  export type ArticleKeywordCreateManyArticleInputEnvelope = {
    data: ArticleKeywordCreateManyArticleInput | ArticleKeywordCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type RelatedAuthorCreateWithoutArticleInput = {
    id?: string
    coAuthorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatedAuthorUncheckedCreateWithoutArticleInput = {
    id?: string
    coAuthorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatedAuthorCreateOrConnectWithoutArticleInput = {
    where: RelatedAuthorWhereUniqueInput
    create: XOR<RelatedAuthorCreateWithoutArticleInput, RelatedAuthorUncheckedCreateWithoutArticleInput>
  }

  export type RelatedAuthorCreateManyArticleInputEnvelope = {
    data: RelatedAuthorCreateManyArticleInput | RelatedAuthorCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleEvaluatorAssignmentCreateWithoutArticleInput = {
    id?: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventEvaluator: EventEvaluatorCreateNestedOneWithoutArticleAssignmentsInput
    user: UserCreateNestedOneWithoutArticleAssignmentsInput
  }

  export type ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput = {
    id?: string
    eventEvaluatorId: string
    userId: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleEvaluatorAssignmentCreateOrConnectWithoutArticleInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    create: XOR<ArticleEvaluatorAssignmentCreateWithoutArticleInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput>
  }

  export type ArticleEvaluatorAssignmentCreateManyArticleInputEnvelope = {
    data: ArticleEvaluatorAssignmentCreateManyArticleInput | ArticleEvaluatorAssignmentCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutArticlesInput = {
    update: XOR<EventUpdateWithoutArticlesInput, EventUncheckedUpdateWithoutArticlesInput>
    create: XOR<EventCreateWithoutArticlesInput, EventUncheckedCreateWithoutArticlesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutArticlesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutArticlesInput, EventUncheckedUpdateWithoutArticlesInput>
  }

  export type EventUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEvaluators?: EventEvaluatorUpdateManyWithoutEventNestedInput
    checklist?: ChecklistUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checklistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEvaluators?: EventEvaluatorUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUncheckedUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleVersionUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleVersionWhereUniqueInput
    update: XOR<ArticleVersionUpdateWithoutArticleInput, ArticleVersionUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleVersionCreateWithoutArticleInput, ArticleVersionUncheckedCreateWithoutArticleInput>
  }

  export type ArticleVersionUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleVersionWhereUniqueInput
    data: XOR<ArticleVersionUpdateWithoutArticleInput, ArticleVersionUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleVersionUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleVersionScalarWhereInput
    data: XOR<ArticleVersionUpdateManyMutationInput, ArticleVersionUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleVersionScalarWhereInput = {
    AND?: ArticleVersionScalarWhereInput | ArticleVersionScalarWhereInput[]
    OR?: ArticleVersionScalarWhereInput[]
    NOT?: ArticleVersionScalarWhereInput | ArticleVersionScalarWhereInput[]
    id?: UuidFilter<"ArticleVersion"> | string
    version?: IntFilter<"ArticleVersion"> | number
    pdfPath?: StringFilter<"ArticleVersion"> | string
    articleId?: UuidFilter<"ArticleVersion"> | string
    createdAt?: DateTimeFilter<"ArticleVersion"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleVersion"> | Date | string
  }

  export type ArticleKeywordUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleKeywordWhereUniqueInput
    update: XOR<ArticleKeywordUpdateWithoutArticleInput, ArticleKeywordUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleKeywordCreateWithoutArticleInput, ArticleKeywordUncheckedCreateWithoutArticleInput>
  }

  export type ArticleKeywordUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleKeywordWhereUniqueInput
    data: XOR<ArticleKeywordUpdateWithoutArticleInput, ArticleKeywordUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleKeywordUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleKeywordScalarWhereInput
    data: XOR<ArticleKeywordUpdateManyMutationInput, ArticleKeywordUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleKeywordScalarWhereInput = {
    AND?: ArticleKeywordScalarWhereInput | ArticleKeywordScalarWhereInput[]
    OR?: ArticleKeywordScalarWhereInput[]
    NOT?: ArticleKeywordScalarWhereInput | ArticleKeywordScalarWhereInput[]
    id?: UuidFilter<"ArticleKeyword"> | string
    name?: StringFilter<"ArticleKeyword"> | string
    articleId?: UuidFilter<"ArticleKeyword"> | string
    createdAt?: DateTimeFilter<"ArticleKeyword"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleKeyword"> | Date | string
  }

  export type RelatedAuthorUpsertWithWhereUniqueWithoutArticleInput = {
    where: RelatedAuthorWhereUniqueInput
    update: XOR<RelatedAuthorUpdateWithoutArticleInput, RelatedAuthorUncheckedUpdateWithoutArticleInput>
    create: XOR<RelatedAuthorCreateWithoutArticleInput, RelatedAuthorUncheckedCreateWithoutArticleInput>
  }

  export type RelatedAuthorUpdateWithWhereUniqueWithoutArticleInput = {
    where: RelatedAuthorWhereUniqueInput
    data: XOR<RelatedAuthorUpdateWithoutArticleInput, RelatedAuthorUncheckedUpdateWithoutArticleInput>
  }

  export type RelatedAuthorUpdateManyWithWhereWithoutArticleInput = {
    where: RelatedAuthorScalarWhereInput
    data: XOR<RelatedAuthorUpdateManyMutationInput, RelatedAuthorUncheckedUpdateManyWithoutArticleInput>
  }

  export type RelatedAuthorScalarWhereInput = {
    AND?: RelatedAuthorScalarWhereInput | RelatedAuthorScalarWhereInput[]
    OR?: RelatedAuthorScalarWhereInput[]
    NOT?: RelatedAuthorScalarWhereInput | RelatedAuthorScalarWhereInput[]
    id?: UuidFilter<"RelatedAuthor"> | string
    coAuthorName?: StringFilter<"RelatedAuthor"> | string
    articleId?: UuidFilter<"RelatedAuthor"> | string
    createdAt?: DateTimeFilter<"RelatedAuthor"> | Date | string
    updatedAt?: DateTimeFilter<"RelatedAuthor"> | Date | string
  }

  export type ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    update: XOR<ArticleEvaluatorAssignmentUpdateWithoutArticleInput, ArticleEvaluatorAssignmentUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleEvaluatorAssignmentCreateWithoutArticleInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutArticleInput>
  }

  export type ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    data: XOR<ArticleEvaluatorAssignmentUpdateWithoutArticleInput, ArticleEvaluatorAssignmentUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleEvaluatorAssignmentScalarWhereInput
    data: XOR<ArticleEvaluatorAssignmentUpdateManyMutationInput, ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleCreateWithoutVersionsInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    keywords?: ArticleKeywordCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutVersionsInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    keywords?: ArticleKeywordUncheckedCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorUncheckedCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutVersionsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutVersionsInput, ArticleUncheckedCreateWithoutVersionsInput>
  }

  export type EvaluationCreateWithoutArticleVersionInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    status?: $Enums.EvaluationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateWithoutArticleVersionInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    userId: string
    status?: $Enums.EvaluationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationCreateOrConnectWithoutArticleVersionInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutArticleVersionInput, EvaluationUncheckedCreateWithoutArticleVersionInput>
  }

  export type EvaluationCreateManyArticleVersionInputEnvelope = {
    data: EvaluationCreateManyArticleVersionInput | EvaluationCreateManyArticleVersionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionResponseCreateWithoutArticleVersionInput = {
    id?: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutQuestionResponsesInput
    user: UserCreateNestedOneWithoutQuestionResponsesInput
  }

  export type QuestionResponseUncheckedCreateWithoutArticleVersionInput = {
    id?: string
    questionId: string
    userId: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionResponseCreateOrConnectWithoutArticleVersionInput = {
    where: QuestionResponseWhereUniqueInput
    create: XOR<QuestionResponseCreateWithoutArticleVersionInput, QuestionResponseUncheckedCreateWithoutArticleVersionInput>
  }

  export type QuestionResponseCreateManyArticleVersionInputEnvelope = {
    data: QuestionResponseCreateManyArticleVersionInput | QuestionResponseCreateManyArticleVersionInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithoutVersionsInput = {
    update: XOR<ArticleUpdateWithoutVersionsInput, ArticleUncheckedUpdateWithoutVersionsInput>
    create: XOR<ArticleCreateWithoutVersionsInput, ArticleUncheckedCreateWithoutVersionsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutVersionsInput, ArticleUncheckedUpdateWithoutVersionsInput>
  }

  export type ArticleUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutArticlesNestedInput
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    keywords?: ArticleKeywordUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: ArticleKeywordUncheckedUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUncheckedUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type EvaluationUpsertWithWhereUniqueWithoutArticleVersionInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutArticleVersionInput, EvaluationUncheckedUpdateWithoutArticleVersionInput>
    create: XOR<EvaluationCreateWithoutArticleVersionInput, EvaluationUncheckedCreateWithoutArticleVersionInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutArticleVersionInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutArticleVersionInput, EvaluationUncheckedUpdateWithoutArticleVersionInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutArticleVersionInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutArticleVersionInput>
  }

  export type QuestionResponseUpsertWithWhereUniqueWithoutArticleVersionInput = {
    where: QuestionResponseWhereUniqueInput
    update: XOR<QuestionResponseUpdateWithoutArticleVersionInput, QuestionResponseUncheckedUpdateWithoutArticleVersionInput>
    create: XOR<QuestionResponseCreateWithoutArticleVersionInput, QuestionResponseUncheckedCreateWithoutArticleVersionInput>
  }

  export type QuestionResponseUpdateWithWhereUniqueWithoutArticleVersionInput = {
    where: QuestionResponseWhereUniqueInput
    data: XOR<QuestionResponseUpdateWithoutArticleVersionInput, QuestionResponseUncheckedUpdateWithoutArticleVersionInput>
  }

  export type QuestionResponseUpdateManyWithWhereWithoutArticleVersionInput = {
    where: QuestionResponseScalarWhereInput
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyWithoutArticleVersionInput>
  }

  export type ArticleCreateWithoutKeywordsInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    versions?: ArticleVersionCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutKeywordsInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArticleVersionUncheckedCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorUncheckedCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutKeywordsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutKeywordsInput, ArticleUncheckedCreateWithoutKeywordsInput>
  }

  export type ArticleUpsertWithoutKeywordsInput = {
    update: XOR<ArticleUpdateWithoutKeywordsInput, ArticleUncheckedUpdateWithoutKeywordsInput>
    create: XOR<ArticleCreateWithoutKeywordsInput, ArticleUncheckedCreateWithoutKeywordsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutKeywordsInput, ArticleUncheckedUpdateWithoutKeywordsInput>
  }

  export type ArticleUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutArticlesNestedInput
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    versions?: ArticleVersionUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArticleVersionUncheckedUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUncheckedUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateWithoutRelatedAuthorsInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    versions?: ArticleVersionCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutRelatedAuthorsInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArticleVersionUncheckedCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordUncheckedCreateNestedManyWithoutArticleInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutRelatedAuthorsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutRelatedAuthorsInput, ArticleUncheckedCreateWithoutRelatedAuthorsInput>
  }

  export type ArticleUpsertWithoutRelatedAuthorsInput = {
    update: XOR<ArticleUpdateWithoutRelatedAuthorsInput, ArticleUncheckedUpdateWithoutRelatedAuthorsInput>
    create: XOR<ArticleCreateWithoutRelatedAuthorsInput, ArticleUncheckedCreateWithoutRelatedAuthorsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutRelatedAuthorsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutRelatedAuthorsInput, ArticleUncheckedUpdateWithoutRelatedAuthorsInput>
  }

  export type ArticleUpdateWithoutRelatedAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutArticlesNestedInput
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    versions?: ArticleVersionUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutRelatedAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArticleVersionUncheckedUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUncheckedUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserCreateWithoutEvaluationsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorUncheckedCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvaluationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
  }

  export type ArticleVersionCreateWithoutEvaluationsInput = {
    id?: string
    version: number
    pdfPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutVersionsInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutArticleVersionInput
  }

  export type ArticleVersionUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    version: number
    pdfPath: string
    articleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutArticleVersionInput
  }

  export type ArticleVersionCreateOrConnectWithoutEvaluationsInput = {
    where: ArticleVersionWhereUniqueInput
    create: XOR<ArticleVersionCreateWithoutEvaluationsInput, ArticleVersionUncheckedCreateWithoutEvaluationsInput>
  }

  export type UserUpsertWithoutEvaluationsInput = {
    update: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUncheckedUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleVersionUpsertWithoutEvaluationsInput = {
    update: XOR<ArticleVersionUpdateWithoutEvaluationsInput, ArticleVersionUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<ArticleVersionCreateWithoutEvaluationsInput, ArticleVersionUncheckedCreateWithoutEvaluationsInput>
    where?: ArticleVersionWhereInput
  }

  export type ArticleVersionUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: ArticleVersionWhereInput
    data: XOR<ArticleVersionUpdateWithoutEvaluationsInput, ArticleVersionUncheckedUpdateWithoutEvaluationsInput>
  }

  export type ArticleVersionUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutVersionsNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutArticleVersionNestedInput
  }

  export type ArticleVersionUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutArticleVersionNestedInput
  }

  export type EventCreateWithoutEventEvaluatorsInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutEventInput
    checklist?: ChecklistCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutEventEvaluatorsInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    checklistId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventEvaluatorsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventEvaluatorsInput, EventUncheckedCreateWithoutEventEvaluatorsInput>
  }

  export type UserCreateWithoutEventEvaluatorsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventEvaluatorsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventEvaluatorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventEvaluatorsInput, UserUncheckedCreateWithoutEventEvaluatorsInput>
  }

  export type ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput = {
    id?: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutEvaluatorAssignmentsInput
    user: UserCreateNestedOneWithoutArticleAssignmentsInput
  }

  export type ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput = {
    id?: string
    articleId: string
    userId: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleEvaluatorAssignmentCreateOrConnectWithoutEventEvaluatorInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    create: XOR<ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput>
  }

  export type ArticleEvaluatorAssignmentCreateManyEventEvaluatorInputEnvelope = {
    data: ArticleEvaluatorAssignmentCreateManyEventEvaluatorInput | ArticleEvaluatorAssignmentCreateManyEventEvaluatorInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutEventEvaluatorsInput = {
    update: XOR<EventUpdateWithoutEventEvaluatorsInput, EventUncheckedUpdateWithoutEventEvaluatorsInput>
    create: XOR<EventCreateWithoutEventEvaluatorsInput, EventUncheckedCreateWithoutEventEvaluatorsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventEvaluatorsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventEvaluatorsInput, EventUncheckedUpdateWithoutEventEvaluatorsInput>
  }

  export type EventUpdateWithoutEventEvaluatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutEventNestedInput
    checklist?: ChecklistUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutEventEvaluatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checklistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutEventEvaluatorsInput = {
    update: XOR<UserUpdateWithoutEventEvaluatorsInput, UserUncheckedUpdateWithoutEventEvaluatorsInput>
    create: XOR<UserCreateWithoutEventEvaluatorsInput, UserUncheckedCreateWithoutEventEvaluatorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventEvaluatorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventEvaluatorsInput, UserUncheckedUpdateWithoutEventEvaluatorsInput>
  }

  export type UserUpdateWithoutEventEvaluatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventEvaluatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleEvaluatorAssignmentUpsertWithWhereUniqueWithoutEventEvaluatorInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    update: XOR<ArticleEvaluatorAssignmentUpdateWithoutEventEvaluatorInput, ArticleEvaluatorAssignmentUncheckedUpdateWithoutEventEvaluatorInput>
    create: XOR<ArticleEvaluatorAssignmentCreateWithoutEventEvaluatorInput, ArticleEvaluatorAssignmentUncheckedCreateWithoutEventEvaluatorInput>
  }

  export type ArticleEvaluatorAssignmentUpdateWithWhereUniqueWithoutEventEvaluatorInput = {
    where: ArticleEvaluatorAssignmentWhereUniqueInput
    data: XOR<ArticleEvaluatorAssignmentUpdateWithoutEventEvaluatorInput, ArticleEvaluatorAssignmentUncheckedUpdateWithoutEventEvaluatorInput>
  }

  export type ArticleEvaluatorAssignmentUpdateManyWithWhereWithoutEventEvaluatorInput = {
    where: ArticleEvaluatorAssignmentScalarWhereInput
    data: XOR<ArticleEvaluatorAssignmentUpdateManyMutationInput, ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutEventEvaluatorInput>
  }

  export type EventEvaluatorCreateWithoutArticleAssignmentsInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutEventEvaluatorsInput
    user: UserCreateNestedOneWithoutEventEvaluatorsInput
  }

  export type EventEvaluatorUncheckedCreateWithoutArticleAssignmentsInput = {
    id?: string
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventEvaluatorCreateOrConnectWithoutArticleAssignmentsInput = {
    where: EventEvaluatorWhereUniqueInput
    create: XOR<EventEvaluatorCreateWithoutArticleAssignmentsInput, EventEvaluatorUncheckedCreateWithoutArticleAssignmentsInput>
  }

  export type ArticleCreateWithoutEvaluatorAssignmentsInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutArticlesInput
    user: UserCreateNestedOneWithoutArticlesInput
    versions?: ArticleVersionCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutEvaluatorAssignmentsInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    eventId: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArticleVersionUncheckedCreateNestedManyWithoutArticleInput
    keywords?: ArticleKeywordUncheckedCreateNestedManyWithoutArticleInput
    relatedAuthors?: RelatedAuthorUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutEvaluatorAssignmentsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutEvaluatorAssignmentsInput, ArticleUncheckedCreateWithoutEvaluatorAssignmentsInput>
  }

  export type UserCreateWithoutArticleAssignmentsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleAssignmentsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorUncheckedCreateNestedManyWithoutUserInput
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleAssignmentsInput, UserUncheckedCreateWithoutArticleAssignmentsInput>
  }

  export type EventEvaluatorUpsertWithoutArticleAssignmentsInput = {
    update: XOR<EventEvaluatorUpdateWithoutArticleAssignmentsInput, EventEvaluatorUncheckedUpdateWithoutArticleAssignmentsInput>
    create: XOR<EventEvaluatorCreateWithoutArticleAssignmentsInput, EventEvaluatorUncheckedCreateWithoutArticleAssignmentsInput>
    where?: EventEvaluatorWhereInput
  }

  export type EventEvaluatorUpdateToOneWithWhereWithoutArticleAssignmentsInput = {
    where?: EventEvaluatorWhereInput
    data: XOR<EventEvaluatorUpdateWithoutArticleAssignmentsInput, EventEvaluatorUncheckedUpdateWithoutArticleAssignmentsInput>
  }

  export type EventEvaluatorUpdateWithoutArticleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventEvaluatorsNestedInput
    user?: UserUpdateOneRequiredWithoutEventEvaluatorsNestedInput
  }

  export type EventEvaluatorUncheckedUpdateWithoutArticleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUpsertWithoutEvaluatorAssignmentsInput = {
    update: XOR<ArticleUpdateWithoutEvaluatorAssignmentsInput, ArticleUncheckedUpdateWithoutEvaluatorAssignmentsInput>
    create: XOR<ArticleCreateWithoutEvaluatorAssignmentsInput, ArticleUncheckedCreateWithoutEvaluatorAssignmentsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutEvaluatorAssignmentsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutEvaluatorAssignmentsInput, ArticleUncheckedUpdateWithoutEvaluatorAssignmentsInput>
  }

  export type ArticleUpdateWithoutEvaluatorAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutArticlesNestedInput
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    versions?: ArticleVersionUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutEvaluatorAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArticleVersionUncheckedUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUncheckedUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutArticleAssignmentsInput = {
    update: XOR<UserUpdateWithoutArticleAssignmentsInput, UserUncheckedUpdateWithoutArticleAssignmentsInput>
    create: XOR<UserCreateWithoutArticleAssignmentsInput, UserUncheckedCreateWithoutArticleAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleAssignmentsInput, UserUncheckedUpdateWithoutArticleAssignmentsInput>
  }

  export type UserUpdateWithoutArticleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUncheckedUpdateManyWithoutUserNestedInput
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionCreateWithoutChecklistInput = {
    id?: string
    description: string
    type?: $Enums.QuestionType
    isRequired?: boolean
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionResponses?: QuestionResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutChecklistInput = {
    id?: string
    description: string
    type?: $Enums.QuestionType
    isRequired?: boolean
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutChecklistInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutChecklistInput, QuestionUncheckedCreateWithoutChecklistInput>
  }

  export type QuestionCreateManyChecklistInputEnvelope = {
    data: QuestionCreateManyChecklistInput | QuestionCreateManyChecklistInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutChecklistInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutEventInput
    eventEvaluators?: EventEvaluatorCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutChecklistInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutEventInput
    eventEvaluators?: EventEvaluatorUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutChecklistInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutChecklistInput, EventUncheckedCreateWithoutChecklistInput>
  }

  export type EventCreateManyChecklistInputEnvelope = {
    data: EventCreateManyChecklistInput | EventCreateManyChecklistInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutChecklistInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutChecklistInput, QuestionUncheckedUpdateWithoutChecklistInput>
    create: XOR<QuestionCreateWithoutChecklistInput, QuestionUncheckedCreateWithoutChecklistInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutChecklistInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutChecklistInput, QuestionUncheckedUpdateWithoutChecklistInput>
  }

  export type QuestionUpdateManyWithWhereWithoutChecklistInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutChecklistInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: UuidFilter<"Question"> | string
    description?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    isRequired?: BoolFilter<"Question"> | boolean
    checklistId?: UuidFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutChecklistInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutChecklistInput, EventUncheckedUpdateWithoutChecklistInput>
    create: XOR<EventCreateWithoutChecklistInput, EventUncheckedCreateWithoutChecklistInput>
  }

  export type EventUpdateWithWhereUniqueWithoutChecklistInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutChecklistInput, EventUncheckedUpdateWithoutChecklistInput>
  }

  export type EventUpdateManyWithWhereWithoutChecklistInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutChecklistInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: UuidFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    banner?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    eventStartDate?: DateTimeFilter<"Event"> | Date | string
    eventEndDate?: DateTimeFilter<"Event"> | Date | string
    submissionStartDate?: DateTimeFilter<"Event"> | Date | string
    submissionEndDate?: DateTimeFilter<"Event"> | Date | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFilter<"Event"> | $Enums.EvaluationType
    isActive?: BoolFilter<"Event"> | boolean
    checklistId?: UuidNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type ChecklistCreateWithoutQuestionsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateWithoutQuestionsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutQuestionsInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutQuestionsInput, ChecklistUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionResponseCreateWithoutQuestionInput = {
    id?: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articleVersion: ArticleVersionCreateNestedOneWithoutQuestionResponsesInput
    user: UserCreateNestedOneWithoutQuestionResponsesInput
  }

  export type QuestionResponseUncheckedCreateWithoutQuestionInput = {
    id?: string
    articleVersionId: string
    userId: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionResponseCreateOrConnectWithoutQuestionInput = {
    where: QuestionResponseWhereUniqueInput
    create: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionResponseCreateManyQuestionInputEnvelope = {
    data: QuestionResponseCreateManyQuestionInput | QuestionResponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistUpsertWithoutQuestionsInput = {
    update: XOR<ChecklistUpdateWithoutQuestionsInput, ChecklistUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ChecklistCreateWithoutQuestionsInput, ChecklistUncheckedCreateWithoutQuestionsInput>
    where?: ChecklistWhereInput
  }

  export type ChecklistUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ChecklistWhereInput
    data: XOR<ChecklistUpdateWithoutQuestionsInput, ChecklistUncheckedUpdateWithoutQuestionsInput>
  }

  export type ChecklistUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionResponseWhereUniqueInput
    update: XOR<QuestionResponseUpdateWithoutQuestionInput, QuestionResponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionResponseWhereUniqueInput
    data: XOR<QuestionResponseUpdateWithoutQuestionInput, QuestionResponseUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionResponseUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionResponseScalarWhereInput
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionCreateWithoutQuestionResponsesInput = {
    id?: string
    description: string
    type?: $Enums.QuestionType
    isRequired?: boolean
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    checklist: ChecklistCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutQuestionResponsesInput = {
    id?: string
    description: string
    type?: $Enums.QuestionType
    isRequired?: boolean
    checklistId: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutQuestionResponsesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionResponsesInput, QuestionUncheckedCreateWithoutQuestionResponsesInput>
  }

  export type ArticleVersionCreateWithoutQuestionResponsesInput = {
    id?: string
    version: number
    pdfPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutVersionsInput
    evaluations?: EvaluationCreateNestedManyWithoutArticleVersionInput
  }

  export type ArticleVersionUncheckedCreateWithoutQuestionResponsesInput = {
    id?: string
    version: number
    pdfPath: string
    articleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutArticleVersionInput
  }

  export type ArticleVersionCreateOrConnectWithoutQuestionResponsesInput = {
    where: ArticleVersionWhereUniqueInput
    create: XOR<ArticleVersionCreateWithoutQuestionResponsesInput, ArticleVersionUncheckedCreateWithoutQuestionResponsesInput>
  }

  export type UserCreateWithoutQuestionResponsesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionResponsesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.RoleType
    isFirstLogin?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isFromBpk?: boolean
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    eventEvaluators?: EventEvaluatorUncheckedCreateNestedManyWithoutUserInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionResponsesInput, UserUncheckedCreateWithoutQuestionResponsesInput>
  }

  export type QuestionUpsertWithoutQuestionResponsesInput = {
    update: XOR<QuestionUpdateWithoutQuestionResponsesInput, QuestionUncheckedUpdateWithoutQuestionResponsesInput>
    create: XOR<QuestionCreateWithoutQuestionResponsesInput, QuestionUncheckedCreateWithoutQuestionResponsesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutQuestionResponsesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutQuestionResponsesInput, QuestionUncheckedUpdateWithoutQuestionResponsesInput>
  }

  export type QuestionUpdateWithoutQuestionResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    checklistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleVersionUpsertWithoutQuestionResponsesInput = {
    update: XOR<ArticleVersionUpdateWithoutQuestionResponsesInput, ArticleVersionUncheckedUpdateWithoutQuestionResponsesInput>
    create: XOR<ArticleVersionCreateWithoutQuestionResponsesInput, ArticleVersionUncheckedCreateWithoutQuestionResponsesInput>
    where?: ArticleVersionWhereInput
  }

  export type ArticleVersionUpdateToOneWithWhereWithoutQuestionResponsesInput = {
    where?: ArticleVersionWhereInput
    data: XOR<ArticleVersionUpdateWithoutQuestionResponsesInput, ArticleVersionUncheckedUpdateWithoutQuestionResponsesInput>
  }

  export type ArticleVersionUpdateWithoutQuestionResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutVersionsNestedInput
    evaluations?: EvaluationUpdateManyWithoutArticleVersionNestedInput
  }

  export type ArticleVersionUncheckedUpdateWithoutQuestionResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutArticleVersionNestedInput
  }

  export type UserUpsertWithoutQuestionResponsesInput = {
    update: XOR<UserUpdateWithoutQuestionResponsesInput, UserUncheckedUpdateWithoutQuestionResponsesInput>
    create: XOR<UserCreateWithoutQuestionResponsesInput, UserUncheckedCreateWithoutQuestionResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionResponsesInput, UserUncheckedUpdateWithoutQuestionResponsesInput>
  }

  export type UserUpdateWithoutQuestionResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFromBpk?: BoolFieldUpdateOperationsInput | boolean
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    eventEvaluators?: EventEvaluatorUncheckedUpdateManyWithoutUserNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleCreateManyUserInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    eventId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationCreateManyUserInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    status?: $Enums.EvaluationStatus
    articleVersionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventEvaluatorCreateManyUserInput = {
    id?: string
    eventId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionResponseCreateManyUserInput = {
    id?: string
    questionId: string
    articleVersionId: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleEvaluatorAssignmentCreateManyUserInput = {
    id?: string
    eventEvaluatorId: string
    articleId: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutArticlesNestedInput
    versions?: ArticleVersionUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    eventId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArticleVersionUncheckedUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUncheckedUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUncheckedUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    eventId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleVersion?: ArticleVersionUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    articleVersionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    articleVersionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventEvaluatorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventEvaluatorsNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutEventEvaluatorNestedInput
  }

  export type EventEvaluatorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutEventEvaluatorNestedInput
  }

  export type EventEvaluatorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestionResponsesNestedInput
    articleVersion?: ArticleVersionUpdateOneRequiredWithoutQuestionResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    articleVersionId?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    articleVersionId?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEvaluator?: EventEvaluatorUpdateOneRequiredWithoutArticleAssignmentsNestedInput
    article?: ArticleUpdateOneRequiredWithoutEvaluatorAssignmentsNestedInput
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventEvaluatorId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventEvaluatorId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyEventInput = {
    id?: string
    title: string
    summary: string
    thematicArea?: string | null
    currentVersion?: number
    evaluationsDone?: number
    status?: $Enums.ArticleStatus
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventEvaluatorCreateManyEventInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    versions?: ArticleVersionUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArticleVersionUncheckedUpdateManyWithoutArticleNestedInput
    keywords?: ArticleKeywordUncheckedUpdateManyWithoutArticleNestedInput
    relatedAuthors?: RelatedAuthorUncheckedUpdateManyWithoutArticleNestedInput
    evaluatorAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    thematicArea?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: IntFieldUpdateOperationsInput | number
    evaluationsDone?: IntFieldUpdateOperationsInput | number
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventEvaluatorUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventEvaluatorsNestedInput
    articleAssignments?: ArticleEvaluatorAssignmentUpdateManyWithoutEventEvaluatorNestedInput
  }

  export type EventEvaluatorUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleAssignments?: ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutEventEvaluatorNestedInput
  }

  export type EventEvaluatorUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleVersionCreateManyArticleInput = {
    id?: string
    version: number
    pdfPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleKeywordCreateManyArticleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatedAuthorCreateManyArticleInput = {
    id?: string
    coAuthorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleEvaluatorAssignmentCreateManyArticleInput = {
    id?: string
    eventEvaluatorId: string
    userId: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleVersionUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUpdateManyWithoutArticleVersionNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutArticleVersionNestedInput
  }

  export type ArticleVersionUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutArticleVersionNestedInput
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutArticleVersionNestedInput
  }

  export type ArticleVersionUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    pdfPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleKeywordUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleKeywordUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleKeywordUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatedAuthorUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    coAuthorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatedAuthorUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    coAuthorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatedAuthorUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    coAuthorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEvaluator?: EventEvaluatorUpdateOneRequiredWithoutArticleAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutArticleAssignmentsNestedInput
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventEvaluatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventEvaluatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateManyArticleVersionInput = {
    id?: string
    grade: number
    evaluationDescription?: string | null
    evaluationDate: Date | string
    userId: string
    status?: $Enums.EvaluationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionResponseCreateManyArticleVersionInput = {
    id?: string
    questionId: string
    userId: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationUpdateWithoutArticleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutArticleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyWithoutArticleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: IntFieldUpdateOperationsInput | number
    evaluationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseUpdateWithoutArticleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestionResponsesNestedInput
    user?: UserUpdateOneRequiredWithoutQuestionResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateWithoutArticleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseUncheckedUpdateManyWithoutArticleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentCreateManyEventEvaluatorInput = {
    id?: string
    articleId: string
    userId: string
    isCorrected?: boolean
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleEvaluatorAssignmentUpdateWithoutEventEvaluatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutEvaluatorAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutArticleAssignmentsNestedInput
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateWithoutEventEvaluatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleEvaluatorAssignmentUncheckedUpdateManyWithoutEventEvaluatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCorrected?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyChecklistInput = {
    id?: string
    description: string
    type?: $Enums.QuestionType
    isRequired?: boolean
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyChecklistInput = {
    id?: string
    name: string
    banner?: string | null
    description?: string | null
    eventStartDate: Date | string
    eventEndDate: Date | string
    submissionStartDate: Date | string
    submissionEndDate: Date | string
    status?: $Enums.EventStatus
    evaluationType: $Enums.EvaluationType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionResponses?: QuestionResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutEventNestedInput
    eventEvaluators?: EventEvaluatorUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutEventNestedInput
    eventEvaluators?: EventEvaluatorUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    evaluationType?: EnumEvaluationTypeFieldUpdateOperationsInput | $Enums.EvaluationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseCreateManyQuestionInput = {
    id?: string
    articleVersionId: string
    userId: string
    booleanResponse?: boolean | null
    scaleResponse?: number | null
    textResponse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionResponseUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleVersion?: ArticleVersionUpdateOneRequiredWithoutQuestionResponsesNestedInput
    user?: UserUpdateOneRequiredWithoutQuestionResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleVersionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleVersionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    booleanResponse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scaleResponse?: NullableIntFieldUpdateOperationsInput | number | null
    textResponse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}