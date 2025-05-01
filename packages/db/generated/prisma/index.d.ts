
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
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model TrainingImage
 * 
 */
export type TrainingImage = $Result.DefaultSelection<Prisma.$TrainingImagePayload>
/**
 * Model OutputImage
 * 
 */
export type OutputImage = $Result.DefaultSelection<Prisma.$OutputImagePayload>
/**
 * Model Pack
 * 
 */
export type Pack = $Result.DefaultSelection<Prisma.$PackPayload>
/**
 * Model PackPrompt
 * 
 */
export type PackPrompt = $Result.DefaultSelection<Prisma.$PackPromptPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OutputImageStatusEnum: {
  PENDING: 'PENDING',
  GENERATED: 'GENERATED',
  FAILED: 'FAILED'
};

export type OutputImageStatusEnum = (typeof OutputImageStatusEnum)[keyof typeof OutputImageStatusEnum]


export const EthinicityEnum: {
  WHITE: 'WHITE',
  BLACK: 'BLACK',
  ASIAN_AMERICAN: 'ASIAN_AMERICAN',
  EAST_ASIAN: 'EAST_ASIAN',
  SOUTH_EAST_ASIAN: 'SOUTH_EAST_ASIAN',
  SOUTH_ASIAN: 'SOUTH_ASIAN',
  MIDDLE_EASTERN: 'MIDDLE_EASTERN',
  PACIFIC: 'PACIFIC',
  HISPANIC: 'HISPANIC'
};

export type EthinicityEnum = (typeof EthinicityEnum)[keyof typeof EthinicityEnum]


export const EyeColorEnum: {
  BROWN: 'BROWN',
  BLUE: 'BLUE',
  HAZEL: 'HAZEL',
  GRAY: 'GRAY'
};

export type EyeColorEnum = (typeof EyeColorEnum)[keyof typeof EyeColorEnum]


export const ModelTypeEnum: {
  MAN: 'MAN',
  WOMAN: 'WOMAN',
  OTHERS: 'OTHERS'
};

export type ModelTypeEnum = (typeof ModelTypeEnum)[keyof typeof ModelTypeEnum]

}

export type OutputImageStatusEnum = $Enums.OutputImageStatusEnum

export const OutputImageStatusEnum: typeof $Enums.OutputImageStatusEnum

export type EthinicityEnum = $Enums.EthinicityEnum

export const EthinicityEnum: typeof $Enums.EthinicityEnum

export type EyeColorEnum = $Enums.EyeColorEnum

export const EyeColorEnum: typeof $Enums.EyeColorEnum

export type ModelTypeEnum = $Enums.ModelTypeEnum

