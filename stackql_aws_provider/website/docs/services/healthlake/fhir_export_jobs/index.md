--- 
title: fhir_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - fhir_export_jobs
  - healthlake
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

Creates, updates, deletes, gets or lists a <code>fhir_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fhir_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.healthlake.fhir_export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fhir_export_job"
    values={[
        { label: 'describe_fhir_export_job', value: 'describe_fhir_export_job' },
        { label: 'list_fhir_export_jobs', value: 'list_fhir_export_jobs' }
    ]}
>
<TabItem value="describe_fhir_export_job">

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
    <td>The Amazon Resource Name (ARN) used during the initiation of the export job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier from which files are being exported. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the export job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The export job identifier. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The export job name. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The export job status. (SUBMITTED, QUEUED, IN_PROGRESS, COMPLETED_WITH_ERRORS, COMPLETED, FAILED, CANCEL_SUBMITTED, CANCEL_IN_PROGRESS, CANCEL_COMPLETED, CANCEL_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>An explanation of any errors that might have occurred during the export job. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>The output data configuration supplied when the export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the export job was initiated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fhir_export_jobs">

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
    <td><CopyableCode code="export_job_properties_list" /></td>
    <td><code>array</code></td>
    <td>The properties of listed FHIR export jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to identify the next page of results to return. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_fhir_export_job"><CopyableCode code="describe_fhir_export_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get FHIR export job properties.</td>
</tr>
<tr>
    <td><a href="#list_fhir_export_jobs"><CopyableCode code="list_fhir_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all FHIR export jobs associated with an account and their statuses.</td>
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
    defaultValue="describe_fhir_export_job"
    values={[
        { label: 'describe_fhir_export_job', value: 'describe_fhir_export_job' },
        { label: 'list_fhir_export_jobs', value: 'list_fhir_export_jobs' }
    ]}
>
<TabItem value="describe_fhir_export_job">

Get FHIR export job properties.

```sql
SELECT
data_access_role_arn,
datastore_id,
end_time,
job_id,
job_name,
job_status,
message,
output_data_config,
submit_time
FROM aws.healthlake.fhir_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fhir_export_jobs">

Lists all FHIR export jobs associated with an account and their statuses.

```sql
SELECT
export_job_properties_list,
next_token
FROM aws.healthlake.fhir_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
