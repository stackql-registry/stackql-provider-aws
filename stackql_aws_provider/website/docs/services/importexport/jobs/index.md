--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - importexport
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.importexport.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_jobs"
    values={[
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="list_jobs">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".</td>
</tr>
<tr>
    <td><CopyableCode code="is_canceled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the job was canceled.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier which refers to a particular job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the job to initiate is an import or export job.</td>
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
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxJobs"><code>MaxJobs</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-APIVersion"><code>APIVersion</code></a></td>
    <td>This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-JobType"><code>JobType</code></a>, <a href="#parameter-Manifest"><code>Manifest</code></a>, <a href="#parameter-ValidateOnly"><code>ValidateOnly</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ManifestAddendum"><code>ManifestAddendum</code></a>, <a href="#parameter-APIVersion"><code>APIVersion</code></a></td>
    <td>This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.</td>
</tr>
<tr>
    <td><a href="#update_job"><CopyableCode code="update_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-JobId"><code>JobId</code></a>, <a href="#parameter-Manifest"><code>Manifest</code></a>, <a href="#parameter-JobType"><code>JobType</code></a>, <a href="#parameter-ValidateOnly"><code>ValidateOnly</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-APIVersion"><code>APIVersion</code></a></td>
    <td>You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.</td>
</tr>
<tr>
    <td><a href="#cancel_job"><CopyableCode code="cancel_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-JobId"><code>JobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-APIVersion"><code>APIVersion</code></a></td>
    <td>This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.</td>
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
<tr id="parameter-JobId">
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-JobType">
    <td><CopyableCode code="JobType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-Manifest">
    <td><CopyableCode code="Manifest" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ValidateOnly">
    <td><CopyableCode code="ValidateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-APIVersion">
    <td><CopyableCode code="APIVersion" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ManifestAddendum">
    <td><CopyableCode code="ManifestAddendum" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-MaxJobs">
    <td><CopyableCode code="MaxJobs" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_jobs"
    values={[
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="list_jobs">

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

```sql
SELECT
creation_date,
is_canceled,
job_id,
job_type
FROM aws.importexport.jobs
WHERE region = '{{ region }}' -- required
AND MaxJobs = '{{ MaxJobs }}'
AND Marker = '{{ Marker }}'
AND APIVersion = '{{ APIVersion }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job"
    values={[
        { label: 'create_job', value: 'create_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job">

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

```sql
INSERT INTO aws.importexport.jobs (
JobType,
Manifest,
ValidateOnly,
region,
ManifestAddendum,
APIVersion
)
SELECT 
'{{ JobType }}',
'{{ Manifest }}',
'{{ ValidateOnly }}',
'{{ region }}',
'{{ ManifestAddendum }}',
'{{ APIVersion }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: JobType
      value: "{{ JobType }}"
      description: Required parameter for the jobs resource.
    - name: Manifest
      value: "{{ Manifest }}"
      description: Required parameter for the jobs resource.
    - name: ValidateOnly
      value: {{ ValidateOnly }}
      description: Required parameter for the jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: ManifestAddendum
      value: "{{ ManifestAddendum }}"
    - name: APIVersion
      value: "{{ APIVersion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_job"
    values={[
        { label: 'update_job', value: 'update_job' }
    ]}
>
<TabItem value="update_job">

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

```sql
UPDATE aws.importexport.jobs
SET 
-- No updatable properties
WHERE 
JobId = '{{ JobId }}' --required
AND Manifest = '{{ Manifest }}' --required
AND JobType = '{{ JobType }}' --required
AND ValidateOnly = '{{ ValidateOnly }}' --required
AND region = '{{ region }}' --required
AND APIVersion = '{{ APIVersion}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job"
    values={[
        { label: 'cancel_job', value: 'cancel_job' }
    ]}
>
<TabItem value="cancel_job">

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

```sql
EXEC aws.importexport.jobs.cancel_job 
@JobId='{{ JobId }}' --required, 
@region='{{ region }}' --required, 
@APIVersion='{{ APIVersion }}'
;
```
</TabItem>
</Tabs>
