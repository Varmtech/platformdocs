---
id: apigetst
title: Getting Started
---


Platform API consists of different types of data resources related to chat activities. It allows you to interact with these resources using HTTP protocol requests. Chat API is based on RESTful guidelines. It uses standard HTTP protocols and returns JSON payloads in response to HTTP requests. 
<p>
Chat API makes it comfortable to customize chat features and services from the server-side. With Chat API, your backend servers can communicate with our platform and perform various administrative actions like:
</p>

- Managing channels
- Users 
- Messages



## Base URL ##

API calls are performed using the Base URL on every request. The
request must also include an API key in the header for authentication.
<p>
The following Base URL is used for the Chat API.</p>

```
                https://{{apiUrl}}/v1/{{appId}}/
```


The first part of the URL remains unchanged. Based on API request type, a specific endpoint is added to the base URL
 For example, ``application``.

Requests containing similar endpoints can perform different actions depending on the information and parameters included in the header.

## Header ##

Headers are parameters containing information associated with the API request.
Sceyt API header must contain API key. API key helps the Sceyt server to authenticate your requests.


## Authentication ##


All API requests must be authenticated by Sceyt server using API keys. You can create an API Key from Sceyt Dashboard. To create an API key go to Dashboard > Settings > API Keys, press Create API Key, type the name and the IP address you are using and press generate, copy the API key.

As mentioned above API keys must be included in each request header for authentication.

>Note: The API is generated just once, make sure to save it and store it safely.

## URL encoding ##

Request URLs containing characters outside of the ASCII  table must all be encoded into a valid ASCII format. Url encoding converts unsafe ASCII characters with ``%`` followed by two hexadecimal digits.

For example, if you have a non-ASCII character parameter like `username_new*user` is encoded to `username_new%2Auser`.

