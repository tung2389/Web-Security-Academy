1. Click the button "View details" of any item.
2. Click on the "Check stock" button. This will send a POST request. Use Burp Suite to capture that request.
3. Append the string "|whoami|" after the value of the storeId parameter in the request. For example, the body of the request looks like :
```
productId=2&storeId=2|whoami
```

4. The server will run the command:
```
stockreport.pl 2 2 | whoami 
```

which will pipe the output stockreport.pl 2 2 as input of whoami command. Finally, we only get the output of whoami