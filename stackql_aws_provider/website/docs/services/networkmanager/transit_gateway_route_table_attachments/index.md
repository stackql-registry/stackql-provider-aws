--- 
title: transit_gateway_route_table_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_route_table_attachments
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_route_table_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_route_table_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.transit_gateway_route_table_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transit_gateway_route_table_attachment"
    values={[
        { label: 'get_transit_gateway_route_table_attachment', value: 'get_transit_gateway_route_table_attachment' }
    ]}
>
<TabItem value="get_transit_gateway_route_table_attachment">

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
    <td><CopyableCode code="attachment" /></td>
    <td><code>object</code></td>
    <td>Describes a core network attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="peering_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the peering attachment. (pattern: &lt;code&gt;^peering-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_route_table_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the transit gateway attachment route table. For example, "TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456". (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_transit_gateway_route_table_attachment"><CopyableCode code="get_transit_gateway_route_table_attachment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a transit gateway route table attachment.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_route_table_attachment"><CopyableCode code="create_transit_gateway_route_table_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PeeringId"><code>PeeringId</code></a>, <a href="#parameter-TransitGatewayRouteTableArn"><code>TransitGatewayRouteTableArn</code></a></td>
    <td></td>
    <td>Creates a transit gateway route table attachment.</td>
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
<tr id="parameter-attachment_id">
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table attachment.</td>
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
    defaultValue="get_transit_gateway_route_table_attachment"
    values={[
        { label: 'get_transit_gateway_route_table_attachment', value: 'get_transit_gateway_route_table_attachment' }
    ]}
>
<TabItem value="get_transit_gateway_route_table_attachment">

Returns information about a transit gateway route table attachment.

```sql
SELECT
attachment,
peering_id,
transit_gateway_route_table_arn
FROM aws.networkmanager.transit_gateway_route_table_attachments
WHERE attachment_id = '{{ attachment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_transit_gateway_route_table_attachment"
    values={[
        { label: 'create_transit_gateway_route_table_attachment', value: 'create_transit_gateway_route_table_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_route_table_attachment">

Creates a transit gateway route table attachment.

```sql
INSERT INTO aws.networkmanager.transit_gateway_route_table_attachments (
PeeringId,
TransitGatewayRouteTableArn,
RoutingPolicyLabel,
Tags,
ClientToken,
region
)
SELECT 
'{{ PeeringId }}' /* required */,
'{{ TransitGatewayRouteTableArn }}' /* required */,
'{{ RoutingPolicyLabel }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
transit_gateway_route_table_attachment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_route_table_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_route_table_attachments resource.
    - name: PeeringId
      value: "{{ PeeringId }}"
    - name: TransitGatewayRouteTableArn
      value: "{{ TransitGatewayRouteTableArn }}"
    - name: RoutingPolicyLabel
      value: "{{ RoutingPolicyLabel }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
