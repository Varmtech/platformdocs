---
id: apigetst
title: Getting Started
---


Platform API consists of different types of data resources related to chat activities. It allows you to directly interact with these resources, using HTTP protocol requests. Chat API is based on RESTful guidelines, it uses standard HTTP protocols and returns JSON payloads in response to HTTP requests. 
<p>
Chat API makes it comfortable to flexibly customize chat features and services from the server side. With Chat API your backend servers can communicate with our platform and perform various administrative actions like:
</p>

- Managing channels
- Managing users 
- Managing messages
- Uploading, downloading, and deleting files

## Base URL ##

API calls are performed using the Base URL on every request. The request must also include API key in the header for authentication.
The following Base URL is used for the Chat API.

```
             http//{{customerUrl}}/
```


The first part of the URL remains unchanged. Based on API request type a specific endpoint is added the to endpoint of URL
 For example ``/application``

Requests containing similar endpoints can perform different actions depending on the information and parameters included in the header.


## Authentication ##


The API requests must be authenticated by our server. In order to authenticate the request, you need to use an API token. You can find the API token in your dashboard…
For each HTTPS request, you must include the API token in the authentication header.

## URL encoding ##

URLs  containing non-ASCII characters must be encoded to be sent over the interet
Request Urls containing characters outsite of ASCII table must all be encoded into a valid ASCII format. Url encoding converts unsafe ASCII characters with ``%`` followed by two hexademical digits.

For example if you have a parapeter containg a non-ASCII character like
username_new*user is encoded to username_new%2Auser.

