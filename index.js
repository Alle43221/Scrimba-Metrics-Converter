let val=10;

let Input=document.getElementById("inp");
let Button=document.getElementById("but");

Button.addEventListener("click", () =>
{
    val=Input.value;

    let feet=Number(val)*3.2808;
    feet=feet.toFixed(3);
    let met=0.304803*Number(val);
    met=met.toFixed(3);

    document.getElementById('len').innerText=`${val} meters = ${feet} feet | ${val} feet = ${met} meters`;

    let gal=Number(val)*0.2642;
    gal=gal.toFixed(3);
    let lit=Number(val)*3.78541;
    lit=lit.toFixed(3);

    document.getElementById('vol').innerText=`${val} liters = ${gal} gallons | ${val} gallons = ${lit} liters`;

    let pou=Number(val)*2.204622;
    pou=pou.toFixed(3);
    let kil=Number(val)*0.453592;
    kil=kil.toFixed(3);

    document.getElementById('mas').innerText=`${val} kilograms = ${pou} pounds | ${val} pounds = ${kil} kilograms`;
});
