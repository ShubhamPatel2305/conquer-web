function test(fn: (a:number, b:number) => number , a:number, b:number){
    return fn(a,b);
}

function sum(a:number, b:number):number{
    return a + b;
}

console.log(test(sum,5,4));