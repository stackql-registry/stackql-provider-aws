--- 
title: kx_users
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_users
  - finspace
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

Creates, updates, deletes, gets or lists a <code>kx_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_user"
    values={[
        { label: 'get_kx_user', value: 'get_kx_user' },
        { label: 'list_kx_users', value: 'list_kx_users' }
    ]}
>
<TabItem value="get_kx_user">

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
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN that is associated with the user. (pattern: &lt;code&gt;^arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide. (pattern: &lt;code&gt;^arn:aws:finspace:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:\d+:kxEnvironment/&#91;0-9A-Za-z_-&#93;&#123;1,128&#125;/kxUser/&#91;0-9A-Za-z_-&#93;&#123;1,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the user. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kx_users">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>A list of users in a kdb environment.</td>
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
    <td><a href="#get_kx_user"><CopyableCode code="get_kx_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified kdb user.</td>
</tr>
<tr>
    <td><a href="#list_kx_users"><CopyableCode code="list_kx_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all the users in a kdb environment.</td>
</tr>
<tr>
    <td><a href="#create_kx_user"><CopyableCode code="create_kx_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-userName"><code>userName</code></a>, <a href="#parameter-iamRole"><code>iamRole</code></a></td>
    <td></td>
    <td>Creates a user in FinSpace kdb environment with an associated IAM role.</td>
</tr>
<tr>
    <td><a href="#update_kx_user"><CopyableCode code="update_kx_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-iamRole"><code>iamRole</code></a></td>
    <td></td>
    <td>Updates the user details. You can only update the IAM role associated with a user.</td>
</tr>
<tr>
    <td><a href="#delete_kx_user"><CopyableCode code="delete_kx_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a user in the specified kdb environment.</td>
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
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_name">
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the user that you want to delete.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A token that ensures idempotency. This token expires in 10 minutes.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
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
    defaultValue="get_kx_user"
    values={[
        { label: 'get_kx_user', value: 'get_kx_user' },
        { label: 'list_kx_users', value: 'list_kx_users' }
    ]}
>
<TabItem value="get_kx_user">

Retrieves information about the specified kdb user.

```sql
SELECT
environment_id,
iam_role,
user_arn,
user_name
FROM aws.finspace.kx_users
WHERE user_name = '{{ user_name }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_kx_users">

Lists all the users in a kdb environment.

```sql
SELECT
next_token,
users
FROM aws.finspace.kx_users
WHERE environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kx_user"
    values={[
        { label: 'create_kx_user', value: 'create_kx_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kx_user">

Creates a user in FinSpace kdb environment with an associated IAM role.

```sql
INSERT INTO aws.finspace.kx_users (
userName,
iamRole,
tags,
clientToken,
environment_id,
region
)
SELECT 
'{{ userName }}' /* required */,
'{{ iamRole }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ environment_id }}',
'{{ region }}'
RETURNING
environment_id,
iam_role,
user_arn,
user_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kx_users
  props:
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the kx_users resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the kx_users resource.
    - name: userName
      value: "{{ userName }}"
    - name: iamRole
      value: "{{ iamRole }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_kx_user"
    values={[
        { label: 'update_kx_user', value: 'update_kx_user' }
    ]}
>
<TabItem value="update_kx_user">

Updates the user details. You can only update the IAM role associated with a user.

```sql
UPDATE aws.finspace.kx_users
SET 
iamRole = '{{ iamRole }}',
clientToken = '{{ clientToken }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND user_name = '{{ user_name }}' --required
AND region = '{{ region }}' --required
AND iamRole = '{{ iamRole }}' --required
RETURNING
environment_id,
iam_role,
user_arn,
user_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kx_user"
    values={[
        { label: 'delete_kx_user', value: 'delete_kx_user' }
    ]}
>
<TabItem value="delete_kx_user">

Deletes a user in the specified kdb environment.

```sql
DELETE FROM aws.finspace.kx_users
WHERE user_name = '{{ user_name }}' --required
AND environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
