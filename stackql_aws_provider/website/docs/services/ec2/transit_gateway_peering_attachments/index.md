--- 
title: transit_gateway_peering_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_peering_attachments
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_peering_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_peering_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_peering_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_peering_attachments"
    values={[
        { label: 'describe_transit_gateway_peering_attachments', value: 'describe_transit_gateway_peering_attachments' }
    ]}
>
<TabItem value="describe_transit_gateway_peering_attachments">

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
    <td><CopyableCode code="AccepterTgwInfo" /></td>
    <td><code>string</code></td>
    <td>Information about the accepter transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="AccepterTransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the accepter transit gateway attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The time the transit gateway peering attachment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Options" /></td>
    <td><code>string</code></td>
    <td>Details about the transit gateway peering attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterTgwInfo" /></td>
    <td><code>string</code></td>
    <td>Information about the requester transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the transit gateway peering attachment. Note that the initiating state has been deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the transit gateway peering attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the transit gateway peering attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway peering attachment.</td>
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
    <td><a href="#describe_transit_gateway_peering_attachments"><CopyableCode code="describe_transit_gateway_peering_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentIds"><code>TransitGatewayAttachmentIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes your transit gateway peering attachments.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_peering_attachment"><CopyableCode code="create_transit_gateway_peering_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-PeerTransitGatewayId"><code>PeerTransitGatewayId</code></a>, <a href="#parameter-PeerAccountId"><code>PeerAccountId</code></a>, <a href="#parameter-PeerRegion"><code>PeerRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Options"><code>Options</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Requests a transit gateway peering attachment between the specified transit gateway (requester) and a peer transit gateway (accepter). The peer transit gateway can be in your account or a different Amazon Web Services account. After you create the peering attachment, the owner of the accepter transit gateway must accept the attachment request.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_peering_attachment"><CopyableCode code="delete_transit_gateway_peering_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a transit gateway peering attachment.</td>
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
<tr id="parameter-PeerAccountId">
    <td><CopyableCode code="PeerAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the peer transit gateway.</td>
</tr>
<tr id="parameter-PeerRegion">
    <td><CopyableCode code="PeerRegion" /></td>
    <td><code>string</code></td>
    <td>The Region where the peer transit gateway is located.</td>
</tr>
<tr id="parameter-PeerTransitGatewayId">
    <td><CopyableCode code="PeerTransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the peer transit gateway with which to create the peering attachment.</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway peering attachment.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
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
    <td>One or more filters. The possible values are: transit-gateway-attachment-id - The ID of the transit gateway attachment. local-owner-id - The ID of your Amazon Web Services account. remote-owner-id - The ID of the Amazon Web Services account in the remote Region that owns the transit gateway. state - The state of the peering attachment. Valid values are available | deleted | deleting | failed | failing | initiatingRequest | modifying | pendingAcceptance | pending | rollingBack | rejected | rejecting). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value. transit-gateway-id - The ID of the transit gateway.</td>
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
<tr id="parameter-Options">
    <td><CopyableCode code="Options" /></td>
    <td><code>object</code></td>
    <td>Requests a transit gateway peering attachment.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the transit gateway peering attachment.</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentIds">
    <td><CopyableCode code="TransitGatewayAttachmentIds" /></td>
    <td><code>array</code></td>
    <td>One or more IDs of the transit gateway peering attachments.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateway_peering_attachments"
    values={[
        { label: 'describe_transit_gateway_peering_attachments', value: 'describe_transit_gateway_peering_attachments' }
    ]}
>
<TabItem value="describe_transit_gateway_peering_attachments">

Describes your transit gateway peering attachments.

```sql
SELECT
AccepterTgwInfo,
AccepterTransitGatewayAttachmentId,
CreationTime,
Options,
RequesterTgwInfo,
State,
Status,
Tags,
TransitGatewayAttachmentId
FROM aws.ec2.transit_gateway_peering_attachments
WHERE region = '{{ region }}' -- required
AND TransitGatewayAttachmentIds = '{{ TransitGatewayAttachmentIds }}'
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
    defaultValue="create_transit_gateway_peering_attachment"
    values={[
        { label: 'create_transit_gateway_peering_attachment', value: 'create_transit_gateway_peering_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_peering_attachment">

Requests a transit gateway peering attachment between the specified transit gateway (requester) and a peer transit gateway (accepter). The peer transit gateway can be in your account or a different Amazon Web Services account. After you create the peering attachment, the owner of the accepter transit gateway must accept the attachment request.

```sql
INSERT INTO aws.ec2.transit_gateway_peering_attachments (
TransitGatewayId,
PeerTransitGatewayId,
PeerAccountId,
PeerRegion,
region,
Options,
TagSpecification,
DryRun
)
SELECT 
'{{ TransitGatewayId }}',
'{{ PeerTransitGatewayId }}',
'{{ PeerAccountId }}',
'{{ PeerRegion }}',
'{{ region }}',
'{{ Options }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
AccepterTgwInfo,
AccepterTransitGatewayAttachmentId,
CreationTime,
Options,
RequesterTgwInfo,
State,
Status,
Tags,
TransitGatewayAttachmentId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_peering_attachments
  props:
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: Required parameter for the transit_gateway_peering_attachments resource.
    - name: PeerTransitGatewayId
      value: "{{ PeerTransitGatewayId }}"
      description: Required parameter for the transit_gateway_peering_attachments resource.
    - name: PeerAccountId
      value: "{{ PeerAccountId }}"
      description: Required parameter for the transit_gateway_peering_attachments resource.
    - name: PeerRegion
      value: "{{ PeerRegion }}"
      description: Required parameter for the transit_gateway_peering_attachments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_peering_attachments resource.
    - name: Options
      value: "{{ Options }}"
      description: Requests a transit gateway peering attachment.
      description: Requests a transit gateway peering attachment.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the transit gateway peering attachment.
      description: The tags to apply to the transit gateway peering attachment.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_peering_attachment"
    values={[
        { label: 'delete_transit_gateway_peering_attachment', value: 'delete_transit_gateway_peering_attachment' }
    ]}
>
<TabItem value="delete_transit_gateway_peering_attachment">

Deletes a transit gateway peering attachment.

```sql
DELETE FROM aws.ec2.transit_gateway_peering_attachments
WHERE TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
