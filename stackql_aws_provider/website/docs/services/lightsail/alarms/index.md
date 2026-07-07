--- 
title: alarms
hide_title: false
hide_table_of_contents: false
keywords:
  - alarms
  - lightsail
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

Creates, updates, deletes, gets or lists an <code>alarms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.alarms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alarms"
    values={[
        { label: 'get_alarms', value: 'get_alarms' }
    ]}
>
<TabItem value="get_alarms">

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
    <td><CopyableCode code="alarms" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe the alarms.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token to advance to the next page of results from your request. A next page token is not returned if there are no more results to display. To get the next page of results, perform another GetAlarms request and specify the next page token using the pageToken parameter.</td>
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
    <td><a href="#get_alarms"><CopyableCode code="get_alarms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource. An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see Alarms in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#put_alarm"><CopyableCode code="put_alarm" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-alarmName"><code>alarmName</code></a>, <a href="#parameter-metricName"><code>metricName</code></a>, <a href="#parameter-monitoredResourceName"><code>monitoredResourceName</code></a>, <a href="#parameter-comparisonOperator"><code>comparisonOperator</code></a>, <a href="#parameter-threshold"><code>threshold</code></a>, <a href="#parameter-evaluationPeriods"><code>evaluationPeriods</code></a></td>
    <td></td>
    <td>Creates or updates an alarm, and associates it with the specified metric. An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see Alarms in Amazon Lightsail. When this action creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration. The put alarm operation supports tag-based access control via request tags. For more information, see the Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_alarm"><CopyableCode code="delete_alarm" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an alarm. An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see Alarms in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#test_alarm"><CopyableCode code="test_alarm" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-alarmName"><code>alarmName</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td></td>
    <td>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (Email and/or SMS) configured for the alarm. An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see Alarms in Amazon Lightsail.</td>
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
    defaultValue="get_alarms"
    values={[
        { label: 'get_alarms', value: 'get_alarms' }
    ]}
>
<TabItem value="get_alarms">

Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource. An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see Alarms in Amazon Lightsail.

```sql
SELECT
alarms,
nextPageToken
FROM aws.lightsail.alarms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_alarm"
    values={[
        { label: 'put_alarm', value: 'put_alarm' }
    ]}
>
<TabItem value="put_alarm">

Creates or updates an alarm, and associates it with the specified metric. An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see Alarms in Amazon Lightsail. When this action creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration. The put alarm operation supports tag-based access control via request tags. For more information, see the Lightsail Developer Guide.

```sql
REPLACE aws.lightsail.alarms
SET 
alarmName = '{{ alarmName }}',
metricName = '{{ metricName }}',
monitoredResourceName = '{{ monitoredResourceName }}',
comparisonOperator = '{{ comparisonOperator }}',
threshold = {{ threshold }},
evaluationPeriods = {{ evaluationPeriods }},
datapointsToAlarm = {{ datapointsToAlarm }},
treatMissingData = '{{ treatMissingData }}',
contactProtocols = '{{ contactProtocols }}',
notificationTriggers = '{{ notificationTriggers }}',
notificationEnabled = {{ notificationEnabled }},
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND alarmName = '{{ alarmName }}' --required
AND metricName = '{{ metricName }}' --required
AND monitoredResourceName = '{{ monitoredResourceName }}' --required
AND comparisonOperator = '{{ comparisonOperator }}' --required
AND threshold = '{{ threshold }}' --required
AND evaluationPeriods = '{{ evaluationPeriods }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alarm"
    values={[
        { label: 'delete_alarm', value: 'delete_alarm' }
    ]}
>
<TabItem value="delete_alarm">

Deletes an alarm. An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see Alarms in Amazon Lightsail.

```sql
DELETE FROM aws.lightsail.alarms
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test_alarm"
    values={[
        { label: 'test_alarm', value: 'test_alarm' }
    ]}
>
<TabItem value="test_alarm">

Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (Email and/or SMS) configured for the alarm. An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see Alarms in Amazon Lightsail.

```sql
EXEC aws.lightsail.alarms.test_alarm 
@region='{{ region }}' --required 
@@json=
'{
"alarmName": "{{ alarmName }}", 
"state": "{{ state }}"
}'
;
```
</TabItem>
</Tabs>
