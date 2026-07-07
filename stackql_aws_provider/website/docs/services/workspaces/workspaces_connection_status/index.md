--- 
title: workspaces_connection_status
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces_connection_status
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

Creates, updates, deletes, gets or lists a <code>workspaces_connection_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspaces_connection_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspaces_connection_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspaces_connection_status"
    values={[
        { label: 'describe_workspaces_connection_status', value: 'describe_workspaces_connection_status' }
    ]}
>
<TabItem value="describe_workspaces_connection_status">

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
    <td><CopyableCode code="ConnectionState" /></td>
    <td><code>string</code></td>
    <td>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace is stopped. (CONNECTED, DISCONNECTED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionStateCheckTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the connection status check.</td>
</tr>
<tr>
    <td><CopyableCode code="LastKnownUserConnectionTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last known user connection.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkspaceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the WorkSpace. (pattern: &lt;code&gt;^ws-&#91;0-9a-z&#93;&#123;8,63&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_workspaces_connection_status"><CopyableCode code="describe_workspaces_connection_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the connection status of the specified WorkSpaces.</td>
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
    defaultValue="describe_workspaces_connection_status"
    values={[
        { label: 'describe_workspaces_connection_status', value: 'describe_workspaces_connection_status' }
    ]}
>
<TabItem value="describe_workspaces_connection_status">

Describes the connection status of the specified WorkSpaces.

```sql
SELECT
ConnectionState,
ConnectionStateCheckTimestamp,
LastKnownUserConnectionTimestamp,
WorkspaceId
FROM aws.workspaces.workspaces_connection_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
