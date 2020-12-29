---
id: pushnot
title: Push Notifications
---


Push Notifications provide the option to deliver some messages from application to a user while they are not using your app or when it’s running in the background. Push Notifications are supported both on Android and iOS. In this page, you will learn how to setup and configure push credentials for APN and Firebase.

### Push Delivery Logic ###

Push messages deliver with the following logic:

* Only channel members can receive push messages
* Members that are currently online do not receive push messages
* Messages added within a thread are only sent to users that are part of that thread (they posted at least one message or were mentioned)
* Messages from muted users are not sent
* Messages are sent to all registered devices for a user (up to 25)

## iOS Push Notifications ##

iOS push notifications are sent through Apple Push Notification service (APN). When a message is sent to Sceyt server through iOS Chat SDK, the server communicates with APNs and delivers push notifications to iOS devices where the application is installed.
You can configure push notifications for iOS with APN using both APN Token authentication and ANP Certificate authentication methods.

### APN Push Setup with Token Authentication ###

You can set up push notifications by APN token authentication. This way is simple to set up and provides powerful security.

<strong> Get your Team ID </strong>

1. Sign in to [Apple Developer Account](https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2Faccount%2F&rv=1) and go to membership. 
1. Copy your Team ID and store it somewhere safe.

<strong> Get your Bundle ID </strong>

1. Go to App Store Connect > My Apps.
1. Select your application.
1. Go to the App Store tab and select App information.
1. Select and copy the Bundle ID in the general information section.

### Generate a Token ###

1. Go to Apple Developer Account > Overview > Certificates > Identifiers & Providers
1. Select iOS, tvOS, watchOs on the navigation panel and go to Keys > All
Click on the + button and add key.
1. Type in a name for your key. In the key Services section select, Apple Push Notification service (APNs) and press continue.
1. Review the information and cress Confirm.
1. Copy your Key ID and store it safely.


### Upload the key Credentials ###

Now you need to upload the key credentials to Sceyt Dashboard

1. Go to Dashboard > Settings > Notifications
1. Select Create Credentials.
1. Choose the type of credential as APN.
1. Choose the authentication type as APNs token authentication.
1. Upload the Team, Key and Bundle ID.
1. Select APN push mode and press Create. 

### Setup Notifications Using Certificate Authentication ###

You can also setup APN with Certificate Authentication. To get  the Certificate you need to  create a Certificate Signing Request (CSR) through the keychain Access app on Mac.

### Create a Certificate Signing Request (CSR) ###

1. On your mac open the Keychain Access
1. Go to Keychain Access > Certificate Assistant > Request a Certificate from a Certificate Authority
1. Fill the information in the window, check Saved to disk option and press continue.
1. Choose the place to save the certificate and click Save 
1. Save the file in a secure place in your hard drive.

### Create a Push Notification SSL Certificate ###

1. Go to your [Apple Developer Account](https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2Faccount%2F&rv=1) > Certificates, Identifiers & Providers
1. Locate Certificates > All in the left part of the sidebar
1. On the top right corner press the + button
1. On the iOS certificate window under the developer section choose Apple Push  Notifications  service SLL (Sandbox & Production) and press continue.
1. On the next window select your application and press continue.
1. You will see the instruction on how to generate a .cetSinginRequest file. Press continue.
1. Press Choose FIle, locate  the .cetSinginRequest file and press continue.
1. Download the generated APNS SSL certificate and save it to your hard disk.

### Export the Certificate in .p12 Format ###

You need to generate a valid .p12 certificate for your application to upload on Sceyt dashboard. 

After creating your certificate open tour  “.cer ”  file with keychain access app. The file will be added to your macOS keychain.

1. In the Keychain Access app select Keychains > Login.
1. Then in the Category section, select Certificates.
1. Find the certificate you have created, it will have the name ”file name.”
1.Expand it to see the private key, right-click on that key and select Export and save the file in your hard drive.
1. In the popup window set the file format to Personal Information Exchange (.p12)
1. Save the file in your hard drive.

### Upload the certificate to Sceyt Dashboard ###

To upload the APNS certificate to Scey Dashboard, you need to do the following:

1. Go to Dashboard > Settings > Notifications.
1. Select Create Credentials.
1. Choose the type of credential APNs.
1. Choose the authentication type as APNs Certificate 
1. Upload the APN certificate .
1. Select APN push mode and press Create. 

Now you have a ready push notification that can be used both on development and production environments.

## Android Push Notifications ##

To set up push notifications for Android devices, you need to add your application project on  Firebase. To do that follow [these steps](https://firebase.google.com/docs/projects/learn-more?authuser=0). 

If your application is already added on Firebase, you can generate a firebase server key.

1. Go to [Firebase Console](https://console.firebase.google.com/u/0/), select your app project 
1. On the top of the left side, click the gear icon 
1. From the drop-down menu and click Project Settings.
1. Select Cloud messaging tab.
1. Copy server key under project credentials section. 
1. Go to Dashboard > Settings > Notifications.
1. Select Create Credential.
1. Choose the type of credential FCM.
1. Paste it in the API Key field and press Create


### Push notification Templates ### 

Each Push Notification type has a default template.

|Name|Type|Description|
|---|---|---|
|channel|object|
Channel object. You can access the channel name and any other custom field you have defined for this channel|
|sender|object|
Sender object. You can access the user name, id or any other custom field you have defined for the user|
|reciever|object|
Receiver object. You can access the user name, id or any other custom field you have defined for the user|
|messages|object|
Message object. You can access the text of the message (or a preview of it if the message is too large) or any other custom field you have defined for the message
|
|members|arry|
Channel members. You can access the user name, id and any other custom field of each member (i.e. excluding sender)|
|otherMembers|arry|
Like members but the user who will be receiving the notification is excluded (i.e. excluding sender and receiver) |
|unread_count|integer|Number of unread messages|
|unread channels|integer|
Number of unread channels for this user|





