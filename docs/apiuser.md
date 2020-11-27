---
id: apiusers
title: Users
---
Users can chat with each other through chat channels. Each user must have a unique user name. The API allows you to edit and manage different attributes of each user.

## API Requests ##

|Action |Type  | HTTP REQUEST|
--- | --- | ---
|Create User|POST|``https://{{apiUrl}}/v1/users``|
|Get User|GET|``https://{{apiUrl}}/v1/users/``|
|Get Users|GET|``https://{{apiUrl}}/v1/{{appId}}/users``|
|Update User|PUT|``https://{{apiUrl}}/v1/{{appId}}/users/``|
|Get Users with Presense|GET|``https://{{apiUrl}}/v1/{{appId}}/users``|
|Delete User|DELETE|``{{apiUrl}}/v1/{{appId}}/users/``|

### Users Properties ###

|Property name|type|description|
---|---|---|
|username|string|the unique user name|
|first_name|string|first name of the user|
|last_name|string|last name of the user|
|avatar|string|the Url of the user avatar|
|created_at|string|the time when the user was created|
|updated_at|string|the time when the user was updated|
|last_login_at|string|the time when the user loged in|
|presence_status|int|inticates the user presence status: online or offline|

## Create User ##

With this request you can create a new user.

### HTTP Request ###

``
httsps://{{apiUrl}}/v1/{{appId}}/users
``

### Parameters ###

|Parameter |Type  |Description|
--- | --- | ---
|username|string|unique user name|
|"first_name"|string|user's first name|
|"last_name"|string|user's last name|
|"avatar"|string| user's avatar Url|

### Response ###

```
 "username": "string",
    "first_name": "string",
    "last_name": "string",
    "avatar": "string",
    "created_at": "string",
    "updated_at": "string",
    "last_login_at": "string",
    "presence_status": 0
}
```

## Get User ##

You can retrieve a information of a specific user, from a specific chat channel using their unique user name

### HTTTP Request ###
`
https://{{apiUrl}}/v1/{{appId}}/users/
`
### Response ###

```
{
    "username": "string",
    "first_name": "string",
    "last_name": "string",
    "avatar": "string",
    "created_at": "string",
    "updated_at": "string",
    "last_login_at": "string",
    "presence_status": 0
}
```


## Get Users ##

You can veiw infromation of multiple users.

Query users requests can be paginated similar to how you paginate on other calls. Here's a short example:

### HTTP Request ###
`
https://{{apiUrl}}/v1/{{appId}}/users
`
### Respone ###



```
[
  {
    "avatar": "string",
    "created_at": "string",
    "first_name": "string",
    "last_name": "string",
    "role": "string",
    "status": 0,
    "updated_at": "string",
    "username": "string"
  }
]
```
## Get Users with Presense ##

This request indicate the pagination, allows you to see when the users were last active and their current acvitity.

### HTTP Request ###

``
https://{{apiUrl}}/v1/{{appId}}/users
``

### Respone ###


```
{
    "count": 0,
    "links": {
        "current": "string",
        "previews": null,
        "next": null,
        "first": null,
        "last": null
    },
    "total_count": 0,
    "users": []
}
```

## Delete User ##

Use this request to permently delete a user from the application.

### HTTP Request ###

{{apiUrl}}/v1/{{appId}}/users/usename?

### Response ###

