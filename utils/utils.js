/////EX4
export const greet = (string, boleon) => {
    if (boleon ===  true) {
        return `Good Evening ${string} `
    }
    else {
        return `Hi ${string}`
    }
};

export const calculate = (num1=1,num2=2,operator) => {
    switch (operator) {
        case `add` : 
            return num1+num2
            break;

        case "subtract": 
            return num1-num2
            break;

        case "multiply":
            return num1*num2
            break;

        case "divide":
            return num1/num2
            break;

    }
}
    




