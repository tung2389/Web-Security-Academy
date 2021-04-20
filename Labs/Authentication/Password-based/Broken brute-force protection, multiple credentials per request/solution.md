This lab made me a bit surprised because I don't think that there exists a website that has this kind of vulnerability.

1. With Burp running, investigate the login page. Notice that the POST /login request submits the login credentials in JSON format. Send this request to Burp Repeater.

2. In Burp Repeater, change username field co "carlos" and change the password field to the array of all passwords.

3. Send the request. This will return a 302 response.

4. Right-click on this request and select "Show response in browser". Copy the URL and load it in your browser. The page loads and you are logged in as carlos.

5. Click "My account" to access Carlos's account page and solve the lab.