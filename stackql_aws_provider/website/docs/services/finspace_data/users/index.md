--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - finspace_data
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace_data.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_users"
    values={[
        { label: 'list_users', value: 'list_users' },
        { label: 'get_user', value: 'get_user' }
    ]}
>
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
    <td><CopyableCode code="apiAccess" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the user can use the GetProgrammaticAccessCredentials API to obtain credentials that can then be used to access other FinSpace Data API operations. ENABLED – The user has permissions to use the APIs. DISABLED – The user does not have permissions to use any APIs. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="apiAccessPrincipalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of an AWS user or role that is allowed to call the GetProgrammaticAccessCredentials API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account. (pattern: &lt;code&gt;^arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="emailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address of the user. The email address serves as a uniquer identifier for each user and cannot be changed after it's created. (pattern: &lt;code&gt;&#91;A-Za-z0-9._%+-&#93;+@&#91;A-Za-z0-9.-&#93;+\.&#91;A-Za-z&#93;&#123;2,4&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firstName" /></td>
    <td><code>string</code></td>
    <td>The first name of the user. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastDisabledTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="lastEnabledTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="lastLoginTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="lastName" /></td>
    <td><code>string</code></td>
    <td>The last name of the user. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the user. CREATING – The user creation is in progress. ENABLED – The user is created and is currently active. DISABLED – The user is currently inactive. (CREATING, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of user. SUPER_USER – A user with permission to all the functionality and data in FinSpace. APP_USER – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group. (SUPER_USER, APP_USER)</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="apiAccess" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the user can use the GetProgrammaticAccessCredentials API to obtain credentials that can then be used to access other FinSpace Data API operations. ENABLED – The user has permissions to use the APIs. DISABLED – The user does not have permissions to use any APIs. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="apiAccessPrincipalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of an AWS user or role that is allowed to call the GetProgrammaticAccessCredentials API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account. (pattern: &lt;code&gt;^arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="emailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address that is associated with the user. (pattern: &lt;code&gt;&#91;A-Za-z0-9._%+-&#93;+@&#91;A-Za-z0-9.-&#93;+\.&#91;A-Za-z&#93;&#123;2,4&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firstName" /></td>
    <td><code>string</code></td>
    <td>The first name of the user. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastDisabledTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="lastEnabledTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="lastLoginTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="lastName" /></td>
    <td><code>string</code></td>
    <td>The last name of the user. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the user. CREATING – The creation is in progress. ENABLED – The user is created and is currently active. DISABLED – The user is currently inactive. (CREATING, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of user. SUPER_USER – A user with permission to all the functionality and data in FinSpace. APP_USER – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group. (SUPER_USER, APP_USER)</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user that is retrieved. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all available users in FinSpace.</td>
</tr>
<tr>
    <td><a href="#get_user"><CopyableCode code="get_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for a specific user.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-emailAddress"><code>emailAddress</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a new user in FinSpace.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the details of the specified user. You cannot update the userId for a user.</td>
</tr>
<tr>
    <td><a href="#disable_user"><CopyableCode code="disable_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Denies access to the FinSpace web application and API for the specified user.</td>
</tr>
<tr>
    <td><a href="#enable_user"><CopyableCode code="enable_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows the specified user to access the FinSpace web application and API.</td>
</tr>
<tr>
    <td><a href="#reset_user_password"><CopyableCode code="reset_user_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results per page.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user that a temporary password is requested for.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_users"
    values={[
        { label: 'list_users', value: 'list_users' },
        { label: 'get_user', value: 'get_user' }
    ]}
>
<TabItem value="list_users">

Lists all available users in FinSpace.

```sql
SELECT
apiAccess,
apiAccessPrincipalArn,
createTime,
emailAddress,
firstName,
lastDisabledTime,
lastEnabledTime,
lastLoginTime,
lastModifiedTime,
lastName,
status,
type_,
userId
FROM aws.finspace_data.users
WHERE maxResults = '{{ maxResults }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="get_user">

Retrieves details for a specific user.

```sql
SELECT
apiAccess,
apiAccessPrincipalArn,
createTime,
emailAddress,
firstName,
lastDisabledTime,
lastEnabledTime,
lastLoginTime,
lastModifiedTime,
lastName,
status,
type_,
userId
FROM aws.finspace_data.users
WHERE user_id = '{{ user_id }}' -- required
AND region = '{{ region }}' -- required
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

Creates a new user in FinSpace.

```sql
INSERT INTO aws.finspace_data.users (
emailAddress,
type,
firstName,
lastName,
apiAccess,
apiAccessPrincipalArn,
clientToken,
region
)
SELECT 
'{{ emailAddress }}' /* required */,
'{{ type }}' /* required */,
'{{ firstName }}',
'{{ lastName }}',
'{{ apiAccess }}',
'{{ apiAccessPrincipalArn }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
userId
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
    - name: emailAddress
      value: "{{ emailAddress }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['SUPER_USER', 'APP_USER']
    - name: firstName
      value: "{{ firstName }}"
    - name: lastName
      value: "{{ lastName }}"
    - name: apiAccess
      value: "{{ apiAccess }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: apiAccessPrincipalArn
      value: "{{ apiAccessPrincipalArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotence Token for API operations
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

Modifies the details of the specified user. You cannot update the userId for a user.

```sql
UPDATE aws.finspace_data.users
SET 
type = '{{ type }}',
firstName = '{{ firstName }}',
lastName = '{{ lastName }}',
apiAccess = '{{ apiAccess }}',
apiAccessPrincipalArn = '{{ apiAccessPrincipalArn }}',
clientToken = '{{ clientToken }}'
WHERE 
user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
RETURNING
userId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_user"
    values={[
        { label: 'disable_user', value: 'disable_user' },
        { label: 'enable_user', value: 'enable_user' },
        { label: 'reset_user_password', value: 'reset_user_password' }
    ]}
>
<TabItem value="disable_user">

Denies access to the FinSpace web application and API for the specified user.

```sql
EXEC aws.finspace_data.users.disable_user 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="enable_user">

Allows the specified user to access the FinSpace web application and API.

```sql
EXEC aws.finspace_data.users.enable_user 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="reset_user_password">

Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.

```sql
EXEC aws.finspace_data.users.reset_user_password 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
