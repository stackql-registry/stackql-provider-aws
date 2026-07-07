--- 
title: bucket_request_payments
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_request_payments
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

Creates, updates, deletes, gets or lists a <code>bucket_request_payments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_request_payments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_request_payments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_request_payment"
    values={[
        { label: 'get_bucket_request_payment', value: 'get_bucket_request_payment' }
    ]}
>
<TabItem value="get_bucket_request_payment">

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
    <td><a href="#get_bucket_request_payment"><CopyableCode code="get_bucket_request_payment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Returns the request payment configuration of a bucket. To use this version of the operation, you must be the bucket owner. For more information, see Requester Pays Buckets. The following operations are related to GetBucketRequestPayment: ListObjects You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_request_payment"><CopyableCode code="put_bucket_request_payment" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RequestPaymentConfiguration"><code>RequestPaymentConfiguration</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Sets the request payment configuration for a bucket. By default, the bucket owner pays for downloads from the bucket. This configuration parameter enables the bucket owner (only) to specify that the person requesting the download will be charged for the download. For more information, see Requester Pays Buckets. The following operations are related to PutBucketRequestPayment: CreateBucket GetBucketRequestPayment You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The bucket name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The Base64 encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
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
    defaultValue="get_bucket_request_payment"
    values={[
        { label: 'get_bucket_request_payment', value: 'get_bucket_request_payment' }
    ]}
>
<TabItem value="get_bucket_request_payment">

This operation is not supported for directory buckets. Returns the request payment configuration of a bucket. To use this version of the operation, you must be the bucket owner. For more information, see Requester Pays Buckets. The following operations are related to GetBucketRequestPayment: ListObjects You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
line_items
FROM aws.s3.bucket_request_payments
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_request_payment"
    values={[
        { label: 'put_bucket_request_payment', value: 'put_bucket_request_payment' }
    ]}
>
<TabItem value="put_bucket_request_payment">

This operation is not supported for directory buckets. Sets the request payment configuration for a bucket. By default, the bucket owner pays for downloads from the bucket. This configuration parameter enables the bucket owner (only) to specify that the person requesting the download will be charged for the download. For more information, see Requester Pays Buckets. The following operations are related to PutBucketRequestPayment: CreateBucket GetBucketRequestPayment You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_request_payments
SET 
RequestPaymentConfiguration = '{{ RequestPaymentConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND RequestPaymentConfiguration = '{{ RequestPaymentConfiguration }}' --required
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>
