//instrument list
const instr = ['Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute'];

//reference
const instrument = document.getElementById('instrumentList')

for(let i = 0; i < instr.length; i++){
    instrument.innerHTML += "<li>" + instr[i] + "</li>";
    console.log("for Loop:", instr[i]);
}