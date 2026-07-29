--- 
title: asset_bundle_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_bundle_export_jobs
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

Creates, updates, deletes, gets or lists an <code>asset_bundle_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_bundle_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.asset_bundle_export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset_bundle_export_job"
    values={[
        { label: 'describe_asset_bundle_export_job', value: 'describe_asset_bundle_export_job' },
        { label: 'list_asset_bundle_export_jobs', value: 'list_asset_bundle_export_jobs' }
    ]}
>
<TabItem value="describe_asset_bundle_export_job">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_bundle_export_job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job. The job ID is set when you start a new job with a StartAssetBundleExportJob API call. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that the export job was executed in. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_formation_override_property_configuration" /></td>
    <td><code>object</code></td>
    <td>The CloudFormation override property configuration for the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="download_url" /></td>
    <td><code>string</code></td>
    <td>The URL to download the exported asset bundle data from. This URL is available only after the job has succeeded. This URL is valid for 5 minutes after issuance. Call DescribeAssetBundleExportJob again for a fresh URL if needed. The downloaded asset bundle is a zip file named assetbundle-&#123;jobId&#125;.qs. The file has a .qs extension. This URL can't be used in a StartAssetBundleImportJob API call and should only be used for download purposes. (pattern: &lt;code&gt;^(https|s3):​//(&#91;^/&#93;+)/?(.*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>An array of error records that describes any failures that occurred during the export job processing. Error records accumulate while the job runs. The complete set of error records is available after the job has completed and failed.</td>
</tr>
<tr>
    <td><CopyableCode code="export_format" /></td>
    <td><code>string</code></td>
    <td>The format of the exported asset bundle. A QUICKSIGHT_JSON formatted file can be used to make a StartAssetBundleImportJob API call. A CLOUDFORMATION_JSON formatted file can be used in the CloudFormation console and with the CloudFormation APIs. (CLOUDFORMATION_JSON, QUICKSIGHT_JSON)</td>
</tr>
<tr>
    <td><CopyableCode code="include_all_dependencies" /></td>
    <td><code>boolean</code></td>
    <td>The include dependencies flag.</td>
