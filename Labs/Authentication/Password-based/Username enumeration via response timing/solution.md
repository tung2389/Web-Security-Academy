1. Because this lab will block an IP with too many requests, we need to spoof IP for every request.
2. Use BurpSuite Professional Edition to brute-force different usernames, but remember to spoof IP by marking the ```X-Forwarded-For```header as payload marker to change that header for every request.
3. Use http://www.unit-conversion.info/texttools/random-string-generator/ to generate a 1000-length string and set the password payload to that string.
4. Start attack with different usernames. Open the **Response received** column and notice one request with much longer response time than other requests. See the username in that request and that is the correct username.
5. Use the script **attackPassword.js** to get the correct password: (cannot use Burp Suite for this because somehow the lab doesn't return any 302 status for valid username and password)
- Open the **/login page** of the lab 
- Open the file **attackPassword.js**. 
- Change the **correctUsername variable** to the correct username that you obtain previously.
- Open Chrome Dev Tools -> Console. 
- Copy the code of **attackPassword.js** and paste it into the Console, then hit Enter.
- Wait some time for the code to print out the correct password for you.
