import { FN_randomRanged } from './NPCNames'

let ar_Flaws = [
    "Have a forbidden love", 
    "Fall in love easily", 
    "Enjoy decadent pleasures", 
    "Are self-righteous", 
    "Envy someones possession", 
    "Have overpowering greed", 
    "Are prone to rage", 
    "Have a powerful enemy", 
    "Have a specific phobia", 
    "Have a shameful past",
    "Have a scandalous past", 
    "Committed a crime",
    "Committed a serious misdeed",
    "Possess forbidden lore",
    "Have foolhardy bravery"
];

export const FN_get_npc_flaw = () => {
    let index = null;
    index = FN_randomRanged(0, (ar_Flaws.length-1));
    return ar_Flaws[index];
}