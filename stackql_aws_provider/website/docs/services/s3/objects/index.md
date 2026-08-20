--- 
title: objects
hide_title: false
hide_table_of_contents: false
keywords:
  - objects
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

Creates, updates, deletes, gets or lists an <code>objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.objects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_object"
    values={[
        { label: 'get_object', value: 'get_object' },
        { label: 'list_objects', value: 'list_objects' }
    ]}
>
<TabItem value="get_object">

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
    <td><CopyableCode code="contents" /></td>
    <td><code>string</code></td>
    <td>The raw object content. Text objects only - binary content is not supported and may be mangled in transit.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_objects">

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
    <td><CopyableCode code="checksum_algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm that was used to create a checksum of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum_type" /></td>
    <td><code>string</code></td>
    <td>The checksum type that is used to calculate the object’s checksum value. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata. The ETag may or may not be an MD5 digest of the object data. Whether or not it is depends on how the object was created and how it is encrypted as described below: Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are an MD5 digest of their object data. Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are not an MD5 digest of their object data. If an object is created by either the Multipart Upload or Part Copy operation, the ETag is not an MD5 digest, regardless of the method of encryption. If an object is larger than 16 MB, the Amazon Web Services Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag will not be an MD5 digest. Directory buckets - MD5 is not supported by directory buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name that you assign to an object. You use the object key to retrieve the object.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string</code></td>
    <td>Creation date of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the object Directory buckets - The bucket owner is returned as the object owner.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_status" /></td>
    <td><code>string</code></td>
    <td>Specifies the restoration status of an object. Objects in certain storage classes must be restored before they can be retrieved. For more information about these storage classes and how to work with archived objects, see Working with archived objects in the Amazon S3 User Guide. This functionality is not supported for directory buckets. Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size in bytes of the object</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>The class of storage used to store the object. Directory buckets - Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</td>
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
    <td><a href="#get_object"><CopyableCode code="get_object" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-Range"><code>Range</code></a>, <a href="#parameter-response-cache-control"><code>response-cache-control</code></a>, <a href="#parameter-response-content-disposition"><code>response-content-disposition</code></a>, <a href="#parameter-response-content-encoding"><code>response-content-encoding</code></a>, <a href="#parameter-response-content-language"><code>response-content-language</code></a>, <a href="#parameter-response-content-type"><code>response-content-type</code></a>, <a href="#parameter-response-expires"><code>response-expires</code></a>, <a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-partNumber"><code>partNumber</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-checksum-mode"><code>x-amz-checksum-mode</code></a></td>
    <td>Retrieves an object from Amazon S3. In the GetObject request, specify the full key name for the object. General purpose buckets - Both the virtual-hosted-style requests and the path-style requests are supported. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg, specify the object key name as /photos/2006/February/sample.jpg. For a path-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named examplebucket, specify the object key name as /examplebucket/photos/2006/February/sample.jpg. For more information about request types, see HTTP Host Header Bucket Specification in the Amazon S3 User Guide. Directory buckets - Only virtual-hosted-style requests are supported. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named amzn-s3-demo-bucket--usw2-az1--x-s3, specify the object key name as /photos/2006/February/sample.jpg. Also, when you make requests to this API operation, your requests are sent to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - You must have the required permissions in a policy. To use GetObject, you must have the READ access to the object (or version). If you grant READ access to the anonymous user, the GetObject operation returns the object without using an authorization header. For more information, see Specifying permissions in a policy in the Amazon S3 User Guide. If you include a versionId in your request header, you must have the s3:GetObjectVersion permission to access a specific version of an object. The s3:GetObject permission is not required in this scenario. If you request the current version of an object without a specific versionId in the request header, only the s3:GetObject permission is required. The s3:GetObjectVersion permission is not required in this scenario. If the object that you request doesn’t exist, the error that Amazon S3 returns depends on whether you also have the s3:ListBucket permission. If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found error. If you don’t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Access Denied error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If the object is encrypted using SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. Storage classes If the object you are retrieving is stored in the S3 Glacier Flexible Retrieval storage class, the S3 Glacier Deep Archive storage class, the S3 Intelligent-Tiering Archive Access tier, or the S3 Intelligent-Tiering Deep Archive Access tier, before you can retrieve the object you must first restore a copy using RestoreObject. Otherwise, this operation returns an InvalidObjectState error. For information about restoring archived objects, see Restoring Archived Objects in the Amazon S3 User Guide. Directory buckets - Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Unsupported storage class values won't write a destination object and will respond with the HTTP status code 400 Bad Request. Encryption Encryption request headers, like x-amz-server-side-encryption, should not be sent for the GetObject requests, if your object uses server-side encryption with Amazon S3 managed encryption keys (SSE-S3), server-side encryption with Key Management Service (KMS) keys (SSE-KMS), or dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS). If you include the header in your GetObject requests for the object that uses these types of keys, you’ll get an HTTP 400 Bad Request error. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. SSE-C isn't supported. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. Overriding response header values through the request There are times when you want to override certain response header values of a GetObject response. For example, you might override the Content-Disposition response header value through your GetObject request. You can override values for a set of response headers. These modified response header values are included only in a successful response, that is, when the HTTP status code 200 OK is returned. The headers you can override using the following query parameters in the request are a subset of the headers that Amazon S3 accepts when you create an object. The response headers that you can override for the GetObject response are Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, and Expires. To override values for a set of response headers in the GetObject response, you can use the following query parameters in the request. response-cache-control response-content-disposition response-content-encoding response-content-language response-content-type response-expires When you use these parameters, you must sign the request by using either an Authorization header or a presigned URL. These parameters cannot be used with an unsigned (anonymous) request. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to GetObject: ListBuckets GetObjectAcl You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#list_objects"><CopyableCode code="list_objects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-encoding-type"><code>encoding-type</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-max-keys"><code>max-keys</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-optional-object-attributes"><code>x-amz-optional-object-attributes</code></a></td>
    <td>This operation is not supported for directory buckets. Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Be sure to design your application to parse the contents of the response and handle it appropriately. This action has been revised. We recommend that you use the newer version, ListObjectsV2, when developing applications. For backward compatibility, Amazon S3 continues to support ListObjects. The following operations are related to ListObjects: ListObjectsV2 GetObject PutObject CreateBucket ListBuckets You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_object"><CopyableCode code="put_object" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-contents"><code>contents</code></a></td>
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-Cache-Control"><code>Cache-Control</code></a>, <a href="#parameter-Content-Disposition"><code>Content-Disposition</code></a>, <a href="#parameter-Content-Encoding"><code>Content-Encoding</code></a>, <a href="#parameter-Content-Language"><code>Content-Language</code></a>, <a href="#parameter-Content-Length"><code>Content-Length</code></a>, <a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-checksum-crc32"><code>x-amz-checksum-crc32</code></a>, <a href="#parameter-x-amz-checksum-crc32c"><code>x-amz-checksum-crc32c</code></a>, <a href="#parameter-x-amz-checksum-crc64nvme"><code>x-amz-checksum-crc64nvme</code></a>, <a href="#parameter-x-amz-checksum-sha1"><code>x-amz-checksum-sha1</code></a>, <a href="#parameter-x-amz-checksum-sha256"><code>x-amz-checksum-sha256</code></a>, <a href="#parameter-x-amz-checksum-sha512"><code>x-amz-checksum-sha512</code></a>, <a href="#parameter-x-amz-checksum-md5"><code>x-amz-checksum-md5</code></a>, <a href="#parameter-x-amz-checksum-xxhash64"><code>x-amz-checksum-xxhash64</code></a>, <a href="#parameter-x-amz-checksum-xxhash3"><code>x-amz-checksum-xxhash3</code></a>, <a href="#parameter-x-amz-checksum-xxhash128"><code>x-amz-checksum-xxhash128</code></a>, <a href="#parameter-Expires"><code>Expires</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-x-amz-write-offset-bytes"><code>x-amz-write-offset-bytes</code></a>, <a href="#parameter-x-amz-meta-"><code>x-amz-meta-</code></a>, <a href="#parameter-x-amz-server-side-encryption"><code>x-amz-server-side-encryption</code></a>, <a href="#parameter-x-amz-storage-class"><code>x-amz-storage-class</code></a>, <a href="#parameter-x-amz-website-redirect-location"><code>x-amz-website-redirect-location</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-server-side-encryption-aws-kms-key-id"><code>x-amz-server-side-encryption-aws-kms-key-id</code></a>, <a href="#parameter-x-amz-server-side-encryption-context"><code>x-amz-server-side-encryption-context</code></a>, <a href="#parameter-x-amz-server-side-encryption-bucket-key-enabled"><code>x-amz-server-side-encryption-bucket-key-enabled</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-tagging"><code>x-amz-tagging</code></a>, <a href="#parameter-x-amz-object-lock-mode"><code>x-amz-object-lock-mode</code></a>, <a href="#parameter-x-amz-object-lock-retain-until-date"><code>x-amz-object-lock-retain-until-date</code></a>, <a href="#parameter-x-amz-object-lock-legal-hold"><code>x-amz-object-lock-legal-hold</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). Adds an object to a bucket. Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. You cannot use PutObject to only update a single piece of metadata for an existing object. You must put the entire object with updated metadata if you want to update some values. If your bucket uses the bucket owner enforced setting for Object Ownership, ACLs are disabled and no longer affect permissions. All objects written to the bucket by any account will be owned by the bucket owner. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. However, Amazon S3 provides features that can modify this behavior: S3 Object Lock - To prevent objects from being deleted or overwritten, you can use Amazon S3 Object Lock in the Amazon S3 User Guide. This functionality is not supported for directory buckets. If-None-Match - Uploads the object only if the object key name does not already exist in the specified bucket. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload, S3 returns a 409 ConditionalRequestConflict response. On a 409 failure, retry the upload. Expects the * character (asterisk). For more information, see Add preconditions to S3 operations with conditional requests in the Amazon S3 User Guide or RFC 7232. This functionality is not supported for S3 on Outposts. S3 Versioning - When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all versions of the objects. For each write request that is made to the same object, Amazon S3 automatically generates a unique version ID of that object being stored in Amazon S3. You can retrieve, replace, or delete any version of the object. For more information about versioning, see Adding Objects to Versioning-Enabled Buckets in the Amazon S3 User Guide. For information about returning the versioning state of a bucket, see GetBucketVersioning. This functionality is not supported for directory buckets. Permissions General purpose bucket permissions - The following permissions are required in your policies when your PutObject request includes specific headers. s3:PutObject - To successfully complete the PutObject request, you must always have the s3:PutObject permission on a bucket to add an object to it. s3:PutObjectAcl - To successfully change the objects ACL of your PutObject request, you must have the s3:PutObjectAcl. s3:PutObjectTagging - To successfully set the tag-set with your PutObject request, you must have the s3:PutObjectTagging. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. Data integrity with Content-MD5 General purpose bucket - To ensure that data is not corrupted traversing the network, use the Content-MD5 header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, Amazon S3 returns an error. Alternatively, when the object's ETag is its MD5 digest, you can calculate the MD5 while putting the object to Amazon S3 and compare the returned ETag to the calculated MD5 value. Directory bucket - This functionality is not supported for directory buckets. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. Errors You might receive an InvalidRequest error for several reasons. Depending on the reason for the error, you might receive one of the following messages: Cannot specify both a write offset value and user-defined object metadata for existing objects. Checksum Type mismatch occurred, expected checksum Type: sha1, actual checksum Type: crc32c. Request body cannot be empty when 'write offset' is specified. For more information about related Amazon S3 APIs, see the following: CopyObject DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#update_object_encryption"><CopyableCode code="update_object_encryption" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ObjectEncryption"><code>ObjectEncryption</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a></td>
    <td>This operation is not supported for directory buckets or Amazon S3 on Outposts buckets. Updates the server-side encryption type of an existing encrypted object in a general purpose bucket. You can use the UpdateObjectEncryption operation to change encrypted objects from server-side encryption with Amazon S3 managed keys (SSE-S3) to server-side encryption with Key Management Service (KMS) keys (SSE-KMS), or to apply S3 Bucket Keys. You can also use the UpdateObjectEncryption operation to change the customer-managed KMS key used to encrypt your data so that you can comply with custom key-rotation standards. Using the UpdateObjectEncryption operation, you can atomically update the server-side encryption type of an existing object in a general purpose bucket without any data movement. The UpdateObjectEncryption operation uses envelope encryption to re-encrypt the data key used to encrypt and decrypt your object with your newly specified server-side encryption type. In other words, when you use the UpdateObjectEncryption operation, your data isn't copied, archived objects in the S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive storage classes aren't restored, and objects in the S3 Intelligent-Tiering storage class aren't moved between tiers. Additionally, the UpdateObjectEncryption operation preserves all object metadata properties, including the storage class, creation date, last modified date, ETag, and checksum properties. For more information, see Updating server-side encryption for existing objects in the Amazon S3 User Guide. By default, all UpdateObjectEncryption requests that specify a customer-managed KMS key are restricted to KMS keys that are owned by the bucket owner's Amazon Web Services account. If you're using Organizations, you can request the ability to use KMS keys owned by other member accounts within your organization by contacting Amazon Web Services Support. Source objects that are unencrypted, or encrypted with either dual-layer server-side encryption with KMS keys (DSSE-KMS) or server-side encryption with customer-provided keys (SSE-C) aren't supported by this operation. Additionally, you cannot specify SSE-S3 encryption as the requested new encryption type UpdateObjectEncryption request. Permissions To use the UpdateObjectEncryption operation, you must have the following permissions: s3:UpdateObjectEncryption kms:Encrypt kms:Decrypt kms:GenerateDataKey kms:ReEncrypt* If you're using Organizations, to use this operation with customer-managed KMS keys from other Amazon Web Services accounts within your organization, you must have the organizations:DescribeAccount permission. Errors You might receive an InvalidRequest error for several reasons. Depending on the reason for the error, you might receive one of the following messages: The UpdateObjectEncryption operation doesn't supported unencrypted source objects. Only source objects encrypted with SSE-S3 or SSE-KMS are supported. The UpdateObjectEncryption operation doesn't support source objects with the encryption type DSSE-KMS or SSE-C. Only source objects encrypted with SSE-S3 or SSE-KMS are supported. The UpdateObjectEncryption operation doesn't support updating the encryption type to DSSE-KMS or SSE-C. Modify the request to specify SSE-KMS for the updated encryption type, and then try again. Requests that modify an object encryption configuration require Amazon Web Services Signature Version 4. Modify the request to use Amazon Web Services Signature Version 4, and then try again. Requests that modify an object encryption configuration require a valid new encryption type. Valid values are SSEKMS. Modify the request to specify SSE-KMS for the updated encryption type, and then try again. Requests that modify an object's encryption type to SSE-KMS require an Amazon Web Services KMS key Amazon Resource Name (ARN). Modify the request to specify a KMS key ARN, and then try again. Requests that modify an object's encryption type to SSE-KMS require a valid Amazon Web Services KMS key Amazon Resource Name (ARN). Confirm that you have a correctly formatted KMS key ARN in your request, and then try again. The BucketKeyEnabled value isn't valid. Valid values are true or false. Modify the request to specify a valid value, and then try again. You might receive an AccessDenied error for several reasons. Depending on the reason for the error, you might receive one of the following messages: The Amazon Web Services KMS key in the request must be owned by the same account as the bucket. Modify the request to specify a KMS key from the same account, and then try again. The bucket owner's account was approved to make UpdateObjectEncryption requests that use any Amazon Web Services KMS key in their organization, but the bucket owner's account isn't part of an organization in Organizations. Make sure that the bucket owner's account and the specified KMS key belong to the same organization, and then try again. The specified Amazon Web Services KMS key must be from the same organization in Organizations as the bucket. Specify a KMS key that belongs to the same organization as the bucket, and then try again. The encryption type for the specified object can’t be updated because that object is protected by S3 Object Lock. If the object has a governance-mode retention period or a legal hold, you must first remove the Object Lock status on the object before you issue your UpdateObjectEncryption request. You can't use the UpdateObjectEncryption operation with objects that have an Object Lock compliance mode retention period applied to them.</td>
