
const method = "GET";

class UserServiceFetch {
  constructor(url){
    this.url = url;
  };

  getFetch(url) {
    return fetch(url).then(response => response.json());
  }

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
  }
}

function UserServiceHXMhttp(url) {
  this.url = url;
}

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
