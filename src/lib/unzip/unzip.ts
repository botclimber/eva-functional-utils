export const unzip = (...arrays: any[]) => {
    const max: number = Math.max(...arrays.map((x) => x.length))
    
    return arrays.reduce(
        (acc, val) => (val.forEach((v: any, i: number) => acc[i].push(v)), acc),
        Array.from( { length: max }).map(() => [])
    );
};