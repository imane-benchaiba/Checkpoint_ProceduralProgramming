function dot_product(v1,v2){ 
    return v1[0]*v2[0] + v1[1]*v2[1];
}

let vecteurs = [[0,8],[5,3],[9,0]];
let ps;
for (let i = 0; i < vecteurs.length-1; i++) {
    for (let j = 0; j < vecteurs.length; j++) {
        ps = dot_product(vecteurs[i], vecteurs[j]);
        if(ps===0) console.log("Les vecteurs : "+vecteurs[i]+", "+vecteurs[j]+" sont orthogonaux.")
    }   
}