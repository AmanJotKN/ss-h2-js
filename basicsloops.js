let str="aman"

// for(let i=1;i<=10;i++){
//    console.log("2x",i," = ",2*i)
// }

//sum of natural num 1-10

// let sum=0;
// for(let i=1;i<=3;i++){
//  sum=sum+i;
// }
// console.log(sum)

//product of natrual numbers from 1 - n
// let prod=1;
// for(let i=1;i<=4;i++){
// prod*=i;
// }
// console.log(prod)

// let sum=0;
// for(let i=1;i<=3;i++){
//  sum+=i;
// }
// console.log(sum)


// let i=1;
// while(i<=10){
//     console.log(i);
//     if(i==5){
//         break
//     }
//     i++;
// }



// for(let i=1;i<=10;i++){
//    if(i==9){
//     break;
//    }
//    console.log("2x",i," = ",2*i)

// }

// let i=1;
// while(false){
//     console.log(i);
//     if(i==5){
//         break
//     }
//     i++;
  
// }

// let i=12;
// do{
// console.log(i)
// i++;
// }while(i<=10)


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         console.log(j,"j")
//     }
//     console.log(i,"i")
// }


// for(let i=1;i<=5;i++){
//     let res=""
// for(let j=1;j<=5;j++){
// res+="* "
// }
// console.log(res)
// }


// for(let i=1;i<=5;i++){
//     let res=""
//     for(let j=1;j<=i;j++){
//         res+="* "
//     }
//     console.log(res)
// }

// for(let i=0;i<5;i++){
//     let res=""
//     for(let j=0;j<5-i;j++){
//         res+="* "
//     }
//     console.log(res)
// }

// for(let i=1;i<=5;i++){

//     let res=""

//sp, st

// for(let sp=0;sp<i;sp++){
//     res+="  "
// }

// for(let st=0;st<=5-i;st++){
//     res+="* "
// }
// console.log(res)
// }

for(let i=1;i<=5;i++){
    let res=""
    //sp, st
    for(let sp=1;sp<=5-i;sp++){
        res+="  "
    }
    for(let st=1;st<=i;st++){
        res+="* "
    }
    console.log(res)
}