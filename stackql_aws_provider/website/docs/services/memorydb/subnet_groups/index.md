--- 
title: subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - subnet_groups
  - memorydb
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

Creates, updates, deletes, gets or lists a <code>subnet_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subnet_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.subnet_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_subnet_groups"
    values={[
        { label: 'describe_subnet_groups', value: 'describe_subnet_groups' }
    ]}
>
<TabItem value="describe_subnet_groups">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the subnet group</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the subnet group</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>array</code></td>
    <td>A list of subnets associated with the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_network_types" /></td>
    <td><code>array</code></td>
    <td>The network types supported by this subnet group. Returns an array of strings that can include 'ipv4', 'ipv6', or both, indicating the IP address types that can be used for clusters deployed in this subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</td>
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
    <td><a href="#describe_subnet_groups"><CopyableCode code="describe_subnet_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.</td>
</tr>
<tr>
    <td><a href="#create_subnet_group"><CopyableCode code="create_subnet_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubnetGroupName"><code>SubnetGroupName</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see Subnets and subnet groups.</td>
</tr>
<tr>
    <td><a href="#update_subnet_group"><CopyableCode code="update_subnet_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubnetGroupName"><code>SubnetGroupName</code></a></td>
    <td></td>
    <td>Updates a subnet group. For more information, see Updating a subnet group</td>
</tr>
<tr>
    <td><a href="#delete_subnet_group"><CopyableCode code="delete_subnet_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_subnet_groups"
    values={[
        { label: 'describe_subnet_groups', value: 'describe_subnet_groups' }
    ]}
>
<TabItem value="describe_subnet_groups">

Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.

```sql
SELECT
arn,
description,
name,
subnets,
supported_network_types,
vpc_id
FROM aws.memorydb.subnet_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subnet_group"
    values={[
        { label: 'create_subnet_group', value: 'create_subnet_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subnet_group">

Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see Subnets and subnet groups.

```sql
INSERT INTO aws.memorydb.subnet_groups (
SubnetGroupName,
Description,
SubnetIds,
Tags,
region
)
SELECT 
'{{ SubnetGroupName }}' /* required */,
'{{ Description }}',
'{{ SubnetIds }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
subnet_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subnet_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subnet_groups resource.
    - name: SubnetGroupName
      value: "{{ SubnetGroupName }}"
      description: |
        The name of the subnet group.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the subnet group.
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        A list of VPC subnet IDs for the subnet group.
    - name: Tags
      description: |
        A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_subnet_group"
    values={[
        { label: 'update_subnet_group', value: 'update_subnet_group' }
    ]}
>
<TabItem value="update_subnet_group">

Updates a subnet group. For more information, see Updating a subnet group

```sql
UPDATE aws.memorydb.subnet_groups
SET 
SubnetGroupName = '{{ SubnetGroupName }}',
Description = '{{ Description }}',
SubnetIds = '{{ SubnetIds }}'
WHERE 
region = '{{ region }}' --required
AND SubnetGroupName = '{{ SubnetGroupName }}' --required
RETURNING
subnet_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subnet_group"
    values={[
        { label: 'delete_subnet_group', value: 'delete_subnet_group' }
    ]}
>
<TabItem value="delete_subnet_group">

Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.

```sql
DELETE FROM aws.memorydb.subnet_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
