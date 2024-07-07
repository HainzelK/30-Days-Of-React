console.log(countries, webTechs)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const ini = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
const pisah = ini.split(" ");
console.log(pisah);
console.log(pisah.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat')
console.log(shoppingCart);

// const indexShop = shoppingCart.length-1;
// if (shoppingCart[indexShop] != 'Sugar') {
//     shoppingCart.push('Sugar')
//     console.log(shoppingCart);
// }

const cekSugar = shoppingCart.includes('Sugar')
if (cekSugar == false){
    shoppingCart.push('Sugar')
    console.log(shoppingCart);
}

shoppingCart[3]='Green Tea';
console.log(shoppingCart);

const cekEti = countries.includes('Ethiopia')
if (cekEti == false){
    countries.push('Ethiopia')
    console.log(countries);
} else {
    console.log('ETHIOPIA')
}

const cekSass = webTechs.includes('Sass')
if (cekSass == false){
    webTechs.push('Sass')
    console.log(webTechs);
} else {
    console.log('Sass is a CSS preprocess')
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const minAge = ages.sort()
console.log( 'the minimum age is ',ages[0]);
const max = ages.length-1
console.log('the maximum age is ',ages[max])
console.log(ages)
const median = ages.length/2;
console.log('Median = ', ages[Math.floor(median)])

for (i = 0; i<10; i++){

    // let end = total/ages.length
    // console.log(end) 

}