</tr>
<tr>
    <td><a href="#put_object"><CopyableCode code="put_object" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-contents"><code>contents</code></a></td>
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-Cache-Control"><code>Cache-Control</code></a>, <a href="#parameter-Content-Disposition"><code>Content-Disposition</code></a>, <a href="#parameter-Content-Encoding"><code>Content-Encoding</code></a>, <a href="#parameter-Content-Language"><code>Content-Language</code></a>, <a href="#parameter-Content-Length"><code>Content-Length</code></a>, <a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-checksum-crc32"><code>x-amz-checksum-crc32</code></a>, <a href="#parameter-x-amz-checksum-crc32c"><code>x-amz-checksum-crc32c</code></a>, <a href="#parameter-x-amz-checksum-crc64nvme"><code>x-amz-checksum-crc64nvme</code></a>, <a href="#parameter-x-amz-checksum-sha1"><code>x-amz-checksum-sha1</code></a>, <a href="#parameter-x-amz-checksum-sha256"><code>x-amz-checksum-sha256</code></a>, <a href="#parameter-x-amz-checksum-sha512"><code>x-amz-checksum-sha512</code></a>, <a href="#parameter-x-amz-checksum-md5"><code>x-amz-checksum-md5</code></a>, <a href="#parameter-x-amz-checksum-xxhash64"><code>x-amz-checksum-xxhash64</code></a>, <a href="#parameter-x-amz-checksum-xxhash3"><code>x-amz-checksum-xxhash3</code></a>, <a href="#parameter-x-amz-checksum-xxhash128"><code>x-amz-checksum-xxhash128</code></a>, <a href="#parameter-Expires"><code>Expires</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-x-amz-write-offset-bytes"><code>x-amz-write-offset-bytes</code></a>, <a href="#parameter-x-amz-meta-"><code>x-amz-meta-</code></a>, <a href="#parameter-x-amz-server-side-encryption"><code>x-amz-server-side-encryption</code></a>, <a href="#parameter-x-amz-storage-class"><code>x-amz-storage-class</code></a>, <a href="#parameter-x-amz-website-redirect-location"><code>x-amz-website-redirect-location</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-server-side-encryption-aws-kms-key-id"><code>x-amz-server-side-encryption-aws-kms-key-id</code></a>, <a href="#parameter-x-amz-server-side-encryption-context"><code>x-amz-server-side-encryption-context</code></a>, <a href="#parameter-x-amz-server-side-encryption-bucket-key-enabled"><code>x-amz-server-side-encryption-bucket-key-enabled</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-tagging"><code>x-amz-tagging</code></a>, <a href="#parameter-x-amz-object-lock-mode"><code>x-amz-object-lock-mode</code></a>, <a href="#parameter-x-amz-object-lock-retain-until-date"><code>x-amz-object-lock-retain-until-date</code></a>, <a href="#parameter-x-amz-object-lock-legal-hold"><code>x-amz-object-lock-legal-hold</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). Adds an object to a bucket. Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. You cannot use PutObject to only update a single piece of metadata for an existing object. You must put the entire object with updated metadata if you want to update some values. If your bucket uses the bucket owner enforced setting for Object Ownership, ACLs are disabled and no longer affect permissions. All objects written to the bucket by any account will be owned by the bucket owner. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. However, Amazon S3 provides features that can modify this behavior: S3 Object Lock - To prevent objects from being deleted or overwritten, you can use Amazon S3 Object Lock in the Amazon S3 User Guide. This functionality is not supported for directory buckets. If-None-Match - Uploads the object only if the object key name does not already exist in the specified bucket. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload, S3 returns a 409 ConditionalRequestConflict response. On a 409 failure, retry the upload. Expects the * character (asterisk). For more information, see Add preconditions to S3 operations with conditional requests in the Amazon S3 User Guide or RFC 7232. This functionality is not supported for S3 on Outposts. S3 Versioning - When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all versions of the objects. For each write request that is made to the same object, Amazon S3 automatically generates a unique version ID of that object being stored in Amazon S3. You can retrieve, replace, or delete any version of the object. For more information about versioning, see Adding Objects to Versioning-Enabled Buckets in the Amazon S3 User Guide. For information about returning the versioning state of a bucket, see GetBucketVersioning. This functionality is not supported for directory buckets. Permissions General purpose bucket permissions - The following permissions are required in your policies when your PutObject request includes specific headers. s3:PutObject - To successfully complete the PutObject request, you must always have the s3:PutObject permission on a bucket to add an object to it. s3:PutObjectAcl - To successfully change the objects ACL of your PutObject request, you must have the s3:PutObjectAcl. s3:PutObjectTagging - To successfully set the tag-set with your PutObject request, you must have the s3:PutObjectTagging. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. Data integrity with Content-MD5 General purpose bucket - To ensure that data is not corrupted traversing the network, use the Content-MD5 header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, Amazon S3 returns an error. Alternatively, when the object's ETag is its MD5 digest, you can calculate the MD5 while putting the object to Amazon S3 and compare the returned ETag to the calculated MD5 value. Directory bucket - This functionality is not supported for directory buckets. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. Errors You might receive an InvalidRequest error for several reasons. Depending on the reason for the error, you might receive one of the following messages: Cannot specify both a write offset value and user-defined object metadata for existing objects. Checksum Type mismatch occurred, expected checksum Type: sha1, actual checksum Type: crc32c. Request body cannot be empty when 'write offset' is specified. For more information about related Amazon S3 APIs, see the following: CopyObject DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_object"><CopyableCode code="delete_object" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-mfa"><code>x-amz-mfa</code></a>, <a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-bypass-governance-retention"><code>x-amz-bypass-governance-retention</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-x-amz-if-match-last-modified-time"><code>x-amz-if-match-last-modified-time</code></a>, <a href="#parameter-x-amz-if-match-size"><code>x-amz-if-match-size</code></a></td>
    <td>Removes an object from a bucket. The behavior depends on the bucket's versioning state: If bucket versioning is not enabled, the operation permanently deletes the object. If bucket versioning is enabled, the operation inserts a delete marker, which becomes the current version of the object. To permanently delete an object in a versioned bucket, you must include the object’s versionId in the request. For more information about versioning-enabled buckets, see Deleting object versions from a versioning-enabled bucket. If bucket versioning is suspended, the operation removes the object that has a null versionId, if there is one, and inserts a delete marker that becomes the current version of the object. If there isn't an object with a null versionId, and all versions of the object have a versionId, Amazon S3 does not remove the object and only inserts a delete marker. To permanently delete an object that has a versionId, you must include the object’s versionId in the request. For more information about versioning-suspended buckets, see Deleting objects from versioning-suspended buckets. Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. To remove a specific version, you must use the versionId query parameter. Using this query parameter permanently deletes the version. If the object deleted is a delete marker, Amazon S3 sets the response header x-amz-delete-marker to true. If the object you want to delete is in a bucket where the bucket versioning configuration is MFA Delete enabled, you must include the x-amz-mfa request header in the DELETE versionId request. Requests that include x-amz-mfa must use HTTPS. For more information about MFA Delete, see Using MFA Delete in the Amazon S3 User Guide. To see sample requests that use versioning, see Sample Request. Directory buckets - MFA delete is not supported by directory buckets. You can delete objects by explicitly calling DELETE Object or calling (PutBucketLifecycle) to enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them the s3:DeleteObject, s3:DeleteObjectVersion, and s3:PutLifeCycleConfiguration actions. Directory buckets - S3 Lifecycle is not supported by directory buckets. Permissions General purpose bucket permissions - The following permissions are required in your policies when your DeleteObjects request includes specific headers. s3:DeleteObject - To delete an object from a bucket, you must always have the s3:DeleteObject permission. s3:DeleteObjectVersion - To delete a specific version of an object from a versioning-enabled bucket, you must have the s3:DeleteObjectVersion permission. If the s3:DeleteObject or s3:DeleteObjectVersion permissions are explicitly denied in your bucket policy, attempts to delete any unversioned objects result in a 403 Access Denied error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following action is related to DeleteObject: PutObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt. The If-Match header is supported for both general purpose and directory buckets. IfMatchLastModifiedTime and IfMatchSize is only supported for directory buckets.</td>
