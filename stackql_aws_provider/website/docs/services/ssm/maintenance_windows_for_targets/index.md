--- 
title: maintenance_windows_for_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_windows_for_targets
  - ssm
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

Creates, updates, deletes, gets or lists a <code>maintenance_windows_for_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_windows_for_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.maintenance_windows_for_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_maintenance_windows_for_target"
    values={[
        { label: 'describe_maintenance_windows_for_target', value: 'describe_maintenance_windows_for_target' }
    ]}
>
<TabItem value="describe_maintenance_windows_for_target">

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
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the maintenance window. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WindowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window. (pattern: &lt;code&gt;^mw-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_maintenance_windows_for_target"><CopyableCode code="describe_maintenance_windows_for_target" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the maintenance window targets or tasks that a managed node is associated with.</td>
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
    defaultValue="describe_maintenance_windows_for_target"
    values={[
        { label: 'describe_maintenance_windows_for_target', value: 'describe_maintenance_windows_for_target' }
    ]}
>
<TabItem value="describe_maintenance_windows_for_target">

Retrieves information about the maintenance window targets or tasks that a managed node is associated with.

```sql
SELECT
Name,
WindowId
FROM aws.ssm.maintenance_windows_for_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
