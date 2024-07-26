// CHAPTER-17: Arrays: removing-inserting-extracting-elements

// const animale = ["dog","cat","rat","snack"];


// question from last lectures
// animale.push("horse");
// let popped = animale.pop();
// animale.push("elephant");
// popped = animale.pop();

// console.log(animale);
// console.log(popped);

// shipt, removes one elemnt from start of the array
// const animale = ["dog","cat","rat","snack"];
// animale.shift();
// console.log(animale);

// containg the shifted element
// const shiftedElement = animale.shift();
// console.log(shiftedElement);

// unshift adds one element to the start of the array
// animale.unshift("camel");
// console.log(animale);

// exam-question(shift, unshift, push, pop)
// const animale = ["dog","cat","rat","snack"];
// animale.push("horse");
// const shiftedanimale = animale.shift();
// animale.pop();
// animale.unshift("elephant");
// console.log({animale,shiftedanimale});

// splice,add-repalce-remove
// const animale = ["dog","cat","rat","snack"];

// // add 2 animals at index 2 without removing any animale(example)
// animale.splice(2,0,"tiger");
// console.log(animale);

// // add 2 animals at index 2 by removing 1 animale(example)
// animale.splice(2,1,"rabbit","goat","sheep");
// console.log(animale);

// // add 2 animals at index 2 by removing 2 animals (example)
// animale.splice(2,2,"horse","donkey");
// console.log(animale);

// mdn website example 
// const months = ["Jan","March","April","June"];
// months.splice(1,0,"Feb");
// console.log(months);
// months.splice(4,1,"May");
// console.log(months);

//example from book example
// const animale = ["dog","cat","rat","snack"];

// // first argument : 2, where should be the elemnts inserted 
// // sescond argument : 2, how many things do i need to remove
// // and which elemnts do we need to be add
// animale.splice(2,2,"rabbit","sheep");
// console.log({animale});

// pop vs splice, return type
// const animals = ["dog","cat","rat","snack"];
// const spliced = animals.splice(2,1);
// const popped = animals.pop();

// // console.log(spliced);
// // console.log(popped);
// // console.log(animals);

// // practice question
// spliced.push("test");
// console.log(spliced);

// // practice question
// popped.push("test");
// console.log(popped);

// slice
// const animals = ["dog","cat","rat","snack"];
// const slicedarrray = animals.slice(2,4);
// console.log(slicedarrray);

// splice vs slice
// slice
// const animals = ["dog","cat","rat","snack"];
// const slicedarrray = animals.slice(2,4);
// console.log({animals,slicedarrray});
// splice
// const animals = ["dog","cat","rat","snack"];
// const splicedarrray = animals.splice(2,2);
// console.log({animals,splicedarrray});

// splice: changing the original array
// slice: not changing the original array

// const animals = ["dog","cat","rat","snack","horse"];
// const sliced = animals.slice(2);
// console.log({animals,sliced});

// const animals = ["dog","cat","rat","snack","horse"];
// const spliced = animals.splice(2);
// console.log({animals,spliced});




