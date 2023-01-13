const calculateBMI = require("./bmi_calculator");

test('your BMI is normal', () =>{
    expect(calculateBMI(71,1.7018)).toBe(24.515531321104966)
})