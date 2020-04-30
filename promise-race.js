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

Promise.race([zapytanie_1(), zapytanie_2(), zapytanie_3()])
  .then(console.log);