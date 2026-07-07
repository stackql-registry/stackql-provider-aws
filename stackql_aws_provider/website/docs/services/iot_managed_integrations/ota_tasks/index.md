--- 
title: ota_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - ota_tasks
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists an <code>ota_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ota_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.ota_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ota_task"
    values={[
        { label: 'get_ota_task', value: 'get_ota_task' },
        { label: 'list_ota_tasks', value: 'list_ota_tasks' }
    ]}
>
<TabItem value="get_ota_task">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the over-the-air (OTA) task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the over-the-air (OTA) task. (pattern: &lt;code&gt;&#91;0-9A-Za-z_\- &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the over-the-air (OTA) task was last updated at.</td>
</tr>
<tr>
    <td><CopyableCode code="OtaMechanism" /></td>
    <td><code>string</code></td>
    <td>The deployment mechanism for the over-the-air (OTA) task. (PUSH)</td>
</tr>
<tr>
    <td><CopyableCode code="OtaSchedulingConfig" /></td>
    <td><code>object</code></td>
    <td>Over-the-air (OTA) task scheduling config.</td>
</tr>
<tr>
    <td><CopyableCode code="OtaTargetQueryString" /></td>
    <td><code>string</code></td>
    <td>The query string to add things to the thing group.</td>
</tr>
<tr>
    <td><CopyableCode code="OtaTaskExecutionRetryConfig" /></td>
    <td><code>object</code></td>
    <td>Over-the-air (OTA) task retry config.</td>
</tr>
<tr>
    <td><CopyableCode code="OtaType" /></td>
    <td><code>string</code></td>
    <td>The frequency type for the over-the-air (OTA) task. (ONE_TIME, CONTINUOUS)</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The connection protocol the over-the-air (OTA) task uses to update the device. (HTTP)</td>
</tr>
<tr>
    <td><CopyableCode code="S3Url" /></td>
    <td><code>string</code></td>
    <td>The URL to the Amazon S3 bucket where the over-the-air (OTA) task is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the over-the-air (OTA) task. (IN_PROGRESS, CANCELED, COMPLETED, DELETION_IN_PROGRESS, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>A set of key/value pairs that are used to manage the over-the-air (OTA) task.</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>array</code></td>
    <td>The device targeted for the over-the-air (OTA) task.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the over-the-air (OTA) task (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:ota-task/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the over-the-air (OTA) task configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskId" /></td>
    <td><code>string</code></td>
    <td>The id of the over-the-air (OTA) task. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskProcessingDetails" /></td>
    <td><code>object</code></td>
    <td>The processing details of all over-the-air (OTA) tasks.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ota_tasks">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the over-the-air (OTA) task was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the over-the-air (OTA) task was last updated at.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the over-the-air (OTA) task summary. (IN_PROGRESS, CANCELED, COMPLETED, DELETION_IN_PROGRESS, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the over-the-air (OTA) task. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:ota-task/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the over-the-air (OTA) task configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskId" /></td>
    <td><code>string</code></td>
    <td>The id of the over-the-air (OTA) task. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_ota_task"><CopyableCode code="get_ota_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details of the over-the-air (OTA) task by its task id.</td>
</tr>
<tr>
    <td><a href="#list_ota_tasks"><CopyableCode code="list_ota_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List all of the over-the-air (OTA) tasks.</td>
</tr>
<tr>
    <td><a href="#create_ota_task"><CopyableCode code="create_ota_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-S3Url"><code>S3Url</code></a>, <a href="#parameter-OtaType"><code>OtaType</code></a></td>
    <td></td>
    <td>Create an over-the-air (OTA) task to target a device.</td>
</tr>
<tr>
    <td><a href="#update_ota_task"><CopyableCode code="update_ota_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an over-the-air (OTA) task.</td>
</tr>
<tr>
    <td><a href="#delete_ota_task"><CopyableCode code="delete_ota_task" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the over-the-air (OTA) task.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the over-the-air (OTA) task.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ota_task"
    values={[
        { label: 'get_ota_task', value: 'get_ota_task' },
        { label: 'list_ota_tasks', value: 'list_ota_tasks' }
    ]}
>
<TabItem value="get_ota_task">

Get details of the over-the-air (OTA) task by its task id.

```sql
SELECT
CreatedAt,
Description,
LastUpdatedAt,
OtaMechanism,
OtaSchedulingConfig,
OtaTargetQueryString,
OtaTaskExecutionRetryConfig,
OtaType,
Protocol,
S3Url,
Status,
Tags,
Target,
TaskArn,
TaskConfigurationId,
TaskId,
TaskProcessingDetails
FROM aws.iot_managed_integrations.ota_tasks
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ota_tasks">

List all of the over-the-air (OTA) tasks.

```sql
SELECT
CreatedAt,
LastUpdatedAt,
Status,
TaskArn,
TaskConfigurationId,
TaskId
FROM aws.iot_managed_integrations.ota_tasks
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ota_task"
    values={[
        { label: 'create_ota_task', value: 'create_ota_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ota_task">

Create an over-the-air (OTA) task to target a device.

```sql
INSERT INTO aws.iot_managed_integrations.ota_tasks (
Description,
S3Url,
Protocol,
Target,
TaskConfigurationId,
OtaMechanism,
OtaType,
OtaTargetQueryString,
ClientToken,
OtaSchedulingConfig,
OtaTaskExecutionRetryConfig,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ S3Url }}' /* required */,
'{{ Protocol }}',
'{{ Target }}',
'{{ TaskConfigurationId }}',
'{{ OtaMechanism }}',
'{{ OtaType }}' /* required */,
'{{ OtaTargetQueryString }}',
'{{ ClientToken }}',
'{{ OtaSchedulingConfig }}',
'{{ OtaTaskExecutionRetryConfig }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Description,
TaskArn,
TaskId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ota_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ota_tasks resource.
    - name: Description
      value: "{{ Description }}"
    - name: S3Url
      value: "{{ S3Url }}"
    - name: Protocol
      value: "{{ Protocol }}"
      valid_values: ['HTTP']
    - name: Target
      value:
        - "{{ Target }}"
    - name: TaskConfigurationId
      value: "{{ TaskConfigurationId }}"
    - name: OtaMechanism
      value: "{{ OtaMechanism }}"
      valid_values: ['PUSH']
    - name: OtaType
      value: "{{ OtaType }}"
      valid_values: ['ONE_TIME', 'CONTINUOUS']
    - name: OtaTargetQueryString
      value: "{{ OtaTargetQueryString }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: OtaSchedulingConfig
      description: |
        Over-the-air (OTA) task scheduling config.
      value:
        EndBehavior: "{{ EndBehavior }}"
        EndTime: "{{ EndTime }}"
        MaintenanceWindows:
          - DurationInMinutes: {{ DurationInMinutes }}
            StartTime: "{{ StartTime }}"
        StartTime: "{{ StartTime }}"
    - name: OtaTaskExecutionRetryConfig
      description: |
        Over-the-air (OTA) task retry config.
      value:
        RetryConfigCriteria:
          - FailureType: "{{ FailureType }}"
            MinNumberOfRetries: {{ MinNumberOfRetries }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ota_task"
    values={[
        { label: 'update_ota_task', value: 'update_ota_task' }
    ]}
>
<TabItem value="update_ota_task">

Update an over-the-air (OTA) task.

```sql
UPDATE aws.iot_managed_integrations.ota_tasks
SET 
Description = '{{ Description }}',
TaskConfigurationId = '{{ TaskConfigurationId }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ota_task"
    values={[
        { label: 'delete_ota_task', value: 'delete_ota_task' }
    ]}
>
<TabItem value="delete_ota_task">

Delete the over-the-air (OTA) task.

```sql
DELETE FROM aws.iot_managed_integrations.ota_tasks
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
