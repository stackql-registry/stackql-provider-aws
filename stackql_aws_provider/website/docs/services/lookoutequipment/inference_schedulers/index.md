--- 
title: inference_schedulers
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_schedulers
  - lookoutequipment
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

Creates, updates, deletes, gets or lists an <code>inference_schedulers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inference_schedulers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.inference_schedulers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inference_scheduler"
    values={[
        { label: 'describe_inference_scheduler', value: 'describe_inference_scheduler' },
        { label: 'list_inference_schedulers', value: 'list_inference_schedulers' }
    ]}
>
<TabItem value="describe_inference_scheduler">

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
    <td>Specifies the time at which the inference scheduler was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_delay_offset_in_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if you select an offset delay time of five minutes, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data.</td>
</tr>
<tr>
    <td><CopyableCode code="data_input_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.</td>
</tr>
<tr>
    <td><CopyableCode code="data_output_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies information for the output results for the inference scheduler, including the output S3 location.</td>
</tr>
<tr>
    <td><CopyableCode code="data_upload_frequency" /></td>
    <td><code>string</code></td>
    <td>Specifies how often data is uploaded to the source S3 bucket for the input data. This value is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes. (PT5M, PT10M, PT15M, PT30M, PT1H)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_scheduler_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the inference scheduler being described. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:inference-scheduler\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_scheduler_name" /></td>
    <td><code>string</code></td>
    <td>The name of the inference scheduler being described. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_inference_result" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the latest execution for the inference scheduler was Anomalous (anomalous events found) or Normal (no anomalous events found). (ANOMALOUS, NORMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the machine learning model of the inference scheduler being described. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the machine learning model of the inference scheduler being described. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a role with permission to access the data source for the inference scheduler being described. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:kms:&#91;a-z0-9\-&#93;*:\d&#123;12&#125;:&#91;\w\-\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the inference scheduler. (PENDING, RUNNING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the time at which the inference scheduler was last updated, if it was.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_inference_schedulers">

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
    <td><CopyableCode code="inference_scheduler_summaries" /></td>
    <td><code>array</code></td>
    <td>Provides information about the specified inference scheduler, including data upload frequency, model name and ARN, and status.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token indicating where to continue the listing of inference schedulers. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_inference_scheduler"><CopyableCode code="describe_inference_scheduler" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specifies information about the inference scheduler being used, including name, model, status, and associated metadata</td>
</tr>
<tr>
    <td><a href="#list_inference_schedulers"><CopyableCode code="list_inference_schedulers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of all inference schedulers currently available for your account.</td>
</tr>
<tr>
    <td><a href="#create_inference_scheduler"><CopyableCode code="create_inference_scheduler" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a>, <a href="#parameter-InferenceSchedulerName"><code>InferenceSchedulerName</code></a>, <a href="#parameter-DataUploadFrequency"><code>DataUploadFrequency</code></a>, <a href="#parameter-DataInputConfiguration"><code>DataInputConfiguration</code></a>, <a href="#parameter-DataOutputConfiguration"><code>DataOutputConfiguration</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data.</td>
</tr>
<tr>
    <td><a href="#update_inference_scheduler"><CopyableCode code="update_inference_scheduler" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InferenceSchedulerName"><code>InferenceSchedulerName</code></a></td>
    <td></td>
    <td>Updates an inference scheduler.</td>
</tr>
<tr>
    <td><a href="#delete_inference_scheduler"><CopyableCode code="delete_inference_scheduler" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an inference scheduler that has been set up. Prior inference results will not be deleted.</td>
</tr>
<tr>
    <td><a href="#start_inference_scheduler"><CopyableCode code="start_inference_scheduler" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InferenceSchedulerName"><code>InferenceSchedulerName</code></a></td>
    <td></td>
    <td>Starts an inference scheduler.</td>
</tr>
<tr>
    <td><a href="#stop_inference_scheduler"><CopyableCode code="stop_inference_scheduler" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InferenceSchedulerName"><code>InferenceSchedulerName</code></a></td>
    <td></td>
    <td>Stops an inference scheduler.</td>
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
    defaultValue="describe_inference_scheduler"
    values={[
        { label: 'describe_inference_scheduler', value: 'describe_inference_scheduler' },
        { label: 'list_inference_schedulers', value: 'list_inference_schedulers' }
    ]}
>
<TabItem value="describe_inference_scheduler">

Specifies information about the inference scheduler being used, including name, model, status, and associated metadata

