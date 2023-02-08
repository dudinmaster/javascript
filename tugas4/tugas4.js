    var haitamHeight = 175
    var nahidaHeight = 140
    var zhongliHeight = 185

    var listHeight = [haitamHeight,nahidaHeight,zhongliHeight]
    var minHeight = Math.min(...listHeight)
    var maxHeight = Math.max(...listHeight)
    console.log(minHeight)
    console.log(maxHeight)
    
    if(haitamHeight > nahidaHeight && haitamHeight > zhongliHeight){
        console.log("haitam adalah karakter yang paling tinggi")
    }else if(haitamHeight > nahidaHeight && haitamHeight < zhongliHeight){
        console.log("haitam adalah karakter yang paling tinggi kedua")
    }
    else console.log("haitam adalah karakter yang paling pendek")

// ^^^ saya mencoba cari di google untuk menerapkan filter min dan max dengan menggunakan link referensi berikut
// https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
// tapi saya tidak tahu bagaimana mendeklarasikan output hasilnya dari min dan mix dilempar menjadi sebuah string ex : 145 , output = zhongli yang tertinggi dan nahida yang terpendek

// dibawah ini saya mencoba menggunakan function untuk mereturn hasil dari param yang nantinya akan bisa diset oleh user dengan 3 param sekaligus
console.log("====================DIBAWAH INI RESULT DENGAN FUNCTION=======================")
function lihatHeight(haitam=175,nahida=140,zhongli=185){
    if(haitam > nahida && haitam > zhongli){
        console.log("haitam adalah karakter yang paling tinggi")
        console.log("zhongli adalah karakter yang paling tinggi kedua")
        console.log("nahida adalah karakter yang paling pendek")
    }else if(haitam > nahida && haitam < zhongli){
        console.log("haitam adalah karakter yang paling tinggi kedua ")
        console.log("zhongli adalah karakter yang paling tinggi")
        console.log("nahida adalah karakter yang paling pendek")
    }
    else{
        console.log("haitam adalah karakter yang paling pendek")
        console.log("zhongli adalah karakter yang paling tinggi")
        console.log("nahida adalah karakter yang paling tinggi kedua")
    } 
}

lihatHeight(135,156,175)
console.log("====================DIBAWAH INI RESULT DENGAN FUNCTION=======================")

// saya tidak relate dengan istilah yang paling pendek kedua , dimana itu sama maknanya dengan paling tinggi kedua , jadi saya pakai acuan tinggi karena dari tugas yang diukur adalah tinggi
