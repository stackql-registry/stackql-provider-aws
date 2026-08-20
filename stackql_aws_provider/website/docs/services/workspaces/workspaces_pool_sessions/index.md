--- 
title: workspaces_pool_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces_pool_sessions
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>workspaces_pool_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspaces_pool_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspaces_pool_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspaces_pool_sessions"
    values={[
        { label: 'describe_workspaces_pool_sessions', value: 'describe_workspaces_pool_sessions' }
    ]}
>
<TabItem value="describe_workspaces_pool_sessions">

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
    <td>If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="sessions" /></td>
    <td><code>array</code></td>
    <td>Describes the pool sessions.</td>
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
    <td><a href="#describe_workspaces_pool_sessions"><CopyableCode code="describe_workspaces_pool_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see Amazon WorkSpaces Pools end of support. Retrieves a list that describes the streaming sessions for a specified pool.</td>
</tr>
<tr>
    <td><a href="#terminate_workspaces_pool_session"><CopyableCode code="terminate_workspaces_pool_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see Amazon WorkSpaces Pools end of support. Terminates the pool session.</td>
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
    defaultValue="describe_workspaces_pool_sessions"
    values={[
        { label: 'describe_workspaces_pool_sessions', value: 'describe_workspaces_pool_sessions' }
    ]}
>
<TabItem value="describe_workspaces_pool_sessions">

End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see Amazon WorkSpaces Pools end of support. Retrieves a list that describes the streaming sessions for a specified pool.

```sql
SELECT
next_token,
sessions
FROM aws.workspaces.workspaces_pool_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_workspaces_pool_session"
    values={[
        { label: 'terminate_workspaces_pool_session', value: 'terminate_workspaces_pool_session' }
    ]}
>
<TabItem value="terminate_workspaces_pool_session">

End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see Amazon WorkSpaces Pools end of support. Terminates the pool session.

```sql
DELETE FROM aws.workspaces.workspaces_pool_sessions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
