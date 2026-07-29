--- 
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
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

Creates, updates, deletes, gets or lists a <code>buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_buckets"
    values={[
        { label: 'list_buckets', value: 'list_buckets' }
    ]}
>
<TabItem value="list_buckets">

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
    <td><CopyableCode code="bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 bucket. ARNs uniquely identify Amazon Web Services resources across all of Amazon Web Services. This parameter is only supported for S3 directory buckets. For more information, see Using tags with directory buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_region" /></td>
    <td><code>string</code></td>
    <td>BucketRegion indicates the Amazon Web Services region where the bucket is located. If the request contains at least one valid parameter, it is included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>Date the bucket was created. This date can change when making changes to your bucket, such as editing its bucket policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket.</td>
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
    <td><a href="#list_buckets"><CopyableCode code="list_buckets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-buckets"><code>max-buckets</code></a>, <a href="#parameter-continuation-token"><code>continuation-token</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-bucket-region"><code>bucket-region</code></a></td>
    <td>This operation is not supported for directory buckets. Returns a list of all buckets owned by the authenticated sender of the request. To grant IAM permission to use this operation, you must add the s3:ListAllMyBuckets policy action. For information about Amazon S3 buckets, see Creating, configuring, and working with Amazon S3 buckets. We strongly recommend using only paginated ListBuckets requests. Unpaginated ListBuckets requests are only supported for Amazon Web Services accounts set to the default general purpose bucket quota of 10,000. If you have an approved general purpose bucket quota above 10,000, you must send paginated ListBuckets requests to list your account’s buckets. All unpaginated ListBuckets requests will be rejected for Amazon Web Services accounts with a general purpose bucket quota greater than 10,000. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#create_bucket"><CopyableCode code="create_bucket" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write"><code>x-amz-grant-write</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-x-amz-bucket-object-lock-enabled"><code>x-amz-bucket-object-lock-enabled</code></a>, <a href="#parameter-x-amz-object-ownership"><code>x-amz-object-ownership</code></a>, <a href="#parameter-x-amz-bucket-namespace"><code>x-amz-bucket-namespace</code></a></td>
    <td>This action creates an Amazon S3 bucket. To create an Amazon S3 on Outposts bucket, see CreateBucket . Creates a new S3 bucket. To create a bucket, you must set up Amazon S3 and have a valid Amazon Web Services Access Key ID to authenticate requests. Anonymous requests are never allowed to create buckets. By creating the bucket, you become the bucket owner. There are two types of buckets: general purpose buckets and directory buckets. For more information about these bucket types, see Creating, configuring, and working with Amazon S3 buckets in the Amazon S3 User Guide. General purpose buckets exist in a global namespace, which means that each bucket name must be unique across all Amazon Web Services accounts in all the Amazon Web Services Regions within a partition. A partition is a grouping of Regions. Amazon Web Services currently has four partitions: aws (Standard Regions), aws-cn (China Regions), aws-us-gov (Amazon Web Services GovCloud (US)), and aws-eusc (European Sovereign Cloud). When you create a general purpose bucket, you can choose to create a bucket in the shared global namespace or you can choose to create a bucket in your account regional namespace. Your account regional namespace is a subdivision of the global namespace that only your account can create buckets in. For more information on account regional namespaces, see Namespaces for general purpose buckets. General purpose buckets - If you send your CreateBucket request to the s3.amazonaws.com global endpoint, the request goes to the us-east-1 Region. So the signature calculations in Signature Version 4 must use us-east-1 as the Region, even if the location constraint in the request specifies another Region where the bucket is to be created. If you create a bucket in a Region other than US East (N. Virginia), your application must be able to handle 307 redirect. For more information, see Virtual hosting of buckets in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - In addition to the s3:CreateBucket permission, the following permissions are required in a policy when your CreateBucket request includes specific headers: Access control lists (ACLs) - In your CreateBucket request, if you specify an access control list (ACL) and set it to public-read, public-read-write, authenticated-read, or if you explicitly specify any other custom ACLs, both s3:CreateBucket and s3:PutBucketAcl permissions are required. In your CreateBucket request, if you set the ACL to private, or if you don't specify any ACLs, only the s3:CreateBucket permission is required. Object Lock - In your CreateBucket request, if you set x-amz-bucket-object-lock-enabled to true, the s3:PutBucketObjectLockConfiguration and s3:PutBucketVersioning permissions are required. S3 Object Ownership - If your CreateBucket request includes the x-amz-object-ownership header, then the s3:PutBucketOwnershipControls permission is required. To set an ACL on a bucket as part of a CreateBucket request, you must explicitly set S3 Object Ownership for the bucket to a different value than the default, BucketOwnerEnforced. Additionally, if your desired bucket ACL grants public access, you must first create the bucket (without the bucket ACL) and then explicitly disable Block Public Access on the bucket before using PutBucketAcl to set the ACL. If you try to create a bucket with a public ACL, the request will fail. For the majority of modern use cases in S3, we recommend that you keep all Block Public Access settings enabled and keep ACLs disabled. If you would like to share data with users outside of your account, you can use bucket policies as needed. For more information, see Controlling ownership of objects and disabling ACLs for your bucket and Blocking public access to your Amazon S3 storage in the Amazon S3 User Guide. S3 Block Public Access - If your specific use case requires granting public access to your S3 resources, you can disable Block Public Access. Specifically, you can create a new bucket with Block Public Access enabled, then separately call the DeletePublicAccessBlock API. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about S3 Block Public Access, see Blocking public access to your Amazon S3 storage in the Amazon S3 User Guide. Directory bucket permissions - You must have the s3express:CreateBucket permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. The permissions for ACLs, Object Lock, S3 Object Ownership, and S3 Block Public Access are not supported for directory buckets. For directory buckets, all Block Public Access settings are enabled at the bucket level and S3 Object Ownership is set to Bucket owner enforced (ACLs disabled). These settings can't be modified. For more information about permissions for creating and working with directory buckets, see Directory buckets in the Amazon S3 User Guide. For more information about supported S3 features for directory buckets, see Features of S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following operations are related to CreateBucket: PutObject DeleteBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#update_bucket_metadata_inventory_table_configuration"><CopyableCode code="update_bucket_metadata_inventory_table_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InventoryTableConfiguration"><code>InventoryTableConfiguration</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Enables or disables a live inventory table for an S3 Metadata configuration on a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. Permissions To use this operation, you must have the following permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you want to encrypt your inventory table with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions in your KMS key policy. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. s3:UpdateBucketMetadataInventoryTableConfiguration s3tables:CreateTableBucket s3tables:CreateNamespace s3tables:GetTable s3tables:CreateTable s3tables:PutTablePolicy s3tables:PutTableEncryption kms:DescribeKey The following operations are related to UpdateBucketMetadataInventoryTableConfiguration: CreateBucketMetadataConfiguration DeleteBucketMetadataConfiguration GetBucketMetadataConfiguration UpdateBucketMetadataJournalTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#update_bucket_metadata_journal_table_configuration"><CopyableCode code="update_bucket_metadata_journal_table_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JournalTableConfiguration"><code>JournalTableConfiguration</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Enables or disables journal table record expiration for an S3 Metadata configuration on a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. Permissions To use this operation, you must have the s3:UpdateBucketMetadataJournalTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The following operations are related to UpdateBucketMetadataJournalTableConfiguration: CreateBucketMetadataConfiguration DeleteBucketMetadataConfiguration GetBucketMetadataConfiguration UpdateBucketMetadataInventoryTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket"><CopyableCode code="delete_bucket" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Deletes the S3 bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. Directory buckets - If multipart uploads in a directory bucket are in progress, you can't delete the bucket until all the in-progress multipart uploads are aborted or completed. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - You must have the s3:DeleteBucket permission on the specified bucket in a policy. Directory bucket permissions - You must have the s3express:DeleteBucket permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following operations are related to DeleteBucket: CreateBucket DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>Specifies the bucket being deleted. Directory buckets - When you use this operation with a directory bucket, you must use path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format bucket-base-name--zone-id--x-s3 (for example, DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The Content-MD5 header for the journal table configuration.</td>
