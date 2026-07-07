--- 
title: carrier_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - carrier_gateways
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

Creates, updates, deletes, gets or lists a <code>carrier_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="carrier_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.carrier_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_carrier_gateways"
    values={[
        { label: 'describe_carrier_gateways', value: 'describe_carrier_gateways' }
    ]}
>
<TabItem value="describe_carrier_gateways">

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
    <td><CopyableCode code="CarrierGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the carrier gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the carrier gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the carrier gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the carrier gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC associated with the carrier gateway.</td>
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
    <td><a href="#describe_carrier_gateways"><CopyableCode code="describe_carrier_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CarrierGatewayId"><code>CarrierGatewayId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more of your carrier gateways.</td>
</tr>
<tr>
    <td><a href="#create_carrier_gateway"><CopyableCode code="create_carrier_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates a carrier gateway. For more information about carrier gateways, see Carrier gateways in the Amazon Web Services Wavelength Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_carrier_gateway"><CopyableCode code="delete_carrier_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CarrierGatewayId"><code>CarrierGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a carrier gateway. If you do not delete the route that contains the carrier gateway as the Target, the route is a blackhole route. For information about how to delete a route, see DeleteRoute.</td>
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
<tr id="parameter-CarrierGatewayId">
    <td><CopyableCode code="CarrierGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the carrier gateway.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC to associate with the carrier gateway.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CarrierGatewayId">
    <td><CopyableCode code="CarrierGatewayId" /></td>
    <td><code>array</code></td>
    <td>One or more carrier gateway IDs.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. carrier-gateway-id - The ID of the carrier gateway. state - The state of the carrier gateway (pending | failed | available | deleting | deleted). owner-id - The Amazon Web Services account ID of the owner of the carrier gateway. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC associated with the carrier gateway.</td>
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
    <td>The tags to associate with the carrier gateway.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_carrier_gateways"
    values={[
        { label: 'describe_carrier_gateways', value: 'describe_carrier_gateways' }
    ]}
>
<TabItem value="describe_carrier_gateways">

Describes one or more of your carrier gateways.

```sql
SELECT
CarrierGatewayId,
OwnerId,
State,
Tags,
VpcId
FROM aws.ec2.carrier_gateways
WHERE region = '{{ region }}' -- required
AND CarrierGatewayId = '{{ CarrierGatewayId }}'
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
    defaultValue="create_carrier_gateway"
    values={[
        { label: 'create_carrier_gateway', value: 'create_carrier_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_carrier_gateway">

Creates a carrier gateway. For more information about carrier gateways, see Carrier gateways in the Amazon Web Services Wavelength Developer Guide.

```sql
INSERT INTO aws.ec2.carrier_gateways (
VpcId,
region,
TagSpecification,
DryRun,
ClientToken
)
SELECT 
'{{ VpcId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ ClientToken }}'
RETURNING
CarrierGatewayId,
OwnerId,
State,
Tags,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: carrier_gateways
  props:
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the carrier_gateways resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the carrier_gateways resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to associate with the carrier gateway.
      description: The tags to associate with the carrier gateway.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_carrier_gateway"
    values={[
        { label: 'delete_carrier_gateway', value: 'delete_carrier_gateway' }
    ]}
>
<TabItem value="delete_carrier_gateway">

Deletes a carrier gateway. If you do not delete the route that contains the carrier gateway as the Target, the route is a blackhole route. For information about how to delete a route, see DeleteRoute.

```sql
DELETE FROM aws.ec2.carrier_gateways
WHERE CarrierGatewayId = '{{ CarrierGatewayId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
