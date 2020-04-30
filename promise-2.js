function zapytanie_1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Zapytanie pierwsze');
    }, Math.floor(Math.random() * 5000))
  });
}

function zapytanie_2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Zapytanie drugie');
    }, Math.floor(Math.random() * 5000))
  });
}

function zapytanie_3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Zapytanie trzecie');
    }, Math.floor(Math.random() * 5000))
  });
}

zapytanie_1()
  .then(console.log);
zapytanie_2()
  .then(console.log);
zapytanie_3()
  .then(console.log);