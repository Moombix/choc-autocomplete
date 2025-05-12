import { Dict } from 'src/types';
export declare function getFirstItem<T>(array: T[]): T | undefined;
export declare function getLastItem<T>(array: T[]): T | undefined;
/**
 * Get the next index based on the current index and step.
 *
 * @param currentIndex - The current index.
 * @param length - The total length or count of items.
 * @param step - The number of steps to move (positive or negative).
 * @param loop - Whether to loop around when the index exceeds boundaries.
 */
export declare function getNextIndex(currentIndex: number, length: number, step?: number, loop?: boolean): number;
/**
 * Gets the previous index based on the current index.
 * Mostly used for keyboard navigation.
 *
 * @param currentIndex - The current index.
 * @param length - The total length or count of items.
 * @param loop - Whether to loop around when the index exceeds boundaries.
 */
export declare function getPrevIndex(currentIndex: number, length: number, loop?: boolean): number;
export declare function getNextItem<T>(currentIndex: number, array: T[], loop?: boolean): T | undefined;
export declare function getPrevItem<T>(currentIndex: number, array: T[], loop?: boolean): T | undefined;
export declare function isArray(value: any): value is Array<any>;
export declare function isEmptyArray(value: any): boolean;
export declare function isObject(value: any): value is Dict;
export declare function isEmptyObject(value: any): boolean;
export declare function isEmpty(value: any): boolean;
export declare function isUndefined(value: any): value is undefined;
export declare function isDefined<T>(value: T): value is Exclude<T, undefined>;
export declare function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]): {
    [P in K]: T[P];
};
export declare function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]): Omit<T, K>;
export declare function isFunction<T extends Function = Function>(value: any): value is T;
export type MaybeFunction<T, Args extends unknown[] = []> = T | ((...args: Args) => T);
export declare function runIfFn<T, Args extends unknown[]>(valueOrFn: MaybeFunction<T, Args>, ...args: Args): T;
//# sourceMappingURL=utils.d.ts.map