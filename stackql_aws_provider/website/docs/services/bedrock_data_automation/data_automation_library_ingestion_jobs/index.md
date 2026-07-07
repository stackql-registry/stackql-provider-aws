--- 
title: data_automation_library_ingestion_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_automation_library_ingestion_jobs
  - bedrock_data_automation
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

Creates, updates, deletes, gets or lists a <code>data_automation_library_ingestion_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_automation_library_ingestion_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_data_automation.data_automation_library_ingestion_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_automation_library_ingestion_job"
    values={[
        { label: 'get_data_automation_library_ingestion_job', value: 'get_data_automation_library_ingestion_job' },
        { label: 'list_data_automation_library_ingestion_jobs', value: 'list_data_automation_library_ingestion_jobs' }
    ]}
>
<TabItem value="get_data_automation_library_ingestion_job">

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
    <td><CopyableCode code="completionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="entityType" /></td>
    <td><code>string</code></td>
    <td>Entity types supported in DataAutomationLibraries (VOCABULARY)</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Error message</td>
</tr>
<tr>
    <td><CopyableCode code="errorType" /></td>
    <td><code>string</code></td>
    <td>Error type</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the DataAutomationLibraryIngestionJob (pattern: &lt;code&gt;arn:aws(|-cn|-iso|-iso-&#91;a-z&#93;|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:data-automation-library-ingestion-job/&#91;a-zA-Z0-9-&#93;&#123;12,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the DataAutomationLibraryIngestionJob (IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The operation associated with DataAutomationLibraryIngestionJob (UPSERT, DELETE)</td>
</tr>
<tr>
    <td><CopyableCode code="outputConfiguration" /></td>
    <td><code>object</code></td>
    <td>Output configuration of DataAutomationLibraryIngestionJob</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_automation_library_ingestion_jobs">

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
    <td><CopyableCode code="completionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="entityType" /></td>
    <td><code>string</code></td>
    <td>Entity types supported in DataAutomationLibraries (VOCABULARY)</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the DataAutomationLibraryIngestionJob (pattern: &lt;code&gt;arn:aws(|-cn|-iso|-iso-&#91;a-z&#93;|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:data-automation-library-ingestion-job/&#91;a-zA-Z0-9-&#93;&#123;12,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobStatus" /></td>
    <td><code>string</code></td>
    <td>Status of DataAutomationLibraryIngestionJob (IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>DataAutomationLibraryIngestionJob operation type (UPSERT, DELETE)</td>
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
    <td><a href="#get_data_automation_library_ingestion_job"><CopyableCode code="get_data_automation_library_ingestion_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-library_arn"><code>library_arn</code></a>, <a href="#parameter-job_arn"><code>job_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>API used to get status of data automation library ingestion job</td>
</tr>
<tr>
    <td><a href="#list_data_automation_library_ingestion_jobs"><CopyableCode code="list_data_automation_library_ingestion_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-library_arn"><code>library_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all data automation library ingestion jobs</td>
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
<tr id="parameter-job_arn">
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the DataAutomationLibraryIngestionJob</td>
</tr>
<tr id="parameter-library_arn">
    <td><CopyableCode code="library_arn" /></td>
    <td><code>string</code></td>
    <td>ARN generated at the server side when a DataAutomationLibrary is created</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_automation_library_ingestion_job"
    values={[
        { label: 'get_data_automation_library_ingestion_job', value: 'get_data_automation_library_ingestion_job' },
        { label: 'list_data_automation_library_ingestion_jobs', value: 'list_data_automation_library_ingestion_jobs' }
    ]}
>
<TabItem value="get_data_automation_library_ingestion_job">

API used to get status of data automation library ingestion job

```sql
SELECT
completionTime,
creationTime,
entityType,
errorMessage,
errorType,
jobArn,
jobStatus,
operationType,
outputConfiguration
FROM aws.bedrock_data_automation.data_automation_library_ingestion_jobs
WHERE library_arn = '{{ library_arn }}' -- required
AND job_arn = '{{ job_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_automation_library_ingestion_jobs">

Lists all data automation library ingestion jobs

```sql
SELECT
completionTime,
creationTime,
entityType,
jobArn,
jobStatus,
operationType
FROM aws.bedrock_data_automation.data_automation_library_ingestion_jobs
WHERE library_arn = '{{ library_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
