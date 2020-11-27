---
id: apiuserroles
title: User Roles
---

The Role determines what a user can do within the chat. Users can be assigned new roles. Roles and their permissions can be customized. 


|Action| Type  |Description|
--- | : ---: |--- |
|Create Role|POST|`https://{{apiUrl}}/v1/{{appId}}/roles`|
|Get Role|GET|`https://{{apiUrl}}/v1/{{appId}}/roles`|
|Get Roles|GET|`https://{{apiUrl}}/v1/{{appId}}/roles`|
|Update Role|PUT|`https://{{apiUrl}}/v1/{{appId}}/roles`|
|Delete Role|DELETE|`https://{{apiUrl}}/v1/{{appId}}/roles`|


## Create Role ##

Create a new custom role.

### HTTP Request ###

`https://{{apiUrl}}/v1/{{appId}}/roles`

### Actions ###

|Action| Type  |Description|
--- | : ---: |--- |
|"access"|int|access type|
|"app_id"|string|application ID|
|"description"|string|role description|
|"name"|string|role name|
|"permissions"|int|role permissions|
|"priority"|int|defines the weight|


### Response ###

{
  "access": 0,
  "app_id": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "permissions": [
    0
  ],
  "priority": 0
}

## Get Role ##

Retrieve a role by placing the role ID in the API request. The ID will be gnereated automaticcly when creating the role.

### HTTP Requests ###

`https://{{apiUrl}}/v1/{{appId}}/roles`

### Response ###

```{
  "access": 0,
  "app_id": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "permissions": [
    0
  ],
  "priority": 0
}
```

## Get Roles ##

List all roles

With this API you can retrieve all roles in a specific application

### HTTP Request ###

`https://{{apiUrl}}/v1/{{appId}}/roles`


### Response ###
```
[
  {
    "access": 0,
    "app_id": "string",
    "description": "string",
    "id": 0,
    "name": "string",
    "permissions": [
      0
    ],
    "priority": 0
  }
]
```
## Update Role ##

### HTTP Request ###

`https://{{apiUrl}}/v1/{{appId}}/roles`

### Acions ###

|Action| Type  |Description|
--- | : ---: |--- |
|"access"|int|access type|
|"description"|string|role description|
|"permissions"|int|role permissions|
|"priority"|int||

### Response ###

```
{
  "access": 0,
  "app_id": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "permissions": [
    0
  ],
  "priority": 0
}
```

## Delete Role ##

Permently delete a specific role. PLace the role ID in the request URL.

### HTTP Request ###

`https://{{apiUrl}}/v1/{{appId}}/roles`

