--- 
title: plan_in_regions
hide_title: false
hide_table_of_contents: false
keywords:
  - plan_in_regions
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

Creates, updates, deletes, gets or lists a <code>plan_in_regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plan_in_regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_region_switch.plan_in_regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_plan_in_region"
    values={[
        { label: 'get_plan_in_region', value: 'get_plan_in_region' }
    ]}
>
<TabItem value="get_plan_in_region">

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
    <td>The name for a plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the plan. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:arc-region-switch::&#91;0-9&#93;&#123;12&#125;:plan/(&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?):(&#91;a-z0-9&#93;&#123;6&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedAlarms" /></td>
    <td><code>object</code></td>
    <td>The associated application health alarms for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRole" /></td>
    <td><code>string</code></td>
    <td>The execution role for a plan. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z0-9-&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of a plan. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primaryRegion" /></td>
    <td><code>string</code></td>
    <td>The primary Region for a plan. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z-&#93;+-\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryApproach" /></td>
    <td><code>string</code></td>
    <td>The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive). (activeActive, activePassive)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryTimeObjectiveMinutes" /></td>
    <td><code>integer</code></td>
    <td>The recovery time objective for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Regions for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="reportConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for automatic report generation for plan executions. When configured, Region switch automatically generates a report after each plan execution that includes execution events, plan configuration, and CloudWatch alarm states.</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>The triggers for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the plan was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version for the plan.</td>
</tr>
<tr>
    <td><CopyableCode code="workflows" /></td>
    <td><code>array</code></td>
    <td>The workflows for a plan.</td>
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
    <td><a href="#get_plan_in_region"><CopyableCode code="get_plan_in_region" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a Region switch plan in a specific Amazon Web Services Region. This operation is useful for getting Region-specific information about a plan.</td>
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
    defaultValue="get_plan_in_region"
    values={[
        { label: 'get_plan_in_region', value: 'get_plan_in_region' }
    ]}
>
<TabItem value="get_plan_in_region">

Retrieves information about a Region switch plan in a specific Amazon Web Services Region. This operation is useful for getting Region-specific information about a plan.

```sql
SELECT
name,
arn,
associatedAlarms,
description,
executionRole,
owner,
primaryRegion,
recoveryApproach,
recoveryTimeObjectiveMinutes,
regions,
reportConfiguration,
triggers,
updatedAt,
version,
workflows
FROM aws.arc_region_switch.plan_in_regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
