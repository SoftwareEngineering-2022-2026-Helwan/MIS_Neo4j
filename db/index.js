import neo4j from "neo4j-driver";


const URI = "bolt://localhost:7687";
const auth = {
    username: "neo4j",
    password: "12345678",
}
const driver = neo4j.driver(
    URI,
    neo4j.auth.basic(auth.username, auth.password)
);

export const query = driver.session();
