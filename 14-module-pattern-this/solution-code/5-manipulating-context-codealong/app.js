var user = {
  firstName: 'Barack',
  lastName: 'Obama',
  showFullName: function() {
    console.log(this.firstName, this.lastName)
  }
}

/* default context
user.showFullName() // Barack Obama
*/

// $('.button').click(user.showFullName) // undefined undefined

/* using call() method
$('.button').click(function() {
 user.showFullName.call(user) // Barack Obama
})
*/

/* using apply() method
$('.button').click(function() {
 user.showFullName.apply(user) // Barack Obama
})
*/

/* using call() and apply() while passing multiple arguments
var user = {
  firstName: 'Barack',
  lastName: 'Obama',
  showFullName: function(one, two, three) {
    console.log(this.firstName, this.lastName, one, two, three)
  }
}

$('.button').click(function() {
 user.showFullName.call(user, 1, 2, 3) // Barack Obama 1 2 3
})

$('.button').click(function() {
 user.showFullName.apply(user, [1, 2, 3]) // Barack Obama 1 2 3
})
*/

// using bind() 
// declare a new variable whose value is the user.showFullName function with a context set to user
var contextSetUser = user.showFullName.bind(user)
$('.button').click(contextSetUser) // Barack Obama

$('.button').click(user.showFullName) // undefined undefined
