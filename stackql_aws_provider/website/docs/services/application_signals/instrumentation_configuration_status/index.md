--- 
title: instrumentation_configuration_status
hide_title: false
hide_table_of_contents: false
keywords:
  - instrumentation_configuration_status
  - application_signals
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

Creates, updates, deletes, gets or lists an <code>instrumentation_configuration_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instrumentation_configuration_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.instrumentation_configuration_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instrumentation_configuration_status"
    values={[
        { label: 'get_instrumentation_configuration_status', value: 'get_instrumentation_configuration_status' }
    ]}
>
<TabItem value="get_instrumentation_configuration_status">

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
    <td><CopyableCode code="error_cause" /></td>
    <td><code>string</code></td>
    <td>The error cause when the status is ERROR. (FILE_NOT_FOUND, METHOD_NOT_FOUND, LINE_NOT_EXECUTABLE, OVERLOADED_METHODS, LANGUAGE_MISMATCH, RUNTIME_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the status was reported, rounded to the nearest minute.</td>
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
    <td><a href="#get_instrumentation_configuration_status"><CopyableCode code="get_instrumentation_configuration_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status history for a single instrumentation configuration during a specified time range. The response lists when the configuration was ACTIVE, READY, ERROR, or DISABLED. If no status or time window is provided, the operation defaults to ACTIVE events from the last hour.</td>
</tr>
<tr>
    <td><a href="#report_instrumentation_configuration_status"><CopyableCode code="report_instrumentation_configuration_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Configurations"><code>Configurations</code></a></td>
    <td></td>
    <td>Reports the status of one or more instrumentation configurations from SDK instances. Use this to record when configurations become ready, hit errors, become active, or are disabled by limits. Report READY, ERROR, and DISABLED when the status changes. Report ACTIVE periodically (for example, every minute) while instrumentation is running.</td>
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
    defaultValue="get_instrumentation_configuration_status"
    values={[
        { label: 'get_instrumentation_configuration_status', value: 'get_instrumentation_configuration_status' }
    ]}
>
<TabItem value="get_instrumentation_configuration_status">

Retrieves the status history for a single instrumentation configuration during a specified time range. The response lists when the configuration was ACTIVE, READY, ERROR, or DISABLED. If no status or time window is provided, the operation defaults to ACTIVE events from the last hour.

```sql
SELECT
error_cause,
time
FROM aws.application_signals.instrumentation_configuration_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="report_instrumentation_configuration_status"
    values={[
        { label: 'report_instrumentation_configuration_status', value: 'report_instrumentation_configuration_status' }
    ]}
>
<TabItem value="report_instrumentation_configuration_status">

Reports the status of one or more instrumentation configurations from SDK instances. Use this to record when configurations become ready, hit errors, become active, or are disabled by limits. Report READY, ERROR, and DISABLED when the status changes. Report ACTIVE periodically (for example, every minute) while instrumentation is running.

```sql
EXEC aws.application_signals.instrumentation_configuration_status.report_instrumentation_configuration_status 
@region='{{ region }}' --required 
@@json=
'{
"Service": "{{ Service }}", 
"Environment": "{{ Environment }}", 
"Configurations": "{{ Configurations }}"
}'
;
```
</TabItem>
</Tabs>
