# eva-functional-utils

## Purpose
plain typescript dont have some data manipulation functions that are comonly used in the functional paradigm so the idea is to provide some functions suitable for the ones who use this paradigm.

## available functionalities
1. ![img](https://p1.hiclipart.com/preview/198/417/113/simply-styled-icon-set-731-icons-free-security-approved-green-check-signage-illustration-png-clipart.jpg) **partition**
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

2. ![img](https://p1.hiclipart.com/preview/198/417/113/simply-styled-icon-set-731-icons-free-security-approved-green-check-signage-illustration-png-clipart.jpg)  **Try**** (class)
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

3. ![img](https://p1.hiclipart.com/preview/198/417/113/simply-styled-icon-set-731-icons-free-security-approved-green-check-signage-illustration-png-clipart.jpg)  **clean**
    - clean data structure and persist only non falsy values
    - example:
    ```
    const arr = [1,2,3,4, undefined, "", false, 5]

    const result = clean(arr)
    console.log(result)

    /** output
        [1,2,3,4,5]
    */
    ```

4. ![img](https://p1.hiclipart.com/preview/198/417/113/simply-styled-icon-set-731-icons-free-security-approved-green-check-signage-illustration-png-clipart.jpg)  **takeLeft**
    - get n elements from begining
    - example:
    ```
    const data = [1,2,3,4]

    const result = takeLeft(data, 2)
    console.log(result)

    /** output
        [1,2]
    */
    ```

5. ![img](https://p1.hiclipart.com/preview/198/417/113/simply-styled-icon-set-731-icons-free-security-approved-green-check-signage-illustration-png-clipart.jpg)  takeRight
    - get n elements from end
    - example:
    ```
    const data = [1,2,3,4]

    const result = takeRight(data, 2)
    console.log(result)

    /** output
        [3,4]
    */
    ```   

6. **flatten** (just use native flat() [Developer Mozilla page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) )
    - decrement depth of data structure

7. ![img](https://p1.hiclipart.com/preview/198/417/113/simply-styled-icon-set-731-icons-free-security-approved-green-check-signage-illustration-png-clipart.jpg)  **groupBy** (also mentioned as experimental on [Developer Mozilla page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy))
    - group elements of a data struture based on a function
    - example:
    ```
    const data = [
        {name: "andre", age: 18},
        {name: "rita", age: 19},
        {name: "joao", age: 21},
        {name: "rita", age: 52},
    ]

    const result = groupBy(data, (v) => v.name)
    console.log(result)

    /** output
    {
        andre: [ { name: 'andre', age: 18 } ],
        rita: [ { name: 'rita', age: 19 }, { name: 'rita', age: 52 } ],
        joao: [ { name: 'joao', age: 21 } ]
    }
    */
    ```

8. ![img](https://p1.hiclipart.com/preview/198/417/113/simply-styled-icon-set-731-icons-free-security-approved-green-check-signage-illustration-png-clipart.jpg)  **isEmpty**
    - check if data structure is empty, supported types are objects, collections, empty strings and falsy.

9. ![img](https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-22.jpg) **zip** [in progress]
    - rely on the position of multiple data structures and return it merged

10. ![img](https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-22.jpg) **unzip** [in progress]
    - ungroups and return the generated multiple data structures

11. ![img](https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-22.jpg) **asSet** [in progress]
    - return data structure without repeated values

## Author
botclimber by evaclue