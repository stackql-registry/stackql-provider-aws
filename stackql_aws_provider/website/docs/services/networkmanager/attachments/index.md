--- 
title: attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - attachments
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

Creates, updates, deletes, gets or lists an <code>attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attachments"
    values={[
        { label: 'list_attachments', value: 'list_attachments' }
    ]}
>
<TabItem value="list_attachments">

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
    <td><CopyableCode code="AttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment. (pattern: &lt;code&gt;^attachment-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AttachmentPolicyRuleNumber" /></td>
    <td><code>integer</code></td>
    <td>The policy rule number associated with the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="AttachmentType" /></td>
    <td><code>string</code></td>
    <td>The type of attachment. (CONNECT, SITE_TO_SITE_VPN, VPC, DIRECT_CONNECT_GATEWAY, TRANSIT_GATEWAY_ROUTE_TABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a core network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the attachment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeLocation" /></td>
    <td><code>string</code></td>
    <td>The Region where the edge is located. This is returned for all attachment types except a Direct Connect gateway attachment, which instead returns EdgeLocations. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeLocations" /></td>
    <td><code>array</code></td>
    <td>The edge locations that the Direct Connect gateway is associated with. This is returned only for Direct Connect gateway attachments. All other attachment types retrun EdgeLocation.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationErrors" /></td>
    <td><code>array</code></td>
    <td>Describes the error associated with the attachment request.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkFunctionGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the network function group. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment account owner. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProposedNetworkFunctionGroupChange" /></td>
    <td><code>object</code></td>
    <td>Describes a proposed change to a network function group associated with the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="ProposedSegmentChange" /></td>
    <td><code>object</code></td>
    <td>The attachment to move from one segment to another.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The attachment resource ARN. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SegmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the segment attachment. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the attachment. (REJECTED, PENDING_ATTACHMENT_ACCEPTANCE, CREATING, FAILED, AVAILABLE, UPDATING, PENDING_NETWORK_UPDATE, PENDING_TAG_ACCEPTANCE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the attachment was last updated.</td>
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
    <td><a href="#list_attachments"><CopyableCode code="list_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-coreNetworkId"><code>coreNetworkId</code></a>, <a href="#parameter-attachmentType"><code>attachmentType</code></a>, <a href="#parameter-edgeLocation"><code>edgeLocation</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of core network attachments.</td>
</tr>
<tr>
    <td><a href="#remove_attachment_routing_policy_label"><CopyableCode code="remove_attachment_routing_policy_label" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a routing policy label from an attachment.</td>
</tr>
<tr>
    <td><a href="#put_attachment_routing_policy_label"><CopyableCode code="put_attachment_routing_policy_label" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CoreNetworkId"><code>CoreNetworkId</code></a>, <a href="#parameter-AttachmentId"><code>AttachmentId</code></a>, <a href="#parameter-RoutingPolicyLabel"><code>RoutingPolicyLabel</code></a></td>
    <td></td>
    <td>Applies a routing policy label to an attachment for traffic routing decisions.</td>
</tr>
<tr>
    <td><a href="#delete_attachment"><CopyableCode code="delete_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an attachment. Supports all attachment types.</td>
</tr>
<tr>
    <td><a href="#accept_attachment"><CopyableCode code="accept_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Accepts a core network attachment request. Once the attachment request is accepted by a core network owner, the attachment is created and connected to a core network.</td>
</tr>
<tr>
    <td><a href="#reject_attachment"><CopyableCode code="reject_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Rejects a core network attachment request.</td>
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
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-core_network_id">
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the core network containing the attachment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-attachmentType">
    <td><CopyableCode code="attachmentType" /></td>
    <td><code>string</code></td>
    <td>The type of attachment.</td>
</tr>
<tr id="parameter-coreNetworkId">
    <td><CopyableCode code="coreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network.</td>
</tr>
<tr id="parameter-edgeLocation">
    <td><CopyableCode code="edgeLocation" /></td>
    <td><code>string</code></td>
    <td>The Region where the edge is located.</td>
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
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the attachment.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_attachments"
    values={[
        { label: 'list_attachments', value: 'list_attachments' }
    ]}
>
<TabItem value="list_attachments">

Returns a list of core network attachments.

```sql
SELECT
AttachmentId,
AttachmentPolicyRuleNumber,
AttachmentType,
CoreNetworkArn,
CoreNetworkId,
CreatedAt,
EdgeLocation,
EdgeLocations,
LastModificationErrors,
NetworkFunctionGroupName,
OwnerAccountId,
ProposedNetworkFunctionGroupChange,
ProposedSegmentChange,
ResourceArn,
SegmentName,
State,
Tags,
UpdatedAt
FROM aws.networkmanager.attachments
WHERE region = '{{ region }}' -- required
AND coreNetworkId = '{{ coreNetworkId }}'
AND attachmentType = '{{ attachmentType }}'
AND edgeLocation = '{{ edgeLocation }}'
AND state = '{{ state }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_attachment_routing_policy_label"
    values={[
        { label: 'remove_attachment_routing_policy_label', value: 'remove_attachment_routing_policy_label' }
    ]}
>
<TabItem value="remove_attachment_routing_policy_label">

Removes a routing policy label from an attachment.

```sql
UPDATE aws.networkmanager.attachments
SET 
-- No updatable properties
WHERE 
core_network_id = '{{ core_network_id }}' --required
AND attachment_id = '{{ attachment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
AttachmentId,
CoreNetworkId,
RoutingPolicyLabel;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_attachment_routing_policy_label"
    values={[
        { label: 'put_attachment_routing_policy_label', value: 'put_attachment_routing_policy_label' }
    ]}
>
<TabItem value="put_attachment_routing_policy_label">

Applies a routing policy label to an attachment for traffic routing decisions.

```sql
REPLACE aws.networkmanager.attachments
SET 
CoreNetworkId = '{{ CoreNetworkId }}',
AttachmentId = '{{ AttachmentId }}',
RoutingPolicyLabel = '{{ RoutingPolicyLabel }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND CoreNetworkId = '{{ CoreNetworkId }}' --required
AND AttachmentId = '{{ AttachmentId }}' --required
AND RoutingPolicyLabel = '{{ RoutingPolicyLabel }}' --required
RETURNING
AttachmentId,
CoreNetworkId,
RoutingPolicyLabel;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attachment"
    values={[
        { label: 'delete_attachment', value: 'delete_attachment' }
    ]}
>
<TabItem value="delete_attachment">

Deletes an attachment. Supports all attachment types.

```sql
DELETE FROM aws.networkmanager.attachments
WHERE attachment_id = '{{ attachment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_attachment"
    values={[
        { label: 'accept_attachment', value: 'accept_attachment' },
        { label: 'reject_attachment', value: 'reject_attachment' }
    ]}
>
<TabItem value="accept_attachment">

Accepts a core network attachment request. Once the attachment request is accepted by a core network owner, the attachment is created and connected to a core network.

```sql
EXEC aws.networkmanager.attachments.accept_attachment 
@attachment_id='{{ attachment_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="reject_attachment">

Rejects a core network attachment request.

```sql
EXEC aws.networkmanager.attachments.reject_attachment 
@attachment_id='{{ attachment_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
