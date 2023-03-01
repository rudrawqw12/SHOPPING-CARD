function phoneCaseTextTotal(elementId){
    const phoneCaseTotal = document.getElementById(elementId);
    const phoneCaseTotalString = phoneCaseTotal.innerText;
    const phoneCaseTotalAmount = parseInt(phoneCaseTotalString);
    return phoneCaseTotalAmount;

}
function setTextValueById(elementId,value){
    const SubTotalElement =document.getElementById(elementId);
    SubTotalElement.innerText = value;

  
}

function calculateSubTotal(){

    const currentPhoneTotal = phoneCaseTextTotal('phone-total');
    const currentCaseTotal = phoneCaseTextTotal('case-total');
    const currentSubTotal = currentCaseTotal+currentPhoneTotal;
    
    
    setTextValueById('subtotal',currentSubTotal);

    const taxAmount =currentSubTotal*0.1;
    setTextValueById('tax-amount',taxAmount);

    const finalAmount = currentSubTotal +taxAmount;
    setTextValueById('final-total',finalAmount);

 

} 

