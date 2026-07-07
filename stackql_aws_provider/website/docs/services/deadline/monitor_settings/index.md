--- 
title: monitor_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - monitor_settings
  - deadline
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

Creates, updates, deletes, gets or lists a <code>monitor_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitor_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.monitor_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor_settings"
    values={[
        { label: 'get_monitor_settings', value: 'get_monitor_settings' }
    ]}
>
<TabItem value="get_monitor_settings">

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
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>The monitor settings as key-value pairs.</td>
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
    <td><a href="#get_monitor_settings"><CopyableCode code="get_monitor_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the settings for a Deadline Cloud monitor.</td>
</tr>
<tr>
    <td><a href="#update_monitor_settings"><CopyableCode code="update_monitor_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-settings"><code>settings</code></a></td>
    <td></td>
    <td>Updates the settings for a Deadline Cloud monitor. Keys present in the request are upserted; keys absent are left unchanged. Send an empty string value to delete a key.</td>
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
<tr id="parameter-monitor_id">
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the monitor to update settings for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monitor_settings"
    values={[
        { label: 'get_monitor_settings', value: 'get_monitor_settings' }
    ]}
>
<TabItem value="get_monitor_settings">

Gets the settings for a Deadline Cloud monitor.

```sql
SELECT
settings
FROM aws.deadline.monitor_settings
WHERE monitor_id = '{{ monitor_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitor_settings"
    values={[
        { label: 'update_monitor_settings', value: 'update_monitor_settings' }
    ]}
>
<TabItem value="update_monitor_settings">

Updates the settings for a Deadline Cloud monitor. Keys present in the request are upserted; keys absent are left unchanged. Send an empty string value to delete a key.

```sql
UPDATE aws.deadline.monitor_settings
SET 
settings = '{{ settings }}'
WHERE 
monitor_id = '{{ monitor_id }}' --required
AND region = '{{ region }}' --required
AND settings = '{{ settings }}' --required;
```
</TabItem>
</Tabs>
