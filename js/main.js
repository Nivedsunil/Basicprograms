//qstn 2
var userInput = prompt("Enter a message (e.g., 'Hello, World!'):");
document.getElementById('head').innerHTML=userInput;
//qstn array
var arr1 = ["PHP", "JAVA", "PYTHON"];
var arr2 = ["PHP", "RUBY", ".NET"];
var arr3 = ["ANGULAR", "JAVASCRIPT", "TYPSCRIPT"];
var arr4 = ["ECMASCRIPT", "JAVA", "PYTHON"];
var mergedArray = [...new Set([...arr1, ...arr2, ...arr3, ...arr4])];

console.log(mergedArray);

//qstn 3

function Sum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var op = document.getElementById('op').value;

    switch (op) {
        case '+':
            Display.value = num1 + num2;
            return false;
        case '-':
            Display.value = num1 - num2;
            return false;
        case '*':
            Display.value = num1 * num2;
            return false;
        case '/':
            Display.value = num1 / num2;
            return false;

        default:
            break;

    }
}


//qstn 4

function Diff() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var sub = n1 - n2;
    document.getElementById('result').innerHTML = 'The result is ' + sub;
}


//qstn 5

function Cube() {
    var c1 = parseFloat(document.getElementById('cube').value);
    document.getElementById('cubeResult').innerHTML = 'The cube is ' + c1 * c1 * c1;

}

//qstn 6

function Swap() {
    var swap1 = parseFloat(document.getElementById('snum1').value);
    var swap2 = parseFloat(document.getElementById('snum2').value);


    var temp = swap1;
    swap1 = swap2;
    swap2 = temp;
    document.getElementById('swapped').innerHTML = " Swapped :- " + swap1 + " , " + swap2;


}


//qstn 8

function findLargest() {
    var Anum = parseFloat(document.getElementById('Anum').value);
    var Bnum = parseFloat(document.getElementById('Bnum').value);
    var resultElement = document.getElementById('res');

    if (isNaN(Anum) || isNaN(Bnum)) {
        resultElement.innerHTML = "Please enter valid numbers.";
        return;
    }

    var largestNumber = Anum > Bnum ? Anum : Bnum;
    var message = Anum === Bnum ? "Both numbers are equal." : "The largest number is " + largestNumber;
    resultElement.innerHTML = message;
}


//qstn 9

function findLarge() {
    var Dnum = parseFloat(document.getElementById('Dnum').value);
    var Enum = parseFloat(document.getElementById('Enum').value);
    var Fnum = parseFloat(document.getElementById('Fnum').value);

    var resultElement = document.getElementById('res2');

    if (isNaN(Dnum) || isNaN(Enum) || isNaN(Fnum)) {

        resultElement.innerHTML = "Please enter valid numbers.";
        return;
    }

    if (Dnum > Enum && Dnum > Fnum) {
        resultElement.innerHTML = "The largest number is " + Dnum;
    }
    else if (Enum > Dnum && Enum > Fnum) {
        resultElement.innerHTML = "The largest number is " + Enum;
    }
    else if (Dnum == Enum && Enum == Fnum) {
        resultElement.innerHTML = "All numbers are equal";
    }
    else {
        resultElement.innerHTML = "The largest number is " + Fnum;
    }
}

//qstn 10

function evenOr() {
    var inpt = parseFloat(document.getElementById('even').value);
    if (isNaN(inpt) || inpt < 0) {
        evenrslt.innerHTML = "Please enter valid numbers.";
        return;
    }
    else if (inpt % 2 == 0) {
        evenrslt.innerHTML = "This is an Even Number";

    } else {
        evenrslt.innerHTML = "This is not an Even Number";
    }
}

//qstn 11

function oddOr() {
    var inpt2 = parseFloat(document.getElementById('odd').value);
    if (isNaN(inpt2) || inpt2 < 0) {
        oddrslt.innerHTML = "Please enter valid numbers.";
        return;
    }
    else if (inpt2 % 2 != 0) {
        oddrslt.innerHTML = "This is an Odd Number";

    } else {
        oddrslt.innerHTML = "This is not an Odd Number";
    }
}


//qstn 12

function divisble() {
    var divisble = parseFloat(document.getElementById('divsble').value);
    divisblerslt.innerHTML = "";

    if (isNaN(divisble) || divisble <= 0) {
        divisblerslt.innerHTML = "Please enter valid numbers."
        return;
    }
    else if (divisble % 2 === 0 && divisble % 5 === 0) {
        divisblerslt.innerHTML = "This number is divisble by both 2 & 5."


    } else {
        divisblerslt.innerHTML = "This number is not divisble by  2 & 5."
    }

}


//qstn 13

