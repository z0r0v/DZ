const urlMaster1 = "https://my-server-dz25.herokuapp.com/masters/1";
const urlmaster2 = "https://my-server-dz25.herokuapp.com/masters/2";
const method = "GET";


class UserService{

  getFetch() {
    return fetch(urlMaster1).then(response => response.json());
  };

  getHXMhttp() {
    return new Promise((resolve, reject)=>{
      let xhr = new XMLHttpRequest();
      xhr.open(method, urlmaster2);
      xhr.onload = () =>{
        const request = JSON.parse(xhr.response);
       resolve(request);
      };
      xhr.send();
  });
  };

};











export { UserService };