--- 
title: model_explainability_job_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - model_explainability_job_definitions
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

Creates, updates, deletes, gets or lists a <code>model_explainability_job_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_explainability_job_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.model_explainability_job_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_model_explainability_job_definition"
    values={[
        { label: 'describe_model_explainability_job_definition', value: 'describe_model_explainability_job_definition' },
        { label: 'list_model_explainability_job_definitions', value: 'list_model_explainability_job_definitions' }
    ]}
>
<TabItem value="describe_model_explainability_job_definition">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the model explainability job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="JobDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model explainability job. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobDefinitionName" /></td>
    <td><code>string</code></td>
    <td>The name of the explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobResources" /></td>
    <td><code>object</code></td>
    <td>Identifies the resources to deploy for a monitoring job.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelExplainabilityAppSpecification" /></td>
    <td><code>object</code></td>
    <td>Configures the model explainability job to run a specified Docker container image.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelExplainabilityBaselineConfig" /></td>
    <td><code>object</code></td>
    <td>The baseline configuration for a model explainability job.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelExplainabilityJobInput" /></td>
    <td><code>object</code></td>
    <td>Inputs for the model explainability job.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelExplainabilityJobOutputConfig" /></td>
    <td><code>object</code></td>
    <td>The output configuration for monitoring jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkConfig" /></td>
    <td><code>object</code></td>
    <td>Networking options for a model explainability job.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StoppingCondition" /></td>
    <td><code>object</code></td>
    <td>A time limit for how long the monitoring job is allowed to run before stopping.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_explainability_job_definitions">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the monitoring job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint that the job monitors. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringJobDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitoring job. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringJobDefinitionName" /></td>
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
    <td><a href="#describe_model_explainability_job_definition"><CopyableCode code="describe_model_explainability_job_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of a model explainability job definition.</td>
</tr>
<tr>
    <td><a href="#list_model_explainability_job_definitions"><CopyableCode code="list_model_explainability_job_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists model explainability job definitions that satisfy various filters.</td>
</tr>
<tr>
    <td><a href="#create_model_explainability_job_definition"><CopyableCode code="create_model_explainability_job_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobDefinitionName"><code>JobDefinitionName</code></a>, <a href="#parameter-ModelExplainabilityAppSpecification"><code>ModelExplainabilityAppSpecification</code></a>, <a href="#parameter-ModelExplainabilityJobInput"><code>ModelExplainabilityJobInput</code></a>, <a href="#parameter-ModelExplainabilityJobOutputConfig"><code>ModelExplainabilityJobOutputConfig</code></a>, <a href="#parameter-JobResources"><code>JobResources</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates the definition for a model explainability job.</td>
</tr>
<tr>
    <td><a href="#delete_model_explainability_job_definition"><CopyableCode code="delete_model_explainability_job_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon SageMaker AI model explainability job definition.</td>
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
    defaultValue="describe_model_explainability_job_definition"
    values={[
        { label: 'describe_model_explainability_job_definition', value: 'describe_model_explainability_job_definition' },
        { label: 'list_model_explainability_job_definitions', value: 'list_model_explainability_job_definitions' }
    ]}
>
<TabItem value="describe_model_explainability_job_definition">

Returns a description of a model explainability job definition.

```sql
SELECT
CreationTime,
JobDefinitionArn,
JobDefinitionName,
JobResources,
ModelExplainabilityAppSpecification,
ModelExplainabilityBaselineConfig,
ModelExplainabilityJobInput,
ModelExplainabilityJobOutputConfig,
NetworkConfig,
RoleArn,
StoppingCondition
FROM aws.sagemaker.model_explainability_job_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_explainability_job_definitions">

Lists model explainability job definitions that satisfy various filters.

```sql
SELECT
CreationTime,
EndpointName,
MonitoringJobDefinitionArn,
MonitoringJobDefinitionName
FROM aws.sagemaker.model_explainability_job_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_explainability_job_definition"
    values={[
        { label: 'create_model_explainability_job_definition', value: 'create_model_explainability_job_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_explainability_job_definition">

Creates the definition for a model explainability job.

```sql
INSERT INTO aws.sagemaker.model_explainability_job_definitions (
JobDefinitionName,
ModelExplainabilityBaselineConfig,
ModelExplainabilityAppSpecification,
ModelExplainabilityJobInput,
ModelExplainabilityJobOutputConfig,
JobResources,
NetworkConfig,
RoleArn,
StoppingCondition,
Tags,
region
)
SELECT 
'{{ JobDefinitionName }}' /* required */,
'{{ ModelExplainabilityBaselineConfig }}',
'{{ ModelExplainabilityAppSpecification }}' /* required */,
'{{ ModelExplainabilityJobInput }}' /* required */,
'{{ ModelExplainabilityJobOutputConfig }}' /* required */,
'{{ JobResources }}' /* required */,
'{{ NetworkConfig }}',
'{{ RoleArn }}' /* required */,
'{{ StoppingCondition }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
JobDefinitionArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_explainability_job_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_explainability_job_definitions resource.
    - name: JobDefinitionName
      value: "{{ JobDefinitionName }}"
      description: |
        The name of the model explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
    - name: ModelExplainabilityBaselineConfig
      description: |
        The baseline configuration for a model explainability job.
      value:
        BaseliningJobName: "{{ BaseliningJobName }}"
        ConstraintsResource:
          S3Uri: "{{ S3Uri }}"
    - name: ModelExplainabilityAppSpecification
      description: |
        Configures the model explainability job to run a specified Docker container image.
      value:
        ImageUri: "{{ ImageUri }}"
        ConfigUri: "{{ ConfigUri }}"
        Environment: "{{ Environment }}"
    - name: ModelExplainabilityJobInput
      description: |
        Inputs for the model explainability job.
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
    - name: ModelExplainabilityJobOutputConfig
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
        Networking options for a model explainability job.
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
    defaultValue="delete_model_explainability_job_definition"
    values={[
        { label: 'delete_model_explainability_job_definition', value: 'delete_model_explainability_job_definition' }
    ]}
>
<TabItem value="delete_model_explainability_job_definition">

Deletes an Amazon SageMaker AI model explainability job definition.

```sql
DELETE FROM aws.sagemaker.model_explainability_job_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
