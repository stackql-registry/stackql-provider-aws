--- 
title: transit_gateway_route_table_announcements
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_route_table_announcements
  - ec2
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_route_table_announcements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_route_table_announcements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_route_table_announcements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_route_table_announcements"
    values={[
        { label: 'describe_transit_gateway_route_table_announcements', value: 'describe_transit_gateway_route_table_announcements' }
    ]}
>
<TabItem value="describe_transit_gateway_route_table_announcements">

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
    <td><CopyableCode code="AnnouncementDirection" /></td>
    <td><code>string</code></td>
    <td>The direction for the route table announcement.</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the core network for the transit gateway route table announcement.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the transit gateway route table announcement was created.</td>
</tr>
<tr>
    <td><CopyableCode code="PeerCoreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the core network ID for the peer.</td>
</tr>
<tr>
    <td><CopyableCode code="PeerTransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the peer transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="PeeringAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the peering attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the transit gateway announcement.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The key-value pairs associated with the route table announcement.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayRouteTableAnnouncementId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table announcement.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table.</td>
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
    <td><a href="#describe_transit_gateway_route_table_announcements"><CopyableCode code="describe_transit_gateway_route_table_announcements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayRouteTableAnnouncementIds"><code>TransitGatewayRouteTableAnnouncementIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more transit gateway route table advertisements.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_route_table_announcement"><CopyableCode code="create_transit_gateway_route_table_announcement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-PeeringAttachmentId"><code>PeeringAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Advertises a new transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_route_table_announcement"><CopyableCode code="delete_transit_gateway_route_table_announcement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableAnnouncementId"><code>TransitGatewayRouteTableAnnouncementId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Advertises to the transit gateway that a transit gateway route table is deleted.</td>
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
<tr id="parameter-PeeringAttachmentId">
    <td><CopyableCode code="PeeringAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the peering attachment.</td>
</tr>
<tr id="parameter-TransitGatewayRouteTableAnnouncementId">
    <td><CopyableCode code="TransitGatewayRouteTableAnnouncementId" /></td>
    <td><code>string</code></td>
    <td>The transit gateway route table ID that's being deleted.</td>
</tr>
<tr id="parameter-TransitGatewayRouteTableId">
    <td><CopyableCode code="TransitGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters associated with the transit gateway policy table.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags specifications applied to the transit gateway route table announcement.</td>
</tr>
<tr id="parameter-TransitGatewayRouteTableAnnouncementIds">
    <td><CopyableCode code="TransitGatewayRouteTableAnnouncementIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the transit gateway route tables that are being advertised.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateway_route_table_announcements"
    values={[
        { label: 'describe_transit_gateway_route_table_announcements', value: 'describe_transit_gateway_route_table_announcements' }
    ]}
>
<TabItem value="describe_transit_gateway_route_table_announcements">

Describes one or more transit gateway route table advertisements.

```sql
SELECT
AnnouncementDirection,
CoreNetworkId,
CreationTime,
PeerCoreNetworkId,
PeerTransitGatewayId,
PeeringAttachmentId,
State,
Tags,
TransitGatewayId,
TransitGatewayRouteTableAnnouncementId,
TransitGatewayRouteTableId
FROM aws.ec2.transit_gateway_route_table_announcements
WHERE region = '{{ region }}' -- required
AND TransitGatewayRouteTableAnnouncementIds = '{{ TransitGatewayRouteTableAnnouncementIds }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_transit_gateway_route_table_announcement"
    values={[
        { label: 'create_transit_gateway_route_table_announcement', value: 'create_transit_gateway_route_table_announcement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_route_table_announcement">

Advertises a new transit gateway route table.

```sql
INSERT INTO aws.ec2.transit_gateway_route_table_announcements (
TransitGatewayRouteTableId,
PeeringAttachmentId,
region,
TagSpecification,
DryRun
)
SELECT 
'{{ TransitGatewayRouteTableId }}',
'{{ PeeringAttachmentId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
AnnouncementDirection,
CoreNetworkId,
CreationTime,
PeerCoreNetworkId,
PeerTransitGatewayId,
PeeringAttachmentId,
State,
Tags,
TransitGatewayId,
TransitGatewayRouteTableAnnouncementId,
TransitGatewayRouteTableId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_route_table_announcements
  props:
    - name: TransitGatewayRouteTableId
      value: "{{ TransitGatewayRouteTableId }}"
      description: Required parameter for the transit_gateway_route_table_announcements resource.
    - name: PeeringAttachmentId
      value: "{{ PeeringAttachmentId }}"
      description: Required parameter for the transit_gateway_route_table_announcements resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_route_table_announcements resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags specifications applied to the transit gateway route table announcement.
      description: The tags specifications applied to the transit gateway route table announcement.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_route_table_announcement"
    values={[
        { label: 'delete_transit_gateway_route_table_announcement', value: 'delete_transit_gateway_route_table_announcement' }
    ]}
>
<TabItem value="delete_transit_gateway_route_table_announcement">

Advertises to the transit gateway that a transit gateway route table is deleted.

```sql
DELETE FROM aws.ec2.transit_gateway_route_table_announcements
WHERE TransitGatewayRouteTableAnnouncementId = '{{ TransitGatewayRouteTableAnnouncementId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
