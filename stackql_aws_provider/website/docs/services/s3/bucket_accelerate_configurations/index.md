--- 
title: bucket_accelerate_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_accelerate_configurations
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

Creates, updates, deletes, gets or lists a <code>bucket_accelerate_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_accelerate_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_accelerate_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_accelerate_configuration"
    values={[
        { label: 'get_bucket_accelerate_configuration', value: 'get_bucket_accelerate_configuration' }
    ]}
>
<TabItem value="get_bucket_accelerate_configuration">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#get_bucket_accelerate_configuration"><CopyableCode code="get_bucket_accelerate_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a></td>
    <td>This operation is not supported for directory buckets. This implementation of the GET action uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to and from Amazon S3. To use this operation, you must have permission to perform the s3:GetAccelerateConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide. You set the Transfer Acceleration state of an existing bucket to Enabled or Suspended by using the PutBucketAccelerateConfiguration operation. A GET accelerate request does not return a state value for a bucket that has no transfer acceleration state. A bucket has no Transfer Acceleration state if a state has never been set on the bucket. For more information about transfer acceleration, see Transfer Acceleration in the Amazon S3 User Guide. The following operations are related to GetBucketAccelerateConfiguration: PutBucketAccelerateConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_accelerate_configuration"><CopyableCode code="put_bucket_accelerate_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccelerateConfiguration"><code>AccelerateConfiguration</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a></td>
    <td>This operation is not supported for directory buckets. Sets the accelerate configuration of an existing bucket. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to Amazon S3. To use this operation, you must have permission to perform the s3:PutAccelerateConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. The Transfer Acceleration state of a bucket can be set to one of the following two values: Enabled – Enables accelerated data transfers to the bucket. Suspended – Disables accelerated data transfers to the bucket. The GetBucketAccelerateConfiguration action returns the transfer acceleration state of a bucket. After setting the Transfer Acceleration state of a bucket to Enabled, it might take up to thirty minutes before the data transfer rates to the bucket increase. The name of the bucket used for Transfer Acceleration must be DNS-compliant and must not contain periods ("."). For more information about transfer acceleration, see Transfer Acceleration. The following operations are related to PutBucketAccelerateConfiguration: GetBucketAccelerateConfiguration CreateBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the bucket for which the accelerate configuration is set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_accelerate_configuration"
    values={[
        { label: 'get_bucket_accelerate_configuration', value: 'get_bucket_accelerate_configuration' }
    ]}
>
<TabItem value="get_bucket_accelerate_configuration">

This operation is not supported for directory buckets. This implementation of the GET action uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to and from Amazon S3. To use this operation, you must have permission to perform the s3:GetAccelerateConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide. You set the Transfer Acceleration state of an existing bucket to Enabled or Suspended by using the PutBucketAccelerateConfiguration operation. A GET accelerate request does not return a state value for a bucket that has no transfer acceleration state. A bucket has no Transfer Acceleration state if a state has never been set on the bucket. For more information about transfer acceleration, see Transfer Acceleration in the Amazon S3 User Guide. The following operations are related to GetBucketAccelerateConfiguration: PutBucketAccelerateConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
line_items
FROM aws.s3.bucket_accelerate_configurations
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_accelerate_configuration"
    values={[
        { label: 'put_bucket_accelerate_configuration', value: 'put_bucket_accelerate_configuration' }
    ]}
>
<TabItem value="put_bucket_accelerate_configuration">

This operation is not supported for directory buckets. Sets the accelerate configuration of an existing bucket. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to Amazon S3. To use this operation, you must have permission to perform the s3:PutAccelerateConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. The Transfer Acceleration state of a bucket can be set to one of the following two values: Enabled – Enables accelerated data transfers to the bucket. Suspended – Disables accelerated data transfers to the bucket. The GetBucketAccelerateConfiguration action returns the transfer acceleration state of a bucket. After setting the Transfer Acceleration state of a bucket to Enabled, it might take up to thirty minutes before the data transfer rates to the bucket increase. The name of the bucket used for Transfer Acceleration must be DNS-compliant and must not contain periods ("."). For more information about transfer acceleration, see Transfer Acceleration. The following operations are related to PutBucketAccelerateConfiguration: GetBucketAccelerateConfiguration CreateBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_accelerate_configurations
SET 
AccelerateConfiguration = '{{ AccelerateConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND AccelerateConfiguration = '{{ AccelerateConfiguration }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}';
```
</TabItem>
</Tabs>
