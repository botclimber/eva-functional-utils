/**
* Try to get value from array, if not found returns defined default value parameter.
* Supports direct values (number, string, boolean) and object keys
* 
* @param defautlValue 
* @param arr 
* @param value 
* @param key 
* @returns 
*/
export const getOrElse = (defautlValue: any, arr: any[], value: any, key?: string) => {

 const result: any | undefined = arr.find( v => {
   if(key) return v[key] === value
   else return v === value
 })

 return result || defautlValue;
}