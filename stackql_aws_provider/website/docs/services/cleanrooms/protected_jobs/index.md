--- 
title: protected_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - protected_jobs
  - cleanrooms
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

Creates, updates, deletes, gets or lists a <code>protected_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protected_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.protected_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_protected_job"
    values={[
        { label: 'get_protected_job', value: 'get_protected_job' },
        { label: 'list_protected_jobs', value: 'list_protected_jobs' }
    ]}
>
<TabItem value="get_protected_job">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for a protected job instance. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_configuration" /></td>
    <td><code>object</code></td>
    <td>The compute configuration for the protected job.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the protected job.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error from the protected job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_compute_payer_account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member that pays for the job compute costs. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_parameters" /></td>
    <td><code>object</code></td>
    <td>The job parameters for the protected job.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the membership. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>he identifier for the membership. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>The result of the protected job.</td>
</tr>
<tr>
    <td><CopyableCode code="result_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains any details needed to write the job results.</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>The statistics of the protected job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the protected job. (SUBMITTED, STARTED, CANCELLED, CANCELLING, FAILED, SUCCESS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_protected_jobs">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the protected job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the protected job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="job_compute_payer_account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member that pays for the job compute costs. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the membership that initiated the protected job. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the membership that initiated the protected job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="receiver_configurations" /></td>
    <td><code>array</code></td>
    <td>The receiver configurations for the protected job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the protected job. (SUBMITTED, STARTED, CANCELLED, CANCELLING, FAILED, SUCCESS)</td>
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
    <td><a href="#get_protected_job"><CopyableCode code="get_protected_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-protected_job_identifier"><code>protected_job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns job processing metadata.</td>
</tr>
<tr>
    <td><a href="#list_protected_jobs"><CopyableCode code="list_protected_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists protected jobs, sorted by most recent job.</td>
</tr>
<tr>
    <td><a href="#update_protected_job"><CopyableCode code="update_protected_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-protected_job_identifier"><code>protected_job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetStatus"><code>targetStatus</code></a></td>
    <td></td>
    <td>Updates the processing of a currently running job.</td>
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
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for a member of a protected job instance.</td>
</tr>
<tr id="parameter-protected_job_identifier">
    <td><CopyableCode code="protected_job_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the protected job to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A filter on the status of the protected job.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_protected_job"
    values={[
        { label: 'get_protected_job', value: 'get_protected_job' },
        { label: 'list_protected_jobs', value: 'list_protected_jobs' }
    ]}
>
<TabItem value="get_protected_job">

Returns job processing metadata.

```sql
SELECT
id,
compute_configuration,
create_time,
error,
job_compute_payer_account_id,
job_parameters,
membership_arn,
membership_id,
result,
result_configuration,
statistics,
status
FROM aws.cleanrooms.protected_jobs
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND protected_job_identifier = '{{ protected_job_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_protected_jobs">

Lists protected jobs, sorted by most recent job.

```sql
SELECT
id,
create_time,
job_compute_payer_account_id,
membership_arn,
membership_id,
receiver_configurations,
status
FROM aws.cleanrooms.protected_jobs
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_protected_job"
    values={[
        { label: 'update_protected_job', value: 'update_protected_job' }
    ]}
>
<TabItem value="update_protected_job">

Updates the processing of a currently running job.

```sql
UPDATE aws.cleanrooms.protected_jobs
SET 
targetStatus = '{{ targetStatus }}'
WHERE 
membership_identifier = '{{ membership_identifier }}' --required
AND protected_job_identifier = '{{ protected_job_identifier }}' --required
AND region = '{{ region }}' --required
AND targetStatus = '{{ targetStatus }}' --required
RETURNING
protected_job;
```
</TabItem>
</Tabs>
