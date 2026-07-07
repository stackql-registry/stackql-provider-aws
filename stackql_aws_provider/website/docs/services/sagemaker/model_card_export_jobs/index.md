--- 
title: model_card_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - model_card_export_jobs
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

Creates, updates, deletes, gets or lists a <code>model_card_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_card_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.model_card_export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_model_card_export_job"
    values={[
        { label: 'describe_model_card_export_job', value: 'describe_model_card_export_job' },
        { label: 'list_model_card_export_jobs', value: 'list_model_card_export_jobs' }
    ]}
>
<TabItem value="describe_model_card_export_job">

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
    <td>The date and time that the model export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportArtifacts" /></td>
    <td><code>object</code></td>
    <td>The exported model card artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The failure reason if the model export job fails.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the model export job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardExportJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model card export job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-card/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;/export-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardExportJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the model card export job to describe. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardName" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the model card that the model export job exports. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the model card that the model export job exports.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>The export output details for the model card.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The completion status of the model card export job. InProgress: The model card export job is in progress. Completed: The model card export job is complete. Failed: The model card export job failed. To see the reason for the failure, see the FailureReason field in the response to a DescribeModelCardExportJob call. (InProgress, Completed, Failed)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_card_export_jobs">

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
    <td>The date and time that the model card export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the model card export job was last modified..</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardExportJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model card export job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-card/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;/export-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardExportJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the model card export job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardName" /></td>
    <td><code>string</code></td>
    <td>The name of the model card that the export job exports. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the model card that the export job exports.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The completion status of the model card export job. (InProgress, Completed, Failed)</td>
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
    <td><a href="#describe_model_card_export_job"><CopyableCode code="describe_model_card_export_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Amazon SageMaker Model Card export job.</td>
</tr>
<tr>
    <td><a href="#list_model_card_export_jobs"><CopyableCode code="list_model_card_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the export jobs for the Amazon SageMaker Model Card.</td>
</tr>
<tr>
    <td><a href="#create_model_card_export_job"><CopyableCode code="create_model_card_export_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelCardName"><code>ModelCardName</code></a>, <a href="#parameter-ModelCardExportJobName"><code>ModelCardExportJobName</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a></td>
    <td></td>
    <td>Creates an Amazon SageMaker Model Card export job.</td>
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
    defaultValue="describe_model_card_export_job"
    values={[
        { label: 'describe_model_card_export_job', value: 'describe_model_card_export_job' },
        { label: 'list_model_card_export_jobs', value: 'list_model_card_export_jobs' }
    ]}
>
<TabItem value="describe_model_card_export_job">

Describes an Amazon SageMaker Model Card export job.

```sql
SELECT
CreatedAt,
ExportArtifacts,
FailureReason,
LastModifiedAt,
ModelCardExportJobArn,
ModelCardExportJobName,
ModelCardName,
ModelCardVersion,
OutputConfig,
Status
FROM aws.sagemaker.model_card_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_card_export_jobs">

List the export jobs for the Amazon SageMaker Model Card.

```sql
SELECT
CreatedAt,
LastModifiedAt,
ModelCardExportJobArn,
ModelCardExportJobName,
ModelCardName,
ModelCardVersion,
Status
FROM aws.sagemaker.model_card_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_card_export_job"
    values={[
        { label: 'create_model_card_export_job', value: 'create_model_card_export_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_card_export_job">

Creates an Amazon SageMaker Model Card export job.

```sql
INSERT INTO aws.sagemaker.model_card_export_jobs (
ModelCardName,
ModelCardVersion,
ModelCardExportJobName,
OutputConfig,
region
)
SELECT 
'{{ ModelCardName }}' /* required */,
{{ ModelCardVersion }},
'{{ ModelCardExportJobName }}' /* required */,
'{{ OutputConfig }}' /* required */,
'{{ region }}'
RETURNING
ModelCardExportJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_card_export_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_card_export_jobs resource.
    - name: ModelCardName
      value: "{{ ModelCardName }}"
      description: |
        The name or Amazon Resource Name (ARN) of the model card to export.
    - name: ModelCardVersion
      value: {{ ModelCardVersion }}
      description: |
        The version of the model card to export. If a version is not provided, then the latest version of the model card is exported.
    - name: ModelCardExportJobName
      value: "{{ ModelCardExportJobName }}"
      description: |
        The name of the model card export job.
    - name: OutputConfig
      description: |
        The model card output configuration that specifies the Amazon S3 path for exporting.
      value:
        S3OutputPath: "{{ S3OutputPath }}"
`}</CodeBlock>

</TabItem>
</Tabs>
