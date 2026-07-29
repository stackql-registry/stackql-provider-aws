--- 
title: quantum_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - quantum_tasks
  - braket
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

Creates, updates, deletes, gets or lists a <code>quantum_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quantum_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.braket.quantum_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_quantum_task"
    values={[
        { label: 'get_quantum_task', value: 'get_quantum_task' },
        { label: 'search_quantum_tasks', value: 'search_quantum_tasks' }
    ]}
>
<TabItem value="get_quantum_task">

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
    <td><CopyableCode code="action_metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata about the action performed by the quantum task, including information about the type of action and program counts.</td>
</tr>
<tr>
    <td><CopyableCode code="associations" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Braket resources associated with the quantum task.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the quantum task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="device_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device the quantum task was run on.</td>
</tr>
<tr>
    <td><CopyableCode code="device_parameters" /></td>
    <td><code>string</code></td>
    <td>The parameters for the device on which the quantum task ran.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the quantum task ended.</td>
</tr>
<tr>
    <td><CopyableCode code="experimental_capabilities" /></td>
    <td><code>object</code></td>
    <td>Enabled experimental capabilities for quantum hardware. Note that the use of these features may impact device capabilities and performance beyond its standard specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that a quantum task failed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Braket job associated with the quantum task. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:braket:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="num_successful_shots" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of successful shots for the quantum task. This is available after a successfully completed quantum task.</td>
</tr>
<tr>
    <td><CopyableCode code="output_s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket where quantum task results are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="output_s3_directory" /></td>
    <td><code>string</code></td>
    <td>The folder in the S3 bucket where quantum task results are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="quantum_task_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the quantum task.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_info" /></td>
    <td><code>object</code></td>
    <td>Queue information for the requested quantum task. Only returned if QueueInfo is specified in the additionalAttributeNames" field in the GetQuantumTask API request.</td>
</tr>
<tr>
    <td><CopyableCode code="shots" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of shots used in the quantum task.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the quantum task. (CREATED, QUEUED, RUNNING, COMPLETED, FAILED, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that belong to this quantum task.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_quantum_tasks">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the quantum task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="device_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device the quantum task ran on.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the quantum task finished.</td>
</tr>
<tr>
    <td><CopyableCode code="output_s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket where the quantum task result file is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="output_s3_directory" /></td>
    <td><code>string</code></td>
    <td>The folder in the S3 bucket where the quantum task result file is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="quantum_task_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the quantum task.</td>
</tr>
<tr>
    <td><CopyableCode code="shots" /></td>
    <td><code>integer (int64)</code></td>
    <td>The shots used for the quantum task.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the quantum task. (CREATED, QUEUED, RUNNING, COMPLETED, FAILED, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Displays the key, value pairs of tags associated with this quantum task.</td>
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
    <td><a href="#get_quantum_task"><CopyableCode code="get_quantum_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-quantum_task_arn"><code>quantum_task_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-additionalAttributeNames"><code>additionalAttributeNames</code></a></td>
    <td>Retrieves the specified quantum task.</td>
</tr>
<tr>
    <td><a href="#search_quantum_tasks"><CopyableCode code="search_quantum_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for tasks that match the specified filter values.</td>
</tr>
<tr>
    <td><a href="#create_quantum_task"><CopyableCode code="create_quantum_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-deviceArn"><code>deviceArn</code></a>, <a href="#parameter-shots"><code>shots</code></a>, <a href="#parameter-outputS3Bucket"><code>outputS3Bucket</code></a>, <a href="#parameter-outputS3KeyPrefix"><code>outputS3KeyPrefix</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Creates a quantum task.</td>
</tr>
<tr>
    <td><a href="#cancel_quantum_task"><CopyableCode code="cancel_quantum_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-quantum_task_arn"><code>quantum_task_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Cancels the specified task.</td>
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
<tr id="parameter-quantum_task_arn">
    <td><CopyableCode code="quantum_task_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the quantum task to cancel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-additionalAttributeNames">
    <td><CopyableCode code="additionalAttributeNames" /></td>
    <td><code>array</code></td>
    <td>A list of attributes to return additional information for. Only the QueueInfo additional attribute name is currently supported.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_quantum_task"
    values={[
        { label: 'get_quantum_task', value: 'get_quantum_task' },
        { label: 'search_quantum_tasks', value: 'search_quantum_tasks' }
    ]}
>
<TabItem value="get_quantum_task">

Retrieves the specified quantum task.

```sql
SELECT
action_metadata,
associations,
created_at,
device_arn,
device_parameters,
ended_at,
experimental_capabilities,
failure_reason,
job_arn,
num_successful_shots,
output_s3_bucket,
output_s3_directory,
quantum_task_arn,
queue_info,
shots,
status,
tags
FROM aws.braket.quantum_tasks
WHERE quantum_task_arn = '{{ quantum_task_arn }}' -- required
AND region = '{{ region }}' -- required
AND additionalAttributeNames = '{{ additionalAttributeNames }}'
;
```
</TabItem>
<TabItem value="search_quantum_tasks">

Searches for tasks that match the specified filter values.

```sql
SELECT
created_at,
device_arn,
ended_at,
output_s3_bucket,
output_s3_directory,
quantum_task_arn,
shots,
status,
tags
FROM aws.braket.quantum_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_quantum_task"
    values={[
        { label: 'create_quantum_task', value: 'create_quantum_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_quantum_task">

Creates a quantum task.

```sql
INSERT INTO aws.braket.quantum_tasks (
clientToken,
deviceArn,
deviceParameters,
shots,
outputS3Bucket,
outputS3KeyPrefix,
action,
tags,
jobToken,
associations,
experimentalCapabilities,
region
)
SELECT 
'{{ clientToken }}' /* required */,
'{{ deviceArn }}' /* required */,
'{{ deviceParameters }}',
{{ shots }} /* required */,
'{{ outputS3Bucket }}' /* required */,
'{{ outputS3KeyPrefix }}' /* required */,
'{{ action }}' /* required */,
'{{ tags }}',
'{{ jobToken }}',
'{{ associations }}',
'{{ experimentalCapabilities }}',
'{{ region }}'
RETURNING
quantum_task_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: quantum_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the quantum_tasks resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: deviceArn
      value: "{{ deviceArn }}"
    - name: deviceParameters
      value: "{{ deviceParameters }}"
    - name: shots
      value: {{ shots }}
    - name: outputS3Bucket
      value: "{{ outputS3Bucket }}"
    - name: outputS3KeyPrefix
      value: "{{ outputS3KeyPrefix }}"
    - name: action
      value: "{{ action }}"
    - name: tags
      value: "{{ tags }}"
    - name: jobToken
      value: "{{ jobToken }}"
    - name: associations
      value:
        - arn: "{{ arn }}"
          type_: "{{ type_ }}"
    - name: experimentalCapabilities
      description: |
        Enabled experimental capabilities for quantum hardware. Note that the use of these features may impact device capabilities and performance beyond its standard specifications.
      value:
        enabled: "{{ enabled }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_quantum_task"
    values={[
        { label: 'cancel_quantum_task', value: 'cancel_quantum_task' }
    ]}
>
<TabItem value="cancel_quantum_task">

Cancels the specified task.

```sql
EXEC aws.braket.quantum_tasks.cancel_quantum_task 
@quantum_task_arn='{{ quantum_task_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
