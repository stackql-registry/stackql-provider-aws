--- 
title: bucket_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_policies
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

Creates, updates, deletes, gets or lists a <code>bucket_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_policy"
    values={[
        { label: 'get_bucket_policy', value: 'get_bucket_policy' }
    ]}
>
<TabItem value="get_bucket_policy">

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
    <td><a href="#get_bucket_policy"><CopyableCode code="get_bucket_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Returns the policy of a specified bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have GetBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies. General purpose bucket permissions - The s3:GetBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. Example bucket policies General purpose buckets example bucket policies - See Bucket policy examples in the Amazon S3 User Guide. Directory bucket example bucket policies - See Example bucket policies for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following action is related to GetBucketPolicy: GetObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_policy"><CopyableCode code="put_bucket_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Policy"><code>Policy</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-confirm-remove-self-bucket-access"><code>x-amz-confirm-remove-self-bucket-access</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Applies an Amazon S3 bucket policy to an Amazon S3 bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the PutBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies. General purpose bucket permissions - The s3:PutBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. Example bucket policies General purpose buckets example bucket policies - See Bucket policy examples in the Amazon S3 User Guide. Directory bucket example bucket policies - See Example bucket policies for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following operations are related to PutBucketPolicy: CreateBucket DeleteBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_policy"><CopyableCode code="delete_bucket_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Deletes the policy of a specified bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the DeleteBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies. General purpose bucket permissions - The s3:DeleteBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:DeleteBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following operations are related to DeleteBucketPolicy CreateBucket DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The bucket name. Directory buckets - When you use this operation with a directory bucket, you must use path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format bucket-base-name--zone-id--x-s3 (for example, DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The MD5 hash of the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-confirm-remove-self-bucket-access">
    <td><CopyableCode code="x-amz-confirm-remove-self-bucket-access" /></td>
    <td><code>boolean</code></td>
    <td>Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied). For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented.</td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum-algorithm or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For the x-amz-checksum-algorithm header, replace algorithm with the supported algorithm from the following list: CRC32 CRC32C CRC64NVME MD5 SHA1 SHA256 SHA512 XXHASH3 XXHASH64 XXHASH128 For more information, see Checking object integrity in the Amazon S3 User Guide. If the individual checksum value you provide through x-amz-checksum-algorithm doesn't match the checksum algorithm you set through x-amz-sdk-checksum-algorithm, Amazon S3 fails the request with a BadDigest error. For directory buckets, when you use Amazon Web Services SDKs, CRC32 is the default checksum algorithm that's used for performance.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_policy"
    values={[
        { label: 'get_bucket_policy', value: 'get_bucket_policy' }
    ]}
>
<TabItem value="get_bucket_policy">

Returns the policy of a specified bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have GetBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies. General purpose bucket permissions - The s3:GetBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. Example bucket policies General purpose buckets example bucket policies - See Bucket policy examples in the Amazon S3 User Guide. Directory bucket example bucket policies - See Example bucket policies for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following action is related to GetBucketPolicy: GetObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
line_items
FROM aws.s3.bucket_policies
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_policy"
    values={[
        { label: 'put_bucket_policy', value: 'put_bucket_policy' }
    ]}
>
<TabItem value="put_bucket_policy">

Applies an Amazon S3 bucket policy to an Amazon S3 bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the PutBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies. General purpose bucket permissions - The s3:PutBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. Example bucket policies General purpose buckets example bucket policies - See Bucket policy examples in the Amazon S3 User Guide. Directory bucket example bucket policies - See Example bucket policies for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following operations are related to PutBucketPolicy: CreateBucket DeleteBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_policies
SET 
Policy = '{{ Policy }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND Policy = '{{ Policy }}' --required
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-confirm-remove-self-bucket-access` = {{ x-amz-confirm-remove-self-bucket-access}}
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_policy"
    values={[
        { label: 'delete_bucket_policy', value: 'delete_bucket_policy' }
    ]}
>
<TabItem value="delete_bucket_policy">

Deletes the policy of a specified bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the DeleteBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies. General purpose bucket permissions - The s3:DeleteBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:DeleteBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following operations are related to DeleteBucketPolicy CreateBucket DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_policies
WHERE bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
