1. Use Burp Suite to brute force username. Notice that we are blocked if we send 3 invalid request.
2. To fix this, we just need to logged in with a valid credentials (e.g: our credential) for every 3 request to reset the invalid counter (somewhere in the server) to zero.
3.  Use the script **attackPassword.js** to get the correct password:
- Open the **/login page** of the lab 
- Open the file **attackPassword.js**. 
- Change the **correctUsername variable** to the correct username that you're given.
- Open Chrome Dev Tools -> Console. 
- Copy the code of **attackPassword.js** and paste it into the Console, then hit Enter.
- Wait some time for the code to print out the correct password for you.