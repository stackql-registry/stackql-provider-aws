--- 
title: bulk_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - bulk_import_jobs
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>bulk_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bulk_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.bulk_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bulk_import_job"
    values={[
        { label: 'describe_bulk_import_job', value: 'describe_bulk_import_job' },
        { label: 'list_bulk_import_jobs', value: 'list_bulk_import_jobs' }
    ]}
>
<TabItem value="describe_bulk_import_job">

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
    <td><CopyableCode code="adaptive_ingestion" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are computed. If set to false, historical data is ingested into IoT SiteWise as is.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_files_after_import" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage.</td>
</tr>
<tr>
    <td><CopyableCode code="error_report_location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 destination where errors associated with the job creation request are saved.</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>array</code></td>
    <td>The files in the specified Amazon S3 bucket that contain your data. You can specify up to 100 files for each bulk import job. Each file supports the following size limits: Parquet files – Up to 256 MiB. Other file formats – Up to 5 GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="job_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="job_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the job was created, in Unix epoch TIME.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the job was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The unique name that helps identify the job request. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that allows IoT SiteWise to read Amazon S3 data. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the bulk import job can be one of following values: PENDING – IoT SiteWise is waiting for the current bulk import job to finish. CANCELLED – The bulk import job has been canceled. RUNNING – IoT SiteWise is processing your request to import your data from Amazon S3. COMPLETED – IoT SiteWise successfully completed your request to import data from Amazon S3. FAILED – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues. COMPLETED_WITH_FAILURES – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues. (PENDING, CANCELLED, RUNNING, COMPLETED, FAILED, COMPLETED_WITH_FAILURES)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bulk_import_jobs">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name that helps identify the job request. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the bulk import job can be one of following values: PENDING – IoT SiteWise is waiting for the current bulk import job to finish. CANCELLED – The bulk import job has been canceled. RUNNING – IoT SiteWise is processing your request to import your data from Amazon S3. COMPLETED – IoT SiteWise successfully completed your request to import data from Amazon S3. FAILED – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues. COMPLETED_WITH_FAILURES – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues. (PENDING, CANCELLED, RUNNING, COMPLETED, FAILED, COMPLETED_WITH_FAILURES)</td>
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
    <td><a href="#describe_bulk_import_job"><CopyableCode code="describe_bulk_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-workspaceName"><code>workspaceName</code></a></td>
    <td>Retrieves information about a bulk import job request. For more information, see Describe a bulk import job (CLI) in the Amazon Simple Storage Service User Guide.</td>
</tr>
<tr>
    <td><a href="#list_bulk_import_jobs"><CopyableCode code="list_bulk_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a></td>
    <td>Retrieves a paginated list of bulk import job requests. For more information, see List bulk import jobs (CLI) in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#create_bulk_import_job"><CopyableCode code="create_bulk_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-jobRoleArn"><code>jobRoleArn</code></a>, <a href="#parameter-files"><code>files</code></a>, <a href="#parameter-errorReportLocation"><code>errorReportLocation</code></a></td>
    <td></td>
    <td>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see Create a bulk import job (CLI) in the Amazon Simple Storage Service User Guide. Before you create a bulk import job that ingests data into time series outside of a workspace, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier. For more information about how to configure storage settings, see PutStorageConfiguration. This requirement doesn't apply to bulk import jobs that ingest data into a session dataset in a workspace (jobs that specify a workspaceName and datasetId). Those jobs don't use IoT SiteWise warm or cold tier storage. Bulk import is designed to store historical data to IoT SiteWise. Newly ingested data in the hot tier triggers notifications and computations. After data moves from the hot tier to the warm or cold tier based on retention settings, it does not trigger computations or notifications. Data older than 7 days does not trigger computations or notifications.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>You can use a filter to select the bulk import jobs that you want to retrieve.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-workspaceName">
    <td><CopyableCode code="workspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_bulk_import_job"
    values={[
        { label: 'describe_bulk_import_job', value: 'describe_bulk_import_job' },
        { label: 'list_bulk_import_jobs', value: 'list_bulk_import_jobs' }
    ]}
