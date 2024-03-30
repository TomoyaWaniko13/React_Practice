// const [a, b, c] = [1, 2, 3];
// console.log(a);
//
// const object1 = {
//     d: 1,
//     e: 2,
//     f: 3
// };
//
// const {d, e, f} = object1;
// console.log(d);


const nekoArray = ["basic neko san", 'enormous neko san', 'cute neko san'];

const displayNames = ([name1, name2, name3]) => {
    console.log(name1);
    console.log(name2);
    console.log(name3);
};

displayNames(nekoArray);

const nekoObject = {
    neko1: 'basic neko san',
    neko2: 'enormous neko san',
    neko3: 'cute neko san'
}

//name1,name2,name3 are undefined
// because these variable names are not the same
// as the property names of the nekoObject.
const displayNames2 = ({name1, name2, name3}) =>{
    console.log(name1);
    console.log(name2);
    console.log(name3);
};

displayNames2(nekoObject);

//The following function is the correct version.
const displayNames3 = ({neko1, neko2, neko3}) =>{
    console.log(neko1);
    console.log(neko2);
    console.log(neko3);
};

displayNames3(nekoObject);