</tr>
<tr id="parameter-bucket-region">
    <td><CopyableCode code="bucket-region" /></td>
    <td><code>string</code></td>
    <td>Limits the response to buckets that are located in the specified Amazon Web Services Region. The Amazon Web Services Region must be expressed according to the Amazon Web Services Region code, such as us-west-2 for the US West (Oregon) Region. For a list of the valid values for all of the Amazon Web Services Regions, see Regions and Endpoints. Requests made to a Regional endpoint that is different from the bucket-region parameter are not supported. For example, if you want to limit the response to your buckets in Region us-west-2, the request must be made to an endpoint in Region us-west-2.</td>
</tr>
<tr id="parameter-continuation-token">
    <td><CopyableCode code="continuation-token" /></td>
    <td><code>string</code></td>
    <td>ContinuationToken indicates to Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key. You can use this ContinuationToken for pagination of the list results. Length Constraints: Minimum length of 0. Maximum length of 1024. Required: No. If you specify the bucket-region, prefix, or continuation-token query parameters without using max-buckets to set the maximum number of buckets returned in the response, Amazon S3 applies a default page size of 10,000 and provides a continuation token if there are more buckets.</td>
</tr>
<tr id="parameter-max-buckets">
    <td><CopyableCode code="max-buckets" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of buckets to be returned in response. When the number is more than the count of buckets that are owned by an Amazon Web Services account, return all the buckets in response.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Limits the response to bucket names that begin with the specified bucket name prefix.</td>
