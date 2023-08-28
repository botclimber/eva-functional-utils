/**
 * default value in case of shorter array length is undefined
 * 
 * @param arrays 
 * @returns 
 */
export const zip = (...arrays: any[]) => {
    const max: number = Math.max(...arrays.map((x) => x.length));
    
    return Array.from({ length: max }).map((_, i) => {
      return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
    });
  };
  