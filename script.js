document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather form data
    String name = document.getElementById('name').value;
    String email = document.getElementById('email').value;
    String message = document.getElementById('message').value;

    // Display a confirmation message
    String userName = input;
    int len = userName.length();
    String bbd = userName.substring(len-6,len);
    userName = userName.substring(2,len-8);
    int indexSCCCPN = userName.indexOf("2400000000000000");
    String SSCC = userName.substring(0,indexSCCCPN);
    userName = userName.substring(indexSCCCPN+16);
    String PN = userName.substring(0,5);
    userName = userName.substring(5);
    if (!userName.substring(0,2).equalsIgnoreCase("10")){
        int indexPNBatch = userName.indexOf("10");
        String PNremainder = userName.substring(0,indexPNBatch);
        PN = PN + PNremainder;
        userName = userName.substring(indexPNBatch+2);
    }
    else{
        userName = userName.substring(2);
    }
    String batch = userName;
    String refactoring = "]d" + SSCC + "240" + PN + "~10" + batch + "~17" + bbd;
    confirmationMessage.textContent = `Thank you, ${refactoring}! We have received your message.`;

    // Reset the form
    form.reset();
  });
});