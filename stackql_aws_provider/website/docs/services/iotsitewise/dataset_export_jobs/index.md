--- 
title: dataset_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_export_jobs
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

Creates, updates, deletes, gets or lists a <code>dataset_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.dataset_export_jobs" /></td></tr>
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
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the job completed, or null if the job is still running.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_s3_uri" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>An S3 URI identifying an object location, in the form s3:​//bucket/key.&lt;/p&gt; (pattern: &lt;code&gt;s3:​//&#91;a-z0-9&#93;&#91;a-z0-9.-&#93;&#123;1,61&#125;&#91;a-z0-9&#93;/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_report_location" /></td>
    <td><code>object</code></td>
    <td><code>&lt;p&gt;</code>Contains the location where error reports will be written on failure.&lt;/p&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="input" /></td>
    <td><code>object</code></td>
    <td><code>&lt;p&gt;</code>Input source for processing. Specify exactly one option.&lt;/p&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>The unique identifier for a dataset export job.&lt;/p&gt; (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the job started processing.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the dataset export job. (SUBMITTED, RUNNING, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace that contains the dataset export job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
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
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td><code>&lt;p&gt;</code>The timestamp when the job completed, or null if the job is still running.&lt;/p&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="destination_s3_uri" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>An S3 URI identifying an object location, in the form s3:​//bucket/key.&lt;/p&gt; (pattern: &lt;code&gt;s3:​//&#91;a-z0-9&#93;&#91;a-z0-9.-&#93;&#123;1,61&#125;&#91;a-z0-9&#93;/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>The unique identifier for the dataset export job.&lt;/p&gt; (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td><code>&lt;p&gt;</code>The timestamp when the job started processing.&lt;/p&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>The current status of the dataset export job.&lt;/p&gt; (SUBMITTED, RUNNING, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
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
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a dataset export job.</td>
</tr>
<tr>
    <td><a href="#list_dataset_export_jobs"><CopyableCode code="list_dataset_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of dataset export jobs for a workspace.</td>
</tr>
<tr>
    <td><a href="#create_dataset_export_job"><CopyableCode code="create_dataset_export_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationS3Uri"><code>destinationS3Uri</code></a>, <a href="#parameter-input"><code>input</code></a>, <a href="#parameter-errorReportLocation"><code>errorReportLocation</code></a></td>
    <td></td>
    <td>Starts an asynchronous job that exports dataset and time-series data from a workspace to Amazon S3. The operation returns a jobId immediately; poll DescribeDatasetExportJob to track progress and ListDatasetExportJobs to enumerate a workspace's jobs.</td>
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
    <td>The unique identifier for the dataset export job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace in which to create the dataset export job.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>The optional filter that returns only jobs matching the given filter value. Defaults to ALL.</td>
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

Retrieves information about a dataset export job.

```sql
SELECT
completed_at,
destination_s3_uri,
error_report_location,
input,
job_id,
started_at,
status,
workspace_name
FROM aws.iotsitewise.dataset_export_jobs
WHERE workspace_name = '{{ workspace_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dataset_export_jobs">

Retrieves a paginated list of dataset export jobs for a workspace.

```sql
SELECT
completed_at,
destination_s3_uri,
job_id,
started_at,
status
FROM aws.iotsitewise.dataset_export_jobs
WHERE workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
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

Starts an asynchronous job that exports dataset and time-series data from a workspace to Amazon S3. The operation returns a jobId immediately; poll DescribeDatasetExportJob to track progress and ListDatasetExportJobs to enumerate a workspace's jobs.

```sql
INSERT INTO aws.iotsitewise.dataset_export_jobs (
clientToken,
destinationS3Uri,
input,
errorReportLocation,
workspace_name,
region
)
SELECT 
'{{ clientToken }}',
'{{ destinationS3Uri }}' /* required */,
'{{ input }}' /* required */,
'{{ errorReportLocation }}' /* required */,
'{{ workspace_name }}',
'{{ region }}'
RETURNING
job_id,
workspace_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataset_export_jobs
  props:
    - name: workspace_name
      value: "{{ workspace_name }}"
      description: Required parameter for the dataset_export_jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dataset_export_jobs resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: destinationS3Uri
      value: "{{ destinationS3Uri }}"
      description: |
        \`<p>\`An S3 URI identifying an object location, in the form s3://bucket/key.</p>
    - name: input
      description: |
        \`<p>\`Input source for processing. Specify exactly one option.</p>
      value:
        timeseries:
          - timeSeriesId: "{{ timeSeriesId }}"
            propertyAlias: "{{ propertyAlias }}"
            trimSettings:
              startTime:
                timeInSeconds: {{ timeInSeconds }}
                offsetInNanos: {{ offsetInNanos }}
              endTime:
                timeInSeconds: {{ timeInSeconds }}
                offsetInNanos: {{ offsetInNanos }}
            formatSettings:
              framesPerSecond: {{ framesPerSecond }}
              widthInPixels: {{ widthInPixels }}
              heightInPixels: {{ heightInPixels }}
        dataset:
          datasetId: "{{ datasetId }}"
          trimSettings:
            startTime:
              timeInSeconds: {{ timeInSeconds }}
              offsetInNanos: {{ offsetInNanos }}
            endTime:
              timeInSeconds: {{ timeInSeconds }}
              offsetInNanos: {{ offsetInNanos }}
          exportDataTypes:
            - "{{ exportDataTypes }}"
    - name: errorReportLocation
      description: |
        \`<p>\`Contains the location where error reports will be written on failure.</p>
      value:
        s3Uri: "{{ s3Uri }}"
`}</CodeBlock>

</TabItem>
</Tabs>
