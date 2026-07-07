--- 
title: transit_gateway_metering_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_metering_policies
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_metering_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_metering_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_metering_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_metering_policies"
    values={[
        { label: 'describe_transit_gateway_metering_policies', value: 'describe_transit_gateway_metering_policies' }
    ]}
>
<TabItem value="describe_transit_gateway_metering_policies">

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
    <td><CopyableCode code="MiddleboxAttachmentIds" /></td>
    <td><code>string</code></td>
    <td>The IDs of the middlebox attachments associated with the metering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the transit gateway metering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the transit gateway metering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway associated with the metering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayMeteringPolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway metering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateEffectiveAt" /></td>
    <td><code>string</code></td>
    <td>The date and time when the metering policy update becomes effective.</td>
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
    <td><a href="#describe_transit_gateway_metering_policies"><CopyableCode code="describe_transit_gateway_metering_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayMeteringPolicyIds"><code>TransitGatewayMeteringPolicyIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more transit gateway metering policies.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_metering_policy"><CopyableCode code="create_transit_gateway_metering_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MiddleboxAttachmentId"><code>MiddleboxAttachmentId</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a metering policy for a transit gateway to track and measure network traffic.</td>
</tr>
<tr>
    <td><a href="#modify_transit_gateway_metering_policy"><CopyableCode code="modify_transit_gateway_metering_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TransitGatewayMeteringPolicyId"><code>TransitGatewayMeteringPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AddMiddleboxAttachmentId"><code>AddMiddleboxAttachmentId</code></a>, <a href="#parameter-RemoveMiddleboxAttachmentId"><code>RemoveMiddleboxAttachmentId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies a transit gateway metering policy.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_metering_policy"><CopyableCode code="delete_transit_gateway_metering_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayMeteringPolicyId"><code>TransitGatewayMeteringPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a transit gateway metering policy.</td>
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
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway for which to create the metering policy.</td>
</tr>
<tr id="parameter-TransitGatewayMeteringPolicyId">
    <td><CopyableCode code="TransitGatewayMeteringPolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway metering policy to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddMiddleboxAttachmentId">
    <td><CopyableCode code="AddMiddleboxAttachmentId" /></td>
    <td><code>array</code></td>
    <td>The IDs of middlebox attachments to add to the metering policy.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to apply when describing transit gateway metering policies.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-MiddleboxAttachmentId">
    <td><CopyableCode code="MiddleboxAttachmentId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the middlebox attachments to include in the metering policy.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-RemoveMiddleboxAttachmentId">
    <td><CopyableCode code="RemoveMiddleboxAttachmentId" /></td>
    <td><code>array</code></td>
    <td>The IDs of middlebox attachments to remove from the metering policy.</td>
</tr>
<tr id="parameter-TagSpecifications">
    <td><CopyableCode code="TagSpecifications" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the metering policy.</td>
</tr>
<tr id="parameter-TransitGatewayMeteringPolicyIds">
    <td><CopyableCode code="TransitGatewayMeteringPolicyIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the transit gateway metering policies to describe.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateway_metering_policies"
    values={[
        { label: 'describe_transit_gateway_metering_policies', value: 'describe_transit_gateway_metering_policies' }
    ]}
>
<TabItem value="describe_transit_gateway_metering_policies">

Describes one or more transit gateway metering policies.

```sql
SELECT
MiddleboxAttachmentIds,
State,
Tags,
TransitGatewayId,
TransitGatewayMeteringPolicyId,
UpdateEffectiveAt
FROM aws.ec2.transit_gateway_metering_policies
WHERE region = '{{ region }}' -- required
AND TransitGatewayMeteringPolicyIds = '{{ TransitGatewayMeteringPolicyIds }}'
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
    defaultValue="create_transit_gateway_metering_policy"
    values={[
        { label: 'create_transit_gateway_metering_policy', value: 'create_transit_gateway_metering_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_metering_policy">

Creates a metering policy for a transit gateway to track and measure network traffic.

```sql
INSERT INTO aws.ec2.transit_gateway_metering_policies (
TransitGatewayId,
region,
MiddleboxAttachmentId,
TagSpecifications,
DryRun
)
SELECT 
'{{ TransitGatewayId }}',
'{{ region }}',
'{{ MiddleboxAttachmentId }}',
'{{ TagSpecifications }}',
'{{ DryRun }}'
RETURNING
MiddleboxAttachmentIds,
State,
Tags,
TransitGatewayId,
TransitGatewayMeteringPolicyId,
UpdateEffectiveAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_metering_policies
  props:
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: Required parameter for the transit_gateway_metering_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_metering_policies resource.
    - name: MiddleboxAttachmentId
      value: "{{ MiddleboxAttachmentId }}"
      description: The IDs of the middlebox attachments to include in the metering policy.
      description: The IDs of the middlebox attachments to include in the metering policy.
    - name: TagSpecifications
      value: "{{ TagSpecifications }}"
      description: The tags to assign to the metering policy.
      description: The tags to assign to the metering policy.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_transit_gateway_metering_policy"
    values={[
        { label: 'modify_transit_gateway_metering_policy', value: 'modify_transit_gateway_metering_policy' }
    ]}
>
<TabItem value="modify_transit_gateway_metering_policy">

Modifies a transit gateway metering policy.

```sql
UPDATE aws.ec2.transit_gateway_metering_policies
SET 
-- No updatable properties
WHERE 
TransitGatewayMeteringPolicyId = '{{ TransitGatewayMeteringPolicyId }}' --required
AND region = '{{ region }}' --required
AND AddMiddleboxAttachmentId = '{{ AddMiddleboxAttachmentId}}'
AND RemoveMiddleboxAttachmentId = '{{ RemoveMiddleboxAttachmentId}}'
AND DryRun = {{ DryRun}}
RETURNING
MiddleboxAttachmentIds,
State,
Tags,
TransitGatewayId,
TransitGatewayMeteringPolicyId,
UpdateEffectiveAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_metering_policy"
    values={[
        { label: 'delete_transit_gateway_metering_policy', value: 'delete_transit_gateway_metering_policy' }
    ]}
>
<TabItem value="delete_transit_gateway_metering_policy">

Deletes a transit gateway metering policy.

```sql
DELETE FROM aws.ec2.transit_gateway_metering_policies
WHERE TransitGatewayMeteringPolicyId = '{{ TransitGatewayMeteringPolicyId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
