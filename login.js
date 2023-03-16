let form = document.querySelector('.form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputEmail = document.querySelector('.input-email'),
  inputPassword = document.querySelector('.input-password');

var elem = document.querySelector('.form-box');


function validateEmail(email)
  {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let re1 = /[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{1,}(\.com|\.ru)$/;
    return re1.test(String(email).toLowerCase());
  }

form.onsubmit = function ()
  {
    let emailVal = inputEmail.value,
      passwordVal = inputPassword.value,
      emptyInputs = Array.from(formInputs).filter(input => input.value === '');
      
    formInputs.forEach(function (input ) {
      if (input.value === '') {
        elem.classList.add('error');
        
      }
      else
      {
        elem.classList.remove('error');
      }
      
    })

    if (emptyInputs.length !== 0) 
    {
      
      elem.classList.add('error');
      return false;
      }
    else
    {
      elem.classList.remove('error');
    }
    

    if (emailVal.length > 320)
    {
      alert('Email too big');
      elem.classList.add('error');
      return false;
    }
    else {
      elem.classList.remove('error');
    }

    if (passwordVal.length > 25)
    {
      alert('Password too big');
      elem.classList.add('error');
      return false;
    }
    else
    {
      elem.classList.remove('error');
    }

    if (passwordVal.length < 5)
    {
      alert('Password too small');
      elem.classList.add('error');
      return false;
    }
    else
    {
      elem.classList.remove('error');
    }

    if (!validateEmail(emailVal))
    {
      alert('Email invalid');
      elem.classList.add('error');
      return false;
    }
    else
    {
      elem.classList.remove('error');
    }
    
  }