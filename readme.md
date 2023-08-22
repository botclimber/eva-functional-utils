# eva-functional-utils

## Purpose
plain typescript dont have some data manipulation functions that are comonly used in the functional paradigm so the idea is to provide some functions suitable for the ones who use this paradigm.

## available functionalities
1. partition
    - creates new data structure depending on boolean result
    - example:
        ```
        const obj = [
            {param1: "test", param2: true },
            {param1: "test1", param2: false },
            {param1: "test2", param2: true },
            ]

        const result = partition(obj, (param) => param.param2)
        console.log(result)
        
        /** output
            [
                [{param1: "test", param2: true },{param1: "test2", param2: true }]
                [{param1: "test1", param2: false }]
            ]
         */
        ```

2. Try (class)
    - bundle of Try Catch into a success failure data structure.
    - example:
        ```
        const arr = [[0, 14], [20, 0], [3,2], [0, 0], [20, 10]]

        const result = arr.map(r => Try.evaluate(() => divide(r[0], r[1])))

        result.forEach(tries => {

            if(tries.itSucceed()){
                console.log("Result:", tries.getOrElse(27));
            }else{
                console.log("Error:", tries.getError())
            }

        })
        ```

3. clean [in progress]  
    - clean data structure and persist only non falsy values

4. takeLeft[in progress]
    - remove n elements from begining

5. takeRight [in progress]
    - remove n elements from end    

6. flatten [in progress]
    - decrement depth of data structure

7. groupBy [in progress]
    - group elements of a data struture based on a function

8. isEmpty [in progress]
    - check if data structure is empty

9. zip [in progress]
    - rely on the position of multiple data structures and return it merged

10. unzip [in progress]
    - ungroups and return the generated multiple data structures

11. asSet [in progress]
    - return data structure without repeated values

## Author
botclimber by evaclue