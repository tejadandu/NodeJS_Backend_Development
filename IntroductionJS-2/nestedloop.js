// nearest loop
for(let i = 0; i < 5; i++){
    let str = "";
    for(let j = 0; true; j++){
        str += "*";
        if(i == j){
            break;
        }
    }
    console.log(str);
}
