--- 
title: alarms
hide_title: false
hide_table_of_contents: false
keywords:
  - alarms
  - iotevents_data
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotevents_data.alarms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_alarm"
    values={[
        { label: 'describe_alarm', value: 'describe_alarm' }
    ]}
>
<TabItem value="describe_alarm">

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
    <td><CopyableCode code="alarm_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the alarm model. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="alarm_model_version" /></td>
    <td><code>string</code></td>
    <td>The version of the alarm model.</td>
</tr>
<tr>
    <td><CopyableCode code="alarm_state" /></td>
    <td><code>object</code></td>
    <td>Contains information about the current state of the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the alarm was created, in the Unix epoch format.</td>
</tr>
<tr>
    <td><CopyableCode code="key_value" /></td>
    <td><code>string</code></td>
    <td>The value of the key used as a filter to select only the alarms associated with the key. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-_:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the alarm was last updated, in the Unix epoch format.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>integer</code></td>
    <td>A non-negative integer that reflects the severity level of the alarm.</td>
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
    <td><a href="#describe_alarm"><CopyableCode code="describe_alarm" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-alarm_model_name"><code>alarm_model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-keyValue"><code>keyValue</code></a></td>
    <td>Retrieves information about an alarm.</td>
</tr>
<tr>
    <td><a href="#list_alarms"><CopyableCode code="list_alarms" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-alarm_model_name"><code>alarm_model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists one or more alarms. The operation returns only the metadata associated with each alarm.</td>
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
<tr id="parameter-alarm_model_name">
    <td><CopyableCode code="alarm_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the alarm model.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-keyValue">
    <td><CopyableCode code="keyValue" /></td>
    <td><code>string</code></td>
    <td>The value of the key used as a filter to select only the alarms associated with the key.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_alarm"
    values={[
        { label: 'describe_alarm', value: 'describe_alarm' }
    ]}
>
<TabItem value="describe_alarm">

Retrieves information about an alarm.

```sql
SELECT
alarm_model_name,
alarm_model_version,
alarm_state,
creation_time,
key_value,
last_update_time,
severity
FROM aws.iotevents_data.alarms
WHERE alarm_model_name = '{{ alarm_model_name }}' -- required
AND region = '{{ region }}' -- required
AND keyValue = '{{ keyValue }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_alarms"
    values={[
        { label: 'list_alarms', value: 'list_alarms' }
    ]}
>
<TabItem value="list_alarms">

Lists one or more alarms. The operation returns only the metadata associated with each alarm.

```sql
EXEC aws.iotevents_data.alarms.list_alarms 
@alarm_model_name='{{ alarm_model_name }}' --required, 
@region='{{ region }}' --required, 
@nextToken='{{ nextToken }}', 
@maxResults='{{ maxResults }}'
;
```
</TabItem>
</Tabs>
