// // Task 1
// var dairy=["cheese", "sour cream", "milk", "yoghurt", "ice cream", "milkshake"]

// function logDairy(dairy) {

//     for (value of dairy) {
//         console.log(value)
//     }
// }
// logDairy(dairy)

// // Task 2
// const animal = {
//     canJump: true
// };

// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;

// function birdCan(object) {
//     for (key of Object.keys(object)) {
//         console.log(`${key}: ${object[key]}`);
//     }
// }
// birdCan(bird);
// Task 1
// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// function logDairy() {
//     for (product of dairy) {
//         console.log(product)
//     }
// }
// logDairy()

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird)){
        console.log(key + ": " + bird[key])
    }
}
birdCan();

// // Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop])
    } 
}

animalCan();