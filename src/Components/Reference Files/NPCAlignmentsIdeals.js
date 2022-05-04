import { FN_randomRanged } from './NPCNames'

//need to generate a random alignment to determine ideals avaialble
let ar_Alignments = ["LG", "NG", "CG", "LN", "TN", "CN", "LE", "NE", "CE"];

//Alignent "liberal/consvervative" views
let ar_GoodIdeals = ["'Beauty'", "'Charity'", "'Greater Good'", "'Life'", "'Respect'", "'Self-sacrifice'"];
let ar_NeutralIdeals = ["'Balance'", "'Knowledge'", "'Live and let live'", "'Moderation'", "'Neutrality'", "'People'"];
let ar_EvilIdeals = ["'Domination'", "'Greed'", "'Might'", "'Pain'", "'Retribution'", "Slaughter"];

//Alignment "flavour"
let ar_ChaoticIdeals = ["'Change'", "'Creativity'", "'Freedom'", "'Independence'", "'No limits'", "'Whimsy'"];
let ar_GenericIdeals = ["'Aspiration'", "'Discovery'", "'Glory'", "'Nation'", "'Redemption'", "'Wisdom'"];
let ar_LawfulIdeals = ["'Community'", "'Fairness'", "'Honour'", "'Logic'", "'Responsibility'", "'Tradition'"];

//Store "l/r" and "flavour" arrays in their own arrays
let ar_AlignmentFlavour = [ar_LawfulIdeals, ar_GenericIdeals, ar_ChaoticIdeals];
let ar_AlignmentIdeals = [ar_GoodIdeals, ar_NeutralIdeals, ar_EvilIdeals];

//function to generate a random alignment
export const FN_get_NPC_alignment = () => {
    let index = null;
    index = FN_randomRanged(0, ar_Alignments.length-1);
    return ar_Alignments[index];
}

//generate a random alignment, based on alignment that should already be set
export const FN_get_npc_alignment_traits = (presetAlignment) => {
    let side_Index = null;
    let flavour_Index = null;
    let input = String(presetAlignment); //convert the preset alignment to a string
    let output = null;

    try{
    switch(input){
        //==========----------GOOD ALIGNMENTS
        case "LG":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[0].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[0].length-1));
            output = (ar_AlignmentFlavour[0][flavour_Index]) +" and "+ (ar_AlignmentIdeals[0][side_Index])
            return output; 
            
        case "NG":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[1].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[0].length-1));
            output = String((ar_AlignmentFlavour[1][flavour_Index]) + " and " + (ar_AlignmentIdeals[0][side_Index]));
            return output; 
            
        case "CG":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[2].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[0].length-1));
            output = String((ar_AlignmentFlavour[2][flavour_Index]) + " and " + (ar_AlignmentIdeals[0][side_Index]));
            return output; 
                
        //==========----------NEUTRAL ALIGNMENTS
        case "LN":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[0].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[1].length-1));
            output = String((ar_AlignmentFlavour[0][flavour_Index]) + " and " + (ar_AlignmentIdeals[1][side_Index]));
            return output; 
            
        case "TN":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[1].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[1].length-1));
            output = String((ar_AlignmentFlavour[1][flavour_Index]) + " and " + (ar_AlignmentIdeals[1][side_Index]));
            return output; 
            
        case "CN":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[2].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[1].length-1));
            output = String((ar_AlignmentFlavour[2][flavour_Index]) + " and " + (ar_AlignmentIdeals[1][side_Index]));
            return output; 
            
        //==========----------EVIL ALIGNMENTS
        case "LE":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[0].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[2].length-1));
            output = String((ar_AlignmentFlavour[0][flavour_Index]) + " and " + (ar_AlignmentIdeals[2][side_Index]));
            return output; 
            
        case "NE":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[1].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[2].length-1));
            output = String((ar_AlignmentFlavour[1][flavour_Index]) + " and " + (ar_AlignmentIdeals[2][side_Index]));
            return output; 
            
        case "CE":
            flavour_Index = FN_randomRanged(0, (ar_AlignmentFlavour[2].length-1));
            side_Index = FN_randomRanged(0, (ar_AlignmentIdeals[2].length-1));
            output = String((ar_AlignmentFlavour[2][flavour_Index]) + " and " + (ar_AlignmentIdeals[2][side_Index]));
            return output; 
            
        default:
            return "Pants were shat"
    }}
    catch(error){
        console.log("Some shit went wrong in the NPCAlignmentsIdeals file: \n\t" + error);
    }
}
