import inquirer from "inquirer";
// the code runs till the number of tries user specified or till he wins

let maxValue=10;
let randomno = Math.floor(Math.random() * maxValue + 1);

let attempt=0;
let condition = false;



let chances = await inquirer.prompt({
    name:"try",
    type:"number",
    message:"how many chances do you want to take"
});


while(attempt<chances.try ||!condition){


    let guessno= await inquirer.prompt({
    name:"number",
    type:"number",
    message: "enter any number between 1 to 10 :"
});



    if (randomno===guessno.number){
        console.log("congragulations, you r right ");        
        condition=true;
        break;
    }else if (randomno > guessno.number)
        {console.log("your no is smaller")
    }else if (randomno < guessno.number)
        {console.log("your no is greater")
       
};
attempt++;
if(chances.try===attempt && !condition){
    console.log("sorry you loose the game");
    break;
}
};