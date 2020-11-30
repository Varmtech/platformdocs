---
id: iosguides
title: Authentication
---



Authentication is the validation of the user’s identity. It verifies that the users who tring to access the application are in fact who he/she claims to be. 

In this guide, you will learn about the user authentication process and how to issue a JWT token. JWT token contains the encrypted credentials of the user. It helps to authenticate the user and autherizes access to your application.


## Create Access Token ##

The access token must be created in your backend and signed using your private key 
Generate your private key on our platform. 


In your dashboard go to the Apps section and click on Create App 

Fill in the app name, description, choose the region and press generate key. 


A private key will be generated in the authentication window. Download your private key and press create.



To create a token you need the following information:

|Parameter|type|description|
|---|---|---|
|``Iat``|Issued at|``Iat`` defines the time when the token is issued.|
|``nbf``|Not before|The ``nbf`` determines the time before the token must not be accepted. This means that the “nfb” processing requires clarification of the time before the token is not valid. For example, if the ``nbf`` is 4000 then the token can’t be used before 4 seconds of its creation.|
|``exp``|Expiration time|``exp`` indicates the expiration time of the token. After the expiration, the token won't be processed and a new one must be issued.|
|``sub``|Subject |The “sub” defines the subject that the token is referred to. It is used for safe authorization checks for accessing the chat.|
|``aid``|Application ID|``aid`` is your application ID. You can find the application ID in your console.|



After creating the token sign it with your private key and verify it using the public key. The token will be validated and the user will be authorized to access the application. 



The following diagram shows the authentication process:


Digram

1. The user is requesting access.
1. Access token is issued in your backend.
1. Token is passed to the user.
1. The token is sent to SCEYT platform.
1. The token is authenticated, the data is compared and verified.


## Token Expiration ##

The tokens have an expiration time. The expiration time is determined when the token is issued, it can be minimum 10 minutes and maximum of hours. When the token is about to expire you must create a new one, so the clients can continue using the Chat.





 



