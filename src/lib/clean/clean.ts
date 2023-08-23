/**
 * 
 * @param data 
 * @returns 
 */
export const clean = <T>(data: T[]) => data.filter(v => Boolean(v)) // syntax sugar: data.filter(Boolean)