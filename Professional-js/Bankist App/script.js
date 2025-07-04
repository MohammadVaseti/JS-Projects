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
// creating dome elements

const calcDisplayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i, arr) {
    let type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
    <div class="movements__value">${mov}</div>
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

  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account3.movements);

// //////////////////////////////////////////////end
//  the magic of chaining

const calcDisplaySummary = function (acc) {
  // incomes
  const incomes = acc.movements
    .filter((v, i, arr) => v > 0)
    .reduce((acc, v, i, arr) => acc + v, 0);
  labelSumIn.textContent = `${incomes}€`;
  // outcomes
  const out = acc.movements
    .filter((v, i, arr) => v < 0)
    .reduce((acc, v, i, arr) => acc + v, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  // interest
  const interest = acc.movements
    .filter((v, i, arr) => v > 0)
    .map((v, i, arr) => (v * `${acc.interestRate}`) / 100)
    .filter((v, i, arr) => v > 1)
    .reduce((acc, v, i, arr) => acc + v, 0);
  labelSumInterest.textContent = `${interest}€`;
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

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
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
  const amount = Number(inputTransferAmount.value);
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

// the findIndex method

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('delete');
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
