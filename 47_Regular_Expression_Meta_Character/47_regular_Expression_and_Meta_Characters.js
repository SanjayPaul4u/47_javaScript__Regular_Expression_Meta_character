console.log("Today we will be learn meta characters in regular expression.");

let regularExpression = /sanjay/; //this is call 'regular expression literal'.
//LETS LOOK INTO SOME META CHARACTER SYMBOL.
    regularExpression = /^sanjay/; //means expression will match if string starts with.
    regularExpression = /paul $/; //$ at the end of the stirng means "Stirng Ends With".
    regularExpression = /n.me/; // matches any one character
    regularExpression = /n*me/; // matches any 0 or more characters character
    regularExpression = /sa?njayi?/; //? after character means that character is optional.
    regularExpression = /s\*njay/;// back slace(\) call escape character


let string = "s*njay";

// USE exec()
let result = regularExpression.exec(string);
console.log(result);

//USE test()
if (regularExpression.test(string)){
    console.log(`-> The string "${string}" MATCHES the expression "${regularExpression.source}"`);
}
else{
    console.log(`-> The string "${string}" DOES NOT MATCH the expression "${regularExpression.source}"`);
}