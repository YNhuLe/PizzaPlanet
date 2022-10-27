//validation for the text filed
function validateText(){
    var isValid = true;

        var temp1 = document.getElementById("fname").value;
        if(temp1==""){
            document.getElementById("s1").innerHTML="First name is required";
            isValid=false;
        }else{
            document.getElementById("s1").innerHTML="*";
        }

        var temp2 = document.getElementById("lname").value;
        if(temp2==""){
            document.getElementById("s2").innerHTML="Last name is required";
            isValid=false;
        }else{
            document.getElementById("s2").innerHTML="*";
        }

        var temp3 = document.getElementById("phone").value;
        if(temp3==""){
            document.getElementById("s3").innerHTML="Phone number is required";
            isValid=false;
        }else{
            document.getElementById("s3").innerHTML="*";
        }

}
    var price;
    var subTotal;

    var drinkPrice;
     var tax;
    var grandTotal;

function check(){
    if (document.getElementById("veggie").checked  ) {
        if(document.getElementById("s").checked){
          
            document.getElementById("bill").innerHTML = 10;
         
            var price = 10;
         
        }else if(document.getElementById("m").checked){
            document.getElementById("bill").innerHTML = 12;
            var price = 12;
           
        }else if( document.getElementById("l").checked){
            document.getElementById("bill").innerHTML = 14;
        var price = 14;
        }
       

  }else if(document.getElementById('pep').checked){
    if(document.getElementById("s").checked){
          
         document.getElementById("bill").innerHTML = 20;
       var price =20;
      }else if(document.getElementById("m").checked){
          document.getElementById("bill").innerHTML = 22;
         var price = 22;

      }else if( document.getElementById("l").checked){
          document.getElementById("bill").innerHTML = 24;
      var price =24;
      }

    }else if(document.getElementById('ch').checked){
     if(document.getElementById("s").checked){
          
          document.getElementById("bill").innerHTML = 30;
       var price = 30;

      }else if(document.getElementById("m").checked){
          document.getElementById("bill").innerHTML = 32;
         var price = 32;
      }else if( document.getElementById("l").checked){
          document.getElementById("bill").innerHTML = 34;
      var price = 34;
      }
    }

    //drink
    
var e = document.getElementById("drinkOption");
var selectedDrink = e.options[e.selectedIndex].value;
if(selectedDrink=="0"){
    document.getElementById("drink").innerHTML = 0;
    var drinkPrice =0;
   
}else{
    document.getElementById("drink").innerHTML = 2;
    var drinkPrice=2;
   

 }
  

//subtotal before tax
var subTotal;
subTotal=price + drinkPrice;
document.getElementById("sub").innerHTML = subTotal;



    //calculate tax
 
tax =subTotal*0.13;
tax=Math.round(tax*100)/100;
document.getElementById("tax").innerHTML=tax;

   //calculate grand total

   
grandTotal = subTotal*1.13;
 grandTotal = Math.round(grandTotal*100)/100;
document.getElementById("grand").innerHTML=grandTotal;
}

