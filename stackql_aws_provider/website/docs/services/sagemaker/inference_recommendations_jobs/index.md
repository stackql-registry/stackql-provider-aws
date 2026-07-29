--- 
title: inference_recommendations_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_recommendations_jobs
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

Creates, updates, deletes, gets or lists an <code>inference_recommendations_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inference_recommendations_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.inference_recommendations_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inference_recommendations_job"
    values={[
        { label: 'describe_inference_recommendations_job', value: 'describe_inference_recommendations_job' },
        { label: 'list_inference_recommendations_jobs', value: 'list_inference_recommendations_jobs' }
    ]}
>
<TabItem value="describe_inference_recommendations_job">

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
    <td><CopyableCode code="completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_performances" /></td>
    <td><code>array</code></td>
    <td>The performance results from running an Inference Recommender job on an existing endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the job fails, provides information why the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="inference_recommendations" /></td>
    <td><code>array</code></td>
    <td>The recommendations made by Inference Recommender.</td>
</tr>
<tr>
    <td><CopyableCode code="input_config" /></td>
    <td><code>object</code></td>
    <td>Returns information about the versioned model package Amazon Resource Name (ARN), the traffic pattern, and endpoint configurations you provided when you initiated the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:inference-recommendations-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_description" /></td>
    <td><code>string</code></td>
    <td>The job description that you provided when you initiated the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The job type that you provided when you initiated the job. (Default, Advanced)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role you provided when you initiated the job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job. (PENDING, IN_PROGRESS, COMPLETED, FAILED, STOPPING, STOPPED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="stopping_conditions" /></td>
    <td><code>object</code></td>
    <td>The stopping conditions that you provided when you initiated the job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_inference_recommendations_jobs">

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
    <td><CopyableCode code="completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the job fails, provides information why the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommendation job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:inference-recommendations-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_description" /></td>
    <td><code>string</code></td>
    <td>The job description.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The recommendation job type. (Default, Advanced)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the created model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;\-a-zA-Z0-9&#93;*&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a versioned model package. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-package/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sample_payload_url" /></td>
    <td><code>string</code></td>
    <td>The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). (pattern: &lt;code&gt;(https|s3):​//(&#91;^/&#93;+)/?(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job. (PENDING, IN_PROGRESS, COMPLETED, FAILED, STOPPING, STOPPED, DELETING, DELETED)</td>
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
    <td><a href="#describe_inference_recommendations_job"><CopyableCode code="describe_inference_recommendations_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the results of the Inference Recommender job. One or more recommendation jobs are returned.</td>
</tr>
<tr>
    <td><a href="#list_inference_recommendations_jobs"><CopyableCode code="list_inference_recommendations_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists recommendation jobs that satisfy various filters.</td>
</tr>
<tr>
    <td><a href="#create_inference_recommendations_job"><CopyableCode code="create_inference_recommendations_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobName"><code>JobName</code></a>, <a href="#parameter-JobType"><code>JobType</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-InputConfig"><code>InputConfig</code></a></td>
    <td></td>
    <td>Starts a recommendation job. You can create either an instance recommendation or load test job.</td>
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
    defaultValue="describe_inference_recommendations_job"
    values={[
        { label: 'describe_inference_recommendations_job', value: 'describe_inference_recommendations_job' },
        { label: 'list_inference_recommendations_jobs', value: 'list_inference_recommendations_jobs' }
    ]}
>
<TabItem value="describe_inference_recommendations_job">

Provides the results of the Inference Recommender job. One or more recommendation jobs are returned.

```sql
SELECT
completion_time,
creation_time,
endpoint_performances,
failure_reason,
inference_recommendations,
input_config,
job_arn,
job_description,
job_name,
job_type,
last_modified_time,
role_arn,
status,
stopping_conditions
FROM aws.sagemaker.inference_recommendations_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_inference_recommendations_jobs">

Lists recommendation jobs that satisfy various filters.

```sql
SELECT
completion_time,
creation_time,
failure_reason,
job_arn,
job_description,
job_name,
job_type,
last_modified_time,
model_name,
model_package_version_arn,
role_arn,
sample_payload_url,
status
FROM aws.sagemaker.inference_recommendations_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_inference_recommendations_job"
    values={[
        { label: 'create_inference_recommendations_job', value: 'create_inference_recommendations_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_inference_recommendations_job">

Starts a recommendation job. You can create either an instance recommendation or load test job.

```sql
INSERT INTO aws.sagemaker.inference_recommendations_jobs (
JobName,
JobType,
RoleArn,
InputConfig,
JobDescription,
StoppingConditions,
OutputConfig,
Tags,
region
)
SELECT 
'{{ JobName }}' /* required */,
'{{ JobType }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ InputConfig }}' /* required */,
'{{ JobDescription }}',
'{{ StoppingConditions }}',
'{{ OutputConfig }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inference_recommendations_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inference_recommendations_jobs resource.
    - name: JobName
      value: "{{ JobName }}"
      description: |
        A name for the recommendation job. The name must be unique within the Amazon Web Services Region and within your Amazon Web Services account. The job name is passed down to the resources created by the recommendation job. The names of resources (such as the model, endpoint configuration, endpoint, and compilation) that are prefixed with the job name are truncated at 40 characters.
    - name: JobType
      value: "{{ JobType }}"
      description: |
        Defines the type of recommendation job. Specify Default to initiate an instance recommendation and Advanced to initiate a load test. If left unspecified, Amazon SageMaker Inference Recommender will run an instance recommendation (DEFAULT) job.
      valid_values: ['Default', 'Advanced']
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.
    - name: InputConfig
      description: |
        Provides information about the versioned model package Amazon Resource Name (ARN), the traffic pattern, and endpoint configurations.
      value:
        ModelPackageVersionArn: "{{ ModelPackageVersionArn }}"
        ModelName: "{{ ModelName }}"
        JobDurationInSeconds: {{ JobDurationInSeconds }}
        TrafficPattern:
          TrafficType: "{{ TrafficType }}"
          Phases:
            - InitialNumberOfUsers: {{ InitialNumberOfUsers }}
              SpawnRate: {{ SpawnRate }}
              DurationInSeconds: {{ DurationInSeconds }}
          Stairs:
            DurationInSeconds: {{ DurationInSeconds }}
            NumberOfSteps: {{ NumberOfSteps }}
            UsersPerStep: {{ UsersPerStep }}
        ResourceLimit:
          MaxNumberOfTests: {{ MaxNumberOfTests }}
          MaxParallelOfTests: {{ MaxParallelOfTests }}
        EndpointConfigurations:
          - InstanceType: "{{ InstanceType }}"
            ServerlessConfig:
              MemorySizeInMB: {{ MemorySizeInMB }}
              MaxConcurrency: {{ MaxConcurrency }}
              ProvisionedConcurrency: {{ ProvisionedConcurrency }}
            InferenceSpecificationName: "{{ InferenceSpecificationName }}"
            EnvironmentParameterRanges:
              CategoricalParameterRanges:
                - Name: "{{ Name }}"
                  Value: "{{ Value }}"
        VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
        ContainerConfig:
          Domain: "{{ Domain }}"
          Task: "{{ Task }}"
          Framework: "{{ Framework }}"
          FrameworkVersion: "{{ FrameworkVersion }}"
          PayloadConfig:
            SamplePayloadUrl: "{{ SamplePayloadUrl }}"
            SupportedContentTypes:
              - "{{ SupportedContentTypes }}"
          NearestModelName: "{{ NearestModelName }}"
          SupportedInstanceTypes:
            - "{{ SupportedInstanceTypes }}"
          SupportedEndpointType: "{{ SupportedEndpointType }}"
          DataInputConfig: "{{ DataInputConfig }}"
          SupportedResponseMIMETypes:
            - "{{ SupportedResponseMIMETypes }}"
        Endpoints:
          - EndpointName: "{{ EndpointName }}"
        VpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
    - name: JobDescription
      value: "{{ JobDescription }}"
      description: |
        Description of the recommendation job.
    - name: StoppingConditions
      description: |
        A set of conditions for stopping a recommendation job. If any of the conditions are met, the job is automatically stopped.
      value:
        MaxInvocations: {{ MaxInvocations }}
        ModelLatencyThresholds:
          - Percentile: "{{ Percentile }}"
            ValueInMilliseconds: {{ ValueInMilliseconds }}
        FlatInvocations: "{{ FlatInvocations }}"
    - name: OutputConfig
      description: |
        Provides information about the output artifacts and the KMS key to use for Amazon S3 server-side encryption.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
        CompiledOutputConfig:
          S3OutputUri: "{{ S3OutputUri }}"
    - name: Tags
      description: |
        The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
