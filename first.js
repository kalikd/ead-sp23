/**
 * ----CALLBACKS ----
 * Usage:
 * - Asynchronous Programming
 * - Event Handling
 * - Timers
 * - NodeJS: Express => routes
 */

//Callback Example
function getData(callback){
    console.log('Before');
    setTimeout(function(){
        const apiData = { name: "Ahmar", age:21}
        callback(apiData);
    }, 200000) // 2000 ms = 2 seconds
    console.log('After');
}

const cb = function(data){
    console.log('Response:', data);
}

//getData(cb);

// Nested Casllback => Callback Hell
// Solution: Promises
/**
 * Three states of Promises
 * - Pending
 * - Resolved
 * - Failed/Rejected
 */
function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            const apiData = {name:'KD'}
            if(!apiData)
                return reject("No data available!") // catch
            resolve(apiData); // then
        }, 0) // 2000 ms = 2 seconds
    })
    
}

//getData().then(res => JSON.parse(res)).then(res =>{console.log('Data:',res)}).catch(err =>{console.log('Error',err)});


/**
 * Aync/Await (Soultion to chaining problem in Promises)
 */
//Immediately Invoked Function (IIF)
// (async function(){
//     try{
//         const data = await getData(); //async behaviour
//         console.log(JSON.parse(data));
//     }
//     catch(err){
//         console.log('Error:',err);
//     }
// })();

function callMe(){
    return getData() // {name:'KD'}
}
//callMe().then(data=>console.log(data)).catch(err=>console.log(err))

(async function(){
    const data = await callMe();
    console.log(data)
})();



// const apiData = await getDataFromAPI();// 10seconds Network call for fetching data from API
// const dbData = await getDataFromDB();// 5 seconds Database
// total seconds : 15

// Parallel requests

//const [api, db] = await Promise.all([getDataFromAPI(), getDataFromDB()]) // 10
// Promise.all and problem with with promise.all
// Promise.all([getDataFromAPI(), getDataFromDB()]).then(function ([api,db]) {
// }).catch(function (err) {})

const BATCH_SIZE = 100

let records = await getDataFromDB({skip:0, BATCH_SIZE: BATCH_SIZE}); // 100 records 20 seconds
while(records.length){
    const promiseArr = [];
    
    for(const obj of records){
        
        obj.abc = compute(obj.abc)
        promiseArr.push(updateRecord(obj));//async call


    }
    await Promise.all(promiseArr); // 10 seconds
    skip+= BATCH_SIZE;
    records = await getDataFromDB({skip:BATCH_SIZE, BATCH_SIZE: BATCH_SIZE}); // 100 records 20 seconds
}



// let records = await getDataFromDB({skip:0, BATCH_SIZE: BATCH_SIZE}); // 100 records 20 seconds
// while(records.length){
//     const promiseArr = [];
//     skip+= BATCH_SIZE;
//     const promise = getDataFromDB({skip:BATCH_SIZE, BATCH_SIZE: BATCH_SIZE}); // 100 records 20 seconds
//     for(const obj of records){
        
//         obj.abc = compute(obj.abc)
//         promiseArr.push(updateRecord(obj));//async call


//     }
//     await Promise.all(promiseArr); // 10 seconds

   
//     records = await promise
// }

// Async requests in interators seq & parallel

//for..await







