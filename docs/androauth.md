---
id: androauth
title: Authenthication
---


Authentication is the validation of the user’s identity. It verifies that the users trying to access the application are who they claim to be. 

In this guide, you will learn about the user authentication process and how to issue a JWT token. JWT token contains the encrypted credentials of the user. It helps to authenticate the user and authorizes access to your application.

### Create Access Token ###

The access token must be created in your backend and signed using your private key. 

**Generate your private key on SCEYT Dashboard** 

<ol>
<p>
<li>
In your dashboard go to the Apps section and click on Create Application.</li> 
</p>
<p>
<li>
Fill in the app name, description, choose the region and press Generate Key.</li>
</p>
<li>
A private key will be generated in the authentication window. Download your private key and press Create.</li>
</ol>

<p>
To create a token you need the following information:
</p>

|Parameter|type|description|
|---|---|---|
|``Iat``|Issued at|``Iat`` defines the time when the token is issued.|
|``nbf``|Not before|The ``nbf`` determines the time before the token must not be accepted. This means that the “nfb” processing requires clarification of the time before the token is not valid. For example, if the ``nbf`` is 4000 then the token can’t be used before 4 seconds of its creation.|
|``exp``|Expiration time|``exp`` indicates the expiration time of the token. After the expiration, the token won't be processed and a new one must be issued.|
|``sub``|Subject |The “sub” defines the subject that the token is referred to. It is used for safe authorization checks for accessing the chat.|
|``aid``|Application ID|``aid`` is your application ID. You can find the application ID in your console.|



After creating the token, sign it with your private key and verify it using the public key. The token will be validated, and the user will be authorized to access the application. 



The following diagram shows the authentication process:


**Digram**

<ol>

<li>
The user is requesting access.</li>
<li>
 Access token is issued in your backend.</li>
 <li>
Token is passed to the user.</li>
<li>
The token is sent to SCEYT platform.</li>
<li>
The token is authenticated, the data is compared and verified.</li>

</ol>


## Token Expiration ##

The tokens have an expiration time. The expiration time is determined when the token is issued. It can be minimum 10 minutes and maximum "max time" hours. When the token is about to expire, you must create a new one, so the clients can continue using the chat.


