/**
 * Return inputed array without duplicates.
 * Use of Set class so theres still an other layer of abstraction.
 * 
 * @param arrays 
 * @returns 
 */
export const asSet = (arrays: any) => [...new Set(arrays)];