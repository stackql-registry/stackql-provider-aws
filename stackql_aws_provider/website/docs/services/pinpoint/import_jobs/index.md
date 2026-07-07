--- 
title: import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - import_jobs
  - pinpoint
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

Creates, updates, deletes, gets or lists an <code>import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_import_job"
    values={[
        { label: 'get_import_job', value: 'get_import_job' },
        { label: 'get_import_jobs', value: 'get_import_jobs' }
    ]}
>
<TabItem value="get_import_job">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that's associated with the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedPieces" /></td>
    <td><code>integer</code></td>
    <td>The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionDate" /></td>
    <td><code>string</code></td>
    <td>The date, in ISO 8601 format, when the import job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date, in ISO 8601 format, when the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Definition" /></td>
    <td><code>object</code></td>
    <td>The resource settings that apply to the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="FailedPieces" /></td>
    <td><code>integer</code></td>
    <td>The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="Failures" /></td>
    <td><code>array</code></td>
    <td>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job. (CREATED, PREPARING_FOR_INITIALIZATION, INITIALIZING, PROCESSING, PENDING_JOB, COMPLETING, COMPLETED, FAILING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalFailures" /></td>
    <td><code>integer</code></td>
    <td>The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalPieces" /></td>
    <td><code>integer</code></td>
    <td>The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalProcessed" /></td>
    <td><code>integer</code></td>
    <td>The total number of endpoint definitions that were processed by the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The job type. This value is IMPORT for import jobs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_import_jobs">

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
    <td><CopyableCode code="Item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
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
    <td><a href="#get_import_job"><CopyableCode code="get_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-job-id"><code>job-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status and settings of a specific import job for an application.</td>
</tr>
<tr>
    <td><a href="#get_import_jobs"><CopyableCode code="get_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Retrieves information about the status and settings of all the import jobs for an application.</td>
</tr>
<tr>
    <td><a href="#create_import_job"><CopyableCode code="create_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImportJobRequest"><code>ImportJobRequest</code></a></td>
    <td></td>
    <td>Creates an import job for an application.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-job-id">
    <td><CopyableCode code="job-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The NextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_import_job"
    values={[
        { label: 'get_import_job', value: 'get_import_job' },
        { label: 'get_import_jobs', value: 'get_import_jobs' }
    ]}
>
<TabItem value="get_import_job">

Retrieves information about the status and settings of a specific import job for an application.

```sql
SELECT
ApplicationId,
CompletedPieces,
CompletionDate,
CreationDate,
Definition,
FailedPieces,
Failures,
Id,
JobStatus,
TotalFailures,
TotalPieces,
TotalProcessed,
Type
FROM aws.pinpoint.import_jobs
WHERE `application-id` = '{{ application-id }}' -- required
AND `job-id` = '{{ job-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_import_jobs">

Retrieves information about the status and settings of all the import jobs for an application.

```sql
SELECT
Item,
NextToken
FROM aws.pinpoint.import_jobs
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
AND `page-size` = '{{ page-size }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_import_job"
    values={[
        { label: 'create_import_job', value: 'create_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_import_job">

Creates an import job for an application.

```sql
INSERT INTO aws.pinpoint.import_jobs (
ImportJobRequest,
`application-id`,
region
)
SELECT 
'{{ ImportJobRequest }}' /* required */,
'{{ application-id }}',
'{{ region }}'
RETURNING
ImportJobResponse
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: import_jobs
  props:
    - name: application-id
      value: "{{ application-id }}"
      description: Required parameter for the import_jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the import_jobs resource.
    - name: ImportJobRequest
      description: |
        Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
      value:
        DefineSegment: {{ DefineSegment }}
        ExternalId: "{{ ExternalId }}"
        Format: "{{ Format }}"
        RegisterEndpoints: {{ RegisterEndpoints }}
        RoleArn: "{{ RoleArn }}"
        S3Url: "{{ S3Url }}"
        SegmentId: "{{ SegmentId }}"
        SegmentName: "{{ SegmentName }}"
`}</CodeBlock>

</TabItem>
</Tabs>
