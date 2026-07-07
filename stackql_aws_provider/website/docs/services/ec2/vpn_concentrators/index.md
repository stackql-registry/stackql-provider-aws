--- 
title: vpn_concentrators
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_concentrators
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

Creates, updates, deletes, gets or lists a <code>vpn_concentrators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpn_concentrators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpn_concentrators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpn_concentrators"
    values={[
        { label: 'describe_vpn_concentrators', value: 'describe_vpn_concentrators' }
    ]}
>
<TabItem value="describe_vpn_concentrators">

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
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the VPN concentrator.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the VPN concentrator.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway attachment for the VPN concentrator.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway associated with the VPN concentrator.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of VPN concentrator.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnConcentratorId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPN concentrator.</td>
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
    <td><a href="#describe_vpn_concentrators"><CopyableCode code="describe_vpn_concentrators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VpnConcentratorId"><code>VpnConcentratorId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more of your VPN concentrators.</td>
</tr>
<tr>
    <td><a href="#create_vpn_concentrator"><CopyableCode code="create_vpn_concentrator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a VPN concentrator that aggregates multiple VPN connections to a transit gateway.</td>
</tr>
<tr>
    <td><a href="#delete_vpn_concentrator"><CopyableCode code="delete_vpn_concentrator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VpnConcentratorId"><code>VpnConcentratorId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified VPN concentrator.</td>
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
<tr id="parameter-VpnConcentratorId">
    <td><CopyableCode code="VpnConcentratorId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPN concentrator to delete.</td>
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
    <td>One or more filters to limit the results.</td>
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
    <td>The tags to apply to the VPN concentrator during creation.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway to attach the VPN concentrator to.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of VPN concentrator to create.</td>
</tr>
<tr id="parameter-VpnConcentratorId">
    <td><CopyableCode code="VpnConcentratorId" /></td>
    <td><code>array</code></td>
    <td>One or more VPN concentrator IDs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpn_concentrators"
    values={[
        { label: 'describe_vpn_concentrators', value: 'describe_vpn_concentrators' }
    ]}
>
<TabItem value="describe_vpn_concentrators">

Describes one or more of your VPN concentrators.

```sql
SELECT
State,
Tags,
TransitGatewayAttachmentId,
TransitGatewayId,
Type,
VpnConcentratorId
FROM aws.ec2.vpn_concentrators
WHERE region = '{{ region }}' -- required
AND VpnConcentratorId = '{{ VpnConcentratorId }}'
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
    defaultValue="create_vpn_concentrator"
    values={[
        { label: 'create_vpn_concentrator', value: 'create_vpn_concentrator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpn_concentrator">

Creates a VPN concentrator that aggregates multiple VPN connections to a transit gateway.

```sql
INSERT INTO aws.ec2.vpn_concentrators (
region,
Type,
TransitGatewayId,
TagSpecification,
DryRun
)
SELECT 
'{{ region }}',
'{{ Type }}',
'{{ TransitGatewayId }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
State,
Tags,
TransitGatewayAttachmentId,
TransitGatewayId,
Type,
VpnConcentratorId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpn_concentrators
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpn_concentrators resource.
    - name: Type
      value: "{{ Type }}"
      description: The type of VPN concentrator to create.
      description: The type of VPN concentrator to create.
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: The ID of the transit gateway to attach the VPN concentrator to.
      description: The ID of the transit gateway to attach the VPN concentrator to.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the VPN concentrator during creation.
      description: The tags to apply to the VPN concentrator during creation.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpn_concentrator"
    values={[
        { label: 'delete_vpn_concentrator', value: 'delete_vpn_concentrator' }
    ]}
>
<TabItem value="delete_vpn_concentrator">

Deletes the specified VPN concentrator.

```sql
DELETE FROM aws.ec2.vpn_concentrators
WHERE VpnConcentratorId = '{{ VpnConcentratorId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
