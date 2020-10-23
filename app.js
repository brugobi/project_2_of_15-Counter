// set init count
let count = 0;

// select value and buttons

const value = document.querySelector('#value'); // another way to select by Id
const btns = document.querySelectorAll('.btn'); // select all the buttons with btn class

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) { // e = event object
    const styles = e.currentTarget.classList; // select the class of the current target
    if (styles.contains('decrease')) { // if my class is decrease
      count--;
    } else if (styles.contains('increase')) {
      count++;
    }
    else {
      count = 0;
    }
    value.textContent = count;
  });
});
