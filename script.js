document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

//    // Gather form data
//    const userName = document.getElementById('name').value;
//    const email = document.getElementById('email').value;
//    const message = document.getElementById('message').value;
//
//    // Display a confirmation message
//    const bbd = userName.slice(-6);
//    userName = userName.slice(2,-8);
//    int indexSCCCPN = userName.indexOf("2400000000000000");
//    const SSCC = userName.slice(0,indexSCCCPN);
//    userName = userName.slice(indexSCCCPN+16);
//    String PN = userName.slice(0,5);
//    userName = userName.slice(5);
//    if (!userName.slice(0,2).localeCompare("10")){
//        int indexPNBatch = userName.indexOf("10");
//        const PNremainder = userName.slice(0,indexPNBatch);
//        PN = PN + PNremainder;
//        userName = userName.slice(indexPNBatch+2);
//    }
//    else{
//        userName = userName.slice(2);
//    }
//    const batch = userName;
//    const refactoring = "]d" + SSCC + "240" + PN + "~10" + batch + "~17" + bbd;
//    confirmationMessage.textContent = `Thank you, ${refactoring}! We have received your message.`;

    // Gather form data
    const PN = document.getElementById('PN').value;
    const batch = document.getElementById('Batch').value;
    const BBD = document.getElementById('BBD').value;
    const SSCC = document.getElementById('SSCC').value;

    // Display a confirmation message
    let zeros = 19 - PN.length
    confirmationMessage.textContent = `]d200${SSCC}24`
    for (int i = 0; i < zeros; i++) {
      confirmationMessage.textContent = `0`
    }
    confirmationMessage.textContent = `${PN}~10${batch}~17${BBD}`;


    // Reset the form
    form.reset();
  });
});