function armstrong() {
    var inptamstrg = document.getElementById("armstronginpt");
  
    var armInput = inptamstrg.value;
    var numStr = armInput.toString();
    var numDigits = numStr.length;
    var armstrongSum = 0;


    if (isNaN(armInput) || armInput <= 0) {
        armstrongrslt.innerHTML = "Please enter a valid number";
    } else {
        for (var j = 0; j < numDigits; j++) {
            armstrongSum += Math.pow(parseInt(numStr[j]), numDigits);
        }

        if (parseInt(armInput) === armstrongSum) {
            armstrongrslt.innerHTML = armInput + " is an Armstrong number";
        } else {
            armstrongrslt.innerHTML = armInput + " is not an Armstrong number";
        }
    }
}


//   ----loop----

//qstn 14

function palindrome() {
    var inputs = document.getElementsByClassName("palindrome-input");
    var resultsDiv = document.getElementById("palindromerslt");

    for (var i = 0; i < inputs.length; i++) {
        var palinpt = inputs[i].value;
        var numStrg = palinpt.toString();
        var reversedStrg = numStrg.split('').reverse().join('');

        if (isNaN(palinpt) || palinpt <= 0) {
            resultsDiv.innerHTML = " Please enter a valid number";
        } else {
            if (numStrg === reversedStrg) {
                resultsDiv.innerHTML = palinpt + " is a Palindrome";
            } else {
                resultsDiv.innerHTML = palinpt + " is not a Palindrome.";
            }
        }
    }
}

//qstn 15

function chckPrime() {
    var inptNum = parseInt(document.getElementById('primeinpt').value);

    if (isNaN(inptNum)) {
        primerslt.innerHTML = "Enter Valid Number";
        return

    }


    if (inptNum > 1) {
        for (var i = 2; i <= Math.sqrt(inptNum); i++) {
            if (inptNum % i === 0) {
                primerslt.innerHTML = inptNum + ' is not a Prime Number';
                return

            }


        }
        primerslt.innerHTML = inptNum + ' is a Prime Number';
    } else {
        primerslt.innerHTML = inptNum + ' is not a Prime Number'
    }
}


//qstn 16

function Reverse() {
    var reverseNum = parseInt(document.getElementById('revrseinpt').value);

    var numString = reverseNum.toString();

    var reversed = '';
    if (isNaN(reverseNum)) {
        revrserslt.innerHTML = "Enter Valid Number";
        return

    }

    for (var i = numString.length - 1; i >= 0; i--) {
        reversed += numString[i];
    }
    revrserslt.innerHTML = reversed;
}


//qstn 17

function numWords() {
    var numInput = document.getElementById("numWordsinpt").value;

    // Check if the input is not empty and is a valid number
    if (numInput.trim() === '' || isNaN(numInput)) {
        numWordsrslt.innerHTML = 'Enter a valid number';
        return;
    }

    // Convert the numeric input to words
    var words = numberToWords(parseInt(numInput));

    // Display the result
    numWordsrslt.innerHTML = words;
}

function numberToWords(number) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function convertLessThanThousand(num, addAnd) {
        let result = '';
        if (num >= 100) {
            result += units[Math.floor(num / 100)] + ' Hundred ';
            num %= 100;
            if (num > 0) {
                result += 'and ';
            }
        }
        if (num >= 20) {
            result += tens[Math.floor(num / 10)] + ' ';
            num %= 10;
            addAnd = true;
        }
        if (num > 0) {
            if (num >= 10 && num <= 19) {
                result += teens[num - 10] + ' ';
            } else {
                result += units[num] + ' ';
            }
        }

        return result;
    }

    function convertIndianNumbering(num, unit) {
        let result = '';
        if (num >= 10000000) {
            result += convertLessThanThousand(Math.floor(num / 10000000), false) + 'Crore ';
            num %= 10000000;
        }
        if (num >= 100000) {
            result += convertLessThanThousand(Math.floor(num / 100000), false) + 'Lakh ';
            num %= 100000;
        }
        if (num >= 1000) {
            result += convertLessThanThousand(Math.floor(num / 1000), false) + 'Thousand ';
            num %= 1000;
        }
        if (num > 0) {
            result += convertLessThanThousand(num, false) + unit + ' ';
        }
        return result;
    }

    if (number === 0) {
        return 'Zero';
    }

    let words = '';
    if (number >= 1000000000) {
        words += convertIndianNumbering(Math.floor(number / 1000000000), 'Billion');
        number %= 1000000000;
    }
    if (number > 0) {
        words += convertIndianNumbering(number, '');
    }

    return words.trim();
}


//qstn 18

function reverseString() {
    var reverseStrg = document.getElementById('rvrseStrginpt').value;
    if (reverseStrg === '') {
        rvrseStringrslt.innerHTML = "Enter a valid string ";
        return;
    }
  

    var reversedstrg = '';
    for (var i = reverseStrg.length - 1; i >= 0; i--) {
        reversedstrg += reverseStrg[i];
    }
    rvrseStringrslt.innerHTML = reversedstrg;
}



