// challenge: determine if a string is a palindrome

function isPalindrome(str){
    // use regex to remove all non-word characters
    var stringWithoutSpecialCharacters = str.replace(/\W/g, '');
    // turn string into lower case 
    var caseInsensitiveString = stringWithoutSpecialCharacters.toLowerCase();
    // reverse string with built in functions and assign to new variable 'reverseString'
    var reverseString = caseInsensitiveString.split(' ').reverse().join('');
    // return boolean as to whether our original string without special characters and case 
    // insensitive is equal to reversed string
    return caseInsensitiveString === reverseString;
    }
    
    console.log(isPalindrome('Eva, can I Stab Bats In a Cave?'))
    console.log(isPalindrome('Was it A rat I saw?'))