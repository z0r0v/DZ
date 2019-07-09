import { Data } from "./data.js";

const data = new Data();
const url = "https://jsonplaceholder.typicode.com/todos/1";

// data.getUsefulContents(url, function(data) {
//   console.log(data);
// });


data.getUsefulContents(url).then(function(data){console.log(data)});
