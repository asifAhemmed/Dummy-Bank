document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositValueString = depositField.value;
    const depositValue = parseFloat(depositValueString);

    const deposit = document.getElementById('deposit-amount');
    const depositAmountString = deposit.innerText;
    const depositAmount = parseFloat(depositAmountString);
    
    const totalDeposit = depositAmount + depositValue;
    deposit.innerText = totalDeposit;

    const balance = document.getElementById('balance-amount');
    console.log(balance);
    const balanceAmountString = balance.innerText;
    console.log(balanceAmountString)
    const balanceAmount = parseFloat(balanceAmountString);
    console.log(balanceAmount)

    const totalBalance = depositValue + balanceAmount;
    balance.innerText = totalBalance;

    depositField.value = '';
})


document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString);

    withdrawField.value = '';
    if(isNaN(withdrawValue)){
        alert('Please enter a valid number.');
        return;
    }


    const withdraw = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdraw.innerText;
    const withdrawAmount = parseFloat(withdrawAmountString);
    
   

    const balance = document.getElementById('balance-amount');
    const balanceAmountString = balance.innerText;
    const balanceAmount = parseFloat(balanceAmountString);


    if(withdrawValue > balanceAmount) {
        alert("Insufficient Balance")
        return;
    }

    const totalWithdraw = withdrawAmount + withdrawValue;
    withdraw.innerText = totalWithdraw;

    const totalBalance =  balanceAmount  - withdrawValue;
    balance.innerText = totalBalance;

    
})