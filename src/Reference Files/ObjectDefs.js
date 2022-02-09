//create objects here and export them
//later, have api/backend feed object data here

//Exports constructor function for creating new character objects
//to allow multiple entries
export const char_Obj = function(id, fName, sName, age, gender, race, classType, level)
     {
        this.id = id;
        this.first_name = fName;
        this.second_name = sName;
        this.full_name = this.first_name + " " + this.second_name;;
        this.age = age; 
        this.gender = gender;
        this.race = race;
        this.classType = classType;
        this.level = level;
    }