//qstn 19
function generateFibonacci() {
    // Get user input
    var numTerms = parseInt(document.getElementById('fibInput').value);

    // Validate input
    if (isNaN(numTerms) || numTerms <= 0) {
        fibResult.innerHTML = 'Please enter a positive integer.';
        return;
    }

    // Generate Fibonacci series
    var fibSeries = [0, 1];
    for (var i = 2; i < numTerms; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    // Display the series in the result div
   fibResult.innerHTML = 'Fibonacci Series: ' + fibSeries.join(', ');
}


//qstn 21
function Factorial() {

    var factor = parseInt(document.getElementById('factorialinpt').value);

    if (isNaN(factor) || factor <= 0) {
        factorialrslt.innerHTML = 'Please enter a valid number.';
        return;
    }

    
    var rslt = 1;
    for (var i = 1; i <= factor; i++) {
        rslt *=i;
    }
    factorialrslt.innerHTML = rslt;

    
}

//qstn 22
function printPrimes() {
    var limit = parseInt(document.getElementById("primes").value);
    var primesArray = [];


    if (isNaN(limit) || limit <=1) {
        primesrslt.innerHTML ="Please enter a valid number";
        return;
    }

    for (var num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            primesArray.push(num);
        }
    }

    primesrslt.innerHTML = "Prime numbers up to " + limit + "  :- " + primesArray.join(', ');
}

function isPrime(n) {
    if (n <= 1) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;

}

//qstn23
function multiplicationTable() {
    var number = parseInt(document.getElementById("multiplicationtable").value);
    var tableResult = "";

    if (isNaN(number)) {
        multirslt.innerHTML ="Please enter a valid number";
        return;
    }

    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        tableResult += number + " x " + i + " = " + result + "<br>";
    }

    multirslt.innerHTML = tableResult;
}

//qstn24
function calculateSum() {
     var csum = parseInt(document.getElementById("sums").value);
     var sum = 0;

    if (isNaN(csum)) {
        sumsrslt.innerHTML ="Please enter a valid number";
        return;
    }


    for (var i = 1; i <= csum; i++) {
        sum += i;
     }

   sumsrslt.innerHTML = "Sum of numbers up to " + csum + " is: " + sum;
}

//qstn25
function weeks() {
        // Get the input value
        var inputNumber = document.getElementById("weeks").value;

        // Get the result element
        var resultElement = document.getElementById("weeksrslt");

        // Convert the input to an integer
        var dayNumber = parseInt(inputNumber);

        // Use a switch statement to determine the day of the week
        switch (dayNumber) {
            case 1:
                resultElement.innerText = "Sunday";
                break;
            case 2:
                resultElement.innerText = "Monday";
                break;
            case 3:
                resultElement.innerText = "Tuesday";
                break;
            case 4:
                resultElement.innerText = "Wednesday";
                break;
            case 5:
                resultElement.innerText = "Thursday";
                break;
            case 6:
                resultElement.innerText = "Friday";
                break;
            case 7:
                resultElement.innerText = "Saturday";
                break;
            default:
                resultElement.innerText = "Invalid input. Please enter a number between 1 and 7.";
        }
}

//qstn26
function CheckPalindrome() {

    var inputNumber = document.getElementById("Palindromeinput").value;

    // Convert the number to a string to check for palindrome
    var numberStr = inputNumber.toString();

    // Initialize variables for loop
    var isPalindrome = true;
    var length = numberStr.length;

    // Use a loop to compare characters

    if (inputNumber.trim() === '') {
        Palindromerslt.innerText = "Please enter a valid string";
        return;
    }


  
    for (var i = 0; i < Math.floor(length / 2); i++) {
        if (numberStr[i] !== numberStr[length - 1 - i]) {
            isPalindrome = false;
            break; // Exit the loop if a mismatch is found
        }
    }

    // Check if the original and reversed strings are the same
    if (isPalindrome) {
        Palindromerslt.innerText = inputNumber + " is a Palindrome!";
    } else {
        Palindromerslt.innerText = inputNumber + " is not a Palindrome.";
    }
    }

//qstn  27

//Array with for loop
function acceptArrayWithLoop() {
        var array = [];
    
        // Get the input value as a comma-separated string
        var userInput = document.getElementById("arrayInputWithLoop").value;
    
        // Split the string into an array using commas
        array = userInput.split(",").map(element => element.trim());
    
        // Check if there are exactly 10 elements
        if (array.length !== 10) {
            arrayResultWithLoop.innerHTML="Please enter exactly 10 elements.";
            return;
        }

      
            var result = "Array with for loop: ";
            for (var i = 0; i < array.length; i++) {
                result += array[i];
                if (i < array.length - 1) {
                    result += ", ";
                }
            }
        
            // Display the array result
            document.getElementById("arrayResultWithLoop").innerHTML = result;
        
        
    }
    
