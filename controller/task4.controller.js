import { query } from "../db/index.js";

export const task4Controller = async (req, res) => {
    let queryString = `match (n1:Person),(n2:Person),(n3:Person)
                    where n1.name="hany" AND n2.name="ahmed" AND n3.name="habiba"
                    return n1,n2,n3`;

    let records= await query.run(queryString);
    
    res.json({message: "nodes created!",records: records.records});
};
