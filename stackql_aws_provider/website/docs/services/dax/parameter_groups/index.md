--- 
title: parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - parameter_groups
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

Creates, updates, deletes, gets or lists a <code>parameter_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parameter_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dax.parameter_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_parameter_groups"
    values={[
        { label: 'describe_parameter_groups', value: 'describe_parameter_groups' }
    ]}
>
<TabItem value="describe_parameter_groups">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter group.</td>
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
    <td><a href="#describe_parameter_groups"><CopyableCode code="describe_parameter_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.</td>
</tr>
<tr>
    <td><a href="#create_parameter_group"><CopyableCode code="create_parameter_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParameterGroupName"><code>ParameterGroupName</code></a></td>
    <td></td>
    <td>Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.</td>
</tr>
<tr>
    <td><a href="#update_parameter_group"><CopyableCode code="update_parameter_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParameterGroupName"><code>ParameterGroupName</code></a>, <a href="#parameter-ParameterNameValues"><code>ParameterNameValues</code></a></td>
    <td></td>
    <td>Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.</td>
</tr>
<tr>
    <td><a href="#delete_parameter_group"><CopyableCode code="delete_parameter_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.</td>
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
    defaultValue="describe_parameter_groups"
    values={[
        { label: 'describe_parameter_groups', value: 'describe_parameter_groups' }
    ]}
>
<TabItem value="describe_parameter_groups">

Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.

```sql
SELECT
Description,
ParameterGroupName
FROM aws.dax.parameter_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_parameter_group"
    values={[
        { label: 'create_parameter_group', value: 'create_parameter_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_parameter_group">

Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.

```sql
INSERT INTO aws.dax.parameter_groups (
ParameterGroupName,
Description,
region
)
SELECT 
'{{ ParameterGroupName }}' /* required */,
'{{ Description }}',
'{{ region }}'
RETURNING
ParameterGroup
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: parameter_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the parameter_groups resource.
    - name: ParameterGroupName
      value: "{{ ParameterGroupName }}"
      description: |
        The name of the parameter group to apply to all of the clusters in this replication group.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the parameter group.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_parameter_group"
    values={[
        { label: 'update_parameter_group', value: 'update_parameter_group' }
    ]}
>
<TabItem value="update_parameter_group">

Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

```sql
UPDATE aws.dax.parameter_groups
SET 
ParameterGroupName = '{{ ParameterGroupName }}',
ParameterNameValues = '{{ ParameterNameValues }}'
WHERE 
region = '{{ region }}' --required
AND ParameterGroupName = '{{ ParameterGroupName }}' --required
AND ParameterNameValues = '{{ ParameterNameValues }}' --required
RETURNING
ParameterGroup;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_parameter_group"
    values={[
        { label: 'delete_parameter_group', value: 'delete_parameter_group' }
    ]}
>
<TabItem value="delete_parameter_group">

Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.

```sql
DELETE FROM aws.dax.parameter_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
