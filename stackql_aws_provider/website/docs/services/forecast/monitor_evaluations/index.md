--- 
title: monitor_evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - monitor_evaluations
  - forecast
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

Creates, updates, deletes, gets or lists a <code>monitor_evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitor_evaluations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.monitor_evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_monitor_evaluations"
    values={[
        { label: 'list_monitor_evaluations', value: 'list_monitor_evaluations' }
    ]}
>
<TabItem value="list_monitor_evaluations">

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
    <td><CopyableCode code="evaluation_state" /></td>
    <td><code>string</code></td>
    <td>The status of the monitor evaluation. The state can be SUCCESS or FAILURE.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the monitor evaluation was started.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Information about any errors that may have occurred during the monitor evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_results" /></td>
    <td><code>array</code></td>
    <td>A list of metrics Forecast calculated when monitoring a predictor. You can compare the value for each metric in the list to the metric's value in the Baseline to see how your predictor's performance is changing.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitor resource. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_data_source" /></td>
    <td><code>object</code></td>
    <td>The source of the data the monitor resource used during the evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="num_items_evaluated" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of items considered during the evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_event" /></td>
    <td><code>object</code></td>
    <td>Provides details about a predictor event, such as a retraining.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource to monitor. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="window_end_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates the end of the window that is used for monitor evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="window_start_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates the start of the window that is used for monitor evaluation.</td>
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
    <td><a href="#list_monitor_evaluations"><CopyableCode code="list_monitor_evaluations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time. For information about monitoring see predictor-monitoring. For more information about retrieving monitoring results see Viewing Monitoring Results.</td>
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
    defaultValue="list_monitor_evaluations"
    values={[
        { label: 'list_monitor_evaluations', value: 'list_monitor_evaluations' }
    ]}
>
<TabItem value="list_monitor_evaluations">

Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time. For information about monitoring see predictor-monitoring. For more information about retrieving monitoring results see Viewing Monitoring Results.

```sql
SELECT
evaluation_state,
evaluation_time,
message,
metric_results,
monitor_arn,
monitor_data_source,
num_items_evaluated,
predictor_event,
resource_arn,
window_end_datetime,
window_start_datetime
FROM aws.forecast.monitor_evaluations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