export const ModelTypeEnum: typeof $Enums.ModelTypeEnum

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
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainingImage`: Exposes CRUD operations for the **TrainingImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingImages
    * const trainingImages = await prisma.trainingImage.findMany()
    * ```
    */
  get trainingImage(): Prisma.TrainingImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outputImage`: Exposes CRUD operations for the **OutputImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutputImages
    * const outputImages = await prisma.outputImage.findMany()
    * ```
    */
  get outputImage(): Prisma.OutputImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pack`: Exposes CRUD operations for the **Pack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packs
    * const packs = await prisma.pack.findMany()
    * ```
    */
  get pack(): Prisma.PackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packPrompt`: Exposes CRUD operations for the **PackPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackPrompts
    * const packPrompts = await prisma.packPrompt.findMany()
    * ```
    */
  get packPrompt(): Prisma.PackPromptDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Model: 'Model',
    TrainingImage: 'TrainingImage',
    OutputImage: 'OutputImage',
    Pack: 'Pack',
    PackPrompt: 'PackPrompt'
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
      modelProps: "user" | "model" | "trainingImage" | "outputImage" | "pack" | "packPrompt"
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
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      TrainingImage: {
        payload: Prisma.$TrainingImagePayload<ExtArgs>
        fields: Prisma.TrainingImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>
          }
          findFirst: {
            args: Prisma.TrainingImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>
          }
          findMany: {
            args: Prisma.TrainingImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>[]
          }
          create: {
            args: Prisma.TrainingImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>
          }
          createMany: {
            args: Prisma.TrainingImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>[]
          }
          delete: {
            args: Prisma.TrainingImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>
          }
          update: {
            args: Prisma.TrainingImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>
          }
          deleteMany: {
            args: Prisma.TrainingImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>[]
          }
          upsert: {
            args: Prisma.TrainingImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagePayload>
          }
          aggregate: {
            args: Prisma.TrainingImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingImage>
          }
          groupBy: {
            args: Prisma.TrainingImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingImageCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingImageCountAggregateOutputType> | number
          }
        }
      }
      OutputImage: {
        payload: Prisma.$OutputImagePayload<ExtArgs>
        fields: Prisma.OutputImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutputImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutputImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          findFirst: {
            args: Prisma.OutputImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutputImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          findMany: {
            args: Prisma.OutputImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>[]
          }
          create: {
            args: Prisma.OutputImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          createMany: {
            args: Prisma.OutputImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutputImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>[]
          }
          delete: {
            args: Prisma.OutputImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          update: {
            args: Prisma.OutputImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          deleteMany: {
            args: Prisma.OutputImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutputImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutputImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>[]
          }
          upsert: {
            args: Prisma.OutputImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          aggregate: {
            args: Prisma.OutputImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutputImage>
          }
          groupBy: {
            args: Prisma.OutputImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutputImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutputImageCountArgs<ExtArgs>
            result: $Utils.Optional<OutputImageCountAggregateOutputType> | number
          }
        }
      }
      Pack: {
        payload: Prisma.$PackPayload<ExtArgs>
        fields: Prisma.PackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          findFirst: {
            args: Prisma.PackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          findMany: {
            args: Prisma.PackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          create: {
            args: Prisma.PackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          createMany: {
            args: Prisma.PackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          delete: {
            args: Prisma.PackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          update: {
            args: Prisma.PackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          deleteMany: {
            args: Prisma.PackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          upsert: {
            args: Prisma.PackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          aggregate: {
            args: Prisma.PackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePack>
          }
          groupBy: {
            args: Prisma.PackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackCountArgs<ExtArgs>
            result: $Utils.Optional<PackCountAggregateOutputType> | number
          }
        }
      }
      PackPrompt: {
        payload: Prisma.$PackPromptPayload<ExtArgs>
        fields: Prisma.PackPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          findFirst: {
            args: Prisma.PackPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          findMany: {
            args: Prisma.PackPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>[]
          }
          create: {
            args: Prisma.PackPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          createMany: {
            args: Prisma.PackPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackPromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>[]
          }
          delete: {
            args: Prisma.PackPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          update: {
            args: Prisma.PackPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          deleteMany: {
            args: Prisma.PackPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackPromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>[]
          }
          upsert: {
            args: Prisma.PackPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          aggregate: {
            args: Prisma.PackPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackPrompt>
          }
          groupBy: {
            args: Prisma.PackPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackPromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackPromptCountArgs<ExtArgs>
            result: $Utils.Optional<PackPromptCountAggregateOutputType> | number
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
    model?: ModelOmit
    trainingImage?: TrainingImageOmit
    outputImage?: OutputImageOmit
    pack?: PackOmit
    packPrompt?: PackPromptOmit
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
    OutputImage: number
    Model: number
    TrainingImage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OutputImage?: boolean | UserCountOutputTypeCountOutputImageArgs
    Model?: boolean | UserCountOutputTypeCountModelArgs
    TrainingImage?: boolean | UserCountOutputTypeCountTrainingImageArgs
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
  export type UserCountOutputTypeCountOutputImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputImageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrainingImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingImageWhereInput
  }


  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    TrainingImages: number
    OutputImages: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrainingImages?: boolean | ModelCountOutputTypeCountTrainingImagesArgs
    OutputImages?: boolean | ModelCountOutputTypeCountOutputImagesArgs
  }

  // Custom InputTypes
  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountTrainingImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingImageWhereInput
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountOutputImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputImageWhereInput
  }


  /**
   * Count Type PackCountOutputType
   */

  export type PackCountOutputType = {
    PackPrompt: number
  }

  export type PackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PackPrompt?: boolean | PackCountOutputTypeCountPackPromptArgs
  }

  // Custom InputTypes
  /**
   * PackCountOutputType without action
   */
  export type PackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackCountOutputType
     */
    select?: PackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackCountOutputType without action
   */
  export type PackCountOutputTypeCountPackPromptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackPromptWhereInput
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
    username: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    profilePicture: string | null
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    OutputImage?: boolean | User$OutputImageArgs<ExtArgs>
    Model?: boolean | User$ModelArgs<ExtArgs>
    TrainingImage?: boolean | User$TrainingImageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "profilePicture" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OutputImage?: boolean | User$OutputImageArgs<ExtArgs>
    Model?: boolean | User$ModelArgs<ExtArgs>
    TrainingImage?: boolean | User$TrainingImageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      OutputImage: Prisma.$OutputImagePayload<ExtArgs>[]
      Model: Prisma.$ModelPayload<ExtArgs>[]
      TrainingImage: Prisma.$TrainingImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      profilePicture: string | null
      createdAt: Date
      updatedAt: Date
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
    OutputImage<T extends User$OutputImageArgs<ExtArgs> = {}>(args?: Subset<T, User$OutputImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Model<T extends User$ModelArgs<ExtArgs> = {}>(args?: Subset<T, User$ModelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TrainingImage<T extends User$TrainingImageArgs<ExtArgs> = {}>(args?: Subset<T, User$TrainingImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.OutputImage
   */
  export type User$OutputImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    where?: OutputImageWhereInput
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    cursor?: OutputImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * User.Model
   */
  export type User$ModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    cursor?: ModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * User.TrainingImage
   */
  export type User$TrainingImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    where?: TrainingImageWhereInput
    orderBy?: TrainingImageOrderByWithRelationInput | TrainingImageOrderByWithRelationInput[]
    cursor?: TrainingImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingImageScalarFieldEnum | TrainingImageScalarFieldEnum[]
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
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    age: number | null
  }

  export type ModelSumAggregateOutputType = {
    age: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ModelTypeEnum | null
    age: number | null
    ethinicity: $Enums.EthinicityEnum | null
    eyeColor: $Enums.EyeColorEnum | null
    bald: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ModelTypeEnum | null
    age: number | null
    ethinicity: $Enums.EthinicityEnum | null
    eyeColor: $Enums.EyeColorEnum | null
    bald: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    name: number
    type: number
    age: number
    ethinicity: number
    eyeColor: number
    bald: number
    images: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    age?: true
  }

  export type ModelSumAggregateInputType = {
    age?: true
  }

  export type ModelMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethinicity?: true
    eyeColor?: true
    bald?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethinicity?: true
    eyeColor?: true
    bald?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethinicity?: true
    eyeColor?: true
    bald?: true
    images?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images: string[]
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethinicity?: boolean
    eyeColor?: boolean
    bald?: boolean
    images?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TrainingImages?: boolean | Model$TrainingImagesArgs<ExtArgs>
    OutputImages?: boolean | Model$OutputImagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethinicity?: boolean
    eyeColor?: boolean
    bald?: boolean
    images?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethinicity?: boolean
    eyeColor?: boolean
    bald?: boolean
    images?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethinicity?: boolean
    eyeColor?: boolean
    bald?: boolean
    images?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "age" | "ethinicity" | "eyeColor" | "bald" | "images" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["model"]>
  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrainingImages?: boolean | Model$TrainingImagesArgs<ExtArgs>
    OutputImages?: boolean | Model$OutputImagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      TrainingImages: Prisma.$TrainingImagePayload<ExtArgs>[]
      OutputImages: Prisma.$OutputImagePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ModelTypeEnum
      age: number
      ethinicity: $Enums.EthinicityEnum
      eyeColor: $Enums.EyeColorEnum
      bald: boolean
      images: string[]
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["model"]>
    composites: {}
  }

  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelFindUniqueArgs>(args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelFindFirstArgs>(args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelFindManyArgs>(args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
     */
    create<T extends ModelCreateArgs>(args: SelectSubset<T, ModelCreateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelCreateManyArgs>(args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
     */
    delete<T extends ModelDeleteArgs>(args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelUpdateArgs>(args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelDeleteManyArgs>(args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelUpdateManyArgs>(args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
     */
    upsert<T extends ModelUpsertArgs>(args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
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
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TrainingImages<T extends Model$TrainingImagesArgs<ExtArgs> = {}>(args?: Subset<T, Model$TrainingImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OutputImages<T extends Model$OutputImagesArgs<ExtArgs> = {}>(args?: Subset<T, Model$OutputImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Model model
   */
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'String'>
    readonly name: FieldRef<"Model", 'String'>
    readonly type: FieldRef<"Model", 'ModelTypeEnum'>
    readonly age: FieldRef<"Model", 'Int'>
    readonly ethinicity: FieldRef<"Model", 'EthinicityEnum'>
    readonly eyeColor: FieldRef<"Model", 'EyeColorEnum'>
    readonly bald: FieldRef<"Model", 'Boolean'>
    readonly images: FieldRef<"Model", 'String[]'>
    readonly userId: FieldRef<"Model", 'String'>
    readonly createdAt: FieldRef<"Model", 'DateTime'>
    readonly updatedAt: FieldRef<"Model", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }

  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Model createManyAndReturn
   */
  export type ModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Model updateManyAndReturn
   */
  export type ModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }

  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Model.TrainingImages
   */
  export type Model$TrainingImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    where?: TrainingImageWhereInput
    orderBy?: TrainingImageOrderByWithRelationInput | TrainingImageOrderByWithRelationInput[]
    cursor?: TrainingImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingImageScalarFieldEnum | TrainingImageScalarFieldEnum[]
  }

  /**
   * Model.OutputImages
   */
  export type Model$OutputImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    where?: OutputImageWhereInput
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    cursor?: OutputImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
  }


  /**
   * Model TrainingImage
   */

  export type AggregateTrainingImage = {
    _count: TrainingImageCountAggregateOutputType | null
    _min: TrainingImageMinAggregateOutputType | null
    _max: TrainingImageMaxAggregateOutputType | null
  }

  export type TrainingImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    modelId: string | null
    userId: string | null
  }

  export type TrainingImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    modelId: string | null
    userId: string | null
  }

  export type TrainingImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    modelId: number
    userId: number
    _all: number
  }


  export type TrainingImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    modelId?: true
    userId?: true
  }

  export type TrainingImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    modelId?: true
    userId?: true
  }

  export type TrainingImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    modelId?: true
    userId?: true
    _all?: true
  }

  export type TrainingImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingImage to aggregate.
     */
    where?: TrainingImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingImages to fetch.
     */
    orderBy?: TrainingImageOrderByWithRelationInput | TrainingImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingImages
    **/
    _count?: true | TrainingImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingImageMaxAggregateInputType
  }

  export type GetTrainingImageAggregateType<T extends TrainingImageAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingImage[P]>
      : GetScalarType<T[P], AggregateTrainingImage[P]>
  }




  export type TrainingImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingImageWhereInput
    orderBy?: TrainingImageOrderByWithAggregationInput | TrainingImageOrderByWithAggregationInput[]
    by: TrainingImageScalarFieldEnum[] | TrainingImageScalarFieldEnum
    having?: TrainingImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingImageCountAggregateInputType | true
    _min?: TrainingImageMinAggregateInputType
    _max?: TrainingImageMaxAggregateInputType
  }

  export type TrainingImageGroupByOutputType = {
    id: string
    imageUrl: string
    modelId: string
    userId: string
    _count: TrainingImageCountAggregateOutputType | null
    _min: TrainingImageMinAggregateOutputType | null
    _max: TrainingImageMaxAggregateOutputType | null
  }

  type GetTrainingImageGroupByPayload<T extends TrainingImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingImageGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingImageGroupByOutputType[P]>
        }
      >
    >


  export type TrainingImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    modelId?: boolean
    userId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingImage"]>

  export type TrainingImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    modelId?: boolean
    userId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingImage"]>

  export type TrainingImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    modelId?: boolean
    userId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingImage"]>

  export type TrainingImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    modelId?: boolean
    userId?: boolean
  }

  export type TrainingImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "modelId" | "userId", ExtArgs["result"]["trainingImage"]>
  export type TrainingImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrainingImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrainingImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TrainingImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingImage"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      modelId: string
      userId: string
    }, ExtArgs["result"]["trainingImage"]>
    composites: {}
  }

  type TrainingImageGetPayload<S extends boolean | null | undefined | TrainingImageDefaultArgs> = $Result.GetResult<Prisma.$TrainingImagePayload, S>

  type TrainingImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingImageCountAggregateInputType | true
    }

  export interface TrainingImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingImage'], meta: { name: 'TrainingImage' } }
    /**
     * Find zero or one TrainingImage that matches the filter.
     * @param {TrainingImageFindUniqueArgs} args - Arguments to find a TrainingImage
     * @example
     * // Get one TrainingImage
     * const trainingImage = await prisma.trainingImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingImageFindUniqueArgs>(args: SelectSubset<T, TrainingImageFindUniqueArgs<ExtArgs>>): Prisma__TrainingImageClient<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainingImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingImageFindUniqueOrThrowArgs} args - Arguments to find a TrainingImage
     * @example
     * // Get one TrainingImage
     * const trainingImage = await prisma.trainingImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingImageFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingImageClient<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImageFindFirstArgs} args - Arguments to find a TrainingImage
     * @example
     * // Get one TrainingImage
     * const trainingImage = await prisma.trainingImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingImageFindFirstArgs>(args?: SelectSubset<T, TrainingImageFindFirstArgs<ExtArgs>>): Prisma__TrainingImageClient<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImageFindFirstOrThrowArgs} args - Arguments to find a TrainingImage
     * @example
     * // Get one TrainingImage
     * const trainingImage = await prisma.trainingImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingImageFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingImageClient<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainingImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingImages
     * const trainingImages = await prisma.trainingImage.findMany()
     * 
     * // Get first 10 TrainingImages
     * const trainingImages = await prisma.trainingImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingImageWithIdOnly = await prisma.trainingImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingImageFindManyArgs>(args?: SelectSubset<T, TrainingImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainingImage.
     * @param {TrainingImageCreateArgs} args - Arguments to create a TrainingImage.
     * @example
     * // Create one TrainingImage
     * const TrainingImage = await prisma.trainingImage.create({
     *   data: {
     *     // ... data to create a TrainingImage
     *   }
     * })
     * 
     */
    create<T extends TrainingImageCreateArgs>(args: SelectSubset<T, TrainingImageCreateArgs<ExtArgs>>): Prisma__TrainingImageClient<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainingImages.
     * @param {TrainingImageCreateManyArgs} args - Arguments to create many TrainingImages.
     * @example
     * // Create many TrainingImages
     * const trainingImage = await prisma.trainingImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingImageCreateManyArgs>(args?: SelectSubset<T, TrainingImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingImages and returns the data saved in the database.
     * @param {TrainingImageCreateManyAndReturnArgs} args - Arguments to create many TrainingImages.
     * @example
     * // Create many TrainingImages
     * const trainingImage = await prisma.trainingImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingImages and only return the `id`
     * const trainingImageWithIdOnly = await prisma.trainingImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingImageCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainingImage.
     * @param {TrainingImageDeleteArgs} args - Arguments to delete one TrainingImage.
     * @example
     * // Delete one TrainingImage
     * const TrainingImage = await prisma.trainingImage.delete({
     *   where: {
     *     // ... filter to delete one TrainingImage
     *   }
     * })
     * 
     */
    delete<T extends TrainingImageDeleteArgs>(args: SelectSubset<T, TrainingImageDeleteArgs<ExtArgs>>): Prisma__TrainingImageClient<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainingImage.
     * @param {TrainingImageUpdateArgs} args - Arguments to update one TrainingImage.
     * @example
     * // Update one TrainingImage
     * const trainingImage = await prisma.trainingImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingImageUpdateArgs>(args: SelectSubset<T, TrainingImageUpdateArgs<ExtArgs>>): Prisma__TrainingImageClient<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainingImages.
     * @param {TrainingImageDeleteManyArgs} args - Arguments to filter TrainingImages to delete.
     * @example
     * // Delete a few TrainingImages
     * const { count } = await prisma.trainingImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingImageDeleteManyArgs>(args?: SelectSubset<T, TrainingImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingImages
     * const trainingImage = await prisma.trainingImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingImageUpdateManyArgs>(args: SelectSubset<T, TrainingImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingImages and returns the data updated in the database.
     * @param {TrainingImageUpdateManyAndReturnArgs} args - Arguments to update many TrainingImages.
     * @example
     * // Update many TrainingImages
     * const trainingImage = await prisma.trainingImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingImages and only return the `id`
     * const trainingImageWithIdOnly = await prisma.trainingImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrainingImageUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainingImage.
     * @param {TrainingImageUpsertArgs} args - Arguments to update or create a TrainingImage.
     * @example
     * // Update or create a TrainingImage
     * const trainingImage = await prisma.trainingImage.upsert({
     *   create: {
     *     // ... data to create a TrainingImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingImage we want to update
     *   }
     * })
     */
    upsert<T extends TrainingImageUpsertArgs>(args: SelectSubset<T, TrainingImageUpsertArgs<ExtArgs>>): Prisma__TrainingImageClient<$Result.GetResult<Prisma.$TrainingImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainingImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImageCountArgs} args - Arguments to filter TrainingImages to count.
     * @example
     * // Count the number of TrainingImages
     * const count = await prisma.trainingImage.count({
     *   where: {
     *     // ... the filter for the TrainingImages we want to count
     *   }
     * })
    **/
    count<T extends TrainingImageCountArgs>(
      args?: Subset<T, TrainingImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingImageAggregateArgs>(args: Subset<T, TrainingImageAggregateArgs>): Prisma.PrismaPromise<GetTrainingImageAggregateType<T>>

    /**
     * Group by TrainingImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImageGroupByArgs} args - Group by arguments.
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
      T extends TrainingImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingImageGroupByArgs['orderBy'] }
        : { orderBy?: TrainingImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainingImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingImage model
   */
  readonly fields: TrainingImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrainingImage model
   */
  interface TrainingImageFieldRefs {
    readonly id: FieldRef<"TrainingImage", 'String'>
    readonly imageUrl: FieldRef<"TrainingImage", 'String'>
    readonly modelId: FieldRef<"TrainingImage", 'String'>
    readonly userId: FieldRef<"TrainingImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrainingImage findUnique
   */
  export type TrainingImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImage to fetch.
     */
    where: TrainingImageWhereUniqueInput
  }

  /**
   * TrainingImage findUniqueOrThrow
   */
  export type TrainingImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImage to fetch.
     */
    where: TrainingImageWhereUniqueInput
  }

  /**
   * TrainingImage findFirst
   */
  export type TrainingImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImage to fetch.
     */
    where?: TrainingImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingImages to fetch.
     */
    orderBy?: TrainingImageOrderByWithRelationInput | TrainingImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingImages.
     */
    cursor?: TrainingImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingImages.
     */
    distinct?: TrainingImageScalarFieldEnum | TrainingImageScalarFieldEnum[]
  }

  /**
   * TrainingImage findFirstOrThrow
   */
  export type TrainingImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImage to fetch.
     */
    where?: TrainingImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingImages to fetch.
     */
    orderBy?: TrainingImageOrderByWithRelationInput | TrainingImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingImages.
     */
    cursor?: TrainingImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingImages.
     */
    distinct?: TrainingImageScalarFieldEnum | TrainingImageScalarFieldEnum[]
  }

  /**
   * TrainingImage findMany
   */
  export type TrainingImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImages to fetch.
     */
    where?: TrainingImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingImages to fetch.
     */
    orderBy?: TrainingImageOrderByWithRelationInput | TrainingImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingImages.
     */
    cursor?: TrainingImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingImages.
     */
    skip?: number
    distinct?: TrainingImageScalarFieldEnum | TrainingImageScalarFieldEnum[]
  }

  /**
   * TrainingImage create
   */
  export type TrainingImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingImage.
     */
    data: XOR<TrainingImageCreateInput, TrainingImageUncheckedCreateInput>
  }

  /**
   * TrainingImage createMany
   */
  export type TrainingImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingImages.
     */
    data: TrainingImageCreateManyInput | TrainingImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingImage createManyAndReturn
   */
  export type TrainingImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingImages.
     */
    data: TrainingImageCreateManyInput | TrainingImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingImage update
   */
  export type TrainingImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingImage.
     */
    data: XOR<TrainingImageUpdateInput, TrainingImageUncheckedUpdateInput>
    /**
     * Choose, which TrainingImage to update.
     */
    where: TrainingImageWhereUniqueInput
  }

  /**
   * TrainingImage updateMany
   */
  export type TrainingImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingImages.
     */
    data: XOR<TrainingImageUpdateManyMutationInput, TrainingImageUncheckedUpdateManyInput>
    /**
     * Filter which TrainingImages to update
     */
    where?: TrainingImageWhereInput
    /**
     * Limit how many TrainingImages to update.
     */
    limit?: number
  }

  /**
   * TrainingImage updateManyAndReturn
   */
  export type TrainingImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * The data used to update TrainingImages.
     */
    data: XOR<TrainingImageUpdateManyMutationInput, TrainingImageUncheckedUpdateManyInput>
    /**
     * Filter which TrainingImages to update
     */
    where?: TrainingImageWhereInput
    /**
     * Limit how many TrainingImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingImage upsert
   */
  export type TrainingImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingImage to update in case it exists.
     */
    where: TrainingImageWhereUniqueInput
    /**
     * In case the TrainingImage found by the `where` argument doesn't exist, create a new TrainingImage with this data.
     */
    create: XOR<TrainingImageCreateInput, TrainingImageUncheckedCreateInput>
    /**
     * In case the TrainingImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingImageUpdateInput, TrainingImageUncheckedUpdateInput>
  }

  /**
   * TrainingImage delete
   */
  export type TrainingImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
    /**
     * Filter which TrainingImage to delete.
     */
    where: TrainingImageWhereUniqueInput
  }

  /**
   * TrainingImage deleteMany
   */
  export type TrainingImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingImages to delete
     */
    where?: TrainingImageWhereInput
    /**
     * Limit how many TrainingImages to delete.
     */
    limit?: number
  }

  /**
   * TrainingImage without action
   */
  export type TrainingImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImage
     */
    select?: TrainingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImage
     */
    omit?: TrainingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImageInclude<ExtArgs> | null
  }


  /**
   * Model OutputImage
   */

  export type AggregateOutputImage = {
    _count: OutputImageCountAggregateOutputType | null
    _min: OutputImageMinAggregateOutputType | null
    _max: OutputImageMaxAggregateOutputType | null
  }

  export type OutputImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    status: $Enums.OutputImageStatusEnum | null
    prompt: string | null
    modelId: string | null
    userId: string | null
  }

  export type OutputImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    status: $Enums.OutputImageStatusEnum | null
    prompt: string | null
    modelId: string | null
    userId: string | null
  }

  export type OutputImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    status: number
    prompt: number
    modelId: number
    userId: number
    _all: number
  }


  export type OutputImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    status?: true
    prompt?: true
    modelId?: true
    userId?: true
  }

  export type OutputImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    status?: true
    prompt?: true
    modelId?: true
    userId?: true
  }

  export type OutputImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    status?: true
    prompt?: true
    modelId?: true
    userId?: true
    _all?: true
  }

  export type OutputImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputImage to aggregate.
     */
    where?: OutputImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutputImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutputImages
    **/
    _count?: true | OutputImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutputImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutputImageMaxAggregateInputType
  }

  export type GetOutputImageAggregateType<T extends OutputImageAggregateArgs> = {
        [P in keyof T & keyof AggregateOutputImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutputImage[P]>
      : GetScalarType<T[P], AggregateOutputImage[P]>
  }




  export type OutputImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputImageWhereInput
    orderBy?: OutputImageOrderByWithAggregationInput | OutputImageOrderByWithAggregationInput[]
    by: OutputImageScalarFieldEnum[] | OutputImageScalarFieldEnum
    having?: OutputImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutputImageCountAggregateInputType | true
    _min?: OutputImageMinAggregateInputType
    _max?: OutputImageMaxAggregateInputType
  }

  export type OutputImageGroupByOutputType = {
    id: string
    imageUrl: string
    status: $Enums.OutputImageStatusEnum
    prompt: string
    modelId: string
    userId: string
    _count: OutputImageCountAggregateOutputType | null
    _min: OutputImageMinAggregateOutputType | null
    _max: OutputImageMaxAggregateOutputType | null
  }

  type GetOutputImageGroupByPayload<T extends OutputImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutputImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutputImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutputImageGroupByOutputType[P]>
            : GetScalarType<T[P], OutputImageGroupByOutputType[P]>
        }
      >
    >


  export type OutputImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    status?: boolean
    prompt?: boolean
    modelId?: boolean
    userId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImage"]>

  export type OutputImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    status?: boolean
    prompt?: boolean
    modelId?: boolean
    userId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImage"]>

  export type OutputImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    status?: boolean
    prompt?: boolean
    modelId?: boolean
    userId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImage"]>

  export type OutputImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    status?: boolean
    prompt?: boolean
    modelId?: boolean
    userId?: boolean
  }

  export type OutputImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "status" | "prompt" | "modelId" | "userId", ExtArgs["result"]["outputImage"]>
  export type OutputImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutputImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutputImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OutputImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutputImage"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      status: $Enums.OutputImageStatusEnum
      prompt: string
      modelId: string
      userId: string
    }, ExtArgs["result"]["outputImage"]>
    composites: {}
  }

  type OutputImageGetPayload<S extends boolean | null | undefined | OutputImageDefaultArgs> = $Result.GetResult<Prisma.$OutputImagePayload, S>

  type OutputImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutputImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutputImageCountAggregateInputType | true
    }

  export interface OutputImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutputImage'], meta: { name: 'OutputImage' } }
    /**
     * Find zero or one OutputImage that matches the filter.
     * @param {OutputImageFindUniqueArgs} args - Arguments to find a OutputImage
     * @example
     * // Get one OutputImage
     * const outputImage = await prisma.outputImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutputImageFindUniqueArgs>(args: SelectSubset<T, OutputImageFindUniqueArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutputImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutputImageFindUniqueOrThrowArgs} args - Arguments to find a OutputImage
     * @example
     * // Get one OutputImage
     * const outputImage = await prisma.outputImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutputImageFindUniqueOrThrowArgs>(args: SelectSubset<T, OutputImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutputImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageFindFirstArgs} args - Arguments to find a OutputImage
     * @example
     * // Get one OutputImage
     * const outputImage = await prisma.outputImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutputImageFindFirstArgs>(args?: SelectSubset<T, OutputImageFindFirstArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutputImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageFindFirstOrThrowArgs} args - Arguments to find a OutputImage
     * @example
     * // Get one OutputImage
     * const outputImage = await prisma.outputImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutputImageFindFirstOrThrowArgs>(args?: SelectSubset<T, OutputImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutputImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutputImages
     * const outputImages = await prisma.outputImage.findMany()
     * 
     * // Get first 10 OutputImages
     * const outputImages = await prisma.outputImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outputImageWithIdOnly = await prisma.outputImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutputImageFindManyArgs>(args?: SelectSubset<T, OutputImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutputImage.
     * @param {OutputImageCreateArgs} args - Arguments to create a OutputImage.
     * @example
     * // Create one OutputImage
     * const OutputImage = await prisma.outputImage.create({
     *   data: {
     *     // ... data to create a OutputImage
     *   }
     * })
     * 
     */
    create<T extends OutputImageCreateArgs>(args: SelectSubset<T, OutputImageCreateArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutputImages.
     * @param {OutputImageCreateManyArgs} args - Arguments to create many OutputImages.
     * @example
     * // Create many OutputImages
     * const outputImage = await prisma.outputImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutputImageCreateManyArgs>(args?: SelectSubset<T, OutputImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutputImages and returns the data saved in the database.
     * @param {OutputImageCreateManyAndReturnArgs} args - Arguments to create many OutputImages.
     * @example
     * // Create many OutputImages
     * const outputImage = await prisma.outputImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutputImages and only return the `id`
     * const outputImageWithIdOnly = await prisma.outputImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutputImageCreateManyAndReturnArgs>(args?: SelectSubset<T, OutputImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutputImage.
     * @param {OutputImageDeleteArgs} args - Arguments to delete one OutputImage.
     * @example
     * // Delete one OutputImage
     * const OutputImage = await prisma.outputImage.delete({
     *   where: {
     *     // ... filter to delete one OutputImage
     *   }
     * })
     * 
     */
    delete<T extends OutputImageDeleteArgs>(args: SelectSubset<T, OutputImageDeleteArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutputImage.
     * @param {OutputImageUpdateArgs} args - Arguments to update one OutputImage.
     * @example
     * // Update one OutputImage
     * const outputImage = await prisma.outputImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutputImageUpdateArgs>(args: SelectSubset<T, OutputImageUpdateArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutputImages.
     * @param {OutputImageDeleteManyArgs} args - Arguments to filter OutputImages to delete.
     * @example
     * // Delete a few OutputImages
     * const { count } = await prisma.outputImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutputImageDeleteManyArgs>(args?: SelectSubset<T, OutputImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutputImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutputImages
     * const outputImage = await prisma.outputImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutputImageUpdateManyArgs>(args: SelectSubset<T, OutputImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutputImages and returns the data updated in the database.
     * @param {OutputImageUpdateManyAndReturnArgs} args - Arguments to update many OutputImages.
     * @example
     * // Update many OutputImages
     * const outputImage = await prisma.outputImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutputImages and only return the `id`
     * const outputImageWithIdOnly = await prisma.outputImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutputImageUpdateManyAndReturnArgs>(args: SelectSubset<T, OutputImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutputImage.
     * @param {OutputImageUpsertArgs} args - Arguments to update or create a OutputImage.
     * @example
     * // Update or create a OutputImage
     * const outputImage = await prisma.outputImage.upsert({
     *   create: {
     *     // ... data to create a OutputImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutputImage we want to update
     *   }
     * })
     */
    upsert<T extends OutputImageUpsertArgs>(args: SelectSubset<T, OutputImageUpsertArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutputImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageCountArgs} args - Arguments to filter OutputImages to count.
     * @example
     * // Count the number of OutputImages
     * const count = await prisma.outputImage.count({
     *   where: {
     *     // ... the filter for the OutputImages we want to count
     *   }
     * })
    **/
    count<T extends OutputImageCountArgs>(
      args?: Subset<T, OutputImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutputImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutputImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutputImageAggregateArgs>(args: Subset<T, OutputImageAggregateArgs>): Prisma.PrismaPromise<GetOutputImageAggregateType<T>>

    /**
     * Group by OutputImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageGroupByArgs} args - Group by arguments.
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
      T extends OutputImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutputImageGroupByArgs['orderBy'] }
        : { orderBy?: OutputImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutputImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutputImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutputImage model
   */
  readonly fields: OutputImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutputImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutputImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OutputImage model
   */
  interface OutputImageFieldRefs {
    readonly id: FieldRef<"OutputImage", 'String'>
    readonly imageUrl: FieldRef<"OutputImage", 'String'>
    readonly status: FieldRef<"OutputImage", 'OutputImageStatusEnum'>
    readonly prompt: FieldRef<"OutputImage", 'String'>
    readonly modelId: FieldRef<"OutputImage", 'String'>
    readonly userId: FieldRef<"OutputImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OutputImage findUnique
   */
  export type OutputImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImage to fetch.
     */
    where: OutputImageWhereUniqueInput
  }

  /**
   * OutputImage findUniqueOrThrow
   */
  export type OutputImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImage to fetch.
     */
    where: OutputImageWhereUniqueInput
  }

  /**
   * OutputImage findFirst
   */
  export type OutputImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImage to fetch.
     */
    where?: OutputImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputImages.
     */
    cursor?: OutputImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputImages.
     */
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * OutputImage findFirstOrThrow
   */
  export type OutputImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImage to fetch.
     */
    where?: OutputImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputImages.
     */
    cursor?: OutputImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputImages.
     */
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * OutputImage findMany
   */
  export type OutputImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImages to fetch.
     */
    where?: OutputImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutputImages.
     */
    cursor?: OutputImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * OutputImage create
   */
  export type OutputImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * The data needed to create a OutputImage.
     */
    data: XOR<OutputImageCreateInput, OutputImageUncheckedCreateInput>
  }

  /**
   * OutputImage createMany
   */
  export type OutputImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutputImages.
     */
    data: OutputImageCreateManyInput | OutputImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutputImage createManyAndReturn
   */
  export type OutputImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * The data used to create many OutputImages.
     */
    data: OutputImageCreateManyInput | OutputImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutputImage update
   */
  export type OutputImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * The data needed to update a OutputImage.
     */
    data: XOR<OutputImageUpdateInput, OutputImageUncheckedUpdateInput>
    /**
     * Choose, which OutputImage to update.
     */
    where: OutputImageWhereUniqueInput
  }

  /**
   * OutputImage updateMany
   */
  export type OutputImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutputImages.
     */
    data: XOR<OutputImageUpdateManyMutationInput, OutputImageUncheckedUpdateManyInput>
    /**
     * Filter which OutputImages to update
     */
    where?: OutputImageWhereInput
    /**
     * Limit how many OutputImages to update.
     */
    limit?: number
  }

  /**
   * OutputImage updateManyAndReturn
   */
  export type OutputImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * The data used to update OutputImages.
     */
    data: XOR<OutputImageUpdateManyMutationInput, OutputImageUncheckedUpdateManyInput>
    /**
     * Filter which OutputImages to update
     */
    where?: OutputImageWhereInput
    /**
     * Limit how many OutputImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutputImage upsert
   */
  export type OutputImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * The filter to search for the OutputImage to update in case it exists.
     */
    where: OutputImageWhereUniqueInput
    /**
     * In case the OutputImage found by the `where` argument doesn't exist, create a new OutputImage with this data.
     */
    create: XOR<OutputImageCreateInput, OutputImageUncheckedCreateInput>
    /**
     * In case the OutputImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutputImageUpdateInput, OutputImageUncheckedUpdateInput>
  }

  /**
   * OutputImage delete
   */
  export type OutputImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter which OutputImage to delete.
     */
    where: OutputImageWhereUniqueInput
  }

  /**
   * OutputImage deleteMany
   */
  export type OutputImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputImages to delete
     */
    where?: OutputImageWhereInput
    /**
     * Limit how many OutputImages to delete.
     */
    limit?: number
  }

  /**
   * OutputImage without action
   */
  export type OutputImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
  }


  /**
   * Model Pack
   */

  export type AggregatePack = {
    _count: PackCountAggregateOutputType | null
    _min: PackMinAggregateOutputType | null
    _max: PackMaxAggregateOutputType | null
  }

  export type PackMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pack to aggregate.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packs
    **/
    _count?: true | PackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackMaxAggregateInputType
  }

  export type GetPackAggregateType<T extends PackAggregateArgs> = {
        [P in keyof T & keyof AggregatePack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePack[P]>
      : GetScalarType<T[P], AggregatePack[P]>
  }




  export type PackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackWhereInput
    orderBy?: PackOrderByWithAggregationInput | PackOrderByWithAggregationInput[]
    by: PackScalarFieldEnum[] | PackScalarFieldEnum
    having?: PackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackCountAggregateInputType | true
    _min?: PackMinAggregateInputType
    _max?: PackMaxAggregateInputType
  }

  export type PackGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PackCountAggregateOutputType | null
    _min: PackMinAggregateOutputType | null
    _max: PackMaxAggregateOutputType | null
  }

  type GetPackGroupByPayload<T extends PackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackGroupByOutputType[P]>
            : GetScalarType<T[P], PackGroupByOutputType[P]>
        }
      >
    >


  export type PackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PackPrompt?: boolean | Pack$PackPromptArgs<ExtArgs>
    _count?: boolean | PackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pack"]>

  export type PackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pack"]>

  export type PackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pack"]>

  export type PackSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["pack"]>
  export type PackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PackPrompt?: boolean | Pack$PackPromptArgs<ExtArgs>
    _count?: boolean | PackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pack"
    objects: {
      PackPrompt: Prisma.$PackPromptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pack"]>
    composites: {}
  }

  type PackGetPayload<S extends boolean | null | undefined | PackDefaultArgs> = $Result.GetResult<Prisma.$PackPayload, S>

  type PackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackCountAggregateInputType | true
    }

  export interface PackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pack'], meta: { name: 'Pack' } }
    /**
     * Find zero or one Pack that matches the filter.
     * @param {PackFindUniqueArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackFindUniqueArgs>(args: SelectSubset<T, PackFindUniqueArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackFindUniqueOrThrowArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackFindUniqueOrThrowArgs>(args: SelectSubset<T, PackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindFirstArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackFindFirstArgs>(args?: SelectSubset<T, PackFindFirstArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindFirstOrThrowArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackFindFirstOrThrowArgs>(args?: SelectSubset<T, PackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packs
     * const packs = await prisma.pack.findMany()
     * 
     * // Get first 10 Packs
     * const packs = await prisma.pack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packWithIdOnly = await prisma.pack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackFindManyArgs>(args?: SelectSubset<T, PackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pack.
     * @param {PackCreateArgs} args - Arguments to create a Pack.
     * @example
     * // Create one Pack
     * const Pack = await prisma.pack.create({
     *   data: {
     *     // ... data to create a Pack
     *   }
     * })
     * 
     */
    create<T extends PackCreateArgs>(args: SelectSubset<T, PackCreateArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packs.
     * @param {PackCreateManyArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const pack = await prisma.pack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackCreateManyArgs>(args?: SelectSubset<T, PackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packs and returns the data saved in the database.
     * @param {PackCreateManyAndReturnArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const pack = await prisma.pack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packs and only return the `id`
     * const packWithIdOnly = await prisma.pack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackCreateManyAndReturnArgs>(args?: SelectSubset<T, PackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pack.
     * @param {PackDeleteArgs} args - Arguments to delete one Pack.
     * @example
     * // Delete one Pack
     * const Pack = await prisma.pack.delete({
     *   where: {
     *     // ... filter to delete one Pack
     *   }
     * })
     * 
     */
    delete<T extends PackDeleteArgs>(args: SelectSubset<T, PackDeleteArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pack.
     * @param {PackUpdateArgs} args - Arguments to update one Pack.
     * @example
     * // Update one Pack
     * const pack = await prisma.pack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackUpdateArgs>(args: SelectSubset<T, PackUpdateArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packs.
     * @param {PackDeleteManyArgs} args - Arguments to filter Packs to delete.
     * @example
     * // Delete a few Packs
     * const { count } = await prisma.pack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackDeleteManyArgs>(args?: SelectSubset<T, PackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packs
     * const pack = await prisma.pack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackUpdateManyArgs>(args: SelectSubset<T, PackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs and returns the data updated in the database.
     * @param {PackUpdateManyAndReturnArgs} args - Arguments to update many Packs.
     * @example
     * // Update many Packs
     * const pack = await prisma.pack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packs and only return the `id`
     * const packWithIdOnly = await prisma.pack.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackUpdateManyAndReturnArgs>(args: SelectSubset<T, PackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pack.
     * @param {PackUpsertArgs} args - Arguments to update or create a Pack.
     * @example
     * // Update or create a Pack
     * const pack = await prisma.pack.upsert({
     *   create: {
     *     // ... data to create a Pack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pack we want to update
     *   }
     * })
     */
    upsert<T extends PackUpsertArgs>(args: SelectSubset<T, PackUpsertArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackCountArgs} args - Arguments to filter Packs to count.
     * @example
     * // Count the number of Packs
     * const count = await prisma.pack.count({
     *   where: {
     *     // ... the filter for the Packs we want to count
     *   }
     * })
    **/
    count<T extends PackCountArgs>(
      args?: Subset<T, PackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackAggregateArgs>(args: Subset<T, PackAggregateArgs>): Prisma.PrismaPromise<GetPackAggregateType<T>>

    /**
     * Group by Pack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackGroupByArgs} args - Group by arguments.
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
      T extends PackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackGroupByArgs['orderBy'] }
        : { orderBy?: PackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pack model
   */
  readonly fields: PackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PackPrompt<T extends Pack$PackPromptArgs<ExtArgs> = {}>(args?: Subset<T, Pack$PackPromptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pack model
   */
  interface PackFieldRefs {
    readonly id: FieldRef<"Pack", 'String'>
    readonly name: FieldRef<"Pack", 'String'>
    readonly createdAt: FieldRef<"Pack", 'DateTime'>
    readonly updatedAt: FieldRef<"Pack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pack findUnique
   */
  export type PackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack findUniqueOrThrow
   */
  export type PackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack findFirst
   */
  export type PackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack findFirstOrThrow
   */
  export type PackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack findMany
   */
  export type PackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack create
   */
  export type PackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * The data needed to create a Pack.
     */
    data: XOR<PackCreateInput, PackUncheckedCreateInput>
  }

  /**
   * Pack createMany
   */
  export type PackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packs.
     */
    data: PackCreateManyInput | PackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pack createManyAndReturn
   */
  export type PackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The data used to create many Packs.
     */
    data: PackCreateManyInput | PackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pack update
   */
  export type PackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * The data needed to update a Pack.
     */
    data: XOR<PackUpdateInput, PackUncheckedUpdateInput>
    /**
     * Choose, which Pack to update.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack updateMany
   */
  export type PackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packs.
     */
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Pack updateManyAndReturn
   */
  export type PackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The data used to update Packs.
     */
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Pack upsert
   */
  export type PackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * The filter to search for the Pack to update in case it exists.
     */
    where: PackWhereUniqueInput
    /**
     * In case the Pack found by the `where` argument doesn't exist, create a new Pack with this data.
     */
    create: XOR<PackCreateInput, PackUncheckedCreateInput>
    /**
     * In case the Pack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackUpdateInput, PackUncheckedUpdateInput>
  }

  /**
   * Pack delete
   */
  export type PackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter which Pack to delete.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack deleteMany
   */
  export type PackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packs to delete
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to delete.
     */
    limit?: number
  }

  /**
   * Pack.PackPrompt
   */
  export type Pack$PackPromptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    where?: PackPromptWhereInput
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    cursor?: PackPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackPromptScalarFieldEnum | PackPromptScalarFieldEnum[]
  }

  /**
   * Pack without action
   */
  export type PackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
  }


  /**
   * Model PackPrompt
   */

  export type AggregatePackPrompt = {
    _count: PackPromptCountAggregateOutputType | null
    _min: PackPromptMinAggregateOutputType | null
    _max: PackPromptMaxAggregateOutputType | null
  }

  export type PackPromptMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    packId: string | null
  }

  export type PackPromptMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    packId: string | null
  }

  export type PackPromptCountAggregateOutputType = {
    id: number
    prompt: number
    packId: number
    _all: number
  }


  export type PackPromptMinAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
  }

  export type PackPromptMaxAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
  }

  export type PackPromptCountAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
    _all?: true
  }

  export type PackPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackPrompt to aggregate.
     */
    where?: PackPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackPrompts
    **/
    _count?: true | PackPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackPromptMaxAggregateInputType
  }

  export type GetPackPromptAggregateType<T extends PackPromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePackPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackPrompt[P]>
      : GetScalarType<T[P], AggregatePackPrompt[P]>
  }




  export type PackPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackPromptWhereInput
    orderBy?: PackPromptOrderByWithAggregationInput | PackPromptOrderByWithAggregationInput[]
    by: PackPromptScalarFieldEnum[] | PackPromptScalarFieldEnum
    having?: PackPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackPromptCountAggregateInputType | true
    _min?: PackPromptMinAggregateInputType
    _max?: PackPromptMaxAggregateInputType
  }

  export type PackPromptGroupByOutputType = {
    id: string
    prompt: string
    packId: string
    _count: PackPromptCountAggregateOutputType | null
    _min: PackPromptMinAggregateOutputType | null
    _max: PackPromptMaxAggregateOutputType | null
  }

  type GetPackPromptGroupByPayload<T extends PackPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackPromptGroupByOutputType[P]>
            : GetScalarType<T[P], PackPromptGroupByOutputType[P]>
        }
      >
    >


  export type PackPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompt"]>

  export type PackPromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompt"]>

  export type PackPromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompt"]>

  export type PackPromptSelectScalar = {
    id?: boolean
    prompt?: boolean
    packId?: boolean
  }

  export type PackPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "packId", ExtArgs["result"]["packPrompt"]>
  export type PackPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PackDefaultArgs<ExtArgs>
  }
  export type PackPromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PackDefaultArgs<ExtArgs>
  }
  export type PackPromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PackDefaultArgs<ExtArgs>
  }

  export type $PackPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackPrompt"
    objects: {
      pack: Prisma.$PackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      packId: string
    }, ExtArgs["result"]["packPrompt"]>
    composites: {}
  }

  type PackPromptGetPayload<S extends boolean | null | undefined | PackPromptDefaultArgs> = $Result.GetResult<Prisma.$PackPromptPayload, S>

  type PackPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackPromptCountAggregateInputType | true
    }

  export interface PackPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackPrompt'], meta: { name: 'PackPrompt' } }
    /**
     * Find zero or one PackPrompt that matches the filter.
     * @param {PackPromptFindUniqueArgs} args - Arguments to find a PackPrompt
     * @example
     * // Get one PackPrompt
     * const packPrompt = await prisma.packPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackPromptFindUniqueArgs>(args: SelectSubset<T, PackPromptFindUniqueArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackPromptFindUniqueOrThrowArgs} args - Arguments to find a PackPrompt
     * @example
     * // Get one PackPrompt
     * const packPrompt = await prisma.packPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PackPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptFindFirstArgs} args - Arguments to find a PackPrompt
     * @example
     * // Get one PackPrompt
     * const packPrompt = await prisma.packPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackPromptFindFirstArgs>(args?: SelectSubset<T, PackPromptFindFirstArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptFindFirstOrThrowArgs} args - Arguments to find a PackPrompt
     * @example
     * // Get one PackPrompt
     * const packPrompt = await prisma.packPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PackPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackPrompts
     * const packPrompts = await prisma.packPrompt.findMany()
     * 
     * // Get first 10 PackPrompts
     * const packPrompts = await prisma.packPrompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packPromptWithIdOnly = await prisma.packPrompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackPromptFindManyArgs>(args?: SelectSubset<T, PackPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackPrompt.
     * @param {PackPromptCreateArgs} args - Arguments to create a PackPrompt.
     * @example
     * // Create one PackPrompt
     * const PackPrompt = await prisma.packPrompt.create({
     *   data: {
     *     // ... data to create a PackPrompt
     *   }
     * })
     * 
     */
    create<T extends PackPromptCreateArgs>(args: SelectSubset<T, PackPromptCreateArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackPrompts.
     * @param {PackPromptCreateManyArgs} args - Arguments to create many PackPrompts.
     * @example
     * // Create many PackPrompts
     * const packPrompt = await prisma.packPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackPromptCreateManyArgs>(args?: SelectSubset<T, PackPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PackPrompts and returns the data saved in the database.
     * @param {PackPromptCreateManyAndReturnArgs} args - Arguments to create many PackPrompts.
     * @example
     * // Create many PackPrompts
     * const packPrompt = await prisma.packPrompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PackPrompts and only return the `id`
     * const packPromptWithIdOnly = await prisma.packPrompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackPromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PackPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PackPrompt.
     * @param {PackPromptDeleteArgs} args - Arguments to delete one PackPrompt.
     * @example
     * // Delete one PackPrompt
     * const PackPrompt = await prisma.packPrompt.delete({
     *   where: {
     *     // ... filter to delete one PackPrompt
     *   }
     * })
     * 
     */
    delete<T extends PackPromptDeleteArgs>(args: SelectSubset<T, PackPromptDeleteArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackPrompt.
     * @param {PackPromptUpdateArgs} args - Arguments to update one PackPrompt.
     * @example
     * // Update one PackPrompt
     * const packPrompt = await prisma.packPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackPromptUpdateArgs>(args: SelectSubset<T, PackPromptUpdateArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackPrompts.
     * @param {PackPromptDeleteManyArgs} args - Arguments to filter PackPrompts to delete.
     * @example
     * // Delete a few PackPrompts
     * const { count } = await prisma.packPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackPromptDeleteManyArgs>(args?: SelectSubset<T, PackPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackPrompts
     * const packPrompt = await prisma.packPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackPromptUpdateManyArgs>(args: SelectSubset<T, PackPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackPrompts and returns the data updated in the database.
     * @param {PackPromptUpdateManyAndReturnArgs} args - Arguments to update many PackPrompts.
     * @example
     * // Update many PackPrompts
     * const packPrompt = await prisma.packPrompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PackPrompts and only return the `id`
     * const packPromptWithIdOnly = await prisma.packPrompt.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackPromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PackPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PackPrompt.
     * @param {PackPromptUpsertArgs} args - Arguments to update or create a PackPrompt.
     * @example
     * // Update or create a PackPrompt
     * const packPrompt = await prisma.packPrompt.upsert({
     *   create: {
     *     // ... data to create a PackPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackPrompt we want to update
     *   }
     * })
     */
    upsert<T extends PackPromptUpsertArgs>(args: SelectSubset<T, PackPromptUpsertArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptCountArgs} args - Arguments to filter PackPrompts to count.
     * @example
     * // Count the number of PackPrompts
     * const count = await prisma.packPrompt.count({
     *   where: {
     *     // ... the filter for the PackPrompts we want to count
     *   }
     * })
    **/
    count<T extends PackPromptCountArgs>(
      args?: Subset<T, PackPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackPromptAggregateArgs>(args: Subset<T, PackPromptAggregateArgs>): Prisma.PrismaPromise<GetPackPromptAggregateType<T>>

    /**
     * Group by PackPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptGroupByArgs} args - Group by arguments.
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
      T extends PackPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackPromptGroupByArgs['orderBy'] }
        : { orderBy?: PackPromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackPrompt model
   */
  readonly fields: PackPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pack<T extends PackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackDefaultArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PackPrompt model
   */
  interface PackPromptFieldRefs {
    readonly id: FieldRef<"PackPrompt", 'String'>
    readonly prompt: FieldRef<"PackPrompt", 'String'>
    readonly packId: FieldRef<"PackPrompt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PackPrompt findUnique
   */
  export type PackPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompt to fetch.
     */
    where: PackPromptWhereUniqueInput
  }

  /**
   * PackPrompt findUniqueOrThrow
   */
  export type PackPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompt to fetch.
     */
    where: PackPromptWhereUniqueInput
  }

  /**
   * PackPrompt findFirst
   */
  export type PackPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompt to fetch.
     */
    where?: PackPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackPrompts.
     */
    cursor?: PackPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackPrompts.
     */
    distinct?: PackPromptScalarFieldEnum | PackPromptScalarFieldEnum[]
  }

  /**
   * PackPrompt findFirstOrThrow
   */
  export type PackPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompt to fetch.
     */
    where?: PackPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackPrompts.
     */
    cursor?: PackPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackPrompts.
     */
    distinct?: PackPromptScalarFieldEnum | PackPromptScalarFieldEnum[]
  }

  /**
   * PackPrompt findMany
   */
  export type PackPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompts to fetch.
     */
    where?: PackPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackPrompts.
     */
    cursor?: PackPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    distinct?: PackPromptScalarFieldEnum | PackPromptScalarFieldEnum[]
  }

  /**
   * PackPrompt create
   */
  export type PackPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a PackPrompt.
     */
    data: XOR<PackPromptCreateInput, PackPromptUncheckedCreateInput>
  }

  /**
   * PackPrompt createMany
   */
  export type PackPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackPrompts.
     */
    data: PackPromptCreateManyInput | PackPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackPrompt createManyAndReturn
   */
  export type PackPromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * The data used to create many PackPrompts.
     */
    data: PackPromptCreateManyInput | PackPromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackPrompt update
   */
  export type PackPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a PackPrompt.
     */
    data: XOR<PackPromptUpdateInput, PackPromptUncheckedUpdateInput>
    /**
     * Choose, which PackPrompt to update.
     */
    where: PackPromptWhereUniqueInput
  }

  /**
   * PackPrompt updateMany
   */
  export type PackPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackPrompts.
     */
    data: XOR<PackPromptUpdateManyMutationInput, PackPromptUncheckedUpdateManyInput>
    /**
     * Filter which PackPrompts to update
     */
    where?: PackPromptWhereInput
    /**
     * Limit how many PackPrompts to update.
     */
    limit?: number
  }

  /**
   * PackPrompt updateManyAndReturn
   */
  export type PackPromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * The data used to update PackPrompts.
     */
    data: XOR<PackPromptUpdateManyMutationInput, PackPromptUncheckedUpdateManyInput>
    /**
     * Filter which PackPrompts to update
     */
    where?: PackPromptWhereInput
    /**
     * Limit how many PackPrompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackPrompt upsert
   */
  export type PackPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the PackPrompt to update in case it exists.
     */
    where: PackPromptWhereUniqueInput
    /**
     * In case the PackPrompt found by the `where` argument doesn't exist, create a new PackPrompt with this data.
     */
    create: XOR<PackPromptCreateInput, PackPromptUncheckedCreateInput>
    /**
     * In case the PackPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackPromptUpdateInput, PackPromptUncheckedUpdateInput>
  }

  /**
   * PackPrompt delete
   */
  export type PackPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter which PackPrompt to delete.
     */
    where: PackPromptWhereUniqueInput
  }

  /**
   * PackPrompt deleteMany
   */
  export type PackPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackPrompts to delete
     */
    where?: PackPromptWhereInput
    /**
     * Limit how many PackPrompts to delete.
     */
    limit?: number
  }

  /**
   * PackPrompt without action
   */
  export type PackPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
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
    username: 'username',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    age: 'age',
    ethinicity: 'ethinicity',
    eyeColor: 'eyeColor',
    bald: 'bald',
    images: 'images',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const TrainingImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    modelId: 'modelId',
    userId: 'userId'
  };

  export type TrainingImageScalarFieldEnum = (typeof TrainingImageScalarFieldEnum)[keyof typeof TrainingImageScalarFieldEnum]


  export const OutputImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    status: 'status',
    prompt: 'prompt',
    modelId: 'modelId',
    userId: 'userId'
  };

  export type OutputImageScalarFieldEnum = (typeof OutputImageScalarFieldEnum)[keyof typeof OutputImageScalarFieldEnum]


  export const PackScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackScalarFieldEnum = (typeof PackScalarFieldEnum)[keyof typeof PackScalarFieldEnum]


  export const PackPromptScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    packId: 'packId'
  };

  export type PackPromptScalarFieldEnum = (typeof PackPromptScalarFieldEnum)[keyof typeof PackPromptScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ModelTypeEnum'
   */
  export type EnumModelTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelTypeEnum'>
    


  /**
   * Reference to a field of type 'ModelTypeEnum[]'
   */
  export type ListEnumModelTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EthinicityEnum'
   */
  export type EnumEthinicityEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EthinicityEnum'>
    


  /**
   * Reference to a field of type 'EthinicityEnum[]'
   */
  export type ListEnumEthinicityEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EthinicityEnum[]'>
    


  /**
   * Reference to a field of type 'EyeColorEnum'
   */
  export type EnumEyeColorEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EyeColorEnum'>
    


  /**
   * Reference to a field of type 'EyeColorEnum[]'
   */
  export type ListEnumEyeColorEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EyeColorEnum[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OutputImageStatusEnum'
   */
  export type EnumOutputImageStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputImageStatusEnum'>
    


  /**
   * Reference to a field of type 'OutputImageStatusEnum[]'
   */
  export type ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputImageStatusEnum[]'>
    


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
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    OutputImage?: OutputImageListRelationFilter
    Model?: ModelListRelationFilter
    TrainingImage?: TrainingImageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    OutputImage?: OutputImageOrderByRelationAggregateInput
    Model?: ModelOrderByRelationAggregateInput
    TrainingImage?: TrainingImageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    profilePicture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    OutputImage?: OutputImageListRelationFilter
    Model?: ModelListRelationFilter
    TrainingImage?: TrainingImageListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: StringFilter<"Model"> | string
    name?: StringFilter<"Model"> | string
    type?: EnumModelTypeEnumFilter<"Model"> | $Enums.ModelTypeEnum
    age?: IntFilter<"Model"> | number
    ethinicity?: EnumEthinicityEnumFilter<"Model"> | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFilter<"Model"> | $Enums.EyeColorEnum
    bald?: BoolFilter<"Model"> | boolean
    images?: StringNullableListFilter<"Model">
    userId?: StringFilter<"Model"> | string
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    TrainingImages?: TrainingImageListRelationFilter
    OutputImages?: OutputImageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    eyeColor?: SortOrder
    bald?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    TrainingImages?: TrainingImageOrderByRelationAggregateInput
    OutputImages?: OutputImageOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    name?: StringFilter<"Model"> | string
    type?: EnumModelTypeEnumFilter<"Model"> | $Enums.ModelTypeEnum
    age?: IntFilter<"Model"> | number
    ethinicity?: EnumEthinicityEnumFilter<"Model"> | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFilter<"Model"> | $Enums.EyeColorEnum
    bald?: BoolFilter<"Model"> | boolean
    images?: StringNullableListFilter<"Model">
    userId?: StringFilter<"Model"> | string
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    TrainingImages?: TrainingImageListRelationFilter
    OutputImages?: OutputImageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    eyeColor?: SortOrder
    bald?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _avg?: ModelAvgOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
    _sum?: ModelSumOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Model"> | string
    name?: StringWithAggregatesFilter<"Model"> | string
    type?: EnumModelTypeEnumWithAggregatesFilter<"Model"> | $Enums.ModelTypeEnum
    age?: IntWithAggregatesFilter<"Model"> | number
    ethinicity?: EnumEthinicityEnumWithAggregatesFilter<"Model"> | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumWithAggregatesFilter<"Model"> | $Enums.EyeColorEnum
    bald?: BoolWithAggregatesFilter<"Model"> | boolean
    images?: StringNullableListFilter<"Model">
    userId?: StringWithAggregatesFilter<"Model"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
  }

  export type TrainingImageWhereInput = {
    AND?: TrainingImageWhereInput | TrainingImageWhereInput[]
    OR?: TrainingImageWhereInput[]
    NOT?: TrainingImageWhereInput | TrainingImageWhereInput[]
    id?: StringFilter<"TrainingImage"> | string
    imageUrl?: StringFilter<"TrainingImage"> | string
    modelId?: StringFilter<"TrainingImage"> | string
    userId?: StringFilter<"TrainingImage"> | string
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TrainingImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
    model?: ModelOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TrainingImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingImageWhereInput | TrainingImageWhereInput[]
    OR?: TrainingImageWhereInput[]
    NOT?: TrainingImageWhereInput | TrainingImageWhereInput[]
    imageUrl?: StringFilter<"TrainingImage"> | string
    modelId?: StringFilter<"TrainingImage"> | string
    userId?: StringFilter<"TrainingImage"> | string
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TrainingImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
    _count?: TrainingImageCountOrderByAggregateInput
    _max?: TrainingImageMaxOrderByAggregateInput
    _min?: TrainingImageMinOrderByAggregateInput
  }

  export type TrainingImageScalarWhereWithAggregatesInput = {
    AND?: TrainingImageScalarWhereWithAggregatesInput | TrainingImageScalarWhereWithAggregatesInput[]
    OR?: TrainingImageScalarWhereWithAggregatesInput[]
    NOT?: TrainingImageScalarWhereWithAggregatesInput | TrainingImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingImage"> | string
    imageUrl?: StringWithAggregatesFilter<"TrainingImage"> | string
    modelId?: StringWithAggregatesFilter<"TrainingImage"> | string
    userId?: StringWithAggregatesFilter<"TrainingImage"> | string
  }

  export type OutputImageWhereInput = {
    AND?: OutputImageWhereInput | OutputImageWhereInput[]
    OR?: OutputImageWhereInput[]
    NOT?: OutputImageWhereInput | OutputImageWhereInput[]
    id?: StringFilter<"OutputImage"> | string
    imageUrl?: StringFilter<"OutputImage"> | string
    status?: EnumOutputImageStatusEnumFilter<"OutputImage"> | $Enums.OutputImageStatusEnum
    prompt?: StringFilter<"OutputImage"> | string
    modelId?: StringFilter<"OutputImage"> | string
    userId?: StringFilter<"OutputImage"> | string
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OutputImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    prompt?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
    model?: ModelOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OutputImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutputImageWhereInput | OutputImageWhereInput[]
    OR?: OutputImageWhereInput[]
    NOT?: OutputImageWhereInput | OutputImageWhereInput[]
    imageUrl?: StringFilter<"OutputImage"> | string
    status?: EnumOutputImageStatusEnumFilter<"OutputImage"> | $Enums.OutputImageStatusEnum
    prompt?: StringFilter<"OutputImage"> | string
    modelId?: StringFilter<"OutputImage"> | string
    userId?: StringFilter<"OutputImage"> | string
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OutputImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    prompt?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
    _count?: OutputImageCountOrderByAggregateInput
    _max?: OutputImageMaxOrderByAggregateInput
    _min?: OutputImageMinOrderByAggregateInput
  }

  export type OutputImageScalarWhereWithAggregatesInput = {
    AND?: OutputImageScalarWhereWithAggregatesInput | OutputImageScalarWhereWithAggregatesInput[]
    OR?: OutputImageScalarWhereWithAggregatesInput[]
    NOT?: OutputImageScalarWhereWithAggregatesInput | OutputImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutputImage"> | string
    imageUrl?: StringWithAggregatesFilter<"OutputImage"> | string
    status?: EnumOutputImageStatusEnumWithAggregatesFilter<"OutputImage"> | $Enums.OutputImageStatusEnum
    prompt?: StringWithAggregatesFilter<"OutputImage"> | string
    modelId?: StringWithAggregatesFilter<"OutputImage"> | string
    userId?: StringWithAggregatesFilter<"OutputImage"> | string
  }

  export type PackWhereInput = {
    AND?: PackWhereInput | PackWhereInput[]
    OR?: PackWhereInput[]
    NOT?: PackWhereInput | PackWhereInput[]
    id?: StringFilter<"Pack"> | string
    name?: StringFilter<"Pack"> | string
    createdAt?: DateTimeFilter<"Pack"> | Date | string
    updatedAt?: DateTimeFilter<"Pack"> | Date | string
    PackPrompt?: PackPromptListRelationFilter
  }

  export type PackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PackPrompt?: PackPromptOrderByRelationAggregateInput
  }

  export type PackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackWhereInput | PackWhereInput[]
    OR?: PackWhereInput[]
    NOT?: PackWhereInput | PackWhereInput[]
    name?: StringFilter<"Pack"> | string
    createdAt?: DateTimeFilter<"Pack"> | Date | string
    updatedAt?: DateTimeFilter<"Pack"> | Date | string
    PackPrompt?: PackPromptListRelationFilter
  }, "id">

  export type PackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackCountOrderByAggregateInput
    _max?: PackMaxOrderByAggregateInput
    _min?: PackMinOrderByAggregateInput
  }

  export type PackScalarWhereWithAggregatesInput = {
    AND?: PackScalarWhereWithAggregatesInput | PackScalarWhereWithAggregatesInput[]
    OR?: PackScalarWhereWithAggregatesInput[]
    NOT?: PackScalarWhereWithAggregatesInput | PackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pack"> | string
    name?: StringWithAggregatesFilter<"Pack"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pack"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pack"> | Date | string
  }

  export type PackPromptWhereInput = {
    AND?: PackPromptWhereInput | PackPromptWhereInput[]
    OR?: PackPromptWhereInput[]
    NOT?: PackPromptWhereInput | PackPromptWhereInput[]
    id?: StringFilter<"PackPrompt"> | string
    prompt?: StringFilter<"PackPrompt"> | string
    packId?: StringFilter<"PackPrompt"> | string
    pack?: XOR<PackScalarRelationFilter, PackWhereInput>
  }

  export type PackPromptOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
    pack?: PackOrderByWithRelationInput
  }

  export type PackPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackPromptWhereInput | PackPromptWhereInput[]
    OR?: PackPromptWhereInput[]
    NOT?: PackPromptWhereInput | PackPromptWhereInput[]
    prompt?: StringFilter<"PackPrompt"> | string
    packId?: StringFilter<"PackPrompt"> | string
    pack?: XOR<PackScalarRelationFilter, PackWhereInput>
  }, "id">

  export type PackPromptOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
    _count?: PackPromptCountOrderByAggregateInput
    _max?: PackPromptMaxOrderByAggregateInput
    _min?: PackPromptMinOrderByAggregateInput
  }

  export type PackPromptScalarWhereWithAggregatesInput = {
    AND?: PackPromptScalarWhereWithAggregatesInput | PackPromptScalarWhereWithAggregatesInput[]
    OR?: PackPromptScalarWhereWithAggregatesInput[]
    NOT?: PackPromptScalarWhereWithAggregatesInput | PackPromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackPrompt"> | string
    prompt?: StringWithAggregatesFilter<"PackPrompt"> | string
    packId?: StringWithAggregatesFilter<"PackPrompt"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OutputImage?: OutputImageCreateNestedManyWithoutUserInput
    Model?: ModelCreateNestedManyWithoutUserInput
    TrainingImage?: TrainingImageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OutputImage?: OutputImageUncheckedCreateNestedManyWithoutUserInput
    Model?: ModelUncheckedCreateNestedManyWithoutUserInput
    TrainingImage?: TrainingImageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutputImage?: OutputImageUpdateManyWithoutUserNestedInput
    Model?: ModelUpdateManyWithoutUserNestedInput
    TrainingImage?: TrainingImageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutputImage?: OutputImageUncheckedUpdateManyWithoutUserNestedInput
    Model?: ModelUncheckedUpdateManyWithoutUserNestedInput
    TrainingImage?: TrainingImageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelCreateInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingImages?: TrainingImageCreateNestedManyWithoutModelInput
    OutputImages?: OutputImageCreateNestedManyWithoutModelInput
    user: UserCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingImages?: TrainingImageUncheckedCreateNestedManyWithoutModelInput
    OutputImages?: OutputImageUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingImages?: TrainingImageUpdateManyWithoutModelNestedInput
    OutputImages?: OutputImageUpdateManyWithoutModelNestedInput
    user?: UserUpdateOneRequiredWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingImages?: TrainingImageUncheckedUpdateManyWithoutModelNestedInput
    OutputImages?: OutputImageUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingImageCreateInput = {
    id?: string
    imageUrl: string
    model: ModelCreateNestedOneWithoutTrainingImagesInput
    user: UserCreateNestedOneWithoutTrainingImageInput
  }

  export type TrainingImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    modelId: string
    userId: string
  }

  export type TrainingImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    model?: ModelUpdateOneRequiredWithoutTrainingImagesNestedInput
    user?: UserUpdateOneRequiredWithoutTrainingImageNestedInput
  }

  export type TrainingImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImageCreateManyInput = {
    id?: string
    imageUrl: string
    modelId: string
    userId: string
  }

  export type TrainingImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImageCreateInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    model: ModelCreateNestedOneWithoutOutputImagesInput
    user: UserCreateNestedOneWithoutOutputImageInput
  }

  export type OutputImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    modelId: string
    userId: string
  }

  export type OutputImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    model?: ModelUpdateOneRequiredWithoutOutputImagesNestedInput
    user?: UserUpdateOneRequiredWithoutOutputImageNestedInput
  }

  export type OutputImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImageCreateManyInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    modelId: string
    userId: string
  }

  export type OutputImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PackCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PackPrompt?: PackPromptCreateNestedManyWithoutPackInput
  }

  export type PackUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PackPrompt?: PackPromptUncheckedCreateNestedManyWithoutPackInput
  }

  export type PackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PackPrompt?: PackPromptUpdateManyWithoutPackNestedInput
  }

  export type PackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PackPrompt?: PackPromptUncheckedUpdateManyWithoutPackNestedInput
  }

  export type PackCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackPromptCreateInput = {
    id?: string
    prompt: string
    pack: PackCreateNestedOneWithoutPackPromptInput
  }

  export type PackPromptUncheckedCreateInput = {
    id?: string
    prompt: string
    packId: string
  }

  export type PackPromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    pack?: PackUpdateOneRequiredWithoutPackPromptNestedInput
  }

  export type PackPromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    packId?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptCreateManyInput = {
    id?: string
    prompt: string
    packId: string
  }

  export type PackPromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    packId?: StringFieldUpdateOperationsInput | string
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

  export type OutputImageListRelationFilter = {
    every?: OutputImageWhereInput
    some?: OutputImageWhereInput
    none?: OutputImageWhereInput
  }

  export type ModelListRelationFilter = {
    every?: ModelWhereInput
    some?: ModelWhereInput
    none?: ModelWhereInput
  }

  export type TrainingImageListRelationFilter = {
    every?: TrainingImageWhereInput
    some?: TrainingImageWhereInput
    none?: TrainingImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OutputImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumModelTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTypeEnum | EnumModelTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeEnumFilter<$PrismaModel> | $Enums.ModelTypeEnum
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

  export type EnumEthinicityEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.EthinicityEnum | EnumEthinicityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEthinicityEnumFilter<$PrismaModel> | $Enums.EthinicityEnum
  }

  export type EnumEyeColorEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.EyeColorEnum | EnumEyeColorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEyeColorEnumFilter<$PrismaModel> | $Enums.EyeColorEnum
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    eyeColor?: SortOrder
    bald?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    eyeColor?: SortOrder
    bald?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    eyeColor?: SortOrder
    bald?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type EnumModelTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTypeEnum | EnumModelTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ModelTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumModelTypeEnumFilter<$PrismaModel>
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

  export type EnumEthinicityEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EthinicityEnum | EnumEthinicityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEthinicityEnumWithAggregatesFilter<$PrismaModel> | $Enums.EthinicityEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEthinicityEnumFilter<$PrismaModel>
    _max?: NestedEnumEthinicityEnumFilter<$PrismaModel>
  }

  export type EnumEyeColorEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EyeColorEnum | EnumEyeColorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEyeColorEnumWithAggregatesFilter<$PrismaModel> | $Enums.EyeColorEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEyeColorEnumFilter<$PrismaModel>
    _max?: NestedEnumEyeColorEnumFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ModelScalarRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type TrainingImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
  }

  export type TrainingImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
  }

  export type TrainingImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
  }

  export type EnumOutputImageStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImageStatusEnum | EnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImageStatusEnum[] | ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImageStatusEnum[] | ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImageStatusEnumFilter<$PrismaModel> | $Enums.OutputImageStatusEnum
  }

  export type OutputImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    prompt?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
  }

  export type OutputImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    prompt?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
  }

  export type OutputImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    prompt?: SortOrder
    modelId?: SortOrder
    userId?: SortOrder
  }

  export type EnumOutputImageStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImageStatusEnum | EnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImageStatusEnum[] | ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImageStatusEnum[] | ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImageStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.OutputImageStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputImageStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumOutputImageStatusEnumFilter<$PrismaModel>
  }

  export type PackPromptListRelationFilter = {
    every?: PackPromptWhereInput
    some?: PackPromptWhereInput
    none?: PackPromptWhereInput
  }

  export type PackPromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackScalarRelationFilter = {
    is?: PackWhereInput
    isNot?: PackWhereInput
  }

  export type PackPromptCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type PackPromptMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type PackPromptMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type OutputImageCreateNestedManyWithoutUserInput = {
    create?: XOR<OutputImageCreateWithoutUserInput, OutputImageUncheckedCreateWithoutUserInput> | OutputImageCreateWithoutUserInput[] | OutputImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutUserInput | OutputImageCreateOrConnectWithoutUserInput[]
    createMany?: OutputImageCreateManyUserInputEnvelope
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
  }

  export type ModelCreateNestedManyWithoutUserInput = {
    create?: XOR<ModelCreateWithoutUserInput, ModelUncheckedCreateWithoutUserInput> | ModelCreateWithoutUserInput[] | ModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutUserInput | ModelCreateOrConnectWithoutUserInput[]
    createMany?: ModelCreateManyUserInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type TrainingImageCreateNestedManyWithoutUserInput = {
    create?: XOR<TrainingImageCreateWithoutUserInput, TrainingImageUncheckedCreateWithoutUserInput> | TrainingImageCreateWithoutUserInput[] | TrainingImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrainingImageCreateOrConnectWithoutUserInput | TrainingImageCreateOrConnectWithoutUserInput[]
    createMany?: TrainingImageCreateManyUserInputEnvelope
    connect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
  }

  export type OutputImageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OutputImageCreateWithoutUserInput, OutputImageUncheckedCreateWithoutUserInput> | OutputImageCreateWithoutUserInput[] | OutputImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutUserInput | OutputImageCreateOrConnectWithoutUserInput[]
    createMany?: OutputImageCreateManyUserInputEnvelope
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
  }

  export type ModelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ModelCreateWithoutUserInput, ModelUncheckedCreateWithoutUserInput> | ModelCreateWithoutUserInput[] | ModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutUserInput | ModelCreateOrConnectWithoutUserInput[]
    createMany?: ModelCreateManyUserInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type TrainingImageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrainingImageCreateWithoutUserInput, TrainingImageUncheckedCreateWithoutUserInput> | TrainingImageCreateWithoutUserInput[] | TrainingImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrainingImageCreateOrConnectWithoutUserInput | TrainingImageCreateOrConnectWithoutUserInput[]
    createMany?: TrainingImageCreateManyUserInputEnvelope
    connect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OutputImageUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutputImageCreateWithoutUserInput, OutputImageUncheckedCreateWithoutUserInput> | OutputImageCreateWithoutUserInput[] | OutputImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutUserInput | OutputImageCreateOrConnectWithoutUserInput[]
    upsert?: OutputImageUpsertWithWhereUniqueWithoutUserInput | OutputImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutputImageCreateManyUserInputEnvelope
    set?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    disconnect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    delete?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    update?: OutputImageUpdateWithWhereUniqueWithoutUserInput | OutputImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutputImageUpdateManyWithWhereWithoutUserInput | OutputImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
  }

  export type ModelUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModelCreateWithoutUserInput, ModelUncheckedCreateWithoutUserInput> | ModelCreateWithoutUserInput[] | ModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutUserInput | ModelCreateOrConnectWithoutUserInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutUserInput | ModelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModelCreateManyUserInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutUserInput | ModelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutUserInput | ModelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type TrainingImageUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrainingImageCreateWithoutUserInput, TrainingImageUncheckedCreateWithoutUserInput> | TrainingImageCreateWithoutUserInput[] | TrainingImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrainingImageCreateOrConnectWithoutUserInput | TrainingImageCreateOrConnectWithoutUserInput[]
    upsert?: TrainingImageUpsertWithWhereUniqueWithoutUserInput | TrainingImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrainingImageCreateManyUserInputEnvelope
    set?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    disconnect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    delete?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    connect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    update?: TrainingImageUpdateWithWhereUniqueWithoutUserInput | TrainingImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrainingImageUpdateManyWithWhereWithoutUserInput | TrainingImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrainingImageScalarWhereInput | TrainingImageScalarWhereInput[]
  }

  export type OutputImageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutputImageCreateWithoutUserInput, OutputImageUncheckedCreateWithoutUserInput> | OutputImageCreateWithoutUserInput[] | OutputImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutUserInput | OutputImageCreateOrConnectWithoutUserInput[]
    upsert?: OutputImageUpsertWithWhereUniqueWithoutUserInput | OutputImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutputImageCreateManyUserInputEnvelope
    set?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    disconnect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    delete?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    update?: OutputImageUpdateWithWhereUniqueWithoutUserInput | OutputImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutputImageUpdateManyWithWhereWithoutUserInput | OutputImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
  }

  export type ModelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModelCreateWithoutUserInput, ModelUncheckedCreateWithoutUserInput> | ModelCreateWithoutUserInput[] | ModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutUserInput | ModelCreateOrConnectWithoutUserInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutUserInput | ModelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModelCreateManyUserInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutUserInput | ModelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutUserInput | ModelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type TrainingImageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrainingImageCreateWithoutUserInput, TrainingImageUncheckedCreateWithoutUserInput> | TrainingImageCreateWithoutUserInput[] | TrainingImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrainingImageCreateOrConnectWithoutUserInput | TrainingImageCreateOrConnectWithoutUserInput[]
    upsert?: TrainingImageUpsertWithWhereUniqueWithoutUserInput | TrainingImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrainingImageCreateManyUserInputEnvelope
    set?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    disconnect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    delete?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    connect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    update?: TrainingImageUpdateWithWhereUniqueWithoutUserInput | TrainingImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrainingImageUpdateManyWithWhereWithoutUserInput | TrainingImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrainingImageScalarWhereInput | TrainingImageScalarWhereInput[]
  }

  export type ModelCreateimagesInput = {
    set: string[]
  }

  export type TrainingImageCreateNestedManyWithoutModelInput = {
    create?: XOR<TrainingImageCreateWithoutModelInput, TrainingImageUncheckedCreateWithoutModelInput> | TrainingImageCreateWithoutModelInput[] | TrainingImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TrainingImageCreateOrConnectWithoutModelInput | TrainingImageCreateOrConnectWithoutModelInput[]
    createMany?: TrainingImageCreateManyModelInputEnvelope
    connect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
  }

  export type OutputImageCreateNestedManyWithoutModelInput = {
    create?: XOR<OutputImageCreateWithoutModelInput, OutputImageUncheckedCreateWithoutModelInput> | OutputImageCreateWithoutModelInput[] | OutputImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutModelInput | OutputImageCreateOrConnectWithoutModelInput[]
    createMany?: OutputImageCreateManyModelInputEnvelope
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutModelInput = {
    create?: XOR<UserCreateWithoutModelInput, UserUncheckedCreateWithoutModelInput>
    connectOrCreate?: UserCreateOrConnectWithoutModelInput
    connect?: UserWhereUniqueInput
  }

  export type TrainingImageUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<TrainingImageCreateWithoutModelInput, TrainingImageUncheckedCreateWithoutModelInput> | TrainingImageCreateWithoutModelInput[] | TrainingImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TrainingImageCreateOrConnectWithoutModelInput | TrainingImageCreateOrConnectWithoutModelInput[]
    createMany?: TrainingImageCreateManyModelInputEnvelope
    connect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
  }

  export type OutputImageUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<OutputImageCreateWithoutModelInput, OutputImageUncheckedCreateWithoutModelInput> | OutputImageCreateWithoutModelInput[] | OutputImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutModelInput | OutputImageCreateOrConnectWithoutModelInput[]
    createMany?: OutputImageCreateManyModelInputEnvelope
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
  }

  export type EnumModelTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.ModelTypeEnum
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEthinicityEnumFieldUpdateOperationsInput = {
    set?: $Enums.EthinicityEnum
  }

  export type EnumEyeColorEnumFieldUpdateOperationsInput = {
    set?: $Enums.EyeColorEnum
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ModelUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TrainingImageUpdateManyWithoutModelNestedInput = {
    create?: XOR<TrainingImageCreateWithoutModelInput, TrainingImageUncheckedCreateWithoutModelInput> | TrainingImageCreateWithoutModelInput[] | TrainingImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TrainingImageCreateOrConnectWithoutModelInput | TrainingImageCreateOrConnectWithoutModelInput[]
    upsert?: TrainingImageUpsertWithWhereUniqueWithoutModelInput | TrainingImageUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: TrainingImageCreateManyModelInputEnvelope
    set?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    disconnect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    delete?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    connect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    update?: TrainingImageUpdateWithWhereUniqueWithoutModelInput | TrainingImageUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: TrainingImageUpdateManyWithWhereWithoutModelInput | TrainingImageUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: TrainingImageScalarWhereInput | TrainingImageScalarWhereInput[]
  }

  export type OutputImageUpdateManyWithoutModelNestedInput = {
    create?: XOR<OutputImageCreateWithoutModelInput, OutputImageUncheckedCreateWithoutModelInput> | OutputImageCreateWithoutModelInput[] | OutputImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutModelInput | OutputImageCreateOrConnectWithoutModelInput[]
    upsert?: OutputImageUpsertWithWhereUniqueWithoutModelInput | OutputImageUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: OutputImageCreateManyModelInputEnvelope
    set?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    disconnect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    delete?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    update?: OutputImageUpdateWithWhereUniqueWithoutModelInput | OutputImageUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: OutputImageUpdateManyWithWhereWithoutModelInput | OutputImageUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutModelNestedInput = {
    create?: XOR<UserCreateWithoutModelInput, UserUncheckedCreateWithoutModelInput>
    connectOrCreate?: UserCreateOrConnectWithoutModelInput
    upsert?: UserUpsertWithoutModelInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModelInput, UserUpdateWithoutModelInput>, UserUncheckedUpdateWithoutModelInput>
  }

  export type TrainingImageUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<TrainingImageCreateWithoutModelInput, TrainingImageUncheckedCreateWithoutModelInput> | TrainingImageCreateWithoutModelInput[] | TrainingImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TrainingImageCreateOrConnectWithoutModelInput | TrainingImageCreateOrConnectWithoutModelInput[]
    upsert?: TrainingImageUpsertWithWhereUniqueWithoutModelInput | TrainingImageUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: TrainingImageCreateManyModelInputEnvelope
    set?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    disconnect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    delete?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    connect?: TrainingImageWhereUniqueInput | TrainingImageWhereUniqueInput[]
    update?: TrainingImageUpdateWithWhereUniqueWithoutModelInput | TrainingImageUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: TrainingImageUpdateManyWithWhereWithoutModelInput | TrainingImageUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: TrainingImageScalarWhereInput | TrainingImageScalarWhereInput[]
  }

  export type OutputImageUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<OutputImageCreateWithoutModelInput, OutputImageUncheckedCreateWithoutModelInput> | OutputImageCreateWithoutModelInput[] | OutputImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutModelInput | OutputImageCreateOrConnectWithoutModelInput[]
    upsert?: OutputImageUpsertWithWhereUniqueWithoutModelInput | OutputImageUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: OutputImageCreateManyModelInputEnvelope
    set?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    disconnect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    delete?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    update?: OutputImageUpdateWithWhereUniqueWithoutModelInput | OutputImageUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: OutputImageUpdateManyWithWhereWithoutModelInput | OutputImageUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
  }

  export type ModelCreateNestedOneWithoutTrainingImagesInput = {
    create?: XOR<ModelCreateWithoutTrainingImagesInput, ModelUncheckedCreateWithoutTrainingImagesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutTrainingImagesInput
    connect?: ModelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTrainingImageInput = {
    create?: XOR<UserCreateWithoutTrainingImageInput, UserUncheckedCreateWithoutTrainingImageInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrainingImageInput
    connect?: UserWhereUniqueInput
  }

  export type ModelUpdateOneRequiredWithoutTrainingImagesNestedInput = {
    create?: XOR<ModelCreateWithoutTrainingImagesInput, ModelUncheckedCreateWithoutTrainingImagesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutTrainingImagesInput
    upsert?: ModelUpsertWithoutTrainingImagesInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutTrainingImagesInput, ModelUpdateWithoutTrainingImagesInput>, ModelUncheckedUpdateWithoutTrainingImagesInput>
  }

  export type UserUpdateOneRequiredWithoutTrainingImageNestedInput = {
    create?: XOR<UserCreateWithoutTrainingImageInput, UserUncheckedCreateWithoutTrainingImageInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrainingImageInput
    upsert?: UserUpsertWithoutTrainingImageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrainingImageInput, UserUpdateWithoutTrainingImageInput>, UserUncheckedUpdateWithoutTrainingImageInput>
  }

  export type ModelCreateNestedOneWithoutOutputImagesInput = {
    create?: XOR<ModelCreateWithoutOutputImagesInput, ModelUncheckedCreateWithoutOutputImagesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutOutputImagesInput
    connect?: ModelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOutputImageInput = {
    create?: XOR<UserCreateWithoutOutputImageInput, UserUncheckedCreateWithoutOutputImageInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutputImageInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOutputImageStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.OutputImageStatusEnum
  }

  export type ModelUpdateOneRequiredWithoutOutputImagesNestedInput = {
    create?: XOR<ModelCreateWithoutOutputImagesInput, ModelUncheckedCreateWithoutOutputImagesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutOutputImagesInput
    upsert?: ModelUpsertWithoutOutputImagesInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutOutputImagesInput, ModelUpdateWithoutOutputImagesInput>, ModelUncheckedUpdateWithoutOutputImagesInput>
  }

  export type UserUpdateOneRequiredWithoutOutputImageNestedInput = {
    create?: XOR<UserCreateWithoutOutputImageInput, UserUncheckedCreateWithoutOutputImageInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutputImageInput
    upsert?: UserUpsertWithoutOutputImageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOutputImageInput, UserUpdateWithoutOutputImageInput>, UserUncheckedUpdateWithoutOutputImageInput>
  }

  export type PackPromptCreateNestedManyWithoutPackInput = {
    create?: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput> | PackPromptCreateWithoutPackInput[] | PackPromptUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptCreateOrConnectWithoutPackInput | PackPromptCreateOrConnectWithoutPackInput[]
    createMany?: PackPromptCreateManyPackInputEnvelope
    connect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
  }

  export type PackPromptUncheckedCreateNestedManyWithoutPackInput = {
    create?: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput> | PackPromptCreateWithoutPackInput[] | PackPromptUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptCreateOrConnectWithoutPackInput | PackPromptCreateOrConnectWithoutPackInput[]
    createMany?: PackPromptCreateManyPackInputEnvelope
    connect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
  }

  export type PackPromptUpdateManyWithoutPackNestedInput = {
    create?: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput> | PackPromptCreateWithoutPackInput[] | PackPromptUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptCreateOrConnectWithoutPackInput | PackPromptCreateOrConnectWithoutPackInput[]
    upsert?: PackPromptUpsertWithWhereUniqueWithoutPackInput | PackPromptUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: PackPromptCreateManyPackInputEnvelope
    set?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    disconnect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    delete?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    connect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    update?: PackPromptUpdateWithWhereUniqueWithoutPackInput | PackPromptUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: PackPromptUpdateManyWithWhereWithoutPackInput | PackPromptUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: PackPromptScalarWhereInput | PackPromptScalarWhereInput[]
  }

  export type PackPromptUncheckedUpdateManyWithoutPackNestedInput = {
    create?: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput> | PackPromptCreateWithoutPackInput[] | PackPromptUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptCreateOrConnectWithoutPackInput | PackPromptCreateOrConnectWithoutPackInput[]
    upsert?: PackPromptUpsertWithWhereUniqueWithoutPackInput | PackPromptUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: PackPromptCreateManyPackInputEnvelope
    set?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    disconnect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    delete?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    connect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    update?: PackPromptUpdateWithWhereUniqueWithoutPackInput | PackPromptUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: PackPromptUpdateManyWithWhereWithoutPackInput | PackPromptUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: PackPromptScalarWhereInput | PackPromptScalarWhereInput[]
  }

  export type PackCreateNestedOneWithoutPackPromptInput = {
    create?: XOR<PackCreateWithoutPackPromptInput, PackUncheckedCreateWithoutPackPromptInput>
    connectOrCreate?: PackCreateOrConnectWithoutPackPromptInput
    connect?: PackWhereUniqueInput
  }

  export type PackUpdateOneRequiredWithoutPackPromptNestedInput = {
    create?: XOR<PackCreateWithoutPackPromptInput, PackUncheckedCreateWithoutPackPromptInput>
    connectOrCreate?: PackCreateOrConnectWithoutPackPromptInput
    upsert?: PackUpsertWithoutPackPromptInput
    connect?: PackWhereUniqueInput
    update?: XOR<XOR<PackUpdateToOneWithWhereWithoutPackPromptInput, PackUpdateWithoutPackPromptInput>, PackUncheckedUpdateWithoutPackPromptInput>
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

  export type NestedEnumModelTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTypeEnum | EnumModelTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeEnumFilter<$PrismaModel> | $Enums.ModelTypeEnum
  }

  export type NestedEnumEthinicityEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.EthinicityEnum | EnumEthinicityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEthinicityEnumFilter<$PrismaModel> | $Enums.EthinicityEnum
  }

  export type NestedEnumEyeColorEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.EyeColorEnum | EnumEyeColorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEyeColorEnumFilter<$PrismaModel> | $Enums.EyeColorEnum
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumModelTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTypeEnum | EnumModelTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ModelTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumModelTypeEnumFilter<$PrismaModel>
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

  export type NestedEnumEthinicityEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EthinicityEnum | EnumEthinicityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEthinicityEnumWithAggregatesFilter<$PrismaModel> | $Enums.EthinicityEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEthinicityEnumFilter<$PrismaModel>
    _max?: NestedEnumEthinicityEnumFilter<$PrismaModel>
  }

  export type NestedEnumEyeColorEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EyeColorEnum | EnumEyeColorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEyeColorEnumWithAggregatesFilter<$PrismaModel> | $Enums.EyeColorEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEyeColorEnumFilter<$PrismaModel>
    _max?: NestedEnumEyeColorEnumFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumOutputImageStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImageStatusEnum | EnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImageStatusEnum[] | ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImageStatusEnum[] | ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImageStatusEnumFilter<$PrismaModel> | $Enums.OutputImageStatusEnum
  }

  export type NestedEnumOutputImageStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImageStatusEnum | EnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImageStatusEnum[] | ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImageStatusEnum[] | ListEnumOutputImageStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImageStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.OutputImageStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputImageStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumOutputImageStatusEnumFilter<$PrismaModel>
  }

  export type OutputImageCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    model: ModelCreateNestedOneWithoutOutputImagesInput
  }

  export type OutputImageUncheckedCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    modelId: string
  }

  export type OutputImageCreateOrConnectWithoutUserInput = {
    where: OutputImageWhereUniqueInput
    create: XOR<OutputImageCreateWithoutUserInput, OutputImageUncheckedCreateWithoutUserInput>
  }

  export type OutputImageCreateManyUserInputEnvelope = {
    data: OutputImageCreateManyUserInput | OutputImageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModelCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingImages?: TrainingImageCreateNestedManyWithoutModelInput
    OutputImages?: OutputImageCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingImages?: TrainingImageUncheckedCreateNestedManyWithoutModelInput
    OutputImages?: OutputImageUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutUserInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutUserInput, ModelUncheckedCreateWithoutUserInput>
  }

  export type ModelCreateManyUserInputEnvelope = {
    data: ModelCreateManyUserInput | ModelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TrainingImageCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    model: ModelCreateNestedOneWithoutTrainingImagesInput
  }

  export type TrainingImageUncheckedCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    modelId: string
  }

  export type TrainingImageCreateOrConnectWithoutUserInput = {
    where: TrainingImageWhereUniqueInput
    create: XOR<TrainingImageCreateWithoutUserInput, TrainingImageUncheckedCreateWithoutUserInput>
  }

  export type TrainingImageCreateManyUserInputEnvelope = {
    data: TrainingImageCreateManyUserInput | TrainingImageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OutputImageUpsertWithWhereUniqueWithoutUserInput = {
    where: OutputImageWhereUniqueInput
    update: XOR<OutputImageUpdateWithoutUserInput, OutputImageUncheckedUpdateWithoutUserInput>
    create: XOR<OutputImageCreateWithoutUserInput, OutputImageUncheckedCreateWithoutUserInput>
  }

  export type OutputImageUpdateWithWhereUniqueWithoutUserInput = {
    where: OutputImageWhereUniqueInput
    data: XOR<OutputImageUpdateWithoutUserInput, OutputImageUncheckedUpdateWithoutUserInput>
  }

  export type OutputImageUpdateManyWithWhereWithoutUserInput = {
    where: OutputImageScalarWhereInput
    data: XOR<OutputImageUpdateManyMutationInput, OutputImageUncheckedUpdateManyWithoutUserInput>
  }

  export type OutputImageScalarWhereInput = {
    AND?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
    OR?: OutputImageScalarWhereInput[]
    NOT?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
    id?: StringFilter<"OutputImage"> | string
    imageUrl?: StringFilter<"OutputImage"> | string
    status?: EnumOutputImageStatusEnumFilter<"OutputImage"> | $Enums.OutputImageStatusEnum
    prompt?: StringFilter<"OutputImage"> | string
    modelId?: StringFilter<"OutputImage"> | string
    userId?: StringFilter<"OutputImage"> | string
  }

  export type ModelUpsertWithWhereUniqueWithoutUserInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutUserInput, ModelUncheckedUpdateWithoutUserInput>
    create: XOR<ModelCreateWithoutUserInput, ModelUncheckedCreateWithoutUserInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutUserInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutUserInput, ModelUncheckedUpdateWithoutUserInput>
  }

  export type ModelUpdateManyWithWhereWithoutUserInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutUserInput>
  }

  export type ModelScalarWhereInput = {
    AND?: ModelScalarWhereInput | ModelScalarWhereInput[]
    OR?: ModelScalarWhereInput[]
    NOT?: ModelScalarWhereInput | ModelScalarWhereInput[]
    id?: StringFilter<"Model"> | string
    name?: StringFilter<"Model"> | string
    type?: EnumModelTypeEnumFilter<"Model"> | $Enums.ModelTypeEnum
    age?: IntFilter<"Model"> | number
    ethinicity?: EnumEthinicityEnumFilter<"Model"> | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFilter<"Model"> | $Enums.EyeColorEnum
    bald?: BoolFilter<"Model"> | boolean
    images?: StringNullableListFilter<"Model">
    userId?: StringFilter<"Model"> | string
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
  }

  export type TrainingImageUpsertWithWhereUniqueWithoutUserInput = {
    where: TrainingImageWhereUniqueInput
    update: XOR<TrainingImageUpdateWithoutUserInput, TrainingImageUncheckedUpdateWithoutUserInput>
    create: XOR<TrainingImageCreateWithoutUserInput, TrainingImageUncheckedCreateWithoutUserInput>
  }

  export type TrainingImageUpdateWithWhereUniqueWithoutUserInput = {
    where: TrainingImageWhereUniqueInput
    data: XOR<TrainingImageUpdateWithoutUserInput, TrainingImageUncheckedUpdateWithoutUserInput>
  }

  export type TrainingImageUpdateManyWithWhereWithoutUserInput = {
    where: TrainingImageScalarWhereInput
    data: XOR<TrainingImageUpdateManyMutationInput, TrainingImageUncheckedUpdateManyWithoutUserInput>
  }

  export type TrainingImageScalarWhereInput = {
    AND?: TrainingImageScalarWhereInput | TrainingImageScalarWhereInput[]
    OR?: TrainingImageScalarWhereInput[]
    NOT?: TrainingImageScalarWhereInput | TrainingImageScalarWhereInput[]
    id?: StringFilter<"TrainingImage"> | string
    imageUrl?: StringFilter<"TrainingImage"> | string
    modelId?: StringFilter<"TrainingImage"> | string
    userId?: StringFilter<"TrainingImage"> | string
  }

  export type TrainingImageCreateWithoutModelInput = {
    id?: string
    imageUrl: string
    user: UserCreateNestedOneWithoutTrainingImageInput
  }

  export type TrainingImageUncheckedCreateWithoutModelInput = {
    id?: string
    imageUrl: string
    userId: string
  }

  export type TrainingImageCreateOrConnectWithoutModelInput = {
    where: TrainingImageWhereUniqueInput
    create: XOR<TrainingImageCreateWithoutModelInput, TrainingImageUncheckedCreateWithoutModelInput>
  }

  export type TrainingImageCreateManyModelInputEnvelope = {
    data: TrainingImageCreateManyModelInput | TrainingImageCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type OutputImageCreateWithoutModelInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    user: UserCreateNestedOneWithoutOutputImageInput
  }

  export type OutputImageUncheckedCreateWithoutModelInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    userId: string
  }

  export type OutputImageCreateOrConnectWithoutModelInput = {
    where: OutputImageWhereUniqueInput
    create: XOR<OutputImageCreateWithoutModelInput, OutputImageUncheckedCreateWithoutModelInput>
  }

  export type OutputImageCreateManyModelInputEnvelope = {
    data: OutputImageCreateManyModelInput | OutputImageCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutModelInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OutputImage?: OutputImageCreateNestedManyWithoutUserInput
    TrainingImage?: TrainingImageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModelInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OutputImage?: OutputImageUncheckedCreateNestedManyWithoutUserInput
    TrainingImage?: TrainingImageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModelInput, UserUncheckedCreateWithoutModelInput>
  }

  export type TrainingImageUpsertWithWhereUniqueWithoutModelInput = {
    where: TrainingImageWhereUniqueInput
    update: XOR<TrainingImageUpdateWithoutModelInput, TrainingImageUncheckedUpdateWithoutModelInput>
    create: XOR<TrainingImageCreateWithoutModelInput, TrainingImageUncheckedCreateWithoutModelInput>
  }

  export type TrainingImageUpdateWithWhereUniqueWithoutModelInput = {
    where: TrainingImageWhereUniqueInput
    data: XOR<TrainingImageUpdateWithoutModelInput, TrainingImageUncheckedUpdateWithoutModelInput>
  }

  export type TrainingImageUpdateManyWithWhereWithoutModelInput = {
    where: TrainingImageScalarWhereInput
    data: XOR<TrainingImageUpdateManyMutationInput, TrainingImageUncheckedUpdateManyWithoutModelInput>
  }

  export type OutputImageUpsertWithWhereUniqueWithoutModelInput = {
    where: OutputImageWhereUniqueInput
    update: XOR<OutputImageUpdateWithoutModelInput, OutputImageUncheckedUpdateWithoutModelInput>
    create: XOR<OutputImageCreateWithoutModelInput, OutputImageUncheckedCreateWithoutModelInput>
  }

  export type OutputImageUpdateWithWhereUniqueWithoutModelInput = {
    where: OutputImageWhereUniqueInput
    data: XOR<OutputImageUpdateWithoutModelInput, OutputImageUncheckedUpdateWithoutModelInput>
  }

  export type OutputImageUpdateManyWithWhereWithoutModelInput = {
    where: OutputImageScalarWhereInput
    data: XOR<OutputImageUpdateManyMutationInput, OutputImageUncheckedUpdateManyWithoutModelInput>
  }

  export type UserUpsertWithoutModelInput = {
    update: XOR<UserUpdateWithoutModelInput, UserUncheckedUpdateWithoutModelInput>
    create: XOR<UserCreateWithoutModelInput, UserUncheckedCreateWithoutModelInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModelInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModelInput, UserUncheckedUpdateWithoutModelInput>
  }

  export type UserUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutputImage?: OutputImageUpdateManyWithoutUserNestedInput
    TrainingImage?: TrainingImageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutputImage?: OutputImageUncheckedUpdateManyWithoutUserNestedInput
    TrainingImage?: TrainingImageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModelCreateWithoutTrainingImagesInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    OutputImages?: OutputImageCreateNestedManyWithoutModelInput
    user: UserCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutTrainingImagesInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OutputImages?: OutputImageUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutTrainingImagesInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutTrainingImagesInput, ModelUncheckedCreateWithoutTrainingImagesInput>
  }

  export type UserCreateWithoutTrainingImageInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OutputImage?: OutputImageCreateNestedManyWithoutUserInput
    Model?: ModelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTrainingImageInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OutputImage?: OutputImageUncheckedCreateNestedManyWithoutUserInput
    Model?: ModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTrainingImageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrainingImageInput, UserUncheckedCreateWithoutTrainingImageInput>
  }

  export type ModelUpsertWithoutTrainingImagesInput = {
    update: XOR<ModelUpdateWithoutTrainingImagesInput, ModelUncheckedUpdateWithoutTrainingImagesInput>
    create: XOR<ModelCreateWithoutTrainingImagesInput, ModelUncheckedCreateWithoutTrainingImagesInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutTrainingImagesInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutTrainingImagesInput, ModelUncheckedUpdateWithoutTrainingImagesInput>
  }

  export type ModelUpdateWithoutTrainingImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutputImages?: OutputImageUpdateManyWithoutModelNestedInput
    user?: UserUpdateOneRequiredWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutTrainingImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutputImages?: OutputImageUncheckedUpdateManyWithoutModelNestedInput
  }

  export type UserUpsertWithoutTrainingImageInput = {
    update: XOR<UserUpdateWithoutTrainingImageInput, UserUncheckedUpdateWithoutTrainingImageInput>
    create: XOR<UserCreateWithoutTrainingImageInput, UserUncheckedCreateWithoutTrainingImageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrainingImageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrainingImageInput, UserUncheckedUpdateWithoutTrainingImageInput>
  }

  export type UserUpdateWithoutTrainingImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutputImage?: OutputImageUpdateManyWithoutUserNestedInput
    Model?: ModelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTrainingImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutputImage?: OutputImageUncheckedUpdateManyWithoutUserNestedInput
    Model?: ModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModelCreateWithoutOutputImagesInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingImages?: TrainingImageCreateNestedManyWithoutModelInput
    user: UserCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutOutputImagesInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingImages?: TrainingImageUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutOutputImagesInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutOutputImagesInput, ModelUncheckedCreateWithoutOutputImagesInput>
  }

  export type UserCreateWithoutOutputImageInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelCreateNestedManyWithoutUserInput
    TrainingImage?: TrainingImageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOutputImageInput = {
    id?: string
    username: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelUncheckedCreateNestedManyWithoutUserInput
    TrainingImage?: TrainingImageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOutputImageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOutputImageInput, UserUncheckedCreateWithoutOutputImageInput>
  }

  export type ModelUpsertWithoutOutputImagesInput = {
    update: XOR<ModelUpdateWithoutOutputImagesInput, ModelUncheckedUpdateWithoutOutputImagesInput>
    create: XOR<ModelCreateWithoutOutputImagesInput, ModelUncheckedCreateWithoutOutputImagesInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutOutputImagesInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutOutputImagesInput, ModelUncheckedUpdateWithoutOutputImagesInput>
  }

  export type ModelUpdateWithoutOutputImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingImages?: TrainingImageUpdateManyWithoutModelNestedInput
    user?: UserUpdateOneRequiredWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutOutputImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingImages?: TrainingImageUncheckedUpdateManyWithoutModelNestedInput
  }

  export type UserUpsertWithoutOutputImageInput = {
    update: XOR<UserUpdateWithoutOutputImageInput, UserUncheckedUpdateWithoutOutputImageInput>
    create: XOR<UserCreateWithoutOutputImageInput, UserUncheckedCreateWithoutOutputImageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOutputImageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOutputImageInput, UserUncheckedUpdateWithoutOutputImageInput>
  }

  export type UserUpdateWithoutOutputImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUpdateManyWithoutUserNestedInput
    TrainingImage?: TrainingImageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOutputImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUncheckedUpdateManyWithoutUserNestedInput
    TrainingImage?: TrainingImageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PackPromptCreateWithoutPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptUncheckedCreateWithoutPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptCreateOrConnectWithoutPackInput = {
    where: PackPromptWhereUniqueInput
    create: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput>
  }

  export type PackPromptCreateManyPackInputEnvelope = {
    data: PackPromptCreateManyPackInput | PackPromptCreateManyPackInput[]
    skipDuplicates?: boolean
  }

  export type PackPromptUpsertWithWhereUniqueWithoutPackInput = {
    where: PackPromptWhereUniqueInput
    update: XOR<PackPromptUpdateWithoutPackInput, PackPromptUncheckedUpdateWithoutPackInput>
    create: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput>
  }

  export type PackPromptUpdateWithWhereUniqueWithoutPackInput = {
    where: PackPromptWhereUniqueInput
    data: XOR<PackPromptUpdateWithoutPackInput, PackPromptUncheckedUpdateWithoutPackInput>
  }

  export type PackPromptUpdateManyWithWhereWithoutPackInput = {
    where: PackPromptScalarWhereInput
    data: XOR<PackPromptUpdateManyMutationInput, PackPromptUncheckedUpdateManyWithoutPackInput>
  }

  export type PackPromptScalarWhereInput = {
    AND?: PackPromptScalarWhereInput | PackPromptScalarWhereInput[]
    OR?: PackPromptScalarWhereInput[]
    NOT?: PackPromptScalarWhereInput | PackPromptScalarWhereInput[]
    id?: StringFilter<"PackPrompt"> | string
    prompt?: StringFilter<"PackPrompt"> | string
    packId?: StringFilter<"PackPrompt"> | string
  }

  export type PackCreateWithoutPackPromptInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackUncheckedCreateWithoutPackPromptInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackCreateOrConnectWithoutPackPromptInput = {
    where: PackWhereUniqueInput
    create: XOR<PackCreateWithoutPackPromptInput, PackUncheckedCreateWithoutPackPromptInput>
  }

  export type PackUpsertWithoutPackPromptInput = {
    update: XOR<PackUpdateWithoutPackPromptInput, PackUncheckedUpdateWithoutPackPromptInput>
    create: XOR<PackCreateWithoutPackPromptInput, PackUncheckedCreateWithoutPackPromptInput>
    where?: PackWhereInput
  }

  export type PackUpdateToOneWithWhereWithoutPackPromptInput = {
    where?: PackWhereInput
    data: XOR<PackUpdateWithoutPackPromptInput, PackUncheckedUpdateWithoutPackPromptInput>
  }

  export type PackUpdateWithoutPackPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackUncheckedUpdateWithoutPackPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutputImageCreateManyUserInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    modelId: string
  }

  export type ModelCreateManyUserInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    eyeColor: $Enums.EyeColorEnum
    bald: boolean
    images?: ModelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingImageCreateManyUserInput = {
    id?: string
    imageUrl: string
    modelId: string
  }

  export type OutputImageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    model?: ModelUpdateOneRequiredWithoutOutputImagesNestedInput
  }

  export type OutputImageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingImages?: TrainingImageUpdateManyWithoutModelNestedInput
    OutputImages?: OutputImageUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingImages?: TrainingImageUncheckedUpdateManyWithoutModelNestedInput
    OutputImages?: OutputImageUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    images?: ModelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingImageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    model?: ModelUpdateOneRequiredWithoutTrainingImagesNestedInput
  }

  export type TrainingImageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImageCreateManyModelInput = {
    id?: string
    imageUrl: string
    userId: string
  }

  export type OutputImageCreateManyModelInput = {
    id?: string
    imageUrl: string
    status?: $Enums.OutputImageStatusEnum
    prompt: string
    userId: string
  }

  export type TrainingImageUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTrainingImageNestedInput
  }

  export type TrainingImageUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImageUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImageUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOutputImageNestedInput
  }

  export type OutputImageUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImageUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImageStatusEnumFieldUpdateOperationsInput | $Enums.OutputImageStatusEnum
    prompt?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptCreateManyPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptUpdateWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptUncheckedUpdateWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptUncheckedUpdateManyWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
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