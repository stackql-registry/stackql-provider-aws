--- 
title: transit_gateway_vpc_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_vpc_attachments
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_vpc_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_vpc_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_vpc_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_vpc_attachments"
    values={[
        { label: 'describe_transit_gateway_vpc_attachments', value: 'describe_transit_gateway_vpc_attachments' }
    ]}
>
<TabItem value="describe_transit_gateway_vpc_attachments">

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
    <td>The VPC attachment options.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the VPC attachment. Note that the initiating state has been deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>string</code></td>
    <td>The IDs of the subnets.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the VPC attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the VPC.</td>
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
    <td><a href="#describe_transit_gateway_vpc_attachments"><CopyableCode code="describe_transit_gateway_vpc_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentIds"><code>TransitGatewayAttachmentIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more VPC attachments. By default, all VPC attachments are described. Alternatively, you can filter the results.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_vpc_attachment"><CopyableCode code="create_transit_gateway_vpc_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Options"><code>Options</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Attaches the specified VPC to the specified transit gateway. If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached, the new VPC CIDR range is not propagated to the default propagation route table. To send VPC traffic to an attached transit gateway, add a route to the VPC route table using CreateRoute.</td>
</tr>
<tr>
    <td><a href="#modify_transit_gateway_vpc_attachment"><CopyableCode code="modify_transit_gateway_vpc_attachment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AddSubnetIds"><code>AddSubnetIds</code></a>, <a href="#parameter-RemoveSubnetIds"><code>RemoveSubnetIds</code></a>, <a href="#parameter-Options"><code>Options</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the specified VPC attachment.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_vpc_attachment"><CopyableCode code="delete_transit_gateway_vpc_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified VPC attachment.</td>
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
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of one or more subnets. You can specify only one subnet per Availability Zone. You must specify at least one subnet, but we recommend that you specify two subnets for better availability. The transit gateway uses one IP address from each specified subnet.</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddSubnetIds">
    <td><CopyableCode code="AddSubnetIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: state - The state of the attachment. Valid values are available | deleted | deleting | failed | failing | initiatingRequest | modifying | pendingAcceptance | pending | rollingBack | rejected | rejecting. transit-gateway-attachment-id - The ID of the attachment. transit-gateway-id - The ID of the transit gateway. vpc-id - The ID of the VPC.</td>
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
    <td>The new VPC attachment options.</td>
</tr>
<tr id="parameter-RemoveSubnetIds">
    <td><CopyableCode code="RemoveSubnetIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of one or more subnets to remove.</td>
</tr>
<tr id="parameter-TagSpecifications">
    <td><CopyableCode code="TagSpecifications" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the VPC attachment.</td>
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
    defaultValue="describe_transit_gateway_vpc_attachments"
    values={[
        { label: 'describe_transit_gateway_vpc_attachments', value: 'describe_transit_gateway_vpc_attachments' }
    ]}
>
<TabItem value="describe_transit_gateway_vpc_attachments">

Describes one or more VPC attachments. By default, all VPC attachments are described. Alternatively, you can filter the results.

```sql
SELECT
creation_time,
options,
state,
subnet_ids,
tags,
transit_gateway_attachment_id,
transit_gateway_id,
vpc_id,
vpc_owner_id
FROM aws.ec2.transit_gateway_vpc_attachments
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
    defaultValue="create_transit_gateway_vpc_attachment"
    values={[
        { label: 'create_transit_gateway_vpc_attachment', value: 'create_transit_gateway_vpc_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_vpc_attachment">

Attaches the specified VPC to the specified transit gateway. If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached, the new VPC CIDR range is not propagated to the default propagation route table. To send VPC traffic to an attached transit gateway, add a route to the VPC route table using CreateRoute.

```sql
INSERT INTO aws.ec2.transit_gateway_vpc_attachments (
TransitGatewayId,
VpcId,
SubnetIds,
region,
Options,
TagSpecifications,
DryRun
)
SELECT 
'{{ TransitGatewayId }}',
'{{ VpcId }}',
'{{ SubnetIds }}',
'{{ region }}',
'{{ Options }}',
'{{ TagSpecifications }}',
'{{ DryRun }}'
RETURNING
creation_time,
options,
state,
subnet_ids,
tags,
transit_gateway_attachment_id,
transit_gateway_id,
vpc_id,
vpc_owner_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_vpc_attachments
  props:
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: Required parameter for the transit_gateway_vpc_attachments resource.
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the transit_gateway_vpc_attachments resource.
    - name: SubnetIds
      value: "{{ SubnetIds }}"
      description: Required parameter for the transit_gateway_vpc_attachments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_vpc_attachments resource.
    - name: Options
      value: "{{ Options }}"
      description: The VPC attachment options.
      description: The VPC attachment options.
    - name: TagSpecifications
      value: "{{ TagSpecifications }}"
      description: The tags to apply to the VPC attachment.
      description: The tags to apply to the VPC attachment.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_transit_gateway_vpc_attachment"
    values={[
        { label: 'modify_transit_gateway_vpc_attachment', value: 'modify_transit_gateway_vpc_attachment' }
    ]}
>
<TabItem value="modify_transit_gateway_vpc_attachment">

Modifies the specified VPC attachment.

```sql
UPDATE aws.ec2.transit_gateway_vpc_attachments
SET 
-- No updatable properties
WHERE 
TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId }}' --required
AND region = '{{ region }}' --required
AND AddSubnetIds = '{{ AddSubnetIds}}'
AND RemoveSubnetIds = '{{ RemoveSubnetIds}}'
AND Options = '{{ Options}}'
AND DryRun = {{ DryRun}}
RETURNING
creation_time,
options,
state,
subnet_ids,
tags,
transit_gateway_attachment_id,
transit_gateway_id,
vpc_id,
vpc_owner_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_vpc_attachment"
    values={[
        { label: 'delete_transit_gateway_vpc_attachment', value: 'delete_transit_gateway_vpc_attachment' }
    ]}
>
<TabItem value="delete_transit_gateway_vpc_attachment">

Deletes the specified VPC attachment.

```sql
DELETE FROM aws.ec2.transit_gateway_vpc_attachments
WHERE TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
