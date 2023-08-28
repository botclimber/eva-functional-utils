# eva-functional-utils

## Purpose
Typescript dont have some data manipulation functions that are commonly used in the functional paradigm so the idea is to provide some functions suitable for the ones who want to use this paradigm.

## Instalation
Using npm:
```
$ npm i eva-functional-utils
```

In TS file:
```
import * as eva from "eva-functional-utils"

eva.[asSet, partition, zip, clean, ...]
```

## Available functionalities
:white_check_mark: **partition**
- creates new data structure depending on boolean result
```
    // example

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
##
    
:white_check_mark: **Try** (class)
- bundle of Try Catch into a success failure data structure.
```
    // example

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
##
    
:white_check_mark: **clean**
- clean data structure and persist only non falsy values
```
    // example

    const arr = [1,2,3,4, undefined, "", false, 5]

    const result = clean(arr)
    console.log(result)

    /** output
        [1,2,3,4,5]
    */
```
##
    
:white_check_mark: **takeLeft**
- get n elements from begining
```
    // example

    const data = [1,2,3,4]

    const result = takeLeft(data, 2)
    console.log(result)

    /** output
        [1,2]
    */
```
##
    
:white_check_mark: **takeRight**
- get n elements from end
```
    // example

    const data = [1,2,3,4]

    const result = takeRight(data, 2)
    console.log(result)

    /** output
        [3,4]
    */
 ```   
##

:warning: **flatten** 
> Use native flat [Developer Mozilla page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- decrement depth of data structure
##

:white_check_mark: **groupBy** 
> Also mentioned as experimental on [Developer Mozilla page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- group elements of a data struture based on a function
```
    // example
    
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
##
    
:white_check_mark: **isEmpty**
- check if data structure is empty, supported types are objects, collections, empty strings and falsy.
##
    
:white_check_mark: **zip**
- rely on the position of multiple data structures and return it merged
```
    // example
    
    const arr1 = [1,2,3] 
    const arr2 = ['a', 'b']
    const arr3 = [true, false]

    const result = zip(arr1, arr2, arr3)
    console.log(result)

    /** output
    
    [[1, 'a', true], [2, 'b', false], [3, undefined, undefined]]

    */
```
##
    
:white_check_mark: **unzip**
- ungroups and return the generated multiple data structures
```
    // example
    
    const arr = [[1, 'a', true], [2, 'b', false], [3, undefined, undefined]]

    const result = unzip(arr)
    console.log(result)

    /** output
    
    [[1, 2, 3], ['a', 'b', 'c'], [true, false]]

    */
```
## 

:white_check_mark: **asSet**
- return data structure without repeated values
```
    // example
    
    const data = [1, 2, 3, 3, 3, 4, 5]

    const result = asSet(data)
    console.log(result)

    /** output
    
    [1, 2, 3, 4, 5]

    */
```
##

:x: **toMap** [in progress]
- creates a map (New Map(key, value)) from an array

## Author
botclimber by evaclue
