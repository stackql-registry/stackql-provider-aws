--- 
title: data_ingestion_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_ingestion_jobs
  - lookoutequipment
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

Creates, updates, deletes, gets or lists a <code>data_ingestion_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_ingestion_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.data_ingestion_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_ingestion_job"
    values={[
        { label: 'describe_data_ingestion_job', value: 'describe_data_ingestion_job' },
        { label: 'list_data_ingestion_jobs', value: 'list_data_ingestion_jobs' }
    ]}
>
<TabItem value="describe_data_ingestion_job">

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
    <td>The time at which the data ingestion job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the latest timestamp corresponding to data that was successfully ingested during this specific ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="DataQualitySummary" /></td>
    <td><code>object</code></td>
    <td>Gives statistics about a completed ingestion job. These statistics primarily relate to quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps.</td>
</tr>
<tr>
    <td><CopyableCode code="DataStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the earliest timestamp corresponding to data that was successfully ingested during this specific ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset being used in the data ingestion job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:dataset\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailedReason" /></td>
    <td><code>string</code></td>
    <td>Specifies the reason for failure when a data ingestion job has failed. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;1,5000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IngestedDataSize" /></td>
    <td><code>integer (int64)</code></td>
    <td>Indicates the size of the ingested dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="IngestedFilesSummary" /></td>
    <td><code>object</code></td>
    <td>Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="IngestionInputConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies the S3 location configuration for the data input for the data ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>Indicates the job ID of the data ingestion job. (pattern: &lt;code&gt;&#91;A-Fa-f0-9&#93;&#123;0,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role with permission to access the data source being ingested. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceDatasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source dataset from which the data used for the data ingestion job was imported from. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:dataset\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the DataIngestionJob operation. (IN_PROGRESS, SUCCESS, FAILED, IMPORT_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetail" /></td>
    <td><code>string</code></td>
    <td>Provides details about status of the ingestion job that is currently in progress. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;1,5000&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_ingestion_jobs">

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
    <td><CopyableCode code="DataIngestionJobSummaries" /></td>
    <td><code>array</code></td>
    <td>Specifies information about the specific data ingestion job, including dataset name and status.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token indicating where to continue the listing of data ingestion jobs. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_data_ingestion_job"><CopyableCode code="describe_data_ingestion_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.</td>
</tr>
<tr>
    <td><a href="#list_data_ingestion_jobs"><CopyableCode code="list_data_ingestion_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on.</td>
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
    defaultValue="describe_data_ingestion_job"
    values={[
        { label: 'describe_data_ingestion_job', value: 'describe_data_ingestion_job' },
        { label: 'list_data_ingestion_jobs', value: 'list_data_ingestion_jobs' }
    ]}
>
<TabItem value="describe_data_ingestion_job">

Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.

```sql
SELECT
CreatedAt,
DataEndTime,
DataQualitySummary,
DataStartTime,
DatasetArn,
FailedReason,
IngestedDataSize,
IngestedFilesSummary,
IngestionInputConfiguration,
JobId,
RoleArn,
SourceDatasetArn,
Status,
StatusDetail
FROM aws.lookoutequipment.data_ingestion_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_ingestion_jobs">

Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on.

```sql
SELECT
DataIngestionJobSummaries,
NextToken
FROM aws.lookoutequipment.data_ingestion_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
