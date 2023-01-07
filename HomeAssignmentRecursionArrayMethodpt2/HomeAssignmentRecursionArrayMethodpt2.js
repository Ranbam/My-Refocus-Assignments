let InvoiceList = ['Invoice 008','Invoice 007','Invoice 006','Invoice 005'];
function insertToBottom(invoiceCount){
  if (invoiceCount > 0 ){
    InvoiceList.push(`Invoice 00${invoiceCount}`);
    insertToBottom(invoiceCount -1);
  }
}
function reverseList(){
  InvoiceList.reverse();
}


console.log(InvoiceList.join(''));
insertToBottom(4);
console.log(InvoiceList.join(''));
reverseList();
console.log(InvoiceList.join(''));