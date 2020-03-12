
function nameAsk(){
    var suitPrice = 500;
    var name = prompt("Please enter your customer name: ");
    var productNumber = prompt("How many suits would you like to order?");
    var price = productNumber * suitPrice;
    if (name.includes('a')){
        var price = price - 500;
        if (price < 0){
            var price = 0;
        }
    }
    if (name.includes('s')){
        var price = price + 200;
    }
    document.write("<h1>Your Price is:<h1>" + "$" +price);
}
