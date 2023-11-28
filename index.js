console.log('test')

const items = [
    {name: 'mariam', age: 25},
    {name: 'dato',  age:28},
    {name: 'nino', age:33},
    {name: 'luka', age:45},

]
    
const total = items.reduce((currenttotal, items) =>{
    return items.age + currenttotal
},0)

console.log(total)


 
const myform = document.querySelector('#myform');

myform.addEventListener('submit', (element) => {
    element.preventdefault()
    let firstname = document.querySelector('#firstname')
    let lastname = document.querySelector('#lastname')
    let genders = document.querySelector('#genders')
    let subs = document.querySelector('#subs')

    console.log(firstname.value);
    console.log(lastname.value);
    console.log(genders.value);
    console.log(subs.value);


})




const stringarray = ['adsw', 'sdsdsdada', 'strrsr', 'sdadasdadadasdasdasd'];

const findlongestword = (array) => array.reduce((e,current) =>{
    if (current.length > e.length){
        return current;
    }else{
        return e;
    }
},'');

console.log(findlongestword(stringarray));

    
