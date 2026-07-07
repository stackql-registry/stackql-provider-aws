--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - iam
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user"
    values={[
        { label: 'get_user', value: 'get_user' }
    ]}
>
<TabItem value="get_user">

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
    <td>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="PasswordLastUsed" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the user's password was last used to sign in to an Amazon Web Services website. For a list of Amazon Web Services websites that capture a user's last sign-in time, see the Credential reports topic in the IAM User Guide. If a password is used more than once in a five-minute span, only the first use is returned in this field. If the field is null (no value), then it indicates that they never signed in with a password. This can be because: The user never had a password. A password exists but has not been used since IAM started tracking this information on October 20, 2014. A null value does not mean that the user never had a password. Also, if the user does not currently have a password but had one in the past, then this field contains the date and time the most recent password was used. This value is returned only in the GetUser and ListUsers operations.</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the user. For more information about paths, see IAM identifiers in the IAM User Guide. The ARN of the policy used to set the permissions boundary for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="PermissionsBoundary" /></td>
    <td><code>string</code></td>
    <td>For more information about permissions boundaries, see Permissions boundaries for IAM identities in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are associated with the user. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the user. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The friendly name identifying the user.</td>
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
    <td><a href="#get_user"><CopyableCode code="get_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-PermissionsBoundary"><code>PermissionsBoundary</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new IAM user for your Amazon Web Services account. For information about quotas for the number of IAM users you can create, see IAM and STS quotas in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewPath"><code>NewPath</code></a>, <a href="#parameter-NewUserName"><code>NewUserName</code></a></td>
    <td>Updates the name and/or the path of the specified IAM user. You should understand the implications of changing an IAM user's path or name. For more information, see Renaming an IAM user and Renaming an IAM group in the IAM User Guide. To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see Permissions and policies.</td>
</tr>
<tr>
    <td><a href="#put_user_permissions_boundary"><CopyableCode code="put_user_permissions_boundary" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-PermissionsBoundary"><code>PermissionsBoundary</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user. Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see IAM JSON policy evaluation logic in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see Deleting an IAM user. Before attempting to delete a user, remove the following items: Password (DeleteLoginProfile) Access keys (DeleteAccessKey) Signing certificate (DeleteSigningCertificate) SSH public key (DeleteSSHPublicKey) Git credentials (DeleteServiceSpecificCredential) Multi-factor authentication (MFA) device (DeactivateMFADevice, DeleteVirtualMFADevice) Inline policies (DeleteUserPolicy) Attached managed policies (DetachUserPolicy) Group memberships (RemoveUserFromGroup)</td>
</tr>
<tr>
    <td><a href="#delete_user_permissions_boundary"><CopyableCode code="delete_user_permissions_boundary" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the permissions boundary for the specified IAM user. Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PathPrefix"><code>PathPrefix</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list. IAM resource-listing operations return a subset of the available attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object: PermissionsBoundary Tags To view all of the information for a user, see GetUser. You can paginate the results using the MaxItems and Marker parameters.</td>
</tr>
<tr>
    <td><a href="#resync_mfa_device"><CopyableCode code="resync_mfa_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-SerialNumber"><code>SerialNumber</code></a>, <a href="#parameter-AuthenticationCode1"><code>AuthenticationCode1</code></a>, <a href="#parameter-AuthenticationCode2"><code>AuthenticationCode2</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers. For more information about creating and working with virtual MFA devices, see Using a virtual MFA device in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#upload_ssh_public_key"><CopyableCode code="upload_ssh_public_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-SSHPublicKeyBody"><code>SSHPublicKeyBody</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Uploads an SSH public key and associates it with the specified IAM user. The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide.</td>
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
<tr id="parameter-AuthenticationCode1">
    <td><CopyableCode code="AuthenticationCode1" /></td>
    <td><code>string</code></td>
    <td>An authentication code emitted by the device. The format for this parameter is a sequence of six digits.</td>
</tr>
<tr id="parameter-AuthenticationCode2">
    <td><CopyableCode code="AuthenticationCode2" /></td>
    <td><code>string</code></td>
    <td>A subsequent authentication code emitted by the device. The format for this parameter is a sequence of six digits.</td>
</tr>
<tr id="parameter-PermissionsBoundary">
    <td><CopyableCode code="PermissionsBoundary" /></td>
    <td><code>string</code></td>
    <td>The ARN of the managed policy that is used to set the permissions boundary for the user. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the IAM User Guide. For more information about policy types, see Policy types in the IAM User Guide.</td>
</tr>
<tr id="parameter-SSHPublicKeyBody">
    <td><CopyableCode code="SSHPublicKeyBody" /></td>
    <td><code>string</code></td>
    <td>The SSH public key. The public key must be encoded in ssh-rsa format or PEM format. The minimum bit-length of the public key is 2048 bits. For example, you can generate a 2048-bit key, and the resulting PEM file is 1679 bytes long. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-SerialNumber">
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>Serial number that uniquely identifies the MFA device. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user to associate the SSH public key with. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
<tr id="parameter-NewPath">
    <td><CopyableCode code="NewPath" /></td>
    <td><code>string</code></td>
    <td>New path for the IAM user. Include this parameter only if you're changing the user's path. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-NewUserName">
    <td><CopyableCode code="NewUserName" /></td>
    <td><code>string</code></td>
    <td>New name for the user. Include this parameter only if you're changing the user's name. IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</td>
