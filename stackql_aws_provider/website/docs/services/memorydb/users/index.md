--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - memorydb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_users"
    values={[
        { label: 'describe_users', value: 'describe_users' }
    ]}
>
<TabItem value="describe_users">

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
    <td><CopyableCode code="acl_names" /></td>
    <td><code>array</code></td>
    <td>The names of the Access Control Lists to which the user belongs</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="access_string" /></td>
    <td><code>string</code></td>
    <td>Access permissions string used for this user.</td>
</tr>
<tr>
    <td><CopyableCode code="authentication" /></td>
    <td><code>object</code></td>
    <td>Denotes whether the user requires a password to authenticate.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_engine_version" /></td>
    <td><code>string</code></td>
    <td>The minimum engine version supported for the user</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the user</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the user status. Can be "active", "modifying" or "deleting".</td>
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
    <td><a href="#describe_users"><CopyableCode code="describe_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of users.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-AuthenticationMode"><code>AuthenticationMode</code></a>, <a href="#parameter-AccessString"><code>AccessString</code></a></td>
    <td></td>
    <td>Creates a MemoryDB user. For more information, see Authenticating users with Access Contol Lists (ACLs).</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserName"><code>UserName</code></a></td>
    <td></td>
    <td>Changes user password(s) and/or access string.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.</td>
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
    defaultValue="describe_users"
    values={[
        { label: 'describe_users', value: 'describe_users' }
    ]}
>
<TabItem value="describe_users">

Returns a list of users.

```sql
SELECT
acl_names,
arn,
access_string,
authentication,
minimum_engine_version,
name,
status
FROM aws.memorydb.users
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

Creates a MemoryDB user. For more information, see Authenticating users with Access Contol Lists (ACLs).

```sql
INSERT INTO aws.memorydb.users (
UserName,
AuthenticationMode,
AccessString,
Tags,
region
)
SELECT 
'{{ UserName }}' /* required */,
'{{ AuthenticationMode }}' /* required */,
'{{ AccessString }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
user
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
    - name: UserName
      value: "{{ UserName }}"
      description: |
        The name of the user. This value must be unique as it also serves as the user identifier.
    - name: AuthenticationMode
      description: |
        Denotes the user's authentication properties, such as whether it requires a password to authenticate.
      value:
        Type: "{{ Type }}"
        Passwords:
          - "{{ Passwords }}"
    - name: AccessString
      value: "{{ AccessString }}"
      description: |
        Access permissions string used for this user.
    - name: Tags
      description: |
        A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Changes user password(s) and/or access string.

```sql
UPDATE aws.memorydb.users
SET 
UserName = '{{ UserName }}',
AuthenticationMode = '{{ AuthenticationMode }}',
AccessString = '{{ AccessString }}'
WHERE 
region = '{{ region }}' --required
AND UserName = '{{ UserName }}' --required
RETURNING
user;
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

Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.

```sql
DELETE FROM aws.memorydb.users
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
