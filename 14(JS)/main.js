window.onload = function () {
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');
    let phoneInput = document.querySelector('#phone');
    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirmPassword');
    let passwordMatchSpan = document.querySelector('#passwordMatch');
    let btnEl = document.querySelector('#submitButton');

    // Перевірка пошти
    function validateEmail(email) {
        let reMail = /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/i;
        return reMail.test(String(email).toLowerCase());
    }

    // Перевірка номеру телефону
    function validatePhone(phone) {
        let rePhone = /^\+38 \d{3} \d{3} \d{4}$/;
        return rePhone.test(phone);
    }

    // Перевірка паролю
    function checkPassword(value) {
        let testPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,10}$/;
        return testPassword.test(value);
    }

    btnEl.onclick = function () {
        let inputValue = passwordInput.value;
        if (checkPassword(inputValue)) {
            alert('!!!!  Password valid !!!!!');
        } else {
            alert('invalid password');
        }
    };

    // Валідність форми і розблокування кнопки відправки даних
    function validateForm() {
        if (nameInput.validity.valid && emailInput.validity.valid && phoneInput.validity.valid && passwordInput.validity.valid && confirmPasswordInput.validity.valid && passwordInput.value === confirmPasswordInput.value) {
            btnEl.disabled = false;
        } else {
            btnEl.disabled = true;
        }
    }

    function validatePassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMatchSpan.textContent = 'Passwords do not match';
            btnEl.disabled = true;
        } else {
            passwordMatchSpan.textContent = '';
            validateForm();
        }
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);

    // Відміна очищення форми при введенні невірних даних

    function submitForm(event) {
        event.preventDefault();

        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let phone = document.querySelector('#phone').value;
        let password = document.querySelector('#password').value;
        let confirmPassword = document.querySelector('#confirmPassword').value;

        let isValidEmail = validateEmail(email);
        let isValidPhone = validatePhone(phone);
        let isValidPassword = checkPassword(password);
        let isValidConfirmPassword = password === confirmPassword;

        if (!isValidEmail || !isValidPhone || !isValidPassword || !isValidConfirmPassword) {
            if (!isValidEmail) {
                alert('Invalid email');
            }
            if (!isValidPhone) {
                alert('Invalid phone number');
            }
            if (!isValidPassword) {
                alert('Invalid password');
            }
            if (!isValidConfirmPassword) {
                alert('Passwords do not match');
            }
            return;
        }

        // Очищення полів після успішної перевірки і відправки
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#password').value = '';
        document.querySelector('#confirmPassword').value = '';

        alert('Data successfully sent');
    }

    let formEl = document.querySelector('#registrationForm');
    formEl.addEventListener('submit', submitForm);

}