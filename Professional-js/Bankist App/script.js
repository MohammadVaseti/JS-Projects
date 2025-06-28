// BANKIST APP
'use strict';

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// LECTURES

// creating DOM elements
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i, arr) {
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${
            mov > 0 ? 'deposit' : 'withdrawal'
          }">${i + 1} ${mov > 0 ? 'deposit' : 'withdrawal'}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// ////////////////////
// computing usernames
// Steven Thomas Williams stw
const createUserNames = function (accs) {
  // console.log(accs);
  accs.forEach(function (v, i, arr) {
    v.username = v.owner
      .toLowerCase()
      .split(' ')
      .map(function (cv, i, arr) {
        return cv.at(0);
      })
      .join('');
  });
};
createUserNames(accounts);

//////////////////

// in out balance
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = function (arr) {
  return arr.reduce(function (acc, v, i) {
    return acc + v;
  }, 0);
};

const incomes = function (arr) {
  return arr
    .filter(function (v, i, arr) {
      return v > 0;
    })
    .reduce(function (acc, v, i, arr) {
      return acc + v;
    }, 0);
};

const out = function (arr) {
  return arr
    .filter(function (v, i, arr) {
      return v < 0;
    })
    .reduce(function (acc, v, i, arr) {
      return acc + v;
    }, 0);
};

const interest = function (arr) {
  return arr
    .filter(function (v, i, arr) {
      return v > 0;
    })
    .map(function (v, i, arr) {
      return (v * 1.2) / 100;
    })
    .filter(function (v, i, arr) {
      return v >= 1;
    })
    .reduce(function (acc, v, i, arr) {
      return acc + v;
    }, 0);
};

// //////////////////////////

// implementing login

let currenAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currenAccount = accounts.find(function (v) {
    if (
      v.username == inputLoginUsername.value &&
      v.pin == inputLoginPin.value
    ) {
      labelWelcome.textContent = `Welcome ${v.owner}`;
      displayMovements(v.movements);
      containerApp.style.opacity = 100;
      labelBalance.textContent = balance(v.movements);
      labelSumIn.textContent = incomes(v.movements);
      labelSumOut.textContent = Math.abs(out(v.movements));
      labelSumInterest.textContent = Math.round(interest(v.movements));
    }
  });

  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputLoginPin.blur();
});
/////////////////////////////////////////////////
////////////////////
