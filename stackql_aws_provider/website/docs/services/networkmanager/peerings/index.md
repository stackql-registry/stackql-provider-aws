--- 
title: peerings
hide_title: false
hide_table_of_contents: false
keywords:
  - peerings
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

Creates, updates, deletes, gets or lists a <code>peerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="peerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.peerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_peerings"
    values={[
        { label: 'list_peerings', value: 'list_peerings' }
    ]}
>
<TabItem value="list_peerings">

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
    <td><CopyableCode code="CoreNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a core network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the core network for the peering request. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the attachment peer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeLocation" /></td>
    <td><code>string</code></td>
    <td>The edge location for the peer. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationErrors" /></td>
    <td><code>array</code></td>
    <td>Describes the error associated with the Connect peer request.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the account owner. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PeeringId" /></td>
    <td><code>string</code></td>
    <td>The ID of the peering attachment. (pattern: &lt;code&gt;^peering-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PeeringType" /></td>
    <td><code>string</code></td>
    <td>The type of peering. This will be TRANSIT_GATEWAY. (TRANSIT_GATEWAY)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The resource ARN of the peer. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the peering connection. (CREATING, FAILED, AVAILABLE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The list of key-value tags associated with the peering.</td>
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
    <td><a href="#list_peerings"><CopyableCode code="list_peerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-coreNetworkId"><code>coreNetworkId</code></a>, <a href="#parameter-peeringType"><code>peeringType</code></a>, <a href="#parameter-edgeLocation"><code>edgeLocation</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the peerings for a core network.</td>
</tr>
<tr>
    <td><a href="#delete_peering"><CopyableCode code="delete_peering" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-peering_id"><code>peering_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing peering connection.</td>
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
<tr id="parameter-peering_id">
    <td><CopyableCode code="peering_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the peering connection to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-coreNetworkId">
    <td><CopyableCode code="coreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network.</td>
</tr>
<tr id="parameter-edgeLocation">
    <td><CopyableCode code="edgeLocation" /></td>
    <td><code>string</code></td>
    <td>Returns a list edge locations for the</td>
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
<tr id="parameter-peeringType">
    <td><CopyableCode code="peeringType" /></td>
    <td><code>string</code></td>
    <td>Returns a list of a peering requests.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Returns a list of the peering request states.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_peerings"
    values={[
        { label: 'list_peerings', value: 'list_peerings' }
    ]}
>
<TabItem value="list_peerings">

Lists the peerings for a core network.

```sql
SELECT
CoreNetworkArn,
CoreNetworkId,
CreatedAt,
EdgeLocation,
LastModificationErrors,
OwnerAccountId,
PeeringId,
PeeringType,
ResourceArn,
State,
Tags
FROM aws.networkmanager.peerings
WHERE region = '{{ region }}' -- required
AND coreNetworkId = '{{ coreNetworkId }}'
AND peeringType = '{{ peeringType }}'
AND edgeLocation = '{{ edgeLocation }}'
AND state = '{{ state }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_peering"
    values={[
        { label: 'delete_peering', value: 'delete_peering' }
    ]}
>
<TabItem value="delete_peering">

Deletes an existing peering connection.

```sql
DELETE FROM aws.networkmanager.peerings
WHERE peering_id = '{{ peering_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
