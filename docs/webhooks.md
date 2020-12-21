---
id: webhook
title: Webhooks
---

Webhooks are types of notifications you receive when you subscribe for certain events occurring in your application. You can subscribe to these events by creating and configuring Webhooks on Sceyt dashboard. For example, if you’ve created a webhook for the event “Channel Edited “,  whenever a new channel is edited, you will receive detailed HTTP Post payloads about that event.

## Webhooks Events ##

**Channels**

|Action|Description|
|---|---|
|Channel: Created|Triggered when a new channel is created.|
|Channel: Edited |Triggered when an existing channel is edited.|
|Channel: Deleted|Triggered when a channel is deleted.|

**Members**

|Action|Description|
|---|---|
|Member: Update|Triggered when member information is updated.|
|Member: Kicked|Triggered then a member is kicked from a channel.|
|Member: Kicked and blocked|Triggered when a member is kicked and blocked from a channel.|
|Member: Joined|Triggered when a member joins a channel.|
|Member: Left|Triggered when a member left the channel.|

**Messages**

|Action|Description|
|---|---|
|Message: Sent |Triggered when a message is sent.|
|Message: Received |Triggered then a message is received.|
|Message: Seen |Triggered when a sent message is seen.|
|Message: Edited|Triggered when a message is edited.|
|Message: Deleted |Triggered when a message is deleted.|
|Message:added |Triggered when a reaction is added to the message.|
|Message: removed|Triggered when a reaction is removed from a message.

**User** 

|Action|Description|
|---|---|
|User: Connected |Triggered when a user is connected to the chat.|
|User: Disconnected|Triggered when a user is disconnected from the chat.|

## Create Webhook in Your Dashboard ##

You can create webhooks choosing the events your webhook will listen to by setting a URL payload. Creating a webhook consists of two steps. First, you need to create and configure the webhook on Sceyt dashboard, after you need to set up your server to receive the payload.

### Payload URL ###

The payload URL is the URL of the server that will receive the webhook POST requests. For example you can set your URL to “URL example”.

### Secret ###

Webhooks secret, allows you to ensure that all the requests sent to your payload URL are from Sceyt server. You can use a random string to set a secure secret for your webhooks.

### SSL verification ###

You can choose to verify the SSL. Before delivering the webhook payload, Sceyt will verify your SSL certificate to ensure that your site is secure. 

To create a webhook:

1. Open Sceyt **> Dashboard > Settings > Webhooks**.
2. On the top right corner, press create Webhook.
3. Type the name of your webhook, Payload URL and the secret key.
4. You can choose the option to get all the updates or a specific one from the list.

## Configure your Server ##
You need to configure your server to receive payloads. To do that first you need to download and install [ngrok](https://ngrok.com/download). It helps to expose our localhost to the internet. 
After installing ngrok, in the command line you need to expose your host by running `./ngrok http “your localhost port”`.
You will a see a line looking like this: 
` $ Forwarding    http://7e9ea9dc.ngrok.io -> localhost ip `
Now copy the `*.ngrok.io ` URL, go to payload URL and paste it there. This will expose your host at path/ payload to the internet.

### Ping event ###

When you create a webhook a ping event will be sent to your server to let you know that your URL payload is valid and the Webhook is correctly set.

