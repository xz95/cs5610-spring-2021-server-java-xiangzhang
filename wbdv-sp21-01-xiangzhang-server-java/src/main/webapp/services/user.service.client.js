function AdminUserServiceClient() {
  this.createUser = createUser;
  this.findAllUsers = findAllUsers;
  this.findUserById = findUserById;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;
  this.url = 'https://wbdv-generic-server.herokuapp.com/api/001832331/users';
  var self = this;
  function createUser(user) {
    return fetch(self.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user) //convert user into string that can be stream into the internet
    }).then(function (response) {
      return response.json()
    })
  }
  function findAllUsers() {
    // fetch returns an object
    var promise = fetch(self.url)
    // then function allows it to register for call back
    return promise.then(function (response) {
      return response.json()
    })
  }
  function findUserById(userId) {

  }
  function updateUser(userId, user) {

  }
  function deleteUser(userId) {
    return fetch(`${self.url}/${userId}`,
        {method: 'DELETE'},
        {mode: 'cors'})
  }
}
