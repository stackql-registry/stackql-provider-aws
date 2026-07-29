--- 
title: bucket_analytics_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_analytics_configurations
  - s3
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

Creates, updates, deletes, gets or lists a <code>bucket_analytics_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_analytics_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_analytics_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_analytics_configuration"
    values={[
        { label: 'get_bucket_analytics_configuration', value: 'get_bucket_analytics_configuration' },
        { label: 'list_bucket_analytics_configurations', value: 'list_bucket_analytics_configurations' }
    ]}
>
<TabItem value="get_bucket_analytics_configuration">

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
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that identifies the analytics configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class_analysis" /></td>
    <td><code>string</code></td>
    <td>Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bucket_analytics_configurations">

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
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that identifies the analytics configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class_analysis" /></td>
    <td><code>string</code></td>
    <td>Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.</td>
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
    <td><a href="#get_bucket_analytics_configuration"><CopyableCode code="get_bucket_analytics_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. This implementation of the GET action returns an analytics configuration (identified by the analytics configuration ID) from the bucket. To use this operation, you must have permissions to perform the s3:GetAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide. For information about Amazon S3 analytics feature, see Amazon S3 Analytics – Storage Class Analysis in the Amazon S3 User Guide. The following operations are related to GetBucketAnalyticsConfiguration: DeleteBucketAnalyticsConfiguration ListBucketAnalyticsConfigurations PutBucketAnalyticsConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#list_bucket_analytics_configurations"><CopyableCode code="list_bucket_analytics_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-continuation-token"><code>continuation-token</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Lists the analytics configurations for the bucket. You can have up to 1,000 analytics configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. You should always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there will be a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. To use this operation, you must have permissions to perform the s3:GetAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about Amazon S3 analytics feature, see Amazon S3 Analytics – Storage Class Analysis. The following operations are related to ListBucketAnalyticsConfigurations: GetBucketAnalyticsConfiguration DeleteBucketAnalyticsConfiguration PutBucketAnalyticsConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_analytics_configuration"><CopyableCode code="put_bucket_analytics_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AnalyticsConfiguration"><code>AnalyticsConfiguration</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Sets an analytics configuration for the bucket (specified by the analytics configuration ID). You can have up to 1,000 analytics configurations per bucket. You can choose to have storage class analysis export analysis reports sent to a comma-separated values (CSV) flat file. See the DataExport request element. Reports are updated daily and are based on the object filters that you configure. When selecting data export, you specify a destination bucket and an optional destination prefix where the file is written. You can export the data to a destination bucket in a different account. However, the destination bucket must be in the same Region as the bucket that you are making the PUT analytics configuration to. For more information, see Amazon S3 Analytics – Storage Class Analysis. You must create a bucket policy on the destination bucket where the exported file is written to grant permissions to Amazon S3 to write objects to the bucket. For an example policy, see Granting Permissions for Amazon S3 Inventory and Storage Class Analysis. To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. PutBucketAnalyticsConfiguration has the following special errors: HTTP Error: HTTP 400 Bad Request Code: InvalidArgument Cause: Invalid argument. HTTP Error: HTTP 400 Bad Request Code: TooManyConfigurations Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit. HTTP Error: HTTP 403 Forbidden Code: AccessDenied Cause: You are not the owner of the specified bucket, or you do not have the s3:PutAnalyticsConfiguration bucket permission to set the configuration on the bucket. The following operations are related to PutBucketAnalyticsConfiguration: GetBucketAnalyticsConfiguration DeleteBucketAnalyticsConfiguration ListBucketAnalyticsConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_analytics_configuration"><CopyableCode code="delete_bucket_analytics_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Deletes an analytics configuration for the bucket (specified by the analytics configuration ID). To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 analytics feature, see Amazon S3 Analytics – Storage Class Analysis. The following operations are related to DeleteBucketAnalyticsConfiguration: GetBucketAnalyticsConfiguration ListBucketAnalyticsConfigurations PutBucketAnalyticsConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket from which an analytics configuration is deleted.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that identifies the analytics configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-continuation-token">
    <td><CopyableCode code="continuation-token" /></td>
    <td><code>string</code></td>
    <td>The ContinuationToken that represents a placeholder from where this request should begin.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_analytics_configuration"
    values={[
        { label: 'get_bucket_analytics_configuration', value: 'get_bucket_analytics_configuration' },
        { label: 'list_bucket_analytics_configurations', value: 'list_bucket_analytics_configurations' }
    ]}
