--- 
title: bucket_replications
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_replications
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

Creates, updates, deletes, gets or lists a <code>bucket_replications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_replications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_replications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_replication"
    values={[
        { label: 'get_bucket_replication', value: 'get_bucket_replication' }
    ]}
>
<TabItem value="get_bucket_replication">

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
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. For more information, see How to Set Up Replication in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Rules" /></td>
    <td><code>string</code></td>
    <td>A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.</td>
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
    <td><a href="#get_bucket_replication"><CopyableCode code="get_bucket_replication" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Returns the replication configuration of a bucket. It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result. For information about replication configuration, see Replication in the Amazon S3 User Guide. This action requires permissions for the s3:GetReplicationConfiguration action. For more information about permissions, see Using Bucket Policies and User Policies. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication and Priority elements. The response also returns those elements. For information about GetBucketReplication errors, see List of replication-related error codes The following operations are related to GetBucketReplication: PutBucketReplication DeleteBucketReplication You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_replication"><CopyableCode code="put_bucket_replication" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationConfiguration"><code>ReplicationConfiguration</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-bucket-object-lock-token"><code>x-amz-bucket-object-lock-token</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Creates a replication configuration or replaces an existing one. For more information, see Replication in the Amazon S3 User Guide. Specify the replication configuration in the request body. In the replication configuration, you provide the name of the destination bucket or buckets where you want Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your behalf, and other relevant information. You can invoke this request for a specific Amazon Web Services Region by using the aws:RequestedRegion condition key. A replication configuration must include at least one rule, and can contain a maximum of 1,000. Each rule identifies a subset of objects to replicate by filtering the objects in the source bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority. If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility. For information about enabling versioning on a bucket, see Using Versioning. Handling Replication of Encrypted Objects By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with KMS keys. To replicate Amazon Web Services KMS-encrypted objects, add the following: SourceSelectionCriteria, SseKmsEncryptedObjects, Status, EncryptionConfiguration, and ReplicaKmsKeyID. For information about replication configuration, see Replicating Objects Created with SSE Using KMS keys. For information on PutBucketReplication errors, see List of replication-related error codes Permissions To create a PutBucketReplication request, you must have s3:PutReplicationConfiguration permissions for the bucket. By default, a resource owner, in this case the Amazon Web Services account that created the bucket, can perform this operation. The resource owner can also grant others permissions to perform the operation. For more information about permissions, see Specifying Permissions in a Policy and Managing Access Permissions to Your Amazon S3 Resources. To perform this operation, the user or role performing the action must have the iam:PassRole permission. The following operations are related to PutBucketReplication: GetBucketReplication DeleteBucketReplication You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_replication"><CopyableCode code="delete_bucket_replication" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Deletes the replication configuration from the bucket. To use this operation, you must have permissions to perform the s3:PutReplicationConfiguration action. The bucket owner has these permissions by default and can grant it to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. It can take a while for the deletion of a replication configuration to fully propagate. For information about replication configuration, see Replication in the Amazon S3 User Guide. The following operations are related to DeleteBucketReplication: PutBucketReplication GetBucketReplication You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
<tr id="parameter-x-amz-bucket-object-lock-token">
    <td><CopyableCode code="x-amz-bucket-object-lock-token" /></td>
    <td><code>string</code></td>
    <td>A token to allow Object Lock to be enabled for an existing bucket.</td>
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
    defaultValue="get_bucket_replication"
    values={[
        { label: 'get_bucket_replication', value: 'get_bucket_replication' }
    ]}
>
<TabItem value="get_bucket_replication">

This operation is not supported for directory buckets. Returns the replication configuration of a bucket. It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result. For information about replication configuration, see Replication in the Amazon S3 User Guide. This action requires permissions for the s3:GetReplicationConfiguration action. For more information about permissions, see Using Bucket Policies and User Policies. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication and Priority elements. The response also returns those elements. For information about GetBucketReplication errors, see List of replication-related error codes The following operations are related to GetBucketReplication: PutBucketReplication DeleteBucketReplication You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
Role,
Rules
FROM aws.s3.bucket_replications
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_replication"
    values={[
        { label: 'put_bucket_replication', value: 'put_bucket_replication' }
    ]}
>
<TabItem value="put_bucket_replication">

This operation is not supported for directory buckets. Creates a replication configuration or replaces an existing one. For more information, see Replication in the Amazon S3 User Guide. Specify the replication configuration in the request body. In the replication configuration, you provide the name of the destination bucket or buckets where you want Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your behalf, and other relevant information. You can invoke this request for a specific Amazon Web Services Region by using the aws:RequestedRegion condition key. A replication configuration must include at least one rule, and can contain a maximum of 1,000. Each rule identifies a subset of objects to replicate by filtering the objects in the source bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority. If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility. For information about enabling versioning on a bucket, see Using Versioning. Handling Replication of Encrypted Objects By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with KMS keys. To replicate Amazon Web Services KMS-encrypted objects, add the following: SourceSelectionCriteria, SseKmsEncryptedObjects, Status, EncryptionConfiguration, and ReplicaKmsKeyID. For information about replication configuration, see Replicating Objects Created with SSE Using KMS keys. For information on PutBucketReplication errors, see List of replication-related error codes Permissions To create a PutBucketReplication request, you must have s3:PutReplicationConfiguration permissions for the bucket. By default, a resource owner, in this case the Amazon Web Services account that created the bucket, can perform this operation. The resource owner can also grant others permissions to perform the operation. For more information about permissions, see Specifying Permissions in a Policy and Managing Access Permissions to Your Amazon S3 Resources. To perform this operation, the user or role performing the action must have the iam:PassRole permission. The following operations are related to PutBucketReplication: GetBucketReplication DeleteBucketReplication You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_replications
SET 
ReplicationConfiguration = '{{ ReplicationConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND ReplicationConfiguration = '{{ ReplicationConfiguration }}' --required
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-bucket-object-lock-token` = '{{ x-amz-bucket-object-lock-token}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_replication"
    values={[
        { label: 'delete_bucket_replication', value: 'delete_bucket_replication' }
    ]}
>
<TabItem value="delete_bucket_replication">

This operation is not supported for directory buckets. Deletes the replication configuration from the bucket. To use this operation, you must have permissions to perform the s3:PutReplicationConfiguration action. The bucket owner has these permissions by default and can grant it to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. It can take a while for the deletion of a replication configuration to fully propagate. For information about replication configuration, see Replication in the Amazon S3 User Guide. The following operations are related to DeleteBucketReplication: PutBucketReplication GetBucketReplication You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_replications
WHERE bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
