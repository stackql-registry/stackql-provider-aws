--- 
title: monitoring_alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_alerts
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

Creates, updates, deletes, gets or lists a <code>monitoring_alerts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_alerts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.monitoring_alerts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_monitoring_alerts"
    values={[
        { label: 'list_monitoring_alerts', value: 'list_monitoring_alerts' }
    ]}
>
<TabItem value="list_monitoring_alerts">

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
    <td><CopyableCode code="Actions" /></td>
    <td><code>object</code></td>
    <td>A list of alert actions taken in response to an alert going into InAlert status.</td>
</tr>
<tr>
    <td><CopyableCode code="AlertStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of an alert. (InAlert, OK)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when a monitor alert was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DatapointsToAlert" /></td>
    <td><code>integer</code></td>
    <td>Within EvaluationPeriod, how many execution failures will raise an alert.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of most recent monitoring executions to consider when evaluating alert status.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when a monitor alert was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringAlertName" /></td>
    <td><code>string</code></td>
    <td>The name of a monitoring alert. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_monitoring_alerts"><CopyableCode code="list_monitoring_alerts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the alerts for a single monitoring schedule.</td>
</tr>
<tr>
    <td><a href="#update_monitoring_alert"><CopyableCode code="update_monitoring_alert" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitoringScheduleName"><code>MonitoringScheduleName</code></a>, <a href="#parameter-MonitoringAlertName"><code>MonitoringAlertName</code></a>, <a href="#parameter-DatapointsToAlert"><code>DatapointsToAlert</code></a>, <a href="#parameter-EvaluationPeriod"><code>EvaluationPeriod</code></a></td>
    <td></td>
    <td>Update the parameters of a model monitor alert.</td>
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
    defaultValue="list_monitoring_alerts"
    values={[
        { label: 'list_monitoring_alerts', value: 'list_monitoring_alerts' }
    ]}
>
<TabItem value="list_monitoring_alerts">

Gets the alerts for a single monitoring schedule.

```sql
SELECT
Actions,
AlertStatus,
CreationTime,
DatapointsToAlert,
EvaluationPeriod,
LastModifiedTime,
MonitoringAlertName
FROM aws.sagemaker.monitoring_alerts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitoring_alert"
    values={[
        { label: 'update_monitoring_alert', value: 'update_monitoring_alert' }
    ]}
>
<TabItem value="update_monitoring_alert">

Update the parameters of a model monitor alert.

```sql
UPDATE aws.sagemaker.monitoring_alerts
SET 
MonitoringScheduleName = '{{ MonitoringScheduleName }}',
MonitoringAlertName = '{{ MonitoringAlertName }}',
DatapointsToAlert = {{ DatapointsToAlert }},
EvaluationPeriod = {{ EvaluationPeriod }}
WHERE 
region = '{{ region }}' --required
AND MonitoringScheduleName = '{{ MonitoringScheduleName }}' --required
AND MonitoringAlertName = '{{ MonitoringAlertName }}' --required
AND DatapointsToAlert = '{{ DatapointsToAlert }}' --required
AND EvaluationPeriod = '{{ EvaluationPeriod }}' --required
RETURNING
MonitoringAlertName,
MonitoringScheduleArn;
```
</TabItem>
</Tabs>
