---
id: apifiles
title: Files
---
These API request manage files in the chat.

### API Requests ###
|Action|Type|HTTP Request|
|---|---|---|
|Upload File|POST|`https://{{apiUrl}}/v1/{{appId}}/files`**|
|Download File|GET|`https://{{apiUrl}}/v1/{{appId}}/files/FileName`|
|Delete File|DELETE|`https://{{apiUrl}}/v1/{{appId}}/files/FileName4`|
|Delete Message Attachements|DELETE|`https://{{apiUrl}}/v1/{{appId}}/messages/5/attachments?app_id=AppID`|

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
