--- 
title: object_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - object_attributes
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

Creates, updates, deletes, gets or lists an <code>object_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.object_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_object_attributes"
    values={[
        { label: 'get_object_attributes', value: 'get_object_attributes' }
    ]}
>
<TabItem value="get_object_attributes">

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
    <td><a href="#get_object_attributes"><CopyableCode code="get_object_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-x-amz-object-attributes"><code>x-amz-object-attributes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-max-parts"><code>x-amz-max-parts</code></a>, <a href="#parameter-x-amz-part-number-marker"><code>x-amz-part-number-marker</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Retrieves all of the metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata. GetObjectAttributes combines the functionality of HeadObject and ListParts. All of the data returned with both of those individual calls can be returned with a single call to GetObjectAttributes. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - To use GetObjectAttributes, you must have READ access to the object. The other permissions that you need to use this operation depend on whether the bucket is versioned and if a version ID is passed in the GetObjectAttributes request. If you pass a version ID in your request, you need both the s3:GetObjectVersion and s3:GetObjectVersionAttributes permissions. If you do not pass a version ID in your request, you need the s3:GetObject and s3:GetObjectAttributes permissions. For more information, see Specifying Permissions in a Policy in the Amazon S3 User Guide. If the object that you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission. If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found ("no such key") error. If you don't have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Forbidden ("access denied") error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. Encryption Encryption request headers, like x-amz-server-side-encryption, should not be sent for HEAD requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). The x-amz-server-side-encryption header is used when you PUT an object to S3 and want to specify the encryption method. If you include this header in a GET request for an object that uses these types of keys, you’ll get an HTTP 400 Bad Request error. It's because the encryption method can't be changed when you retrieve the object. If you encrypted an object when you stored the object in Amazon S3 by using server-side encryption with customer-provided encryption keys (SSE-C), then when you retrieve the metadata from the object, you must use the following headers. These headers provide the server with the encryption key required to retrieve the object's metadata. The headers are: x-amz-server-side-encryption-customer-algorithm x-amz-server-side-encryption-customer-key x-amz-server-side-encryption-customer-key-MD5 For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide. Directory bucket permissions - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. Versioning Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request. Conditional request headers Consider the following when using request headers: If both of the If-Match and If-Unmodified-Since headers are present in the request as follows, then Amazon S3 returns the HTTP status code 200 OK and the data requested: If-Match condition evaluates to true. If-Unmodified-Since condition evaluates to false. For more information about conditional requests, see RFC 7232. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows, then Amazon S3 returns the HTTP status code 304 Not Modified: If-None-Match condition evaluates to false. If-Modified-Since condition evaluates to true. For more information about conditional requests, see RFC 7232. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following actions are related to GetObjectAttributes: GetObject GetObjectAcl GetObjectLegalHold GetObjectLockConfiguration GetObjectRetention GetObjectTagging HeadObject ListParts You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the bucket that contains the object. Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format bucket-base-name--zone-id--x-s3 (for example, amzn-s3-demo-bucket--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide. Access points - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. Object Lambda access points are not supported by directory buckets. S3 on Outposts - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see What is S3 on Outposts? in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The object key.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-object-attributes">
    <td><CopyableCode code="x-amz-object-attributes" /></td>
    <td><code>array</code></td>
    <td>Specifies the fields at the root level that you want returned in the response. Fields that you do not specify are not returned.</td>
</tr>
<tr id="parameter-versionId">
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The version ID used to reference a specific version of the object. S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-max-parts">
    <td><CopyableCode code="x-amz-max-parts" /></td>
    <td><code>integer</code></td>
    <td>Sets the maximum number of parts to return. For more information, see Uploading and copying objects using multipart upload in Amazon S3 in the Amazon Simple Storage Service user guide.</td>
