function oczekujPieniedzy(ilosc) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let czyDostane = Math.random() >= 0.5;
      if (czyDostane)
        resolve(ilosc);
      else
        reject('Nie dostałem pieniędzy');
    }, 1000);
  });
}

function uczSieKursu() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let czyMiWejdzie = Math.random() >= 0.5;
      if (czyMiWejdzie)
        resolve('Nauczyłem się :)');
      else
        reject('Ten kurs jest za trudny :(');
    }, 1000);
  });
}

function zaaplikujDoPracy() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let czyDostanePrace = Math.random() >= 0.5;
      if (czyDostanePrace)
        resolve('Dostałem pracę!');
      else
        reject('Nie przyjęli mnie do pracy...');
    }, 1000);
  });
}

oczekujPieniedzy(100)
  .then(pieniadze => console.log(`Dostałem ${pieniadze} zł, więc kupiłem kurs.`))
  .then(uczSieKursu)
  .then(console.log)
  .then(zaaplikujDoPracy)
  .then(console.log)
  .catch(console.error);

console.log('Sprzątam w pokoju');
console.log('Gotuję obiad');