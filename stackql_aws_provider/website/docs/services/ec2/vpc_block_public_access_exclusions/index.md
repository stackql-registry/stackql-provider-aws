--- 
title: vpc_block_public_access_exclusions
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_block_public_access_exclusions
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

Creates, updates, deletes, gets or lists a <code>vpc_block_public_access_exclusions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_block_public_access_exclusions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_block_public_access_exclusions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_block_public_access_exclusions"
    values={[
        { label: 'describe_vpc_block_public_access_exclusions', value: 'describe_vpc_block_public_access_exclusions' }
    ]}
>
<TabItem value="describe_vpc_block_public_access_exclusions">

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
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string</code></td>
    <td>When the exclusion was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_timestamp" /></td>
    <td><code>string</code></td>
    <td>When the exclusion was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusion_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the exclusion.</td>
</tr>
<tr>
    <td><CopyableCode code="internet_gateway_exclusion_mode" /></td>
    <td><code>string</code></td>
    <td>The exclusion mode for internet gateway traffic. allow-bidirectional: Allow all internet traffic to and from the excluded VPCs and subnets. allow-egress: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string</code></td>
    <td>When the exclusion was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current exclusion state.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the exclusion.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the exclusion.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
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
    <td><a href="#describe_vpc_block_public_access_exclusions"><CopyableCode code="describe_vpc_block_public_access_exclusions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-ExclusionId"><code>ExclusionId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describe VPC Block Public Access (BPA) exclusions. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_vpc_block_public_access_exclusion"><CopyableCode code="create_vpc_block_public_access_exclusion" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InternetGatewayExclusionMode"><code>InternetGatewayExclusionMode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Create a VPC Block Public Access (BPA) exclusion. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_block_public_access_exclusion"><CopyableCode code="modify_vpc_block_public_access_exclusion" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ExclusionId"><code>ExclusionId</code></a>, <a href="#parameter-InternetGatewayExclusionMode"><code>InternetGatewayExclusionMode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modify VPC Block Public Access (BPA) exclusions. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_block_public_access_exclusion"><CopyableCode code="delete_vpc_block_public_access_exclusion" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ExclusionId"><code>ExclusionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Delete a VPC Block Public Access (BPA) exclusion. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
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
<tr id="parameter-ExclusionId">
    <td><CopyableCode code="ExclusionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the exclusion.</td>
</tr>
<tr id="parameter-InternetGatewayExclusionMode">
    <td><CopyableCode code="InternetGatewayExclusionMode" /></td>
    <td><code>string</code></td>
    <td>The exclusion mode for internet gateway traffic. allow-bidirectional: Allow all internet traffic to and from the excluded VPCs and subnets. allow-egress: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.</td>
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
<tr id="parameter-ExclusionId">
    <td><CopyableCode code="ExclusionId" /></td>
    <td><code>array</code></td>
    <td>IDs of exclusions.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>Filters for the request: resource-arn - The Amazon Resource Name (ARN) of a exclusion. internet-gateway-exclusion-mode - The mode of a VPC BPA exclusion. Possible values: allow-bidirectional | allow-egress. state - The state of VPC BPA. Possible values: create-in-progress | create-complete | update-in-progress | update-complete | delete-in-progress | deleted-complete | disable-in-progress | disable-complete tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. tag-value: The value of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific value, regardless of the tag key.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>A subnet ID.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>A VPC ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_block_public_access_exclusions"
    values={[
        { label: 'describe_vpc_block_public_access_exclusions', value: 'describe_vpc_block_public_access_exclusions' }
    ]}
>
<TabItem value="describe_vpc_block_public_access_exclusions">

Describe VPC Block Public Access (BPA) exclusions. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
SELECT
creation_timestamp,
deletion_timestamp,
exclusion_id,
internet_gateway_exclusion_mode,
last_update_timestamp,
reason,
resource_arn,
state,
tags
FROM aws.ec2.vpc_block_public_access_exclusions
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND ExclusionId = '{{ ExclusionId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_block_public_access_exclusion"
    values={[
        { label: 'create_vpc_block_public_access_exclusion', value: 'create_vpc_block_public_access_exclusion' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_block_public_access_exclusion">

Create a VPC Block Public Access (BPA) exclusion. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.vpc_block_public_access_exclusions (
InternetGatewayExclusionMode,
region,
DryRun,
SubnetId,
VpcId,
TagSpecification
)
SELECT 
'{{ InternetGatewayExclusionMode }}',
'{{ region }}',
'{{ DryRun }}',
'{{ SubnetId }}',
'{{ VpcId }}',
'{{ TagSpecification }}'
RETURNING
creation_timestamp,
deletion_timestamp,
exclusion_id,
internet_gateway_exclusion_mode,
last_update_timestamp,
reason,
resource_arn,
state,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_block_public_access_exclusions
  props:
    - name: InternetGatewayExclusionMode
      value: "{{ InternetGatewayExclusionMode }}"
      description: Required parameter for the vpc_block_public_access_exclusions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_block_public_access_exclusions resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: A subnet ID.
      description: A subnet ID.
    - name: VpcId
      value: "{{ VpcId }}"
      description: A VPC ID.
      description: A VPC ID.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
      description: tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_block_public_access_exclusion"
    values={[
        { label: 'modify_vpc_block_public_access_exclusion', value: 'modify_vpc_block_public_access_exclusion' }
    ]}
>
<TabItem value="modify_vpc_block_public_access_exclusion">

Modify VPC Block Public Access (BPA) exclusions. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on.

```sql
UPDATE aws.ec2.vpc_block_public_access_exclusions
SET 
-- No updatable properties
WHERE 
ExclusionId = '{{ ExclusionId }}' --required
AND InternetGatewayExclusionMode = '{{ InternetGatewayExclusionMode }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
creation_timestamp,
deletion_timestamp,
exclusion_id,
internet_gateway_exclusion_mode,
last_update_timestamp,
reason,
resource_arn,
state,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_block_public_access_exclusion"
    values={[
        { label: 'delete_vpc_block_public_access_exclusion', value: 'delete_vpc_block_public_access_exclusion' }
    ]}
>
<TabItem value="delete_vpc_block_public_access_exclusion">

Delete a VPC Block Public Access (BPA) exclusion. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
DELETE FROM aws.ec2.vpc_block_public_access_exclusions
WHERE ExclusionId = '{{ ExclusionId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
