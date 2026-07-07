--- 
title: transit_gateway_connect_peer_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_connect_peer_associations
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_connect_peer_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_connect_peer_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.transit_gateway_connect_peer_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transit_gateway_connect_peer_associations"
    values={[
        { label: 'get_transit_gateway_connect_peer_associations', value: 'get_transit_gateway_connect_peer_associations' }
    ]}
>
<TabItem value="get_transit_gateway_connect_peer_associations">

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
    <td><CopyableCode code="DeviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the device. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LinkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the link. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the association. (PENDING, AVAILABLE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayConnectPeerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the transit gateway Connect peer. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_transit_gateway_connect_peer_associations"><CopyableCode code="get_transit_gateway_connect_peer_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-transitGatewayConnectPeerArns"><code>transitGatewayConnectPeerArns</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets information about one or more of your transit gateway Connect peer associations in a global network.</td>
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
<tr id="parameter-transitGatewayConnectPeerArns">
    <td><CopyableCode code="transitGatewayConnectPeerArns" /></td>
    <td><code>array</code></td>
    <td>One or more transit gateway Connect peer Amazon Resource Names (ARNs).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_transit_gateway_connect_peer_associations"
    values={[
        { label: 'get_transit_gateway_connect_peer_associations', value: 'get_transit_gateway_connect_peer_associations' }
    ]}
>
<TabItem value="get_transit_gateway_connect_peer_associations">

Gets information about one or more of your transit gateway Connect peer associations in a global network.

```sql
SELECT
DeviceId,
GlobalNetworkId,
LinkId,
State,
TransitGatewayConnectPeerArn
FROM aws.networkmanager.transit_gateway_connect_peer_associations
WHERE global_network_id = '{{ global_network_id }}' -- required
AND region = '{{ region }}' -- required
AND transitGatewayConnectPeerArns = '{{ transitGatewayConnectPeerArns }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
