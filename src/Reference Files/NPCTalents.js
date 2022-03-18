import { FN_randomRanged } from './NPCNames'

//Array that stores all talents
let ar_Talents = 
    [
        "Playing a musical instrument",
        "Speaking several languages", 
        "Being unbelievably lucky", 
        "Having a perfect memory", 
        "Being great with Animals", 
        "Being great with Children", 
        "Being great at puzzles", 
        "Being great at one game",
        "Being great at impressions", 
        "Drawing beautifully", 
        "Singing beautifully", 
        "Outdrinking everyone", 
        "Being an expert carpenter", 
        "Being an expert Cook", 
        "Being an expert at darts",
        "Being an expert skimmer", 
        "Being an expert juggler", 
        "Being a skilled actor",
        "Being a master of disguise",
        "Being a skilled dancer", 
        "Knowing the thieves' cant"
    ];

export const FN_getTalent = () => {
    let index = null;
    index = FN_randomRanged(0, (ar_Talents.length-1));
    console.log("From FN_getTalent["+index+"], got: \n\t"+ar_Talents[index]);
    return ar_Talents[index];
}