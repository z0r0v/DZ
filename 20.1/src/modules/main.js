import { Data } from "./data.js";

const data = new Data();
const url = "https://jsonplaceholder.typicode.com/todos/1";

data.getUsefulContents(url).then(data.printFunc);
