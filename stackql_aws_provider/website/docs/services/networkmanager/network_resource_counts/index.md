--- 
title: network_resource_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - network_resource_counts
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

Creates, updates, deletes, gets or lists a <code>network_resource_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_resource_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.network_resource_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_resource_counts"
    values={[
        { label: 'get_network_resource_counts', value: 'get_network_resource_counts' }
    ]}
>
<TabItem value="get_network_resource_counts">

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
    <td><CopyableCode code="Count" /></td>
    <td><code>integer</code></td>
    <td>The resource count.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_network_resource_counts"><CopyableCode code="get_network_resource_counts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the count of network resources, by resource type, for the specified global network.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type. The following are the supported resource types for Direct Connect: dxcon dx-gateway dx-vif The following are the supported resource types for Network Manager: attachment connect-peer connection core-network device link peering site The following are the supported resource types for Amazon VPC: customer-gateway transit-gateway transit-gateway-attachment transit-gateway-connect-peer transit-gateway-route-table vpn-connection</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_network_resource_counts"
    values={[
        { label: 'get_network_resource_counts', value: 'get_network_resource_counts' }
    ]}
>
<TabItem value="get_network_resource_counts">

Gets the count of network resources, by resource type, for the specified global network.

```sql
SELECT
Count,
ResourceType
FROM aws.networkmanager.network_resource_counts
WHERE global_network_id = '{{ global_network_id }}' -- required
AND region = '{{ region }}' -- required
AND resourceType = '{{ resourceType }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
