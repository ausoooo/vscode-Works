let names = [];
let input;

while ((input = prompt("Enter a name (or '0' to finish):")) !== '0') {
    names.push(input);
}


let searchName = prompt("Enter a name to search:");

document.write("Names in the array:<br>");
for (let name of names) {
    document.write(`${name}<br>`);
}

if (names.includes(searchName)) {
    document.write(`<br> Found ${searchName}`);
} else {
    document.write("Not Found");
}