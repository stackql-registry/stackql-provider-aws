--- 
title: access
hide_title: false
hide_table_of_contents: false
keywords:
  - access
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

Creates, updates, deletes, gets or lists an <code>access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_access"
    values={[
        { label: 'describe_access', value: 'describe_access' }
    ]}
>
<TabItem value="describe_access">

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
    <td><CopyableCode code="access" /></td>
    <td><code>object</code></td>
    <td>The external identifier of the server that the access is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>string</code></td>
    <td>A system-assigned unique identifier for a server that has this access assigned. (pattern: &lt;code&gt;s-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#describe_access"><CopyableCode code="describe_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its ServerId property and its ExternalId. The response from this call returns the properties of the access that is associated with the ServerId value that was specified.</td>
</tr>
<tr>
    <td><a href="#create_access"><CopyableCode code="create_access" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Role"><code>Role</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-ExternalId"><code>ExternalId</code></a></td>
    <td></td>
    <td>Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use CreateAccess to limit the access to the correct set of users who need this ability.</td>
</tr>
<tr>
    <td><a href="#update_access"><CopyableCode code="update_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-ExternalId"><code>ExternalId</code></a></td>
    <td></td>
    <td>Allows you to update parameters for the access specified in the ServerID and ExternalID parameters.</td>
</tr>
<tr>
    <td><a href="#delete_access"><CopyableCode code="delete_access" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows you to delete the access specified in the ServerID and ExternalID parameters.</td>
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
    defaultValue="describe_access"
    values={[
        { label: 'describe_access', value: 'describe_access' }
    ]}
>
<TabItem value="describe_access">

Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its ServerId property and its ExternalId. The response from this call returns the properties of the access that is associated with the ServerId value that was specified.

```sql
SELECT
access,
server_id
FROM aws.transfer.access
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access"
    values={[
        { label: 'create_access', value: 'create_access' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access">

Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use CreateAccess to limit the access to the correct set of users who need this ability.

```sql
INSERT INTO aws.transfer.access (
HomeDirectory,
HomeDirectoryType,
HomeDirectoryMappings,
Policy,
PosixProfile,
Role,
ServerId,
ExternalId,
region
)
SELECT 
'{{ HomeDirectory }}',
'{{ HomeDirectoryType }}',
'{{ HomeDirectoryMappings }}',
'{{ Policy }}',
'{{ PosixProfile }}',
'{{ Role }}' /* required */,
'{{ ServerId }}' /* required */,
'{{ ExternalId }}' /* required */,
'{{ region }}'
RETURNING
external_id,
server_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access resource.
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
        Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the Entry and Target pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in Target. This value can be set only when HomeDirectoryType is set to LOGICAL. The following is an Entry and Target pair example. [ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ] In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("chroot"). To do this, you can set Entry to / and set Target to the HomeDirectory parameter value. The following is an Entry and Target pair example for chroot. [ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]
      value:
        - Entry: "{{ Entry }}"
          Target: "{{ Target }}"
          Type: "{{ Type }}"
    - name: Policy
      value: "{{ Policy }}"
      description: |
        A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include \${Transfer:UserName}, \${Transfer:HomeDirectory}, and \${Transfer:HomeBucket}. This policy applies only when the domain of ServerId is Amazon S3. Amazon EFS does not use session policies. For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a session policy, see Example session policy. For more information, see AssumeRole in the Security Token Service API Reference.
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
    - name: ExternalId
      value: "{{ ExternalId }}"
      description: |
        A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell. Get-ADGroup -Filter {samAccountName -like "YourGroupName*"} -Properties * | Select SamAccountName,ObjectSid In that command, replace YourGroupName with the name of your Active Directory group. The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access"
    values={[
        { label: 'update_access', value: 'update_access' }
    ]}
>
<TabItem value="update_access">

Allows you to update parameters for the access specified in the ServerID and ExternalID parameters.

```sql
UPDATE aws.transfer.access
SET 
HomeDirectory = '{{ HomeDirectory }}',
HomeDirectoryType = '{{ HomeDirectoryType }}',
HomeDirectoryMappings = '{{ HomeDirectoryMappings }}',
Policy = '{{ Policy }}',
PosixProfile = '{{ PosixProfile }}',
Role = '{{ Role }}',
ServerId = '{{ ServerId }}',
ExternalId = '{{ ExternalId }}'
WHERE 
region = '{{ region }}' --required
AND ServerId = '{{ ServerId }}' --required
AND ExternalId = '{{ ExternalId }}' --required
RETURNING
external_id,
server_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access"
    values={[
        { label: 'delete_access', value: 'delete_access' }
    ]}
>
<TabItem value="delete_access">

Allows you to delete the access specified in the ServerID and ExternalID parameters.

```sql
DELETE FROM aws.transfer.access
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
