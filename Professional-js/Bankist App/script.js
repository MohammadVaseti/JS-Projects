'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// implementing Dates
// fake always logged in

// creating dome elements

const calcDisplayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // sorting arrays
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i, arr) {
    let type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
    <div class="movements__value">${mov.toFixed(2)}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// calcDisplayMovements(account1.movements);
// //////////////////////////////////////////////////////end

// computing usernames

// how to create username
// const username = 'Steven Thomas Williams';
// const newUserName = username
//   .toLowerCase()
//   .split(' ')
//   .map(function (e, i, arr) {
//     return e.at(0);
//   })
//   .join('');
// console.log(newUserName);
// Steven Thomas Williams=====stw
const createUserName = function (accs) {
  accs.forEach(function (acc, i, arr) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((e, i, arr) => e.at(0))
      .join('');
  });
};
// console.log(createUserName(accounts));
createUserName(accounts);
// console.log(accounts);
// /////////////////////////////////////end

// the reduce method
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, v) => acc + v, 0);

  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};
// calcDisplayBalance(account3.movements);

// //////////////////////////////////////////////end
//  the magic of chaining

const calcDisplaySummary = function (acc) {
  // incomes
  const incomes = acc.movements
    .filter((v, i, arr) => v > 0)
    .reduce((acc, v, i, arr) => acc + v, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  // outcomes
  const out = acc.movements
    .filter((v, i, arr) => v < 0)
    .reduce((acc, v, i, arr) => acc + v, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  // interest
  const interest = acc.movements
    .filter((v, i, arr) => v > 0)
    .map((v, i, arr) => (v * `${acc.interestRate}`) / 100)
    .filter((v, i, arr) => v > 1)
    .reduce((acc, v, i, arr) => acc + v, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
// calcDisplaySummary(account1.movements);
// ///////////////////

// update ui function for implelementing transfer video

const updateUI = function (acc) {
  // display movements
  calcDisplayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// Implementing Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('click');
  currentAccount = accounts.find(
    el => el.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // console.log('login');
    // display UI
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner
      .split(' ')
      .at(0)} ❤`;
    updateUI(currentAccount);
  }
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
});

/////////////////////////////////////////////////

// Implementing Transfers

btnTransfer.addEventListener('click', e => {
  e.preventDefault(e);
  const amount = +inputTransferAmount.value;
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, recieverAcc);
  inputTransferTo.value = ' ';
  inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

// ////////////////////

// some and every

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('clicked');
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ' ';
});

// the findIndex method

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('delete');
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);
    // delete account
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = ' ';
  inputClosePin.value = ' ';
  inputClosePin.blur();
});

// sorting arrays
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  calcDisplayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// Date and number Season
// datas

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-05-27T17:01:17.194Z',
//     '2020-07-11T23:36:17.929Z',
//     '2020-07-12T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// const accounts = [account1, account2];

// remainder operator

labelBalance.addEventListener('click', e => {
  [
    ...document.querySelectorAll('.movements__row').forEach(function (v, i) {
      if (i % 2 === 0) {
        v.style.backgroundColor = 'red';
      } else if (i % 2 === 1) {
        v.style.backgroundColor = 'blue';
      }
    }),
  ];
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
