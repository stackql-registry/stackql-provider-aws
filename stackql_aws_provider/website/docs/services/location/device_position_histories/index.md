--- 
title: device_position_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - device_position_histories
  - location
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

Creates, updates, deletes, gets or lists a <code>device_position_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_position_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.device_position_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device_position_history"
    values={[
        { label: 'get_device_position_history', value: 'get_device_position_history' }
    ]}
>
<TabItem value="get_device_position_history">

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
    <td><CopyableCode code="accuracy" /></td>
    <td><code>object</code></td>
    <td>The accuracy of the device position.</td>
</tr>
<tr>
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The device whose position you retrieved. (pattern: &lt;code&gt;&#91;-._\p&#123;L&#125;\p&#123;N&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>array</code></td>
    <td>The last known device position.</td>
</tr>
<tr>
    <td><CopyableCode code="position_properties" /></td>
    <td><code>object</code></td>
    <td>The properties associated with the position.</td>
</tr>
<tr>
    <td><CopyableCode code="received_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the tracker resource received the device position in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the device's position was determined. Uses ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
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
    <td><a href="#get_device_position_history"><CopyableCode code="get_device_position_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-device_id"><code>device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the device position history from a tracker resource within a specified range of time. Device positions are deleted after 30 days.</td>
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
<tr id="parameter-device_id">
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The device whose position history you want to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-tracker_name">
    <td><CopyableCode code="tracker_name" /></td>
    <td><code>string</code></td>
    <td>The tracker resource receiving the request for the device position history.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_device_position_history"
    values={[
        { label: 'get_device_position_history', value: 'get_device_position_history' }
    ]}
>
<TabItem value="get_device_position_history">

Retrieves the device position history from a tracker resource within a specified range of time. Device positions are deleted after 30 days.

```sql
SELECT
accuracy,
device_id,
position,
position_properties,
received_time,
sample_time
FROM aws.location.device_position_histories
WHERE tracker_name = '{{ tracker_name }}' -- required
AND device_id = '{{ device_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
