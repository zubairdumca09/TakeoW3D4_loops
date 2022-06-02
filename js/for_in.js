let data = {
    level: 30,
    time: "2/6/2022",
    id: 2,
    url: "https://google.com",
    msg: 'Hello',
    arr: [1, 2, 3, 5]
}

let key1 = 'msg';
let key2 = 'url'
//console.log(data.length) //undefined
console.log(data["url"]); //https://google.com
console.log(data.level); // 30
console.log(data["level"]); // 30
console.log(data["id"]); //2
console.log(data[key2]); //https://google.com
console.log(data[key1]); //Hello

for (let key in data) {  // for (let <var name> in <object>)
    console.log(`Key=${key}`) //Key=level
    console.log(`Value=${data[key]}`)//Value=30
    console.log("=============================")
}


