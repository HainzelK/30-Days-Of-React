const kosong = [];
const isi6 = [1,2,3,4,5,6];
console.log(isi6.length);
console.log(isi6[0], isi6[3],isi6[5]);
const mixedDataTypes = [1, 'wan', true, 1.12];
const itCompanies = ['Facebook','Google', 'Microsoft','Apple','IBM','Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0],itCompanies[3], itCompanies[6]);

for  (let i = 0; i<itCompanies.length; i++){
    console.log(itCompanies[i]);
}

for  (let i = 0; i<itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies.join(', ') ,'are big IT companies.')

let indexIBM = itCompanies.indexOf('IBM')
if (indexIBM != -1){
    console.log('Ada perusahaannya')
} else {
    console.log ('Tidak ada')
}

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(4,7));
console.log(itCompanies.slice(2,4));

itCompanies.shift();
console.log(itCompanies);

itCompanies.shift('Apple');
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

console.log(itCompanies.splice());

