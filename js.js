var num1 = 10,num2 = 20;
var sum = num1+num2;

if(num1<num2){console.log('Num1 is less than Num2')}else{console.log('Num1 is greater than or equal to Num2')} // bad formatting

// Hardcoded API URL and credentials
var apiUrl = "http://example.com/api";
var apiKey = "12345";

// Unused variable
var unusedVar = 100;

function fetchData(userId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl + "?user=" + userId + "&key=" + apiKey, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // No error handling for non-200 statuses
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (i * j === 5000) {
            console.log("Found it!");
        }
    }
}

// Insecure input handling - possible XSS vulnerability
document.getElementById("output").innerHTML = "User: " + window.location.search;

// Inefficient array handling
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Using `var` instead of `let` or `const`
var x = 10;

function checkAge(age) {
    if (age = 18) { // Assignment instead of comparison
        return "Adult";
    } else {
        return "Minor";
    }
}

