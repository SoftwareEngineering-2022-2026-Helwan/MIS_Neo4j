import {Movies} from "../db/index.js";

export const task5Controller = async (req, res) => {

    let queryString = `match(n3:Person) - [r3:hangOut] -> (n5:Person)
                    where r3.place = "zayed"
                    return n3,n5`;

let records= await query.run(queryString);

res.json({message: "nodes created!",records: records.records});
};
