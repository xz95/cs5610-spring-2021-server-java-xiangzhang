(function () {

var $removeBtn, $editBtn, $createBtn;
var $userRowTemplate, $tbody;



  var users = []

  var $addCourseBtn
  var $usernameFld
  var $passwordFld
  var $firstNameFld
  var $lastNameFld
  var $roleFld
  var $updateBtn
  var $deleteBtn
  var $tableBody
  var userService = new AdminUserServiceClient()


$(main);


  function main() {
    $addCourseBtn = jQuery("#wbdv-addUserBtn")
    $usernameFld = jQuery("#usernameFld")
    $passwordFld = jQuery("#passwordFld")
    $firstNameFld = jQuery("#firstNameFld")
    $lastNameFld = jQuery("#lastNameFld")
    $roleFld = jQuery("#roleFld")
    $updateBtn = jQuery("#wbdv-updateUserBtn")
    $tableBody = jQuery("tbody");

    $addCourseBtn.click(addUser)
    $updateBtn.click(updateUser)

    //createUser(defaultNewUser)
    // fetch all users from Json
    userService.findAllUsers()
    .then(function (actualUsersFromServer) {
      users = actualUsersFromServer
      renderUsers(users)
    })
  }

  function createUser(user) {
    userService.createUser(user)
    .then(function (actualUser) {
      users.push(actualUser)
      renderUsers(users)
    })
    resetToDefaultValue()
  }

  function deleteUser(event) {
    $deleteBtn = jQuery(event.target)
    var theIndex = $deleteBtn.attr("id")
    var theId = users[theIndex]._id

    userService.deleteUser(theId)
    .then(function (status) {
      users.splice(theIndex, 1)
      renderUsers(users)
    })

  }

  var selectedUser = null
  function selectUser(event) {
    var selectBtn = jQuery(event.target)
    var theId = selectBtn.attr("id")
    selectedUser = users.find(user => user._id === theId)
    $usernameFld.val(selectedUser.username)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstName)
    $lastNameFld.val(selectedUser.lastName)
    $roleFld.val(selectedUser.role)
  }

  function updateUser() {
    selectedUser.username = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstName = $firstNameFld.val()
    selectedUser.lastName = $lastNameFld.val()
    selectedUser.role = $roleFld.val()
    userService.updateUser(selectedUser._id, selectedUser)
    .then(function (status) {
      var index = users.findIndex(user => user._id === selectedUser._id)
      users[index] = selectedUser
      renderUsers(users)
    })
    //selectedUser = null
    resetToDefaultValue()
  }

  function resetToDefaultValue() {
    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
    $roleFld.val("FACULTY")
  }

  function addUser() {
    var newUser = {
      username: $usernameFld.val(),
      password: $passwordFld.val(),
      firstName: $firstNameFld.val(),
      lastName: $lastNameFld.val(),
      role: $roleFld.val()
    }
    createUser(newUser)
  }

  function renderUsers(users) {
    console.log(users)
    $tableBody.empty()
    for (var i = 0; i < users.length; i++) {
      var user = users[i]
      $tableBody
      .prepend(`
          <tr>
            <td>${user.username}</td>
            <td>****</td>
            
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.role}</td>
            <td class="wbdv-actions">
            <span class="pull-right">
              <i class="fa-2x fa fa-times wbdv-remove float-right" id="${i}"></i>
              <i class="fa-2x fa fa-pencil wbdv-edit mr-2 float-right" id="${user._id}"></i>
            </span>
            </td>
          </tr> 
          `)
    }
    jQuery(".wbdv-remove")
    .click(deleteUser)
    jQuery(".wbdv-edit")
    .click(selectUser)
  }
})();


