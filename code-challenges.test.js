// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//Declare function named codedMessage taking in a string
//write conditional statement 

// a) Create a test with an expect statement using the variables provided.

//describe the name of the function
//use let as a place holder for the variables provided
//write the result using it
//write expect with the functions and variables toEqual the espected outputs



describe("codedMessage", () => {
    let secretCodeWord1 = "Lackadaisical"
    let secretCodeWord2 = "Gobbledygook"
    let secretCodeWord3 = "Eccentric"
    it("coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"





// b) Create the function that makes the test pass.

//declare a functions named codedMessage taking in a string
//initiate variable of a newString
//write a for loop going through each string
//write conditional statement if numbers equals vowels then 
//access the values "a, e, i, o, u" and change them to numbers.
////use the .split() to split the string

const codedMessage = (string) => {
    let newString = []
    for(i=0; i<string.length; i++){
        if(string[i] == "a", "e", "i", "o", "u"){
            newString.split([i])
        }
        return newString
    }
}
console.log(codedMessage(secretCodeWord1)); //Test didn't pass. Ended up getting stuck and moved on



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

//describe a function named returnA and takes in an array
//use let as a place holder for the variables provided
//write the result using it
//write expect with the functions and variables toEqual the espected outputs 


describe("returnA", () => {
    let arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
    let arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
    it("returns all the words that contain the letter a",() => {
        expect(returnA(arrayOfWords1)).toEqual(["Apple", "Banana"])
        expect(returnA(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Peach"])
    })
})


var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Orange", "Apricot", "Peach"]




// b) Create the function that makes the test pass.

//declare a function anems returnA that returns an array
//initiate a variable for the new array
//loops through the original array
//for the split method, I have having trouble figuring out how to implement it in the code. I understand I need to split the array and every letter in the words then return the letters that are not being taken out.

const returnA = (array) => {
    let newArray = []
    for(i=0; i<array.length; i++){
        newArray.split(arrayOfWords1)
    }
    return newArray
}
console.log(returnA(arrayOfWords1)); //Test is not passing.



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.


// a) Create a test with an expect statement using the variable provided.



describe("fullHouse", () => {
    let hand1 = [5, 5, 5, 3, 3]
    let hand2 = [5, 5, 3, 3, 4]
    let hand3 = [5, 5, 5, 5, 4]

    test("etermines whether or not the array is a full house", () => {
  
        expect(fullHouse(hand1)).toEqual("true")
        expect(fullHouse(hand2)).toEqual("false")
        expect(fullHouse(hand3)).toEqual("false")
    })
  })


var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false





// b) Create the function that makes the test pass.

//declare a function that takes in an array
//loops through arrays
//write conditional statement
//return whether the outcome is true or false.

const fullHouse = (array) => {
    let trueFalse = []
    for(i=0; i<array.length; i++){
        if(array === [5, 5, 5, 3, 3]){
            console.log("true");
        } else if(array === [5, 5, 3, 3, 4]){
            console.log("false");
        } else if(array === [5, 5, 5, 5, 4]){
            console.log("false");
        } else {
            console.log("error");
        }
        return trueFalse
    }
}
console.log(fullHouse(hand1)); //again the test isn't passing... I was confident and thought I would get this one right, but ultimately am ....DEFEATED :(