</tr>
<tr>
    <td><a href="#delete_objects"><CopyableCode code="delete_objects" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-mfa"><code>x-amz-mfa</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-bypass-governance-retention"><code>x-amz-bypass-governance-retention</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a></td>
    <td>This operation enables you to delete multiple objects from a bucket using a single HTTP request. If you know the object keys that you want to delete, then this operation provides a suitable alternative to sending individual delete requests, reducing per-request overhead. The request can contain a list of up to 1,000 keys that you want to delete. In the XML, you provide the object key names, and optionally, version IDs if you want to delete a specific version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a delete operation and returns the result of that delete, success or failure, in the response. If the object specified in the request isn't found, Amazon S3 confirms the deletion by returning the result as deleted. Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. The operation supports two modes for the response: verbose and quiet. By default, the operation uses verbose mode in which the response includes the result of deletion of each key in your request. In quiet mode the response includes only keys where the delete operation encountered an error. For a successful deletion in a quiet mode, the operation does not return any information about the delete in the response body. When performing this action on an MFA Delete enabled bucket, that attempts to delete any versioned objects, you must include an MFA token. If you do not provide one, the entire request will fail, even if there are non-versioned objects you are trying to delete. If you provide an invalid token, whether there are versioned keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see MFA Delete in the Amazon S3 User Guide. Directory buckets - MFA delete is not supported by directory buckets. Permissions General purpose bucket permissions - The following permissions are required in your policies when your DeleteObjects request includes specific headers. s3:DeleteObject - To delete an object from a bucket, you must always specify the s3:DeleteObject permission. s3:DeleteObjectVersion - To delete a specific version of an object from a versioning-enabled bucket, you must specify the s3:DeleteObjectVersion permission. If the s3:DeleteObject or s3:DeleteObjectVersion permissions are explicitly denied in your bucket policy, attempts to delete any unversioned objects result in a 403 Access Denied error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . Content-MD5 request header General purpose bucket - The Content-MD5 request header is required for all Multi-Object Delete requests. Amazon S3 uses the header value to ensure that your request body has not been altered in transit. Directory bucket - The Content-MD5 request header or a additional checksum request header (including x-amz-checksum-crc32, x-amz-checksum-crc32c, x-amz-checksum-sha1, or x-amz-checksum-sha256) is required for all Multi-Object Delete requests. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to DeleteObjects: CreateMultipartUpload UploadPart CompleteMultipartUpload ListParts AbortMultipartUpload You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The bucket name containing the objects to delete. Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format bucket-base-name--zone-id--x-s3 (for example, amzn-s3-demo-bucket--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide. Access points - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. Object Lambda access points are not supported by directory buckets. S3 on Outposts - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see What is S3 on Outposts? in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Key name of the object to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Cache-Control">
    <td><CopyableCode code="Cache-Control" /></td>
    <td><code>string</code></td>
    <td>Can be used to specify caching behavior along the request/reply chain. For more information, see http:​//www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9.</td>
</tr>
<tr id="parameter-Content-Disposition">
    <td><CopyableCode code="Content-Disposition" /></td>
    <td><code>string</code></td>
    <td>Specifies presentational information for the object. For more information, see https:​//www.rfc-editor.org/rfc/rfc6266#section-4.</td>
</tr>
<tr id="parameter-Content-Encoding">
    <td><CopyableCode code="Content-Encoding" /></td>
    <td><code>string</code></td>
    <td>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see https:​//www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding.</td>
</tr>
<tr id="parameter-Content-Language">
    <td><CopyableCode code="Content-Language" /></td>
    <td><code>string</code></td>
    <td>The language the content is in.</td>
</tr>
<tr id="parameter-Content-Length">
    <td><CopyableCode code="Content-Length" /></td>
    <td><code>integer (int64)</code></td>
    <td>Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see https:​//www.rfc-editor.org/rfc/rfc9110.html#name-content-length.</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The Base64 encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see REST Authentication. The Content-MD5 or x-amz-sdk-checksum-algorithm header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see Uploading objects to an Object Lock enabled bucket in the Amazon S3 User Guide. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>A standard MIME type describing the format of the contents. For more information, see https:​//www.rfc-editor.org/rfc/rfc9110.html#name-content-type.</td>
</tr>
<tr id="parameter-Expires">
    <td><CopyableCode code="Expires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the object is no longer cacheable. For more information, see https:​//www.rfc-editor.org/rfc/rfc7234#section-5.3.</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>Deletes the object if the ETag (entity tag) value provided during the delete operation matches the ETag of the object in S3. If the ETag values do not match, the operation returns a 412 Precondition Failed error. Expects the ETag value as a string. If-Match does accept a string value of an '*' (asterisk) character to denote a match of any ETag. For more information about conditional requests, see RFC 7232.</td>
</tr>
<tr id="parameter-If-Modified-Since">
    <td><CopyableCode code="If-Modified-Since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return the object only if it has been modified since the specified time; otherwise, return a 304 Not Modified error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows: If-None-Match condition evaluates to false, and; If-Modified-Since condition evaluates to true; then, S3 returns 304 Not Modified status code. For more information about conditional requests, see RFC 7232.</td>
</tr>
<tr id="parameter-If-None-Match">
    <td><CopyableCode code="If-None-Match" /></td>
    <td><code>string</code></td>
    <td>Uploads the object only if the object key name does not already exist in the bucket specified. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should retry the upload. Expects the '*' (asterisk) character. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-If-Unmodified-Since">
    <td><CopyableCode code="If-Unmodified-Since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return the object only if it has not been modified since the specified time; otherwise, return a 412 Precondition Failed error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows: If-Match condition evaluates to true, and; If-Unmodified-Since condition evaluates to false; then, S3 returns 200 OK and the data requested. For more information about conditional requests, see RFC 7232.</td>
</tr>
<tr id="parameter-Range">
    <td><CopyableCode code="Range" /></td>
    <td><code>string</code></td>
    <td>Downloads the specified byte range of an object. For more information about the HTTP Range header, see https:​//www.rfc-editor.org/rfc/rfc9110.html#name-range. Amazon S3 doesn't support retrieving multiple ranges of data per GET request.</td>
</tr>
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td>A delimiter is a character that you use to group keys. CommonPrefixes is filtered out from results if it is not lexicographically greater than the key-marker.</td>
</tr>
<tr id="parameter-encoding-type">
    <td><CopyableCode code="encoding-type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Marker is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. Marker can be any key in the bucket.</td>
</tr>
<tr id="parameter-max-keys">
    <td><CopyableCode code="max-keys" /></td>
    <td><code>integer</code></td>
    <td>Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.</td>
</tr>
<tr id="parameter-partNumber">
    <td><CopyableCode code="partNumber" /></td>
    <td><code>integer</code></td>
    <td>Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Limits the response to keys that begin with the specified prefix.</td>
</tr>
<tr id="parameter-response-cache-control">
    <td><CopyableCode code="response-cache-control" /></td>
    <td><code>string</code></td>
    <td>Sets the Cache-Control header of the response.</td>
