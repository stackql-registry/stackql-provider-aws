--- 
title: fhir_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - fhir_import_jobs
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

Creates, updates, deletes, gets or lists a <code>fhir_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fhir_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.healthlake.fhir_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fhir_import_job"
    values={[
        { label: 'describe_fhir_import_job', value: 'describe_fhir_import_job' },
        { label: 'list_fhir_import_jobs', value: 'list_fhir_import_jobs' }
    ]}
>
<TabItem value="describe_fhir_import_job">

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
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that grants AWS HealthLake access to the input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DatastoreId" /></td>
    <td><code>string</code></td>
    <td>The data store identifier. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the import job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The input data configuration supplied when the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The import job identifier. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The import job name. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobOutputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The output data configuration supplied when the export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="JobProgressReport" /></td>
    <td><code>object</code></td>
    <td>Displays the progress of the import job, including total resources scanned, total resources imported, and total size of data imported.</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The import job status. (SUBMITTED, QUEUED, IN_PROGRESS, COMPLETED_WITH_ERRORS, COMPLETED, FAILED, CANCEL_SUBMITTED, CANCEL_IN_PROGRESS, CANCEL_COMPLETED, CANCEL_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>An explanation of any errors that might have occurred during the FHIR import job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubmitTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the import job was submitted for processing.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationLevel" /></td>
    <td><code>string</code></td>
    <td>The validation level of the import job. (strict, structure-only, minimal)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fhir_import_jobs">

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
    <td><CopyableCode code="ImportJobPropertiesList" /></td>
    <td><code>array</code></td>
    <td>The properties for listed import jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
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
    <td><a href="#describe_fhir_import_job"><CopyableCode code="describe_fhir_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the import job properties to learn more about the job or job progress.</td>
</tr>
<tr>
    <td><a href="#list_fhir_import_jobs"><CopyableCode code="list_fhir_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all FHIR import jobs associated with an account and their statuses.</td>
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
    defaultValue="describe_fhir_import_job"
    values={[
        { label: 'describe_fhir_import_job', value: 'describe_fhir_import_job' },
        { label: 'list_fhir_import_jobs', value: 'list_fhir_import_jobs' }
    ]}
>
<TabItem value="describe_fhir_import_job">

Get the import job properties to learn more about the job or job progress.

```sql
SELECT
DataAccessRoleArn,
DatastoreId,
EndTime,
InputDataConfig,
JobId,
JobName,
JobOutputDataConfig,
JobProgressReport,
JobStatus,
Message,
SubmitTime,
ValidationLevel
FROM aws.healthlake.fhir_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fhir_import_jobs">

List all FHIR import jobs associated with an account and their statuses.

```sql
SELECT
ImportJobPropertiesList,
NextToken
FROM aws.healthlake.fhir_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
