--- 
title: import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - import_jobs
  - sesv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_import_job"
    values={[
        { label: 'get_import_job', value: 'get_import_job' },
        { label: 'list_import_jobs', value: 'list_import_jobs' }
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
    <td><CopyableCode code="completed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of when the import job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of when the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_records_count" /></td>
    <td><code>integer</code></td>
    <td>The number of records that failed processing because of invalid input or other reasons.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_info" /></td>
    <td><code>object</code></td>
    <td>The failure details about an import job.</td>
</tr>
<tr>
    <td><CopyableCode code="import_data_source" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about the data source of the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="import_destination" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about the resource destination the import job is going to target.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>A string that represents a job ID.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the import job. (CREATED, PROCESSING, COMPLETED, FAILED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="processed_records_count" /></td>
    <td><code>integer</code></td>
    <td>The current number of records processed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_import_jobs">

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
    <td><CopyableCode code="import_jobs" /></td>
    <td><code>array</code></td>
    <td>A list of the import job summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A string token indicating that there might be additional import jobs available to be listed. Copy this token to a subsequent call to ListImportJobs with the same parameters to retrieve the next page of import jobs.</td>
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
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about an import job.</td>
</tr>
<tr>
    <td><a href="#list_import_jobs"><CopyableCode code="list_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the import jobs.</td>
</tr>
<tr>
    <td><a href="#create_import_job"><CopyableCode code="create_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImportDestination"><code>ImportDestination</code></a>, <a href="#parameter-ImportDataSource"><code>ImportDataSource</code></a></td>
    <td></td>
    <td>Creates an import job for a data destination.</td>
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
    <td>The ID of the import job.</td>
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
    defaultValue="get_import_job"
    values={[
        { label: 'get_import_job', value: 'get_import_job' },
        { label: 'list_import_jobs', value: 'list_import_jobs' }
    ]}
>
<TabItem value="get_import_job">

Provides information about an import job.

```sql
SELECT
completed_timestamp,
created_timestamp,
failed_records_count,
failure_info,
import_data_source,
import_destination,
job_id,
job_status,
processed_records_count
FROM aws.sesv2.import_jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_import_jobs">

Lists all of the import jobs.

```sql
SELECT
import_jobs,
next_token
FROM aws.sesv2.import_jobs
WHERE region = '{{ region }}' -- required
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

Creates an import job for a data destination.

```sql
INSERT INTO aws.sesv2.import_jobs (
ImportDestination,
ImportDataSource,
region
)
SELECT 
'{{ ImportDestination }}' /* required */,
'{{ ImportDataSource }}' /* required */,
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: import_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the import_jobs resource.
    - name: ImportDestination
      description: |
        An object that contains details about the resource destination the import job is going to target.
      value:
        SuppressionListDestination:
          SuppressionListImportAction: "{{ SuppressionListImportAction }}"
        ContactListDestination:
          ContactListName: "{{ ContactListName }}"
          ContactListImportAction: "{{ ContactListImportAction }}"
    - name: ImportDataSource
      description: |
        An object that contains details about the data source of the import job.
      value:
        S3Url: "{{ S3Url }}"
        DataFormat: "{{ DataFormat }}"
`}</CodeBlock>

</TabItem>
</Tabs>
