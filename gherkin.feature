Feature: 

Given the user is on the login page
When  the user enters valid credentials   
Then user should be redirected to the homepage
Then an error message should not be displayed

Scenario: User logs in with valid credentials
  Given the user is on the login page
  When the user enters valid credentials
  Then the user should be redirected to the homepage

Scenario: Invalid login attempt
  Given the user is on the login page
  When the user enters invalid credentials
  Then user should see an error message

Scenario: Valid login with remember me option
  Given the user is on the login page
  And the "Remember Me" checkbox is checked
  When the user enters valid credentials
  And the "Remember Me" checkbox is still checked
  Then the user should be logged in successfully

And the user tries to login without entering a password
When the user clicks the login button
Then an error message should be shown

Scenario: User logs out
  Given the user is logged in
  When the user clicks the logout button
  When the user is logged out
  Then 

Scenario: Redirect loop
  Given the user is on a page that causes a redirect loop
  When the page is loaded
  Then the user is redirected to the login page
  Then the user is redirected back to the original page
