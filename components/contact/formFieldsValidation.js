export function handleFormFieldsValidation (event) {
  const { name, validity } = event.target;
  
  if (validity.valueMissing) {
    switch (name) {
      case 'firstName':
        event.target.setCustomValidity('Molimo unesite Vaše ime.');
        break;
      case 'lastName':
        event.target.setCustomValidity('Molimo unesite Vaše prezime.');
        break;
      case 'email':
        event.target.setCustomValidity('Molimo unesite Vašu imejl adresu.');
        break;
      case 'message':
        event.target.setCustomValidity('Molimo napišite poruku.');
        break;
      default:
        event.target.setCustomValidity('Ovo polje je obavezno.');
        break;
    }
  } else if (name === 'email') {  
    const emailValue = event.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailValue)) {
      event.target.setCustomValidity('Molimo unesite ispravnu imejl adresu.');
    }
  }
};

export function handleInput (event) { 
  event.target.setCustomValidity('');
};

export function handleBlur(event) {
  const { validity, name, value } = event.target;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    event.target.setCustomValidity('Molimo unesite ispravnu imejl adresu.');
  }
}