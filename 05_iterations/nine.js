conse.log(`acc:${acc} and currval:${currv}`);
// return acc+currv
//},0)

const myTotal = myNums.reduce((acc, currv) => acc + currv, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
//const myTotal=myNums.reduce(function(acc,currv){
//  console.log(myTotal);




