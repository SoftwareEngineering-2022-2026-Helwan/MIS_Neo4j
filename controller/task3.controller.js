import { query } from "../db/index.js";

export const task3Controller = async (req, res) => {

    let records;
    if(req.body.r)
    {
        let queryString = `match(a:Person {name:"hany"})-[r:relatives]->(b:Person{name:"tom"}) set r.type = "uncle" return a,b`;
        records= await query.run(queryString);
    }
    else
    {
        let queryString = `match(a:Person {name: "tom"}) set a.age = "43" return a`;
        records= await query.run(queryString);
    }
    
    res.json({message: "updated successfully !",records: records.records});

};
