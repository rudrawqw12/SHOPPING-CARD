function updatePhoneNumber(isIncrease){
    const phoneNumberField =document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNUmber =parseInt(phoneNumberFieldString);

    let newPhoneNumber;

    if(isIncrease == true){
        newPhoneNumber =previousPhoneNUmber+1;
    }
    else{
        newPhoneNumber =previousPhoneNUmber-1;
    }

    phoneNumberField.value =newPhoneNumber;
    return newPhoneNumber;

}


function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber*1219;
    const phoneTotalElement =document.getElementById('phone-total');
    phoneTotalElement.innerText =phoneTotalPrice;

}


// // extra for bujhar jonno jeita common js eo same 


// function phoneOrCaseTextTotal(elementId){
//     const phoneCaseTotal = document.getElementById(elementId);
//     const phoneCaseTotalString = phoneCaseTotal.innerText;
//     const phoneCaseTotalAmount = parseInt(phoneCaseTotalString);
//     return phoneCaseTotalAmount;

// }


// function calculateSubTotal(){

//     const currentPhoneTotal = phoneOrCaseTextTotal('phone-total');
//     const currentCaseTotal = phoneOrCaseTextTotal('case-total');
//     const currentSubTotal = currentCaseTotal+currentPhoneTotal;


//     const subTotal=document.getElementById('subtotal');
//     subTotal.innerText =currentSubTotal; 

// }

// ekhanei eta sesh 



document.getElementById('btn-plus').addEventListener('click',function(){

    const newPhoneNumber =updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal()

    
    


    
    
})

document.getElementById('btn-minus').addEventListener('click',function(){

    const newPhoneNumber =updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal()

})