--- 
title: monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitors
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

Creates, updates, deletes, gets or lists a <code>monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.monitors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_monitor"
    values={[
        { label: 'describe_monitor', value: 'describe_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="describe_monitor">

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
    <td><CopyableCode code="baseline" /></td>
    <td><code>object</code></td>
    <td>Metrics you can use as a baseline for comparison purposes. Use these values you interpret monitoring results for an auto predictor.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the monitor resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_evaluation_time_remaining_in_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated number of minutes remaining before the monitor resource finishes its current evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_evaluation_state" /></td>
    <td><code>string</code></td>
    <td>The state of the monitor's latest evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_evaluation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the latest evaluation completed by the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the latest modification to the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>An error message, if any, for the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitor resource described. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the auto predictor being monitored. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the monitor resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitors">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the monitor resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the monitor resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. STOPPED - When the resource stopped. ACTIVE or CREATE_FAILED - When the monitor creation finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitor resource. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor resource. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the predictor being monitored. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the monitor. States include: ACTIVE ACTIVE_STOPPING, ACTIVE_STOPPED UPDATE_IN_PROGRESS CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED</td>
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
    <td><a href="#describe_monitor"><CopyableCode code="describe_monitor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a monitor resource. In addition to listing the properties provided in the CreateMonitor request, this operation lists the following properties: Baseline CreationTime LastEvaluationTime LastEvaluationState LastModificationTime Message Status</td>
</tr>
<tr>
    <td><a href="#list_monitors"><CopyableCode code="list_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the DescribeMonitor operation.</td>
</tr>
<tr>
    <td><a href="#create_monitor"><CopyableCode code="create_monitor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitorName"><code>MonitorName</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see Predictor Monitoring.</td>
</tr>
<tr>
    <td><a href="#delete_monitor"><CopyableCode code="delete_monitor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE, ACTIVE_STOPPED, CREATE_FAILED, or CREATE_STOPPED.</td>
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
    defaultValue="describe_monitor"
    values={[
        { label: 'describe_monitor', value: 'describe_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="describe_monitor">

Describes a monitor resource. In addition to listing the properties provided in the CreateMonitor request, this operation lists the following properties: Baseline CreationTime LastEvaluationTime LastEvaluationState LastModificationTime Message Status

```sql
SELECT
baseline,
creation_time,
estimated_evaluation_time_remaining_in_minutes,
last_evaluation_state,
last_evaluation_time,
last_modification_time,
message,
monitor_arn,
monitor_name,
resource_arn,
status
FROM aws.forecast.monitors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_monitors">

Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the DescribeMonitor operation.

```sql
SELECT
creation_time,
last_modification_time,
monitor_arn,
monitor_name,
resource_arn,
status
FROM aws.forecast.monitors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor"
    values={[
        { label: 'create_monitor', value: 'create_monitor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor">

Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see Predictor Monitoring.

```sql
INSERT INTO aws.forecast.monitors (
MonitorName,
ResourceArn,
Tags,
region
)
SELECT 
'{{ MonitorName }}' /* required */,
'{{ ResourceArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
monitor_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the monitors resource.
    - name: MonitorName
      value: "{{ MonitorName }}"
      description: |
        The name of the monitor resource.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the predictor to monitor.
    - name: Tags
      description: |
        A list of tags to apply to the monitor resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitor"
    values={[
        { label: 'delete_monitor', value: 'delete_monitor' }
    ]}
>
<TabItem value="delete_monitor">

Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE, ACTIVE_STOPPED, CREATE_FAILED, or CREATE_STOPPED.

```sql
DELETE FROM aws.forecast.monitors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
