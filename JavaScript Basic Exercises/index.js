//Exercise 1

var myName = "Katia"
console.log(myName)

//Exercise 2

var myAge = 29
console.log(myAge)

//Exercise 3

var juliaAge = 32
var ageDiff = myAge - juliaAge
console.log(ageDiff)

//Exercise 4

var myAge = 21

if (myAge > 21) {
    ageComparison = "You are older than 21";
}

else if (myAge == 21) {
    ageComparison = "You are 21!";
}

else {
    ageComparison = "You are younger than 21";
}

console.log(ageComparison)

//Exercise 5

if (myAge > juliaAge) {
    ageDiff = "You are older than Julia";
}

else if (myAge == juliaAge) {
    ageDiff = "You and Julia are of the same age";
}

else {
    ageDiff = "You are younger than Julia";
}

console.log(ageDiff)

//Exercise 6

var classNames = ["Agnita", "Anastasiia", "Jo", "Lucas", "Antje", "Katia", "Sarah"]
classNames.sort()

console.log(classNames)

var first = classNames[0];

console.log(first)

var last = classNames[6];

console.log(last)

for (var i = 0; i < classNames.length; i++) {
    console.log(classNames[i])
}

//Exercise 7

var classAges = [25, 26, 34, 32, 31, 29, 27]
console.log(classAges)

var j = 0

while (j < classAges.length) {
    if (classAges[j] % 2 == 0) {
        console.log(classAges[j])
    }
    console.log(classAges[j])
    j++
}

//Exercise 8

var array = [10, 15, 16, 17, 18, 13, 2, 12, -10, 11]

console.log(Math.min(...array))

//Exercise 9

var array2 = [10, 15, 16, 17, 1896, 13, 2, 12, -10, 11]

console.log(Math.max(...array2))

//Exercise 10

var miscArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]
var index = 6

function print_array_element() {
    console.log(miscArray[index])
}

print_array_element(miscArray, index);

//Exercise 11

var miscArray2 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]

function get_duplicates() {
    for (i = 0; i < miscArray2.length; i++) {
        for (j = i + 1; j < miscArray2.length; j++) {
            if (miscArray2[i] === miscArray2[j]) {
                console.log(miscArray2[i] + " is a duplicate")
            }
        }
    }   
    return miscArray2[i]
}

get_duplicates(miscArray2[i]);


//Exercise 12

var c = ["Red", "Green", "White", "Black"]

function arraytoString(c) {
    return c.toString()
}

console.log(arraytoString(c));

//Exercise 13

function reverse_a_number(n) {
	n = n + "";
	return n.split("").reverse().join("");
}

console.log(reverse_a_number(12345));

//Exercise 14

function alphabet_order(str) {
    return str.split('').sort().join('');
}
  
console.log(alphabet_order("development"));

//Exercise 15

function uppercase(str)
{
  var oldArray = str.split(' ');
  var newArray = [];
    
  for(var x = 0; x < oldArray.length; x++){
      newArray.push(oldArray[x].charAt(0).toUpperCase()+oldArray[x].slice(1));
  }
  return newArray.join(' ');
}
console.log(uppercase("that boring monday"));

//Exercise 16

function find_longest_word(str)
{
  var oldArray = str.match(/\w[a-z]{0,}/gi);
  var result = oldArray[0];

  for(var x = 0 ; x < oldArray.length ; x++)
  {
    if(result.length < oldArray[x].length)
    {
    result = oldArray[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Code Academy Berlin'));


//Exercise 19
var a = 9
var b = 3

function Multiply() {
    return a * b
}

console.log(Multiply())

//Exercise 21

function multiplyWithParameters(c = 21, d = 48) {
    return c * d
}

console.log(multiplyWithParameters())