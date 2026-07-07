--- 
title: network_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - network_routes
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>network_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.network_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_routes"
    values={[
        { label: 'get_network_routes', value: 'get_network_routes' }
    ]}
>
<TabItem value="get_network_routes">

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
    <td><CopyableCode code="CoreNetworkSegmentEdge" /></td>
    <td><code>object</code></td>
    <td>Describes a core network segment edge.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkRoutes" /></td>
    <td><code>array</code></td>
    <td>The network routes.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteTableArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the route table. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RouteTableTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The route table creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteTableType" /></td>
    <td><code>string</code></td>
    <td>The route table type. (TRANSIT_GATEWAY_ROUTE_TABLE, CORE_NETWORK_SEGMENT, NETWORK_FUNCTION_GROUP)</td>
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
    <td><a href="#get_network_routes"><CopyableCode code="get_network_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the network routes of the specified global network.</td>
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
<tr id="parameter-global_network_id">
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network.</td>
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
    defaultValue="get_network_routes"
    values={[
        { label: 'get_network_routes', value: 'get_network_routes' }
    ]}
>
<TabItem value="get_network_routes">

Gets the network routes of the specified global network.

```sql
SELECT
CoreNetworkSegmentEdge,
NetworkRoutes,
RouteTableArn,
RouteTableTimestamp,
RouteTableType
FROM aws.networkmanager.network_routes
WHERE global_network_id = '{{ global_network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
