--- 
title: cache_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_reports
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>cache_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.cache_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cache_report"
    values={[
        { label: 'describe_cache_report', value: 'describe_cache_report' },
        { label: 'list_cache_reports', value: 'list_cache_reports' }
    ]}
>
<TabItem value="describe_cache_report">

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
    <td><CopyableCode code="cache_report_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cache report you want to describe.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_report_status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified cache report. (IN_PROGRESS, COMPLETED, CANCELED, FAILED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the gateway stopped generating the cache report.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusion_filters" /></td>
    <td><code>array</code></td>
    <td>The list of filters and parameters that determine which files are excluded from the report.</td>
</tr>
<tr>
    <td><CopyableCode code="file_share_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the file share.</td>
</tr>
<tr>
    <td><CopyableCode code="inclusion_filters" /></td>
    <td><code>array</code></td>
    <td>The list of filters and parameters that determine which files are included in the report.</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon S3 bucket location where the cache report is saved.</td>
</tr>
<tr>
    <td><CopyableCode code="report_completion_percent" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the report generation process that has been completed at time of inquiry.</td>
</tr>
<tr>
    <td><CopyableCode code="report_name" /></td>
    <td><code>string</code></td>
    <td>The file name of the completed cache report object stored in Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage. (pattern: &lt;code&gt;^arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):iam::(&#91;0-9&#93;+):role/(\S+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the gateway started generating the cache report.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The list of key/value tags associated with the report.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cache_reports">

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
    <td><CopyableCode code="cache_report_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cache report you want to describe.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_report_status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified cache report. (IN_PROGRESS, COMPLETED, CANCELED, FAILED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the gateway stopped generating the cache report.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusion_filters" /></td>
    <td><code>array</code></td>
    <td>The list of filters and parameters that determine which files are excluded from the report.</td>
</tr>
<tr>
    <td><CopyableCode code="file_share_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the file share.</td>
</tr>
<tr>
    <td><CopyableCode code="inclusion_filters" /></td>
    <td><code>array</code></td>
    <td>The list of filters and parameters that determine which files are included in the report.</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon S3 bucket location where the cache report is saved.</td>
</tr>
<tr>
    <td><CopyableCode code="report_completion_percent" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the report generation process that has been completed at time of inquiry.</td>
</tr>
<tr>
    <td><CopyableCode code="report_name" /></td>
    <td><code>string</code></td>
    <td>The file name of the completed cache report object stored in Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage. (pattern: &lt;code&gt;^arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):iam::(&#91;0-9&#93;+):role/(\S+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the gateway started generating the cache report.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The list of key/value tags associated with the report.</td>
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
    <td><a href="#describe_cache_report"><CopyableCode code="describe_cache_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified cache report, including completion status and generation progress.</td>
</tr>
<tr>
    <td><a href="#list_cache_reports"><CopyableCode code="list_cache_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of existing cache reports for all file shares associated with your Amazon Web Services account. This list includes all information provided by the DescribeCacheReport action, such as report name, status, completion progress, start time, end time, filters, and tags.</td>
</tr>
<tr>
    <td><a href="#delete_cache_report"><CopyableCode code="delete_cache_report" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport does not delete the report object from your Amazon S3 bucket.</td>
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
    defaultValue="describe_cache_report"
    values={[
        { label: 'describe_cache_report', value: 'describe_cache_report' },
        { label: 'list_cache_reports', value: 'list_cache_reports' }
    ]}
>
<TabItem value="describe_cache_report">

Returns information about the specified cache report, including completion status and generation progress.

```sql
SELECT
cache_report_arn,
cache_report_status,
end_time,
exclusion_filters,
file_share_arn,
inclusion_filters,
location_arn,
report_completion_percent,
report_name,
role,
start_time,
tags
FROM aws.storagegateway.cache_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cache_reports">

Returns a list of existing cache reports for all file shares associated with your Amazon Web Services account. This list includes all information provided by the DescribeCacheReport action, such as report name, status, completion progress, start time, end time, filters, and tags.

```sql
SELECT
cache_report_arn,
cache_report_status,
end_time,
exclusion_filters,
file_share_arn,
inclusion_filters,
location_arn,
report_completion_percent,
report_name,
role,
start_time,
tags
FROM aws.storagegateway.cache_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cache_report"
    values={[
        { label: 'delete_cache_report', value: 'delete_cache_report' }
    ]}
>
<TabItem value="delete_cache_report">

Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport does not delete the report object from your Amazon S3 bucket.

```sql
DELETE FROM aws.storagegateway.cache_reports
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
