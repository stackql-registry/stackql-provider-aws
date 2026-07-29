--- 
title: connection_group_by_routing_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_group_by_routing_endpoints
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>connection_group_by_routing_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_group_by_routing_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.connection_group_by_routing_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection_group_by_routing_endpoint"
    values={[
        { label: 'get_connection_group_by_routing_endpoint', value: 'get_connection_group_by_routing_endpoint' }
    ]}
>
<TabItem value="get_connection_group_by_routing_endpoint">

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
    <td><CopyableCode code="connection_group" /></td>
    <td><code>string</code></td>
    <td>The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The current version of the connection group.</td>
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
    <td><a href="#get_connection_group_by_routing_endpoint"><CopyableCode code="get_connection_group_by_routing_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-RoutingEndpoint"><code>RoutingEndpoint</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a connection group by using the endpoint that you specify.</td>
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
<tr id="parameter-RoutingEndpoint">
    <td><CopyableCode code="RoutingEndpoint" /></td>
    <td><code>string</code></td>
    <td>The routing endpoint for the target connection group, such as d111111abcdef8.cloudfront.net.</td>
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
    defaultValue="get_connection_group_by_routing_endpoint"
    values={[
        { label: 'get_connection_group_by_routing_endpoint', value: 'get_connection_group_by_routing_endpoint' }
    ]}
>
<TabItem value="get_connection_group_by_routing_endpoint">

Gets information about a connection group by using the endpoint that you specify.

```sql
SELECT
connection_group,
e_tag
FROM aws.cloudfront.connection_group_by_routing_endpoints
WHERE RoutingEndpoint = '{{ RoutingEndpoint }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
