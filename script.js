       //DATE METHODS,  chapters 31-34

// 1. Program to display current date and time in the browser.
const displayDateTime = () => {
    const now = new Date();
    document.write("Current Date and Time: " + now);
  };
  displayDateTime();
  
  // 2. Program to alert the current month in words.
  const alertMonth = () => {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    alert("Current Month: " + monthNames[now.getMonth()]);
  };
  alertMonth();
  
  // 3. Program to alert the first 3 letters of the current day.
  const alertDay = () => {
    const now = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    alert("Current Day: " + dayNames[now.getDay()]);
  };
  alertDay();
  
  // 4. Program to display a message if it's Saturday or Sunday.
  const checkFunDay = () => {
    const now = new Date();
    const day = now.getDay();
    if (day === 0 || day === 6) {
      alert("It's Fun day");
    }
  };
  checkFunDay();
  
  // 5. Program to show a message based on the day of the month.
  const checkDayOfMonth = () => {
    const now = new Date();
    const date = now.getDate();
    if (date < 16) {
      alert("First fifteen days of the month");
    } else {
      alert("Last days of the month");
    }
  };
  checkDayOfMonth();
  
  // 6. Program to determine minutes since Jan. 1, 1970.
  const minutesSinceEpoch = () => {
    const now = new Date();
    const minutes = Math.floor(now.getTime() / (1000 * 60));
    alert("Minutes since Jan 1, 1970: " + minutes);
  };
  minutesSinceEpoch();
  
  // 7. Program to test whether it's AM or PM.
  const checkAMPM = () => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
      alert("It's AM");
    } else {
      alert("It's PM");
    }
  };
  checkAMPM();
  
  // 8. Program to create a Date object for the last day of the last month of 2020.
  const lastDayOf2020 = () => {
    const laterDate = new Date(2020, 11, 31);
    alert("Last Day of 2020: " + laterDate);
  };
  lastDayOf2020();
  
  // 9. Program to alert the number of days since 1st Ramadan (June 18, 2015).
  const daysSinceRamadan = () => {
    const ramadanStart = new Date(2015, 5, 18);
    const now = new Date();
    const timeDiff = now - ramadanStart;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    alert("Days since 1st Ramadan: " + days);
  };
  daysSinceRamadan();
  
  // 10. Program to display seconds elapsed since the beginning of 2015.
  const secondsSince2015 = () => {
    const referenceDate = new Date(2015, 0, 1);
    const now = new Date();
    const elapsedSeconds = Math.floor((now - referenceDate) / 1000);
    document.write("Seconds elapsed since the beginning of 2015: " + elapsedSeconds);
  };
  secondsSince2015();
  
  // 11. Program to reset the date object an hour ahead.
  const modifyHour = () => {
    let now = new Date();
    let currentHour = now.getHours();
    now.setHours(currentHour + 1);
    document.write("Date and time after an hour ahead: " + now);
  };
  modifyHour();
  
  // 12. Program to show the date 100 years back in an alert box.
  const hundredYearsBack = () => {
    let now = new Date();
    now.setFullYear(now.getFullYear() - 100);
    alert("Date 100 years back: " + now);
  };
  hundredYearsBack();
  
  // 13. Program to calculate and show the user's birth year.
  const calculateBirthYear = () => {
    const age = prompt("Enter your age:");
    const now = new Date();
    const birthYear = now.getFullYear() - age;
    document.write("Your birth year is: " + birthYear);
  };
  calculateBirthYear();
  
  // 14. Program to generate K-Electric bill.
  const generateBill = () => {
    const customerName = "John Doe";  // Replace with actual customer name
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const units = 350;
    const chargesPerUnit = 12.5;
    const latePaymentSurcharge = 200;
    const netAmount = units * chargesPerUnit;
    const grossAmount = netAmount + latePaymentSurcharge;
  
    document.write("<h2>K-Electric Bill</h2>");
    document.write("Customer Name: " + customerName + "<br>");
    document.write("Month: " + currentMonth + "<br>");
    document.write("Number of units: " + units + "<br>");
    document.write("Charges per unit: " + chargesPerUnit.toFixed(2) + "<br>");
    document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
    document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
    document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2) + "<br>");
  };
  generateBill();
  
 

      //FUNCTION, chapters 35-38

// 1. Function that displays current date & time in the browser.
function displayDateTime() {
    const now = new Date();
    document.write("Current Date and Time: " + now + "<br>");
  }
  displayDateTime();
  
  // 2. Function that greets the user with full name.
  function greetUser(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    alert("Hello, " + fullName);
  }
  greetUser("John", "Doe");
  
  // 3. Function that adds two numbers input by the user.
  function addNumbers(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  alert("The sum is: " + addNumbers(num1, num2));
  
  // 4. Calculator function that takes two numbers and an operator.
  function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
    }
    document.write("The result is: " + result + "<br>");
  }
  calculator(10, 5, '+');
  
  // 5. Function that squares its argument.
  function square(num) {
    return num * num;
  }
  document.write("Square of 4: " + square(4) + "<br>");
  
  // 6. Function that computes factorial of a number.
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  document.write("Factorial of 5: " + factorial(5) + "<br>");
  
  // 7. Function that takes start and end number and displays counting.
  function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
      document.write(i + " ");
    }
    document.write("<br>");
  }
  displayCounting(1, 10);
  
  // 8. Nested function to compute hypotenuse of a right-angled triangle.
  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
      return num * num;
    }
    const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    document.write("Hypotenuse: " + hypotenuse + "<br>");
  }
  calculateHypotenuse(3, 4);
  
  // 9. Function that calculates the area of a rectangle.
  function calculateArea(width, height) {
    return width * height;
  }
  
  // i. Arguments as value
  document.write("Area of rectangle (as value): " + calculateArea(5, 8) + "<br>");
  
  // ii. Arguments as variables
  let width = 7;
  let height = 10;
  document.write("Area of rectangle (as variables): " + calculateArea(width, height) + "<br>");
  
  // 10. Function that checks whether a string is palindrome.
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  const palindromeCheck = "madam";
  document.write("Is '" + palindromeCheck + "' a palindrome? " + isPalindrome(palindromeCheck) + "<br>");
  
  // 11. Function to convert the first letter of each word to uppercase.
  function titleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  const exampleString = "the quick brown fox";
  document.write("Title Case: " + titleCase(exampleString) + "<br>");
  
  // 12. Function to find the longest word in a string.
  function findLongestWord(str) {
    const words = str.split(' ');
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }
  const longestWordString = "Web Development Tutorial";
  document.write("Longest word: " + findLongestWord(longestWordString) + "<br>");
  
  // 13. Function that counts the number of occurrences of a letter in a string.
  function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
    return count;
  }
  const sampleString = "JSResourceS.com";
  const letterToCount = "o";
  document.write("Number of occurrences of '" + letterToCount + "': " + countLetterOccurrences(sampleString, letterToCount) + "<br>");
  
  // 14. The Geometrizer - Functions to calculate the properties of a circle.
  function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
  }
  
  function calcArea(radius) {
    const area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(2) + "<br>");
  }
  
  const circleRadius = 5;
  calcCircumference(circleRadius);
  calcArea(circleRadius);
  