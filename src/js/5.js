// function foo (a, b, c, ...args){
//     console.log(args)
// }



// foo(1,2,3,4,5)
const friends = [
    {name: "Joey", age: "22", online: false},
    {name: "Ivan", age: "23", online: true},
    {name: "Andrew", age: "24", online: false},
]

// function findByName(allFriends, friendName){
//     for (const friend of allFriends){
//         if(friend.name.toLowerCase() === friendName.toLowerCase()){
//             return friend;
//         }
//         return "Not found"
        
//     }
// }

// console.log(findByName(friends, "Joey"))

// function getAllNames(arr) {
//     const names = [];
//     for(const item of arr){
//         names.push(item.name);
//     }
//     return names;
// }

// console.log(getAllNames(friends))


// function getOnlineFriens(arr) {
//     const onlineFriends = [];

//     for(const friend of arr){
//         if(friend.online){
//             onlineFriends.push(friend.name);
//         }
//     }
//     return onlineFriends;
// }

// console.log(getOnlineFriens(friends));

// const stones = [
//     {name: "Брил", price: "22", quantity: 2},
//     {name: "Смарагд", price: "23", quantity: 3},
//     {name: "Діамант", price: "24", quantity: 4},
// ]

// function calcTotalPrice(stones, stoneName) {
//     let sum = 0;

//     for (const item of stones){
//         if(item.name === stoneName){
//             sum+=item.price*item.quantity;
//         }
//     }
// }

// console.log(calcTotalPrice(stones, "Брил"))



// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     changeName(newName) {
//         console.log("this", this)
        
//         this.name = newName
//     }
// }



// const sportPlaylist = {
//     name: "Sport playlist",
//     rating: 4,
// }


// sportPlaylist.changeSportName = playlist.changeName;



// sportPlaylist.changeSportName("Angry playlist");

// console.log(sportPlaylist)


// function name(...rest) {
//     console.log(a,b,c)
// }
// name(20,90)
// name(30,90,80)


// const lastWeek1 = [1,2,3];
// const currentWeek1 = [4,5,6];

// let allTemps = [...lastWeek1, ...currentWeek1];

// console.log(allTemps)


// const objA = {x: 1, y: 2}
// const objB = {x: 0, q: 2}

// const objC = {
//     x:10,
//     ...objA,
//     y: 20,
//     ...objB
// }

// console.log(objC)

const defalult = {
    theme: "Light",
    hideSidebar: false,
}
const userSettings = {
    theme: "Dark"
}
const finalSettings = {
    ...defalult,
    ...userSettings,

}
const Transaction ={
    DEPOSITE: 'deposite',
    WITHDRAW: 'withdraw',
}


const account = {
  
    balance: 0,
    transactions: [],


creatTransaction(amount, type){
    const obj = {id: amount, amount,type}
    return obj;
},
deposite(amount){
    this.balance+=amount;
    const transaction = this.creatTransaction(amount, Transaction.DEPOSITE)
    this.transactions.push(transaction)
},
withdraw(amount){
    if(this.balance<amount){
        console.log("not ena")
        return
    }
    this.balance -= amount;
    const transaction = this.creatTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
},
getBalanse(){
    return this.balance;
},
getTransactionDetails(id){
    for(const item of this.transactions){
        if(item.id ===id){
            return item;
        }
    }
    return "Not found";
},
getTransactionTotal(type){
    let total = 0;
    for(const item of this.transactions){
        if(item.type === type){

        }
    }
    return total;
}

}


account.deposite(300)
account.deposite(100)
console.log(account)