</tr>
<tr id="parameter-x-amz-part-number-marker">
    <td><CopyableCode code="x-amz-part-number-marker" /></td>
    <td><code>integer</code></td>
    <td>Specifies the part after which listing should begin. Only parts with higher part numbers will be listed. For more information, see Uploading and copying objects using multipart upload in Amazon S3 in the Amazon Simple Storage Service user guide.</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-algorithm">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-algorithm" /></td>
    <td><code>string</code></td>
    <td>Specifies the algorithm to use when encrypting the object (for example, AES256). This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-key">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-key" /></td>
    <td><code>string</code></td>
    <td>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-key-MD5">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-key-MD5" /></td>
    <td><code>string</code></td>
    <td>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. This functionality is not supported for directory buckets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_object_attributes"
    values={[
        { label: 'get_object_attributes', value: 'get_object_attributes' }
    ]}
>
<TabItem value="get_object_attributes">

Retrieves all of the metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata. GetObjectAttributes combines the functionality of HeadObject and ListParts. All of the data returned with both of those individual calls can be returned with a single call to GetObjectAttributes. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - To use GetObjectAttributes, you must have READ access to the object. The other permissions that you need to use this operation depend on whether the bucket is versioned and if a version ID is passed in the GetObjectAttributes request. If you pass a version ID in your request, you need both the s3:GetObjectVersion and s3:GetObjectVersionAttributes permissions. If you do not pass a version ID in your request, you need the s3:GetObject and s3:GetObjectAttributes permissions. For more information, see Specifying Permissions in a Policy in the Amazon S3 User Guide. If the object that you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission. If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found ("no such key") error. If you don't have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Forbidden ("access denied") error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. Encryption Encryption request headers, like x-amz-server-side-encryption, should not be sent for HEAD requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). The x-amz-server-side-encryption header is used when you PUT an object to S3 and want to specify the encryption method. If you include this header in a GET request for an object that uses these types of keys, you’ll get an HTTP 400 Bad Request error. It's because the encryption method can't be changed when you retrieve the object. If you encrypted an object when you stored the object in Amazon S3 by using server-side encryption with customer-provided encryption keys (SSE-C), then when you retrieve the metadata from the object, you must use the following headers. These headers provide the server with the encryption key required to retrieve the object's metadata. The headers are: x-amz-server-side-encryption-customer-algorithm x-amz-server-side-encryption-customer-key x-amz-server-side-encryption-customer-key-MD5 For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide. Directory bucket permissions - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. Versioning Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request. Conditional request headers Consider the following when using request headers: If both of the If-Match and If-Unmodified-Since headers are present in the request as follows, then Amazon S3 returns the HTTP status code 200 OK and the data requested: If-Match condition evaluates to true. If-Unmodified-Since condition evaluates to false. For more information about conditional requests, see RFC 7232. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows, then Amazon S3 returns the HTTP status code 304 Not Modified: If-None-Match condition evaluates to false. If-Modified-Since condition evaluates to true. For more information about conditional requests, see RFC 7232. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following actions are related to GetObjectAttributes: GetObject GetObjectAcl GetObjectLegalHold GetObjectLockConfiguration GetObjectRetention GetObjectTagging HeadObject ListParts You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
line_items
FROM aws.s3.object_attributes
WHERE bucket = '{{ bucket }}' -- required
AND key = '{{ key }}' -- required
AND `x-amz-object-attributes` = '{{ x-amz-object-attributes }}' -- required
AND region = '{{ region }}' -- required
AND versionId = '{{ versionId }}'
AND `x-amz-max-parts` = '{{ x-amz-max-parts }}'
AND `x-amz-part-number-marker` = '{{ x-amz-part-number-marker }}'
AND `x-amz-server-side-encryption-customer-algorithm` = '{{ x-amz-server-side-encryption-customer-algorithm }}'
AND `x-amz-server-side-encryption-customer-key` = '{{ x-amz-server-side-encryption-customer-key }}'
AND `x-amz-server-side-encryption-customer-key-MD5` = '{{ x-amz-server-side-encryption-customer-key-MD5 }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
