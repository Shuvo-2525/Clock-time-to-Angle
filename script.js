
let submitButton = document.getElementById("button")
submitButton.addEventListener("click", mathFunction);



 
function mathFunction() {
    let hourStr = document.getElementById("hour").value;
    let minStr = document.getElementById("min").value;

    let hour = parseInt(hourStr) ;
    let min = parseInt(minStr)
if ( hourStr == "" || minStr == "" ) {
    alert("Please Enter Both Hour & Min Value")
}
else {
    let primaryHour = hour * 5 ;
    let seconderyHour = ( ( 5 * min ) / 60 ) ;

    let mainhour = ( primaryHour + seconderyHour ) ;

    let defferenceBetweenMinAndHour = ( mainhour - min ) ;

    let angle = defferenceBetweenMinAndHour * 6 ;

    document.getElementById("res").innerText = angle ;

    let clrBtn = document.getElementById("clrBtn")
    clrBtn.addEventListener("click", clrFunction);

function clrFunction() {
    document.getElementById("hour").value = "";
    document.getElementById("min").value = "";
    document.getElementById("res").innerText = ""
}


    // console.log(document.getElementById("res").innerText) ;
}
}