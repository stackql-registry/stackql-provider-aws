--- 
title: user_access_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - user_access_tasks
  - appfabric
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

Creates, updates, deletes, gets or lists a <code>user_access_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_access_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appfabric.user_access_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_user_access_tasks"
    values={[
        { label: 'batch_get_user_access_tasks', value: 'batch_get_user_access_tasks' }
    ]}
>
<TabItem value="batch_get_user_access_tasks">

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
    <td><CopyableCode code="userAccessResultsList" /></td>
    <td><code>array</code></td>
    <td>Contains a list of user access results.</td>
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
    <td><a href="#batch_get_user_access_tasks"><CopyableCode code="batch_get_user_access_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets user access details in a batch request. This action polls data from the tasks that are kicked off by the StartUserAccessTasks action.</td>
</tr>
<tr>
    <td><a href="#start_user_access_tasks"><CopyableCode code="start_user_access_tasks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appBundleIdentifier"><code>appBundleIdentifier</code></a>, <a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Starts the tasks to search user access status for a specific email address. The tasks are stopped when the user access status data is found. The tasks are terminated when the API calls to the application time out.</td>
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
    defaultValue="batch_get_user_access_tasks"
    values={[
        { label: 'batch_get_user_access_tasks', value: 'batch_get_user_access_tasks' }
    ]}
>
<TabItem value="batch_get_user_access_tasks">

Gets user access details in a batch request. This action polls data from the tasks that are kicked off by the StartUserAccessTasks action.

```sql
SELECT
userAccessResultsList
FROM aws.appfabric.user_access_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_user_access_tasks"
    values={[
        { label: 'start_user_access_tasks', value: 'start_user_access_tasks' }
    ]}
>
<TabItem value="start_user_access_tasks">

Starts the tasks to search user access status for a specific email address. The tasks are stopped when the user access status data is found. The tasks are terminated when the API calls to the application time out.

```sql
EXEC aws.appfabric.user_access_tasks.start_user_access_tasks 
@region='{{ region }}' --required 
@@json=
'{
"appBundleIdentifier": "{{ appBundleIdentifier }}", 
"email": "{{ email }}"
}'
;
```
</TabItem>
</Tabs>
