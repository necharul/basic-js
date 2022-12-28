var number1 = 25;
var number2 = '15.5';
number2 = parseFloat(number2);   //parseFloat mean "Vognagsho Songkha soho". ".5" k bad dia dibe na
// or,
number2 = +number2;
console.log(number1 + number2);

number2 = parseInt(number2);     //parseInt mean "Purno Songkha". ".5" k bad dia dibe
console.log(number1 + number2);