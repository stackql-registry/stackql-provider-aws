--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - apigatewaymanagementapi
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewaymanagementapi.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' }
    ]}
>
<TabItem value="get_connection">

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
    <td><CopyableCode code="ConnectedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time in ISO 8601 format for when the connection was established.</td>
</tr>
<tr>
    <td><CopyableCode code="Identity" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="LastActiveAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time in ISO 8601 format for when the connection was last active.</td>
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
    <td><a href="#get_connection"><CopyableCode code="get_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about the connection with the provided id.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the connection with the provided id.</td>
</tr>
<tr>
    <td><a href="#post_to_connection"><CopyableCode code="post_to_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Data"><code>Data</code></a></td>
    <td></td>
    <td>Sends the provided data to the specified connection.</td>
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
<tr id="parameter-connection_id">
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connection that a specific client is using.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' }
    ]}
>
<TabItem value="get_connection">

Get information about the connection with the provided id.

```sql
SELECT
ConnectedAt,
Identity,
LastActiveAt
FROM aws.apigatewaymanagementapi.connections
WHERE connection_id = '{{ connection_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Delete the connection with the provided id.

```sql
DELETE FROM aws.apigatewaymanagementapi.connections
WHERE connection_id = '{{ connection_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="post_to_connection"
    values={[
        { label: 'post_to_connection', value: 'post_to_connection' }
    ]}
>
<TabItem value="post_to_connection">

Sends the provided data to the specified connection.

```sql
EXEC aws.apigatewaymanagementapi.connections.post_to_connection 
@connection_id='{{ connection_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Data": "{{ Data }}"
}'
;
```
</TabItem>
</Tabs>