//Array without for loop
function acceptArrayWithoutLoop() {
        var userInput = document.getElementById("arrayInputWithoutLoop").value;
    
        // Split the string into an array using commas
        var array = userInput.split(",").map(element => element.trim());
    
        // Check if there are exactly 10 elements
        if (array.length !== 10) {
            arrayResultWithoutLoop.innerHTML="Please enter exactly 10 elements.";
            return;
        }
    
        // Display the array result
       arrayResultWithoutLoop.innerHTML = "Array without for loop: " + array.join(", ");
}
    
//qstn28
function reverseArray() {
    // Get input value as a comma-separated string
    var userInput = document.getElementById("reversearrayinpt").value;

    if (userInput.trim() === "") {
       reversearrayrslt.innerHTML = "Please enter valid elements.";
        return;
    }


    // Split the string into an array using commas and trim each element
    var array = userInput.split(",").map(element => element.trim());

    // Reverse the array
    var reversedArray = array.reverse();

    // Display the reversed array result
    reversearrayrslt.innerHTML = "Reversed Array: " + reversedArray.join(", ");
}


//qstn 29


    function sumArray() {
        // Get input value as a comma-separated string
        var userInput = document.getElementById("sumarrayinpt").value;

        // Check if the input is empty
        if (userInput.trim() === "") {
            sumarrayrslt.innerHTML = "Please enter valid numbers.";
            return;
        }

        // Split the string into an array using commas and trim each element
        var array = userInput.split(",").map(element => element.trim());

        // Check if the array is empty
        if (array.length === 0) {
            sumarrayrslt.innerHTML = "Please enter valid elements.";
            return;
        }

        // Convert array elements to numbers and calculate the sum
        var sum = array.reduce((acc, current) => acc + parseFloat(current), 0);

        // Display the sum result
      sumarrayrslt.innerHTML = "Sum of Array: " + sum;
    }

//qstn 30

function sumtwoArray() {
        // Get input values as comma-separated strings
        var input1 = document.getElementById("sumarrayinpt1").value;
        var input2 = document.getElementById("sumarrayinpt2").value;

        // Check if the inputs are empty
        if (input1.trim() === "" || input2.trim() === "") {
            sumtwoarrayrslt.innerHTML = "Please enter valid numbers.";
            return;
        }

        // Split the strings into arrays using commas and trim each element
        var array1 = input1.split(",").map(element => element.trim());
        var array2 = input2.split(",").map(element => element.trim());

        // Check if the arrays have the same length
        if (array1.length !== array2.length) {
            sumtwoarrayrslt.innerHTML = "Arrays must have the same length.";
            return;
        }

        // Convert array elements to numbers and check if they are valid numbers
        for (var i = 0; i < array1.length; i++) {
            if (isNaN(array1[i]) || isNaN(array2[i])) {
               sumtwoarrayrslt.innerHTML = "Please enter valid numbers.";
                return;
            }
        }

        // Calculate the sum of corresponding elements
        var sumArray = array1.map((value, index) => parseFloat(value) + parseFloat(array2[index]));

        // Display the sum result
        sumtwoarrayrslt.innerHTML = "Sum of Arrays: " + sumArray.join(", ");
    }
//qstn 31

