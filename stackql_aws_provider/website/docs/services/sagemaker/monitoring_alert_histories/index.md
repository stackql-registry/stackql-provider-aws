--- 
title: monitoring_alert_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_alert_histories
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>monitoring_alert_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_alert_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.monitoring_alert_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_monitoring_alert_history"
    values={[
        { label: 'list_monitoring_alert_history', value: 'list_monitoring_alert_history' }
    ]}
>
<TabItem value="list_monitoring_alert_history">

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
    <td><CopyableCode code="alert_status" /></td>
    <td><code>string</code></td>
    <td>The current alert status of an alert. (InAlert, OK)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the first alert transition occurred in an alert history. An alert transition can be from status InAlert to OK, or from OK to InAlert.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_alert_name" /></td>
    <td><code>string</code></td>
    <td>The name of a monitoring alert. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_schedule_name" /></td>
    <td><code>string</code></td>
    <td>The name of a monitoring schedule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_monitoring_alert_history"><CopyableCode code="list_monitoring_alert_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of past alerts in a model monitoring schedule.</td>
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
    defaultValue="list_monitoring_alert_history"
    values={[
        { label: 'list_monitoring_alert_history', value: 'list_monitoring_alert_history' }
    ]}
>
<TabItem value="list_monitoring_alert_history">

Gets a list of past alerts in a model monitoring schedule.

```sql
SELECT
alert_status,
creation_time,
monitoring_alert_name,
monitoring_schedule_name
FROM aws.sagemaker.monitoring_alert_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
