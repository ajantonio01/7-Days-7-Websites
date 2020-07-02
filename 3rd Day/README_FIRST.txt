Hello

Constraints:
- Developers should use the IP-API service to obtain the users country code.
- Developers should use the Fourtonfish service to obtain the greeting in the users native language by passing the country code.

User Stories
- User can see a mock login panel containing a user name text input field, a password text input field, and 'Login' and 'Logout' buttons.
- User can enter a mock login name into the User Name field.
- User can enter a mock password into the Password field. Input should be masked so the user see's asterisks (*) for each character that is entered rather than the plaintext password.
- User can click the 'Login' button to perform a mock login.
- User can see a message if either or both of the input fields are empty and the border color of the field(s) in error should be changed to red.
- User can see a login acknowledgement message in the format: <hello-in-native-language> user you have successfully logged in!
- User can click the 'Logout' button to clear the text input fields and any previous messages.
- User can see a new message when successfully logged out in the format: Have a great day user!