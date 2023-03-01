function panggilArray(){
    var dataNama = [["alhaitam","dmc","baal"],
                    ["zhongli","kaeya","sukrose"],
                    ["kazuha","diluc","xinque"]]

    console.log(dataNama.length)
    console.log(dataNama[0][0])
}

panggilArray()

console.log("ini list crit rate")
var critRate = [20,50,30,40,80];
for(var i=0;i<critRate.length;i++){
    
    console.log(critRate[i])
}

console.log("ini list crit damage")
var critDamage = [100,120,150,180,200]
for(let x of critDamage){
    
    console.log(x)
}