--- 
title: transit_gateway_policy_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_policy_tables
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_policy_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_policy_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_policy_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_policy_tables"
    values={[
        { label: 'describe_transit_gateway_policy_tables', value: 'describe_transit_gateway_policy_tables' }
    ]}
>
<TabItem value="describe_transit_gateway_policy_tables">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the transit gateway policy table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the transit gateway policy table</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>he key-value pairs associated with the transit gateway policy table.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayPolicyTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway policy table.</td>
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
    <td><a href="#describe_transit_gateway_policy_tables"><CopyableCode code="describe_transit_gateway_policy_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayPolicyTableIds"><code>TransitGatewayPolicyTableIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more transit gateway route policy tables.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_policy_table"><CopyableCode code="create_transit_gateway_policy_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a transit gateway policy table.</td>
</tr>
<tr>
    <td><a href="#associate_transit_gateway_policy_table"><CopyableCode code="associate_transit_gateway_policy_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TransitGatewayPolicyTableId"><code>TransitGatewayPolicyTableId</code></a>, <a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates the specified transit gateway attachment with a transit gateway policy table.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_policy_table"><CopyableCode code="delete_transit_gateway_policy_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayPolicyTableId"><code>TransitGatewayPolicyTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified transit gateway policy table.</td>
</tr>
<tr>
    <td><a href="#disassociate_transit_gateway_policy_table"><CopyableCode code="disassociate_transit_gateway_policy_table" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayPolicyTableId"><code>TransitGatewayPolicyTableId</code></a>, <a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Removes the association between an an attachment and a policy table.</td>
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
    <td>The ID of the transit gateway attachment to disassociate from the policy table.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway used for the policy table.</td>
</tr>
<tr id="parameter-TransitGatewayPolicyTableId">
    <td><CopyableCode code="TransitGatewayPolicyTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the disassociated policy table.</td>
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
<tr id="parameter-TagSpecifications">
    <td><CopyableCode code="TagSpecifications" /></td>
    <td><code>array</code></td>
    <td>The tags specification for the transit gateway policy table created during the request.</td>
</tr>
<tr id="parameter-TransitGatewayPolicyTableIds">
    <td><CopyableCode code="TransitGatewayPolicyTableIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the transit gateway policy tables.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateway_policy_tables"
    values={[
        { label: 'describe_transit_gateway_policy_tables', value: 'describe_transit_gateway_policy_tables' }
    ]}
>
<TabItem value="describe_transit_gateway_policy_tables">

Describes one or more transit gateway route policy tables.

```sql
SELECT
CreationTime,
State,
Tags,
TransitGatewayId,
TransitGatewayPolicyTableId
FROM aws.ec2.transit_gateway_policy_tables
WHERE region = '{{ region }}' -- required
AND TransitGatewayPolicyTableIds = '{{ TransitGatewayPolicyTableIds }}'
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
    defaultValue="create_transit_gateway_policy_table"
    values={[
        { label: 'create_transit_gateway_policy_table', value: 'create_transit_gateway_policy_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_policy_table">

Creates a transit gateway policy table.

```sql
INSERT INTO aws.ec2.transit_gateway_policy_tables (
TransitGatewayId,
region,
TagSpecifications,
DryRun
)
SELECT 
'{{ TransitGatewayId }}',
'{{ region }}',
'{{ TagSpecifications }}',
'{{ DryRun }}'
RETURNING
CreationTime,
State,
Tags,
TransitGatewayId,
TransitGatewayPolicyTableId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_policy_tables
  props:
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: Required parameter for the transit_gateway_policy_tables resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_policy_tables resource.
    - name: TagSpecifications
      value: "{{ TagSpecifications }}"
      description: The tags specification for the transit gateway policy table created during the request.
      description: The tags specification for the transit gateway policy table created during the request.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_transit_gateway_policy_table"
    values={[
        { label: 'associate_transit_gateway_policy_table', value: 'associate_transit_gateway_policy_table' }
    ]}
>
<TabItem value="associate_transit_gateway_policy_table">

Associates the specified transit gateway attachment with a transit gateway policy table.

```sql
UPDATE aws.ec2.transit_gateway_policy_tables
SET 
-- No updatable properties
WHERE 
TransitGatewayPolicyTableId = '{{ TransitGatewayPolicyTableId }}' --required
AND TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
ResourceId,
ResourceType,
State,
TransitGatewayAttachmentId,
TransitGatewayPolicyTableId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_policy_table"
    values={[
        { label: 'delete_transit_gateway_policy_table', value: 'delete_transit_gateway_policy_table' }
    ]}
>
<TabItem value="delete_transit_gateway_policy_table">

Deletes the specified transit gateway policy table.

```sql
DELETE FROM aws.ec2.transit_gateway_policy_tables
WHERE TransitGatewayPolicyTableId = '{{ TransitGatewayPolicyTableId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_transit_gateway_policy_table"
    values={[
        { label: 'disassociate_transit_gateway_policy_table', value: 'disassociate_transit_gateway_policy_table' }
    ]}
>
<TabItem value="disassociate_transit_gateway_policy_table">

Removes the association between an an attachment and a policy table.

```sql
EXEC aws.ec2.transit_gateway_policy_tables.disassociate_transit_gateway_policy_table 
@TransitGatewayPolicyTableId='{{ TransitGatewayPolicyTableId }}' --required, 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
