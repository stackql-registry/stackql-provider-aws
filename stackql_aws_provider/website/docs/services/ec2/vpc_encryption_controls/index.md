--- 
title: vpc_encryption_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_encryption_controls
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

Creates, updates, deletes, gets or lists a <code>vpc_encryption_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_encryption_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_encryption_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_encryption_controls"
    values={[
        { label: 'describe_vpc_encryption_controls', value: 'describe_vpc_encryption_controls' }
    ]}
>
<TabItem value="describe_vpc_encryption_controls">

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
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The encryption mode for the VPC Encryption Control configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_exclusions" /></td>
    <td><code>string</code></td>
    <td>Information about resource exclusions for the VPC Encryption Control configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the VPC Encryption Control configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="state_message" /></td>
    <td><code>string</code></td>
    <td>A message providing additional information about the encryption control state.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the VPC Encryption Control configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_encryption_control_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC Encryption Control configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC associated with the encryption control configuration.</td>
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
    <td><a href="#describe_vpc_encryption_controls"><CopyableCode code="describe_vpc_encryption_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-VpcEncryptionControlId"><code>VpcEncryptionControlId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes one or more VPC Encryption Control configurations. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements You can filter the results to return information about specific encryption controls or VPCs. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_vpc_encryption_control"><CopyableCode code="create_vpc_encryption_control" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a VPC Encryption Control configuration for a specified VPC. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements for standards like HIPAA, FedRAMP, and PCI DSS. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_encryption_control"><CopyableCode code="modify_vpc_encryption_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpcEncryptionControlId"><code>VpcEncryptionControlId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Mode"><code>Mode</code></a>, <a href="#parameter-InternetGatewayExclusion"><code>InternetGatewayExclusion</code></a>, <a href="#parameter-EgressOnlyInternetGatewayExclusion"><code>EgressOnlyInternetGatewayExclusion</code></a>, <a href="#parameter-NatGatewayExclusion"><code>NatGatewayExclusion</code></a>, <a href="#parameter-VirtualPrivateGatewayExclusion"><code>VirtualPrivateGatewayExclusion</code></a>, <a href="#parameter-VpcPeeringExclusion"><code>VpcPeeringExclusion</code></a>, <a href="#parameter-LambdaExclusion"><code>LambdaExclusion</code></a>, <a href="#parameter-VpcLatticeExclusion"><code>VpcLatticeExclusion</code></a>, <a href="#parameter-ElasticFileSystemExclusion"><code>ElasticFileSystemExclusion</code></a></td>
    <td>Modifies the encryption control configuration for a VPC. You can update the encryption mode and exclusion settings for various gateway types and peering connections. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_encryption_control"><CopyableCode code="delete_vpc_encryption_control" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VpcEncryptionControlId"><code>VpcEncryptionControlId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a VPC Encryption Control configuration. This removes the encryption policy enforcement from the specified VPC. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
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
<tr id="parameter-VpcEncryptionControlId">
    <td><CopyableCode code="VpcEncryptionControlId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC Encryption Control resource to delete.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for which to create the encryption control configuration.</td>
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
<tr id="parameter-EgressOnlyInternetGatewayExclusion">
    <td><CopyableCode code="EgressOnlyInternetGatewayExclusion" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude egress-only internet gateway traffic from encryption enforcement.</td>
</tr>
<tr id="parameter-ElasticFileSystemExclusion">
    <td><CopyableCode code="ElasticFileSystemExclusion" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude Elastic File System traffic from encryption enforcement.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters to apply to the request.</td>
</tr>
<tr id="parameter-InternetGatewayExclusion">
    <td><CopyableCode code="InternetGatewayExclusion" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude internet gateway traffic from encryption enforcement.</td>
</tr>
<tr id="parameter-LambdaExclusion">
    <td><CopyableCode code="LambdaExclusion" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude Lambda function traffic from encryption enforcement.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-Mode">
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>The encryption mode for the VPC Encryption Control configuration.</td>
</tr>
<tr id="parameter-NatGatewayExclusion">
    <td><CopyableCode code="NatGatewayExclusion" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude NAT gateway traffic from encryption enforcement.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the VPC Encryption Control resource.</td>
