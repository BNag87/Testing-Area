import { FN_randomRanged } from './NPCNames'

//Array that stores all talents
let ar_Demeanor = 
    [
       "Argumentative",
       "Honest", 
       "Arrogant", 
       "Cheerful",
       "Distant", 
       "Blustering", 
       "Irritable", 
       "Rude", 
       "Ponderous", 
       "Curious",
       "Quiet",
       "Friendly",
       "Suspicious",
       "Cautious",
       "Patient",
       "Forgetful",
       "Dramatic"
    ];

export const FN_getDemeanor = () => {
    let index = null;
    index = FN_randomRanged(0, (ar_Demeanor.length-1));
    //console.log("From FN_getTalent["+index+"], got: \n\t"+ar_Demeanor[index]);
    return ar_Demeanor[index];
}