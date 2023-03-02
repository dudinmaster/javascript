function panggilObj(){
    var mobil = {
        type : 'sedan',
        harga : 200000000,
        warna : 'putih',
    }
    console.log(mobil.harga)
    mobil.harga = 100000000;

    console.log(mobil)
    console.log(mobil.harga)
}

panggilObj()