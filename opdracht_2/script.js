function huisWerkMaken(vak, callback){
console.log('Ok, Ok, ik ga nu mijn ${vak} huiswerk maken');
callback();
}
function klaarMetHuiswerk(){
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}
huisWerkMaken("wiskunde", klaarMetHuiswerk);

function huisWerkMaken2(vak){
    setTimeout (function(){
    console.log('Ok, Ok, ik ga nu mijn ${vak} huiswerk maken');
}, 500);}

function klaarMetHuiswerk2(){
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}

huisWerkMaken2('Math');
klaarMetHuiswerk2()
