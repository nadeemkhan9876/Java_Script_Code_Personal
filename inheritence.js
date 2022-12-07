var bird={
    canFly:true,
    hasWings:true,
    hasFeathers:true,
}

var eagle=Object.create(bird)
console.log("Can fly",eagle.canFly)

var penguin=Object.create(bird)
    penguin.canFly=false
console.log("can fly",penguin.canFly)
console.log("has wing",penguin.hasWings)


