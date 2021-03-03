const jedi = [];

jedi [0] = "luke"
console.log(jedi);

jedi.push ("obi wan kanobi")
console.log(jedi);


jedi.unshift("yoda")
console.log(jedi);


console.log(jedi[1]);

jedi.splice(2,1);
console.log(jedi);

jedi.splice(0,1)
console.log(jedi[0]);


const sithlords = ["darth vader", "darth sidious", "darth maul"]
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"]

const starWarVillians = sithlords.concat(imperialOfficers)

console.log(starWarVillians);


console.log(sithlords.slice(0,1));

const droids = ["r2-d2", "c-3p0", "ig-88"]

console.log(droids[0]);





droids.splice(2,1, "ig11")
console.log(droids);
