--- 
title: edge_packaging_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - edge_packaging_jobs
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

Creates, updates, deletes, gets or lists an <code>edge_packaging_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="edge_packaging_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.edge_packaging_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_edge_packaging_job"
    values={[
        { label: 'describe_edge_packaging_job', value: 'describe_edge_packaging_job' },
        { label: 'list_edge_packaging_jobs', value: 'list_edge_packaging_jobs' }
    ]}
>
<TabItem value="describe_edge_packaging_job">

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
    <td><CopyableCode code="CompilationJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the SageMaker Neo compilation job that is used to locate model artifacts that are being packaged. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the packaging job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgePackagingJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the edge packaging job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z\-&#93;*:\d&#123;12&#125;:edge-packaging-job/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgePackagingJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the edge packaging job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgePackagingJobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the packaging job. (STARTING, INPROGRESS, COMPLETED, FAILED, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgePackagingJobStatusMessage" /></td>
    <td><code>string</code></td>
    <td>Returns a message describing the job status and error messages.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelArtifact" /></td>
    <td><code>string</code></td>
    <td>The Amazon Simple Storage (S3) URI where model artifacts ares stored. (pattern: &lt;code&gt;(https|s3):​//(&#91;^/&#93;+)/?(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelName" /></td>
    <td><code>string</code></td>
    <td>The name of the model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelSignature" /></td>
    <td><code>string</code></td>
    <td>The signature document of files in the model artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\ \_\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>The output configuration for the edge packaging job.</td>
</tr>
<tr>
    <td><CopyableCode code="PresetDeploymentOutput" /></td>
    <td><code>object</code></td>
    <td>The output of a SageMaker Edge Manager deployable resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceKey" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key to use when encrypting the EBS volume the job run on. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to download and upload the model, and to contact Neo. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_edge_packaging_jobs">

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
    <td><CopyableCode code="CompilationJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the SageMaker Neo compilation job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgePackagingJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the edge packaging job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z\-&#93;*:\d&#123;12&#125;:edge-packaging-job/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgePackagingJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the edge packaging job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgePackagingJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the edge packaging job. (STARTING, INPROGRESS, COMPLETED, FAILED, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the edge packaging job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelName" /></td>
    <td><code>string</code></td>
    <td>The name of the model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\ \_\.&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_edge_packaging_job"><CopyableCode code="describe_edge_packaging_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A description of edge packaging jobs.</td>
</tr>
<tr>
    <td><a href="#list_edge_packaging_jobs"><CopyableCode code="list_edge_packaging_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of edge packaging jobs.</td>
</tr>
<tr>
    <td><a href="#create_edge_packaging_job"><CopyableCode code="create_edge_packaging_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EdgePackagingJobName"><code>EdgePackagingJobName</code></a>, <a href="#parameter-CompilationJobName"><code>CompilationJobName</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a>, <a href="#parameter-ModelVersion"><code>ModelVersion</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a></td>
    <td></td>
    <td>Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.</td>
</tr>
<tr>
    <td><a href="#stop_edge_packaging_job"><CopyableCode code="stop_edge_packaging_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EdgePackagingJobName"><code>EdgePackagingJobName</code></a></td>
    <td></td>
    <td>Request to stop an edge packaging job.</td>
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
    defaultValue="describe_edge_packaging_job"
    values={[
        { label: 'describe_edge_packaging_job', value: 'describe_edge_packaging_job' },
        { label: 'list_edge_packaging_jobs', value: 'list_edge_packaging_jobs' }
    ]}
>
<TabItem value="describe_edge_packaging_job">

A description of edge packaging jobs.

```sql
SELECT
CompilationJobName,
CreationTime,
EdgePackagingJobArn,
EdgePackagingJobName,
EdgePackagingJobStatus,
EdgePackagingJobStatusMessage,
LastModifiedTime,
ModelArtifact,
ModelName,
ModelSignature,
ModelVersion,
OutputConfig,
PresetDeploymentOutput,
ResourceKey,
RoleArn
FROM aws.sagemaker.edge_packaging_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_edge_packaging_jobs">

Returns a list of edge packaging jobs.

```sql
SELECT
CompilationJobName,
CreationTime,
EdgePackagingJobArn,
EdgePackagingJobName,
EdgePackagingJobStatus,
LastModifiedTime,
ModelName,
ModelVersion
FROM aws.sagemaker.edge_packaging_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_edge_packaging_job"
    values={[
        { label: 'create_edge_packaging_job', value: 'create_edge_packaging_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_edge_packaging_job">

Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.

```sql
INSERT INTO aws.sagemaker.edge_packaging_jobs (
EdgePackagingJobName,
CompilationJobName,
ModelName,
ModelVersion,
RoleArn,
OutputConfig,
ResourceKey,
Tags,
region
)
SELECT 
'{{ EdgePackagingJobName }}' /* required */,
'{{ CompilationJobName }}' /* required */,
'{{ ModelName }}' /* required */,
'{{ ModelVersion }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ OutputConfig }}' /* required */,
'{{ ResourceKey }}',
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: edge_packaging_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the edge_packaging_jobs resource.
    - name: EdgePackagingJobName
      value: "{{ EdgePackagingJobName }}"
      description: |
        The name of the edge packaging job.
    - name: CompilationJobName
      value: "{{ CompilationJobName }}"
      description: |
        The name of the SageMaker Neo compilation job that will be used to locate model artifacts for packaging.
    - name: ModelName
      value: "{{ ModelName }}"
      description: |
        The name of the model.
    - name: ModelVersion
      value: "{{ ModelVersion }}"
      description: |
        The version of the model.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to download and upload the model, and to contact SageMaker Neo.
    - name: OutputConfig
      description: |
        Provides information about the output location for the packaged model.
      value:
        S3OutputLocation: "{{ S3OutputLocation }}"
        KmsKeyId: "{{ KmsKeyId }}"
        PresetDeploymentType: "{{ PresetDeploymentType }}"
        PresetDeploymentConfig: "{{ PresetDeploymentConfig }}"
    - name: ResourceKey
      value: "{{ ResourceKey }}"
      description: |
        The Amazon Web Services KMS key to use when encrypting the EBS volume the edge packaging job runs on.
    - name: Tags
      description: |
        Creates tags for the packaging job.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_edge_packaging_job"
    values={[
        { label: 'stop_edge_packaging_job', value: 'stop_edge_packaging_job' }
    ]}
>
<TabItem value="stop_edge_packaging_job">

Request to stop an edge packaging job.

```sql
EXEC aws.sagemaker.edge_packaging_jobs.stop_edge_packaging_job 
@region='{{ region }}' --required 
@@json=
'{
"EdgePackagingJobName": "{{ EdgePackagingJobName }}"
}'
;
```
</TabItem>
</Tabs>
