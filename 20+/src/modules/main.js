import { Data } from "./data.js";


const url = "https://jsonplaceholder.typicode.com/todos/1";
const data = new Data();

data.getUsefulContents(url);
