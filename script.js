function calculateLoan(){
    var loan, term;
    var totalRepayment, choosenTerm;

    loan = document.getElementById('txtLoanAmount').value;
    var list = document.getElementById('listTerm');

    term = list.options[list.selectedIndex].value;

    
    if(term == 12){
        totalRepayment = loan*1.1;
    } else if(term == 24){
        totalRepayment = loan*1.2;
    }else if(term == 36){
        totalRepayment = loan*1.3;
    }else if(term == 48){
        totalRepayment = loan*1.4;
    }

    choosenTerm = totalRepayment/term;

    document.querySelector('#calculation').innerHTML=("Total Credit Repayment: "+totalRepayment+" <br> Monthly Repayment: "+choosenTerm.toFixed(2)+"")
}   


