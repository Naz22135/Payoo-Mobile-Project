// loginn button functionality
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault()

    const mobileNumber = 17429784580
    const pinNumber = 2020

    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConvert = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumbervalueConvert = parseInt(pinNumberValue)

    if (mobileNumberValueConvert === mobileNumber && pinNumbervalueConvert === pinNumber) {
        window.location.href = './home.html'
    }
    else {
        alert('Invalid credentials')
    }




})