### The Burp suite community edition takes too long to run, so I wrote some Javascript code to get the work done.

- The solution is just comparing the length of response for all requests when you brute-force username (with some random password). When you try all possible usernames, the length of the response is the same except for one username, whose response's length that is longer than all other responses' lengths. That's the correct username, since if you enter a correct username but wrong password, the website displays "Incorrect password" instead of "Invalid username". You can apply the same technique to get the correct password.

- I wrote some Javascript programs to get the work done. See instructions below on how to use them.

1. To get the correct username:
- Open the file **attackUsername.js** and change the **url variable** to your url for the lab.
- Open Chrome Dev Tools -> Console. 
- Copy the code of **attackUsername.js** and paste it into the Console, then hit Enter.
- Wait some time for the code to print out the correct username for you.

2. To get the correct password:
- Open the file **attackPassword.js**. 
- Change the **url variable** to your url for the lab and the **correctUsername variable** to the correct username that you obtain previously.
- Open Chrome Dev Tools -> Console. 
- Copy the code of **attackPassword.js** and paste it into the Console, then hit Enter.
- Wait some time for the code to print out the correct password for you.

3. Log in with the correct username and password.