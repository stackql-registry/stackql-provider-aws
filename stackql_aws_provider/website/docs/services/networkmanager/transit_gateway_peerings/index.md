--- 
title: transit_gateway_peerings
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_peerings
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_peerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_peerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.transit_gateway_peerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transit_gateway_peering"
    values={[
        { label: 'get_transit_gateway_peering', value: 'get_transit_gateway_peering' }
    ]}
>
<TabItem value="get_transit_gateway_peering">

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
    <td><CopyableCode code="peering" /></td>
    <td><code>object</code></td>
    <td>Describes a transit gateway peer connection.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the transit gateway. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_peering_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway peering attachment. (pattern: &lt;code&gt;^tgw-attach-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#get_transit_gateway_peering"><CopyableCode code="get_transit_gateway_peering" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-peering_id"><code>peering_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a transit gateway peer.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_peering"><CopyableCode code="create_transit_gateway_peering" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CoreNetworkId"><code>CoreNetworkId</code></a>, <a href="#parameter-TransitGatewayArn"><code>TransitGatewayArn</code></a></td>
    <td></td>
    <td>Creates a transit gateway peering connection.</td>
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
    <td>The ID of the peering request.</td>
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
    defaultValue="get_transit_gateway_peering"
    values={[
        { label: 'get_transit_gateway_peering', value: 'get_transit_gateway_peering' }
    ]}
>
<TabItem value="get_transit_gateway_peering">

Returns information about a transit gateway peer.

```sql
SELECT
peering,
transit_gateway_arn,
transit_gateway_peering_attachment_id
FROM aws.networkmanager.transit_gateway_peerings
WHERE peering_id = '{{ peering_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_transit_gateway_peering"
    values={[
        { label: 'create_transit_gateway_peering', value: 'create_transit_gateway_peering' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_peering">

Creates a transit gateway peering connection.

```sql
INSERT INTO aws.networkmanager.transit_gateway_peerings (
CoreNetworkId,
TransitGatewayArn,
Tags,
ClientToken,
region
)
SELECT 
'{{ CoreNetworkId }}' /* required */,
'{{ TransitGatewayArn }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
transit_gateway_peering
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_peerings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_peerings resource.
    - name: CoreNetworkId
      value: "{{ CoreNetworkId }}"
    - name: TransitGatewayArn
      value: "{{ TransitGatewayArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
