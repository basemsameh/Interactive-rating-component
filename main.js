let rates = document.querySelector('.rates').children;
let message = document.querySelector('.message');
let span = document.querySelector('span');
let submit = document.querySelector('#submit');
let main = document.querySelector('main');

Array.from(rates).forEach(ele => {
  ele.onclick = () => {
    Array.from(rates).forEach(e => {
      e.classList.remove('active');
    })
    ele.classList.add('active');
    span.textContent = ele.textContent;
  }
  submit.onclick = () => {
    message.style.display = 'block';
    main.style.display = 'none';
  }
})