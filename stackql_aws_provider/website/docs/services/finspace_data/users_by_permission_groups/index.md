--- 
title: users_by_permission_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - users_by_permission_groups
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

Creates, updates, deletes, gets or lists a <code>users_by_permission_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_by_permission_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace_data.users_by_permission_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_users_by_permission_group"
    values={[
        { label: 'list_users_by_permission_group', value: 'list_users_by_permission_group' }
    ]}
>
<TabItem value="list_users_by_permission_group">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>Lists details of all users in a specific permission group.</td>
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
    <td><a href="#list_users_by_permission_group"><CopyableCode code="list_users_by_permission_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-permission_group_id"><code>permission_group_id</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists details of all the users in a specific permission group.</td>
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
<tr id="parameter-permission_group_id">
    <td><CopyableCode code="permission_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the permission group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="list_users_by_permission_group"
    values={[
        { label: 'list_users_by_permission_group', value: 'list_users_by_permission_group' }
    ]}
>
<TabItem value="list_users_by_permission_group">

Lists details of all the users in a specific permission group.

```sql
SELECT
nextToken,
users
FROM aws.finspace_data.users_by_permission_groups
WHERE permission_group_id = '{{ permission_group_id }}' -- required
AND maxResults = '{{ maxResults }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
