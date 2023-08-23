type MapFunc<T> = (val: T, index: number, arr: T[]) => any;

/**
 * 
 * @param data 
 * @param fn 
 * @returns 
 */
export const groupBy = <T>(data: T[], fn: MapFunc<T>) =>

  data.map(fn)
  .reduce((dict, val, i) => {

    const param: string = val.toString()
    dict[param] = ( dict[param] || []).concat(data[i])

    return dict
  }, new Object());