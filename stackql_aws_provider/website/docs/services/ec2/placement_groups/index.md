--- 
title: placement_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - placement_groups
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

Creates, updates, deletes, gets or lists a <code>placement_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="placement_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.placement_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_placement_groups"
    values={[
        { label: 'describe_placement_groups', value: 'describe_placement_groups' }
    ]}
>
<TabItem value="describe_placement_groups">

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
    <td><CopyableCode code="GroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the placement group.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the placement group.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the placement group.</td>
</tr>
<tr>
    <td><CopyableCode code="LinkedGroupId" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="Operator" /></td>
    <td><code>string</code></td>
    <td>The service provider that manages the Placement Group.</td>
</tr>
<tr>
    <td><CopyableCode code="PartitionCount" /></td>
    <td><code>integer</code></td>
    <td>The number of partitions. Valid only if strategy is set to partition.</td>
</tr>
<tr>
    <td><CopyableCode code="SpreadLevel" /></td>
    <td><code>string</code></td>
    <td>The spread level for the placement group. Only Outpost placement groups can be spread across hosts.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the placement group.</td>
</tr>
<tr>
    <td><CopyableCode code="Strategy" /></td>
    <td><code>string</code></td>
    <td>The placement strategy.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags applied to the placement group.</td>
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
    <td><a href="#describe_placement_groups"><CopyableCode code="describe_placement_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified placement groups or all of your placement groups. To describe a specific placement group that is shared with your account, you must specify the ID of the placement group using the GroupId parameter. Specifying the name of a shared placement group using the GroupNames parameter will result in an error. For more information, see Placement groups in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_placement_group"><CopyableCode code="create_placement_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PartitionCount"><code>PartitionCount</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-SpreadLevel"><code>SpreadLevel</code></a>, <a href="#parameter-LinkedGroupId"><code>LinkedGroupId</code></a>, <a href="#parameter-Operator"><code>Operator</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-Strategy"><code>Strategy</code></a></td>
    <td>Creates a placement group in which to launch instances. The strategy of the placement group determines how the instances are organized within the group. A cluster placement group is a logical grouping of instances within a single Availability Zone that benefit from low network latency, high network throughput. A spread placement group places instances on distinct hardware. A partition placement group places groups of instances in different partitions, where instances in one partition do not share the same hardware with instances in another partition. For more information, see Placement groups in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_placement_group"><CopyableCode code="delete_placement_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified placement group. You must terminate all instances in the placement group before you can delete the placement group. For more information, see Placement groups in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the placement group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. group-name - The name of the placement group. group-arn - The Amazon Resource Name (ARN) of the placement group. spread-level - The spread level for the placement group (host | rack). state - The state of the placement group (pending | available | deleting | deleted). strategy - The strategy of the placement group (cluster | spread | partition). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the placement groups.</td>
</tr>
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>A name for the placement group. Must be unique within the scope of your account for the Region. Constraints: Up to 255 ASCII characters</td>
</tr>
<tr id="parameter-LinkedGroupId">
    <td><CopyableCode code="LinkedGroupId" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr id="parameter-Operator">
    <td><CopyableCode code="Operator" /></td>
    <td><code>object</code></td>
    <td>Reserved for internal use.</td>
</tr>
<tr id="parameter-PartitionCount">
    <td><CopyableCode code="PartitionCount" /></td>
    <td><code>integer</code></td>
    <td>The number of partitions. Valid only when Strategy is set to partition.</td>
</tr>
<tr id="parameter-SpreadLevel">
    <td><CopyableCode code="SpreadLevel" /></td>
    <td><code>string</code></td>
    <td>Determines how placement groups spread instances. Host – You can use host only with Outpost placement groups. Rack – No usage restrictions.</td>
</tr>
<tr id="parameter-Strategy">
    <td><CopyableCode code="Strategy" /></td>
    <td><code>string</code></td>
    <td>The placement strategy.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the new placement group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_placement_groups"
    values={[
        { label: 'describe_placement_groups', value: 'describe_placement_groups' }
    ]}
>
<TabItem value="describe_placement_groups">

Describes the specified placement groups or all of your placement groups. To describe a specific placement group that is shared with your account, you must specify the ID of the placement group using the GroupId parameter. Specifying the name of a shared placement group using the GroupNames parameter will result in an error. For more information, see Placement groups in the Amazon EC2 User Guide.

```sql
SELECT
GroupArn,
GroupId,
GroupName,
LinkedGroupId,
Operator,
PartitionCount,
SpreadLevel,
State,
Strategy,
Tags
FROM aws.ec2.placement_groups
WHERE region = '{{ region }}' -- required
AND GroupId = '{{ GroupId }}'
AND DryRun = '{{ DryRun }}'
AND GroupName = '{{ GroupName }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_placement_group"
    values={[
        { label: 'create_placement_group', value: 'create_placement_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_placement_group">

Creates a placement group in which to launch instances. The strategy of the placement group determines how the instances are organized within the group. A cluster placement group is a logical grouping of instances within a single Availability Zone that benefit from low network latency, high network throughput. A spread placement group places instances on distinct hardware. A partition placement group places groups of instances in different partitions, where instances in one partition do not share the same hardware with instances in another partition. For more information, see Placement groups in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.placement_groups (
region,
PartitionCount,
TagSpecification,
SpreadLevel,
LinkedGroupId,
Operator,
DryRun,
GroupName,
Strategy
)
SELECT 
'{{ region }}',
'{{ PartitionCount }}',
'{{ TagSpecification }}',
'{{ SpreadLevel }}',
'{{ LinkedGroupId }}',
'{{ Operator }}',
'{{ DryRun }}',
'{{ GroupName }}',
'{{ Strategy }}'
RETURNING
GroupArn,
GroupId,
GroupName,
LinkedGroupId,
Operator,
PartitionCount,
SpreadLevel,
State,
Strategy,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: placement_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the placement_groups resource.
    - name: PartitionCount
      value: {{ PartitionCount }}
      description: The number of partitions. Valid only when Strategy is set to partition.
      description: The number of partitions. Valid only when Strategy is set to partition.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the new placement group.
      description: The tags to apply to the new placement group.
    - name: SpreadLevel
      value: "{{ SpreadLevel }}"
      description: Determines how placement groups spread instances. Host – You can use host only with Outpost placement groups. Rack – No usage restrictions.
      description: Determines how placement groups spread instances. Host – You can use host only with Outpost placement groups. Rack – No usage restrictions.
    - name: LinkedGroupId
      value: "{{ LinkedGroupId }}"
      description: Reserved for future use.
      description: Reserved for future use.
    - name: Operator
      value: "{{ Operator }}"
      description: Reserved for internal use.
      description: Reserved for internal use.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: GroupName
      value: "{{ GroupName }}"
      description: A name for the placement group. Must be unique within the scope of your account for the Region. Constraints: Up to 255 ASCII characters
      description: A name for the placement group. Must be unique within the scope of your account for the Region. Constraints: Up to 255 ASCII characters
    - name: Strategy
      value: "{{ Strategy }}"
      description: The placement strategy.
      description: The placement strategy.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_placement_group"
    values={[
        { label: 'delete_placement_group', value: 'delete_placement_group' }
    ]}
>
<TabItem value="delete_placement_group">

Deletes the specified placement group. You must terminate all instances in the placement group before you can delete the placement group. For more information, see Placement groups in the Amazon EC2 User Guide.

```sql
DELETE FROM aws.ec2.placement_groups
WHERE GroupName = '{{ GroupName }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
