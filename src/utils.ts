/**
 * Update an object with typesafty for both keys and values
 * 
 * Uses principals of type inference with index and mapped types found in the TS docs:
 * http://www.typescriptlang.org/docs/handbook/advanced-types.html
 * 
 * 
 * ```typescript
 * // example:
 * let updatedObj = ChangeObjectValue(myObj, "Created", new Date());
 * ```
 * 
 * 
 * @param source any object T
 * @param key any key of object T to update
 * @param value value to update the property K to
 * @return updated object T
 */
 export function ChangeObjectValue<T, K extends keyof T>(source: T, key: K, value: T[K]) {
	source[key] = value;
	return { ...source };
}