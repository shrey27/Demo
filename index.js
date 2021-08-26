let bill = document.getElementById('bill');
let cash = document.getElementById('cash');
let change = document.getElementById('change');
let billbtn = document.getElementById('bill-btn');
//let cashbtn = document.getElementById('cash-btn');
let billerror = document.getElementById('bill-error');
let casherror = document.getElementById('cash-error');
let billAmount = document.querySelector('#bill-input');
let cashAmt = document.querySelector('#cash-input');
let notesClass = document.querySelectorAll('.no-of-notes');
let notes = [2000,500,100,50,20,10,5,1];

function showCash(){
    
    if(billAmount.value>0){
        billbtn.classList.toggle("removeBtn");
        cash.classList.toggle("showBlock");
        //billerror.style.display = 'none';
        billerror.classList.toggle('showBlock',false);
    }
    else{
        //billerror.style.display = 'block';
        billerror.classList.toggle('showBlock',true);
    }
}

function getChange(){
    let cashAmount = cashAmt.value;
    
    if(cashAmount>0 && cashAmount>billAmount.value){
        //casherror.style.display = 'none';
       let i = 0;
       let balance = cashAmount - billAmount.value;

       for(let i=0; i<notesClass.length; i++){
            const numberOfNotes = Math.trunc(balance/notes[i]);
            balance = balance%notes[i];
            notesClass[i].innerText = numberOfNotes>0 ? numberOfNotes : '';
       }
        casherror.classList.toggle("showBlock",false);
        change.classList.toggle("showBlock",true);
    }
    else{
        //casherror.style.display = 'block';
        casherror.classList.toggle("showBlock",true);
        change.classList.toggle("showBlock",false);
    }
}