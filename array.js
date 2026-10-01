let array = [12, "?", true];
console.log(array[2]);

let number = [1, 2, 3, 4, 5, 8];

console.log(number[0]);
console.log(number[2]);

console.log("-------------------------");
for (let i = 0; i < 5; i++){
    console.log(number[i]);
}

console.log("-------------------------");
console.log("Length: ", number.length);

console.log("-------------------------");
number.forEach((element, index)=> {
    console.log(index, element);
    
});

// push(): add lest element of array
console.log("---------------------------");
number.push(11);
number.forEach(element => {
    console.log(element);
});

// pop(): remove back
console.log("----------------------------");
number.pop();
number.forEach(element => {
    console.log(element);
});

// shift(): remove first
console.log("----------------------------");
number.shift();
number.forEach(element => {
    console.log(element);
});

// unshift(): Insert to first
console.log("-----------------------------");
number.unshift(13);
number.forEach(element => {
    console.log(element);
});
    
// 
console.log("------------------------------");
number.splice(1, 3);
number.forEach(element => {
    console.log(element);
});

// ______________________________
let student = ["Pengleng"];

const name = document.getElementById("input");
const updateName = document.getElementById("update-name");
const btnAdd = document.getElementById("btn-add");
const output = document.getElementById("output");

const message = document.getElementById("message");

function Display() {
    let result = "";

    student.forEach((element, index) => {
        result += `
            <tr>
                <td>${index}</td>
                <td>${element}</td>
                

            </tr>
        `;
    });

    output.innerHTML = result;
}

Display();

btnAdd.addEventListener("click", () => {
    console.log(name);

    if (name.value.trim() ===""){
        message.textContent = "Please fill name";

        setTimeout(() => {
            message.textContent = "";
        }, 3000);

        return;
    }
    student.push(name.value);
    console.log(student);
    Display();
});

