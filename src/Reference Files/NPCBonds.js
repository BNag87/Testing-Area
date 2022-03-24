import { FN_randomRanged } from './NPCNames'

let ar_Bonds = [
    "Dedicated to life goal", 
    "Protective of family", 
    "Protective of friends", 
    "Loyal to a benefactor", 
    "Captivated by a romantic interest", 
    "Drawn to a special place", 
    "Protective of a keepsake", 
    "Protective of a possession", 
    "Out for revenge", 
    "Driven by redemption", 
    "Struck with a wanderlust"
];

export const FN_get_npc_bond = () => {
    let index = null;
    index = FN_randomRanged(0, (ar_Bonds.length-1));
    return ar_Bonds[index];
}