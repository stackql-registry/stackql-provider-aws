--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - transfer
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="describe_user">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="ServerId" /></td>
    <td><code>string</code></td>
    <td>A system-assigned unique identifier for a server that has this user assigned. (pattern: &lt;code&gt;s-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="User" /></td>
    <td><code>object</code></td>
    <td>An array containing the properties of the Transfer Family user for the ServerID value that you specified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_users">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Provides the unique Amazon Resource Name (ARN) for the user that you want to learn about. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HomeDirectory" /></td>
    <td><code>string</code></td>
    <td>The landing directory (folder) for a user when they log in to the server using the client. A HomeDirectory example is /bucket_name/home/mydirectory. You can use the HomeDirectory parameter for HomeDirectoryType when it is set to either PATH or LOGICAL. (pattern: &lt;code&gt;(|/.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HomeDirectoryType" /></td>
    <td><code>string</code></td>
    <td>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to PATH, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to LOGICAL, you need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 or Amazon EFS paths visible to your users. If HomeDirectoryType is LOGICAL, you must provide mappings, using the HomeDirectoryMappings parameter. If, on the other hand, HomeDirectoryType is PATH, you provide an absolute path using the HomeDirectory parameter. You cannot have both HomeDirectory and HomeDirectoryMappings in your template. (PATH, LOGICAL)</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests. The IAM role that controls your users' access to your Amazon S3 bucket for servers with Domain=S3, or your EFS file system for servers with Domain=EFS. The policies attached to this role determine the level of access you want to provide your users when transferring files into and out of your S3 buckets or EFS file systems. (pattern: &lt;code&gt;arn:.*role/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SshPublicKeyCount" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of SSH public keys stored for the user you specified.</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the user whose ARN was specified. User names are used for authentication purposes. (pattern: &lt;code&gt;&#91;\w&#93;&#91;\w@.-&#93;&#123;2,99&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_user"><CopyableCode code="describe_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its ServerId property. The response from this call returns the properties of the user associated with the ServerId value that was specified.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the users for a file transfer protocol-enabled server that you specify by passing the ServerId parameter.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-UserName"><code>UserName</code></a></td>
    <td></td>
    <td>Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the IdentityProviderType set to SERVICE_MANAGED. Using parameters for CreateUser, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-UserName"><code>UserName</code></a></td>
    <td></td>
    <td>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the UserName and ServerId you specify. The response returns the ServerId and the UserName for the updated user. In the console, you can select Restricted when you create or update a user. This ensures that the user can't access anything outside of their home directory. The programmatic way to configure this behavior is to update the user. Set their HomeDirectoryType to LOGICAL, and specify HomeDirectoryMappings with Entry as root (/) and Target as their home directory. For example, if the user's home directory is /test/admin-user, the following command updates the user so that their configuration in the console shows the Restricted flag as selected. aws transfer update-user --server-id <code>&lt;server-id&gt;</code> --user-name admin-user --home-directory-type LOGICAL --home-directory-mappings "&#91;&#123;\"Entry\":\"/\", \"Target\":\"/test/admin-user\"&#125;&#93;"</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the user belonging to a file transfer protocol-enabled server you specify. No response returns from this operation. When you delete a user from a server, the user's information is lost.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="describe_user">

Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its ServerId property. The response from this call returns the properties of the user associated with the ServerId value that was specified.

```sql
SELECT
ServerId,
User
FROM aws.transfer.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Lists the users for a file transfer protocol-enabled server that you specify by passing the ServerId parameter.

```sql
SELECT
Arn,
HomeDirectory,
HomeDirectoryType,
Role,
SshPublicKeyCount,
UserName
FROM aws.transfer.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user"
    values={[
        { label: 'create_user', value: 'create_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user">

Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the IdentityProviderType set to SERVICE_MANAGED. Using parameters for CreateUser, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.

```sql
INSERT INTO aws.transfer.users (
HomeDirectory,
HomeDirectoryType,
HomeDirectoryMappings,
Policy,
PosixProfile,
Role,
ServerId,
SshPublicKeyBody,
Tags,
UserName,
region
)
SELECT 
'{{ HomeDirectory }}',
'{{ HomeDirectoryType }}',
'{{ HomeDirectoryMappings }}',
'{{ Policy }}',
'{{ PosixProfile }}',
'{{ Role }}',
'{{ ServerId }}' /* required */,
'{{ SshPublicKeyBody }}',
'{{ Tags }}',
'{{ UserName }}' /* required */,
'{{ region }}'
RETURNING
ServerId,
UserName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: HomeDirectory
      value: "{{ HomeDirectory }}"
      description: |
        The landing directory (folder) for a user when they log in to the server using the client. A HomeDirectory example is /bucket_name/home/mydirectory. You can use the HomeDirectory parameter for HomeDirectoryType when it is set to either PATH or LOGICAL.
    - name: HomeDirectoryType
      value: "{{ HomeDirectoryType }}"
      description: |
        The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to PATH, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to LOGICAL, you need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 or Amazon EFS paths visible to your users. If HomeDirectoryType is LOGICAL, you must provide mappings, using the HomeDirectoryMappings parameter. If, on the other hand, HomeDirectoryType is PATH, you provide an absolute path using the HomeDirectory parameter. You cannot have both HomeDirectory and HomeDirectoryMappings in your template.
      valid_values: ['PATH', 'LOGICAL']
    - name: HomeDirectoryMappings
      description: |
        Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the Entry and Target pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in Target. This value can be set only when HomeDirectoryType is set to LOGICAL. The following is an Entry and Target pair example. [ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ] In most cases, you can use this value instead of the session policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to / and set Target to the value the user should see for their home directory when they log in. The following is an Entry and Target pair example for chroot. [ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]
      value:
        - Entry: "{{ Entry }}"
          Target: "{{ Target }}"
          Type: "{{ Type }}"
    - name: Policy
      value: "{{ Policy }}"
      description: |
        A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include \${Transfer:UserName}, \${Transfer:HomeDirectory}, and \${Transfer:HomeBucket}. This policy applies only when the domain of ServerId is Amazon S3. Amazon EFS does not use session policies. For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a session policy, see Example session policy. For more information, see AssumeRole in the Amazon Web Services Security Token Service API Reference.
    - name: PosixProfile
      description: |
        The full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
      value:
        Uid: {{ Uid }}
        Gid: {{ Gid }}
        SecondaryGids:
          - {{ SecondaryGids }}
    - name: Role
      value: "{{ Role }}"
      description: |
        The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
    - name: ServerId
      value: "{{ ServerId }}"
      description: |
        A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.
    - name: SshPublicKeyBody
      value: "{{ SshPublicKeyBody }}"
      description: |
        The public portion of the Secure Shell (SSH) key used to authenticate the user to the server. The three standard SSH public key format elements are <key type>, <body base64>, and an optional \`<comment>\`, with spaces between each element. Transfer Family accepts RSA, ECDSA, and ED25519 keys. For RSA keys, the key type is ssh-rsa. For ED25519 keys, the key type is ssh-ed25519. For ECDSA keys, the key type is either ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, or ecdsa-sha2-nistp521, depending on the size of the key you generated.
    - name: Tags
      description: |
        Key-value pairs that can be used to group and search for users. Tags are metadata attached to users for any purpose.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: UserName
      value: "{{ UserName }}"
      description: |
        A unique string that identifies a user and is associated with a ServerId. This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user"
    values={[
        { label: 'update_user', value: 'update_user' }
    ]}
>
<TabItem value="update_user">

Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the UserName and ServerId you specify. The response returns the ServerId and the UserName for the updated user. In the console, you can select Restricted when you create or update a user. This ensures that the user can't access anything outside of their home directory. The programmatic way to configure this behavior is to update the user. Set their HomeDirectoryType to LOGICAL, and specify HomeDirectoryMappings with Entry as root (/) and Target as their home directory. For example, if the user's home directory is /test/admin-user, the following command updates the user so that their configuration in the console shows the Restricted flag as selected. aws transfer update-user --server-id <code>&lt;server-id&gt;</code> --user-name admin-user --home-directory-type LOGICAL --home-directory-mappings "&#91;&#123;\"Entry\":\"/\", \"Target\":\"/test/admin-user\"&#125;&#93;"

```sql
UPDATE aws.transfer.users
SET 
HomeDirectory = '{{ HomeDirectory }}',
HomeDirectoryType = '{{ HomeDirectoryType }}',
HomeDirectoryMappings = '{{ HomeDirectoryMappings }}',
Policy = '{{ Policy }}',
PosixProfile = '{{ PosixProfile }}',
Role = '{{ Role }}',
ServerId = '{{ ServerId }}',
UserName = '{{ UserName }}'
WHERE 
region = '{{ region }}' --required
AND ServerId = '{{ ServerId }}' --required
AND UserName = '{{ UserName }}' --required
RETURNING
ServerId,
UserName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user"
    values={[
        { label: 'delete_user', value: 'delete_user' }
    ]}
>
<TabItem value="delete_user">

Deletes the user belonging to a file transfer protocol-enabled server you specify. No response returns from this operation. When you delete a user from a server, the user's information is lost.

```sql
DELETE FROM aws.transfer.users
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
