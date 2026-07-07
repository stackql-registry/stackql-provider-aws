--- 
title: asset_bundle_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_bundle_import_jobs
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>asset_bundle_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_bundle_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.asset_bundle_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset_bundle_import_job"
    values={[
        { label: 'describe_asset_bundle_import_job', value: 'describe_asset_bundle_import_job' },
        { label: 'list_asset_bundle_import_jobs', value: 'list_asset_bundle_import_jobs' }
    ]}
>
<TabItem value="describe_asset_bundle_import_job">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="AssetBundleImportJobId" /></td>
    <td><code>string</code></td>
    <td>The ID of the job. The job ID is set when you start a new job with a StartAssetBundleImportJob API call. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssetBundleImportSource" /></td>
    <td><code>object</code></td>
    <td>The source of the asset bundle zip file that contains the data that is imported by the job.</td>
</tr>
<tr>
    <td><CopyableCode code="AwsAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account the import job was executed in. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Errors" /></td>
    <td><code>array</code></td>
    <td>An array of error records that describes any failures that occurred during the export job processing. Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureAction" /></td>
    <td><code>string</code></td>
    <td>The failure action for the import job. (DO_NOTHING, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of a job through its queuing and execution. Poll the DescribeAssetBundleImport API until JobStatus returns one of the following values: SUCCESSFUL FAILED FAILED_ROLLBACK_COMPLETED FAILED_ROLLBACK_ERROR (QUEUED_FOR_IMMEDIATE_EXECUTION, IN_PROGRESS, SUCCESSFUL, FAILED, FAILED_ROLLBACK_IN_PROGRESS, FAILED_ROLLBACK_COMPLETED, FAILED_ROLLBACK_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="OverrideParameters" /></td>
    <td><code>object</code></td>
    <td>Optional overrides that are applied to the resource configuration before import.</td>
</tr>
<tr>
    <td><CopyableCode code="OverridePermissions" /></td>
    <td><code>object</code></td>
    <td>Optional permission overrides that are applied to the resource configuration before import.</td>
</tr>
<tr>
    <td><CopyableCode code="OverrideTags" /></td>
    <td><code>object</code></td>
    <td>Optional tag overrides that are applied to the resource configuration before import.</td>
</tr>
<tr>
    <td><CopyableCode code="OverrideValidationStrategy" /></td>
    <td><code>object</code></td>
    <td>An optional validation strategy override for all analyses and dashboards to be applied to the resource configuration before import.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RollbackErrors" /></td>
    <td><code>array</code></td>
    <td>An array of error records that describes any failures that occurred while an import job was attempting a rollback. Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the response.</td>
</tr>
<tr>
    <td><CopyableCode code="Warnings" /></td>
    <td><code>array</code></td>
    <td>An array of warning records that describe all permitted errors that are encountered during the import job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_bundle_import_jobs">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="AssetBundleImportJobId" /></td>
    <td><code>string</code></td>
    <td>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureAction" /></td>
    <td><code>string</code></td>
    <td>The failure action for the import job. (DO_NOTHING, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the import job. (QUEUED_FOR_IMMEDIATE_EXECUTION, IN_PROGRESS, SUCCESSFUL, FAILED, FAILED_ROLLBACK_IN_PROGRESS, FAILED_ROLLBACK_COMPLETED, FAILED_ROLLBACK_ERROR)</td>
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
    <td><a href="#describe_asset_bundle_import_job"><CopyableCode code="describe_asset_bundle_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-asset_bundle_import_job_id"><code>asset_bundle_import_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an existing import job. Poll job descriptions after starting a job to know when it has succeeded or failed. Job descriptions are available for 14 days after job starts.</td>
</tr>
<tr>
    <td><a href="#list_asset_bundle_import_jobs"><CopyableCode code="list_asset_bundle_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all asset bundle import jobs that have taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, ListAssetBundleImportJobs only returns the most recent job that uses the repeated job ID.</td>
</tr>
<tr>
    <td><a href="#start_asset_bundle_import_job"><CopyableCode code="start_asset_bundle_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssetBundleImportJobId"><code>AssetBundleImportJobId</code></a>, <a href="#parameter-AssetBundleImportSource"><code>AssetBundleImportSource</code></a></td>
    <td></td>
    <td>Starts an Asset Bundle import job. An Asset Bundle import job imports specified Amazon Quick Sight assets into an Amazon Quick Sight account. You can also choose to import a naming prefix and specified configuration overrides. The assets that are contained in the bundle file that you provide are used to create or update a new or existing asset in your Amazon Quick Sight account. Each Amazon Quick Sight account can run up to 5 import jobs concurrently. The API caller must have the necessary "create", "describe", and "update" permissions in their IAM role to access each resource type that is contained in the bundle file before the resources can be imported.</td>
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
<tr id="parameter-asset_bundle_import_job_id">
    <td><CopyableCode code="asset_bundle_import_job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job. The job ID is set when you start a new job with a StartAssetBundleImportJob API call.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account to import assets into.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_asset_bundle_import_job"
    values={[
        { label: 'describe_asset_bundle_import_job', value: 'describe_asset_bundle_import_job' },
        { label: 'list_asset_bundle_import_jobs', value: 'list_asset_bundle_import_jobs' }
    ]}
>
<TabItem value="describe_asset_bundle_import_job">

Describes an existing import job. Poll job descriptions after starting a job to know when it has succeeded or failed. Job descriptions are available for 14 days after job starts.

```sql
SELECT
Arn,
AssetBundleImportJobId,
AssetBundleImportSource,
AwsAccountId,
CreatedTime,
Errors,
FailureAction,
JobStatus,
OverrideParameters,
OverridePermissions,
OverrideTags,
OverrideValidationStrategy,
RequestId,
RollbackErrors,
Status,
Warnings
FROM aws.quicksight.asset_bundle_import_jobs
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND asset_bundle_import_job_id = '{{ asset_bundle_import_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_asset_bundle_import_jobs">

Lists all asset bundle import jobs that have taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, ListAssetBundleImportJobs only returns the most recent job that uses the repeated job ID.

```sql
SELECT
Arn,
AssetBundleImportJobId,
CreatedTime,
FailureAction,
JobStatus
FROM aws.quicksight.asset_bundle_import_jobs
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_asset_bundle_import_job"
    values={[
        { label: 'start_asset_bundle_import_job', value: 'start_asset_bundle_import_job' }
    ]}
>
<TabItem value="start_asset_bundle_import_job">

Starts an Asset Bundle import job. An Asset Bundle import job imports specified Amazon Quick Sight assets into an Amazon Quick Sight account. You can also choose to import a naming prefix and specified configuration overrides. The assets that are contained in the bundle file that you provide are used to create or update a new or existing asset in your Amazon Quick Sight account. Each Amazon Quick Sight account can run up to 5 import jobs concurrently. The API caller must have the necessary "create", "describe", and "update" permissions in their IAM role to access each resource type that is contained in the bundle file before the resources can be imported.

```sql
EXEC aws.quicksight.asset_bundle_import_jobs.start_asset_bundle_import_job 
@aws_account_id='{{ aws_account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AssetBundleImportJobId": "{{ AssetBundleImportJobId }}", 
"AssetBundleImportSource": "{{ AssetBundleImportSource }}", 
"OverrideParameters": "{{ OverrideParameters }}", 
"FailureAction": "{{ FailureAction }}", 
"OverridePermissions": "{{ OverridePermissions }}", 
"OverrideTags": "{{ OverrideTags }}", 
"OverrideValidationStrategy": "{{ OverrideValidationStrategy }}"
}'
;
```
</TabItem>
</Tabs>
