var purchase2={
   shoes:60,
   stateTax:1.2,
   totalPrice : function(){
    var toPay=this.shoes*this.stateTax
    console.log(toPay)
   } 
}
purchase2.totalPrice()