--- 
title: ssh_public_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - ssh_public_keys
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

Creates, updates, deletes, gets or lists a <code>ssh_public_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssh_public_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.ssh_public_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ssh_public_key"
    values={[
        { label: 'get_ssh_public_key', value: 'get_ssh_public_key' },
        { label: 'list_ssh_public_keys', value: 'list_ssh_public_keys' }
    ]}
>
<TabItem value="get_ssh_public_key">

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
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>The MD5 message digest of the SSH public key.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_public_key_body" /></td>
    <td><code>string</code></td>
    <td>The SSH public key.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_public_key_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the SSH public key.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the SSH public key. Active means that the key can be used for authentication with an CodeCommit repository. Inactive means that the key cannot be used.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the SSH public key was uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user associated with the SSH public key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ssh_public_keys">

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
    <td><CopyableCode code="ssh_public_key_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the SSH public key.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the SSH public key. Active means that the key can be used for authentication with an CodeCommit repository. Inactive means that the key cannot be used.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the SSH public key was uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user associated with the SSH public key.</td>
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
    <td><a href="#get_ssh_public_key"><CopyableCode code="get_ssh_public_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-SSHPublicKeyId"><code>SSHPublicKeyId</code></a>, <a href="#parameter-Encoding"><code>Encoding</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified SSH public key, including metadata about the key. The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide.</td>
</tr>
<tr>
    <td><a href="#list_ssh_public_keys"><CopyableCode code="list_ssh_public_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list. The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide. Although each user is limited to a small number of keys, you can still paginate the results using the MaxItems and Marker parameters.</td>
</tr>
<tr>
    <td><a href="#update_ssh_public_key"><CopyableCode code="update_ssh_public_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-SSHPublicKeyId"><code>SSHPublicKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Status"><code>Status</code></a></td>
    <td>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow. The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_ssh_public_key"><CopyableCode code="delete_ssh_public_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-SSHPublicKeyId"><code>SSHPublicKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified SSH public key. The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide.</td>
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
<tr id="parameter-Encoding">
    <td><CopyableCode code="Encoding" /></td>
    <td><code>string</code></td>
    <td>Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use SSH. To retrieve the public key in PEM format, use PEM.</td>
</tr>
<tr id="parameter-SSHPublicKeyId">
    <td><CopyableCode code="SSHPublicKeyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the SSH public key. This parameter allows (through its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user associated with the SSH public key. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
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
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status to assign to the SSH public key. Active means that the key can be used for authentication with an CodeCommit repository. Inactive means that the key cannot be used.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user to list SSH public keys for. If none is specified, the UserName field is determined implicitly based on the Amazon Web Services access key used to sign the request. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ssh_public_key"
    values={[
        { label: 'get_ssh_public_key', value: 'get_ssh_public_key' },
        { label: 'list_ssh_public_keys', value: 'list_ssh_public_keys' }
    ]}
>
<TabItem value="get_ssh_public_key">

Retrieves the specified SSH public key, including metadata about the key. The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide.

```sql
SELECT
fingerprint,
ssh_public_key_body,
ssh_public_key_id,
status,
upload_date,
user_name
FROM aws.iam.ssh_public_keys
WHERE UserName = '{{ UserName }}' -- required
AND SSHPublicKeyId = '{{ SSHPublicKeyId }}' -- required
AND Encoding = '{{ Encoding }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ssh_public_keys">

Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list. The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide. Although each user is limited to a small number of keys, you can still paginate the results using the MaxItems and Marker parameters.

```sql
SELECT
ssh_public_key_id,
status,
upload_date,
user_name
FROM aws.iam.ssh_public_keys
WHERE region = '{{ region }}' -- required
AND UserName = '{{ UserName }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ssh_public_key"
    values={[
        { label: 'update_ssh_public_key', value: 'update_ssh_public_key' }
    ]}
>
<TabItem value="update_ssh_public_key">

Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow. The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide.

```sql
UPDATE aws.iam.ssh_public_keys
SET 
-- No updatable properties
WHERE 
UserName = '{{ UserName }}' --required
AND SSHPublicKeyId = '{{ SSHPublicKeyId }}' --required
AND region = '{{ region }}' --required
AND Status = '{{ Status}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ssh_public_key"
    values={[
        { label: 'delete_ssh_public_key', value: 'delete_ssh_public_key' }
    ]}
>
<TabItem value="delete_ssh_public_key">

Deletes the specified SSH public key. The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH connections in the CodeCommit User Guide.

```sql
DELETE FROM aws.iam.ssh_public_keys
WHERE UserName = '{{ UserName }}' --required
AND SSHPublicKeyId = '{{ SSHPublicKeyId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
