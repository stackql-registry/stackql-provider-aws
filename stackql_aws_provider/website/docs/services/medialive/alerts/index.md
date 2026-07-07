--- 
title: alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts
  - medialive
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

Creates, updates, deletes, gets or lists an <code>alerts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alerts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.alerts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_alerts"
    values={[
        { label: 'list_alerts', value: 'list_alerts' }
    ]}
>
<TabItem value="list_alerts">

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
    <td><CopyableCode code="AlertType" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="ClearedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="PipelineId" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="SetTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the alert (SET, CLEARED)</td>
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
    <td><a href="#list_alerts"><CopyableCode code="list_alerts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-stateFilter"><code>stateFilter</code></a></td>
    <td>List the alerts for a channel with optional filtering based on alert state.</td>
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
<tr id="parameter-channel_id">
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the channel</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next pagination token</td>
</tr>
<tr id="parameter-stateFilter">
    <td><CopyableCode code="stateFilter" /></td>
    <td><code>string</code></td>
    <td>Specifies the set of alerts to return based on their state. SET - Return only alerts with SET state. CLEARED - Return only alerts with CLEARED state. ALL - Return all alerts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_alerts"
    values={[
        { label: 'list_alerts', value: 'list_alerts' }
    ]}
>
<TabItem value="list_alerts">

List the alerts for a channel with optional filtering based on alert state.

```sql
SELECT
AlertType,
ClearedTimestamp,
Id,
Message,
PipelineId,
SetTimestamp,
State
FROM aws.medialive.alerts
WHERE channel_id = '{{ channel_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND stateFilter = '{{ stateFilter }}'
;
```
</TabItem>
</Tabs>
