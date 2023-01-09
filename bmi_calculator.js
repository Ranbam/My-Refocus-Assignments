function calculateBMI(weight,height){
    return weight / (height * height);
}

var weight = 71
var height = 1.7018

var bmi = calculateBMI(weight,height);
if (bmi <18.5){
    console.log('Your BMI is ' + bmi + ', so you are underweight.');
} else if (bmi < 25){
    console.log('Your BMI is ' + bmi + ', so you have normal weight.')
} else if (bmi < 30){
    console.log('Your BMI is ' + ', so you are overweight.');
} else {
    console.log('Your BMI is ' + ', so you are obeses.');
}