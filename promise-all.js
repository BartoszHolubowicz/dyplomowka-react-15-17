function zapytanie_1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Zapytanie pierwsze');
    }, Math.floor(Math.random() * 3000))
  });
}

function zapytanie_2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Zapytanie drugie');
    }, Math.floor(Math.random() * 3000))
  });
}

function zapytanie_3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Zapytanie trzecie');
    }, Math.floor(Math.random() * 3000))
  });
}

Promise.all([zapytanie_1(), zapytanie_2(), zapytanie_3()])
  .then(([res1, res2, res3]) => console.log(`Odebrałem wszystkie zapytania:\n${res1}\n${res2}\n${res3}`));