function lrgstArray() {
    // Get input value as a comma-separated string
    var userInput = document.getElementById("lrgstarrayinpt").value;

    // Split the string into an array using commas and trim each element
    var array = userInput.split(",").map(element => parseFloat(element.trim()));

    // Check if the array is empty
    if (array.length === 0 || array.some(isNaN)) {
        document.getElementById("lrgstarrayrslt").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Find the largest number in the array
    var largestNumber = Math.max(...array);

    // Display the result
   lrgstarrayrslt.innerHTML = "Largest Number in Array: " + largestNumber;
}


//qstn 32

function sortArray() {
    // Get input value as a comma-separated string
    var userInput = document.getElementById("sortarrayinpt").value;

    // Split the string into an array using commas and trim each element
    var array = userInput.split(",").map(element => parseFloat(element.trim()));

    // Check if the array is empty
    if (array.length === 0 || array.some(isNaN)) {
        document.getElementById("sortarrayrslt").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Sort the array in ascending order
    var sortedArray = array.sort((a, b) => a - b);

    // Display the result
    document.getElementById("sortarrayrslt").innerHTML = "Sorted Array (Ascending): " + sortedArray.join(", ");
}


//qstn 33

function searchArray() {
    // Get input values
    var userInput = document.getElementById("searcharrayinpt").value;
    var searchElement = document.getElementById("searcharrayelemnt").value;

    // Split the string into an array using commas and trim each element
    var array = userInput.split(",").map(element => element.trim());

    // Check if the array is empty
    if (array.length === 0) {
     searcharrayrslt.innerHTML = "Please enter valid elements.";
        return;
    }

    // Check if the search element is empty
    if (searchElement.trim() === "") {
       searcharrayrslt.innerHTML = "Please enter a valid search element.";
        return;
    }

    // Use indexOf to search for the element
    var index = array.indexOf(searchElement);

    // Display the search result
    if (index !== -1) {
        searcharrayrslt.innerHTML = "Element found at index: " + index;
    } else {
       searcharrayrslt.innerHTML = "Element not found in the array.";
    }
}

//qstn 34

function sameArray() {
    // Get input values as comma-separated strings
    var firstArrayInput = document.getElementById("firstarrayinpt").value;
    var secondArrayInput = document.getElementById("scndarrayinpt").value;

    // Check if input arrays are empty
    if (firstArrayInput.trim() === "" || secondArrayInput.trim() === "") {
      samearrayrslt.innerHTML = "Please enter valid elements.";
        return;
    }

    // Split the strings into arrays using commas and trim each element
    var firstArray = firstArrayInput.split(",").map(element => element.trim());
    var secondArray = secondArrayInput.split(",").map(element => element.trim());

    // Compare arrays
    var areEqual = JSON.stringify(firstArray) === JSON.stringify(secondArray);

    // Display the result
    if (areEqual) {
        samearrayrslt.innerHTML = "Arrays are the same.";
    } else {
        samearrayrslt.innerHTML = "Arrays are not the same.";
    }
}

//qstn 35

function removeArray() {
    // Get input values as comma-separated strings
    var arrayInput = document.getElementById("removearrayinpt").value;
    var elementToRemove = document.getElementById("rmvearrayelemnt").value;

    // Check if input array is empty
    if (arrayInput.trim() === "") {
        removearrayrslt.innerHTML = "Please enter valid elements.";
        return;
    }

    // Split the string into an array using commas and trim each element
    var array = arrayInput.split(",").map(element => element.trim());

    // Check if the element to remove is empty
    if (elementToRemove.trim() === "") {
       removearrayrslt.innerHTML = "Please enter a valid element to remove.";
        return;
    }

    // Use the filter method to create a new array without the specified element
    var newArray = array.filter(element => element !== elementToRemove);

    // Display the result
   removearrayrslt.innerHTML = "Array after removal: " + newArray.join(", ");
}

//qstn36


function displayMatrix() {
    // Get input value as a comma-separated string
    var input = document.getElementById("displymatrixinpt").value;

    // Split the string into an array using commas and trim each element
    var elements = input.split(",").map(element => element.trim());

    // Check if the number of elements is exactly 4 (for a 2x2 matrix)
    if (elements.length !== 4) {
       displymatxrslt.innerHTML = "Please enter exactly 4 elements for a 2x2 matrix.";
        return;
    }

    // Create a 2x2 matrix
    var matrix = [
        [elements[0], elements[1]],
        [elements[2], elements[3]]
    ];

    // Display the matrix result
    displymatxrslt.innerHTML = "Matrix:<br>" +
        matrix[0].join(" ") + "<br>" +
        matrix[1].join(" ");
}

//qstn 37

function transposeMatrix() {
    // Get input value as a comma-separated string
    var input = document.getElementById("transposematrixinpt").value;

    // Split the string into an array using commas and trim each element
    var elements = input.split(",").map(element => element.trim());

    // Check if the number of elements is exactly 4 (for a 2x2 matrix)
    if (elements.length !== 4) {
        transposematrixrslt.innerHTML = "Please enter exactly 4 elements for a 2x2 matrix.";
        return;
    }

    // Create a 2x2 matrix
    var matrix = [
        [elements[0], elements[1]],
        [elements[2], elements[3]]
    ];

    // Transpose the matrix
    var transposedMatrix = [
        [matrix[0][0], matrix[1][0]],
        [matrix[0][1], matrix[1][1]]
    ];

    // Display the transposed matrix result
        transposematrixrslt.innerHTML = "Transposed Matrix:<br>" +
        transposedMatrix[0].join(" ") + "<br>" +
        transposedMatrix[1].join(" ");
}

//qstn 38


function sumMatrix() {
    // Get input values as comma-separated strings
    var matrix1Input = document.getElementById("twomatrixinpt1").value;
    var matrix2Input = document.getElementById("twomatrixinpt2").value;

    // Split the strings into arrays using commas and trim each element
    var matrix1 = matrix1Input.split(",").map(element => element.trim());
    var matrix2 = matrix2Input.split(",").map(element => element.trim());

    // Check if the number of elements is exactly 4 (for a 2x2 matrix)
    if (matrix1.length !== 4 || matrix2.length !== 4) {
        summatrixrslt.innerHTML = "Please enter exactly 4 elements for each matrix.";
        return;
    }

    // Create 2x2 matrices
    var matrix1Array = [
        [parseFloat(matrix1[0]), parseFloat(matrix1[1])],
        [parseFloat(matrix1[2]), parseFloat(matrix1[3])]
    ];

    var matrix2Array = [
        [parseFloat(matrix2[0]), parseFloat(matrix2[1])],
        [parseFloat(matrix2[2]), parseFloat(matrix2[3])]
    ];

    // Sum the matrices
    var sumMatrixArray = [
        [matrix1Array[0][0] + matrix2Array[0][0], matrix1Array[0][1] + matrix2Array[0][1]],
        [matrix1Array[1][0] + matrix2Array[1][0], matrix1Array[1][1] + matrix2Array[1][1]]
    ];

    // Display the result
    summatrixrslt.innerHTML = "Matrix 1 :<br>" +
    matrix1Array[0].join(" ") + "<br>" +
    matrix1Array[1].join(" ") + "<br>" +
    "Matrix 2 :<br>" +
    matrix2Array[0].join(" ") + "<br>" +
    matrix2Array[1].join(" ") + "<br>" +
    "Sum of Matrices :<br>" +
    sumMatrixArray[0].join(" ") + "<br>" +
    sumMatrixArray[1].join(" ");

}


// qstn 39

function multiplicationMatrix() {
    // Get input values as comma-separated strings
    var matrix1Input = document.getElementById("multimatrixinpt1").value;
    var matrix2Input = document.getElementById("multimatrixinpt2").value;

    // Split the strings into arrays using commas and trim each element
    var matrix1 = matrix1Input.split(",").map(element => element.trim());
    var matrix2 = matrix2Input.split(",").map(element => element.trim());

    // Check if the number of elements is exactly 9 (for a 3x3 matrix)
    if (matrix1.length !== 9 || matrix2.length !== 9) {
        multimatrixrslt.innerHTML = "Please enter exactly 9 elements for each matrix.";
        return;
    }

    // Create 3x3 matrices
    var matrix1Array = [
        [parseFloat(matrix1[0]), parseFloat(matrix1[1]), parseFloat(matrix1[2])],
        [parseFloat(matrix1[3]), parseFloat(matrix1[4]), parseFloat(matrix1[5])],
        [parseFloat(matrix1[6]), parseFloat(matrix1[7]), parseFloat(matrix1[8])]
    ];

    var matrix2Array = [
        [parseFloat(matrix2[0]), parseFloat(matrix2[1]), parseFloat(matrix2[2])],
        [parseFloat(matrix2[3]), parseFloat(matrix2[4]), parseFloat(matrix2[5])],
        [parseFloat(matrix2[6]), parseFloat(matrix2[7]), parseFloat(matrix2[8])]
    ];

    // Initialize the result matrix with zeros
    var resultMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    // Perform matrix multiplication
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < 3; k++) {
                resultMatrix[i][j] += matrix1Array[i][k] * matrix2Array[k][j];
            }
        }
    }

    // Display the result
    multimatrixrslt.innerHTML = "Matrix 1 :<br>" +
        matrix1Array[0].join(" ") + "<br>" +
        matrix1Array[1].join(" ") + "<br>" +
        matrix1Array[2].join(" ") + "<br>" +
        "Matrix 2 :<br>" +
        matrix2Array[0].join(" ") + "<br>" +
        matrix2Array[1].join(" ") + "<br>" +
        matrix2Array[2].join(" ") + "<br>" +
        "Multiplication Result :<br>" +
        resultMatrix[0].join(" ") + "<br>" +
        resultMatrix[1].join(" ") + "<br>" +
        resultMatrix[2].join(" ");
}


