//Program that calculates the correlation between boolean squirrel and the event property arrays element 


//var JOUNAL is made accessible to this file source code with the following line
require('/Users/macminizouhir/Documents/JS/SquirrelCorrelations/journal.js');
//journal.js is written in JSON format


//Function that calculates the coefficients returned as an array of 4 to calculate the correlation constant
//Each array calculated is unique because function increments array element based on presence of event, entry.squirrel true or false  
function tableFor(event, journal){
	let table = [0,0,0,0]
	for (let i=0; i<journal.length; i++){
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) index+=1;
		if (entry.squirrel) index +=2;
		table[index] += 1;
	}
	return table;
}

//Function that outputs correlation coefficient for table input
function phi(table){
	return(table[3]*table[0]-table[2]*table[1])/ Math.sqrt((table[2]+table[3])*(table[0]+table[1])*(table[1]+table[3])*(table[0]+table[2])) ;
}

console.log(tableFor("pizza", JOURNAL));

//skip line
console.log("\n");


//Loop to output each different array element of property event
for (let entry of JOURNAL){
	console.log(`${entry.events.length} events`);
}

console.log("\n");

//Loop to output each different array element of property event
for (let i=0; i<JOURNAL.length; i++){
	let entry = JOURNAL[i];
	console.log(`${entry.events.length} events`);
}

console.log("\n");


//Loop to display in a array all different elements event property array elements can have
function journalEvents(journal){
	let repertoire = [];
	for (let entry of JOURNAL){
		for (let event of entry.events){
			if(!repertoire.includes(event)){
				repertoire.push(event);
			}
		}
	}
	return repertoire;
}

console.log(journalEvents(JOURNAL));

console.log("\n");

// All correlations for each event property array elements with boolean squirrel
for (let activity of journalEvents(JOURNAL)){
	console.log(activity+ ":" , phi(tableFor(activity,JOURNAL)));
}

console.log("\n");

// Correlations superior than 0.1 and inferior than -0.1
for (let activity of journalEvents(JOURNAL)){
	let correlation =  phi(tableFor(activity,JOURNAL));
	if (correlation > 0.1 || correlation < -0.1){
		console.log(activity + ":", correlation);
	}
}

console.log("\n");

//Add the event property array elements "peanut teeth" for event property array that contain "peanuts" and don't constain "brushed teeth"
for (let entry of JOURNAL){
	if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
		entry.events.push("peanut teeth");
	}
}

//Calculate correlation coefficient
console.log(phi(tableFor("peanut teeth", JOURNAL)));