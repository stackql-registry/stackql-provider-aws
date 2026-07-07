--- 
title: automation_event_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_event_steps
  - compute_optimizer_automation
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

Creates, updates, deletes, gets or lists an <code>automation_event_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_event_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.automation_event_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_automation_event_steps"
    values={[
        { label: 'list_automation_event_steps', value: 'list_automation_event_steps' }
    ]}
>
<TabItem value="list_automation_event_steps">

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
    <td><CopyableCode code="completedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this automation event step completed execution.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedMonthlySavings" /></td>
    <td><code>object</code></td>
    <td>Contains information about estimated monthly cost savings.</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The ID of the automation event this step belongs to. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the resource being acted upon in this step. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this automation event step started execution.</td>
</tr>
<tr>
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this step. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stepStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the step. (Ready, InProgress, Complete, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="stepType" /></td>
    <td><code>string</code></td>
    <td>The type of step. (CreateEbsSnapshot, DeleteEbsVolume, ModifyEbsVolume, CreateEbsVolume)</td>
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
    <td><a href="#list_automation_event_steps"><CopyableCode code="list_automation_event_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the steps for a specific automation event. You can only list steps for events created within the past year.</td>
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
    defaultValue="list_automation_event_steps"
    values={[
        { label: 'list_automation_event_steps', value: 'list_automation_event_steps' }
    ]}
>
<TabItem value="list_automation_event_steps">

Lists the steps for a specific automation event. You can only list steps for events created within the past year.

```sql
SELECT
completedTimestamp,
estimatedMonthlySavings,
eventId,
resourceId,
startTimestamp,
stepId,
stepStatus,
stepType
FROM aws.compute_optimizer_automation.automation_event_steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