//qstn 40

function areMatricesEqual(matrix1, matrix2) {
    // Convert input strings to arrays
    var array1 = matrix1.split(",").map(Number);
    var array2 = matrix2.split(",").map(Number);

    // Check if the number of elements is exactly 4 (for a 2x2 matrix)
    if (array1.length !== 4 || array2.length !== 4) {
        return "Please enter exactly 4 elements for each matrix.";
    }

    // Create 2x2 matrices
    var matrix1Array = [
        [array1[0], array1[1]],
        [array1[2], array1[3]]
    ];

    var matrix2Array = [
        [array2[0], array2[1]],
        [array2[2], array2[3]]
    ];

    // Check if matrices are equal
    var areEqual = JSON.stringify(matrix1Array) === JSON.stringify(matrix2Array);

    // Display the result
    if (areEqual) {
        return "Matrices are the same.";
    } else {
        return "Matrices are not the same.";
    }
}

function Matrix() {
    // Get input values as strings
    var matrix1Input = document.getElementById("matrixinpt1").value;
    var matrix2Input = document.getElementById("matrixinpt2").value;

    // Call the function to compare matrices
    var result = areMatricesEqual(matrix1Input, matrix2Input);

    // Display the result
    document.getElementById("matrixrslt").innerHTML = "Result: " + result;
}


