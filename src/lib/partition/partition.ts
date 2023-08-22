/**
 * 
 * @param arr 
 * @param fn 
 * @returns 
 */
export const partition = <T>(arr: T[], fn: (currentValue: T) => boolean) =>
	arr.reduce(
		(reducedArr: [T[], T[]], currentValue: T) => {
			reducedArr[fn(currentValue) ? 0 : 1].push(currentValue);
			return reducedArr;
		},
		[[],[]]
	);