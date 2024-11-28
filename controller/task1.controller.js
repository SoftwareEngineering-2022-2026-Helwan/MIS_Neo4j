import {query} from "../db/index.js";

export const task1Controller = async(req, res) => 
{
    let queryString = `create (n1:Person{name:"hany",age:"20"}),
                    (n2:Person{name:"ahmed",age:"21"}),
                    (n3:Person{name:"habiba",age:"22"}),
                    (n4:Person{name:"tom",age:"23"}),
                    (n5:Person{name:"rachel",age:"24"})
                    
                    create (n1)-[:friend_With{since:"2005", lastHangOutSpot:"Maadi"}]->(n2),
                    (n1)-[:relatives{type:"brother"}]->(n4),
                    (n3)-[:hangOut{place:"zayed", date:"15-12-2024", time:"12:00"}]->(n5),
                    (n4)-[:roommate{at:"helwan",rent:"2500"}]->(n5),
                    (n2)-[:hangOut{place:"zamalek", date:"11-11-2024", time:"11:00"}]->(n3),
                    (n5)-[:hangOut{place:"korba", date:"1-1-2025", time:"1:00"}]->(n1)

                    return n1,n2,n3,n4,n5`;
    let records= await query.run(queryString);
    
    res.json({message: "nodes created!",records: records.records});
};