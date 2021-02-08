// (function () {
//   var users = [
//     {username: "New User",
//       password: "0000",
//       firstName: "first name",
//       lastName: "last name",
//       role: "Faculty"
//     },
//     {username: "New User",
//       password: "1111",
//       firstName: "first name",
//       lastName: "last name",
//       role: "Faculty"
//     }
//   ];

// var $usernameFld, $passwordFld;
// var $firstNameFld, $lastNameFld, $roleFld;
// var $removeBtn, $editBtn, $createBtn;
// var $userRowTemplate, $tbody;
// var $addCourse = jQuery("#addCourse")
//var userService = new AdminUserServiceClient();
// $(main);
//
//
// function main() {
//   renderUsers()
// }
//  function createUser() {
//
// }
// function deleteUser() { … }
// function selectUser() { … }
// function updateUser() { … }
//    function renderUsers(users) {
//     $tbody = jQuery("tbody");
//     console.log(users.length)
//     for (var i = 0; i < users.length; i++) {
//       var user = users[i]
//       $tbody
//           .prepend(`
//           <tr>
//             <td>${user.username}</td>
//             <td>${user.password}</td>
//             <td>${user.firstName}</td>
//             <td>${user.lastName}</td>
//             <td>${user.role}</td>
//           </tr>
//           `)
//     }
//    }
//   // function findAllUsers() { … } // optional - might not need this
//   // function findUserById() { … } // optional - might not need this
// })();

// var users = [
//   {
//     username: "A",
//     password: "0000",
//     firstName: "a",
//     lastName: "a",
//     role: "Faculty"
//   },
//   {
//     username: "B",
//     password: "1111",
//     firstName: "b",
//     lastName: "b",
//     role: "Faculty"
//   }
// ];
var users = []
var defaultNewUser = {
  username: "New User",
  password: "0000",
  firstName: "first name",
  lastName: "last name",
  role: "Faculty"
}
var $addCourseBtn
var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $updateBtn
var $tableBody

function main() {
  alert("dom has loaded")
  $addCourseBtn = jQuery("#wbdv-addCourseBtn")
  $usernameFld = jQuery("#usernameFld")
  $passwordFld = jQuery("#passwordFld")
  $firstNameFld = jQuery("#firstNameFld")
  $lastNameFld = jQuery("#lastNameFld")
  $roleFld = jQuery("#roleFld")
  $updateBtn = jQuery("#wbdv-updateCourseBtn")
  $tableBody = jQuery("tbody");
  renderUsers(users)
  $addCourseBtn.click(addUser)
  //createUser(defaultNewUser)
}

function createUser(user) {
  users.push(user)
  renderUsers(users)
}

function renderUsers(users) {

  $tableBody.empty()
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    $tableBody
    .prepend(`
          <tr>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.role}</td>
            <td class="wbdv-actions">
            <span class="pull-right">
              <i class="fa-2x fa fa-times wbdv-remove" id="${i}"></i>
              <i class="fa-2x fa fa-pencil wbdv-edit" id="${i}"></i>
            </span>
            </td>
          </tr> 
          `)
  }
  jQuery(".wbdv-remove")
  .click(deleteUser)
};

function deleteUser(event) {
  console.log(event.target)
  var deleteBtn = jQuery(event.target)
  var theId = deleteBtn.attr("id")
  users.splice(theId, 1)
  renderUsers(users)
}

// function selectUser() { … }


function updateUser() {

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

jQuery(main)

