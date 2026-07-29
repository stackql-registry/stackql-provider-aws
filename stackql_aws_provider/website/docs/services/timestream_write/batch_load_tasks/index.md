--- 
title: batch_load_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_load_tasks
  - timestream_write
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

Creates, updates, deletes, gets or lists a <code>batch_load_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_load_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_write.batch_load_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_batch_load_task"
    values={[
        { label: 'describe_batch_load_task', value: 'describe_batch_load_task' },
        { label: 'list_batch_load_tasks', value: 'list_batch_load_tasks' }
    ]}
>
<TabItem value="describe_batch_load_task">

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
    <td>The time when the Timestream batch load task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_model_configuration" /></td>
    <td><code>object</code></td>
    <td>Data model configuration for a batch load task. This contains details about where a data model for a batch load task is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration details about the data source for a batch load task.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Timestream batch load task was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_report" /></td>
    <td><code>object</code></td>
    <td>Details about the progress of a batch load task.</td>
</tr>
<tr>
    <td><CopyableCode code="record_version" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="report_configuration" /></td>
    <td><code>object</code></td>
    <td>Report configuration for a batch load task. This contains details about where error reports are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="resumable_until" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="target_database_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="target_table_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the batch load task. (pattern: &lt;code&gt;&#91;A-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>Status of the batch load task. (CREATED, IN_PROGRESS, FAILED, SUCCEEDED, PROGRESS_STOPPED, PENDING_RESUME)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_batch_load_tasks">

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
    <td><CopyableCode code="batch_load_tasks" /></td>
    <td><code>array</code></td>
    <td>A list of batch load task details.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to specify where to start paginating. Provide the next ListBatchLoadTasksRequest.</td>
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
    <td><a href="#describe_batch_load_task"><CopyableCode code="describe_batch_load_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the batch load task, including configurations, mappings, progress, and other details. Service quotas apply. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#list_batch_load_tasks"><CopyableCode code="list_batch_load_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#create_batch_load_task"><CopyableCode code="create_batch_load_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceConfiguration"><code>DataSourceConfiguration</code></a>, <a href="#parameter-ReportConfiguration"><code>ReportConfiguration</code></a>, <a href="#parameter-TargetDatabaseName"><code>TargetDatabaseName</code></a>, <a href="#parameter-TargetTableName"><code>TargetTableName</code></a></td>
    <td></td>
    <td>Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the report will be encrypted with an S3 managed key when SSE_S3 is the option. Otherwise an error is thrown. For more information, see Amazon Web Services managed keys. Service quotas apply. For details, see code sample.</td>
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
    defaultValue="describe_batch_load_task"
    values={[
        { label: 'describe_batch_load_task', value: 'describe_batch_load_task' },
        { label: 'list_batch_load_tasks', value: 'list_batch_load_tasks' }
    ]}
>
<TabItem value="describe_batch_load_task">

Returns information about the batch load task, including configurations, mappings, progress, and other details. Service quotas apply. See code sample for details.

```sql
SELECT
creation_time,
data_model_configuration,
data_source_configuration,
error_message,
last_updated_time,
progress_report,
record_version,
report_configuration,
resumable_until,
target_database_name,
target_table_name,
task_id,
task_status
FROM aws.timestream_write.batch_load_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_batch_load_tasks">

Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See code sample for details.

```sql
SELECT
batch_load_tasks,
next_token
FROM aws.timestream_write.batch_load_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_batch_load_task"
    values={[
        { label: 'create_batch_load_task', value: 'create_batch_load_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_batch_load_task">

Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the report will be encrypted with an S3 managed key when SSE_S3 is the option. Otherwise an error is thrown. For more information, see Amazon Web Services managed keys. Service quotas apply. For details, see code sample.

```sql
INSERT INTO aws.timestream_write.batch_load_tasks (
ClientToken,
DataModelConfiguration,
DataSourceConfiguration,
ReportConfiguration,
TargetDatabaseName,
TargetTableName,
RecordVersion,
region
)
SELECT 
'{{ ClientToken }}',
'{{ DataModelConfiguration }}',
'{{ DataSourceConfiguration }}' /* required */,
'{{ ReportConfiguration }}' /* required */,
'{{ TargetDatabaseName }}' /* required */,
'{{ TargetTableName }}' /* required */,
{{ RecordVersion }},
'{{ region }}'
RETURNING
task_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: batch_load_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the batch_load_tasks resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: DataModelConfiguration
      value:
        DataModel:
          TimeColumn: "{{ TimeColumn }}"
          TimeUnit: "{{ TimeUnit }}"
          DimensionMappings:
            - SourceColumn: "{{ SourceColumn }}"
              DestinationColumn: "{{ DestinationColumn }}"
          MultiMeasureMappings:
            TargetMultiMeasureName: "{{ TargetMultiMeasureName }}"
            MultiMeasureAttributeMappings:
              - SourceColumn: "{{ SourceColumn }}"
                TargetMultiMeasureAttributeName: "{{ TargetMultiMeasureAttributeName }}"
                MeasureValueType: "{{ MeasureValueType }}"
          MixedMeasureMappings:
            - MeasureName: "{{ MeasureName }}"
              SourceColumn: "{{ SourceColumn }}"
              TargetMeasureName: "{{ TargetMeasureName }}"
              MeasureValueType: "{{ MeasureValueType }}"
              MultiMeasureAttributeMappings: "{{ MultiMeasureAttributeMappings }}"
          MeasureNameColumn: "{{ MeasureNameColumn }}"
        DataModelS3Configuration:
          BucketName: "{{ BucketName }}"
          ObjectKey: "{{ ObjectKey }}"
    - name: DataSourceConfiguration
      description: |
        Defines configuration details about the data source for a batch load task.
      value:
        DataSourceS3Configuration:
          BucketName: "{{ BucketName }}"
          ObjectKeyPrefix: "{{ ObjectKeyPrefix }}"
        CsvConfiguration:
          ColumnSeparator: "{{ ColumnSeparator }}"
          EscapeChar: "{{ EscapeChar }}"
          QuoteChar: "{{ QuoteChar }}"
          NullValue: "{{ NullValue }}"
          TrimWhiteSpace: {{ TrimWhiteSpace }}
        DataFormat: "{{ DataFormat }}"
    - name: ReportConfiguration
      description: |
        Report configuration for a batch load task. This contains details about where error reports are stored.
      value:
        ReportS3Configuration:
          BucketName: "{{ BucketName }}"
          ObjectKeyPrefix: "{{ ObjectKeyPrefix }}"
          EncryptionOption: "{{ EncryptionOption }}"
          KmsKeyId: "{{ KmsKeyId }}"
    - name: TargetDatabaseName
      value: "{{ TargetDatabaseName }}"
      description: |
        Target Timestream database for a batch load task.
    - name: TargetTableName
      value: "{{ TargetTableName }}"
      description: |
        Target Timestream table for a batch load task.
    - name: RecordVersion
      value: {{ RecordVersion }}
`}</CodeBlock>

</TabItem>
</Tabs>
