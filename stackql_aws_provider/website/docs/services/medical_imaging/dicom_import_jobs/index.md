--- 
title: dicom_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - dicom_import_jobs
  - medical_imaging
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

Creates, updates, deletes, gets or lists a <code>dicom_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dicom_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medical_imaging.dicom_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dicom_import_job"
    values={[
        { label: 'get_dicom_import_job', value: 'get_dicom_import_job' },
        { label: 'list_dicom_import_jobs', value: 'list_dicom_import_jobs' }
    ]}
>
<TabItem value="get_dicom_import_job">

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
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that grants permissions to access medical imaging resources. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the import job was ended.</td>
</tr>
<tr>
    <td><CopyableCode code="import_configuration" /></td>
    <td><code>object</code></td>
    <td>The object containing DicomJsonMetadataImportConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="input_s3_uri" /></td>
    <td><code>string</code></td>
    <td>The input prefix path for the S3 bucket that contains the DICOM P10 files to be imported. (pattern: &lt;code&gt;s3:​//&#91;a-z0-9&#93;&#91;\.\-a-z0-9&#93;&#123;1,61&#125;&#91;a-z0-9&#93;(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The import job identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The import job name. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/#-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The filters for listing import jobs based on status. (SUBMITTED, IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The error message thrown if an import job fails. (pattern: &lt;code&gt;&#91;\w -:`&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_s3_uri" /></td>
    <td><code>string</code></td>
    <td>The output prefix of the S3 bucket to upload the results of the DICOM import job. (pattern: &lt;code&gt;s3:​//&#91;a-z0-9&#93;&#91;\.\-a-z0-9&#93;&#123;1,61&#125;&#91;a-z0-9&#93;(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the import job was submitted.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dicom_import_jobs">

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
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that grants permissions to access medical imaging resources. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when an import job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The import job identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The import job name. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/#-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The filters for listing import jobs based on status. (SUBMITTED, IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The error message thrown if an import job fails. (pattern: &lt;code&gt;&#91;\w -:`&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when an import job was submitted.</td>
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
    <td><a href="#get_dicom_import_job"><CopyableCode code="get_dicom_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the import job properties to learn more about the job or job progress. The jobStatus refers to the execution of the import job. Therefore, an import job can return a jobStatus as COMPLETED even if validation issues are discovered during the import process. If a jobStatus returns as COMPLETED, we still recommend you review the output manifests written to S3, as they provide details on the success or failure of individual P10 object imports.</td>
</tr>
<tr>
    <td><a href="#list_dicom_import_jobs"><CopyableCode code="list_dicom_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-jobStatus"><code>jobStatus</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List import jobs created for a specific data store.</td>
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
<tr id="parameter-datastore_id">
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The import job identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-jobStatus">
    <td><CopyableCode code="jobStatus" /></td>
    <td><code>string</code></td>
    <td>The filters for listing import jobs based on status.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The max results count. The upper bound is determined by load testing.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to request the list of import jobs on the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dicom_import_job"
    values={[
        { label: 'get_dicom_import_job', value: 'get_dicom_import_job' },
        { label: 'list_dicom_import_jobs', value: 'list_dicom_import_jobs' }
    ]}
>
<TabItem value="get_dicom_import_job">

Get the import job properties to learn more about the job or job progress. The jobStatus refers to the execution of the import job. Therefore, an import job can return a jobStatus as COMPLETED even if validation issues are discovered during the import process. If a jobStatus returns as COMPLETED, we still recommend you review the output manifests written to S3, as they provide details on the success or failure of individual P10 object imports.

```sql
SELECT
data_access_role_arn,
datastore_id,
ended_at,
import_configuration,
input_s3_uri,
job_id,
job_name,
job_status,
message,
output_s3_uri,
submitted_at
FROM aws.medical_imaging.dicom_import_jobs
WHERE datastore_id = '{{ datastore_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dicom_import_jobs">

List import jobs created for a specific data store.

```sql
SELECT
data_access_role_arn,
datastore_id,
ended_at,
job_id,
job_name,
job_status,
message,
submitted_at
FROM aws.medical_imaging.dicom_import_jobs
WHERE datastore_id = '{{ datastore_id }}' -- required
AND region = '{{ region }}' -- required
AND jobStatus = '{{ jobStatus }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
