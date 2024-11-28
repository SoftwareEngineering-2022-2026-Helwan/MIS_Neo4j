import {query} from "../db/index.js";

export const task1Controller = async(req, res) => 
{
    
    let records= await query.run(`create( f1: Person {name: "Hany", age: "21"})
                        -[r1:FriendsWith {since: 2022, at: "helwan"}]-> 
                        (f2:Person {name: "ahmed", age:"20"}) return f1, f2, r1;`);
    
    res.json({message: "nodes created!",records: records.records});
};