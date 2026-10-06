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
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-Cache-Control"><code>Cache-Control</code></a>, <a href="#parameter-Content-Disposition"><code>Content-Disposition</code></a>, <a href="#parameter-Content-Encoding"><code>Content-Encoding</code></a>, <a href="#parameter-Content-Language"><code>Content-Language</code></a>, <a href="#parameter-Content-Length"><code>Content-Length</code></a>, <a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-checksum-crc32"><code>x-amz-checksum-crc32</code></a>, <a href="#parameter-x-amz-checksum-crc32c"><code>x-amz-checksum-crc32c</code></a>, <a href="#parameter-x-amz-checksum-crc64nvme"><code>x-amz-checksum-crc64nvme</code></a>, <a href="#parameter-x-amz-checksum-sha1"><code>x-amz-checksum-sha1</code></a>, <a href="#parameter-x-amz-checksum-sha256"><code>x-amz-checksum-sha256</code></a>, <a href="#parameter-x-amz-checksum-sha512"><code>x-amz-checksum-sha512</code></a>, <a href="#parameter-x-amz-checksum-md5"><code>x-amz-checksum-md5</code></a>, <a href="#parameter-x-amz-checksum-xxhash64"><code>x-amz-checksum-xxhash64</code></a>, <a href="#parameter-x-amz-checksum-xxhash3"><code>x-amz-checksum-xxhash3</code></a>, <a href="#parameter-x-amz-checksum-xxhash128"><code>x-amz-checksum-xxhash128</code></a>, <a href="#parameter-Expires"><code>Expires</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-x-amz-write-offset-bytes"><code>x-amz-write-offset-bytes</code></a>, <a href="#parameter-x-amz-meta-"><code>x-amz-meta-</code></a>, <a href="#parameter-x-amz-server-side-encryption"><code>x-amz-server-side-encryption</code></a>, <a href="#parameter-x-amz-storage-class"><code>x-amz-storage-class</code></a>, <a href="#parameter-x-amz-website-redirect-location"><code>x-amz-website-redirect-location</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-server-side-encryption-aws-kms-key-id"><code>x-amz-server-side-encryption-aws-kms-key-id</code></a>, <a href="#parameter-x-amz-server-side-encryption-context"><code>x-amz-server-side-encryption-context</code></a>, <a href="#parameter-x-amz-server-side-encryption-bucket-key-enabled"><code>x-amz-server-side-encryption-bucket-key-enabled</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-tagging"><code>x-amz-tagging</code></a>, <a href="#parameter-x-amz-object-lock-mode"><code>x-amz-object-lock-mode</code></a>, <a href="#parameter-x-amz-object-lock-retain-until-date"><code>x-amz-object-lock-retain-until-date</code></a>, <a href="#parameter-x-amz-object-lock-legal-hold"><code>x-amz-object-lock-legal-hold</code></a>, <a href="#parameter-x-amz-object-lock-event-hold"><code>x-amz-object-lock-event-hold</code></a>, <a href="#parameter-x-amz-object-lock-event-hold-duration-days"><code>x-amz-object-lock-event-hold-duration-days</code></a>, <a href="#parameter-x-amz-object-lock-event-hold-duration-years"><code>x-amz-object-lock-event-hold-duration-years</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
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
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-Cache-Control"><code>Cache-Control</code></a>, <a href="#parameter-Content-Disposition"><code>Content-Disposition</code></a>, <a href="#parameter-Content-Encoding"><code>Content-Encoding</code></a>, <a href="#parameter-Content-Language"><code>Content-Language</code></a>, <a href="#parameter-Content-Length"><code>Content-Length</code></a>, <a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-checksum-crc32"><code>x-amz-checksum-crc32</code></a>, <a href="#parameter-x-amz-checksum-crc32c"><code>x-amz-checksum-crc32c</code></a>, <a href="#parameter-x-amz-checksum-crc64nvme"><code>x-amz-checksum-crc64nvme</code></a>, <a href="#parameter-x-amz-checksum-sha1"><code>x-amz-checksum-sha1</code></a>, <a href="#parameter-x-amz-checksum-sha256"><code>x-amz-checksum-sha256</code></a>, <a href="#parameter-x-amz-checksum-sha512"><code>x-amz-checksum-sha512</code></a>, <a href="#parameter-x-amz-checksum-md5"><code>x-amz-checksum-md5</code></a>, <a href="#parameter-x-amz-checksum-xxhash64"><code>x-amz-checksum-xxhash64</code></a>, <a href="#parameter-x-amz-checksum-xxhash3"><code>x-amz-checksum-xxhash3</code></a>, <a href="#parameter-x-amz-checksum-xxhash128"><code>x-amz-checksum-xxhash128</code></a>, <a href="#parameter-Expires"><code>Expires</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-x-amz-write-offset-bytes"><code>x-amz-write-offset-bytes</code></a>, <a href="#parameter-x-amz-meta-"><code>x-amz-meta-</code></a>, <a href="#parameter-x-amz-server-side-encryption"><code>x-amz-server-side-encryption</code></a>, <a href="#parameter-x-amz-storage-class"><code>x-amz-storage-class</code></a>, <a href="#parameter-x-amz-website-redirect-location"><code>x-amz-website-redirect-location</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-server-side-encryption-aws-kms-key-id"><code>x-amz-server-side-encryption-aws-kms-key-id</code></a>, <a href="#parameter-x-amz-server-side-encryption-context"><code>x-amz-server-side-encryption-context</code></a>, <a href="#parameter-x-amz-server-side-encryption-bucket-key-enabled"><code>x-amz-server-side-encryption-bucket-key-enabled</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-tagging"><code>x-amz-tagging</code></a>, <a href="#parameter-x-amz-object-lock-mode"><code>x-amz-object-lock-mode</code></a>, <a href="#parameter-x-amz-object-lock-retain-until-date"><code>x-amz-object-lock-retain-until-date</code></a>, <a href="#parameter-x-amz-object-lock-legal-hold"><code>x-amz-object-lock-legal-hold</code></a>, <a href="#parameter-x-amz-object-lock-event-hold"><code>x-amz-object-lock-event-hold</code></a>, <a href="#parameter-x-amz-object-lock-event-hold-duration-days"><code>x-amz-object-lock-event-hold-duration-days</code></a>, <a href="#parameter-x-amz-object-lock-event-hold-duration-years"><code>x-amz-object-lock-event-hold-duration-years</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
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
<tr>
    <td><a href="#copy_object"><CopyableCode code="copy_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-x-amz-copy-source"><code>x-amz-copy-source</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-Cache-Control"><code>Cache-Control</code></a>, <a href="#parameter-x-amz-checksum-algorithm"><code>x-amz-checksum-algorithm</code></a>, <a href="#parameter-Content-Disposition"><code>Content-Disposition</code></a>, <a href="#parameter-Content-Encoding"><code>Content-Encoding</code></a>, <a href="#parameter-Content-Language"><code>Content-Language</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-x-amz-copy-source-if-match"><code>x-amz-copy-source-if-match</code></a>, <a href="#parameter-x-amz-copy-source-if-modified-since"><code>x-amz-copy-source-if-modified-since</code></a>, <a href="#parameter-x-amz-copy-source-if-none-match"><code>x-amz-copy-source-if-none-match</code></a>, <a href="#parameter-x-amz-copy-source-if-unmodified-since"><code>x-amz-copy-source-if-unmodified-since</code></a>, <a href="#parameter-Expires"><code>Expires</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-x-amz-meta-"><code>x-amz-meta-</code></a>, <a href="#parameter-x-amz-metadata-directive"><code>x-amz-metadata-directive</code></a>, <a href="#parameter-x-amz-tagging-directive"><code>x-amz-tagging-directive</code></a>, <a href="#parameter-x-amz-object-annotation-directive"><code>x-amz-object-annotation-directive</code></a>, <a href="#parameter-x-amz-server-side-encryption"><code>x-amz-server-side-encryption</code></a>, <a href="#parameter-x-amz-storage-class"><code>x-amz-storage-class</code></a>, <a href="#parameter-x-amz-website-redirect-location"><code>x-amz-website-redirect-location</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-server-side-encryption-aws-kms-key-id"><code>x-amz-server-side-encryption-aws-kms-key-id</code></a>, <a href="#parameter-x-amz-server-side-encryption-context"><code>x-amz-server-side-encryption-context</code></a>, <a href="#parameter-x-amz-server-side-encryption-bucket-key-enabled"><code>x-amz-server-side-encryption-bucket-key-enabled</code></a>, <a href="#parameter-x-amz-copy-source-server-side-encryption-customer-algorithm"><code>x-amz-copy-source-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-copy-source-server-side-encryption-customer-key"><code>x-amz-copy-source-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-copy-source-server-side-encryption-customer-key-MD5"><code>x-amz-copy-source-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-tagging"><code>x-amz-tagging</code></a>, <a href="#parameter-x-amz-object-lock-mode"><code>x-amz-object-lock-mode</code></a>, <a href="#parameter-x-amz-object-lock-retain-until-date"><code>x-amz-object-lock-retain-until-date</code></a>, <a href="#parameter-x-amz-object-lock-legal-hold"><code>x-amz-object-lock-legal-hold</code></a>, <a href="#parameter-x-amz-object-lock-event-hold"><code>x-amz-object-lock-event-hold</code></a>, <a href="#parameter-x-amz-object-lock-event-hold-duration-days"><code>x-amz-object-lock-event-hold-duration-days</code></a>, <a href="#parameter-x-amz-object-lock-event-hold-duration-years"><code>x-amz-object-lock-event-hold-duration-years</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-source-expected-bucket-owner"><code>x-amz-source-expected-bucket-owner</code></a></td>
    <td>Creates a copy of an object that is already stored in Amazon S3. End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). You can store individual objects of up to 50 TB in Amazon S3. You create a copy of your object up to 5 GB in size in a single atomic action using this API. However, to copy an object greater than 5 GB, you must use the multipart upload Upload Part - Copy (UploadPartCopy) API. For more information, see Copy Object Using the REST Multipart Upload API. You can copy individual objects between general purpose buckets, between directory buckets, and between general purpose buckets and directory buckets. Amazon S3 supports copy operations using Multi-Region Access Points only as a destination when using the Multi-Region Access Point ARN. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. VPC endpoints don't support cross-Region requests (including copies). If you're using VPC endpoints, your source and destination buckets should be in the same Amazon Web Services Region as your VPC endpoint. Both the Region that you want to copy the object from and the Region that you want to copy the object to must be enabled for your account. For more information about how to enable a Region for your account, see Enable or disable a Region for standalone accounts in the Amazon Web Services Account Management Guide. Amazon S3 transfer acceleration does not support cross-Region copies. If you request a cross-Region copy using a transfer acceleration endpoint, you get a 400 Bad Request error. For more information, see Transfer Acceleration. Authentication and authorization All CopyObject requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the x-amz- prefix, including x-amz-copy-source, must be signed. For more information, see REST Authentication. Directory buckets - You must use the IAM credentials to authenticate and authorize your access to the CopyObject API operation, instead of using the temporary security credentials through the CreateSession API operation. Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf. Permissions You must have read access to the source object and write access to the destination bucket. General purpose bucket permissions - You must have permissions in an IAM policy based on the source and destination bucket types in a CopyObject operation. If the source object is in a general purpose bucket, you must have s3:GetObject permission to read the source object that is being copied. If the destination bucket is a general purpose bucket, you must have s3:PutObject permission to write the object copy to the destination bucket. Directory bucket permissions - You must have permissions in a bucket policy or an IAM identity-based policy based on the source and destination bucket types in a CopyObject operation. If the source object that you want to copy is in a directory bucket, you must have the s3express:CreateSession permission in the Action element of a policy to read the object. If no session mode is specified, the session will be created with the maximum allowable privilege, attempting ReadWrite first, then ReadOnly if ReadWrite is not permitted. If you want to explicitly restrict the access to be read-only, you can set the s3express:SessionMode condition key to ReadOnly on the copy source bucket. If the copy destination is a directory bucket, you must have the s3express:CreateSession permission in the Action element of a policy to write the object to the destination. The s3express:SessionMode condition key can't be set to ReadOnly on the copy destination bucket. If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide. Response and special errors When the request is an HTTP 1.1 request, the response is chunk encoded. When the request is not an HTTP 1.1 request, the response would not contain the Content-Length. You always need to read the entire response body to check if the copy succeeds. If the copy is successful, you receive a response with information about the copied object. A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3 is copying the files. A 200 OK response can contain either a success or an error. If the error occurs before the copy action starts, you receive a standard Amazon S3 error. If the error occurs during the copy operation, the error response is embedded in the 200 OK response. For example, in a cross-region copy, you may encounter throttling and receive a 200 OK response. For more information, see Resolve the Error 200 response when copying objects to Amazon S3. The 200 OK status code means the copy was accepted, but it doesn't mean the copy is complete. Another example is when you disconnect from Amazon S3 before the copy is complete, Amazon S3 might cancel the copy and you may receive a 200 OK response. You must stay connected to Amazon S3 until the entire response is successfully received and processed. If you call this API operation directly, make sure to design your application to parse the content of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throw an exception (or, for the SDKs that don't use exceptions, they return an error). Charge The copy request charge is based on the storage class and Region that you specify for the destination object. The request can also result in a data retrieval charge for the source if the source storage class bills for data retrieval. If the copy source is in a different region, the data transfer is billed to the copy source account. For pricing information, see Amazon S3 pricing. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. Amazon S3 on Outposts - When you use this action with S3 on Outposts through the REST API, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. The hostname isn't required when you use the Amazon Web Services CLI or SDKs. The following operations are related to CopyObject: PutObject GetObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#head_object"><CopyableCode code="head_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-Range"><code>Range</code></a>, <a href="#parameter-response-cache-control"><code>response-cache-control</code></a>, <a href="#parameter-response-content-disposition"><code>response-content-disposition</code></a>, <a href="#parameter-response-content-encoding"><code>response-content-encoding</code></a>, <a href="#parameter-response-content-language"><code>response-content-language</code></a>, <a href="#parameter-response-content-type"><code>response-content-type</code></a>, <a href="#parameter-response-expires"><code>response-expires</code></a>, <a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-partNumber"><code>partNumber</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-checksum-mode"><code>x-amz-checksum-mode</code></a></td>
    <td>The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata. A HEAD request has the same options as a GET operation on an object. The response is identical to the GET response except that there is no response body. Because of this, if the HEAD request generates an error, it returns a generic code, such as 400 Bad Request, 403 Forbidden, 404 Not Found, 405 Method Not Allowed, 412 Precondition Failed, or 304 Not Modified. It's not possible to retrieve the exact exception of these error codes. Request headers are limited to 8 KB in size. For more information, see Common Request Headers. Permissions General purpose bucket permissions - To use HEAD, you must have the s3:GetObject permission. You need the relevant read object (or version) permission for this operation. For more information, see Actions, resources, and condition keys for Amazon S3 in the Amazon S3 User Guide. For more information about the permissions to S3 API operations by S3 resource types, see Required permissions for Amazon S3 API operations in the Amazon S3 User Guide. If the object you request doesn't exist, the error that Amazon S3 returns depends on whether you also have the s3:ListBucket permission. If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found error. If you don’t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Forbidden error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If you enable x-amz-checksum-mode in the request and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object. Encryption Encryption request headers, like x-amz-server-side-encryption, should not be sent for HEAD requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). The x-amz-server-side-encryption header is used when you PUT an object to S3 and want to specify the encryption method. If you include this header in a HEAD request for an object that uses these types of keys, you’ll get an HTTP 400 Bad Request error. It's because the encryption method can't be changed when you retrieve the object. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers to provide the encryption key for the server to be able to retrieve the object's metadata. The headers are: x-amz-server-side-encryption-customer-algorithm x-amz-server-side-encryption-customer-key x-amz-server-side-encryption-customer-key-MD5 For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide. Directory bucket - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. SSE-C isn't supported. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. Versioning If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes x-amz-delete-marker: true in the response. If the specified version is a delete marker, the response returns a 405 Method Not Allowed error and the Last-Modified: timestamp response header. Directory buckets - Delete marker is not supported for directory buckets. Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. The following actions are related to HeadObject: GetObject GetObjectAttributes You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#rename_object"><CopyableCode code="rename_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-x-amz-rename-source"><code>x-amz-rename-source</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-x-amz-rename-source-if-match"><code>x-amz-rename-source-if-match</code></a>, <a href="#parameter-x-amz-rename-source-if-none-match"><code>x-amz-rename-source-if-none-match</code></a>, <a href="#parameter-x-amz-rename-source-if-modified-since"><code>x-amz-rename-source-if-modified-since</code></a>, <a href="#parameter-x-amz-rename-source-if-unmodified-since"><code>x-amz-rename-source-if-unmodified-since</code></a>, <a href="#parameter-x-amz-client-token"><code>x-amz-client-token</code></a></td>
    <td>Renames an existing object in a directory bucket that uses the S3 Express One Zone storage class. You can use RenameObject by specifying an existing object’s name as the source and the new name of the object as the destination within the same directory bucket. RenameObject is only supported for objects stored in the S3 Express One Zone storage class. To prevent overwriting an object, you can use the If-None-Match conditional header. If-None-Match - Renames the object only if an object with the specified name does not already exist in the directory bucket. If you don't want to overwrite an existing object, you can add the If-None-Match conditional header with the value ‘*’ in the RenameObject request. Amazon S3 then returns a 412 Precondition Failed error if the object with the specified name already exists. For more information, see RFC 7232. Permissions To grant access to the RenameObject operation on a directory bucket, we recommend that you use the CreateSession operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the directory bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. The Amazon Web Services CLI and SDKs will create and manage your session including refreshing the session token automatically to avoid service interruptions when a session expires. In your bucket policy, you can specify the s3express:SessionMode condition key to control who can create a ReadWrite or ReadOnly session. A ReadWrite session is required for executing all the Zonal endpoint API operations, including RenameObject. For more information about authorization, see CreateSession . To learn more about Zonal endpoint API operations, see Authorizing Zonal endpoint API operations with CreateSession in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#restore_object"><CopyableCode code="restore_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Restores an archived copy of an object back into Amazon S3 This functionality is not supported for Amazon S3 on Outposts. This action performs the following types of requests: restore an archive - Restore an archived object For more information about the S3 structure in the request body, see the following: PutObject Managing Access with ACLs in the Amazon S3 User Guide Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide Permissions To use this operation, you must have permissions to perform the s3:RestoreObject action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide. Restoring objects Objects that you archive to the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage class, and S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, are not accessible in real time. For objects in the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes, you must first initiate a restore request, and then wait until a temporary copy of the object is available. If you want a permanent copy of the object, create a copy of it in the Amazon S3 Standard storage class in your S3 bucket. To access an archived object, you must restore the object for the duration (number of days) that you specify. For objects in the Archive Access or Deep Archive Access tiers of S3 Intelligent-Tiering, you must first initiate a restore request, and then wait until the object is moved into the Frequent Access tier. To restore a specific object version, you can provide a version ID. If you don't provide a version ID, Amazon S3 restores the current version. When restoring an archived object, you can specify one of the following data access tier options in the Tier element of the request body: Expedited - Expedited retrievals allow you to quickly access your data stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier when occasional urgent requests for restoring archives are required. For all but the largest archived objects (250 MB+), data accessed using Expedited retrievals is typically made available within 1–5 minutes. Provisioned capacity ensures that retrieval capacity for Expedited retrievals is available when you need it. Expedited retrievals and provisioned capacity are not available for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard - Standard retrievals allow you to access any of your archived objects within several hours. This is the default option for retrieval requests that do not specify the retrieval option. Standard retrievals typically finish within 3–5 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. They typically finish within 12 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard retrievals are free for objects stored in S3 Intelligent-Tiering. Bulk - Bulk retrievals free for objects stored in the S3 Glacier Flexible Retrieval and S3 Intelligent-Tiering storage classes, enabling you to retrieve large amounts, even petabytes, of data at no cost. Bulk retrievals typically finish within 5–12 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. Bulk retrievals are also the lowest-cost retrieval option when restoring objects from S3 Glacier Deep Archive. They typically finish within 48 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. For more information about archive retrieval options and provisioned capacity for Expedited data access, see Restoring Archived Objects in the Amazon S3 User Guide. You can use Amazon S3 restore speed upgrade to change the restore speed to a faster speed while it is in progress. For more information, see Upgrading the speed of an in-progress restore in the Amazon S3 User Guide. To get the status of object restoration, you can send a HEAD request. Operations return the x-amz-restore header, which provides information about the restoration status, in the response. You can use Amazon S3 event notifications to notify you when a restore is initiated or completed. For more information, see Configuring Amazon S3 Event Notifications in the Amazon S3 User Guide. After restoring an archived object, you can update the restoration period by reissuing the request with a new period. Amazon S3 updates the restoration period relative to the current time and charges only for the request-there are no data transfer charges. You cannot update the restoration period when Amazon S3 is actively processing your current restore request for the object. If your bucket has a lifecycle configuration with a rule that includes an expiration action, the object expiration overrides the life span that you specify in a restore request. For example, if you restore an object copy for 10 days, but the object is scheduled to expire in 3 days, Amazon S3 deletes the object in 3 days. For more information about lifecycle configuration, see PutBucketLifecycleConfiguration and Object Lifecycle Management in Amazon S3 User Guide. Responses A successful action returns either the 200 OK or 202 Accepted status code. If the object is not previously restored, then Amazon S3 returns 202 Accepted in the response. If the object is previously restored, Amazon S3 returns 200 OK in the response. Special errors: Code: RestoreAlreadyInProgress Cause: Object restore is already in progress. HTTP Status Code: 409 Conflict SOAP Fault Code Prefix: Client Code: GlacierExpeditedRetrievalNotAvailable Cause: expedited retrievals are currently not available. Try again later. (Returned if there is insufficient capacity to process the Expedited request. This error applies only to Expedited retrievals and not to S3 Standard or Bulk retrievals.) HTTP Status Code: 503 SOAP Fault Code Prefix: N/A The following operations are related to RestoreObject: PutBucketLifecycleConfiguration GetBucketNotificationConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The bucket name containing the object to restore. Access points - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. S3 on Outposts - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see What is S3 on Outposts? in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Object key for which the action was initiated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-copy-source">
    <td><CopyableCode code="x-amz-copy-source" /></td>
    <td><code>string</code></td>
    <td>Specifies the source object for the copy operation. The source object can be up to 5 GB. If the source object is an object that was uploaded by using a multipart upload, the object copy will be a single part object after the source object is copied to the destination bucket. You specify the value of the copy source in one of two formats, depending on whether you want to access the source object through an access point: For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the general purpose bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL-encoded. To copy the object reports/january.pdf from the directory bucket awsexamplebucket--use1-az5--x-s3, use awsexamplebucket--use1-az5--x-s3/reports/january.pdf. The value must be URL-encoded. For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:accesspoint/<code>&lt;access-point-name&gt;</code>/object/<code>&lt;key&gt;</code>. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded. Amazon S3 supports copy operations using Access points only when the source and destination buckets are in the same Amazon Web Services Region. Access points are not supported by directory buckets. Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:outpost/<code>&lt;outpost-id&gt;</code>/object/<code>&lt;key&gt;</code>. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL-encoded. If your source bucket versioning is enabled, the x-amz-copy-source header by default identifies the current version of an object to copy. If the current version is a delete marker, Amazon S3 behaves as if the object was deleted. To copy a different version, use the versionId query parameter. Specifically, append ?versionId=<code>&lt;version-id&gt;</code> to the value (for example, awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If you don't specify a version ID, Amazon S3 copies the latest version of the source object. If you enable versioning on the destination bucket, Amazon S3 generates a unique version ID for the copied object. This version ID is different from the version ID of the source object. Amazon S3 returns the version ID of the copied object in the x-amz-version-id response header in the response. If you do not enable versioning or suspend it on the destination bucket, the version ID that Amazon S3 generates in the x-amz-version-id response header is always null. Directory buckets - S3 Versioning isn't enabled and supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-rename-source">
    <td><CopyableCode code="x-amz-rename-source" /></td>
    <td><code>string</code></td>
    <td>Specifies the source for the rename operation. The value must be URL encoded.</td>
</tr>
<tr id="parameter-Cache-Control">
    <td><CopyableCode code="Cache-Control" /></td>
    <td><code>string</code></td>
    <td>Specifies the caching behavior along the request/reply chain.</td>
</tr>
<tr id="parameter-Content-Disposition">
    <td><CopyableCode code="Content-Disposition" /></td>
    <td><code>string</code></td>
    <td>Specifies presentational information for the object. Indicates whether an object should be displayed in a web browser or downloaded as a file. It allows specifying the desired filename for the downloaded file.</td>
</tr>
<tr id="parameter-Content-Encoding">
    <td><CopyableCode code="Content-Encoding" /></td>
    <td><code>string</code></td>
    <td>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For directory buckets, only the aws-chunked value is supported in this header field.</td>
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
    <td>A standard MIME type that describes the format of the object data.</td>
</tr>
<tr id="parameter-Expires">
    <td><CopyableCode code="Expires" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the object is no longer cacheable.</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>Renames the object only if the ETag (entity tag) value provided during the operation matches the ETag of the object in S3. The If-Match header field makes the request method conditional on ETags. If the ETag values do not match, the operation returns a 412 Precondition Failed error. Expects the ETag value as a string.</td>
</tr>
<tr id="parameter-If-Modified-Since">
    <td><CopyableCode code="If-Modified-Since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Renames the object if the destination exists and if it has been modified since the specified time.</td>
</tr>
<tr id="parameter-If-None-Match">
    <td><CopyableCode code="If-None-Match" /></td>
    <td><code>string</code></td>
    <td>Renames the object only if the destination does not already exist in the specified directory bucket. If the object does exist when you send a request with If-None-Match:*, the S3 API will return a 412 Precondition Failed error, preventing an overwrite. The If-None-Match header prevents overwrites of existing data by validating that there's not an object with the same key name already in your directory bucket. Expects the * character (asterisk).</td>
</tr>
<tr id="parameter-If-Unmodified-Since">
    <td><CopyableCode code="If-Unmodified-Since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Renames the object if it hasn't been modified since the specified time.</td>
</tr>
<tr id="parameter-Range">
    <td><CopyableCode code="Range" /></td>
    <td><code>string</code></td>
    <td>HeadObject returns only the metadata for an object. If the Range is satisfiable, only the ContentLength is affected in the response. If the Range is not satisfiable, S3 returns a 416 - Requested Range Not Satisfiable error.</td>
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
    <td>Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object.</td>
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
    <td>VersionId used to reference a specific version of the object.</td>
</tr>
<tr id="parameter-x-amz-acl">
    <td><CopyableCode code="x-amz-acl" /></td>
    <td><code>string</code></td>
    <td>The canned access control list (ACL) to apply to the object. When you copy an object, the ACL metadata is not preserved and is set to private by default. Only the owner has full access control. To override the default ACL setting, specify a new ACL when you generate a copy request. For more information, see Using ACLs. If the destination bucket that you're copying objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. For more information, see Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide. If your destination bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-bypass-governance-retention">
    <td><CopyableCode code="x-amz-bypass-governance-retention" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. To use this header, you must have the s3:BypassGovernanceRetention permission. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-checksum-algorithm">
    <td><CopyableCode code="x-amz-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm that you want Amazon S3 to use to create the checksum for the object. For more information, see Checking object integrity in the Amazon S3 User Guide. When you copy an object, if the source object has a checksum, that checksum value will be copied to the new object by default. If the CopyObject request does not include this x-amz-checksum-algorithm header, the checksum algorithm will be copied from the source object to the destination object (if it's present on the source object). You can optionally specify a different checksum algorithm to use with the x-amz-checksum-algorithm header. Unrecognized or unsupported values will respond with the HTTP status code 400 Bad Request. For directory buckets, when you use Amazon Web Services SDKs, CRC32 is the default checksum algorithm that's used for performance.</td>
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
    <td>To retrieve the checksum, this parameter must be enabled. General purpose buckets - If you enable checksum mode and the object is uploaded with a checksum and encrypted with an Key Management Service (KMS) key, you must have permission to use the kms:Decrypt action to retrieve the checksum. Directory buckets - If you enable ChecksumMode and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object.</td>
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
<tr id="parameter-x-amz-client-token">
    <td><CopyableCode code="x-amz-client-token" /></td>
    <td><code>string</code></td>
    <td>A unique string with a max of 64 ASCII characters in the ASCII range of 33 - 126. RenameObject supports idempotency using a client token. To make an idempotent API request using RenameObject, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails and an IdempotentParameterMismatch error is returned.</td>
</tr>
<tr id="parameter-x-amz-copy-source-if-match">
    <td><CopyableCode code="x-amz-copy-source-if-match" /></td>
    <td><code>string</code></td>
    <td>Copies the object if its entity tag (ETag) matches the specified tag. If both the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request and evaluate as follows, Amazon S3 returns 200 OK and copies the data: x-amz-copy-source-if-match condition evaluates to true x-amz-copy-source-if-unmodified-since condition evaluates to false</td>
</tr>
<tr id="parameter-x-amz-copy-source-if-modified-since">
    <td><CopyableCode code="x-amz-copy-source-if-modified-since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Copies the object if it has been modified since the specified time. If both the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request and evaluate as follows, Amazon S3 returns the 412 Precondition Failed response code: x-amz-copy-source-if-none-match condition evaluates to false x-amz-copy-source-if-modified-since condition evaluates to true</td>
</tr>
<tr id="parameter-x-amz-copy-source-if-none-match">
    <td><CopyableCode code="x-amz-copy-source-if-none-match" /></td>
    <td><code>string</code></td>
    <td>Copies the object if its entity tag (ETag) is different than the specified ETag. If both the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request and evaluate as follows, Amazon S3 returns the 412 Precondition Failed response code: x-amz-copy-source-if-none-match condition evaluates to false x-amz-copy-source-if-modified-since condition evaluates to true</td>
</tr>
<tr id="parameter-x-amz-copy-source-if-unmodified-since">
    <td><CopyableCode code="x-amz-copy-source-if-unmodified-since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Copies the object if it hasn't been modified since the specified time. If both the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request and evaluate as follows, Amazon S3 returns 200 OK and copies the data: x-amz-copy-source-if-match condition evaluates to true x-amz-copy-source-if-unmodified-since condition evaluates to false</td>
</tr>
<tr id="parameter-x-amz-copy-source-server-side-encryption-customer-algorithm">
    <td><CopyableCode code="x-amz-copy-source-server-side-encryption-customer-algorithm" /></td>
    <td><code>string</code></td>
    <td>Specifies the algorithm to use when decrypting the source object (for example, AES256). If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying. This functionality is not supported when the source object is in a directory bucket.</td>
</tr>
<tr id="parameter-x-amz-copy-source-server-side-encryption-customer-key">
    <td><CopyableCode code="x-amz-copy-source-server-side-encryption-customer-key" /></td>
    <td><code>string</code></td>
    <td>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be the same one that was used when the source object was created. If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying. This functionality is not supported when the source object is in a directory bucket.</td>
</tr>
<tr id="parameter-x-amz-copy-source-server-side-encryption-customer-key-MD5">
    <td><CopyableCode code="x-amz-copy-source-server-side-encryption-customer-key-MD5" /></td>
    <td><code>string</code></td>
    <td>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying. This functionality is not supported when the source object is in a directory bucket.</td>
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
<tr id="parameter-x-amz-metadata-directive">
    <td><CopyableCode code="x-amz-metadata-directive" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the metadata is copied from the source object or replaced with metadata that's provided in the request. When copying an object, you can preserve all metadata (the default) or specify new metadata. If this header isn’t specified, COPY is the default behavior. General purpose bucket - For general purpose buckets, when you grant permissions, you can use the s3:x-amz-metadata-directive condition key to enforce certain metadata behavior when objects are uploaded. For more information, see Amazon S3 condition key examples in the Amazon S3 User Guide. x-amz-website-redirect-location is unique to each object and is not copied when using the x-amz-metadata-directive header. To copy the value, you must specify x-amz-website-redirect-location in the request header.</td>
</tr>
<tr id="parameter-x-amz-mfa">
    <td><CopyableCode code="x-amz-mfa" /></td>
    <td><code>string</code></td>
    <td>The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled. When performing the DeleteObjects operation on an MFA delete enabled bucket, which attempts to delete the specified versioned objects, you must include an MFA token. If you don't provide an MFA token, the entire request will fail, even if there are non-versioned objects that you are trying to delete. If you provide an invalid token, whether there are versioned object keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see MFA Delete in the Amazon S3 User Guide. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-annotation-directive">
    <td><CopyableCode code="x-amz-object-annotation-directive" /></td>
    <td><code>string</code></td>
    <td>Specifies whether you want to copy annotations from the source object or exclude them. If this header isn't specified, COPY is the default behavior. Valid Values: COPY | EXCLUDE You can specify this directive as either an HTTP header (x-amz-object-annotation-directive) or as a query string parameter. Use the query string form when generating presigned URLs that need to control annotation copy behavior. When set to COPY, you must have s3:GetObjectAnnotation permission on the source object and s3:PutObjectAnnotation permission on the destination. Each annotation copied is billed as a separate PUT request. If annotations on the source are modified during the copy, Amazon S3 returns a retryable error. For directory buckets, annotations are not supported. Use EXCLUDE to copy objects to directory buckets without errors. If you specify COPY for a directory bucket, the request returns HTTP 501 (Not Implemented). When you copy objects using multipart upload (for example, when the Amazon Web Services CLI or Amazon Web Services SDKs use Transfer Manager for objects larger than approximately 8 MB), annotations are not copied by default. To include annotations, specify --copy-props default in the Amazon Web Services CLI or the equivalent SDK configuration. With this opt-in, the SDK reads source annotations, completes the multipart upload, and then writes each annotation to the destination. Between the upload completion and the last annotation write, the destination object exists without all its annotations.</td>
</tr>
<tr id="parameter-x-amz-object-lock-event-hold">
    <td><CopyableCode code="x-amz-object-lock-event-hold" /></td>
    <td><code>string</code></td>
    <td>The event hold status to apply to the object copy. Set to ON to enable or OFF to disable. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-event-hold-duration-days">
    <td><CopyableCode code="x-amz-object-lock-event-hold-duration-days" /></td>
    <td><code>integer</code></td>
    <td>The event hold duration in days to apply to the object copy. You cannot specify a duration in both days and years. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-event-hold-duration-years">
    <td><CopyableCode code="x-amz-object-lock-event-hold-duration-years" /></td>
    <td><code>integer</code></td>
    <td>The event hold duration in years to apply to the object copy. You cannot specify a duration in both days and years. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-legal-hold">
    <td><CopyableCode code="x-amz-object-lock-legal-hold" /></td>
    <td><code>string</code></td>
    <td>Specifies whether you want to apply a legal hold to the object copy. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-mode">
    <td><CopyableCode code="x-amz-object-lock-mode" /></td>
    <td><code>string</code></td>
    <td>The Object Lock mode that you want to apply to the object copy. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-retain-until-date">
    <td><CopyableCode code="x-amz-object-lock-retain-until-date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when you want the Object Lock of the object copy to expire. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-optional-object-attributes">
    <td><CopyableCode code="x-amz-optional-object-attributes" /></td>
    <td><code>array</code></td>
    <td>Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.</td>
</tr>
<tr id="parameter-x-amz-rename-source-if-match">
    <td><CopyableCode code="x-amz-rename-source-if-match" /></td>
    <td><code>string</code></td>
    <td>Renames the object if the source exists and if its entity tag (ETag) matches the specified ETag.</td>
</tr>
<tr id="parameter-x-amz-rename-source-if-modified-since">
    <td><CopyableCode code="x-amz-rename-source-if-modified-since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Renames the object if the source exists and if it has been modified since the specified time.</td>
</tr>
<tr id="parameter-x-amz-rename-source-if-none-match">
    <td><CopyableCode code="x-amz-rename-source-if-none-match" /></td>
    <td><code>string</code></td>
    <td>Renames the object if the source exists and if its entity tag (ETag) is different than the specified ETag. If an asterisk (*) character is provided, the operation will fail and return a 412 Precondition Failed error.</td>
</tr>
<tr id="parameter-x-amz-rename-source-if-unmodified-since">
    <td><CopyableCode code="x-amz-rename-source-if-unmodified-since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Renames the object if the source exists and hasn't been modified since the specified time.</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption">
    <td><CopyableCode code="x-amz-server-side-encryption" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption algorithm used when storing this object in Amazon S3. Unrecognized or unsupported values won’t write a destination object and will receive a 400 Bad Request response. Amazon S3 automatically encrypts all new objects that are copied to an S3 bucket. When copying an object, if you don't specify encryption information in your copy request, the encryption setting of the target object is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a different default encryption configuration, Amazon S3 uses the corresponding encryption key to encrypt the target object copy. With server-side encryption, Amazon S3 encrypts your data as it writes your data to disks in its data centers and decrypts the data when you access it. For more information about server-side encryption, see Using Server-Side Encryption in the Amazon S3 User Guide. General purpose buckets For general purpose buckets, there are the following supported options for server-side encryption: server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), and server-side encryption with customer-provided encryption keys (SSE-C). Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the target object copy. When you perform a CopyObject operation, if you want to use a different type of encryption setting for the target object, you can specify appropriate encryption-related headers to encrypt the target object with an Amazon S3 managed key, a KMS key, or a customer-provided key. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. Directory buckets For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. To encrypt new object copies to a directory bucket with SSE-KMS, we recommend you specify SSE-KMS as the directory bucket's default encryption configuration with a KMS key (specifically, a customer managed key). The Amazon Web Services managed key (aws/s3) isn't supported. Your SSE-KMS configuration can only support 1 customer managed key per directory bucket for the lifetime of the bucket. After you specify a customer managed key for SSE-KMS, you can't override the customer managed key for the bucket's SSE-KMS configuration. Then, when you perform a CopyObject operation and want to specify server-side encryption settings for new object copies with SSE-KMS in the encryption-related request headers, you must ensure the encryption key is the same customer managed key that you specified for the directory bucket's default encryption configuration. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-aws-kms-key-id">
    <td><CopyableCode code="x-amz-server-side-encryption-aws-kms-key-id" /></td>
    <td><code>string</code></td>
    <td>Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. All GET and PUT requests for an object protected by KMS will fail if they're not made via SSL or using SigV4. For information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 User Guide. Directory buckets - To encrypt data using SSE-KMS, it's recommended to specify the x-amz-server-side-encryption header to aws:kms. Then, the x-amz-server-side-encryption-aws-kms-key-id header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the x-amz-server-side-encryption-aws-kms-key-id header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported. Incorrect key specification results in an HTTP 400 Bad Request error.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-bucket-key-enabled">
    <td><CopyableCode code="x-amz-server-side-encryption-bucket-key-enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the object. Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with a COPY action doesn’t affect bucket-level settings for S3 Bucket Key. For more information, see Amazon S3 Bucket Keys in the Amazon S3 User Guide. Directory buckets - S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-context">
    <td><CopyableCode code="x-amz-server-side-encryption-context" /></td>
    <td><code>string</code></td>
    <td>Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for the destination object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs. General purpose buckets - This value must be explicitly added to specify encryption context for CopyObject requests if you want an additional encryption context for your destination object. The additional encryption context of the source object won't be copied to the destination object. For more information, see Encryption context in the Amazon S3 User Guide. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.</td>
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
<tr id="parameter-x-amz-source-expected-bucket-owner">
    <td><CopyableCode code="x-amz-source-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected source bucket owner. If the account ID that you provide does not match the actual owner of the source bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-storage-class">
    <td><CopyableCode code="x-amz-storage-class" /></td>
    <td><code>string</code></td>
    <td>If the x-amz-storage-class header is not used, the copied object will be stored in the STANDARD Storage Class by default. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Directory buckets - Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Unsupported storage class values won't write a destination object and will respond with the HTTP status code 400 Bad Request. Amazon S3 on Outposts - S3 on Outposts only uses the OUTPOSTS Storage Class. You can use the CopyObject action to change the storage class of an object that is already stored in Amazon S3 by using the x-amz-storage-class header. For more information, see Storage Classes in the Amazon S3 User Guide. Before using an object as a source object for the copy operation, you must restore a copy of it if it meets any of the following conditions: The storage class of the source object is GLACIER or DEEP_ARCHIVE. The storage class of the source object is INTELLIGENT_TIERING and it's S3 Intelligent-Tiering access tier is Archive Access or Deep Archive Access. For more information, see RestoreObject and Copying Objects in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-tagging">
    <td><CopyableCode code="x-amz-tagging" /></td>
    <td><code>string</code></td>
    <td>The tag-set for the object copy in the destination bucket. This value must be used in conjunction with the x-amz-tagging-directive if you choose REPLACE for the x-amz-tagging-directive. If you choose COPY for the x-amz-tagging-directive, you don't need to set the x-amz-tagging header, because the tag-set will be copied from the source object directly. The tag-set must be encoded as URL Query parameters. The default value is the empty value. Directory buckets - For directory buckets in a CopyObject operation, only the empty tag-set is supported. Any requests that attempt to write non-empty tags into directory buckets will receive a 501 Not Implemented status code. When the destination bucket is a directory bucket, you will receive a 501 Not Implemented response in any of the following situations: When you attempt to COPY the tag-set from an S3 source object that has non-empty tags. When you attempt to REPLACE the tag-set of a source object and set a non-empty value to x-amz-tagging. When you don't set the x-amz-tagging-directive header and the source object has non-empty tags. This is because the default value of x-amz-tagging-directive is COPY. Because only the empty tag-set is supported for directory buckets in a CopyObject operation, the following situations are allowed: When you attempt to COPY the tag-set from a directory bucket source object that has no tags to a general purpose bucket. It copies an empty tag-set to the destination object. When you attempt to REPLACE the tag-set of a directory bucket source object and set the x-amz-tagging value of the directory bucket destination object to empty. When you attempt to REPLACE the tag-set of a general purpose bucket source object that has non-empty tags and set the x-amz-tagging value of the directory bucket destination object to empty. When you attempt to REPLACE the tag-set of a directory bucket source object and don't set the x-amz-tagging value of the directory bucket destination object. This is because the default value of x-amz-tagging is the empty value.</td>
</tr>
<tr id="parameter-x-amz-tagging-directive">
    <td><CopyableCode code="x-amz-tagging-directive" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the object tag-set is copied from the source object or replaced with the tag-set that's provided in the request. The default value is COPY. Directory buckets - For directory buckets in a CopyObject operation, only the empty tag-set is supported. Any requests that attempt to write non-empty tags into directory buckets will receive a 501 Not Implemented status code. When the destination bucket is a directory bucket, you will receive a 501 Not Implemented response in any of the following situations: When you attempt to COPY the tag-set from an S3 source object that has non-empty tags. When you attempt to REPLACE the tag-set of a source object and set a non-empty value to x-amz-tagging. When you don't set the x-amz-tagging-directive header and the source object has non-empty tags. This is because the default value of x-amz-tagging-directive is COPY. Because only the empty tag-set is supported for directory buckets in a CopyObject operation, the following situations are allowed: When you attempt to COPY the tag-set from a directory bucket source object that has no tags to a general purpose bucket. It copies an empty tag-set to the destination object. When you attempt to REPLACE the tag-set of a directory bucket source object and set the x-amz-tagging value of the directory bucket destination object to empty. When you attempt to REPLACE the tag-set of a general purpose bucket source object that has non-empty tags and set the x-amz-tagging value of the directory bucket destination object to empty. When you attempt to REPLACE the tag-set of a directory bucket source object and don't set the x-amz-tagging value of the directory bucket destination object. This is because the default value of x-amz-tagging is the empty value.</td>
</tr>
<tr id="parameter-x-amz-website-redirect-location">
    <td><CopyableCode code="x-amz-website-redirect-location" /></td>
    <td><code>string</code></td>
    <td>If the destination bucket is configured as a website, redirects requests for this object copy to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. This value is unique to each object and is not copied when using the x-amz-metadata-directive header. Instead, you may opt to provide this header in combination with the x-amz-metadata-directive header. This functionality is not supported for directory buckets.</td>
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
`x-amz-object-lock-event-hold`,
`x-amz-object-lock-event-hold-duration-days`,
`x-amz-object-lock-event-hold-duration-years`,
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
'{{ x-amz-object-lock-event-hold }}',
'{{ x-amz-object-lock-event-hold-duration-days }}',
'{{ x-amz-object-lock-event-hold-duration-years }}',
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
    - name: x-amz-object-lock-event-hold
      value: "{{ x-amz-object-lock-event-hold }}"
      description: Specifies the event hold status to apply to this object. Set to ON to enable or OFF to disable. This functionality is not supported for directory buckets.
      description: Specifies the event hold status to apply to this object. Set to ON to enable or OFF to disable. This functionality is not supported for directory buckets.
    - name: x-amz-object-lock-event-hold-duration-days
      value: {{ x-amz-object-lock-event-hold-duration-days }}
      description: Specifies the event hold duration in days to apply to this object. You cannot specify a duration in both days and years. This functionality is not supported for directory buckets.
      description: Specifies the event hold duration in days to apply to this object. You cannot specify a duration in both days and years. This functionality is not supported for directory buckets.
    - name: x-amz-object-lock-event-hold-duration-years
      value: {{ x-amz-object-lock-event-hold-duration-years }}
      description: Specifies the event hold duration in years to apply to this object. You cannot specify a duration in both days and years. This functionality is not supported for directory buckets.
      description: Specifies the event hold duration in years to apply to this object. You cannot specify a duration in both days and years. This functionality is not supported for directory buckets.
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
AND `x-amz-object-lock-event-hold` = '{{ x-amz-object-lock-event-hold}}'
AND `x-amz-object-lock-event-hold-duration-days` = '{{ x-amz-object-lock-event-hold-duration-days}}'
AND `x-amz-object-lock-event-hold-duration-years` = '{{ x-amz-object-lock-event-hold-duration-years}}'
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


## Lifecycle Methods

<Tabs
    defaultValue="copy_object"
    values={[
        { label: 'copy_object', value: 'copy_object' },
        { label: 'head_object', value: 'head_object' },
        { label: 'rename_object', value: 'rename_object' },
        { label: 'restore_object', value: 'restore_object' }
    ]}
>
<TabItem value="copy_object">

Creates a copy of an object that is already stored in Amazon S3. End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). You can store individual objects of up to 50 TB in Amazon S3. You create a copy of your object up to 5 GB in size in a single atomic action using this API. However, to copy an object greater than 5 GB, you must use the multipart upload Upload Part - Copy (UploadPartCopy) API. For more information, see Copy Object Using the REST Multipart Upload API. You can copy individual objects between general purpose buckets, between directory buckets, and between general purpose buckets and directory buckets. Amazon S3 supports copy operations using Multi-Region Access Points only as a destination when using the Multi-Region Access Point ARN. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. VPC endpoints don't support cross-Region requests (including copies). If you're using VPC endpoints, your source and destination buckets should be in the same Amazon Web Services Region as your VPC endpoint. Both the Region that you want to copy the object from and the Region that you want to copy the object to must be enabled for your account. For more information about how to enable a Region for your account, see Enable or disable a Region for standalone accounts in the Amazon Web Services Account Management Guide. Amazon S3 transfer acceleration does not support cross-Region copies. If you request a cross-Region copy using a transfer acceleration endpoint, you get a 400 Bad Request error. For more information, see Transfer Acceleration. Authentication and authorization All CopyObject requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the x-amz- prefix, including x-amz-copy-source, must be signed. For more information, see REST Authentication. Directory buckets - You must use the IAM credentials to authenticate and authorize your access to the CopyObject API operation, instead of using the temporary security credentials through the CreateSession API operation. Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf. Permissions You must have read access to the source object and write access to the destination bucket. General purpose bucket permissions - You must have permissions in an IAM policy based on the source and destination bucket types in a CopyObject operation. If the source object is in a general purpose bucket, you must have s3:GetObject permission to read the source object that is being copied. If the destination bucket is a general purpose bucket, you must have s3:PutObject permission to write the object copy to the destination bucket. Directory bucket permissions - You must have permissions in a bucket policy or an IAM identity-based policy based on the source and destination bucket types in a CopyObject operation. If the source object that you want to copy is in a directory bucket, you must have the s3express:CreateSession permission in the Action element of a policy to read the object. If no session mode is specified, the session will be created with the maximum allowable privilege, attempting ReadWrite first, then ReadOnly if ReadWrite is not permitted. If you want to explicitly restrict the access to be read-only, you can set the s3express:SessionMode condition key to ReadOnly on the copy source bucket. If the copy destination is a directory bucket, you must have the s3express:CreateSession permission in the Action element of a policy to write the object to the destination. The s3express:SessionMode condition key can't be set to ReadOnly on the copy destination bucket. If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide. Response and special errors When the request is an HTTP 1.1 request, the response is chunk encoded. When the request is not an HTTP 1.1 request, the response would not contain the Content-Length. You always need to read the entire response body to check if the copy succeeds. If the copy is successful, you receive a response with information about the copied object. A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3 is copying the files. A 200 OK response can contain either a success or an error. If the error occurs before the copy action starts, you receive a standard Amazon S3 error. If the error occurs during the copy operation, the error response is embedded in the 200 OK response. For example, in a cross-region copy, you may encounter throttling and receive a 200 OK response. For more information, see Resolve the Error 200 response when copying objects to Amazon S3. The 200 OK status code means the copy was accepted, but it doesn't mean the copy is complete. Another example is when you disconnect from Amazon S3 before the copy is complete, Amazon S3 might cancel the copy and you may receive a 200 OK response. You must stay connected to Amazon S3 until the entire response is successfully received and processed. If you call this API operation directly, make sure to design your application to parse the content of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throw an exception (or, for the SDKs that don't use exceptions, they return an error). Charge The copy request charge is based on the storage class and Region that you specify for the destination object. The request can also result in a data retrieval charge for the source if the source storage class bills for data retrieval. If the copy source is in a different region, the data transfer is billed to the copy source account. For pricing information, see Amazon S3 pricing. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. Amazon S3 on Outposts - When you use this action with S3 on Outposts through the REST API, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. The hostname isn't required when you use the Amazon Web Services CLI or SDKs. The following operations are related to CopyObject: PutObject GetObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
EXEC aws.s3.objects.copy_object 
@bucket='{{ bucket }}' --required, 
@x-amz-copy-source='{{ x-amz-copy-source }}' --required, 
@key='{{ key }}' --required, 
@region='{{ region }}' --required, 
@x-amz-acl='{{ x-amz-acl }}', 
@Cache-Control='{{ Cache-Control }}', 
@x-amz-checksum-algorithm='{{ x-amz-checksum-algorithm }}', 
@Content-Disposition='{{ Content-Disposition }}', 
@Content-Encoding='{{ Content-Encoding }}', 
@Content-Language='{{ Content-Language }}', 
@Content-Type='{{ Content-Type }}', 
@x-amz-copy-source-if-match='{{ x-amz-copy-source-if-match }}', 
@x-amz-copy-source-if-modified-since='{{ x-amz-copy-source-if-modified-since }}', 
@x-amz-copy-source-if-none-match='{{ x-amz-copy-source-if-none-match }}', 
@x-amz-copy-source-if-unmodified-since='{{ x-amz-copy-source-if-unmodified-since }}', 
@Expires='{{ Expires }}', 
@x-amz-grant-full-control='{{ x-amz-grant-full-control }}', 
@x-amz-grant-read='{{ x-amz-grant-read }}', 
@x-amz-grant-read-acp='{{ x-amz-grant-read-acp }}', 
@x-amz-grant-write-acp='{{ x-amz-grant-write-acp }}', 
@If-Match='{{ If-Match }}', 
@If-None-Match='{{ If-None-Match }}', 
@x-amz-meta-='{{ x-amz-meta- }}', 
@x-amz-metadata-directive='{{ x-amz-metadata-directive }}', 
@x-amz-tagging-directive='{{ x-amz-tagging-directive }}', 
@x-amz-object-annotation-directive='{{ x-amz-object-annotation-directive }}', 
@x-amz-server-side-encryption='{{ x-amz-server-side-encryption }}', 
@x-amz-storage-class='{{ x-amz-storage-class }}', 
@x-amz-website-redirect-location='{{ x-amz-website-redirect-location }}', 
@x-amz-server-side-encryption-customer-algorithm='{{ x-amz-server-side-encryption-customer-algorithm }}', 
@x-amz-server-side-encryption-customer-key='{{ x-amz-server-side-encryption-customer-key }}', 
@x-amz-server-side-encryption-customer-key-MD5='{{ x-amz-server-side-encryption-customer-key-MD5 }}', 
@x-amz-server-side-encryption-aws-kms-key-id='{{ x-amz-server-side-encryption-aws-kms-key-id }}', 
@x-amz-server-side-encryption-context='{{ x-amz-server-side-encryption-context }}', 
@x-amz-server-side-encryption-bucket-key-enabled={{ x-amz-server-side-encryption-bucket-key-enabled }}, 
@x-amz-copy-source-server-side-encryption-customer-algorithm='{{ x-amz-copy-source-server-side-encryption-customer-algorithm }}', 
@x-amz-copy-source-server-side-encryption-customer-key='{{ x-amz-copy-source-server-side-encryption-customer-key }}', 
@x-amz-copy-source-server-side-encryption-customer-key-MD5='{{ x-amz-copy-source-server-side-encryption-customer-key-MD5 }}', 
@x-amz-request-payer='{{ x-amz-request-payer }}', 
@x-amz-tagging='{{ x-amz-tagging }}', 
@x-amz-object-lock-mode='{{ x-amz-object-lock-mode }}', 
@x-amz-object-lock-retain-until-date='{{ x-amz-object-lock-retain-until-date }}', 
@x-amz-object-lock-legal-hold='{{ x-amz-object-lock-legal-hold }}', 
@x-amz-object-lock-event-hold='{{ x-amz-object-lock-event-hold }}', 
@x-amz-object-lock-event-hold-duration-days='{{ x-amz-object-lock-event-hold-duration-days }}', 
@x-amz-object-lock-event-hold-duration-years='{{ x-amz-object-lock-event-hold-duration-years }}', 
@x-amz-expected-bucket-owner='{{ x-amz-expected-bucket-owner }}', 
@x-amz-source-expected-bucket-owner='{{ x-amz-source-expected-bucket-owner }}'
;
```
</TabItem>
<TabItem value="head_object">

The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata. A HEAD request has the same options as a GET operation on an object. The response is identical to the GET response except that there is no response body. Because of this, if the HEAD request generates an error, it returns a generic code, such as 400 Bad Request, 403 Forbidden, 404 Not Found, 405 Method Not Allowed, 412 Precondition Failed, or 304 Not Modified. It's not possible to retrieve the exact exception of these error codes. Request headers are limited to 8 KB in size. For more information, see Common Request Headers. Permissions General purpose bucket permissions - To use HEAD, you must have the s3:GetObject permission. You need the relevant read object (or version) permission for this operation. For more information, see Actions, resources, and condition keys for Amazon S3 in the Amazon S3 User Guide. For more information about the permissions to S3 API operations by S3 resource types, see Required permissions for Amazon S3 API operations in the Amazon S3 User Guide. If the object you request doesn't exist, the error that Amazon S3 returns depends on whether you also have the s3:ListBucket permission. If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found error. If you don’t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Forbidden error. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . If you enable x-amz-checksum-mode in the request and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object. Encryption Encryption request headers, like x-amz-server-side-encryption, should not be sent for HEAD requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). The x-amz-server-side-encryption header is used when you PUT an object to S3 and want to specify the encryption method. If you include this header in a HEAD request for an object that uses these types of keys, you’ll get an HTTP 400 Bad Request error. It's because the encryption method can't be changed when you retrieve the object. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers to provide the encryption key for the server to be able to retrieve the object's metadata. The headers are: x-amz-server-side-encryption-customer-algorithm x-amz-server-side-encryption-customer-key x-amz-server-side-encryption-customer-key-MD5 For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide. Directory bucket - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. SSE-C isn't supported. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. Versioning If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes x-amz-delete-marker: true in the response. If the specified version is a delete marker, the response returns a 405 Method Not Allowed error and the Last-Modified: timestamp response header. Directory buckets - Delete marker is not supported for directory buckets. Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. The following actions are related to HeadObject: GetObject GetObjectAttributes You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
EXEC aws.s3.objects.head_object 
@bucket='{{ bucket }}' --required, 
@key='{{ key }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@If-Modified-Since='{{ If-Modified-Since }}', 
@If-None-Match='{{ If-None-Match }}', 
@If-Unmodified-Since='{{ If-Unmodified-Since }}', 
@Range='{{ Range }}', 
@response-cache-control='{{ response-cache-control }}', 
@response-content-disposition='{{ response-content-disposition }}', 
@response-content-encoding='{{ response-content-encoding }}', 
@response-content-language='{{ response-content-language }}', 
@response-content-type='{{ response-content-type }}', 
@response-expires='{{ response-expires }}', 
@versionId='{{ versionId }}', 
@x-amz-server-side-encryption-customer-algorithm='{{ x-amz-server-side-encryption-customer-algorithm }}', 
@x-amz-server-side-encryption-customer-key='{{ x-amz-server-side-encryption-customer-key }}', 
@x-amz-server-side-encryption-customer-key-MD5='{{ x-amz-server-side-encryption-customer-key-MD5 }}', 
@x-amz-request-payer='{{ x-amz-request-payer }}', 
@partNumber='{{ partNumber }}', 
@x-amz-expected-bucket-owner='{{ x-amz-expected-bucket-owner }}', 
@x-amz-checksum-mode='{{ x-amz-checksum-mode }}'
;
```
</TabItem>
<TabItem value="rename_object">

Renames an existing object in a directory bucket that uses the S3 Express One Zone storage class. You can use RenameObject by specifying an existing object’s name as the source and the new name of the object as the destination within the same directory bucket. RenameObject is only supported for objects stored in the S3 Express One Zone storage class. To prevent overwriting an object, you can use the If-None-Match conditional header. If-None-Match - Renames the object only if an object with the specified name does not already exist in the directory bucket. If you don't want to overwrite an existing object, you can add the If-None-Match conditional header with the value ‘*’ in the RenameObject request. Amazon S3 then returns a 412 Precondition Failed error if the object with the specified name already exists. For more information, see RFC 7232. Permissions To grant access to the RenameObject operation on a directory bucket, we recommend that you use the CreateSession operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the directory bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. The Amazon Web Services CLI and SDKs will create and manage your session including refreshing the session token automatically to avoid service interruptions when a session expires. In your bucket policy, you can specify the s3express:SessionMode condition key to control who can create a ReadWrite or ReadOnly session. A ReadWrite session is required for executing all the Zonal endpoint API operations, including RenameObject. For more information about authorization, see CreateSession . To learn more about Zonal endpoint API operations, see Authorizing Zonal endpoint API operations with CreateSession in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
EXEC aws.s3.objects.rename_object 
@bucket='{{ bucket }}' --required, 
@key='{{ key }}' --required, 
@x-amz-rename-source='{{ x-amz-rename-source }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@If-None-Match='{{ If-None-Match }}', 
@If-Modified-Since='{{ If-Modified-Since }}', 
@If-Unmodified-Since='{{ If-Unmodified-Since }}', 
@x-amz-rename-source-if-match='{{ x-amz-rename-source-if-match }}', 
@x-amz-rename-source-if-none-match='{{ x-amz-rename-source-if-none-match }}', 
@x-amz-rename-source-if-modified-since='{{ x-amz-rename-source-if-modified-since }}', 
@x-amz-rename-source-if-unmodified-since='{{ x-amz-rename-source-if-unmodified-since }}', 
@x-amz-client-token='{{ x-amz-client-token }}'
;
```
</TabItem>
<TabItem value="restore_object">

This operation is not supported for directory buckets. Restores an archived copy of an object back into Amazon S3 This functionality is not supported for Amazon S3 on Outposts. This action performs the following types of requests: restore an archive - Restore an archived object For more information about the S3 structure in the request body, see the following: PutObject Managing Access with ACLs in the Amazon S3 User Guide Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide Permissions To use this operation, you must have permissions to perform the s3:RestoreObject action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide. Restoring objects Objects that you archive to the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage class, and S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, are not accessible in real time. For objects in the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes, you must first initiate a restore request, and then wait until a temporary copy of the object is available. If you want a permanent copy of the object, create a copy of it in the Amazon S3 Standard storage class in your S3 bucket. To access an archived object, you must restore the object for the duration (number of days) that you specify. For objects in the Archive Access or Deep Archive Access tiers of S3 Intelligent-Tiering, you must first initiate a restore request, and then wait until the object is moved into the Frequent Access tier. To restore a specific object version, you can provide a version ID. If you don't provide a version ID, Amazon S3 restores the current version. When restoring an archived object, you can specify one of the following data access tier options in the Tier element of the request body: Expedited - Expedited retrievals allow you to quickly access your data stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier when occasional urgent requests for restoring archives are required. For all but the largest archived objects (250 MB+), data accessed using Expedited retrievals is typically made available within 1–5 minutes. Provisioned capacity ensures that retrieval capacity for Expedited retrievals is available when you need it. Expedited retrievals and provisioned capacity are not available for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard - Standard retrievals allow you to access any of your archived objects within several hours. This is the default option for retrieval requests that do not specify the retrieval option. Standard retrievals typically finish within 3–5 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. They typically finish within 12 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard retrievals are free for objects stored in S3 Intelligent-Tiering. Bulk - Bulk retrievals free for objects stored in the S3 Glacier Flexible Retrieval and S3 Intelligent-Tiering storage classes, enabling you to retrieve large amounts, even petabytes, of data at no cost. Bulk retrievals typically finish within 5–12 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. Bulk retrievals are also the lowest-cost retrieval option when restoring objects from S3 Glacier Deep Archive. They typically finish within 48 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. For more information about archive retrieval options and provisioned capacity for Expedited data access, see Restoring Archived Objects in the Amazon S3 User Guide. You can use Amazon S3 restore speed upgrade to change the restore speed to a faster speed while it is in progress. For more information, see Upgrading the speed of an in-progress restore in the Amazon S3 User Guide. To get the status of object restoration, you can send a HEAD request. Operations return the x-amz-restore header, which provides information about the restoration status, in the response. You can use Amazon S3 event notifications to notify you when a restore is initiated or completed. For more information, see Configuring Amazon S3 Event Notifications in the Amazon S3 User Guide. After restoring an archived object, you can update the restoration period by reissuing the request with a new period. Amazon S3 updates the restoration period relative to the current time and charges only for the request-there are no data transfer charges. You cannot update the restoration period when Amazon S3 is actively processing your current restore request for the object. If your bucket has a lifecycle configuration with a rule that includes an expiration action, the object expiration overrides the life span that you specify in a restore request. For example, if you restore an object copy for 10 days, but the object is scheduled to expire in 3 days, Amazon S3 deletes the object in 3 days. For more information about lifecycle configuration, see PutBucketLifecycleConfiguration and Object Lifecycle Management in Amazon S3 User Guide. Responses A successful action returns either the 200 OK or 202 Accepted status code. If the object is not previously restored, then Amazon S3 returns 202 Accepted in the response. If the object is previously restored, Amazon S3 returns 200 OK in the response. Special errors: Code: RestoreAlreadyInProgress Cause: Object restore is already in progress. HTTP Status Code: 409 Conflict SOAP Fault Code Prefix: Client Code: GlacierExpeditedRetrievalNotAvailable Cause: expedited retrievals are currently not available. Try again later. (Returned if there is insufficient capacity to process the Expedited request. This error applies only to Expedited retrievals and not to S3 Standard or Bulk retrievals.) HTTP Status Code: 503 SOAP Fault Code Prefix: N/A The following operations are related to RestoreObject: PutBucketLifecycleConfiguration GetBucketNotificationConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
EXEC aws.s3.objects.restore_object 
@bucket='{{ bucket }}' --required, 
@key='{{ key }}' --required, 
@region='{{ region }}' --required, 
@versionId='{{ versionId }}', 
@x-amz-request-payer='{{ x-amz-request-payer }}', 
@x-amz-sdk-checksum-algorithm='{{ x-amz-sdk-checksum-algorithm }}', 
@x-amz-expected-bucket-owner='{{ x-amz-expected-bucket-owner }}' 
@@json=
'{
"RestoreRequest": "{{ RestoreRequest }}"
}'
;
```
</TabItem>
</Tabs>
