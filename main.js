// your code, here
let Rami=88
let Natoya=92
let Max=68
let Lynn=100

let sasha=82
let Mohammed=98
let Jennifer=94
let Denise=92

teamOneAverageScore=(Rami+Natoya+Max+Lynn)/4
teamTwoAverageScore=(sasha+Mohammed+Jennifer+Denise)/4
averageofBothTeams=(teamOneAverageScore+teamTwoAverageScore)/2
console.log(`${Math.round(teamOneAverageScore)} is team one average score(rounded to nearest integer)`)
console.log(`${Math.round(teamTwoAverageScore)} is team two average score(rounded to nearest integer)`)
console.log(`${Math.round(averageofBothTeams)} is the average of both teams (rounded to nearest integer)`)
passingscorers=0
passingScores=[88,92,68,100,82,98,94,92]
//p=passingScores.length
let i=0
while (i<passingScores.length) {

  if (passingScores[i]>=70){
    passingscorers +=1;
  }else{
    
  }
i++;

}
console.log(`${passingscorers} number of explorers have passed`)
