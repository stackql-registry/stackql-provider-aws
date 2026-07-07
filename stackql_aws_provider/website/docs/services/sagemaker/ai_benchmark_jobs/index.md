--- 
title: ai_benchmark_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_benchmark_jobs
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

Creates, updates, deletes, gets or lists an <code>ai_benchmark_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_benchmark_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.ai_benchmark_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ai_benchmark_job"
    values={[
        { label: 'describe_ai_benchmark_job', value: 'describe_ai_benchmark_job' },
        { label: 'list_ai_benchmark_jobs', value: 'list_ai_benchmark_jobs' }
    ]}
>
<TabItem value="describe_ai_benchmark_job">

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
    <td><CopyableCode code="AIBenchmarkJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AI benchmark job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:ai-benchmark-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AIBenchmarkJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the AI benchmark job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AIBenchmarkJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the AI benchmark job. (InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="AIWorkloadConfigIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the AI workload configuration used for this benchmark job. (pattern: &lt;code&gt;(arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;a-z\-&#93;*/)?(&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9\-&#93;)&#123;0,62&#125;)(?&lt;!-)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BenchmarkTarget" /></td>
    <td><code>object</code></td>
    <td>The target endpoint that was benchmarked.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the benchmark job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the benchmark job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If the benchmark job failed, the reason it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkConfig" /></td>
    <td><code>object</code></td>
    <td>The network configuration for the benchmark job.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>The output configuration for the benchmark job, including the Amazon S3 output location and CloudWatch log information.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used by the benchmark job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the benchmark job started running.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the benchmark job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ai_benchmark_jobs">

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
    <td><CopyableCode code="AIBenchmarkJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the benchmark job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:ai-benchmark-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AIBenchmarkJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the benchmark job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AIBenchmarkJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the benchmark job. (InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="AIWorkloadConfigName" /></td>
    <td><code>string</code></td>
    <td>The name of the AI workload configuration used by the benchmark job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the benchmark job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the benchmark job completed.</td>
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
    <td><a href="#describe_ai_benchmark_job"><CopyableCode code="describe_ai_benchmark_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details of an AI benchmark job, including its status, configuration, target endpoint, and timing information.</td>
</tr>
<tr>
    <td><a href="#list_ai_benchmark_jobs"><CopyableCode code="list_ai_benchmark_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of AI benchmark jobs in your account. You can filter the results by name, status, and creation time, and sort the results. The response is paginated.</td>
</tr>
<tr>
    <td><a href="#create_ai_benchmark_job"><CopyableCode code="create_ai_benchmark_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AIBenchmarkJobName"><code>AIBenchmarkJobName</code></a>, <a href="#parameter-BenchmarkTarget"><code>BenchmarkTarget</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a>, <a href="#parameter-AIWorkloadConfigIdentifier"><code>AIWorkloadConfigIdentifier</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a benchmark job that runs performance benchmarks against inference infrastructure using a predefined AI workload configuration. The benchmark job measures metrics such as latency, throughput, and cost for your generative AI inference endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_ai_benchmark_job"><CopyableCode code="delete_ai_benchmark_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified AI benchmark job.</td>
</tr>
<tr>
    <td><a href="#stop_ai_benchmark_job"><CopyableCode code="stop_ai_benchmark_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AIBenchmarkJobName"><code>AIBenchmarkJobName</code></a></td>
    <td></td>
    <td>Stops a running AI benchmark job.</td>
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
    defaultValue="describe_ai_benchmark_job"
    values={[
        { label: 'describe_ai_benchmark_job', value: 'describe_ai_benchmark_job' },
        { label: 'list_ai_benchmark_jobs', value: 'list_ai_benchmark_jobs' }
    ]}
>
<TabItem value="describe_ai_benchmark_job">

Returns details of an AI benchmark job, including its status, configuration, target endpoint, and timing information.

```sql
SELECT
AIBenchmarkJobArn,
AIBenchmarkJobName,
AIBenchmarkJobStatus,
AIWorkloadConfigIdentifier,
BenchmarkTarget,
CreationTime,
EndTime,
FailureReason,
NetworkConfig,
OutputConfig,
RoleArn,
StartTime,
Tags
FROM aws.sagemaker.ai_benchmark_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ai_benchmark_jobs">

Returns a list of AI benchmark jobs in your account. You can filter the results by name, status, and creation time, and sort the results. The response is paginated.

```sql
SELECT
AIBenchmarkJobArn,
AIBenchmarkJobName,
AIBenchmarkJobStatus,
AIWorkloadConfigName,
CreationTime,
EndTime
FROM aws.sagemaker.ai_benchmark_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_benchmark_job"
    values={[
        { label: 'create_ai_benchmark_job', value: 'create_ai_benchmark_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_benchmark_job">

Creates a benchmark job that runs performance benchmarks against inference infrastructure using a predefined AI workload configuration. The benchmark job measures metrics such as latency, throughput, and cost for your generative AI inference endpoints.

```sql
INSERT INTO aws.sagemaker.ai_benchmark_jobs (
AIBenchmarkJobName,
BenchmarkTarget,
OutputConfig,
AIWorkloadConfigIdentifier,
RoleArn,
NetworkConfig,
Tags,
region
)
SELECT 
'{{ AIBenchmarkJobName }}' /* required */,
'{{ BenchmarkTarget }}' /* required */,
'{{ OutputConfig }}' /* required */,
'{{ AIWorkloadConfigIdentifier }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ NetworkConfig }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
AIBenchmarkJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_benchmark_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ai_benchmark_jobs resource.
    - name: AIBenchmarkJobName
      value: "{{ AIBenchmarkJobName }}"
      description: |
        The name of the AI benchmark job. The name must be unique within your Amazon Web Services account in the current Amazon Web Services Region.
    - name: BenchmarkTarget
      description: |
        The target endpoint to benchmark. Specify a SageMaker endpoint by providing its name or Amazon Resource Name (ARN).
      value:
        Endpoint:
          Identifier: "{{ Identifier }}"
          TargetContainerHostname: "{{ TargetContainerHostname }}"
          InferenceComponents:
            - Identifier: "{{ Identifier }}"
    - name: OutputConfig
      description: |
        The output configuration for the benchmark job, including the Amazon S3 location where benchmark results are stored.
      value:
        S3OutputLocation: "{{ S3OutputLocation }}"
    - name: AIWorkloadConfigIdentifier
      value: "{{ AIWorkloadConfigIdentifier }}"
      description: |
        The name or Amazon Resource Name (ARN) of the AI workload configuration to use for this benchmark job.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
    - name: NetworkConfig
      description: |
        The network configuration for the benchmark job, including VPC settings.
      value:
        VpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
    - name: Tags
      description: |
        The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_benchmark_job"
    values={[
        { label: 'delete_ai_benchmark_job', value: 'delete_ai_benchmark_job' }
    ]}
>
<TabItem value="delete_ai_benchmark_job">

Deletes the specified AI benchmark job.

```sql
DELETE FROM aws.sagemaker.ai_benchmark_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_ai_benchmark_job"
    values={[
        { label: 'stop_ai_benchmark_job', value: 'stop_ai_benchmark_job' }
    ]}
>
<TabItem value="stop_ai_benchmark_job">

Stops a running AI benchmark job.

```sql
EXEC aws.sagemaker.ai_benchmark_jobs.stop_ai_benchmark_job 
@region='{{ region }}' --required 
@@json=
'{
"AIBenchmarkJobName": "{{ AIBenchmarkJobName }}"
}'
;
```
</TabItem>
</Tabs>
