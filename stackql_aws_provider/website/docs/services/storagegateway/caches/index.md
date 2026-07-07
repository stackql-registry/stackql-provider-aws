--- 
title: caches
hide_title: false
hide_table_of_contents: false
keywords:
  - caches
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

Creates, updates, deletes, gets or lists a <code>caches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="caches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.caches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cache"
    values={[
        { label: 'describe_cache', value: 'describe_cache' }
    ]}
>
<TabItem value="describe_cache">

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
    <td><CopyableCode code="CacheAllocatedInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of cache in bytes allocated to a gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheDirtyPercentage" /></td>
    <td><code>number (double)</code></td>
    <td>The file share's contribution to the overall percentage of the gateway's cache that has not been persisted to Amazon Web Services. The sample is taken at the end of the reporting period.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheHitPercentage" /></td>
    <td><code>number (double)</code></td>
    <td>Percent of application read operations from the file shares that are served from cache. The sample is taken at the end of the reporting period.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheMissPercentage" /></td>
    <td><code>number (double)</code></td>
    <td>Percent of application read operations from the file shares that are not served from cache. The sample is taken at the end of the reporting period.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheUsedPercentage" /></td>
    <td><code>number (double)</code></td>
    <td>Percent use of the gateway's cache storage. This metric applies only to the gateway-cached volume setup. The sample is taken at the end of the reporting period.</td>
</tr>
<tr>
    <td><CopyableCode code="DiskIds" /></td>
    <td><code>array</code></td>
    <td>An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
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
    <td><a href="#describe_cache"><CopyableCode code="describe_cache" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.</td>
</tr>
<tr>
    <td><a href="#add_cache"><CopyableCode code="add_cache" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-DiskIds"><code>DiskIds</code></a></td>
    <td></td>
    <td>Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.</td>
</tr>
<tr>
    <td><a href="#cancel_cache_report"><CopyableCode code="cancel_cache_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CacheReportARN"><code>CacheReportARN</code></a></td>
    <td></td>
    <td>Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel operation returns an error.</td>
</tr>
<tr>
    <td><a href="#start_cache_report"><CopyableCode code="start_cache_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileShareARN"><code>FileShareARN</code></a>, <a href="#parameter-Role"><code>Role</code></a>, <a href="#parameter-LocationARN"><code>LocationARN</code></a>, <a href="#parameter-BucketRegion"><code>BucketRegion</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file share. You can use this report to identify and resolve issues if you have files failing upload from your gateway to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this report captures the files after the reset, but before they become flagged again, they will not be reported as Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the cache report. No other cache reports can currently be in-progress for the specified file share. There must be fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must specify at least one value for InclusionFilters or ExclusionFilters in the request.</td>
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
    defaultValue="describe_cache"
    values={[
        { label: 'describe_cache', value: 'describe_cache' }
    ]}
>
<TabItem value="describe_cache">

Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.

```sql
SELECT
CacheAllocatedInBytes,
CacheDirtyPercentage,
CacheHitPercentage,
CacheMissPercentage,
CacheUsedPercentage,
DiskIds,
GatewayARN
FROM aws.storagegateway.caches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_cache"
    values={[
        { label: 'add_cache', value: 'add_cache' }
    ]}
>
<TabItem value="add_cache">

Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.

```sql
UPDATE aws.storagegateway.caches
SET 
GatewayARN = '{{ GatewayARN }}',
DiskIds = '{{ DiskIds }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND DiskIds = '{{ DiskIds }}' --required
RETURNING
GatewayARN;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_cache_report"
    values={[
        { label: 'cancel_cache_report', value: 'cancel_cache_report' },
        { label: 'start_cache_report', value: 'start_cache_report' }
    ]}
>
<TabItem value="cancel_cache_report">

Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel operation returns an error.

```sql
EXEC aws.storagegateway.caches.cancel_cache_report 
@region='{{ region }}' --required 
@@json=
'{
"CacheReportARN": "{{ CacheReportARN }}"
}'
;
```
</TabItem>
<TabItem value="start_cache_report">

Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file share. You can use this report to identify and resolve issues if you have files failing upload from your gateway to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this report captures the files after the reset, but before they become flagged again, they will not be reported as Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the cache report. No other cache reports can currently be in-progress for the specified file share. There must be fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must specify at least one value for InclusionFilters or ExclusionFilters in the request.

```sql
EXEC aws.storagegateway.caches.start_cache_report 
@region='{{ region }}' --required 
@@json=
'{
"FileShareARN": "{{ FileShareARN }}", 
"Role": "{{ Role }}", 
"LocationARN": "{{ LocationARN }}", 
"BucketRegion": "{{ BucketRegion }}", 
"VPCEndpointDNSName": "{{ VPCEndpointDNSName }}", 
"InclusionFilters": "{{ InclusionFilters }}", 
"ExclusionFilters": "{{ ExclusionFilters }}", 
"ClientToken": "{{ ClientToken }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
