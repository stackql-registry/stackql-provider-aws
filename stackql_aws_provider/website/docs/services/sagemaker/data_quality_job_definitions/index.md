--- 
title: data_quality_job_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_job_definitions
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

Creates, updates, deletes, gets or lists a <code>data_quality_job_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_quality_job_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.data_quality_job_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_quality_job_definition"
    values={[
        { label: 'describe_data_quality_job_definition', value: 'describe_data_quality_job_definition' },
        { label: 'list_data_quality_job_definitions', value: 'list_data_quality_job_definitions' }
    ]}
>
<TabItem value="describe_data_quality_job_definition">

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
    <td>The time that the data quality monitoring job definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_quality_app_specification" /></td>
    <td><code>object</code></td>
    <td>Information about the container that runs the data quality monitoring job.</td>
</tr>
<tr>
    <td><CopyableCode code="data_quality_baseline_config" /></td>
    <td><code>object</code></td>
    <td>The constraints and baselines for the data quality monitoring job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="data_quality_job_input" /></td>
    <td><code>object</code></td>
    <td>The list of inputs for the data quality monitoring job. Currently endpoints are supported.</td>
</tr>
<tr>
    <td><CopyableCode code="data_quality_job_output_config" /></td>
    <td><code>object</code></td>
    <td>The output configuration for monitoring jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="job_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data quality monitoring job definition. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the data quality monitoring job definition. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_resources" /></td>
    <td><code>object</code></td>
    <td>Identifies the resources to deploy for a monitoring job.</td>
</tr>
<tr>
    <td><CopyableCode code="network_config" /></td>
    <td><code>object</code></td>
    <td>The networking configuration for the data quality monitoring job.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stopping_condition" /></td>
    <td><code>object</code></td>
    <td>A time limit for how long the monitoring job is allowed to run before stopping.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_quality_job_definitions">

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
    <td>The time that the monitoring job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint that the job monitors. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_job_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitoring job. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_job_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitoring job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_data_quality_job_definition"><CopyableCode code="describe_data_quality_job_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a data quality monitoring job definition.</td>
</tr>
<tr>
    <td><a href="#list_data_quality_job_definitions"><CopyableCode code="list_data_quality_job_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the data quality job definitions in your account.</td>
</tr>
<tr>
    <td><a href="#create_data_quality_job_definition"><CopyableCode code="create_data_quality_job_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobDefinitionName"><code>JobDefinitionName</code></a>, <a href="#parameter-DataQualityAppSpecification"><code>DataQualityAppSpecification</code></a>, <a href="#parameter-DataQualityJobInput"><code>DataQualityJobInput</code></a>, <a href="#parameter-DataQualityJobOutputConfig"><code>DataQualityJobOutputConfig</code></a>, <a href="#parameter-JobResources"><code>JobResources</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a definition for a job that monitors data quality and drift. For information about model monitor, see Amazon SageMaker AI Model Monitor.</td>
</tr>
<tr>
    <td><a href="#delete_data_quality_job_definition"><CopyableCode code="delete_data_quality_job_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data quality monitoring job definition.</td>
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
    defaultValue="describe_data_quality_job_definition"
    values={[
        { label: 'describe_data_quality_job_definition', value: 'describe_data_quality_job_definition' },
        { label: 'list_data_quality_job_definitions', value: 'list_data_quality_job_definitions' }
    ]}
>
<TabItem value="describe_data_quality_job_definition">

Gets the details of a data quality monitoring job definition.

```sql
SELECT
creation_time,
data_quality_app_specification,
data_quality_baseline_config,
data_quality_job_input,
data_quality_job_output_config,
job_definition_arn,
job_definition_name,
job_resources,
network_config,
role_arn,
stopping_condition
FROM aws.sagemaker.data_quality_job_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_quality_job_definitions">

Lists the data quality job definitions in your account.

```sql
SELECT
creation_time,
endpoint_name,
monitoring_job_definition_arn,
monitoring_job_definition_name
FROM aws.sagemaker.data_quality_job_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_quality_job_definition"
    values={[
        { label: 'create_data_quality_job_definition', value: 'create_data_quality_job_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_quality_job_definition">

Creates a definition for a job that monitors data quality and drift. For information about model monitor, see Amazon SageMaker AI Model Monitor.

```sql
INSERT INTO aws.sagemaker.data_quality_job_definitions (
JobDefinitionName,
DataQualityBaselineConfig,
DataQualityAppSpecification,
DataQualityJobInput,
DataQualityJobOutputConfig,
JobResources,
NetworkConfig,
RoleArn,
StoppingCondition,
Tags,
region
)
SELECT 
'{{ JobDefinitionName }}' /* required */,
'{{ DataQualityBaselineConfig }}',
'{{ DataQualityAppSpecification }}' /* required */,
'{{ DataQualityJobInput }}' /* required */,
'{{ DataQualityJobOutputConfig }}' /* required */,
'{{ JobResources }}' /* required */,
'{{ NetworkConfig }}',
'{{ RoleArn }}' /* required */,
'{{ StoppingCondition }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
job_definition_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_quality_job_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_quality_job_definitions resource.
    - name: JobDefinitionName
      value: "{{ JobDefinitionName }}"
      description: |
        The name for the monitoring job definition.
    - name: DataQualityBaselineConfig
      description: |
        Configures the constraints and baselines for the monitoring job.
      value:
        BaseliningJobName: "{{ BaseliningJobName }}"
        ConstraintsResource:
          S3Uri: "{{ S3Uri }}"
        StatisticsResource:
          S3Uri: "{{ S3Uri }}"
    - name: DataQualityAppSpecification
      description: |
        Specifies the container that runs the monitoring job.
      value:
        ImageUri: "{{ ImageUri }}"
        ContainerEntrypoint:
          - "{{ ContainerEntrypoint }}"
        ContainerArguments:
          - "{{ ContainerArguments }}"
        RecordPreprocessorSourceUri: "{{ RecordPreprocessorSourceUri }}"
        PostAnalyticsProcessorSourceUri: "{{ PostAnalyticsProcessorSourceUri }}"
        Environment: "{{ Environment }}"
    - name: DataQualityJobInput
      description: |
        A list of inputs for the monitoring job. Currently endpoints are supported as monitoring inputs.
      value:
        EndpointInput:
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
            Csv:
              Header: {{ Header }}
            Json:
              Line: {{ Line }}
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
    - name: DataQualityJobOutputConfig
      description: |
        The output configuration for monitoring jobs.
      value:
        MonitoringOutputs:
          - S3Output:
              S3Uri: "{{ S3Uri }}"
              LocalPath: "{{ LocalPath }}"
              S3UploadMode: "{{ S3UploadMode }}"
        KmsKeyId: "{{ KmsKeyId }}"
    - name: JobResources
      description: |
        Identifies the resources to deploy for a monitoring job.
      value:
        ClusterConfig:
          InstanceCount: {{ InstanceCount }}
          InstanceType: "{{ InstanceType }}"
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
    - name: NetworkConfig
      description: |
        Specifies networking configuration for the monitoring job.
      value:
        EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
        EnableNetworkIsolation: {{ EnableNetworkIsolation }}
        VpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.
    - name: StoppingCondition
      description: |
        A time limit for how long the monitoring job is allowed to run before stopping.
      value:
        MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
    - name: Tags
      description: |
        (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_quality_job_definition"
    values={[
        { label: 'delete_data_quality_job_definition', value: 'delete_data_quality_job_definition' }
    ]}
>
<TabItem value="delete_data_quality_job_definition">

Deletes a data quality monitoring job definition.

```sql
DELETE FROM aws.sagemaker.data_quality_job_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
