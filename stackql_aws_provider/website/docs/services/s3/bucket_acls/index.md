--- 
title: bucket_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_acls
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

Creates, updates, deletes, gets or lists a <code>bucket_acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_acls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_acl"
    values={[
        { label: 'get_bucket_acl', value: 'get_bucket_acl' }
    ]}
>
<TabItem value="get_bucket_acl">

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
    <td><a href="#get_bucket_acl"><CopyableCode code="get_bucket_acl" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. This implementation of the GET action uses the acl subresource to return the access control list (ACL) of a bucket. To use GET to return the ACL of the bucket, you must have the READ_ACP access to the bucket. If READ_ACP permission is granted to the anonymous user, you can return the ACL of the bucket without using an authorization header. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes. If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the bucket-owner-full-control ACL with the owner being the account that created the bucket. For more information, see Controlling object ownership and disabling ACLs in the Amazon S3 User Guide. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt. The following operations are related to GetBucketAcl: ListObjects</td>
</tr>
<tr>
    <td><a href="#put_bucket_acl"><CopyableCode code="put_bucket_acl" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write"><code>x-amz-grant-write</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). This operation is not supported for directory buckets. Sets the permissions on an existing bucket using access control lists (ACL). For more information, see Using ACLs. To set the ACL of a bucket, you must have the WRITE_ACP permission. You can use one of the following two ways to set a bucket's permissions: Specify the ACL in the request body Specify permissions using request headers You cannot specify access permission using both the body and the request headers. Depending on your application needs, you may choose to set the ACL on a bucket using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, then you can continue to use that approach. If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the AccessControlListNotSupported error code. Requests to read ACLs are still supported. For more information, see Controlling object ownership in the Amazon S3 User Guide. Permissions You can set access permissions by using one of the following methods: Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL. Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use the x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-write header grants create, overwrite, and delete objects permission to LogDelivery group predefined by Amazon S3 and two Amazon Web Services accounts identified by their email addresses. x-amz-grant-write: uri="http:​//acs.amazonaws.com/groups/s3/LogDelivery", id="111122223333", id="555566667777" You can use either a canned ACL or specify access permissions explicitly. You cannot do both. Grantee Values You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways. For examples of how to specify these grantee values in JSON format, see the Amazon Web Services CLI example in Enabling Amazon S3 server access logging in the Amazon S3 User Guide. By the person's ID: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;<code>&lt;ID&gt;</code>&lt;&gt;ID&lt;&gt;&lt;/ID&gt;<code>&lt;DisplayName&gt;</code>&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt; DisplayName is optional and ignored in the request By URI: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;<code>&lt;URI&gt;</code>&lt;&gt;http:​//acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt; By Email address: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;<code>&lt;EmailAddress&gt;</code>&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;&&lt;/Grantee&gt; The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser. Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. The following operations are related to PutBucketAcl: CreateBucket DeleteBucket GetObjectAcl You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The bucket to which to apply the ACL.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The Base64 encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</td>
</tr>
<tr id="parameter-x-amz-acl">
    <td><CopyableCode code="x-amz-acl" /></td>
    <td><code>string</code></td>
    <td>The canned ACL to apply to the bucket.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-grant-full-control">
    <td><CopyableCode code="x-amz-grant-full-control" /></td>
    <td><code>string</code></td>
    <td>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</td>
</tr>
<tr id="parameter-x-amz-grant-read">
    <td><CopyableCode code="x-amz-grant-read" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to list the objects in the bucket.</td>
</tr>
<tr id="parameter-x-amz-grant-read-acp">
    <td><CopyableCode code="x-amz-grant-read-acp" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to read the bucket ACL.</td>
</tr>
<tr id="parameter-x-amz-grant-write">
    <td><CopyableCode code="x-amz-grant-write" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.</td>
</tr>
<tr id="parameter-x-amz-grant-write-acp">
    <td><CopyableCode code="x-amz-grant-write-acp" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to write the ACL for the applicable bucket.</td>
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
    defaultValue="get_bucket_acl"
    values={[
        { label: 'get_bucket_acl', value: 'get_bucket_acl' }
    ]}
>
<TabItem value="get_bucket_acl">

This operation is not supported for directory buckets. This implementation of the GET action uses the acl subresource to return the access control list (ACL) of a bucket. To use GET to return the ACL of the bucket, you must have the READ_ACP access to the bucket. If READ_ACP permission is granted to the anonymous user, you can return the ACL of the bucket without using an authorization header. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes. If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the bucket-owner-full-control ACL with the owner being the account that created the bucket. For more information, see Controlling object ownership and disabling ACLs in the Amazon S3 User Guide. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt. The following operations are related to GetBucketAcl: ListObjects

```sql
SELECT
line_items
FROM aws.s3.bucket_acls
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_acl"
    values={[
        { label: 'put_bucket_acl', value: 'put_bucket_acl' }
    ]}
>
<TabItem value="put_bucket_acl">

End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). This operation is not supported for directory buckets. Sets the permissions on an existing bucket using access control lists (ACL). For more information, see Using ACLs. To set the ACL of a bucket, you must have the WRITE_ACP permission. You can use one of the following two ways to set a bucket's permissions: Specify the ACL in the request body Specify permissions using request headers You cannot specify access permission using both the body and the request headers. Depending on your application needs, you may choose to set the ACL on a bucket using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, then you can continue to use that approach. If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the AccessControlListNotSupported error code. Requests to read ACLs are still supported. For more information, see Controlling object ownership in the Amazon S3 User Guide. Permissions You can set access permissions by using one of the following methods: Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL. Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use the x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-write header grants create, overwrite, and delete objects permission to LogDelivery group predefined by Amazon S3 and two Amazon Web Services accounts identified by their email addresses. x-amz-grant-write: uri="http:​//acs.amazonaws.com/groups/s3/LogDelivery", id="111122223333", id="555566667777" You can use either a canned ACL or specify access permissions explicitly. You cannot do both. Grantee Values You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways. For examples of how to specify these grantee values in JSON format, see the Amazon Web Services CLI example in Enabling Amazon S3 server access logging in the Amazon S3 User Guide. By the person's ID: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;<code>&lt;ID&gt;</code>&lt;&gt;ID&lt;&gt;&lt;/ID&gt;<code>&lt;DisplayName&gt;</code>&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt; DisplayName is optional and ignored in the request By URI: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;<code>&lt;URI&gt;</code>&lt;&gt;http:​//acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt; By Email address: &lt;Grantee xmlns:xsi="http:​//www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;<code>&lt;EmailAddress&gt;</code>&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;&&lt;/Grantee&gt; The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser. Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. The following operations are related to PutBucketAcl: CreateBucket DeleteBucket GetObjectAcl You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_acls
SET 
AccessControlPolicy = '{{ AccessControlPolicy }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-acl` = '{{ x-amz-acl}}'
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-grant-full-control` = '{{ x-amz-grant-full-control}}'
AND `x-amz-grant-read` = '{{ x-amz-grant-read}}'
AND `x-amz-grant-read-acp` = '{{ x-amz-grant-read-acp}}'
AND `x-amz-grant-write` = '{{ x-amz-grant-write}}'
AND `x-amz-grant-write-acp` = '{{ x-amz-grant-write-acp}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>
