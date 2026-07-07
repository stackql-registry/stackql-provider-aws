--- 
title: dataset_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_import_jobs
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

Creates, updates, deletes, gets or lists a <code>dataset_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.dataset_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset_import_job"
    values={[
        { label: 'describe_dataset_import_job', value: 'describe_dataset_import_job' },
        { label: 'list_dataset_import_jobs', value: 'list_dataset_import_jobs' }
    ]}
>
<TabItem value="describe_dataset_import_job">

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
    <td>The creation date and time (in Unix time) of the dataset import job.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>Describes the data source that contains the data to upload to a dataset, or the list of records to delete from Amazon Personalize.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset that receives the imported data. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetImportJobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset import job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If a dataset import job fails, provides the reason why.</td>
</tr>
<tr>
    <td><CopyableCode code="importMode" /></td>
    <td><code>string</code></td>
    <td>The import mode used by the dataset import job to import new records. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of the import job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) the dataset was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="publishAttributionMetricsToS3" /></td>
    <td><code>boolean</code></td>
    <td>Whether the job publishes metrics to Amazon S3 for a metric attribution.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that has permissions to read from the Amazon S3 data source. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset import job. A dataset import job can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dataset_import_jobs">

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
    <td>The date and time (in Unix time) that the dataset import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetImportJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset import job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If a dataset import job fails, the reason behind the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="importMode" /></td>
    <td><code>string</code></td>
    <td>The import mode the dataset import job used to update the data in the dataset. For more information see Updating existing bulk data. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset import job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the dataset import job status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset import job. A dataset import job can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</td>
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
    <td><a href="#describe_dataset_import_job"><CopyableCode code="describe_dataset_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the dataset import job created by CreateDatasetImportJob, including the import job status.</td>
</tr>
<tr>
    <td><a href="#list_dataset_import_jobs"><CopyableCode code="list_dataset_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see CreateDatasetImportJob. For more information on datasets, see CreateDataset.</td>
</tr>
<tr>
    <td><a href="#create_dataset_import_job"><CopyableCode code="create_dataset_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-datasetArn"><code>datasetArn</code></a>, <a href="#parameter-dataSource"><code>dataSource</code></a></td>
    <td></td>
    <td>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see Giving Amazon Personalize Access to Amazon S3 Resources. If you already created a recommender or deployed a custom solution version with a campaign, how new bulk records influence recommendations depends on the domain use case or recipe that you use. For more information, see How new data influences real-time recommendations. By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation. Status A dataset import job can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED To get the status of the import job, call DescribeDatasetImportJob, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed. Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset. Related APIs ListDatasetImportJobs DescribeDatasetImportJob</td>
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
    defaultValue="describe_dataset_import_job"
    values={[
        { label: 'describe_dataset_import_job', value: 'describe_dataset_import_job' },
        { label: 'list_dataset_import_jobs', value: 'list_dataset_import_jobs' }
    ]}
>
<TabItem value="describe_dataset_import_job">

Describes the dataset import job created by CreateDatasetImportJob, including the import job status.

```sql
SELECT
creationDateTime,
dataSource,
datasetArn,
datasetImportJobArn,
failureReason,
importMode,
jobName,
lastUpdatedDateTime,
publishAttributionMetricsToS3,
roleArn,
status
FROM aws.personalize.dataset_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dataset_import_jobs">

Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see CreateDatasetImportJob. For more information on datasets, see CreateDataset.

```sql
SELECT
creationDateTime,
datasetImportJobArn,
failureReason,
importMode,
jobName,
lastUpdatedDateTime,
status
FROM aws.personalize.dataset_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset_import_job"
    values={[
        { label: 'create_dataset_import_job', value: 'create_dataset_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset_import_job">

Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see Giving Amazon Personalize Access to Amazon S3 Resources. If you already created a recommender or deployed a custom solution version with a campaign, how new bulk records influence recommendations depends on the domain use case or recipe that you use. For more information, see How new data influences real-time recommendations. By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation. Status A dataset import job can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED To get the status of the import job, call DescribeDatasetImportJob, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed. Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset. Related APIs ListDatasetImportJobs DescribeDatasetImportJob

```sql
INSERT INTO aws.personalize.dataset_import_jobs (
jobName,
datasetArn,
dataSource,
roleArn,
tags,
importMode,
publishAttributionMetricsToS3,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ datasetArn }}' /* required */,
'{{ dataSource }}' /* required */,
'{{ roleArn }}',
'{{ tags }}',
'{{ importMode }}',
{{ publishAttributionMetricsToS3 }},
'{{ region }}'
RETURNING
datasetImportJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataset_import_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dataset_import_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
      description: |
        The name for the dataset import job.
    - name: datasetArn
      value: "{{ datasetArn }}"
      description: |
        The ARN of the dataset that receives the imported data.
    - name: dataSource
      description: |
        The Amazon S3 bucket that contains the training data to import.
      value:
        dataLocation: "{{ dataLocation }}"
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
    - name: tags
      description: |
        A list of tags to apply to the dataset import job.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
    - name: importMode
      value: "{{ importMode }}"
      description: |
        Specify how to add the new records to an existing dataset. The default import mode is FULL. If you haven't imported bulk records into the dataset previously, you can only specify FULL. Specify FULL to overwrite all existing bulk data in your dataset. Data you imported individually is not replaced. Specify INCREMENTAL to append the new records to the existing data in your dataset. Amazon Personalize replaces any record with the same ID with the new one.
      valid_values: ['FULL', 'INCREMENTAL']
    - name: publishAttributionMetricsToS3
      value: {{ publishAttributionMetricsToS3 }}
      description: |
        If you created a metric attribution, specify whether to publish metrics for this import job to Amazon S3
`}</CodeBlock>

</TabItem>
</Tabs>
