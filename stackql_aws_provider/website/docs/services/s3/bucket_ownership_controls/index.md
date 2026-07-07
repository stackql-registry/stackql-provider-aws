--- 
title: bucket_ownership_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_ownership_controls
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

Creates, updates, deletes, gets or lists a <code>bucket_ownership_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_ownership_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_ownership_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_ownership_controls"
    values={[
        { label: 'get_bucket_ownership_controls', value: 'get_bucket_ownership_controls' }
    ]}
>
<TabItem value="get_bucket_ownership_controls">

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
    <td><CopyableCode code="Rules" /></td>
    <td><code>string</code></td>
    <td>The container element for an ownership control rule.</td>
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
    <td><a href="#get_bucket_ownership_controls"><CopyableCode code="get_bucket_ownership_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Retrieves OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:GetBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying permissions in a policy. A bucket doesn't have OwnershipControls settings in the following cases: The bucket was created before the BucketOwnerEnforced ownership setting was introduced and you've never explicitly applied this value You've manually deleted the bucket ownership control value using the DeleteBucketOwnershipControls API operation. By default, Amazon S3 sets OwnershipControls for all newly created buckets. For information about Amazon S3 Object Ownership, see Using Object Ownership. The following operations are related to GetBucketOwnershipControls: PutBucketOwnershipControls DeleteBucketOwnershipControls You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_ownership_controls"><CopyableCode code="put_bucket_ownership_controls" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OwnershipControls"><code>OwnershipControls</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a></td>
    <td>This operation is not supported for directory buckets. Creates or modifies OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying permissions in a policy. For information about Amazon S3 Object Ownership, see Using object ownership. The following operations are related to PutBucketOwnershipControls: GetBucketOwnershipControls DeleteBucketOwnershipControls You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_ownership_controls"><CopyableCode code="delete_bucket_ownership_controls" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Removes OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy. For information about Amazon S3 Object Ownership, see Using Object Ownership. The following operations are related to DeleteBucketOwnershipControls: GetBucketOwnershipControls PutBucketOwnershipControls You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The Amazon S3 bucket whose OwnershipControls you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The MD5 hash of the OwnershipControls request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum-algorithm header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_ownership_controls"
    values={[
        { label: 'get_bucket_ownership_controls', value: 'get_bucket_ownership_controls' }
    ]}
>
<TabItem value="get_bucket_ownership_controls">

This operation is not supported for directory buckets. Retrieves OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:GetBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying permissions in a policy. A bucket doesn't have OwnershipControls settings in the following cases: The bucket was created before the BucketOwnerEnforced ownership setting was introduced and you've never explicitly applied this value You've manually deleted the bucket ownership control value using the DeleteBucketOwnershipControls API operation. By default, Amazon S3 sets OwnershipControls for all newly created buckets. For information about Amazon S3 Object Ownership, see Using Object Ownership. The following operations are related to GetBucketOwnershipControls: PutBucketOwnershipControls DeleteBucketOwnershipControls You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
Rules
FROM aws.s3.bucket_ownership_controls
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_ownership_controls"
    values={[
        { label: 'put_bucket_ownership_controls', value: 'put_bucket_ownership_controls' }
    ]}
>
<TabItem value="put_bucket_ownership_controls">

This operation is not supported for directory buckets. Creates or modifies OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying permissions in a policy. For information about Amazon S3 Object Ownership, see Using object ownership. The following operations are related to PutBucketOwnershipControls: GetBucketOwnershipControls DeleteBucketOwnershipControls You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_ownership_controls
SET 
OwnershipControls = '{{ OwnershipControls }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND OwnershipControls = '{{ OwnershipControls }}' --required
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_ownership_controls"
    values={[
        { label: 'delete_bucket_ownership_controls', value: 'delete_bucket_ownership_controls' }
    ]}
>
<TabItem value="delete_bucket_ownership_controls">

This operation is not supported for directory buckets. Removes OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy. For information about Amazon S3 Object Ownership, see Using Object Ownership. The following operations are related to DeleteBucketOwnershipControls: GetBucketOwnershipControls PutBucketOwnershipControls You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_ownership_controls
WHERE bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
