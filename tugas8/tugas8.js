function panggilChar(){
    var char1 = {
        name : 'Al-haitam',
        weapon : 'Lofi',
        levelTalent : [9,10,7],
    }
    console.log(char1)
    char1.levelTalent = [10,10,10];
    console.log("hasil perubahan setelah level talen di upgrade",char1.levelTalent)
}

panggilChar()