</tr>
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path for the user name. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-PathPrefix">
    <td><CopyableCode code="PathPrefix" /></td>
    <td><code>string</code></td>
    <td>The path prefix for filtering the results. For example: /division_abc/subdivision_xyz/, which would get all user names whose path starts with /division_abc/subdivision_xyz/. This parameter is optional. If it is not included, it defaults to a slash (/), listing all user names. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-PermissionsBoundary">
    <td><CopyableCode code="PermissionsBoundary" /></td>
    <td><code>string</code></td>
    <td>The ARN of the managed policy that is used to set the permissions boundary for the user. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the IAM User Guide. For more information about policy types, see Policy types in the IAM User Guide.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the user to get information about. This parameter is optional. If it is not included, it defaults to the user making the request. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user"
    values={[
        { label: 'get_user', value: 'get_user' }
    ]}
>
<TabItem value="get_user">

Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.

```sql
SELECT
Arn,
CreateDate,
PasswordLastUsed,
Path,
PermissionsBoundary,
Tags,
UserId,
UserName
FROM aws.iam.users
WHERE region = '{{ region }}' -- required
AND UserName = '{{ UserName }}'
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

Creates a new IAM user for your Amazon Web Services account. For information about quotas for the number of IAM users you can create, see IAM and STS quotas in the IAM User Guide.

```sql
INSERT INTO aws.iam.users (
UserName,
region,
Path,
PermissionsBoundary,
Tags
)
SELECT 
'{{ UserName }}',
'{{ region }}',
'{{ Path }}',
'{{ PermissionsBoundary }}',
'{{ Tags }}'
RETURNING
Arn,
CreateDate,
PasswordLastUsed,
Path,
PermissionsBoundary,
Tags,
UserId,
UserName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: UserName
      value: "{{ UserName }}"
      description: Required parameter for the users resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: Path
      value: "{{ Path }}"
      description: The path for the user name. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
      description: The path for the user name. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
    - name: PermissionsBoundary
      value: "{{ PermissionsBoundary }}"
      description: The ARN of the managed policy that is used to set the permissions boundary for the user. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the IAM User Guide. For more information about policy types, see Policy types in the IAM User Guide.
      description: The ARN of the managed policy that is used to set the permissions boundary for the user. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the IAM User Guide. For more information about policy types, see Policy types in the IAM User Guide.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
      description: A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
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

Updates the name and/or the path of the specified IAM user. You should understand the implications of changing an IAM user's path or name. For more information, see Renaming an IAM user and Renaming an IAM group in the IAM User Guide. To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see Permissions and policies.

```sql
UPDATE aws.iam.users
SET 
-- No updatable properties
WHERE 
UserName = '{{ UserName }}' --required
AND region = '{{ region }}' --required
AND NewPath = '{{ NewPath}}'
AND NewUserName = '{{ NewUserName}}';
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_user_permissions_boundary"
    values={[
        { label: 'put_user_permissions_boundary', value: 'put_user_permissions_boundary' }
    ]}
>
<TabItem value="put_user_permissions_boundary">

Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user. Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see IAM JSON policy evaluation logic in the IAM User Guide.

```sql
REPLACE aws.iam.users
SET 
-- No updatable properties
WHERE 
UserName = '{{ UserName }}' --required
AND PermissionsBoundary = '{{ PermissionsBoundary }}' --required
AND region = '{{ region }}' --required;
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

Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see Deleting an IAM user. Before attempting to delete a user, remove the following items: Password (DeleteLoginProfile) Access keys (DeleteAccessKey) Signing certificate (DeleteSigningCertificate) SSH public key (DeleteSSHPublicKey) Git credentials (DeleteServiceSpecificCredential) Multi-factor authentication (MFA) device (DeactivateMFADevice, DeleteVirtualMFADevice) Inline policies (DeleteUserPolicy) Attached managed policies (DetachUserPolicy) Group memberships (RemoveUserFromGroup)

```sql
DELETE FROM aws.iam.users
WHERE UserName = '{{ UserName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_user_permissions_boundary"
    values={[
        { label: 'delete_user_permissions_boundary', value: 'delete_user_permissions_boundary' },
        { label: 'list_users', value: 'list_users' },
        { label: 'resync_mfa_device', value: 'resync_mfa_device' },
        { label: 'upload_ssh_public_key', value: 'upload_ssh_public_key' }
    ]}
>
<TabItem value="delete_user_permissions_boundary">

Deletes the permissions boundary for the specified IAM user. Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies.

```sql
EXEC aws.iam.users.delete_user_permissions_boundary 
@UserName='{{ UserName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="list_users">

Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list. IAM resource-listing operations return a subset of the available attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object: PermissionsBoundary Tags To view all of the information for a user, see GetUser. You can paginate the results using the MaxItems and Marker parameters.

```sql
EXEC aws.iam.users.list_users 
@region='{{ region }}' --required, 
@PathPrefix='{{ PathPrefix }}', 
@Marker='{{ Marker }}', 
@MaxItems='{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="resync_mfa_device">

Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers. For more information about creating and working with virtual MFA devices, see Using a virtual MFA device in the IAM User Guide.

```sql
EXEC aws.iam.users.resync_mfa_device 
@UserName='{{ UserName }}' --required, 
@SerialNumber='{{ SerialNumber }}' --required, 
@AuthenticationCode1='{{ AuthenticationCode1 }}' --required, 
@AuthenticationCode2='{{ AuthenticationCode2 }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="upload_ssh_public_key">

Uploads an SSH public key and associates it with the specified IAM user. The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide.

```sql
EXEC aws.iam.users.upload_ssh_public_key 
@UserName='{{ UserName }}' --required, 
@SSHPublicKeyBody='{{ SSHPublicKeyBody }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