```sql
SELECT
created_at,
data_delay_offset_in_minutes,
data_input_configuration,
data_output_configuration,
data_upload_frequency,
inference_scheduler_arn,
inference_scheduler_name,
latest_inference_result,
model_arn,
model_name,
role_arn,
server_side_kms_key_id,
status,
updated_at
FROM aws.lookoutequipment.inference_schedulers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_inference_schedulers">

Retrieves a list of all inference schedulers currently available for your account.

```sql
SELECT
inference_scheduler_summaries,
next_token
FROM aws.lookoutequipment.inference_schedulers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_inference_scheduler"
    values={[
        { label: 'create_inference_scheduler', value: 'create_inference_scheduler' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_inference_scheduler">

Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data.

```sql
INSERT INTO aws.lookoutequipment.inference_schedulers (
ModelName,
InferenceSchedulerName,
DataDelayOffsetInMinutes,
DataUploadFrequency,
DataInputConfiguration,
DataOutputConfiguration,
RoleArn,
ServerSideKmsKeyId,
ClientToken,
Tags,
region
)
SELECT 
'{{ ModelName }}' /* required */,
'{{ InferenceSchedulerName }}' /* required */,
{{ DataDelayOffsetInMinutes }},
'{{ DataUploadFrequency }}' /* required */,
'{{ DataInputConfiguration }}' /* required */,
'{{ DataOutputConfiguration }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ ServerSideKmsKeyId }}',
'{{ ClientToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
inference_scheduler_arn,
inference_scheduler_name,
model_quality,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inference_schedulers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inference_schedulers resource.
    - name: ModelName
      value: "{{ ModelName }}"
      description: |
        The name of the previously trained machine learning model being used to create the inference scheduler.
    - name: InferenceSchedulerName
      value: "{{ InferenceSchedulerName }}"
      description: |
        The name of the inference scheduler being created.
    - name: DataDelayOffsetInMinutes
      value: {{ DataDelayOffsetInMinutes }}
      description: |
        The interval (in minutes) of planned delay at the start of each inference segment. For example, if inference is set to run every ten minutes, the delay is set to five minutes and the time is 09:08. The inference scheduler will wake up at the configured interval (which, without a delay configured, would be 09:10) plus the additional five minute delay time (so 09:15) to check your Amazon S3 bucket. The delay provides a buffer for you to upload data at the same frequency, so that you don't have to stop and restart the scheduler when uploading new data. For more information, see Understanding the inference process.
    - name: DataUploadFrequency
      value: "{{ DataUploadFrequency }}"
      description: |
        How often data is uploaded to the source Amazon S3 bucket for the input data. The value chosen is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment runs inference on your data. For more information, see Understanding the inference process.
      valid_values: ['PT5M', 'PT10M', 'PT15M', 'PT30M', 'PT1H']
    - name: DataInputConfiguration
      description: |
        Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
      value:
        S3InputConfiguration:
          Bucket: "{{ Bucket }}"
          Prefix: "{{ Prefix }}"
        InputTimeZoneOffset: "{{ InputTimeZoneOffset }}"
        InferenceInputNameConfiguration:
          TimestampFormat: "{{ TimestampFormat }}"
          ComponentTimestampDelimiter: "{{ ComponentTimestampDelimiter }}"
    - name: DataOutputConfiguration
      description: |
        Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.
      value:
        S3OutputConfiguration:
          Bucket: "{{ Bucket }}"
          Prefix: "{{ Prefix }}"
        KmsKeyId: "{{ KmsKeyId }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
    - name: ServerSideKmsKeyId
      value: "{{ ServerSideKmsKeyId }}"
      description: |
        Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
    - name: Tags
      description: |
        Any tags associated with the inference scheduler.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_inference_scheduler"
    values={[
        { label: 'update_inference_scheduler', value: 'update_inference_scheduler' }
    ]}
>
<TabItem value="update_inference_scheduler">

Updates an inference scheduler.

```sql
UPDATE aws.lookoutequipment.inference_schedulers
SET 
InferenceSchedulerName = '{{ InferenceSchedulerName }}',
DataDelayOffsetInMinutes = {{ DataDelayOffsetInMinutes }},
DataUploadFrequency = '{{ DataUploadFrequency }}',
DataInputConfiguration = '{{ DataInputConfiguration }}',
DataOutputConfiguration = '{{ DataOutputConfiguration }}',
RoleArn = '{{ RoleArn }}'
WHERE 
region = '{{ region }}' --required
AND InferenceSchedulerName = '{{ InferenceSchedulerName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_inference_scheduler"
    values={[
        { label: 'delete_inference_scheduler', value: 'delete_inference_scheduler' }
    ]}
>
<TabItem value="delete_inference_scheduler">

Deletes an inference scheduler that has been set up. Prior inference results will not be deleted.

```sql
DELETE FROM aws.lookoutequipment.inference_schedulers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_inference_scheduler"
    values={[
        { label: 'start_inference_scheduler', value: 'start_inference_scheduler' },
        { label: 'stop_inference_scheduler', value: 'stop_inference_scheduler' }
    ]}
>
<TabItem value="start_inference_scheduler">

Starts an inference scheduler.

```sql
EXEC aws.lookoutequipment.inference_schedulers.start_inference_scheduler 
@region='{{ region }}' --required 
@@json=
'{
"InferenceSchedulerName": "{{ InferenceSchedulerName }}"
}'
;
```
</TabItem>
<TabItem value="stop_inference_scheduler">

Stops an inference scheduler.

```sql
EXEC aws.lookoutequipment.inference_schedulers.stop_inference_scheduler 
@region='{{ region }}' --required 
@@json=
'{
"InferenceSchedulerName": "{{ InferenceSchedulerName }}"
}'
;
```
</TabItem>
</Tabs>
