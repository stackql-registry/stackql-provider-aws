--- 
title: alarm_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - alarm_histories
  - cloudwatch
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

Creates, updates, deletes, gets or lists an <code>alarm_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarm_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.alarm_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_alarm_history"
    values={[
        { label: 'describe_alarm_history', value: 'describe_alarm_history' }
    ]}
>
<TabItem value="describe_alarm_history">

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
    <td><CopyableCode code="alarm_contributor_attributes" /></td>
    <td><code>object</code></td>
    <td>A map of attributes that describe the alarm contributor associated with this history item, providing context about the contributor's characteristics at the time of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="alarm_contributor_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the alarm contributor associated with this history item, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="alarm_name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name for the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="alarm_type" /></td>
    <td><code>string</code></td>
    <td>The type of alarm, either metric alarm or composite alarm. (CompositeAlarm, MetricAlarm, LogAlarm)</td>
</tr>
<tr>
    <td><CopyableCode code="history_data" /></td>
    <td><code>string</code></td>
    <td>Data about the alarm, in JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="history_item_type" /></td>
    <td><code>string</code></td>
    <td>The type of alarm history item. (ConfigurationUpdate, StateUpdate, Action, AlarmContributorStateUpdate, AlarmContributorAction)</td>
</tr>
<tr>
    <td><CopyableCode code="history_summary" /></td>
    <td><code>string</code></td>
    <td>A summary of the alarm history, in text format.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for the alarm history item.</td>
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
    <td><a href="#describe_alarm_history"><CopyableCode code="describe_alarm_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned. CloudWatch retains the history of an alarm even if you delete the alarm. To use this operation and return information about a composite alarm, you must be signed on with the cloudwatch:DescribeAlarmHistory permission that is scoped to *. You can't return information about composite alarms if your cloudwatch:DescribeAlarmHistory permission has a narrower scope.</td>
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
    defaultValue="describe_alarm_history"
    values={[
        { label: 'describe_alarm_history', value: 'describe_alarm_history' }
    ]}
>
<TabItem value="describe_alarm_history">

Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned. CloudWatch retains the history of an alarm even if you delete the alarm. To use this operation and return information about a composite alarm, you must be signed on with the cloudwatch:DescribeAlarmHistory permission that is scoped to *. You can't return information about composite alarms if your cloudwatch:DescribeAlarmHistory permission has a narrower scope.

```sql
SELECT
alarm_contributor_attributes,
alarm_contributor_id,
alarm_name,
alarm_type,
history_data,
history_item_type,
history_summary,
timestamp
FROM aws.cloudwatch.alarm_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