</tr>
<tr>
    <td><CopyableCode code="include_folder_members" /></td>
    <td><code>string</code></td>
    <td>A setting that determines whether folder members are included. (RECURSE, ONE_LEVEL, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="include_folder_memberships" /></td>
    <td><code>boolean</code></td>
    <td>The include folder memberships flag.</td>
</tr>
<tr>
    <td><CopyableCode code="include_permissions" /></td>
    <td><code>boolean</code></td>
    <td>The include permissions flag.</td>
</tr>
<tr>
    <td><CopyableCode code="include_tags" /></td>
    <td><code>boolean</code></td>
    <td>The include tags flag.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of a job through its queuing and execution. Poll this DescribeAssetBundleExportApi until JobStatus is either SUCCESSFUL or FAILED. (QUEUED_FOR_IMMEDIATE_EXECUTION, IN_PROGRESS, SUCCESSFUL, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arns" /></td>
    <td><code>array</code></td>
    <td>A list of resource ARNs that exported with the job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the response.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_strategy" /></td>
    <td><code>object</code></td>
    <td>The validation strategy that is used to export the analysis or dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>An array of warning records that describe the analysis or dashboard that is exported. This array includes UI errors that can be skipped during the validation process. This property only appears if StrictModeForAllResources in ValidationStrategy is set to FALSE.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_bundle_export_jobs">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_bundle_export_job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the export job. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="export_format" /></td>
    <td><code>string</code></td>
    <td>The format for the export job. (CLOUDFORMATION_JSON, QUICKSIGHT_JSON)</td>
</tr>
<tr>
    <td><CopyableCode code="include_all_dependencies" /></td>
    <td><code>boolean</code></td>
    <td>The flag that determines the inclusion of resource dependencies in the returned asset bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="include_permissions" /></td>
    <td><code>boolean</code></td>
    <td>The flag that determines the inclusion of permissions associated with each resource ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="include_tags" /></td>
    <td><code>boolean</code></td>
    <td>The flag that determines the inclusion of tags associated with each resource ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the export job. (QUEUED_FOR_IMMEDIATE_EXECUTION, IN_PROGRESS, SUCCESSFUL, FAILED)</td>
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
    <td><a href="#describe_asset_bundle_export_job"><CopyableCode code="describe_asset_bundle_export_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-asset_bundle_export_job_id"><code>asset_bundle_export_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an existing export job. Poll job descriptions after a job starts to know the status of the job. When a job succeeds, a URL is provided to download the exported assets' data from. Download URLs are valid for five minutes after they are generated. You can call the DescribeAssetBundleExportJob API for a new download URL as needed. Job descriptions are available for 14 days after the job starts.</td>
</tr>
<tr>
    <td><a href="#list_asset_bundle_export_jobs"><CopyableCode code="list_asset_bundle_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all asset bundle export jobs that have been taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, ListAssetBundleExportJobs only returns the most recent job that uses the repeated job ID.</td>
</tr>
<tr>
    <td><a href="#start_asset_bundle_export_job"><CopyableCode code="start_asset_bundle_export_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssetBundleExportJobId"><code>AssetBundleExportJobId</code></a>, <a href="#parameter-ResourceArns"><code>ResourceArns</code></a>, <a href="#parameter-ExportFormat"><code>ExportFormat</code></a></td>
    <td></td>
    <td>Starts an Asset Bundle export job. An Asset Bundle export job exports specified Amazon Quick Sight assets. You can also choose to export any asset dependencies in the same job. Export jobs run asynchronously and can be polled with a DescribeAssetBundleExportJob API call. When a job is successfully completed, a download URL that contains the exported assets is returned. The URL is valid for 5 minutes and can be refreshed with a DescribeAssetBundleExportJob API call. Each Amazon Quick Sight account can run up to 5 export jobs concurrently. The API caller must have the necessary permissions in their IAM role to access each resource before the resources can be exported.</td>
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
<tr id="parameter-asset_bundle_export_job_id">
    <td><CopyableCode code="asset_bundle_export_job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job that you want described. The job ID is set when you start a new job with a StartAssetBundleExportJob API call.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account to export assets from.</td>
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
    defaultValue="describe_asset_bundle_export_job"
    values={[
        { label: 'describe_asset_bundle_export_job', value: 'describe_asset_bundle_export_job' },
        { label: 'list_asset_bundle_export_jobs', value: 'list_asset_bundle_export_jobs' }
    ]}
>
<TabItem value="describe_asset_bundle_export_job">

Describes an existing export job. Poll job descriptions after a job starts to know the status of the job. When a job succeeds, a URL is provided to download the exported assets' data from. Download URLs are valid for five minutes after they are generated. You can call the DescribeAssetBundleExportJob API for a new download URL as needed. Job descriptions are available for 14 days after the job starts.

```sql
SELECT
arn,
asset_bundle_export_job_id,
aws_account_id,
cloud_formation_override_property_configuration,
created_time,
download_url,
errors,
export_format,
include_all_dependencies,
include_folder_members,
include_folder_memberships,
include_permissions,
include_tags,
job_status,
request_id,
resource_arns,
status,
validation_strategy,
warnings
FROM aws.quicksight.asset_bundle_export_jobs
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND asset_bundle_export_job_id = '{{ asset_bundle_export_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_asset_bundle_export_jobs">

Lists all asset bundle export jobs that have been taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, ListAssetBundleExportJobs only returns the most recent job that uses the repeated job ID.

```sql
SELECT
arn,
asset_bundle_export_job_id,
created_time,
export_format,
include_all_dependencies,
include_permissions,
include_tags,
job_status
FROM aws.quicksight.asset_bundle_export_jobs
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
    defaultValue="start_asset_bundle_export_job"
    values={[
        { label: 'start_asset_bundle_export_job', value: 'start_asset_bundle_export_job' }
    ]}
>
<TabItem value="start_asset_bundle_export_job">

Starts an Asset Bundle export job. An Asset Bundle export job exports specified Amazon Quick Sight assets. You can also choose to export any asset dependencies in the same job. Export jobs run asynchronously and can be polled with a DescribeAssetBundleExportJob API call. When a job is successfully completed, a download URL that contains the exported assets is returned. The URL is valid for 5 minutes and can be refreshed with a DescribeAssetBundleExportJob API call. Each Amazon Quick Sight account can run up to 5 export jobs concurrently. The API caller must have the necessary permissions in their IAM role to access each resource before the resources can be exported.

```sql
EXEC aws.quicksight.asset_bundle_export_jobs.start_asset_bundle_export_job 
@aws_account_id='{{ aws_account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AssetBundleExportJobId": "{{ AssetBundleExportJobId }}", 
"ResourceArns": "{{ ResourceArns }}", 
"IncludeAllDependencies": {{ IncludeAllDependencies }}, 
"ExportFormat": "{{ ExportFormat }}", 
"CloudFormationOverridePropertyConfiguration": "{{ CloudFormationOverridePropertyConfiguration }}", 
"IncludePermissions": {{ IncludePermissions }}, 
"IncludeTags": {{ IncludeTags }}, 
"ValidationStrategy": "{{ ValidationStrategy }}", 
"IncludeFolderMemberships": {{ IncludeFolderMemberships }}, 
"IncludeFolderMembers": "{{ IncludeFolderMembers }}"
}'
;
```
</TabItem>
</Tabs>
