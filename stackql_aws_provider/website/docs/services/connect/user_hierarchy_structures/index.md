--- 
title: user_hierarchy_structures
hide_title: false
hide_table_of_contents: false
keywords:
  - user_hierarchy_structures
  - connect
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

Creates, updates, deletes, gets or lists a <code>user_hierarchy_structures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_hierarchy_structures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.user_hierarchy_structures" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_hierarchy_structure"
    values={[
        { label: 'describe_user_hierarchy_structure', value: 'describe_user_hierarchy_structure' }
    ]}
>
<TabItem value="describe_user_hierarchy_structure">

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
    <td><CopyableCode code="LevelFive" /></td>
    <td><code>object</code></td>
    <td>Information about level five.</td>
</tr>
<tr>
    <td><CopyableCode code="LevelFour" /></td>
    <td><code>object</code></td>
    <td>Information about level four.</td>
</tr>
<tr>
    <td><CopyableCode code="LevelOne" /></td>
    <td><code>object</code></td>
    <td>Information about level one.</td>
</tr>
<tr>
    <td><CopyableCode code="LevelThree" /></td>
    <td><code>object</code></td>
    <td>Information about level three.</td>
</tr>
<tr>
    <td><CopyableCode code="LevelTwo" /></td>
    <td><code>object</code></td>
    <td>Information about level two.</td>
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
    <td><a href="#describe_user_hierarchy_structure"><CopyableCode code="describe_user_hierarchy_structure" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the hierarchy structure of the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#update_user_hierarchy_structure"><CopyableCode code="update_user_hierarchy_structure" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HierarchyStructure"><code>HierarchyStructure</code></a></td>
    <td></td>
    <td>Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_user_hierarchy_structure"
    values={[
        { label: 'describe_user_hierarchy_structure', value: 'describe_user_hierarchy_structure' }
    ]}
>
<TabItem value="describe_user_hierarchy_structure">

Describes the hierarchy structure of the specified Amazon Connect instance.

```sql
SELECT
LevelFive,
LevelFour,
LevelOne,
LevelThree,
LevelTwo
FROM aws.connect.user_hierarchy_structures
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_hierarchy_structure"
    values={[
        { label: 'update_user_hierarchy_structure', value: 'update_user_hierarchy_structure' }
    ]}
>
<TabItem value="update_user_hierarchy_structure">

Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.

```sql
UPDATE aws.connect.user_hierarchy_structures
SET 
HierarchyStructure = '{{ HierarchyStructure }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND HierarchyStructure = '{{ HierarchyStructure }}' --required;
```
</TabItem>
</Tabs>
