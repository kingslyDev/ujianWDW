const eMoney = document.querySelector('.emoney');
const isBank = document.querySelector('.bank');
const eWallet = document.querySelector('.ewallet');
const isBanking = document.querySelector('.atm');
const MoneyArrow = eWallet.querySelector('.bi-caret-up');
const BankArrow = isBanking.querySelector('.bi-caret-up');

const toggleSwitch = (element, arrow) => {
  const hiddenElement = element.style.display === 'none' || element.style.display === '';
  if (hiddenElement) {
    arrow.classList.remove('bi-caret-up');
    arrow.classList.add('bi-caret-down');
    element.style.display = 'block';
  } else {
    arrow.classList.remove('bi-caret-down');
    arrow.classList.add('bi-caret-up');
    element.style.display = 'none';
  }
};

MoneyArrow.addEventListener('click', () => {
  toggleSwitch(eMoney, MoneyArrow);
});

BankArrow.addEventListener('click', () => {
  toggleSwitch(isBank, BankArrow);
});

// GOBACK
function goBack() {
  window.history.back();
}
