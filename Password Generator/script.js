const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("len");
const upperInput = document.getElementById("u-c");
const lowerInput = document.getElementById("l-c");
const numberInput = document.getElementById("num");
const symbolInput = document.getElementById("symb");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length < totalChar.value) {
        return generatePassword(password);
    }
    console.log(password);
    passBox.value = truncateString(password, totalChar.value);
};

generatePassword();

document.getElementById("btn").addEventListener("click", function () {
    generatePassword();
});

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
