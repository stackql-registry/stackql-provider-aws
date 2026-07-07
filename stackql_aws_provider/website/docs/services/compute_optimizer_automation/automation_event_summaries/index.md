--- 
title: automation_event_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_event_summaries
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

Creates, updates, deletes, gets or lists an <code>automation_event_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_event_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.automation_event_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_automation_event_summaries"
    values={[
        { label: 'list_automation_event_summaries', value: 'list_automation_event_summaries' }
    ]}
>
<TabItem value="list_automation_event_summaries">

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
    <td><CopyableCode code="dimensions" /></td>
    <td><code>array</code></td>
    <td>The dimensions used to group this summary, such as event status.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key identifier for this summary grouping.</td>
</tr>
<tr>
    <td><CopyableCode code="timePeriod" /></td>
    <td><code>object</code></td>
    <td>The time period covered by this summary, with inclusive start time and exclusive end time.</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>object</code></td>
    <td>The aggregated totals for this summary, including event count and estimated savings.</td>
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
    <td><a href="#list_automation_event_summaries"><CopyableCode code="list_automation_event_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a summary of automation events based on specified filters. Only events created within the past year will be included in the summary.</td>
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
    defaultValue="list_automation_event_summaries"
    values={[
        { label: 'list_automation_event_summaries', value: 'list_automation_event_summaries' }
    ]}
>
<TabItem value="list_automation_event_summaries">

Provides a summary of automation events based on specified filters. Only events created within the past year will be included in the summary.

```sql
SELECT
dimensions,
key,
timePeriod,
total
FROM aws.compute_optimizer_automation.automation_event_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