</tr>
<tr id="parameter-x-amz-acl">
    <td><CopyableCode code="x-amz-acl" /></td>
    <td><code>string</code></td>
    <td>The canned ACL to apply to the bucket. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-bucket-namespace">
    <td><CopyableCode code="x-amz-bucket-namespace" /></td>
    <td><code>string</code></td>
    <td>Specifies the namespace where you want to create your general purpose bucket. When you create a general purpose bucket, you can choose to create a bucket in the shared global namespace or you can choose to create a bucket in your account regional namespace. Your account regional namespace is a subdivision of the global namespace that only your account can create buckets in. For more information on bucket namespaces, see Namespaces for general purpose buckets. General purpose buckets in your account regional namespace must follow a specific naming convention. These buckets consist of a bucket name prefix that you create, and a suffix that contains your 12-digit Amazon Web Services Account ID, the Amazon Web Services Region code, and ends with -an. Bucket names must follow the format bucket-name-prefix-accountId-region-an (for example, amzn-s3-demo-bucket-111122223333-us-west-2-an). For information about bucket naming restrictions, see Account regional namespace naming rules in the Amazon S3 User Guide. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-bucket-object-lock-enabled">
    <td><CopyableCode code="x-amz-bucket-object-lock-enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether you want S3 Object Lock to be enabled for the new bucket. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied). For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented.</td>
</tr>
<tr id="parameter-x-amz-grant-full-control">
    <td><CopyableCode code="x-amz-grant-full-control" /></td>
    <td><code>string</code></td>
    <td>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-read">
    <td><CopyableCode code="x-amz-grant-read" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to list the objects in the bucket. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-read-acp">
    <td><CopyableCode code="x-amz-grant-read-acp" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to read the bucket ACL. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-write">
    <td><CopyableCode code="x-amz-grant-write" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-write-acp">
    <td><CopyableCode code="x-amz-grant-write-acp" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to write the ACL for the applicable bucket. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-ownership">
    <td><CopyableCode code="x-amz-object-ownership" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>The checksum algorithm to use with your journal table configuration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_buckets"
    values={[
        { label: 'list_buckets', value: 'list_buckets' }
    ]}
>
<TabItem value="list_buckets">