//qstn 41

function Matrixreplace() {
    var matrxrplce = document.getElementById("matrixrplceinpt1");


    var items = matrxrplce.value.split(" ");
    var arr = new Array(2); // declaring array variable
    let count = 0;
    

    if (matrxrplce.value === "") {
        matrixrplcerslt.innerHTML = "Please enter valid numbers.";
        return;
    }


    // declare 2d array
    for (let i = 0; i < 2; i++) {
        arr[i] = [];
    }

    // loop to input 2d array elements
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            arr[i][j] = items[count++];
        }
    }

    // display array
    matrixrplcerslt.innerHTML = "<strong>Original matrix:</strong> <br>";
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            matrixrplcerslt.innerHTML += `${arr[i][j]}&nbsp;`;
        }
        matrixrplcerslt.innerHTML += `<br>`;
    }

    if (arr[0][0] < arr[1][1]) {
        arr[1][1] = 1;
    } else if (arr[0][0] > arr[1][1]) {
        arr[0][0] = 0;
    }

    // display result
    matrixrplcerslt.innerHTML += "<strong>Result:</strong> <br>";
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            matrixrplcerslt.innerHTML += `${arr[i][j]}&nbsp;`;
        }
        matrixrplcerslt.innerHTML += `<br>`;
    }
}

//qstn 42
function Asciivalue() {
    const inpVal = asciiInpt.value;
    // const asc = inpVal.charCodeAt(0); OR
    const asc = inpVal.codePointAt(0);
    Asciirslt.innerHTML = `ASCII value of letter ${inpVal} is ${asc}`;
}


//qstn 43


function windChill() {
    var windSpeed = windspeedInpt.value;
    var temp = airtempInpt.value;
    var res;
    if (windSpeed <= 4) {
        res = temp;
    } else if (windSpeed <= 45) {
        res = (1.6 * temp) - 55;
    } else {
        res = 91.4 + (91.4 - temp) * (0.0203 * windSpeed - 0.304 * (windSpeed) * 1 / 2 - 0.474);
    }
    windChillrslt.innerHTML = `Windchill Index : ${res} &deg; F`;

}

//qstn 44
function numdivisible() {
    var Num = parseInt(inptdivisible.value);
    if (!isNaN(Num)) {
        if (Num % 5 == 0) {
            if (Num % 6 == 0) {
                inptdivisiblerslt.innerHTML = Num + " is divisible by 5 and 6";
            } else {
                inptdivisiblerslt.innerHTML = Num + " is divisible only by 5";
            }
        } else {
            if (Num % 6 == 0) {
                inptdivisiblerslt.innerHTML = Num + " is divisible only by 6";
            } else {
                inptdivisiblerslt.innerHTML = Num + " is not divisible by 5 and 6";
            }
        }
    } else {
        inptdivisiblerslt.innerHTML = "Please enter a valid number.";
    }
}


//qstn 45
function chooseFood() {
    var Food = items.value;
    if (Food == "Tuna Salad") { foodrate.innerHTML = "4.50"; }
    else if (Food == "Chiken Biriyani") { foodrate.innerHTML = "9.32"; }
    else if (Food == "Pizza") { foodrate.innerHTML = "10.14"; }
}
function Invoice() {

    var Food = items.value;
    var total = 0;
    let itemPrice = parseFloat(foodrate.innerHTML);
    var Dchoice = document.querySelector("input[type='radio']:checked");

    if (Dchoice.value == "YES") {
        if (itemPrice < 10) {
            //total= 0 + itemPrice + shipping-charge + overnight delivery charge
            total = total + itemPrice + 2 + 5;
            invoicerslt.innerHTML = `My Java Cafe Invoice:<br><br>
                                ${Food} &nbsp : &nbsp $${itemPrice} <br>
                                Shipping &nbsp : &nbsp $2.00 <br>
                                Overnight delivery  &nbsp:&nbsp $5<br>
                                Total &nbsp : &nbsp $${total}`;
        } else {
            total = total + itemPrice + 3 + 5;
            invoicerslt.innerHTML = `My Java Cafe Invoice:<br><br>
                                ${Food} &nbsp : &nbsp $${itemPrice} <br>
                                Shipping &nbsp : &nbsp $3.00 <br>
                                Overnight delivery &nbsp:&nbsp $5<br>
                                Total &nbsp : &nbsp $${total}`;
        }
    } else {
        if (itemPrice < 10) {
            //total=  0 + itemPrice + shipping-charge 
            total = total + itemPrice + 2;
            invoicerslt.innerHTML = `My Java Cafe Invoice:<br><br>
                                ${Food} &nbsp : &nbsp $${itemPrice} <br>
                                Shipping &nbsp : &nbsp $2.00 <br>
                                Total &nbsp : &nbsp $${total}`;
        } else {
            total = total + itemPrice + 3;
            invoicerslt.innerHTML = `My Java Cafe Invoice:<br><br>
                                ${Food} &nbsp : &nbsp $${itemPrice} <br>
                                Shipping &nbsp : &nbsp $3.00 <br>
                                Total &nbsp : &nbsp $${total}`;
        }
    }
}



