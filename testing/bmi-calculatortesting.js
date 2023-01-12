function test(){
    const result = calculateBMI(71,1.7018);
    const expected = 24.515531321104966;


console.assert(result === expected, `The result ${result} doesn't match the expected value ${expected}.`)
}