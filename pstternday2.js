// for(let i=1;i<=5;i++){
//     let res=""
//     for(let sp=5;sp>=i;sp--){
//   res+=" "
//     }
//     for(let st=1;st<=i;st++){
//         res+="* "
//     }
//     console.log(res)
// }
// let n=3;
// for(let i=1;i<=n+1;i++){
//     let res=""

//     for(let sp=1;sp<i;sp++){
//         res+="  "
//     }
//     for(let st=n-i+1;st>=0;st--){
//         res+="* "
//     }
//     console.log(res)

// }
// let n=5;
// let star=1;
// for(let i=1;i<=2*n-1;i++){
// let res=""
// for(let st=1;st<=star;st++){
//     res+="* "
// }

// if(i<n){
//     star++;
// }
// else{
//     star--;
// }
// console.log(res)
// }


let n=7;
let star=1 , space=n-1;
for(let i=1;i<=2*n-1;i++){
    let res=""
    for(let sp=1;sp<=space;sp++){
        res+="  "
    }
    for(let st=1;st<=star;st++){
        res+="* "
    }
    if(i<n){
        star++;
        space--;
    }
    else{
        star--;
        space++;
    }
    console.log(res)

}