//qstn 46

function Testscores() {
    var studArr = stdnameinpt.value.split(","); // Use "stdnameinpt" for student names
    var scoreArr = stdmarkinpt.value.split(","); // Use "stdmarkinpt" for test scores

    if (studArr.length !== scoreArr.length) {
        Testscorerslt.innerHTML = `Student count doesn't match with Score count`;
        return; // Exit the function if there's an error
    }

    var sum = scoreArr.reduce((acc, element) => acc + parseInt(element), 0);
    var avg = sum / studArr.length;
    var highestScore = Math.max(...scoreArr);

    var belowAverageStudents = [];
    var highestScoreInfo = '';

    for (let i = 0; i < studArr.length; i++) {
        if (parseInt(scoreArr[i]) === highestScore) {
            highestScoreInfo = `<span class="text-success"><strong>Highest test score:<br>
                                Name:</strong> ${studArr[i]} &nbsp;&nbsp;<strong>Marks:</strong> ${scoreArr[i]}</span> <br><br>`;
        } else if (parseInt(scoreArr[i]) < avg) {
            belowAverageStudents.push(`<span class="text-black">${studArr[i]} </span>`);
        }
    }

    var belowAverageMessage = belowAverageStudents.join(', ');

    Testscorerslt.innerHTML = `${highestScoreInfo}<strong>Students below average:-  ${belowAverageMessage}Needs improvement </strong><br><span class="text-primary"><strong>Average Score:</strong> ${avg.toFixed(2)}</span>`;
}


//qstn 47,48

  // Class declaration
  class Person {
    constructor(name) {
        this.name = name;
    }
  }

// Function to handle button click and display result
function createPersonInstance() {
    // Get user input

    let userName = document.getElementById("usernameInput").value.trim();

    // Create an instance of the Person class


    if (userName === '' ) {
        ClassInstancerslt.innerText = "Please enter a valid name.";
        return;
    }
    let personInstance = new Person(userName);

    // Display result in the "ClassInstancerslt" element
    ClassInstancerslt.innerText = `Created a person instance with Name:- ${personInstance.name}`;
}


//qstn 49

   //straight 
   function straight1() {
    var n = pyramidinpt1.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
          rightpatternrslt.innerHTML += "* ";
        }
        rightpatternrslt.innerHTML += "<br>";
    }
}
//Upside down
function upside1() {
    var n = pyramidinpt1.value;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n - i; j++) {
            rightpatternrslt.innerHTML += "* ";
        }
       rightpatternrslt.innerHTML += "<br>";
    }
}



//qstn 50
function straight2() {
    var n =  pyramidinpt2.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
           leftpatternrslt.innerHTML += ``;
        }
        for (let k = 1; k <= i; k++) {
            leftpatternrslt.innerHTML += "* ";
        }
        leftpatternrslt.innerHTML += "<br>";
    }
}
// Upside down
function upside2() {
    var n =  pyramidinpt2.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            leftpatternrslt.innerHTML += ``;
        }
        for (let k = 0; k <= n - i; k++) {
            leftpatternrslt.innerHTML += "* ";
        }
        leftpatternrslt.innerHTML += "<br>";
    }
}

//qstn 51
function straight3() {
    var n = pyramidinpt3.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            starpatternrslt.innerHTML += ``;
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {
            starpatternrslt.innerHTML += "* ";
        }
        starpatternrslt.innerHTML += "<br>";
    }
}
function upside3() {
    var n = pyramidinpt3.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= i - 1; j++) {
            starpatternrslt.innerHTML += ``;
        }
        for (let k = 1; k <= ((2 * n) - ((2 * i) - 1)); k++) {
            starpatternrslt.innerHTML += "* ";
        }
        starpatternrslt.innerHTML += "<br>";
    }
}




1,2,3,4,5,6,7,8,9,1
//qstn star

let maxStars = 5;
let rating = 0;

function rate(value) {
    rating = value;
    updateStars();
    displayResult();
}

function updateStars() {
    // Reset all stars to default color
    for (let i = 1; i <= maxStars; i++) {
        var starElement = document.getElementById('star' + i);
        starElement.classList.remove('rated');

        // Highlight stars up to the selected rating
        if (i <= rating) {
            starElement.classList.add('rated');
        }
    }
}

function displayResult() {
    Result.innerHTML = 'You rated: ' + rating + ' out of ' + maxStars + ' stars.';
}


