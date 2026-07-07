--- 
title: bucket_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_policies
  - s3control
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.bucket_policies" /></td></tr>
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
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The policy of the Outposts bucket.</td>
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
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see GetBucketPolicy in the Amazon S3 API Reference. Returns the policy of a specified Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have s3-outposts:GetBucketPolicy permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error. As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action. For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketPolicy: GetObject PutBucketPolicy DeleteBucketPolicy</td>
</tr>
<tr>
    <td><a href="#put_bucket_policy"><CopyableCode code="put_bucket_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-confirm-remove-self-bucket-access"><code>x-amz-confirm-remove-self-bucket-access</code></a></td>
    <td>This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket, see PutBucketPolicy in the Amazon S3 API Reference. Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the PutBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this action. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action. For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketPolicy: GetBucketPolicy DeleteBucketPolicy</td>
</tr>
<tr>
    <td><a href="#delete_bucket_policy"><CopyableCode code="delete_bucket_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see DeleteBucketPolicy in the Amazon S3 API Reference. This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the s3-outposts:DeleteBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account to use this action. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action. For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketPolicy: GetBucketPolicy PutBucketPolicy</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:outpost/<code>&lt;outpost-id&gt;</code>/bucket/<code>&lt;my-bucket-name&gt;</code>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the Outposts bucket.</td>
</tr>
<tr id="parameter-x-amz-confirm-remove-self-bucket-access">
    <td><CopyableCode code="x-amz-confirm-remove-self-bucket-access" /></td>
    <td><code>boolean</code></td>
    <td>Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future. This is not supported by Amazon S3 on Outposts buckets.</td>
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

This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see GetBucketPolicy in the Amazon S3 API Reference. Returns the policy of a specified Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have s3-outposts:GetBucketPolicy permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error. As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action. For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketPolicy: GetObject PutBucketPolicy DeleteBucketPolicy

```sql
SELECT
Policy
FROM aws.s3control.bucket_policies
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
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

This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket, see PutBucketPolicy in the Amazon S3 API Reference. Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the PutBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this action. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action. For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketPolicy: GetBucketPolicy DeleteBucketPolicy

```sql
REPLACE aws.s3control.bucket_policies
SET 
Policy = '{{ Policy }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND `x-amz-confirm-remove-self-bucket-access` = {{ x-amz-confirm-remove-self-bucket-access}};
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

This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see DeleteBucketPolicy in the Amazon S3 API Reference. This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the s3-outposts:DeleteBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account to use this action. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error. As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action. For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketPolicy: GetBucketPolicy PutBucketPolicy

```sql
DELETE FROM aws.s3control.bucket_policies
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
