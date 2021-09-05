// function for calculating SI and printing message
function compute()
{
    const principal = document.getElementById("principal").value;
    if (principal == "" || principal <= 0) // positive condition check
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    const interest = parseInt((principal * years * rate) /100); // SI calculation 
    const amount = parseInt(interest) + parseInt(principal); // Total amount

    var year = new Date().getFullYear() + parseInt(years); // total Year adding current date
    
    var result = document.getElementById("result");

    result.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "%</span>." + "<br> You will receive an amount of " + "<span class='highlight'>" + amount + "</span>" + ", <br> in the year " + "<span class='highlight'>" + year + "</span>";
}
        
function updateRate()    
{
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = rateval.value; // Display the default rate value

    // Update the current value (each time you drag the handle)
    rateval.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
} 