>
<TabItem value="get_bucket_analytics_configuration">

This operation is not supported for directory buckets. This implementation of the GET action returns an analytics configuration (identified by the analytics configuration ID) from the bucket. To use this operation, you must have permissions to perform the s3:GetAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide. For information about Amazon S3 analytics feature, see Amazon S3 Analytics – Storage Class Analysis in the Amazon S3 User Guide. The following operations are related to GetBucketAnalyticsConfiguration: DeleteBucketAnalyticsConfiguration ListBucketAnalyticsConfigurations PutBucketAnalyticsConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
filter,
id,
storage_class_analysis
FROM aws.s3.bucket_analytics_configurations
WHERE bucket = '{{ bucket }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
<TabItem value="list_bucket_analytics_configurations">

This operation is not supported for directory buckets. Lists the analytics configurations for the bucket. You can have up to 1,000 analytics configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. You should always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there will be a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. To use this operation, you must have permissions to perform the s3:GetAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about Amazon S3 analytics feature, see Amazon S3 Analytics – Storage Class Analysis. The following operations are related to ListBucketAnalyticsConfigurations: GetBucketAnalyticsConfiguration DeleteBucketAnalyticsConfiguration PutBucketAnalyticsConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
filter,
id,
storage_class_analysis
FROM aws.s3.bucket_analytics_configurations
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `continuation-token` = '{{ continuation-token }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_analytics_configuration"
    values={[
        { label: 'put_bucket_analytics_configuration', value: 'put_bucket_analytics_configuration' }
    ]}
>
<TabItem value="put_bucket_analytics_configuration">

This operation is not supported for directory buckets. Sets an analytics configuration for the bucket (specified by the analytics configuration ID). You can have up to 1,000 analytics configurations per bucket. You can choose to have storage class analysis export analysis reports sent to a comma-separated values (CSV) flat file. See the DataExport request element. Reports are updated daily and are based on the object filters that you configure. When selecting data export, you specify a destination bucket and an optional destination prefix where the file is written. You can export the data to a destination bucket in a different account. However, the destination bucket must be in the same Region as the bucket that you are making the PUT analytics configuration to. For more information, see Amazon S3 Analytics – Storage Class Analysis. You must create a bucket policy on the destination bucket where the exported file is written to grant permissions to Amazon S3 to write objects to the bucket. For an example policy, see Granting Permissions for Amazon S3 Inventory and Storage Class Analysis. To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. PutBucketAnalyticsConfiguration has the following special errors: HTTP Error: HTTP 400 Bad Request Code: InvalidArgument Cause: Invalid argument. HTTP Error: HTTP 400 Bad Request Code: TooManyConfigurations Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit. HTTP Error: HTTP 403 Forbidden Code: AccessDenied Cause: You are not the owner of the specified bucket, or you do not have the s3:PutAnalyticsConfiguration bucket permission to set the configuration on the bucket. The following operations are related to PutBucketAnalyticsConfiguration: GetBucketAnalyticsConfiguration DeleteBucketAnalyticsConfiguration ListBucketAnalyticsConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_analytics_configurations
SET 
AnalyticsConfiguration = '{{ AnalyticsConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND AnalyticsConfiguration = '{{ AnalyticsConfiguration }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_analytics_configuration"
    values={[
        { label: 'delete_bucket_analytics_configuration', value: 'delete_bucket_analytics_configuration' }
    ]}
>
<TabItem value="delete_bucket_analytics_configuration">

This operation is not supported for directory buckets. Deletes an analytics configuration for the bucket (specified by the analytics configuration ID). To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 analytics feature, see Amazon S3 Analytics – Storage Class Analysis. The following operations are related to DeleteBucketAnalyticsConfiguration: GetBucketAnalyticsConfiguration ListBucketAnalyticsConfigurations PutBucketAnalyticsConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_analytics_configurations
WHERE bucket = '{{ bucket }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
