1. With Burp running, investigate the login page and submit an invalid username and password. Send the POST /login request to Burp Intruder.

2. Select the attack type "Cluster bomb". Add a payload position to the username parameter. Add a blank payload position to the end of the request body by clicking "Add §" twice. The result should look something like this:
username=§invalid-username§&password=example§§.

3. On the "Payloads" tab, add the list of usernames to the first payload set. For the second set, select the "Null payloads" type and choose the option to generate 5 payloads. This will effectively cause each username to be repeated 4 times. Start the attack.

5. Sort the result by response length. Notice the longest response. Study the response more closely and notice that it contains a different error message: You have made too many incorrect login attempts. Make a note of this username.

6. Create a new Burp Intruder attack on the POST /login request, but this time select the "Sniper" attack type. Set the username parameter to the username that you just identified and add a payload position to the password parameter.

7. Add the list of passwords to the payload set. Then create a grep extraction rule by click "Add", then mark the error message "Invalid username or password", Burp suite will automatically generate the rule for you. Save the rule and start the attack.

8. In the results, sort the responses by length. Look at the shortest response. Look at the grep extract column. Notice that this response doesn't have any error message. Make a note of this password.

9. Wait for a minute to allow the account lock to reset. Log in using the username and password that you identified and access the user account page to solve the lab.