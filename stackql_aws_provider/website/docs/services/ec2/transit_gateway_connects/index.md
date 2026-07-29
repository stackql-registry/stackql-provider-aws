--- 
title: transit_gateway_connects
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_connects
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_connects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_connects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_connects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_connects"
    values={[
        { label: 'describe_transit_gateway_connects', value: 'describe_transit_gateway_connects' }
    ]}
>
<TabItem value="describe_transit_gateway_connects">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>The Connect attachment options.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Connect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="transport_transit_gateway_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment from which the Connect attachment was created.</td>
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
    <td><a href="#describe_transit_gateway_connects"><CopyableCode code="describe_transit_gateway_connects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentIds"><code>TransitGatewayAttachmentIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more Connect attachments.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_connect"><CopyableCode code="create_transit_gateway_connect" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransportTransitGatewayAttachmentId"><code>TransportTransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Options"><code>Options</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a Connect attachment from a specified transit gateway attachment. A Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a transit gateway and an appliance. A Connect attachment uses an existing VPC or Amazon Web Services Direct Connect attachment as the underlying transport mechanism.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_connect"><CopyableCode code="delete_transit_gateway_connect" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Connect attachment. You must first delete any Connect peers for the attachment.</td>
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
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Connect attachment.</td>
</tr>
<tr id="parameter-TransportTransitGatewayAttachmentId">
    <td><CopyableCode code="TransportTransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway attachment. You can specify a VPC attachment or Amazon Web Services Direct Connect attachment.</td>
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
    <td>One or more filters. The possible values are: options.protocol - The tunnel protocol (gre). state - The state of the attachment (initiating | initiatingRequest | pendingAcceptance | rollingBack | pending | available | modifying | deleting | deleted | failed | rejected | rejecting | failing). transit-gateway-attachment-id - The ID of the Connect attachment. transit-gateway-id - The ID of the transit gateway. transport-transit-gateway-attachment-id - The ID of the transit gateway attachment from which the Connect attachment was created.</td>
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
    <td>The Connect attachment options.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the Connect attachment.</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentIds">
    <td><CopyableCode code="TransitGatewayAttachmentIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the attachments.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateway_connects"
    values={[
        { label: 'describe_transit_gateway_connects', value: 'describe_transit_gateway_connects' }
    ]}
>
<TabItem value="describe_transit_gateway_connects">

Describes one or more Connect attachments.

```sql
SELECT
creation_time,
options,
state,
tags,
transit_gateway_attachment_id,
transit_gateway_id,
transport_transit_gateway_attachment_id
FROM aws.ec2.transit_gateway_connects
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
    defaultValue="create_transit_gateway_connect"
    values={[
        { label: 'create_transit_gateway_connect', value: 'create_transit_gateway_connect' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_connect">

Creates a Connect attachment from a specified transit gateway attachment. A Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a transit gateway and an appliance. A Connect attachment uses an existing VPC or Amazon Web Services Direct Connect attachment as the underlying transport mechanism.

```sql
INSERT INTO aws.ec2.transit_gateway_connects (
TransportTransitGatewayAttachmentId,
region,
Options,
TagSpecification,
DryRun
)
SELECT 
'{{ TransportTransitGatewayAttachmentId }}',
'{{ region }}',
'{{ Options }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
creation_time,
options,
state,
tags,
transit_gateway_attachment_id,
transit_gateway_id,
transport_transit_gateway_attachment_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_connects
  props:
    - name: TransportTransitGatewayAttachmentId
      value: "{{ TransportTransitGatewayAttachmentId }}"
      description: Required parameter for the transit_gateway_connects resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_connects resource.
    - name: Options
      value: "{{ Options }}"
      description: The Connect attachment options.
      description: The Connect attachment options.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the Connect attachment.
      description: The tags to apply to the Connect attachment.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_connect"
    values={[
        { label: 'delete_transit_gateway_connect', value: 'delete_transit_gateway_connect' }
    ]}
>
<TabItem value="delete_transit_gateway_connect">

Deletes the specified Connect attachment. You must first delete any Connect peers for the attachment.

```sql
DELETE FROM aws.ec2.transit_gateway_connects
WHERE TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
