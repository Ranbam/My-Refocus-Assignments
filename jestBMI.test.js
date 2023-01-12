function calculateBMI(weight,height){
    return weight / (height * height);
}


test('Checks if weight / (height * height) equals BMI', () =>{
    expect(calculateBMI(71,1.7018)).toBe(24.515531321104966);
});