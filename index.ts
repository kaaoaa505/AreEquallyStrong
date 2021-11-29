function solve(yourLeft: number, yourRight: number, friendLeft: number, friendRight:  number): boolean{
    let result: boolean =  (yourLeft + yourRight) == (friendLeft + friendRight); 
    return result;
}

console.log(solve(10, 15, 15, 10)); // true
console.log(solve(15, 10, 15, 10)); // true
console.log(solve(15, 10, 15, 9)); // false
