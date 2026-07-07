--- 
title: upload_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - upload_jobs
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>upload_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upload_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.upload_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_upload_job"
    values={[
        { label: 'get_upload_job', value: 'get_upload_job' },
        { label: 'list_upload_jobs', value: 'list_upload_jobs' }
    ]}
>
<TabItem value="get_upload_job">

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
    <td><CopyableCode code="CompletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the upload job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the upload job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataExpiry" /></td>
    <td><code>integer</code></td>
    <td>The expiry duration for the profiles ingested with the upload job.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the upload job. Could be a file name to identify the upload job.</td>
</tr>
<tr>
    <td><CopyableCode code="Fields" /></td>
    <td><code>object</code></td>
    <td>The mapping between CSV Columns and Profile Object attributes for the upload job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the upload job. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResultsSummary" /></td>
    <td><code>object</code></td>
    <td>The summary of results for the upload job, including the number of updated, created, and failed records.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status describing the status for the upload job. The following are Valid Values: CREATED: The upload job has been created, but has not started processing yet. IN_PROGRESS: The upload job is currently in progress, ingesting and processing the profile data. PARTIALLY_SUCCEEDED: The upload job has successfully completed the ingestion and processing of all profile data. SUCCEEDED: The upload job has successfully completed the ingestion and processing of all profile data. FAILED: The upload job has failed to complete. STOPPED: The upload job has been manually stopped or terminated before completion. (CREATED, IN_PROGRESS, PARTIALLY_SUCCEEDED, SUCCEEDED, FAILED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the upload job. Possible reasons: VALIDATION_FAILURE: The upload job has encountered an error or issue and was unable to complete the profile data ingestion. INTERNAL_FAILURE: Failure caused from service side (VALIDATION_FAILURE, INTERNAL_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="UniqueKey" /></td>
    <td><code>string</code></td>
    <td>The unique key columns used for de-duping the keys in the upload job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_upload_jobs">

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
    <td><CopyableCode code="CompletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the upload job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the upload job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataExpiry" /></td>
    <td><code>integer</code></td>
    <td>The expiry duration for the profiles ingested with the upload job.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The name of the upload job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the upload job. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the upload job. (CREATED, IN_PROGRESS, PARTIALLY_SUCCEEDED, SUCCEEDED, FAILED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the upload job. (VALIDATION_FAILURE, INTERNAL_FAILURE)</td>
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
    <td><a href="#get_upload_job"><CopyableCode code="get_upload_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API retrieves the details of a specific upload job.</td>
</tr>
<tr>
    <td><a href="#list_upload_jobs"><CopyableCode code="list_upload_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>This API retrieves a list of upload jobs for the specified domain.</td>
</tr>
<tr>
    <td><a href="#create_upload_job"><CopyableCode code="create_upload_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a>, <a href="#parameter-UniqueKey"><code>UniqueKey</code></a></td>
    <td></td>
    <td>Creates an Upload job to ingest data for segment imports. The metadata is created for the job with the provided field mapping and unique key.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. Domain should be exists for the upload job to be created.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the upload job to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of upload jobs to return per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous call to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_upload_job"
    values={[
        { label: 'get_upload_job', value: 'get_upload_job' },
        { label: 'list_upload_jobs', value: 'list_upload_jobs' }
    ]}
>
<TabItem value="get_upload_job">

This API retrieves the details of a specific upload job.

```sql
SELECT
CompletedAt,
CreatedAt,
DataExpiry,
DisplayName,
Fields,
JobId,
ResultsSummary,
Status,
StatusReason,
UniqueKey
FROM aws.customer_profiles.upload_jobs
WHERE domain_name = '{{ domain_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_upload_jobs">

This API retrieves a list of upload jobs for the specified domain.

```sql
SELECT
CompletedAt,
CreatedAt,
DataExpiry,
DisplayName,
JobId,
Status,
StatusReason
FROM aws.customer_profiles.upload_jobs
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_upload_job"
    values={[
        { label: 'create_upload_job', value: 'create_upload_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_upload_job">

Creates an Upload job to ingest data for segment imports. The metadata is created for the job with the provided field mapping and unique key.

```sql
INSERT INTO aws.customer_profiles.upload_jobs (
DisplayName,
Fields,
UniqueKey,
DataExpiry,
domain_name,
region
)
SELECT 
'{{ DisplayName }}' /* required */,
'{{ Fields }}',
'{{ UniqueKey }}' /* required */,
{{ DataExpiry }},
'{{ domain_name }}',
'{{ region }}'
RETURNING
JobId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: upload_jobs
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the upload_jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the upload_jobs resource.
    - name: DisplayName
      value: "{{ DisplayName }}"
    - name: Fields
      value: "{{ Fields }}"
    - name: UniqueKey
      value: "{{ UniqueKey }}"
    - name: DataExpiry
      value: {{ DataExpiry }}
`}</CodeBlock>

</TabItem>
</Tabs>
