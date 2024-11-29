import { query } from "../db/index.js";

export const task2Controller = async (req, res) => {
    
    let records;
    let queryString;

    if(req.body.r)
    {
        queryString = `match(a:Person{name:"rachel"})-[r:hangOut]->(b:Person{name:"hany"}) delete r return a,b;`;
    }
    else if (req.body.p)
    {
        queryString = `match(a:Person) where a.name="tom" set a.age = NULL return a;`;
        
    }
    else
    {
        queryString = `match(a:Person{name:"hany"}) detach delete a return a;`;

    }
    
    records = await query.run(queryString);
    
    res.json({message: "deleted successfully!",records: records.records});
};