</tr>
<tr id="parameter-response-content-disposition">
    <td><CopyableCode code="response-content-disposition" /></td>
    <td><code>string</code></td>
    <td>Sets the Content-Disposition header of the response.</td>
</tr>
<tr id="parameter-response-content-encoding">
    <td><CopyableCode code="response-content-encoding" /></td>
    <td><code>string</code></td>
    <td>Sets the Content-Encoding header of the response.</td>
</tr>
<tr id="parameter-response-content-language">
    <td><CopyableCode code="response-content-language" /></td>
    <td><code>string</code></td>
    <td>Sets the Content-Language header of the response.</td>
</tr>
<tr id="parameter-response-content-type">
    <td><CopyableCode code="response-content-type" /></td>
    <td><code>string</code></td>
    <td>Sets the Content-Type header of the response.</td>
</tr>
<tr id="parameter-response-expires">
    <td><CopyableCode code="response-expires" /></td>
    <td><code>string (date-time)</code></td>
    <td>Sets the Expires header of the response.</td>
</tr>
<tr id="parameter-versionId">
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>Version ID used to reference a specific version of the object. For directory buckets in this API operation, only the null value of the version ID is supported.</td>
</tr>
<tr id="parameter-x-amz-acl">
    <td><CopyableCode code="x-amz-acl" /></td>
    <td><code>string</code></td>
    <td>The canned ACL to apply to the object. For more information, see Canned ACL in the Amazon S3 User Guide. When adding a new object, you can use headers to grant ACL-based permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. By default, all objects are private. Only the owner has full access control. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API in the Amazon S3 User Guide. If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a 400 error with the error code AccessControlListNotSupported. For more information, see Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-bypass-governance-retention">
    <td><CopyableCode code="x-amz-bypass-governance-retention" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. To use this header, you must have the s3:BypassGovernanceRetention permission. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-checksum-crc32">
    <td><CopyableCode code="x-amz-checksum-crc32" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit CRC32 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-crc32c">
    <td><CopyableCode code="x-amz-checksum-crc32c" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit CRC32C checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-crc64nvme">
    <td><CopyableCode code="x-amz-checksum-crc64nvme" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit CRC64NVME checksum of the object. The CRC64NVME checksum is always a full object checksum. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-md5">
    <td><CopyableCode code="x-amz-checksum-md5" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit MD5 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-mode">
    <td><CopyableCode code="x-amz-checksum-mode" /></td>
    <td><code>string</code></td>
    <td>To retrieve the checksum, this mode must be enabled.</td>
</tr>
<tr id="parameter-x-amz-checksum-sha1">
    <td><CopyableCode code="x-amz-checksum-sha1" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 160-bit SHA1 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-sha256">
    <td><CopyableCode code="x-amz-checksum-sha256" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 256-bit SHA256 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-sha512">
    <td><CopyableCode code="x-amz-checksum-sha512" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 512-bit SHA512 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-xxhash128">
    <td><CopyableCode code="x-amz-checksum-xxhash128" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit XXHASH128 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-xxhash3">
    <td><CopyableCode code="x-amz-checksum-xxhash3" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit XXHASH3 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-xxhash64">
    <td><CopyableCode code="x-amz-checksum-xxhash64" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit XXHASH64 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-grant-full-control">
    <td><CopyableCode code="x-amz-grant-full-control" /></td>
    <td><code>string</code></td>
    <td>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-grant-read">
    <td><CopyableCode code="x-amz-grant-read" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to read the object data and its metadata. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-grant-read-acp">
    <td><CopyableCode code="x-amz-grant-read-acp" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to read the object ACL. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-grant-write-acp">
    <td><CopyableCode code="x-amz-grant-write-acp" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to write the ACL for the applicable object. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-if-match-last-modified-time">
    <td><CopyableCode code="x-amz-if-match-last-modified-time" /></td>
    <td><code>string (date-time)</code></td>
    <td>If present, the object is deleted only if its modification times matches the provided Timestamp. If the Timestamp values do not match, the operation returns a 412 Precondition Failed error. If the Timestamp matches or if the object doesn’t exist, the operation returns a 204 Success (No Content) response. This functionality is only supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-if-match-size">
    <td><CopyableCode code="x-amz-if-match-size" /></td>
    <td><code>integer (int64)</code></td>
    <td>If present, the object is deleted only if its size matches the provided size in bytes. If the Size value does not match, the operation returns a 412 Precondition Failed error. If the Size matches or if the object doesn’t exist, the operation returns a 204 Success (No Content) response. This functionality is only supported for directory buckets. You can use the If-Match, x-amz-if-match-last-modified-time and x-amz-if-match-size conditional headers in conjunction with each-other or individually.</td>
</tr>
<tr id="parameter-x-amz-meta-">
    <td><CopyableCode code="x-amz-meta-" /></td>
    <td><code>object</code></td>
    <td>A map of metadata to store with the object in S3.</td>
</tr>
<tr id="parameter-x-amz-mfa">
    <td><CopyableCode code="x-amz-mfa" /></td>
    <td><code>string</code></td>
    <td>The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled. When performing the DeleteObjects operation on an MFA delete enabled bucket, which attempts to delete the specified versioned objects, you must include an MFA token. If you don't provide an MFA token, the entire request will fail, even if there are non-versioned objects that you are trying to delete. If you provide an invalid token, whether there are versioned object keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see MFA Delete in the Amazon S3 User Guide. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-legal-hold">
    <td><CopyableCode code="x-amz-object-lock-legal-hold" /></td>
    <td><code>string</code></td>
    <td>Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see Object Lock in the Amazon S3 User Guide. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-mode">
    <td><CopyableCode code="x-amz-object-lock-mode" /></td>
    <td><code>string</code></td>
    <td>The Object Lock mode that you want to apply to this object. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-retain-until-date">
    <td><CopyableCode code="x-amz-object-lock-retain-until-date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when you want this object's Object Lock to expire. Must be formatted as a timestamp parameter. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-optional-object-attributes">
    <td><CopyableCode code="x-amz-optional-object-attributes" /></td>
    <td><code>array</code></td>
    <td>Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum-algorithm or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For the x-amz-checksum-algorithm header, replace algorithm with the supported algorithm from the following list: CRC32 CRC32C CRC64NVME MD5 SHA1 SHA256 SHA512 XXHASH3 XXHASH64 XXHASH128 For more information, see Checking object integrity in the Amazon S3 User Guide. If the individual checksum value you provide through x-amz-checksum-algorithm doesn't match the checksum algorithm you set through x-amz-sdk-checksum-algorithm, Amazon S3 fails the request with a BadDigest error. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption">
    <td><CopyableCode code="x-amz-server-side-encryption" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption algorithm that was used when you store this object in Amazon S3 or Amazon FSx. General purpose buckets - You have four mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest by using server-side encryption with other key options. For more information, see Using Server-Side Encryption in the Amazon S3 User Guide. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-aws-kms-key-id">
    <td><CopyableCode code="x-amz-server-side-encryption-aws-kms-key-id" /></td>
    <td><code>string</code></td>
    <td>Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID. General purpose buckets - If you specify x-amz-server-side-encryption with aws:kms or aws:kms:dsse, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify x-amz-server-side-encryption:aws:kms or x-amz-server-side-encryption:aws:kms:dsse, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3) to protect the data. Directory buckets - To encrypt data using SSE-KMS, it's recommended to specify the x-amz-server-side-encryption header to aws:kms. Then, the x-amz-server-side-encryption-aws-kms-key-id header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the x-amz-server-side-encryption-aws-kms-key-id header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported. Incorrect key specification results in an HTTP 400 Bad Request error.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-bucket-key-enabled">
    <td><CopyableCode code="x-amz-server-side-encryption-bucket-key-enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key. Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-context">
    <td><CopyableCode code="x-amz-server-side-encryption-context" /></td>
    <td><code>string</code></td>
    <td>Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future GetObject operations on this object. General purpose buckets - This value must be explicitly added during CopyObject operations if you want an additional encryption context for your object. For more information, see Encryption context in the Amazon S3 User Guide. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.</td>
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
<tr id="parameter-x-amz-storage-class">
    <td><CopyableCode code="x-amz-storage-class" /></td>
    <td><code>string</code></td>
    <td>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide. Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.</td>
</tr>
<tr id="parameter-x-amz-tagging">
    <td><CopyableCode code="x-amz-tagging" /></td>
    <td><code>string</code></td>
    <td>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1") This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-website-redirect-location">
    <td><CopyableCode code="x-amz-website-redirect-location" /></td>
    <td><code>string</code></td>
    <td>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see Object Key and Metadata in the Amazon S3 User Guide. In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket: x-amz-website-redirect-location: /anotherPage.html In the following example, the request header sets the object redirect to another website: x-amz-website-redirect-location: http:​//www.example.com/ For more information about website hosting in Amazon S3, see Hosting Websites on Amazon S3 and How to Configure Website Page Redirects in the Amazon S3 User Guide. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-write-offset-bytes">
    <td><CopyableCode code="x-amz-write-offset-bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specifies the offset for appending data to existing objects in bytes. The offset must be equal to the size of the existing object being appended to. If no object exists, setting this header to 0 will create a new object. This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in directory buckets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_object"
    values={[
        { label: 'get_object', value: 'get_object' },
        { label: 'list_objects', value: 'list_objects' }
    ]}
>
<TabItem value="get_object">

