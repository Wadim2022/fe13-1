console.log('Request');


let promise = new Promise((resolve, reject)=>{
    const person = {
        name: 'VADIM',
        number: '+99876566733',
        age: '29',
        status:'online', 
        sallary: '50000$',
        placeOfBirth:'Russian Federation',
    }

    setTimeout(()=>{
        console.log('Json data is ready....');
        const jsonData = JSON.stringify(person);
        console.log( jsonData);
        resolve(jsonData);
        reject(()=>{
            console.log('ошибка');
        })
    }, 3000)
})
promise
.then((jsonData)=>{
    setTimeout(()=>{
        console.log('parsed data is ready...');
        const jsonParsed = JSON.parse(jsonData);
        console.log(jsonParsed);
        console.log("loading end..");
    }, 4000)
})
.catch(()=>{
    console.log('error');
})