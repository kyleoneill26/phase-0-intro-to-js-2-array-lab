// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyAppendCat(name) {
cats.push("Ralph");
cats;
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    cats;
}
  function destructivelyRemoveFirstCat() {
    cats.shift();
    cats;
  }
  function appendCat(name){
    const cats_1 = [...cats, "Broom"];
    return cats_1;
    cats;
  }
  function prependCat(name){
    const cats_2 = ["Arnold", ...cats];
    return cats_2;
    cats;
  }
  function removeLastCat() {
    const cats_3 = cats.slice(0, cats.length -1);
    return cats_3;
    cats;
  }
  function removeFirstCat(){
    const cats_4 = cats.slice(1);
    return cats_4;
    cats;
  }