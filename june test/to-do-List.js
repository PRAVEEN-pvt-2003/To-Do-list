const user=[
    {id:3,name:"charlie",Age:28},
    {id:1,name:"alice",Age:25},
    {id:2,name:"bob",Age:32}
];

let aplha = user.map(u=> `${u.name} is ${u.Age} years old`);
console.log(aplha);

const result = user.filter(u => u.Age >= 28);
console.log(result);

user.sort ((a , b )=>a.name.localeCompare(b.name))
console.log(user);
