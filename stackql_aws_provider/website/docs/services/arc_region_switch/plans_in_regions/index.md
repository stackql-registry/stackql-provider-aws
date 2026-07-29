--- 
title: plans_in_regions
hide_title: false
hide_table_of_contents: false
keywords:
  - plans_in_regions
  - arc_region_switch
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

Creates, updates, deletes, gets or lists a <code>plans_in_regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plans_in_regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_region_switch.plans_in_regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_plans_in_region"
    values={[
        { label: 'list_plans_in_region', value: 'list_plans_in_region' }
    ]}
>
<TabItem value="list_plans_in_region">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a Region switch plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="active_plan_execution" /></td>
    <td><code>string</code></td>
    <td>Specifies if this is the active plan execution at this time.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Region switch plan. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:arc-region-switch::&#91;0-9&#93;&#123;12&#125;:plan/(&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?):(&#91;a-z0-9&#93;&#123;6&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a Region switch plan.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role" /></td>
    <td><code>string</code></td>
    <td>The execution role is a way to categorize a Region switch plan.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of a Region switch plan. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_region" /></td>
    <td><code>string</code></td>
    <td>The primary Region for a plan. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z-&#93;+-\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_approach" /></td>
    <td><code>string</code></td>
    <td>The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive). (activeActive, activePassive)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_time_objective_minutes" /></td>
    <td><code>integer</code></td>
    <td>The recovery time objective that you've specified.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Region specified for a Region switch plan.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the plan execution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version for the plan.</td>
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
    <td><a href="#list_plans_in_region"><CopyableCode code="list_plans_in_region" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Region switch plans in your Amazon Web Services account that are available in the current Amazon Web Services Region.</td>
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
    defaultValue="list_plans_in_region"
    values={[
        { label: 'list_plans_in_region', value: 'list_plans_in_region' }
    ]}
>
<TabItem value="list_plans_in_region">

Lists all Region switch plans in your Amazon Web Services account that are available in the current Amazon Web Services Region.

```sql
SELECT
name,
active_plan_execution,
arn,
description,
execution_role,
owner,
primary_region,
recovery_approach,
recovery_time_objective_minutes,
regions,
updated_at,
version
FROM aws.arc_region_switch.plans_in_regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
