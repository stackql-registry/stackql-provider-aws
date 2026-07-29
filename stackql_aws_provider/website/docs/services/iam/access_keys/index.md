--- 
title: access_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - access_keys
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

Creates, updates, deletes, gets or lists an <code>access_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.access_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_access_keys"
    values={[
        { label: 'list_access_keys', value: 'list_access_keys' }
    ]}
>
<TabItem value="list_access_keys">

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
    <td><CopyableCode code="access_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID for this access key.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date when the access key was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the access key. Active means that the key is valid for API calls; Inactive means it is not.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user that the key is associated with.</td>
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
    <td><a href="#list_access_keys"><CopyableCode code="list_access_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list. Although each user is limited to a small number of keys, you can still paginate the results using the MaxItems and Marker parameters. If the UserName is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then UserName is required. If a long-term key is assigned to the user, then UserName is not required. This operation works for access keys under the Amazon Web Services account. If the Amazon Web Services account has no associated users, the root user returns it's own access key IDs by running this command. To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</td>
</tr>
<tr>
    <td><a href="#create_access_key"><CopyableCode code="create_access_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is Active. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users. For information about quotas on the number of keys you can create, see IAM and STS quotas in the IAM User Guide. To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</td>
</tr>
<tr>
    <td><a href="#update_access_key"><CopyableCode code="update_access_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AccessKeyId"><code>AccessKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow. If the UserName is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then UserName is required. If a long-term key is assigned to the user, then UserName is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users. For information about rotating keys, see Managing keys and certificates in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_access_key"><CopyableCode code="delete_access_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AccessKeyId"><code>AccessKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Deletes the access key pair associated with the specified IAM user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</td>
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
<tr id="parameter-AccessKeyId">
    <td><CopyableCode code="AccessKeyId" /></td>
    <td><code>string</code></td>
    <td>The access key ID for the access key ID and secret access key you want to delete. This parameter allows (through its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.</td>
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
    <td>The status you want to assign to the secret access key. Active means that the key can be used for programmatic calls to Amazon Web Services, while Inactive means that the key cannot be used.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the user whose access key pair you want to delete. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_access_keys"
    values={[
        { label: 'list_access_keys', value: 'list_access_keys' }
    ]}
>
<TabItem value="list_access_keys">

Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list. Although each user is limited to a small number of keys, you can still paginate the results using the MaxItems and Marker parameters. If the UserName is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then UserName is required. If a long-term key is assigned to the user, then UserName is not required. This operation works for access keys under the Amazon Web Services account. If the Amazon Web Services account has no associated users, the root user returns it's own access key IDs by running this command. To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.

```sql
SELECT
access_key_id,
create_date,
status,
user_name
FROM aws.iam.access_keys
WHERE region = '{{ region }}' -- required
AND UserName = '{{ UserName }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_key"
    values={[
        { label: 'create_access_key', value: 'create_access_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_key">

Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is Active. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users. For information about quotas on the number of keys you can create, see IAM and STS quotas in the IAM User Guide. To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.

```sql
INSERT INTO aws.iam.access_keys (
region,
UserName
)
SELECT 
'{{ region }}',
'{{ UserName }}'
RETURNING
access_key_id,
create_date,
secret_access_key,
status,
user_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_keys resource.
    - name: UserName
      value: "{{ UserName }}"
      description: The name of the IAM user that the new key will belong to. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
      description: The name of the IAM user that the new key will belong to. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_key"
    values={[
        { label: 'update_access_key', value: 'update_access_key' }
    ]}
>
<TabItem value="update_access_key">

Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow. If the UserName is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then UserName is required. If a long-term key is assigned to the user, then UserName is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users. For information about rotating keys, see Managing keys and certificates in the IAM User Guide.

```sql
UPDATE aws.iam.access_keys
SET 
-- No updatable properties
WHERE 
AccessKeyId = '{{ AccessKeyId }}' --required
AND region = '{{ region }}' --required
AND UserName = '{{ UserName}}'
AND Status = '{{ Status}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_key"
    values={[
        { label: 'delete_access_key', value: 'delete_access_key' }
    ]}
>
<TabItem value="delete_access_key">

Deletes the access key pair associated with the specified IAM user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.

```sql
DELETE FROM aws.iam.access_keys
WHERE AccessKeyId = '{{ AccessKeyId }}' --required
AND region = '{{ region }}' --required
AND UserName = '{{ UserName }}'
;
```
</TabItem>
</Tabs>