>
<TabItem value="describe_bulk_import_job">

Retrieves information about a bulk import job request. For more information, see Describe a bulk import job (CLI) in the Amazon Simple Storage Service User Guide.

```sql
SELECT
adaptive_ingestion,
dataset_id,
delete_files_after_import,
error_report_location,
files,
job_configuration,
job_creation_date,
job_id,
job_last_update_date,
job_name,
job_role_arn,
job_status,
workspace_name
FROM aws.iotsitewise.bulk_import_jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
AND workspaceName = '{{ workspaceName }}'
;
```
</TabItem>
<TabItem value="list_bulk_import_jobs">

Retrieves a paginated list of bulk import job requests. For more information, see List bulk import jobs (CLI) in the IoT SiteWise User Guide.

```sql
SELECT
id,
name,
status
FROM aws.iotsitewise.bulk_import_jobs
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND filter = '{{ filter }}'
AND workspaceName = '{{ workspaceName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bulk_import_job"
    values={[
        { label: 'create_bulk_import_job', value: 'create_bulk_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bulk_import_job">

Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see Create a bulk import job (CLI) in the Amazon Simple Storage Service User Guide. Before you create a bulk import job that ingests data into time series outside of a workspace, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier. For more information about how to configure storage settings, see PutStorageConfiguration. This requirement doesn't apply to bulk import jobs that ingest data into a session dataset in a workspace (jobs that specify a workspaceName and datasetId). Those jobs don't use IoT SiteWise warm or cold tier storage. Bulk import is designed to store historical data to IoT SiteWise. Newly ingested data in the hot tier triggers notifications and computations. After data moves from the hot tier to the warm or cold tier based on retention settings, it does not trigger computations or notifications. Data older than 7 days does not trigger computations or notifications.

```sql
INSERT INTO aws.iotsitewise.bulk_import_jobs (
jobName,
jobRoleArn,
files,
errorReportLocation,
jobConfiguration,
adaptiveIngestion,
deleteFilesAfterImport,
datasetId,
workspaceName,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ jobRoleArn }}' /* required */,
'{{ files }}' /* required */,
'{{ errorReportLocation }}' /* required */,
'{{ jobConfiguration }}',
{{ adaptiveIngestion }},
{{ deleteFilesAfterImport }},
'{{ datasetId }}',
'{{ workspaceName }}',
'{{ region }}'
RETURNING
job_id,
job_name,
job_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bulk_import_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bulk_import_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
    - name: jobRoleArn
      value: "{{ jobRoleArn }}"
    - name: files
      value:
        - bucket: "{{ bucket }}"
          key: "{{ key }}"
          versionId: "{{ versionId }}"
          alias: "{{ alias }}"
          startTime:
            timeInSeconds: {{ timeInSeconds }}
            offsetInNanos: {{ offsetInNanos }}
          fileFormat:
            csv:
              columnNames:
                - "{{ columnNames }}"
            parquet: "{{ parquet }}"
            mp4: "{{ mp4 }}"
            annotation: "{{ annotation }}"
    - name: errorReportLocation
      description: |
        The Amazon S3 destination where errors associated with the job creation request are saved.
      value:
        bucket: "{{ bucket }}"
        prefix: "{{ prefix }}"
    - name: jobConfiguration
      description: |
        Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
      value:
        fileFormat:
          csv:
            columnNames:
              - "{{ columnNames }}"
          parquet: "{{ parquet }}"
          mp4: "{{ mp4 }}"
          annotation: "{{ annotation }}"
    - name: adaptiveIngestion
      value: {{ adaptiveIngestion }}
    - name: deleteFilesAfterImport
      value: {{ deleteFilesAfterImport }}
    - name: datasetId
      value: "{{ datasetId }}"
    - name: workspaceName
      value: "{{ workspaceName }}"
`}</CodeBlock>

</TabItem>
</Tabs>
