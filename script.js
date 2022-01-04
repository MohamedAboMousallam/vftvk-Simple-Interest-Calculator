function compute()
{
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var p = document.getElementById("principal").value;
    var r = document.getElementById("Rates").value;
    var t = document.getElementById("Yearss").value;
    var A = p * (1+ r * t);
   document.getElementById("__message").innerHTML=`if you deposit ${p}, \n at interest rate ${r}. \n You will recieve an amount of ${A},\n in the year ${year + parseInt(t)}`; 
}

        