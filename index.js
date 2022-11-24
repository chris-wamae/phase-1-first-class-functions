/* function Monday()
{
console.log("Go for a five-mile run");
console.log("Pump iron");
}

function Tuesday()
{
console.log("Go for a five-mile run")
console.log("Swim 40 laps")
}

function Wednesday()
{
console.log("Go for a five-mile run")
console.log("Go for a five-mile run")
}

function Thursday()
{
console.log("Go for a five-mile run")
console.log("Pump Iron")
}

function Friday()
{
console.log("Go for a five-mile run")
console.log("Swim 40 laps")
}

function runFiveMiles()
{console.log("Go for a five-mile run")}

function liftWeights()
{console.log("Pump iron");}

function swimFortyLaps()
{console.log("Swim 40 laps")}

function Monday()
{runFiveMiles()
 liftWeights()}

 function exerciceRoutine(postRunActivity)
 { runFiveMiles();
   postRunActivity();}

function Monday()
{exerciceRoutine(liftWeights);}

exerciceRoutine(function(){
console.log("Stretch! Work that core")
})

exerciceRoutine(() => {console.log("Stretch! Work that core")})

exerciceRoutine(()=> console.log("Stretch! Work that core"))

function morningRoutine(exercice){
    let breakfast;
    if(exercice === liftWeights) 
    {breakfast = "Protein Bar"}
    else if (exercice === swimFortyLaps)
    {breakfast = "kale smoothie"}
    else {breakfast = "granola"}

exerciceRoutine(exercice)
 return function()
 {console.log(`Nom nom nom, this ${breakfast} is delicious!`)}
}

const afterExercice = morningRoutine(liftWeights)

afterExercice
*/

function receivesAFunction(callback)
{return callback()}

function returnsANamedFunction()
{return function add(num1=1,num2=3)
{return num1 + num2}}

function returnsAnAnonymousFunction()
{return function(){return "This function is Anonymous"}}