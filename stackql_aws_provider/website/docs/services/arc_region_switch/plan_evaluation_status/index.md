--- 
title: plan_evaluation_status
hide_title: false
hide_table_of_contents: false
keywords:
  - plan_evaluation_status
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

Creates, updates, deletes, gets or lists a <code>plan_evaluation_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plan_evaluation_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_region_switch.plan_evaluation_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_plan_evaluation_status"
    values={[
        { label: 'get_plan_evaluation_status', value: 'get_plan_evaluation_status' }
    ]}
>
<TabItem value="get_plan_evaluation_status">

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
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stepName" /></td>
    <td><code>string</code></td>
    <td>The name of the step for the resource warning.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version for the resource warning.</td>
</tr>
<tr>
    <td><CopyableCode code="warningMessage" /></td>
    <td><code>string</code></td>
    <td>The warning message about what needs to be corrected.</td>
</tr>
<tr>
    <td><CopyableCode code="warningStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the resource warning. (active, resolved)</td>
</tr>
<tr>
    <td><CopyableCode code="warningUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the warning was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow" /></td>
    <td><code>object</code></td>
    <td>The workflow for the resource warning.</td>
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
    <td><a href="#get_plan_evaluation_status"><CopyableCode code="get_plan_evaluation_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the evaluation status of a Region switch plan. The evaluation status provides information about the last time the plan was evaluated and any warnings or issues detected.</td>
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
    defaultValue="get_plan_evaluation_status"
    values={[
        { label: 'get_plan_evaluation_status', value: 'get_plan_evaluation_status' }
    ]}
>
<TabItem value="get_plan_evaluation_status">

Retrieves the evaluation status of a Region switch plan. The evaluation status provides information about the last time the plan was evaluated and any warnings or issues detected.

```sql
SELECT
resourceArn,
stepName,
version,
warningMessage,
warningStatus,
warningUpdatedTime,
workflow
FROM aws.arc_region_switch.plan_evaluation_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
