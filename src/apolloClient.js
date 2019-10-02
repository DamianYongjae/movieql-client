import ApolloClient from "apollo-boost";
import App from "./App";

const client = new ApolloClient({
    uri: "http://localhost:4000/"  //server location
})

export default client;