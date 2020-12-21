---
id: role
title: Roles and Permissions
---




When a new application is created, two default channel member roles with their set of permissions are automatically created: Owner and Participant.


The user who creates the channel automatically becomes the Owner. A channel can have only one Owner. By default, the Owner has all the permissions and can perform all the possible actions inside the channel, including changing other members' roles and deleting the channel. When a user is added to a channel without being assigned a specific role, that user automatically becomes a Participant.  
Other members of the channel can also add new users and assign roles to them.
When users are added to an existing channel without being assigned a specific role, they will automatically get the same role as the member who added them.

### Default Roles and Permissions ###

When a new application is created, the following default roles with their permissions are created automatically:

|Role|Permissions|
|---|---|
|Owner|Delete Channel|
||Edit Channel|
||Add Member|
||Kick Member|
||Kick and Block Member|
||Change Member Role|
||Send Message|
||Edit Own Message|
||Edit any Message|
||Delete Own Message|
||Delete any Message|
||Mention Member|
||Add message Reaction|
||Delete Own Message reaction|
||Delete any Reaction|
||Delete Channel|

|Role|Permissions|
|---|---|
|Participant|Add Member|
||Change Member role|
||Send Message|
||Edit Own Message|
||Delete Own Message|
||Mention a Member|
||Send Attachment Message |
||Delete Own Attachment Message|
||Add Message Reaction |
||Delete Own Message Reaction|

### Role Weight ###

Besides permissions, roles also have weight. The weight defines the hierarchy of roles. 
It determines which role comes first and which one is more important. The higher the number, the more important is the role.
For example, John and Garry are members of the "painting" channel; they both have permission to delete any message. But if John's role weight value is 20 and Garry's is 40, this means that John won't be able to delete Garry's Messages.
The member who adds a new user to an existing channel can not set a weight value to that member more than his own. 


> **Note:** You can set a numeric weight value from 1-99.

## Manage Roles and Permissions ##

Role management can be done from Sceyt dashboard and over REST Api. You can create a new custom role with its permissions, duplicate, edit and delete it. When creating a new role, you can set permissions, such as add members, send messages, change member role, and more.

### Create New Role ###

When an application is created, two Roles are created by default: Owner and Participant. The Owner has permission to perform all the possible actions inside the channel. This role can't be duplicated, edited, or deleted. 


To create a new role, follow these steps:

Go to **Dashboard > Roles** and click Create New Role.

2. Enter role name, description, and weight.

3. Choose your preferred permissions for the role and press Create.

> **Note**: Weigh value must be 1-99.


### Edit Role ###

1. Go to **Dashboard > Roles**

2. Find the role you want to edit.

3. Press Edit on the right. 

4. After editing the role, press Save.



### Duplicate The Role ###


1. To duplicate the role, go to **Dashboard > Roles**

2. Find the role you would like to duplicate.

3. Press Duplicate.

4. Type in a name for the role and press Duplicate.

### Delete Role ###

1. To delete a role, follow the actions described above and press Delete.

2. Type in “delete” and press Delete to confirm.

> **Note:** You can’t delete a role if there is a user assigned to it. 