Retrieves an object from Amazon S3. In the GetObject request, specify the full key name for the object. General purpose buckets - Both the virtual-hosted-style requests and the path-style requests are supported. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg, specify the object key name as /photos/2006/February/sample.jpg. For a path-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named examplebucket, specify the object key name as /examplebucket/photos/2006/February/sample.jpg. For more information about request types, see HTTP Host Header Bucket Specification in the Amazon S3 User Guide. Directory buckets - Only virtual-hosted-style requests are supported. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named amzn-s3-demo-bucket--usw2-az1--x-s3, specify the object key name as /photos/2006/February/sample.jpg. Also, when you make requests to this API operation, your requests are sent to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - You must have the required permissions in a policy. To use GetObject, you must have the READ access to the object (or version). If you grant READ access to the anonymous user, the GetObject operation returns the object without using an authorization header. For more information, see Specifying permissions in a policy in the Amazon S3 User Guide. If you include a versionId in your request header, you must have the s3:GetObjectVersion permission to access a specific version of an object. The s3:GetObject permission is not required in this scenario. If you request the current version of an object without a specific versionId in the request header, only the s3:GetObject permission is required. The s3:GetObjectVersion permission is not required in this scenario. If the object that you request doesn’t exist, the error that Amazon S3 returns depends on whether you also have the s3:ListBucket permission. If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found error. If you don’t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Access Denied error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If the object is encrypted using SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. Storage classes If the object you are retrieving is stored in the S3 Glacier Flexible Retrieval storage class, the S3 Glacier Deep Archive storage class, the S3 Intelligent-Tiering Archive Access tier, or the S3 Intelligent-Tiering Deep Archive Access tier, before you can retrieve the object you must first restore a copy using RestoreObject. Otherwise, this operation returns an InvalidObjectState error. For information about restoring archived objects, see Restoring Archived Objects in the Amazon S3 User Guide. Directory buckets - Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Unsupported storage class values won't write a destination object and will respond with the HTTP status code 400 Bad Request. Encryption Encryption request headers, like x-amz-server-side-encryption, should not be sent for the GetObject requests, if your object uses server-side encryption with Amazon S3 managed encryption keys (SSE-S3), server-side encryption with Key Management Service (KMS) keys (SSE-KMS), or dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS). If you include the header in your GetObject requests for the object that uses these types of keys, you’ll get an HTTP 400 Bad Request error. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. SSE-C isn't supported. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. Overriding response header values through the request There are times when you want to override certain response header values of a GetObject response. For example, you might override the Content-Disposition response header value through your GetObject request. You can override values for a set of response headers. These modified response header values are included only in a successful response, that is, when the HTTP status code 200 OK is returned. The headers you can override using the following query parameters in the request are a subset of the headers that Amazon S3 accepts when you create an object. The response headers that you can override for the GetObject response are Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, and Expires. To override values for a set of response headers in the GetObject response, you can use the following query parameters in the request. response-cache-control response-content-disposition response-content-encoding response-content-language response-content-type response-expires When you use these parameters, you must sign the request by using either an Authorization header or a presigned URL. These parameters cannot be used with an unsigned (anonymous) request. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to GetObject: ListBuckets GetObjectAcl You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
contents
FROM aws.s3.objects
WHERE bucket = '{{ bucket }}' -- required
AND key = '{{ key }}' -- required
AND region = '{{ region }}' -- required
AND `If-Match` = '{{ If-Match }}'
AND `If-Modified-Since` = '{{ If-Modified-Since }}'
AND `If-None-Match` = '{{ If-None-Match }}'
AND `If-Unmodified-Since` = '{{ If-Unmodified-Since }}'
AND Range = '{{ Range }}'
AND `response-cache-control` = '{{ response-cache-control }}'
AND `response-content-disposition` = '{{ response-content-disposition }}'
AND `response-content-encoding` = '{{ response-content-encoding }}'
AND `response-content-language` = '{{ response-content-language }}'
AND `response-content-type` = '{{ response-content-type }}'
AND `response-expires` = '{{ response-expires }}'
AND versionId = '{{ versionId }}'
AND `x-amz-server-side-encryption-customer-algorithm` = '{{ x-amz-server-side-encryption-customer-algorithm }}'
AND `x-amz-server-side-encryption-customer-key` = '{{ x-amz-server-side-encryption-customer-key }}'
AND `x-amz-server-side-encryption-customer-key-MD5` = '{{ x-amz-server-side-encryption-customer-key-MD5 }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND partNumber = '{{ partNumber }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-checksum-mode` = '{{ x-amz-checksum-mode }}'
;
```
</TabItem>
<TabItem value="list_objects">

This operation is not supported for directory buckets. Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Be sure to design your application to parse the contents of the response and handle it appropriately. This action has been revised. We recommend that you use the newer version, ListObjectsV2, when developing applications. For backward compatibility, Amazon S3 continues to support ListObjects. The following operations are related to ListObjects: ListObjectsV2 GetObject PutObject CreateBucket ListBuckets You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
checksum_algorithm,
checksum_type,
e_tag,
key,
last_modified,
owner,
restore_status,
size,
storage_class
FROM aws.s3.objects
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND delimiter = '{{ delimiter }}'
AND `encoding-type` = '{{ encoding-type }}'
AND marker = '{{ marker }}'
AND `max-keys` = '{{ max-keys }}'
AND prefix = '{{ prefix }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-optional-object-attributes` = '{{ x-amz-optional-object-attributes }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="put_object"
    values={[
        { label: 'put_object', value: 'put_object' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="put_object">

End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). Adds an object to a bucket. Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. You cannot use PutObject to only update a single piece of metadata for an existing object. You must put the entire object with updated metadata if you want to update some values. If your bucket uses the bucket owner enforced setting for Object Ownership, ACLs are disabled and no longer affect permissions. All objects written to the bucket by any account will be owned by the bucket owner. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. However, Amazon S3 provides features that can modify this behavior: S3 Object Lock - To prevent objects from being deleted or overwritten, you can use Amazon S3 Object Lock in the Amazon S3 User Guide. This functionality is not supported for directory buckets. If-None-Match - Uploads the object only if the object key name does not already exist in the specified bucket. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload, S3 returns a 409 ConditionalRequestConflict response. On a 409 failure, retry the upload. Expects the * character (asterisk). For more information, see Add preconditions to S3 operations with conditional requests in the Amazon S3 User Guide or RFC 7232. This functionality is not supported for S3 on Outposts. S3 Versioning - When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all versions of the objects. For each write request that is made to the same object, Amazon S3 automatically generates a unique version ID of that object being stored in Amazon S3. You can retrieve, replace, or delete any version of the object. For more information about versioning, see Adding Objects to Versioning-Enabled Buckets in the Amazon S3 User Guide. For information about returning the versioning state of a bucket, see GetBucketVersioning. This functionality is not supported for directory buckets. Permissions General purpose bucket permissions - The following permissions are required in your policies when your PutObject request includes specific headers. s3:PutObject - To successfully complete the PutObject request, you must always have the s3:PutObject permission on a bucket to add an object to it. s3:PutObjectAcl - To successfully change the objects ACL of your PutObject request, you must have the s3:PutObjectAcl. s3:PutObjectTagging - To successfully set the tag-set with your PutObject request, you must have the s3:PutObjectTagging. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. Data integrity with Content-MD5 General purpose bucket - To ensure that data is not corrupted traversing the network, use the Content-MD5 header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, Amazon S3 returns an error. Alternatively, when the object's ETag is its MD5 digest, you can calculate the MD5 while putting the object to Amazon S3 and compare the returned ETag to the calculated MD5 value. Directory bucket - This functionality is not supported for directory buckets. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. Errors You might receive an InvalidRequest error for several reasons. Depending on the reason for the error, you might receive one of the following messages: Cannot specify both a write offset value and user-defined object metadata for existing objects. Checksum Type mismatch occurred, expected checksum Type: sha1, actual checksum Type: crc32c. Request body cannot be empty when 'write offset' is specified. For more information about related Amazon S3 APIs, see the following: CopyObject DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
INSERT INTO aws.s3.objects (
contents,
bucket,
key,
region,
`x-amz-acl`,
`Cache-Control`,
`Content-Disposition`,
`Content-Encoding`,
`Content-Language`,
`Content-Length`,
`Content-MD5`,
`Content-Type`,
`x-amz-sdk-checksum-algorithm`,
`x-amz-checksum-crc32`,
`x-amz-checksum-crc32c`,
`x-amz-checksum-crc64nvme`,
`x-amz-checksum-sha1`,
`x-amz-checksum-sha256`,
`x-amz-checksum-sha512`,
`x-amz-checksum-md5`,
`x-amz-checksum-xxhash64`,
`x-amz-checksum-xxhash3`,
`x-amz-checksum-xxhash128`,
Expires,
`If-Match`,
`If-None-Match`,
`x-amz-grant-full-control`,
`x-amz-grant-read`,
`x-amz-grant-read-acp`,
`x-amz-grant-write-acp`,
`x-amz-write-offset-bytes`,
x-amz-meta-,
`x-amz-server-side-encryption`,
`x-amz-storage-class`,
`x-amz-website-redirect-location`,
`x-amz-server-side-encryption-customer-algorithm`,
`x-amz-server-side-encryption-customer-key`,
`x-amz-server-side-encryption-customer-key-MD5`,
`x-amz-server-side-encryption-aws-kms-key-id`,
`x-amz-server-side-encryption-context`,
`x-amz-server-side-encryption-bucket-key-enabled`,
`x-amz-request-payer`,
`x-amz-tagging`,
`x-amz-object-lock-mode`,
`x-amz-object-lock-retain-until-date`,
`x-amz-object-lock-legal-hold`,
`x-amz-expected-bucket-owner`
)
SELECT 
'{{ contents }}' /* required */,
'{{ bucket }}',
'{{ key }}',
'{{ region }}',
'{{ x-amz-acl }}',
'{{ Cache-Control }}',
'{{ Content-Disposition }}',
'{{ Content-Encoding }}',
'{{ Content-Language }}',
'{{ Content-Length }}',
'{{ Content-MD5 }}',
'{{ Content-Type }}',
'{{ x-amz-sdk-checksum-algorithm }}',
'{{ x-amz-checksum-crc32 }}',
'{{ x-amz-checksum-crc32c }}',
'{{ x-amz-checksum-crc64nvme }}',
'{{ x-amz-checksum-sha1 }}',
'{{ x-amz-checksum-sha256 }}',
'{{ x-amz-checksum-sha512 }}',
'{{ x-amz-checksum-md5 }}',
'{{ x-amz-checksum-xxhash64 }}',
'{{ x-amz-checksum-xxhash3 }}',
'{{ x-amz-checksum-xxhash128 }}',
'{{ Expires }}',
'{{ If-Match }}',
'{{ If-None-Match }}',
'{{ x-amz-grant-full-control }}',
'{{ x-amz-grant-read }}',
'{{ x-amz-grant-read-acp }}',
'{{ x-amz-grant-write-acp }}',
'{{ x-amz-write-offset-bytes }}',
'{{ x-amz-meta- }}',
'{{ x-amz-server-side-encryption }}',
'{{ x-amz-storage-class }}',
'{{ x-amz-website-redirect-location }}',
'{{ x-amz-server-side-encryption-customer-algorithm }}',
'{{ x-amz-server-side-encryption-customer-key }}',
'{{ x-amz-server-side-encryption-customer-key-MD5 }}',
'{{ x-amz-server-side-encryption-aws-kms-key-id }}',
'{{ x-amz-server-side-encryption-context }}',
'{{ x-amz-server-side-encryption-bucket-key-enabled }}',
'{{ x-amz-request-payer }}',
'{{ x-amz-tagging }}',
'{{ x-amz-object-lock-mode }}',
'{{ x-amz-object-lock-retain-until-date }}',
'{{ x-amz-object-lock-legal-hold }}',
'{{ x-amz-expected-bucket-owner }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: objects
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the objects resource.
    - name: key
      value: "{{ key }}"
      description: Required parameter for the objects resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the objects resource.
    - name: contents
      value: "{{ contents }}"
      description: |
        The raw object content to write. Text objects only - binary content is not supported and may be mangled in transit.
    - name: x-amz-acl
      value: "{{ x-amz-acl }}"
      description: The canned ACL to apply to the object. For more information, see Canned ACL in the Amazon S3 User Guide. When adding a new object, you can use headers to grant ACL-based permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. By default, all objects are private. Only the owner has full access control. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API in the Amazon S3 User Guide. If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a 400 error with the error code AccessControlListNotSupported. For more information, see Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: The canned ACL to apply to the object. For more information, see Canned ACL in the Amazon S3 User Guide. When adding a new object, you can use headers to grant ACL-based permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. By default, all objects are private. Only the owner has full access control. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API in the Amazon S3 User Guide. If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a 400 error with the error code AccessControlListNotSupported. For more information, see Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: Cache-Control
      value: "{{ Cache-Control }}"
      description: Can be used to specify caching behavior along the request/reply chain. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9.
      description: Can be used to specify caching behavior along the request/reply chain. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9.
    - name: Content-Disposition
      value: "{{ Content-Disposition }}"
      description: Specifies presentational information for the object. For more information, see https://www.rfc-editor.org/rfc/rfc6266#section-4.
      description: Specifies presentational information for the object. For more information, see https://www.rfc-editor.org/rfc/rfc6266#section-4.
    - name: Content-Encoding
      value: "{{ Content-Encoding }}"
      description: Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding.
      description: Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding.
    - name: Content-Language
      value: "{{ Content-Language }}"
      description: The language the content is in.
      description: The language the content is in.
    - name: Content-Length
      value: "{{ Content-Length }}"
      description: Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length.
      description: Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length.
    - name: Content-MD5
      value: "{{ Content-MD5 }}"
      description: The Base64 encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see REST Authentication. The Content-MD5 or x-amz-sdk-checksum-algorithm header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see Uploading objects to an Object Lock enabled bucket in the Amazon S3 User Guide. This functionality is not supported for directory buckets.
      description: The Base64 encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see REST Authentication. The Content-MD5 or x-amz-sdk-checksum-algorithm header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see Uploading objects to an Object Lock enabled bucket in the Amazon S3 User Guide. This functionality is not supported for directory buckets.
    - name: Content-Type
      value: "{{ Content-Type }}"
      description: A standard MIME type describing the format of the contents. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type.
      description: A standard MIME type describing the format of the contents. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type.
    - name: x-amz-sdk-checksum-algorithm
      value: "{{ x-amz-sdk-checksum-algorithm }}"
      description: Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum-algorithm or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For the x-amz-checksum-algorithm header, replace algorithm with the supported algorithm from the following list: CRC32 CRC32C CRC64NVME MD5 SHA1 SHA256 SHA512 XXHASH3 XXHASH64 XXHASH128 For more information, see Checking object integrity in the Amazon S3 User Guide. If the individual checksum value you provide through x-amz-checksum-algorithm doesn't match the checksum algorithm you set through x-amz-sdk-checksum-algorithm, Amazon S3 fails the request with a BadDigest error. The Content-MD5 or x-amz-sdk-checksum-algorithm header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see Uploading objects to an Object Lock enabled bucket in the Amazon S3 User Guide. For directory buckets, when you use Amazon Web Services SDKs, CRC32 is the default checksum algorithm that's used for performance.
      description: Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum-algorithm or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For the x-amz-checksum-algorithm header, replace algorithm with the supported algorithm from the following list: CRC32 CRC32C CRC64NVME MD5 SHA1 SHA256 SHA512 XXHASH3 XXHASH64 XXHASH128 For more information, see Checking object integrity in the Amazon S3 User Guide. If the individual checksum value you provide through x-amz-checksum-algorithm doesn't match the checksum algorithm you set through x-amz-sdk-checksum-algorithm, Amazon S3 fails the request with a BadDigest error. The Content-MD5 or x-amz-sdk-checksum-algorithm header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see Uploading objects to an Object Lock enabled bucket in the Amazon S3 User Guide. For directory buckets, when you use Amazon Web Services SDKs, CRC32 is the default checksum algorithm that's used for performance.
    - name: x-amz-checksum-crc32
      value: "{{ x-amz-checksum-crc32 }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit CRC32 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit CRC32 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-crc32c
      value: "{{ x-amz-checksum-crc32c }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit CRC32C checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit CRC32C checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-crc64nvme
      value: "{{ x-amz-checksum-crc64nvme }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit CRC64NVME checksum of the object. The CRC64NVME checksum is always a full object checksum. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit CRC64NVME checksum of the object. The CRC64NVME checksum is always a full object checksum. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-sha1
      value: "{{ x-amz-checksum-sha1 }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 160-bit SHA1 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 160-bit SHA1 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-sha256
      value: "{{ x-amz-checksum-sha256 }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 256-bit SHA256 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 256-bit SHA256 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-sha512
      value: "{{ x-amz-checksum-sha512 }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 512-bit SHA512 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 512-bit SHA512 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-md5
      value: "{{ x-amz-checksum-md5 }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit MD5 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit MD5 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-xxhash64
      value: "{{ x-amz-checksum-xxhash64 }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit XXHASH64 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit XXHASH64 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-xxhash3
      value: "{{ x-amz-checksum-xxhash3 }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit XXHASH3 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit XXHASH3 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-xxhash128
      value: "{{ x-amz-checksum-xxhash128 }}"
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit XXHASH128 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit XXHASH128 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: Expires
      value: "{{ Expires }}"
      description: The date and time at which the object is no longer cacheable. For more information, see https://www.rfc-editor.org/rfc/rfc7234#section-5.3.
      description: The date and time at which the object is no longer cacheable. For more information, see https://www.rfc-editor.org/rfc/rfc7234#section-5.3.
    - name: If-Match
      value: "{{ If-Match }}"
      description: Uploads the object only if the ETag (entity tag) value provided during the WRITE operation matches the ETag of the object in S3. If the ETag values do not match, the operation returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should fetch the object's ETag and retry the upload. Expects the ETag value as a string. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide.
      description: Uploads the object only if the ETag (entity tag) value provided during the WRITE operation matches the ETag of the object in S3. If the ETag values do not match, the operation returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should fetch the object's ETag and retry the upload. Expects the ETag value as a string. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide.
    - name: If-None-Match
      value: "{{ If-None-Match }}"
      description: Uploads the object only if the object key name does not already exist in the bucket specified. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should retry the upload. Expects the '*' (asterisk) character. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide.
      description: Uploads the object only if the object key name does not already exist in the bucket specified. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should retry the upload. Expects the '*' (asterisk) character. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide.
    - name: x-amz-grant-full-control
      value: "{{ x-amz-grant-full-control }}"
      description: Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: x-amz-grant-read
      value: "{{ x-amz-grant-read }}"
      description: Allows grantee to read the object data and its metadata. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: Allows grantee to read the object data and its metadata. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: x-amz-grant-read-acp
      value: "{{ x-amz-grant-read-acp }}"
      description: Allows grantee to read the object ACL. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: Allows grantee to read the object ACL. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: x-amz-grant-write-acp
      value: "{{ x-amz-grant-write-acp }}"
      description: Allows grantee to write the ACL for the applicable object. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: Allows grantee to write the ACL for the applicable object. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: x-amz-write-offset-bytes
      value: "{{ x-amz-write-offset-bytes }}"
      description: Specifies the offset for appending data to existing objects in bytes. The offset must be equal to the size of the existing object being appended to. If no object exists, setting this header to 0 will create a new object. This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in directory buckets.
      description: Specifies the offset for appending data to existing objects in bytes. The offset must be equal to the size of the existing object being appended to. If no object exists, setting this header to 0 will create a new object. This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in directory buckets.
    - name: x-amz-meta-
      value: "{{ x-amz-meta- }}"
      description: A map of metadata to store with the object in S3.
      description: A map of metadata to store with the object in S3.
    - name: x-amz-server-side-encryption
      value: "{{ x-amz-server-side-encryption }}"
      description: The server-side encryption algorithm that was used when you store this object in Amazon S3 or Amazon FSx. General purpose buckets - You have four mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest by using server-side encryption with other key options. For more information, see Using Server-Side Encryption in the Amazon S3 User Guide. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
      description: The server-side encryption algorithm that was used when you store this object in Amazon S3 or Amazon FSx. General purpose buckets - You have four mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest by using server-side encryption with other key options. For more information, see Using Server-Side Encryption in the Amazon S3 User Guide. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
    - name: x-amz-storage-class
      value: "{{ x-amz-storage-class }}"
      description: By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide. Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.
      description: By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide. Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.
    - name: x-amz-website-redirect-location
      value: "{{ x-amz-website-redirect-location }}"
      description: If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see Object Key and Metadata in the Amazon S3 User Guide. In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket: x-amz-website-redirect-location: /anotherPage.html In the following example, the request header sets the object redirect to another website: x-amz-website-redirect-location: http://www.example.com/ For more information about website hosting in Amazon S3, see Hosting Websites on Amazon S3 and How to Configure Website Page Redirects in the Amazon S3 User Guide. This functionality is not supported for directory buckets.
      description: If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see Object Key and Metadata in the Amazon S3 User Guide. In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket: x-amz-website-redirect-location: /anotherPage.html In the following example, the request header sets the object redirect to another website: x-amz-website-redirect-location: http://www.example.com/ For more information about website hosting in Amazon S3, see Hosting Websites on Amazon S3 and How to Configure Website Page Redirects in the Amazon S3 User Guide. This functionality is not supported for directory buckets.
    - name: x-amz-server-side-encryption-customer-algorithm
      value: "{{ x-amz-server-side-encryption-customer-algorithm }}"
      description: Specifies the algorithm to use when encrypting the object (for example, AES256). This functionality is not supported for directory buckets.
      description: Specifies the algorithm to use when encrypting the object (for example, AES256). This functionality is not supported for directory buckets.
    - name: x-amz-server-side-encryption-customer-key
      value: "{{ x-amz-server-side-encryption-customer-key }}"
      description: Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This functionality is not supported for directory buckets.
      description: Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This functionality is not supported for directory buckets.
    - name: x-amz-server-side-encryption-customer-key-MD5
      value: "{{ x-amz-server-side-encryption-customer-key-MD5 }}"
      description: Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. This functionality is not supported for directory buckets.
      description: Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. This functionality is not supported for directory buckets.
    - name: x-amz-server-side-encryption-aws-kms-key-id
      value: "{{ x-amz-server-side-encryption-aws-kms-key-id }}"
      description: Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID. General purpose buckets - If you specify x-amz-server-side-encryption with aws:kms or aws:kms:dsse, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify x-amz-server-side-encryption:aws:kms or x-amz-server-side-encryption:aws:kms:dsse, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3) to protect the data. Directory buckets - To encrypt data using SSE-KMS, it's recommended to specify the x-amz-server-side-encryption header to aws:kms. Then, the x-amz-server-side-encryption-aws-kms-key-id header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the x-amz-server-side-encryption-aws-kms-key-id header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported. Incorrect key specification results in an HTTP 400 Bad Request error.
      description: Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID. General purpose buckets - If you specify x-amz-server-side-encryption with aws:kms or aws:kms:dsse, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify x-amz-server-side-encryption:aws:kms or x-amz-server-side-encryption:aws:kms:dsse, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3) to protect the data. Directory buckets - To encrypt data using SSE-KMS, it's recommended to specify the x-amz-server-side-encryption header to aws:kms. Then, the x-amz-server-side-encryption-aws-kms-key-id header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the x-amz-server-side-encryption-aws-kms-key-id header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported. Incorrect key specification results in an HTTP 400 Bad Request error.
    - name: x-amz-server-side-encryption-context
      value: "{{ x-amz-server-side-encryption-context }}"
      description: Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future GetObject operations on this object. General purpose buckets - This value must be explicitly added during CopyObject operations if you want an additional encryption context for your object. For more information, see Encryption context in the Amazon S3 User Guide. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
      description: Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future GetObject operations on this object. General purpose buckets - This value must be explicitly added during CopyObject operations if you want an additional encryption context for your object. For more information, see Encryption context in the Amazon S3 User Guide. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
    - name: x-amz-server-side-encryption-bucket-key-enabled
      value: {{ x-amz-server-side-encryption-bucket-key-enabled }}
      description: Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key. Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
      description: Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key. Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
    - name: x-amz-request-payer
      value: "{{ x-amz-request-payer }}"
    - name: x-amz-tagging
      value: "{{ x-amz-tagging }}"
      description: The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1") This functionality is not supported for directory buckets.
      description: The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1") This functionality is not supported for directory buckets.
    - name: x-amz-object-lock-mode
      value: "{{ x-amz-object-lock-mode }}"
      description: The Object Lock mode that you want to apply to this object. This functionality is not supported for directory buckets.
      description: The Object Lock mode that you want to apply to this object. This functionality is not supported for directory buckets.
    - name: x-amz-object-lock-retain-until-date
      value: "{{ x-amz-object-lock-retain-until-date }}"
      description: The date and time when you want this object's Object Lock to expire. Must be formatted as a timestamp parameter. This functionality is not supported for directory buckets.
      description: The date and time when you want this object's Object Lock to expire. Must be formatted as a timestamp parameter. This functionality is not supported for directory buckets.
    - name: x-amz-object-lock-legal-hold
      value: "{{ x-amz-object-lock-legal-hold }}"
      description: Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see Object Lock in the Amazon S3 User Guide. This functionality is not supported for directory buckets.
      description: Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see Object Lock in the Amazon S3 User Guide. This functionality is not supported for directory buckets.
    - name: x-amz-expected-bucket-owner
      value: "{{ x-amz-expected-bucket-owner }}"
      description: The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).
      description: The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_object_encryption"
    values={[
        { label: 'update_object_encryption', value: 'update_object_encryption' }
    ]}
>
<TabItem value="update_object_encryption">

This operation is not supported for directory buckets or Amazon S3 on Outposts buckets. Updates the server-side encryption type of an existing encrypted object in a general purpose bucket. You can use the UpdateObjectEncryption operation to change encrypted objects from server-side encryption with Amazon S3 managed keys (SSE-S3) to server-side encryption with Key Management Service (KMS) keys (SSE-KMS), or to apply S3 Bucket Keys. You can also use the UpdateObjectEncryption operation to change the customer-managed KMS key used to encrypt your data so that you can comply with custom key-rotation standards. Using the UpdateObjectEncryption operation, you can atomically update the server-side encryption type of an existing object in a general purpose bucket without any data movement. The UpdateObjectEncryption operation uses envelope encryption to re-encrypt the data key used to encrypt and decrypt your object with your newly specified server-side encryption type. In other words, when you use the UpdateObjectEncryption operation, your data isn't copied, archived objects in the S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive storage classes aren't restored, and objects in the S3 Intelligent-Tiering storage class aren't moved between tiers. Additionally, the UpdateObjectEncryption operation preserves all object metadata properties, including the storage class, creation date, last modified date, ETag, and checksum properties. For more information, see Updating server-side encryption for existing objects in the Amazon S3 User Guide. By default, all UpdateObjectEncryption requests that specify a customer-managed KMS key are restricted to KMS keys that are owned by the bucket owner's Amazon Web Services account. If you're using Organizations, you can request the ability to use KMS keys owned by other member accounts within your organization by contacting Amazon Web Services Support. Source objects that are unencrypted, or encrypted with either dual-layer server-side encryption with KMS keys (DSSE-KMS) or server-side encryption with customer-provided keys (SSE-C) aren't supported by this operation. Additionally, you cannot specify SSE-S3 encryption as the requested new encryption type UpdateObjectEncryption request. Permissions To use the UpdateObjectEncryption operation, you must have the following permissions: s3:UpdateObjectEncryption kms:Encrypt kms:Decrypt kms:GenerateDataKey kms:ReEncrypt* If you're using Organizations, to use this operation with customer-managed KMS keys from other Amazon Web Services accounts within your organization, you must have the organizations:DescribeAccount permission. Errors You might receive an InvalidRequest error for several reasons. Depending on the reason for the error, you might receive one of the following messages: The UpdateObjectEncryption operation doesn't supported unencrypted source objects. Only source objects encrypted with SSE-S3 or SSE-KMS are supported. The UpdateObjectEncryption operation doesn't support source objects with the encryption type DSSE-KMS or SSE-C. Only source objects encrypted with SSE-S3 or SSE-KMS are supported. The UpdateObjectEncryption operation doesn't support updating the encryption type to DSSE-KMS or SSE-C. Modify the request to specify SSE-KMS for the updated encryption type, and then try again. Requests that modify an object encryption configuration require Amazon Web Services Signature Version 4. Modify the request to use Amazon Web Services Signature Version 4, and then try again. Requests that modify an object encryption configuration require a valid new encryption type. Valid values are SSEKMS. Modify the request to specify SSE-KMS for the updated encryption type, and then try again. Requests that modify an object's encryption type to SSE-KMS require an Amazon Web Services KMS key Amazon Resource Name (ARN). Modify the request to specify a KMS key ARN, and then try again. Requests that modify an object's encryption type to SSE-KMS require a valid Amazon Web Services KMS key Amazon Resource Name (ARN). Confirm that you have a correctly formatted KMS key ARN in your request, and then try again. The BucketKeyEnabled value isn't valid. Valid values are true or false. Modify the request to specify a valid value, and then try again. You might receive an AccessDenied error for several reasons. Depending on the reason for the error, you might receive one of the following messages: The Amazon Web Services KMS key in the request must be owned by the same account as the bucket. Modify the request to specify a KMS key from the same account, and then try again. The bucket owner's account was approved to make UpdateObjectEncryption requests that use any Amazon Web Services KMS key in their organization, but the bucket owner's account isn't part of an organization in Organizations. Make sure that the bucket owner's account and the specified KMS key belong to the same organization, and then try again. The specified Amazon Web Services KMS key must be from the same organization in Organizations as the bucket. Specify a KMS key that belongs to the same organization as the bucket, and then try again. The encryption type for the specified object can’t be updated because that object is protected by S3 Object Lock. If the object has a governance-mode retention period or a legal hold, you must first remove the Object Lock status on the object before you issue your UpdateObjectEncryption request. You can't use the UpdateObjectEncryption operation with objects that have an Object Lock compliance mode retention period applied to them.

```sql
UPDATE aws.s3.objects
SET 
ObjectEncryption = '{{ ObjectEncryption }}'
WHERE 
bucket = '{{ bucket }}' --required
AND key = '{{ key }}' --required
AND region = '{{ region }}' --required
AND ObjectEncryption = '{{ ObjectEncryption }}' --required
AND versionId = '{{ versionId}}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}'
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
RETURNING
request_charged;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_object"
    values={[
        { label: 'put_object', value: 'put_object' }
    ]}
>
<TabItem value="put_object">

End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). Adds an object to a bucket. Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. You cannot use PutObject to only update a single piece of metadata for an existing object. You must put the entire object with updated metadata if you want to update some values. If your bucket uses the bucket owner enforced setting for Object Ownership, ACLs are disabled and no longer affect permissions. All objects written to the bucket by any account will be owned by the bucket owner. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. However, Amazon S3 provides features that can modify this behavior: S3 Object Lock - To prevent objects from being deleted or overwritten, you can use Amazon S3 Object Lock in the Amazon S3 User Guide. This functionality is not supported for directory buckets. If-None-Match - Uploads the object only if the object key name does not already exist in the specified bucket. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload, S3 returns a 409 ConditionalRequestConflict response. On a 409 failure, retry the upload. Expects the * character (asterisk). For more information, see Add preconditions to S3 operations with conditional requests in the Amazon S3 User Guide or RFC 7232. This functionality is not supported for S3 on Outposts. S3 Versioning - When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all versions of the objects. For each write request that is made to the same object, Amazon S3 automatically generates a unique version ID of that object being stored in Amazon S3. You can retrieve, replace, or delete any version of the object. For more information about versioning, see Adding Objects to Versioning-Enabled Buckets in the Amazon S3 User Guide. For information about returning the versioning state of a bucket, see GetBucketVersioning. This functionality is not supported for directory buckets. Permissions General purpose bucket permissions - The following permissions are required in your policies when your PutObject request includes specific headers. s3:PutObject - To successfully complete the PutObject request, you must always have the s3:PutObject permission on a bucket to add an object to it. s3:PutObjectAcl - To successfully change the objects ACL of your PutObject request, you must have the s3:PutObjectAcl. s3:PutObjectTagging - To successfully set the tag-set with your PutObject request, you must have the s3:PutObjectTagging. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. Data integrity with Content-MD5 General purpose bucket - To ensure that data is not corrupted traversing the network, use the Content-MD5 header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, Amazon S3 returns an error. Alternatively, when the object's ETag is its MD5 digest, you can calculate the MD5 while putting the object to Amazon S3 and compare the returned ETag to the calculated MD5 value. Directory bucket - This functionality is not supported for directory buckets. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. Errors You might receive an InvalidRequest error for several reasons. Depending on the reason for the error, you might receive one of the following messages: Cannot specify both a write offset value and user-defined object metadata for existing objects. Checksum Type mismatch occurred, expected checksum Type: sha1, actual checksum Type: crc32c. Request body cannot be empty when 'write offset' is specified. For more information about related Amazon S3 APIs, see the following: CopyObject DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.objects
SET 
contents = '{{ contents }}'
WHERE 
bucket = '{{ bucket }}' --required
AND key = '{{ key }}' --required
AND region = '{{ region }}' --required
AND contents = '{{ contents }}' --required
AND `x-amz-acl` = '{{ x-amz-acl}}'
AND `Cache-Control` = '{{ Cache-Control}}'
AND `Content-Disposition` = '{{ Content-Disposition}}'
AND `Content-Encoding` = '{{ Content-Encoding}}'
AND `Content-Language` = '{{ Content-Language}}'
AND `Content-Length` = '{{ Content-Length}}'
AND `Content-MD5` = '{{ Content-MD5}}'
AND `Content-Type` = '{{ Content-Type}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-checksum-crc32` = '{{ x-amz-checksum-crc32}}'
AND `x-amz-checksum-crc32c` = '{{ x-amz-checksum-crc32c}}'
AND `x-amz-checksum-crc64nvme` = '{{ x-amz-checksum-crc64nvme}}'
AND `x-amz-checksum-sha1` = '{{ x-amz-checksum-sha1}}'
AND `x-amz-checksum-sha256` = '{{ x-amz-checksum-sha256}}'
AND `x-amz-checksum-sha512` = '{{ x-amz-checksum-sha512}}'
AND `x-amz-checksum-md5` = '{{ x-amz-checksum-md5}}'
AND `x-amz-checksum-xxhash64` = '{{ x-amz-checksum-xxhash64}}'
AND `x-amz-checksum-xxhash3` = '{{ x-amz-checksum-xxhash3}}'
AND `x-amz-checksum-xxhash128` = '{{ x-amz-checksum-xxhash128}}'
AND Expires = '{{ Expires}}'
AND `If-Match` = '{{ If-Match}}'
AND `If-None-Match` = '{{ If-None-Match}}'
AND `x-amz-grant-full-control` = '{{ x-amz-grant-full-control}}'
AND `x-amz-grant-read` = '{{ x-amz-grant-read}}'
AND `x-amz-grant-read-acp` = '{{ x-amz-grant-read-acp}}'
AND `x-amz-grant-write-acp` = '{{ x-amz-grant-write-acp}}'
AND `x-amz-write-offset-bytes` = '{{ x-amz-write-offset-bytes}}'
AND x-amz-meta- = '{{ x-amz-meta-}}'
AND `x-amz-server-side-encryption` = '{{ x-amz-server-side-encryption}}'
AND `x-amz-storage-class` = '{{ x-amz-storage-class}}'
AND `x-amz-website-redirect-location` = '{{ x-amz-website-redirect-location}}'
AND `x-amz-server-side-encryption-customer-algorithm` = '{{ x-amz-server-side-encryption-customer-algorithm}}'
AND `x-amz-server-side-encryption-customer-key` = '{{ x-amz-server-side-encryption-customer-key}}'
AND `x-amz-server-side-encryption-customer-key-MD5` = '{{ x-amz-server-side-encryption-customer-key-MD5}}'
AND `x-amz-server-side-encryption-aws-kms-key-id` = '{{ x-amz-server-side-encryption-aws-kms-key-id}}'
AND `x-amz-server-side-encryption-context` = '{{ x-amz-server-side-encryption-context}}'
AND `x-amz-server-side-encryption-bucket-key-enabled` = {{ x-amz-server-side-encryption-bucket-key-enabled}}
AND `x-amz-request-payer` = '{{ x-amz-request-payer}}'
AND `x-amz-tagging` = '{{ x-amz-tagging}}'
AND `x-amz-object-lock-mode` = '{{ x-amz-object-lock-mode}}'
AND `x-amz-object-lock-retain-until-date` = '{{ x-amz-object-lock-retain-until-date}}'
AND `x-amz-object-lock-legal-hold` = '{{ x-amz-object-lock-legal-hold}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_object"
    values={[
        { label: 'delete_object', value: 'delete_object' },
        { label: 'delete_objects', value: 'delete_objects' }
    ]}
>
<TabItem value="delete_object">

Removes an object from a bucket. The behavior depends on the bucket's versioning state: If bucket versioning is not enabled, the operation permanently deletes the object. If bucket versioning is enabled, the operation inserts a delete marker, which becomes the current version of the object. To permanently delete an object in a versioned bucket, you must include the object’s versionId in the request. For more information about versioning-enabled buckets, see Deleting object versions from a versioning-enabled bucket. If bucket versioning is suspended, the operation removes the object that has a null versionId, if there is one, and inserts a delete marker that becomes the current version of the object. If there isn't an object with a null versionId, and all versions of the object have a versionId, Amazon S3 does not remove the object and only inserts a delete marker. To permanently delete an object that has a versionId, you must include the object’s versionId in the request. For more information about versioning-suspended buckets, see Deleting objects from versioning-suspended buckets. Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. To remove a specific version, you must use the versionId query parameter. Using this query parameter permanently deletes the version. If the object deleted is a delete marker, Amazon S3 sets the response header x-amz-delete-marker to true. If the object you want to delete is in a bucket where the bucket versioning configuration is MFA Delete enabled, you must include the x-amz-mfa request header in the DELETE versionId request. Requests that include x-amz-mfa must use HTTPS. For more information about MFA Delete, see Using MFA Delete in the Amazon S3 User Guide. To see sample requests that use versioning, see Sample Request. Directory buckets - MFA delete is not supported by directory buckets. You can delete objects by explicitly calling DELETE Object or calling (PutBucketLifecycle) to enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them the s3:DeleteObject, s3:DeleteObjectVersion, and s3:PutLifeCycleConfiguration actions. Directory buckets - S3 Lifecycle is not supported by directory buckets. Permissions General purpose bucket permissions - The following permissions are required in your policies when your DeleteObjects request includes specific headers. s3:DeleteObject - To delete an object from a bucket, you must always have the s3:DeleteObject permission. s3:DeleteObjectVersion - To delete a specific version of an object from a versioning-enabled bucket, you must have the s3:DeleteObjectVersion permission. If the s3:DeleteObject or s3:DeleteObjectVersion permissions are explicitly denied in your bucket policy, attempts to delete any unversioned objects result in a 403 Access Denied error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following action is related to DeleteObject: PutObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt. The If-Match header is supported for both general purpose and directory buckets. IfMatchLastModifiedTime and IfMatchSize is only supported for directory buckets.

```sql
DELETE FROM aws.s3.objects
WHERE bucket = '{{ bucket }}' --required
AND key = '{{ key }}' --required
AND region = '{{ region }}' --required
AND `x-amz-mfa` = '{{ x-amz-mfa }}'
AND versionId = '{{ versionId }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-bypass-governance-retention` = '{{ x-amz-bypass-governance-retention }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `If-Match` = '{{ If-Match }}'
AND `x-amz-if-match-last-modified-time` = '{{ x-amz-if-match-last-modified-time }}'
AND `x-amz-if-match-size` = '{{ x-amz-if-match-size }}'
;
```
</TabItem>
<TabItem value="delete_objects">

This operation enables you to delete multiple objects from a bucket using a single HTTP request. If you know the object keys that you want to delete, then this operation provides a suitable alternative to sending individual delete requests, reducing per-request overhead. The request can contain a list of up to 1,000 keys that you want to delete. In the XML, you provide the object key names, and optionally, version IDs if you want to delete a specific version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a delete operation and returns the result of that delete, success or failure, in the response. If the object specified in the request isn't found, Amazon S3 confirms the deletion by returning the result as deleted. Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. The operation supports two modes for the response: verbose and quiet. By default, the operation uses verbose mode in which the response includes the result of deletion of each key in your request. In quiet mode the response includes only keys where the delete operation encountered an error. For a successful deletion in a quiet mode, the operation does not return any information about the delete in the response body. When performing this action on an MFA Delete enabled bucket, that attempts to delete any versioned objects, you must include an MFA token. If you do not provide one, the entire request will fail, even if there are non-versioned objects you are trying to delete. If you provide an invalid token, whether there are versioned keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see MFA Delete in the Amazon S3 User Guide. Directory buckets - MFA delete is not supported by directory buckets. Permissions General purpose bucket permissions - The following permissions are required in your policies when your DeleteObjects request includes specific headers. s3:DeleteObject - To delete an object from a bucket, you must always specify the s3:DeleteObject permission. s3:DeleteObjectVersion - To delete a specific version of an object from a versioning-enabled bucket, you must specify the s3:DeleteObjectVersion permission. If the s3:DeleteObject or s3:DeleteObjectVersion permissions are explicitly denied in your bucket policy, attempts to delete any unversioned objects result in a 403 Access Denied error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . Content-MD5 request header General purpose bucket - The Content-MD5 request header is required for all Multi-Object Delete requests. Amazon S3 uses the header value to ensure that your request body has not been altered in transit. Directory bucket - The Content-MD5 request header or a additional checksum request header (including x-amz-checksum-crc32, x-amz-checksum-crc32c, x-amz-checksum-sha1, or x-amz-checksum-sha256) is required for all Multi-Object Delete requests. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to DeleteObjects: CreateMultipartUpload UploadPart CompleteMultipartUpload ListParts AbortMultipartUpload You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.objects
WHERE bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-mfa` = '{{ x-amz-mfa }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-bypass-governance-retention` = '{{ x-amz-bypass-governance-retention }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm }}'
;
```
</TabItem>
</Tabs>
