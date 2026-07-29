--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - elasticache
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.users" /></td></tr>
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
    <td><code>string</code></td>
    <td>Denotes whether the user requires a password to authenticate.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The options are valkey or redis.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_engine_version" /></td>
    <td><code>string</code></td>
    <td>The minimum engine version required, which is Redis OSS 6.0</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the user status. Can be "active", "modifying" or "deleting".</td>
</tr>
<tr>
    <td><CopyableCode code="user_group_ids" /></td>
    <td><code>string</code></td>
    <td>Returns a list of the user group IDs the user belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The username of the user.</td>
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
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of users.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-AccessString"><code>AccessString</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-Passwords"><code>Passwords</code></a>, <a href="#parameter-NoPasswordRequired"><code>NoPasswordRequired</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-AuthenticationMode"><code>AuthenticationMode</code></a></td>
    <td>For Valkey engine version 7.2 onwards and Redis OSS 6.0 to 7.1: Creates a user. For more information, see Using Role Based Access Control (RBAC).</td>
</tr>
<tr>
    <td><a href="#modify_user"><CopyableCode code="modify_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AccessString"><code>AccessString</code></a>, <a href="#parameter-AppendAccessString"><code>AppendAccessString</code></a>, <a href="#parameter-Passwords"><code>Passwords</code></a>, <a href="#parameter-NoPasswordRequired"><code>NoPasswordRequired</code></a>, <a href="#parameter-AuthenticationMode"><code>AuthenticationMode</code></a>, <a href="#parameter-Engine"><code>Engine</code></a></td>
    <td>Changes user password(s) and/or access string.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For Valkey engine version 7.2 onwards and Redis OSS 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see Using Role Based Access Control (RBAC).</td>
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
<tr id="parameter-AccessString">
    <td><CopyableCode code="AccessString" /></td>
    <td><code>string</code></td>
    <td>Access permissions string used for this user.</td>
</tr>
<tr id="parameter-UserId">
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The username of the user.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccessString">
    <td><CopyableCode code="AccessString" /></td>
    <td><code>string</code></td>
    <td>Access permissions string used for this user.</td>
</tr>
<tr id="parameter-AppendAccessString">
    <td><CopyableCode code="AppendAccessString" /></td>
    <td><code>string</code></td>
    <td>Adds additional user permissions to the access string.</td>
</tr>
<tr id="parameter-AuthenticationMode">
    <td><CopyableCode code="AuthenticationMode" /></td>
    <td><code>object</code></td>
    <td>Specifies how to authenticate the user.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Modifies the engine listed for a user. The options are valkey or redis.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>Filter to determine the list of User IDs to return.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-NoPasswordRequired">
    <td><CopyableCode code="NoPasswordRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates no password is required for the user.</td>
</tr>
<tr id="parameter-Passwords">
    <td><CopyableCode code="Passwords" /></td>
    <td><code>array</code></td>
    <td>The passwords belonging to the user. You are allowed up to two.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</td>
</tr>
<tr id="parameter-UserId">
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user.</td>
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
arn,
access_string,
authentication,
engine,
minimum_engine_version,
status,
user_group_ids,
user_id,
user_name
FROM aws.elasticache.users
WHERE region = '{{ region }}' -- required
AND Engine = '{{ Engine }}'
AND UserId = '{{ UserId }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
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

For Valkey engine version 7.2 onwards and Redis OSS 6.0 to 7.1: Creates a user. For more information, see Using Role Based Access Control (RBAC).

```sql
INSERT INTO aws.elasticache.users (
UserId,
UserName,
AccessString,
region,
Engine,
Passwords,
NoPasswordRequired,
Tags,
AuthenticationMode
)
SELECT 
'{{ UserId }}',
'{{ UserName }}',
'{{ AccessString }}',
'{{ region }}',
'{{ Engine }}',
'{{ Passwords }}',
'{{ NoPasswordRequired }}',
'{{ Tags }}',
'{{ AuthenticationMode }}'
RETURNING
arn,
access_string,
authentication,
engine,
minimum_engine_version,
status,
user_group_ids,
user_id,
user_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: UserId
      value: "{{ UserId }}"
      description: Required parameter for the users resource.
    - name: UserName
      value: "{{ UserName }}"
      description: Required parameter for the users resource.
    - name: AccessString
      value: "{{ AccessString }}"
      description: Required parameter for the users resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: Engine
      value: "{{ Engine }}"
      description: The options are valkey or redis.
      description: The options are valkey or redis.
    - name: Passwords
      value: "{{ Passwords }}"
      description: Passwords used for this user. You can create up to two passwords for each user.
      description: Passwords used for this user. You can create up to two passwords for each user.
    - name: NoPasswordRequired
      value: {{ NoPasswordRequired }}
      description: Indicates a password is not required for this user.
      description: Indicates a password is not required for this user.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
    - name: AuthenticationMode
      value: "{{ AuthenticationMode }}"
      description: Specifies how to authenticate the user.
      description: Specifies how to authenticate the user.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_user"
    values={[
        { label: 'modify_user', value: 'modify_user' }
    ]}
>
<TabItem value="modify_user">

Changes user password(s) and/or access string.

```sql
UPDATE aws.elasticache.users
SET 
-- No updatable properties
WHERE 
UserId = '{{ UserId }}' --required
AND region = '{{ region }}' --required
AND AccessString = '{{ AccessString}}'
AND AppendAccessString = '{{ AppendAccessString}}'
AND Passwords = '{{ Passwords}}'
AND NoPasswordRequired = {{ NoPasswordRequired}}
AND AuthenticationMode = '{{ AuthenticationMode}}'
AND Engine = '{{ Engine}}'
RETURNING
arn,
access_string,
authentication,
engine,
minimum_engine_version,
status,
user_group_ids,
user_id,
user_name;
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

For Valkey engine version 7.2 onwards and Redis OSS 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see Using Role Based Access Control (RBAC).

```sql
DELETE FROM aws.elasticache.users
WHERE UserId = '{{ UserId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
