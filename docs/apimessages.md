---
id: apifiles
title: Messages
---
Using the API request you can interact send messages typing indicators and perform other actions. 

### API Requests ###
|Action|Type|HTTP Request|
|---|---|---|
|Get Channel Messages|GET|`{{apiUrl}}/v1/{{appId}}/channels/channelID/messages`|
|Add Message in Channel|POST|`{{apiUrl}}/v1/{{appId}}/channels/channelID/messages`|
messageID`|
|Start Typing Message|POST|`{{apiUrl}}/v1/{{appId}}/channels/channelID/start-typing`|
|Stop Typing Message||`POST|{{apiUrl}}/v1/{{appId}}/customer/v1/channels/channelID/stop-typing`|
|Delete Message From Channel|DELETE|`{{apiUrl}}/v1/{{appId}}/channels/channelID/messages/101449892471377920`|
|Upload File|POST|`https://{{apiUrl}}/v1/{{appId}}/files`|
|Download File|GET|`https://{{apiUrl}}/v1/{{appId}}/files/FileName`|
|Delete File|DELETE|`https://{{apiUrl}}/v1/{{appId}}/files/FileName4`|
|Delete Message Attachements|DELETE|`https://{{apiUrl}}/v1/{{appId}}/messages/5/attachments?app_id=AppID`|

## Get Channel Messages	## 


This API request retrieves the messages from a specific channel.

**<font size="4">HTTP Request </font>**

```
GET https://{{apiUrl}}/v1/{{appId}}/channels/channelID/messages
```

**<font size="4">Respone</font>**

```
{    "count": 0,
    "links": {
        "current": url",
        "previews": null,
        "next": "url",
        "first": "url",
        "last": "url"
    },
    "messages": [
        {
            "id": "string",
            "from": "string",
            "body": "string"
        },
}
```
## Add Message in Channel ##

With this request you can send a message or an attachment to a channel


**<font size="4">HTTP Request </font>**

**<font size="4">Parameters </font>**

|Parameter|Type|Description|
|---|---|---|
|from|string|the member from whome the message is sent|
|body|string|the content of the message|
|metadata|string|custom metada of the message|
|attachents: name type, meta, url, size|string|the attachment and it type, size, url and metadata|

**<font size="4">Respone</font>**



### Upload File ###

This method allows you to upload a file.

### HTTP Request ###

```https://{{apiUrl}}/v1/{{appId}}/files```

### Download File ###

This API allows you to download files from the application.

### HTTP Request ###

```https://{{apiUrl}}/v1/{{appId}}/files/FileName```

### Delete File ###

Delete a specific file from the application.

### HTTP Request ###

```https://{{apiUrl}}/v1/{{appId}}/files/FileName4```
