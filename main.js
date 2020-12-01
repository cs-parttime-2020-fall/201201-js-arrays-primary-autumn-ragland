console.log("20 12 01 JS Arrays Primary Linked"); // check that files are linked

// EX 1 : creating array and outputting length
let authors = ["Agatha Christie", "Toni Morrison", "Sylvia Plath", "Octavia E. Butler", "Maya Angelou","Mary Shelly"]; // declare array with 6 elements
console.log(authors); // output the array
console.log(`There are currently ${authors.length} authors in the list of famous authors.`); // output length in formatted message

// EX 2 : prompt for index and return author
let userIndex = prompt("Enter an index position"); // prompt user
if(userIndex < authors.length){ // if user response is less than length
   console.log(`The author at index position ${userIndex} is ${authors[userIndex]}`); 
} else { // if user response is equal to or greater than our length
    console.log(`${userIndex} is out of range`);
}

// EX 3 : lookup by index position and add if not found
let userAuthor = prompt("Enter an author"); // prompt user
if(authors.indexOf(userAuthor) > -1){ // if index of returns valid index
    console.log(`${userAuthor} is at index position ${authors.indexOf(userAuthor)}`);
} else { // if index os returns -1
    authors.push(userAuthor); // add author
    console.log(`${userAuthor} is not in the famous author array. ${userAuthor} has been added at index position ${authors.indexOf(userAuthor)}`);
    console.log(authors); // output updated array
}

// Bonus 1 : add to beginning of array
authors.unshift("Audre Lorde");
console.log("--------------- Added Audre Lorde ---------------");
console.log(authors);

// Bonus 2 : replace element be index
authors[authors.indexOf("Agatha Christie")] = "Alice Walker";
console.log("--------------- Replaced Agatha Christie ---------------");
console.log(authors);

// Bonus 3 : remove element using splice
authors.splice(authors.indexOf("Sylvia Plath"), 1);
console.log("--------------- Removed Sylvia Plath ---------------");
console.log(authors);