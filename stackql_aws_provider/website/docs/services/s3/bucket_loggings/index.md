--- 
title: bucket_loggings
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_loggings
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

Creates, updates, deletes, gets or lists a <code>bucket_loggings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_loggings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_loggings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_logging"
    values={[
        { label: 'get_bucket_logging', value: 'get_bucket_logging' }
    ]}
>
<TabItem value="get_bucket_logging">

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
    <td><CopyableCode code="target_bucket" /></td>
    <td><code>string</code></td>
    <td>Specifies the bucket where you want Amazon S3 to store server access logs. You can have your logs delivered to any bucket that you own, including the same bucket that is being logged. You can also configure multiple buckets to deliver their logs to the same target bucket. In this case, you should choose a different TargetPrefix for each source bucket so that the delivered log files can be distinguished by key.</td>
</tr>
<tr>
    <td><CopyableCode code="target_grants" /></td>
    <td><code>string</code></td>
    <td>Container for granting information. Buckets that use the bucket owner enforced setting for Object Ownership don't support target grants. For more information, see Permissions for server access log delivery in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="target_object_key_format" /></td>
    <td><code>string</code></td>
    <td>Amazon S3 key format for log objects.</td>
</tr>
<tr>
    <td><CopyableCode code="target_prefix" /></td>
    <td><code>string</code></td>
    <td>A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.</td>
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
    <td><a href="#get_bucket_logging"><CopyableCode code="get_bucket_logging" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Returns the logging status of a bucket and the permissions users have to view and modify that status. The following operations are related to GetBucketLogging: CreateBucket PutBucketLogging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_logging"><CopyableCode code="put_bucket_logging" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BucketLoggingStatus"><code>BucketLoggingStatus</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). This operation is not supported for directory buckets. Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. All logs are saved to buckets in the same Amazon Web Services Region as the source bucket. To set the logging status of a bucket, you must be the bucket owner. The bucket owner is automatically granted FULL_CONTROL to all logs. You use the Grantee request element to grant access to other people. The Permissions request element specifies the kind of access the grantee has to the logs. If the target bucket for log delivery uses the bucket owner enforced setting for S3 Object Ownership, you can't use the Grantee request element to grant access to others. Permissions can only be granted using policies. For more information, see Permissions for server access log delivery in the Amazon S3 User Guide. Grantee Values You can specify the person (grantee) to whom you're assigning access rights (by using request elements) in the following ways. For examples of how to specify these grantee values in JSON format, see the Amazon Web Services CLI example in Enabling Amazon S3 server access logging in the Amazon S3 User Guide. By the person's ID: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;<code>&lt;ID&gt;</code>&lt;&gt;ID&lt;&gt;&lt;/ID&gt;<code>&lt;DisplayName&gt;</code>&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt; DisplayName is optional and ignored in the request. By Email address: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;<code>&lt;EmailAddress&gt;</code>&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;&lt;/Grantee&gt; The grantee is resolved to the CanonicalUser and, in a response to a GETObjectAcl request, appears as the CanonicalUser. By URI: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;<code>&lt;URI&gt;</code>&lt;&gt;http:​//acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt; To enable logging, you use LoggingEnabled and its children request elements. To disable logging, you use an empty BucketLoggingStatus request element: &lt;BucketLoggingStatus xmlns="http:​//doc.s3.amazonaws.com/2006-03-01" /&gt; For more information about server access logging, see Server Access Logging in the Amazon S3 User Guide. For more information about creating a bucket, see CreateBucket. For more information about returning the logging status of a bucket, see GetBucketLogging. The following operations are related to PutBucketLogging: PutObject DeleteBucket CreateBucket GetBucketLogging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the bucket for which to set the logging parameters.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The MD5 hash of the PutBucketLogging request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</td>
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
    defaultValue="get_bucket_logging"
    values={[
        { label: 'get_bucket_logging', value: 'get_bucket_logging' }
    ]}
>
<TabItem value="get_bucket_logging">

This operation is not supported for directory buckets. Returns the logging status of a bucket and the permissions users have to view and modify that status. The following operations are related to GetBucketLogging: CreateBucket PutBucketLogging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
target_bucket,
target_grants,
target_object_key_format,
target_prefix
FROM aws.s3.bucket_loggings
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_logging"
    values={[
        { label: 'put_bucket_logging', value: 'put_bucket_logging' }
    ]}
>
<TabItem value="put_bucket_logging">

End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). This operation is not supported for directory buckets. Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. All logs are saved to buckets in the same Amazon Web Services Region as the source bucket. To set the logging status of a bucket, you must be the bucket owner. The bucket owner is automatically granted FULL_CONTROL to all logs. You use the Grantee request element to grant access to other people. The Permissions request element specifies the kind of access the grantee has to the logs. If the target bucket for log delivery uses the bucket owner enforced setting for S3 Object Ownership, you can't use the Grantee request element to grant access to others. Permissions can only be granted using policies. For more information, see Permissions for server access log delivery in the Amazon S3 User Guide. Grantee Values You can specify the person (grantee) to whom you're assigning access rights (by using request elements) in the following ways. For examples of how to specify these grantee values in JSON format, see the Amazon Web Services CLI example in Enabling Amazon S3 server access logging in the Amazon S3 User Guide. By the person's ID: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;<code>&lt;ID&gt;</code>&lt;&gt;ID&lt;&gt;&lt;/ID&gt;<code>&lt;DisplayName&gt;</code>&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt; DisplayName is optional and ignored in the request. By Email address: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;<code>&lt;EmailAddress&gt;</code>&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;&lt;/Grantee&gt; The grantee is resolved to the CanonicalUser and, in a response to a GETObjectAcl request, appears as the CanonicalUser. By URI: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;<code>&lt;URI&gt;</code>&lt;&gt;http:​//acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt; To enable logging, you use LoggingEnabled and its children request elements. To disable logging, you use an empty BucketLoggingStatus request element: &lt;BucketLoggingStatus xmlns="http:​//doc.s3.amazonaws.com/2006-03-01" /&gt; For more information about server access logging, see Server Access Logging in the Amazon S3 User Guide. For more information about creating a bucket, see CreateBucket. For more information about returning the logging status of a bucket, see GetBucketLogging. The following operations are related to PutBucketLogging: PutObject DeleteBucket CreateBucket GetBucketLogging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_loggings
SET 
BucketLoggingStatus = '{{ BucketLoggingStatus }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND BucketLoggingStatus = '{{ BucketLoggingStatus }}' --required
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>
