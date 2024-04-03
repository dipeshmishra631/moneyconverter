function def()
{   
    let optn1 = document.getElementById("selectTop").value
    let optn2 = document.getElementById("selectDown").value
    let input = Number(document.getElementById("input").value)
    let Same = input
    let inrtoeur = input*0.011
    let inrtousd = input*0.012
    let eurotoinr = input*89.43
    let eurotousd = input*1.07
    let usdtoinr = input*83.4
    let usdtoeuro = input*0.95
    
    if(optn1=="INR")
    {
        if(optn2=="INR")
        {
            document.getElementById("output").value = Same
        }
        else if(optn2=="EUR")
        {
            document.getElementById("output").value = inrtoeur

        }
        else if(optn2=="USD")
        {
            document.getElementById("output").value = inrtousd

        }
        
    }
    else if(optn1=="EUR")
    {
        if(optn2=="EUR")
        {
            document.getElementById("output").value= Same
        }
        else if(optn2=="INR")
        {
            document.getElementById("output").value= eurotoinr 
        }
        else if (optn2=="USD")
        {
            document.getElementById("output").value= eurotousd
        }
      
    }
    else if(optn1=="USD")
    {
        if(optn2=="USD")
        {
            document.getElementById("output").value = Same
        }
        else if(optn2=="INR")
        {
            document.getElementById("output").value = usdtoinr
        }
        else if(optn2=="EUR")
        {
            document.getElementById("output").value = usdtoeuro
        }
    }

}


