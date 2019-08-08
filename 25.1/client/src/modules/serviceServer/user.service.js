
const method = "GET";

class UserServiceFetch {
  constructor(url){
    this.url = url;
  };

  getFetch(url) {
    return fetch(url)
    .then(response => response.json())
    .catch(error => "eror UserServiceFetch");
  };


  getHXMhttp(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = () => {
        const request = JSON.parse(xhr.response);
        resolve(request);
      };
      xhr.send();
    });
  };

  
  add(url,name) {
    
    // console.log(JSON.stringify(name));

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(name ),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  };

  chenge(url,name) {
    
    // console.log(JSON.stringify(name));

    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(name ),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  };



};

function UserServiceHXMhttp(url) {
  this.url = url;
};

UserServiceHXMhttp.prototype.getHXMhttp = function(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      const request = JSON.parse(xhr.response);
      resolve(request);
    };
    xhr.send();
  });
};



export { UserServiceFetch, UserServiceHXMhttp };
