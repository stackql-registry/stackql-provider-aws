--- 
title: task_definition_families
hide_title: false
hide_table_of_contents: false
keywords:
  - task_definition_families
  - ecs
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

Creates, updates, deletes, gets or lists a <code>task_definition_families</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_definition_families" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.task_definition_families" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_task_definition_families"
    values={[
        { label: 'list_task_definition_families', value: 'list_task_definition_families' }
    ]}
>
<TabItem value="list_task_definition_families">

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
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>The list of task definition family names that match the ListTaskDefinitionFamilies request.</td>
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
    <td><a href="#list_task_definition_families"><CopyableCode code="list_task_definition_families" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any ACTIVE task definition revisions. You can filter out task definition families that don't contain any ACTIVE task definition revisions by setting the status parameter to ACTIVE. You can also filter the results with the familyPrefix parameter.</td>
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
    defaultValue="list_task_definition_families"
    values={[
        { label: 'list_task_definition_families', value: 'list_task_definition_families' }
    ]}
>
<TabItem value="list_task_definition_families">

Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any ACTIVE task definition revisions. You can filter out task definition families that don't contain any ACTIVE task definition revisions by setting the status parameter to ACTIVE. You can also filter the results with the familyPrefix parameter.

```sql
SELECT
family
FROM aws.ecs.task_definition_families
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
