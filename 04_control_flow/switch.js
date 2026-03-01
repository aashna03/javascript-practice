// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

// trick of vs shift+alt+down arrow to duplicate line / block of code
// trick of vs shift+alt+down arrow to duplicate line / block of code

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break; // if there is no break statement, it will execute the next case as well, so it will print both "feb" and "march" to the console but not "default:", because when the switch statement matches the case "feb", it executes the code inside that case and then it continues to execute the next case "march" because there is no break statement after the case "feb", so it prints both "feb" and "march" to the console, so it is important to always add a break statement at the end of each case to prevent this from happening
    case "march":
        console.log("march");
        
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}