</tr>
<tr id="parameter-VirtualPrivateGatewayExclusion">
    <td><CopyableCode code="VirtualPrivateGatewayExclusion" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude virtual private gateway traffic from encryption enforcement.</td>
</tr>
<tr id="parameter-VpcEncryptionControlId">
    <td><CopyableCode code="VpcEncryptionControlId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC Encryption Control configurations to describe.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPCs to describe encryption control configurations for.</td>
</tr>
<tr id="parameter-VpcLatticeExclusion">
    <td><CopyableCode code="VpcLatticeExclusion" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude VPC Lattice traffic from encryption enforcement.</td>
</tr>
<tr id="parameter-VpcPeeringExclusion">
    <td><CopyableCode code="VpcPeeringExclusion" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude VPC peering connection traffic from encryption enforcement.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_encryption_controls"
    values={[
        { label: 'describe_vpc_encryption_controls', value: 'describe_vpc_encryption_controls' }
    ]}
>
<TabItem value="describe_vpc_encryption_controls">

Describes one or more VPC Encryption Control configurations. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements You can filter the results to return information about specific encryption controls or VPCs. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.

```sql
SELECT
mode,
resource_exclusions,
state,
state_message,
tags,
vpc_encryption_control_id,
vpc_id
FROM aws.ec2.vpc_encryption_controls
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND VpcEncryptionControlId = '{{ VpcEncryptionControlId }}'
AND VpcId = '{{ VpcId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_encryption_control"
    values={[
        { label: 'create_vpc_encryption_control', value: 'create_vpc_encryption_control' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_encryption_control">

Creates a VPC Encryption Control configuration for a specified VPC. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements for standards like HIPAA, FedRAMP, and PCI DSS. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.vpc_encryption_controls (
VpcId,
region,
DryRun,
TagSpecification
)
SELECT 
'{{ VpcId }}',
'{{ region }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
mode,
resource_exclusions,
state,
state_message,
tags,
vpc_encryption_control_id,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_encryption_controls
  props:
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the vpc_encryption_controls resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_encryption_controls resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the VPC Encryption Control resource.
      description: The tags to apply to the VPC Encryption Control resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_encryption_control"
    values={[
        { label: 'modify_vpc_encryption_control', value: 'modify_vpc_encryption_control' }
    ]}
>
<TabItem value="modify_vpc_encryption_control">

Modifies the encryption control configuration for a VPC. You can update the encryption mode and exclusion settings for various gateway types and peering connections. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.vpc_encryption_controls
SET 
-- No updatable properties
WHERE 
VpcEncryptionControlId = '{{ VpcEncryptionControlId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Mode = '{{ Mode}}'
AND InternetGatewayExclusion = '{{ InternetGatewayExclusion}}'
AND EgressOnlyInternetGatewayExclusion = '{{ EgressOnlyInternetGatewayExclusion}}'
AND NatGatewayExclusion = '{{ NatGatewayExclusion}}'
AND VirtualPrivateGatewayExclusion = '{{ VirtualPrivateGatewayExclusion}}'
AND VpcPeeringExclusion = '{{ VpcPeeringExclusion}}'
AND LambdaExclusion = '{{ LambdaExclusion}}'
AND VpcLatticeExclusion = '{{ VpcLatticeExclusion}}'
AND ElasticFileSystemExclusion = '{{ ElasticFileSystemExclusion}}'
RETURNING
mode,
resource_exclusions,
state,
state_message,
tags,
vpc_encryption_control_id,
vpc_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_encryption_control"
    values={[
        { label: 'delete_vpc_encryption_control', value: 'delete_vpc_encryption_control' }
    ]}
>
<TabItem value="delete_vpc_encryption_control">

Deletes a VPC Encryption Control configuration. This removes the encryption policy enforcement from the specified VPC. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.

```sql
DELETE FROM aws.ec2.vpc_encryption_controls
WHERE VpcEncryptionControlId = '{{ VpcEncryptionControlId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
