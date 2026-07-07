--- 
title: workloads
hide_title: false
hide_table_of_contents: false
keywords:
  - workloads
  - application_insights
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

Creates, updates, deletes, gets or lists a <code>workloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workloads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_insights.workloads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workload"
    values={[
        { label: 'describe_workload', value: 'describe_workload' },
        { label: 'list_workloads', value: 'list_workloads' }
    ]}
>
<TabItem value="describe_workload">

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
    <td><CopyableCode code="WorkloadConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration settings of the workload. The value is the escaped JSON of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadId" /></td>
    <td><code>string</code></td>
    <td>The ID of the workload. (pattern: &lt;code&gt;w-&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadRemarks" /></td>
    <td><code>string</code></td>
    <td>If logging is supported for the resource type, shows whether the component has configured logs to be monitored.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workloads">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadList" /></td>
    <td><code>array</code></td>
    <td>The list of workloads.</td>
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
    <td><a href="#describe_workload"><CopyableCode code="describe_workload" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a workload and its configuration.</td>
</tr>
<tr>
    <td><a href="#list_workloads"><CopyableCode code="list_workloads" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the workloads that are configured on a given component.</td>
</tr>
<tr>
    <td><a href="#add_workload"><CopyableCode code="add_workload" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a>, <a href="#parameter-ComponentName"><code>ComponentName</code></a>, <a href="#parameter-WorkloadConfiguration"><code>WorkloadConfiguration</code></a></td>
    <td></td>
    <td>Adds a workload to a component. Each component can have at most five workloads.</td>
</tr>
<tr>
    <td><a href="#remove_workload"><CopyableCode code="remove_workload" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a>, <a href="#parameter-ComponentName"><code>ComponentName</code></a>, <a href="#parameter-WorkloadId"><code>WorkloadId</code></a></td>
    <td></td>
    <td>Remove workload from a component.</td>
</tr>
<tr>
    <td><a href="#update_workload"><CopyableCode code="update_workload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a>, <a href="#parameter-ComponentName"><code>ComponentName</code></a>, <a href="#parameter-WorkloadConfiguration"><code>WorkloadConfiguration</code></a></td>
    <td></td>
    <td>Adds a workload to a component. Each component can have at most five workloads.</td>
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
    defaultValue="describe_workload"
    values={[
        { label: 'describe_workload', value: 'describe_workload' },
        { label: 'list_workloads', value: 'list_workloads' }
    ]}
>
<TabItem value="describe_workload">

Describes a workload and its configuration.

```sql
SELECT
WorkloadConfiguration,
WorkloadId,
WorkloadRemarks
FROM aws.application_insights.workloads
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workloads">

Lists the workloads that are configured on a given component.

```sql
SELECT
NextToken,
WorkloadList
FROM aws.application_insights.workloads
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_workload"
    values={[
        { label: 'add_workload', value: 'add_workload' },
        { label: 'remove_workload', value: 'remove_workload' }
    ]}
>
<TabItem value="add_workload">

Adds a workload to a component. Each component can have at most five workloads.

```sql
UPDATE aws.application_insights.workloads
SET 
ResourceGroupName = '{{ ResourceGroupName }}',
ComponentName = '{{ ComponentName }}',
WorkloadConfiguration = '{{ WorkloadConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND ResourceGroupName = '{{ ResourceGroupName }}' --required
AND ComponentName = '{{ ComponentName }}' --required
AND WorkloadConfiguration = '{{ WorkloadConfiguration }}' --required
RETURNING
WorkloadConfiguration,
WorkloadId;
```
</TabItem>
<TabItem value="remove_workload">

Remove workload from a component.

```sql
UPDATE aws.application_insights.workloads
SET 
ResourceGroupName = '{{ ResourceGroupName }}',
ComponentName = '{{ ComponentName }}',
WorkloadId = '{{ WorkloadId }}'
WHERE 
region = '{{ region }}' --required
AND ResourceGroupName = '{{ ResourceGroupName }}' --required
AND ComponentName = '{{ ComponentName }}' --required
AND WorkloadId = '{{ WorkloadId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_workload"
    values={[
        { label: 'update_workload', value: 'update_workload' }
    ]}
>
<TabItem value="update_workload">

Adds a workload to a component. Each component can have at most five workloads.

```sql
EXEC aws.application_insights.workloads.update_workload 
@region='{{ region }}' --required 
@@json=
'{
"ResourceGroupName": "{{ ResourceGroupName }}", 
"ComponentName": "{{ ComponentName }}", 
"WorkloadId": "{{ WorkloadId }}", 
"WorkloadConfiguration": "{{ WorkloadConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
