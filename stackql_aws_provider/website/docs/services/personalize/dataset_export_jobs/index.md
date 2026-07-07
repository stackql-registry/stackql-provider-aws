--- 
title: dataset_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_export_jobs
  - personalize
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

Creates, updates, deletes, gets or lists a <code>dataset_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.dataset_export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset_export_job"
    values={[
        { label: 'describe_dataset_export_job', value: 'describe_dataset_export_job' },
        { label: 'list_dataset_export_jobs', value: 'list_dataset_export_jobs' }
    ]}
>
<TabItem value="describe_dataset_export_job">

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
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time (in Unix time) of the dataset export job.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset to export. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetExportJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset export job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If a dataset export job fails, provides the reason why.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionMode" /></td>
    <td><code>string</code></td>
    <td>The data to export, based on how you imported the data. You can choose to export BULK data that you imported using a dataset import job, PUT data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or ALL for both types. The default value is PUT. (BULK, PUT, ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of the export job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobOutput" /></td>
    <td><code>object</code></td>
    <td>The path to the Amazon S3 bucket where the job's output is stored. For example: s3:​//bucket-name/folder-name/</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) the status of the dataset export job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset export job. A dataset export job can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dataset_export_jobs">

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
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the dataset export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetExportJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset export job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If a dataset export job fails, the reason behind the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset export job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the dataset export job status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset export job. A dataset export job can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</td>
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
    <td><a href="#describe_dataset_export_job"><CopyableCode code="describe_dataset_export_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the dataset export job created by CreateDatasetExportJob, including the export job status.</td>
</tr>
<tr>
    <td><a href="#list_dataset_export_jobs"><CopyableCode code="list_dataset_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see CreateDatasetExportJob. For more information on datasets, see CreateDataset.</td>
</tr>
<tr>
    <td><a href="#create_dataset_export_job"><CopyableCode code="create_dataset_export_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-datasetArn"><code>datasetArn</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-jobOutput"><code>jobOutput</code></a></td>
    <td></td>
    <td>Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize PutObject permissions for your Amazon S3 bucket. For information, see Exporting a dataset in the Amazon Personalize developer guide. Status A dataset export job can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED To get the status of the export job, call DescribeDatasetExportJob, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed.</td>
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
    defaultValue="describe_dataset_export_job"
    values={[
        { label: 'describe_dataset_export_job', value: 'describe_dataset_export_job' },
        { label: 'list_dataset_export_jobs', value: 'list_dataset_export_jobs' }
    ]}
>
<TabItem value="describe_dataset_export_job">

Describes the dataset export job created by CreateDatasetExportJob, including the export job status.

```sql
SELECT
creationDateTime,
datasetArn,
datasetExportJobArn,
failureReason,
ingestionMode,
jobName,
jobOutput,
lastUpdatedDateTime,
roleArn,
status
FROM aws.personalize.dataset_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dataset_export_jobs">

Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see CreateDatasetExportJob. For more information on datasets, see CreateDataset.

```sql
SELECT
creationDateTime,
datasetExportJobArn,
failureReason,
jobName,
lastUpdatedDateTime,
status
FROM aws.personalize.dataset_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset_export_job"
    values={[
        { label: 'create_dataset_export_job', value: 'create_dataset_export_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset_export_job">

Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize PutObject permissions for your Amazon S3 bucket. For information, see Exporting a dataset in the Amazon Personalize developer guide. Status A dataset export job can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED To get the status of the export job, call DescribeDatasetExportJob, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed.

```sql
INSERT INTO aws.personalize.dataset_export_jobs (
jobName,
datasetArn,
ingestionMode,
roleArn,
jobOutput,
tags,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ datasetArn }}' /* required */,
'{{ ingestionMode }}',
'{{ roleArn }}' /* required */,
'{{ jobOutput }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
datasetExportJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataset_export_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dataset_export_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
      description: |
        The name for the dataset export job.
    - name: datasetArn
      value: "{{ datasetArn }}"
      description: |
        The Amazon Resource Name (ARN) of the dataset that contains the data to export.
    - name: ingestionMode
      value: "{{ ingestionMode }}"
      description: |
        The data to export, based on how you imported the data. You can choose to export only BULK data that you imported using a dataset import job, only PUT data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or ALL for both types. The default value is PUT.
      valid_values: ['BULK', 'PUT', 'ALL']
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket.
    - name: jobOutput
      description: |
        The path to the Amazon S3 bucket where the job's output is stored.
      value:
        s3DataDestination:
          path: "{{ path }}"
          kmsKeyArn: "{{ kmsKeyArn }}"
    - name: tags
      description: |
        A list of tags to apply to the dataset export job.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>
