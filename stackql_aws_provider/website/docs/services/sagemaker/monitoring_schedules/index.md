--- 
title: monitoring_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_schedules
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>monitoring_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.monitoring_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_monitoring_schedule"
    values={[
        { label: 'describe_monitoring_schedule', value: 'describe_monitoring_schedule' },
        { label: 'list_monitoring_schedules', value: 'list_monitoring_schedules' }
    ]}
>
<TabItem value="describe_monitoring_schedule">

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
    <td>The time at which the monitoring job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint for the monitoring job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>A string, up to one KB in size, that contains the reason a monitoring job failed, if it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the monitoring job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_monitoring_execution_summary" /></td>
    <td><code>object</code></td>
    <td>Describes metadata on the last execution to run, if there was one.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_schedule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitoring schedule. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_schedule_config" /></td>
    <td><code>object</code></td>
    <td>The configuration object that specifies the monitoring schedule and defines the monitoring job.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_schedule_name" /></td>
    <td><code>string</code></td>
    <td>Name of the monitoring schedule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_schedule_status" /></td>
    <td><code>string</code></td>
    <td>The status of an monitoring job. (Pending, Failed, Scheduled, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_type" /></td>
    <td><code>string</code></td>
    <td>The type of the monitoring job that this schedule runs. This is one of the following values. DATA_QUALITY - The schedule is for a data quality monitoring job. MODEL_QUALITY - The schedule is for a model quality monitoring job. MODEL_BIAS - The schedule is for a bias monitoring job. MODEL_EXPLAINABILITY - The schedule is for an explainability monitoring job. (DataQuality, ModelQuality, ModelBias, ModelExplainability)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitoring_schedules">

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
    <td>The creation time of the monitoring schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint using the monitoring schedule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the monitoring schedule was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_job_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitoring job definition that the schedule is for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_schedule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitoring schedule. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_schedule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitoring schedule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_schedule_status" /></td>
    <td><code>string</code></td>
    <td>The status of the monitoring schedule. (Pending, Failed, Scheduled, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_type" /></td>
    <td><code>string</code></td>
    <td>The type of the monitoring job definition that the schedule is for. (DataQuality, ModelQuality, ModelBias, ModelExplainability)</td>
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
    <td><a href="#describe_monitoring_schedule"><CopyableCode code="describe_monitoring_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the schedule for a monitoring job.</td>
</tr>
<tr>
    <td><a href="#list_monitoring_schedules"><CopyableCode code="list_monitoring_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns list of all monitoring schedules.</td>
</tr>
<tr>
    <td><a href="#create_monitoring_schedule"><CopyableCode code="create_monitoring_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitoringScheduleName"><code>MonitoringScheduleName</code></a>, <a href="#parameter-MonitoringScheduleConfig"><code>MonitoringScheduleConfig</code></a></td>
    <td></td>
    <td>Creates a schedule that regularly starts Amazon SageMaker AI Processing Jobs to monitor the data captured for an Amazon SageMaker AI Endpoint.</td>
</tr>
<tr>
    <td><a href="#update_monitoring_schedule"><CopyableCode code="update_monitoring_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitoringScheduleName"><code>MonitoringScheduleName</code></a>, <a href="#parameter-MonitoringScheduleConfig"><code>MonitoringScheduleConfig</code></a></td>
    <td></td>
    <td>Updates a previously created schedule.</td>
</tr>
<tr>
    <td><a href="#delete_monitoring_schedule"><CopyableCode code="delete_monitoring_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule.</td>
</tr>
<tr>
    <td><a href="#start_monitoring_schedule"><CopyableCode code="start_monitoring_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitoringScheduleName"><code>MonitoringScheduleName</code></a></td>
    <td></td>
    <td>Starts a previously stopped monitoring schedule. By default, when you successfully create a new schedule, the status of a monitoring schedule is scheduled.</td>
</tr>
<tr>
    <td><a href="#stop_monitoring_schedule"><CopyableCode code="stop_monitoring_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitoringScheduleName"><code>MonitoringScheduleName</code></a></td>
    <td></td>
    <td>Stops a previously started monitoring schedule.</td>
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
    defaultValue="describe_monitoring_schedule"
    values={[
        { label: 'describe_monitoring_schedule', value: 'describe_monitoring_schedule' },
        { label: 'list_monitoring_schedules', value: 'list_monitoring_schedules' }
    ]}
>
<TabItem value="describe_monitoring_schedule">

Describes the schedule for a monitoring job.

```sql
SELECT
creation_time,
endpoint_name,
failure_reason,
last_modified_time,
last_monitoring_execution_summary,
monitoring_schedule_arn,
monitoring_schedule_config,
monitoring_schedule_name,
monitoring_schedule_status,
monitoring_type
FROM aws.sagemaker.monitoring_schedules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_monitoring_schedules">

Returns list of all monitoring schedules.

```sql
SELECT
creation_time,
endpoint_name,
last_modified_time,
monitoring_job_definition_name,
monitoring_schedule_arn,
monitoring_schedule_name,
monitoring_schedule_status,
monitoring_type
FROM aws.sagemaker.monitoring_schedules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitoring_schedule"
    values={[
        { label: 'create_monitoring_schedule', value: 'create_monitoring_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitoring_schedule">

Creates a schedule that regularly starts Amazon SageMaker AI Processing Jobs to monitor the data captured for an Amazon SageMaker AI Endpoint.

```sql
INSERT INTO aws.sagemaker.monitoring_schedules (
MonitoringScheduleName,
MonitoringScheduleConfig,
Tags,
region
)
SELECT 
'{{ MonitoringScheduleName }}' /* required */,
'{{ MonitoringScheduleConfig }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
monitoring_schedule_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitoring_schedules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the monitoring_schedules resource.
    - name: MonitoringScheduleName
      value: "{{ MonitoringScheduleName }}"
      description: |
        The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within an Amazon Web Services account.
    - name: MonitoringScheduleConfig
      description: |
        The configuration object that specifies the monitoring schedule and defines the monitoring job.
      value:
        ScheduleConfig:
          ScheduleExpression: "{{ ScheduleExpression }}"
          DataAnalysisStartTime: "{{ DataAnalysisStartTime }}"
          DataAnalysisEndTime: "{{ DataAnalysisEndTime }}"
        MonitoringJobDefinition:
          BaselineConfig:
            BaseliningJobName: "{{ BaseliningJobName }}"
            ConstraintsResource:
              S3Uri: "{{ S3Uri }}"
            StatisticsResource:
              S3Uri: "{{ S3Uri }}"
          MonitoringInputs:
            - EndpointInput:
                EndpointName: "{{ EndpointName }}"
                LocalPath: "{{ LocalPath }}"
                S3InputMode: "{{ S3InputMode }}"
                S3DataDistributionType: "{{ S3DataDistributionType }}"
                FeaturesAttribute: "{{ FeaturesAttribute }}"
                InferenceAttribute: "{{ InferenceAttribute }}"
                ProbabilityAttribute: "{{ ProbabilityAttribute }}"
                ProbabilityThresholdAttribute: {{ ProbabilityThresholdAttribute }}
                StartTimeOffset: "{{ StartTimeOffset }}"
                EndTimeOffset: "{{ EndTimeOffset }}"
                ExcludeFeaturesAttribute: "{{ ExcludeFeaturesAttribute }}"
              BatchTransformInput:
                DataCapturedDestinationS3Uri: "{{ DataCapturedDestinationS3Uri }}"
                DatasetFormat:
                  Csv: "{{ Csv }}"
                  Json: "{{ Json }}"
                  Parquet: "{{ Parquet }}"
                LocalPath: "{{ LocalPath }}"
                S3InputMode: "{{ S3InputMode }}"
                S3DataDistributionType: "{{ S3DataDistributionType }}"
                FeaturesAttribute: "{{ FeaturesAttribute }}"
                InferenceAttribute: "{{ InferenceAttribute }}"
                ProbabilityAttribute: "{{ ProbabilityAttribute }}"
                ProbabilityThresholdAttribute: {{ ProbabilityThresholdAttribute }}
                StartTimeOffset: "{{ StartTimeOffset }}"
                EndTimeOffset: "{{ EndTimeOffset }}"
                ExcludeFeaturesAttribute: "{{ ExcludeFeaturesAttribute }}"
          MonitoringOutputConfig:
            MonitoringOutputs:
              - S3Output:
                  S3Uri: "{{ S3Uri }}"
                  LocalPath: "{{ LocalPath }}"
                  S3UploadMode: "{{ S3UploadMode }}"
            KmsKeyId: "{{ KmsKeyId }}"
          MonitoringResources:
            ClusterConfig:
              InstanceCount: {{ InstanceCount }}
              InstanceType: "{{ InstanceType }}"
              VolumeSizeInGB: {{ VolumeSizeInGB }}
              VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
          MonitoringAppSpecification:
            ImageUri: "{{ ImageUri }}"
            ContainerEntrypoint:
              - "{{ ContainerEntrypoint }}"
            ContainerArguments:
              - "{{ ContainerArguments }}"
            RecordPreprocessorSourceUri: "{{ RecordPreprocessorSourceUri }}"
            PostAnalyticsProcessorSourceUri: "{{ PostAnalyticsProcessorSourceUri }}"
          StoppingCondition:
            MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
          Environment: "{{ Environment }}"
          NetworkConfig:
            EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
            EnableNetworkIsolation: {{ EnableNetworkIsolation }}
            VpcConfig:
              SecurityGroupIds:
                - "{{ SecurityGroupIds }}"
              Subnets:
                - "{{ Subnets }}"
          RoleArn: "{{ RoleArn }}"
        MonitoringJobDefinitionName: "{{ MonitoringJobDefinitionName }}"
        MonitoringType: "{{ MonitoringType }}"
    - name: Tags
      description: |
        (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitoring_schedule"
    values={[
        { label: 'update_monitoring_schedule', value: 'update_monitoring_schedule' }
    ]}
>
<TabItem value="update_monitoring_schedule">

Updates a previously created schedule.

```sql
UPDATE aws.sagemaker.monitoring_schedules
SET 
MonitoringScheduleName = '{{ MonitoringScheduleName }}',
MonitoringScheduleConfig = '{{ MonitoringScheduleConfig }}'
WHERE 
region = '{{ region }}' --required
AND MonitoringScheduleName = '{{ MonitoringScheduleName }}' --required
AND MonitoringScheduleConfig = '{{ MonitoringScheduleConfig }}' --required
RETURNING
monitoring_schedule_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitoring_schedule"
    values={[
        { label: 'delete_monitoring_schedule', value: 'delete_monitoring_schedule' }
    ]}
>
<TabItem value="delete_monitoring_schedule">

Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule.

```sql
DELETE FROM aws.sagemaker.monitoring_schedules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_monitoring_schedule"
    values={[
        { label: 'start_monitoring_schedule', value: 'start_monitoring_schedule' },
        { label: 'stop_monitoring_schedule', value: 'stop_monitoring_schedule' }
    ]}
>
<TabItem value="start_monitoring_schedule">

Starts a previously stopped monitoring schedule. By default, when you successfully create a new schedule, the status of a monitoring schedule is scheduled.

```sql
EXEC aws.sagemaker.monitoring_schedules.start_monitoring_schedule 
@region='{{ region }}' --required 
@@json=
'{
"MonitoringScheduleName": "{{ MonitoringScheduleName }}"
}'
;
```
</TabItem>
<TabItem value="stop_monitoring_schedule">

Stops a previously started monitoring schedule.

```sql
EXEC aws.sagemaker.monitoring_schedules.stop_monitoring_schedule 
@region='{{ region }}' --required 
@@json=
'{
"MonitoringScheduleName": "{{ MonitoringScheduleName }}"
}'
;
```
</TabItem>
</Tabs>
