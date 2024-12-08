let glocery1;
let glocery2;
let glocery3;

function calculateArea() {
    glocery1 = parseFloat(document.getElementById('glocery1').value);
    glocery2 = parseFloat(document.getElementById('glocery2').value);
    glocery3 = parseFloat(document.getElementById('glocery3').value);

    let total = glocery1 + glocery2 + glocery3;
    document.getElementById('result').innerText = `The total value is: ${total}`;
}