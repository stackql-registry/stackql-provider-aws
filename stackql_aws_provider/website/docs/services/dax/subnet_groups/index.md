--- 
title: subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - subnet_groups
  - dax
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dax.subnet_groups" /></td></tr>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>array</code></td>
    <td>A list of subnets associated with the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_network_types" /></td>
    <td><code>array</code></td>
    <td>The network types supported by this subnet. Returns an array of strings that can include ipv4, ipv6, or both, indicating whether the subnet group supports IPv4 only, IPv6 only, or dual-stack deployments.</td>
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
    <td>Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.</td>
</tr>
<tr>
    <td><a href="#create_subnet_group"><CopyableCode code="create_subnet_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubnetGroupName"><code>SubnetGroupName</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Creates a new subnet group.</td>
</tr>
<tr>
    <td><a href="#update_subnet_group"><CopyableCode code="update_subnet_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubnetGroupName"><code>SubnetGroupName</code></a></td>
    <td></td>
    <td>Modifies an existing subnet group.</td>
</tr>
<tr>
    <td><a href="#delete_subnet_group"><CopyableCode code="delete_subnet_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a subnet group. You cannot delete a subnet group if it is associated with any DAX clusters.</td>
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

Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.

```sql
SELECT
description,
subnet_group_name,
subnets,
supported_network_types,
vpc_id
FROM aws.dax.subnet_groups
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

Creates a new subnet group.

```sql
INSERT INTO aws.dax.subnet_groups (
SubnetGroupName,
Description,
SubnetIds,
region
)
SELECT 
'{{ SubnetGroupName }}' /* required */,
'{{ Description }}',
'{{ SubnetIds }}' /* required */,
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
        A name for the subnet group. This value is stored as a lowercase string.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the subnet group
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        A list of VPC subnet IDs for the subnet group.
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

Modifies an existing subnet group.

```sql
UPDATE aws.dax.subnet_groups
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

Deletes a subnet group. You cannot delete a subnet group if it is associated with any DAX clusters.

```sql
DELETE FROM aws.dax.subnet_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
