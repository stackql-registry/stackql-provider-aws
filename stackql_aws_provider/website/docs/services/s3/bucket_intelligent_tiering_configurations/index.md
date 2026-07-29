--- 
title: bucket_intelligent_tiering_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_intelligent_tiering_configurations
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

Creates, updates, deletes, gets or lists a <code>bucket_intelligent_tiering_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_intelligent_tiering_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_intelligent_tiering_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_intelligent_tiering_configuration"
    values={[
        { label: 'get_bucket_intelligent_tiering_configuration', value: 'get_bucket_intelligent_tiering_configuration' },
        { label: 'list_bucket_intelligent_tiering_configurations', value: 'list_bucket_intelligent_tiering_configurations' }
    ]}
>
<TabItem value="get_bucket_intelligent_tiering_configuration">

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
    <td>Specifies a bucket filter. The configuration only includes objects that meet the filter's criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the S3 Intelligent-Tiering configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tierings" /></td>
    <td><code>string</code></td>
    <td>Specifies the S3 Intelligent-Tiering storage class tier of the configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bucket_intelligent_tiering_configurations">

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
    <td>Specifies a bucket filter. The configuration only includes objects that meet the filter's criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the S3 Intelligent-Tiering configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tierings" /></td>
    <td><code>string</code></td>
    <td>Specifies the S3 Intelligent-Tiering storage class tier of the configuration.</td>
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
    <td><a href="#get_bucket_intelligent_tiering_configuration"><CopyableCode code="get_bucket_intelligent_tiering_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Gets the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to GetBucketIntelligentTieringConfiguration include: DeleteBucketIntelligentTieringConfiguration PutBucketIntelligentTieringConfiguration ListBucketIntelligentTieringConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#list_bucket_intelligent_tiering_configurations"><CopyableCode code="list_bucket_intelligent_tiering_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-continuation-token"><code>continuation-token</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Lists the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to ListBucketIntelligentTieringConfigurations include: DeleteBucketIntelligentTieringConfiguration PutBucketIntelligentTieringConfiguration GetBucketIntelligentTieringConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_intelligent_tiering_configuration"><CopyableCode code="put_bucket_intelligent_tiering_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IntelligentTieringConfiguration"><code>IntelligentTieringConfiguration</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Puts a S3 Intelligent-Tiering configuration to the specified bucket. You can have up to 1,000 S3 Intelligent-Tiering configurations per bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to PutBucketIntelligentTieringConfiguration include: DeleteBucketIntelligentTieringConfiguration GetBucketIntelligentTieringConfiguration ListBucketIntelligentTieringConfigurations You only need S3 Intelligent-Tiering enabled on a bucket if you want to automatically move objects stored in the S3 Intelligent-Tiering storage class to the Archive Access or Deep Archive Access tier. PutBucketIntelligentTieringConfiguration has the following special errors: HTTP 400 Bad Request Error Code: InvalidArgument Cause: Invalid Argument HTTP 400 Bad Request Error Code: TooManyConfigurations Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit. HTTP 403 Forbidden Error Cause: You are not the owner of the specified bucket, or you do not have the s3:PutIntelligentTieringConfiguration bucket permission to set the configuration on the bucket. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_intelligent_tiering_configuration"><CopyableCode code="delete_bucket_intelligent_tiering_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Deletes the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to DeleteBucketIntelligentTieringConfiguration include: GetBucketIntelligentTieringConfiguration PutBucketIntelligentTieringConfiguration ListBucketIntelligentTieringConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the S3 Intelligent-Tiering configuration.</td>
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
    defaultValue="get_bucket_intelligent_tiering_configuration"
    values={[
        { label: 'get_bucket_intelligent_tiering_configuration', value: 'get_bucket_intelligent_tiering_configuration' },
        { label: 'list_bucket_intelligent_tiering_configurations', value: 'list_bucket_intelligent_tiering_configurations' }
    ]}
>
<TabItem value="get_bucket_intelligent_tiering_configuration">

This operation is not supported for directory buckets. Gets the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to GetBucketIntelligentTieringConfiguration include: DeleteBucketIntelligentTieringConfiguration PutBucketIntelligentTieringConfiguration ListBucketIntelligentTieringConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
filter,
id,
status,
tierings
FROM aws.s3.bucket_intelligent_tiering_configurations
WHERE bucket = '{{ bucket }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
<TabItem value="list_bucket_intelligent_tiering_configurations">

This operation is not supported for directory buckets. Lists the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to ListBucketIntelligentTieringConfigurations include: DeleteBucketIntelligentTieringConfiguration PutBucketIntelligentTieringConfiguration GetBucketIntelligentTieringConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
filter,
id,
status,
tierings
FROM aws.s3.bucket_intelligent_tiering_configurations
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
    defaultValue="put_bucket_intelligent_tiering_configuration"
    values={[
        { label: 'put_bucket_intelligent_tiering_configuration', value: 'put_bucket_intelligent_tiering_configuration' }
    ]}
>
<TabItem value="put_bucket_intelligent_tiering_configuration">

This operation is not supported for directory buckets. Puts a S3 Intelligent-Tiering configuration to the specified bucket. You can have up to 1,000 S3 Intelligent-Tiering configurations per bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to PutBucketIntelligentTieringConfiguration include: DeleteBucketIntelligentTieringConfiguration GetBucketIntelligentTieringConfiguration ListBucketIntelligentTieringConfigurations You only need S3 Intelligent-Tiering enabled on a bucket if you want to automatically move objects stored in the S3 Intelligent-Tiering storage class to the Archive Access or Deep Archive Access tier. PutBucketIntelligentTieringConfiguration has the following special errors: HTTP 400 Bad Request Error Code: InvalidArgument Cause: Invalid Argument HTTP 400 Bad Request Error Code: TooManyConfigurations Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit. HTTP 403 Forbidden Error Cause: You are not the owner of the specified bucket, or you do not have the s3:PutIntelligentTieringConfiguration bucket permission to set the configuration on the bucket. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_intelligent_tiering_configurations
SET 
IntelligentTieringConfiguration = '{{ IntelligentTieringConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND IntelligentTieringConfiguration = '{{ IntelligentTieringConfiguration }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_intelligent_tiering_configuration"
    values={[
        { label: 'delete_bucket_intelligent_tiering_configuration', value: 'delete_bucket_intelligent_tiering_configuration' }
    ]}
>
<TabItem value="delete_bucket_intelligent_tiering_configuration">

This operation is not supported for directory buckets. Deletes the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to DeleteBucketIntelligentTieringConfiguration include: GetBucketIntelligentTieringConfiguration PutBucketIntelligentTieringConfiguration ListBucketIntelligentTieringConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_intelligent_tiering_configurations
WHERE bucket = '{{ bucket }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