This operation is not supported for directory buckets. Returns a list of all buckets owned by the authenticated sender of the request. To grant IAM permission to use this operation, you must add the s3:ListAllMyBuckets policy action. For information about Amazon S3 buckets, see Creating, configuring, and working with Amazon S3 buckets. We strongly recommend using only paginated ListBuckets requests. Unpaginated ListBuckets requests are only supported for Amazon Web Services accounts set to the default general purpose bucket quota of 10,000. If you have an approved general purpose bucket quota above 10,000, you must send paginated ListBuckets requests to list your account’s buckets. All unpaginated ListBuckets requests will be rejected for Amazon Web Services accounts with a general purpose bucket quota greater than 10,000. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
bucket_arn,
bucket_region,
creation_date,
name
FROM aws.s3.buckets
WHERE region = '{{ region }}' -- required
AND `max-buckets` = '{{ max-buckets }}'
AND `continuation-token` = '{{ continuation-token }}'
AND prefix = '{{ prefix }}'
AND `bucket-region` = '{{ bucket-region }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bucket"
    values={[
        { label: 'create_bucket', value: 'create_bucket' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bucket">

This action creates an Amazon S3 bucket. To create an Amazon S3 on Outposts bucket, see CreateBucket . Creates a new S3 bucket. To create a bucket, you must set up Amazon S3 and have a valid Amazon Web Services Access Key ID to authenticate requests. Anonymous requests are never allowed to create buckets. By creating the bucket, you become the bucket owner. There are two types of buckets: general purpose buckets and directory buckets. For more information about these bucket types, see Creating, configuring, and working with Amazon S3 buckets in the Amazon S3 User Guide. General purpose buckets exist in a global namespace, which means that each bucket name must be unique across all Amazon Web Services accounts in all the Amazon Web Services Regions within a partition. A partition is a grouping of Regions. Amazon Web Services currently has four partitions: aws (Standard Regions), aws-cn (China Regions), aws-us-gov (Amazon Web Services GovCloud (US)), and aws-eusc (European Sovereign Cloud). When you create a general purpose bucket, you can choose to create a bucket in the shared global namespace or you can choose to create a bucket in your account regional namespace. Your account regional namespace is a subdivision of the global namespace that only your account can create buckets in. For more information on account regional namespaces, see Namespaces for general purpose buckets. General purpose buckets - If you send your CreateBucket request to the s3.amazonaws.com global endpoint, the request goes to the us-east-1 Region. So the signature calculations in Signature Version 4 must use us-east-1 as the Region, even if the location constraint in the request specifies another Region where the bucket is to be created. If you create a bucket in a Region other than US East (N. Virginia), your application must be able to handle 307 redirect. For more information, see Virtual hosting of buckets in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - In addition to the s3:CreateBucket permission, the following permissions are required in a policy when your CreateBucket request includes specific headers: Access control lists (ACLs) - In your CreateBucket request, if you specify an access control list (ACL) and set it to public-read, public-read-write, authenticated-read, or if you explicitly specify any other custom ACLs, both s3:CreateBucket and s3:PutBucketAcl permissions are required. In your CreateBucket request, if you set the ACL to private, or if you don't specify any ACLs, only the s3:CreateBucket permission is required. Object Lock - In your CreateBucket request, if you set x-amz-bucket-object-lock-enabled to true, the s3:PutBucketObjectLockConfiguration and s3:PutBucketVersioning permissions are required. S3 Object Ownership - If your CreateBucket request includes the x-amz-object-ownership header, then the s3:PutBucketOwnershipControls permission is required. To set an ACL on a bucket as part of a CreateBucket request, you must explicitly set S3 Object Ownership for the bucket to a different value than the default, BucketOwnerEnforced. Additionally, if your desired bucket ACL grants public access, you must first create the bucket (without the bucket ACL) and then explicitly disable Block Public Access on the bucket before using PutBucketAcl to set the ACL. If you try to create a bucket with a public ACL, the request will fail. For the majority of modern use cases in S3, we recommend that you keep all Block Public Access settings enabled and keep ACLs disabled. If you would like to share data with users outside of your account, you can use bucket policies as needed. For more information, see Controlling ownership of objects and disabling ACLs for your bucket and Blocking public access to your Amazon S3 storage in the Amazon S3 User Guide. S3 Block Public Access - If your specific use case requires granting public access to your S3 resources, you can disable Block Public Access. Specifically, you can create a new bucket with Block Public Access enabled, then separately call the DeletePublicAccessBlock API. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about S3 Block Public Access, see Blocking public access to your Amazon S3 storage in the Amazon S3 User Guide. Directory bucket permissions - You must have the s3express:CreateBucket permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. The permissions for ACLs, Object Lock, S3 Object Ownership, and S3 Block Public Access are not supported for directory buckets. For directory buckets, all Block Public Access settings are enabled at the bucket level and S3 Object Ownership is set to Bucket owner enforced (ACLs disabled). These settings can't be modified. For more information about permissions for creating and working with directory buckets, see Directory buckets in the Amazon S3 User Guide. For more information about supported S3 features for directory buckets, see Features of S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following operations are related to CreateBucket: PutObject DeleteBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
INSERT INTO aws.s3.buckets (
CreateBucketConfiguration,
bucket,
region,
`x-amz-acl`,
`x-amz-grant-full-control`,
`x-amz-grant-read`,
`x-amz-grant-read-acp`,
`x-amz-grant-write`,
`x-amz-grant-write-acp`,
`x-amz-bucket-object-lock-enabled`,
`x-amz-object-ownership`,
`x-amz-bucket-namespace`
)
SELECT 
'{{ CreateBucketConfiguration }}',
'{{ bucket }}',
'{{ region }}',
'{{ x-amz-acl }}',
'{{ x-amz-grant-full-control }}',
'{{ x-amz-grant-read }}',
'{{ x-amz-grant-read-acp }}',
'{{ x-amz-grant-write }}',
'{{ x-amz-grant-write-acp }}',
'{{ x-amz-bucket-object-lock-enabled }}',
'{{ x-amz-object-ownership }}',
'{{ x-amz-bucket-namespace }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: buckets
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the buckets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the buckets resource.
    - name: CreateBucketConfiguration
      description: |
        The configuration information for the bucket.
      value:
        LocationConstraint: "{{ LocationConstraint }}"
        Location:
          Type: "{{ Type }}"
          Name: "{{ Name }}"
        Bucket:
          DataRedundancy: "{{ DataRedundancy }}"
          Type: "{{ Type }}"
        Tags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
    - name: x-amz-acl
      value: "{{ x-amz-acl }}"
      description: The canned ACL to apply to the bucket. This functionality is not supported for directory buckets.
      description: The canned ACL to apply to the bucket. This functionality is not supported for directory buckets.
    - name: x-amz-grant-full-control
      value: "{{ x-amz-grant-full-control }}"
      description: Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This functionality is not supported for directory buckets.
      description: Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This functionality is not supported for directory buckets.
    - name: x-amz-grant-read
      value: "{{ x-amz-grant-read }}"
      description: Allows grantee to list the objects in the bucket. This functionality is not supported for directory buckets.
      description: Allows grantee to list the objects in the bucket. This functionality is not supported for directory buckets.
    - name: x-amz-grant-read-acp
      value: "{{ x-amz-grant-read-acp }}"
      description: Allows grantee to read the bucket ACL. This functionality is not supported for directory buckets.
      description: Allows grantee to read the bucket ACL. This functionality is not supported for directory buckets.
    - name: x-amz-grant-write
      value: "{{ x-amz-grant-write }}"
      description: Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects. This functionality is not supported for directory buckets.
      description: Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects. This functionality is not supported for directory buckets.
    - name: x-amz-grant-write-acp
      value: "{{ x-amz-grant-write-acp }}"
      description: Allows grantee to write the ACL for the applicable bucket. This functionality is not supported for directory buckets.
      description: Allows grantee to write the ACL for the applicable bucket. This functionality is not supported for directory buckets.
    - name: x-amz-bucket-object-lock-enabled
      value: {{ x-amz-bucket-object-lock-enabled }}
      description: Specifies whether you want S3 Object Lock to be enabled for the new bucket. This functionality is not supported for directory buckets.
      description: Specifies whether you want S3 Object Lock to be enabled for the new bucket. This functionality is not supported for directory buckets.
    - name: x-amz-object-ownership
      value: "{{ x-amz-object-ownership }}"
    - name: x-amz-bucket-namespace
      value: "{{ x-amz-bucket-namespace }}"
      description: Specifies the namespace where you want to create your general purpose bucket. When you create a general purpose bucket, you can choose to create a bucket in the shared global namespace or you can choose to create a bucket in your account regional namespace. Your account regional namespace is a subdivision of the global namespace that only your account can create buckets in. For more information on bucket namespaces, see Namespaces for general purpose buckets. General purpose buckets in your account regional namespace must follow a specific naming convention. These buckets consist of a bucket name prefix that you create, and a suffix that contains your 12-digit Amazon Web Services Account ID, the Amazon Web Services Region code, and ends with -an. Bucket names must follow the format bucket-name-prefix-accountId-region-an (for example, amzn-s3-demo-bucket-111122223333-us-west-2-an). For information about bucket naming restrictions, see Account regional namespace naming rules in the Amazon S3 User Guide. This functionality is not supported for directory buckets.
      description: Specifies the namespace where you want to create your general purpose bucket. When you create a general purpose bucket, you can choose to create a bucket in the shared global namespace or you can choose to create a bucket in your account regional namespace. Your account regional namespace is a subdivision of the global namespace that only your account can create buckets in. For more information on bucket namespaces, see Namespaces for general purpose buckets. General purpose buckets in your account regional namespace must follow a specific naming convention. These buckets consist of a bucket name prefix that you create, and a suffix that contains your 12-digit Amazon Web Services Account ID, the Amazon Web Services Region code, and ends with -an. Bucket names must follow the format bucket-name-prefix-accountId-region-an (for example, amzn-s3-demo-bucket-111122223333-us-west-2-an). For information about bucket naming restrictions, see Account regional namespace naming rules in the Amazon S3 User Guide. This functionality is not supported for directory buckets.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bucket_metadata_inventory_table_configuration"
    values={[
        { label: 'update_bucket_metadata_inventory_table_configuration', value: 'update_bucket_metadata_inventory_table_configuration' },
        { label: 'update_bucket_metadata_journal_table_configuration', value: 'update_bucket_metadata_journal_table_configuration' }
    ]}
>
<TabItem value="update_bucket_metadata_inventory_table_configuration">

Enables or disables a live inventory table for an S3 Metadata configuration on a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. Permissions To use this operation, you must have the following permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you want to encrypt your inventory table with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions in your KMS key policy. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. s3:UpdateBucketMetadataInventoryTableConfiguration s3tables:CreateTableBucket s3tables:CreateNamespace s3tables:GetTable s3tables:CreateTable s3tables:PutTablePolicy s3tables:PutTableEncryption kms:DescribeKey The following operations are related to UpdateBucketMetadataInventoryTableConfiguration: CreateBucketMetadataConfiguration DeleteBucketMetadataConfiguration GetBucketMetadataConfiguration UpdateBucketMetadataJournalTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
UPDATE aws.s3.buckets
SET 
InventoryTableConfiguration = '{{ InventoryTableConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND InventoryTableConfiguration = '{{ InventoryTableConfiguration }}' --required
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
<TabItem value="update_bucket_metadata_journal_table_configuration">

Enables or disables journal table record expiration for an S3 Metadata configuration on a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. Permissions To use this operation, you must have the s3:UpdateBucketMetadataJournalTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The following operations are related to UpdateBucketMetadataJournalTableConfiguration: CreateBucketMetadataConfiguration DeleteBucketMetadataConfiguration GetBucketMetadataConfiguration UpdateBucketMetadataInventoryTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
UPDATE aws.s3.buckets
SET 
JournalTableConfiguration = '{{ JournalTableConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND JournalTableConfiguration = '{{ JournalTableConfiguration }}' --required
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket"
    values={[
        { label: 'delete_bucket', value: 'delete_bucket' }
    ]}
>
<TabItem value="delete_bucket">

Deletes the S3 bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. Directory buckets - If multipart uploads in a directory bucket are in progress, you can't delete the bucket until all the in-progress multipart uploads are aborted or completed. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - You must have the s3:DeleteBucket permission on the specified bucket in a policy. Directory bucket permissions - You must have the s3express:DeleteBucket permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. The following operations are related to DeleteBucket: CreateBucket DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.buckets
WHERE bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
