const url = "https://my-server-dz25.herokuapp.com/masters";

const method = "GET";

class UserServiceFetch {
  getFetch() {
    return fetch(url).then(response => response.json());
  }

  getHXMhttp() {
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

UserServiceHXMhttp.prototype.getHXMhttp = function() {
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
