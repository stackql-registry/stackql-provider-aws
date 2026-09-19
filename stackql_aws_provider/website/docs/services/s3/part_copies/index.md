--- 
title: part_copies
hide_title: false
hide_table_of_contents: false
keywords:
  - part_copies
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

Creates, updates, deletes, gets or lists a <code>part_copies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="part_copies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.part_copies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#upload_part_copy"><CopyableCode code="upload_part_copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-x-amz-copy-source"><code>x-amz-copy-source</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-partNumber"><code>partNumber</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-copy-source-if-match"><code>x-amz-copy-source-if-match</code></a>, <a href="#parameter-x-amz-copy-source-if-modified-since"><code>x-amz-copy-source-if-modified-since</code></a>, <a href="#parameter-x-amz-copy-source-if-none-match"><code>x-amz-copy-source-if-none-match</code></a>, <a href="#parameter-x-amz-copy-source-if-unmodified-since"><code>x-amz-copy-source-if-unmodified-since</code></a>, <a href="#parameter-x-amz-copy-source-range"><code>x-amz-copy-source-range</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-copy-source-server-side-encryption-customer-algorithm"><code>x-amz-copy-source-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-copy-source-server-side-encryption-customer-key"><code>x-amz-copy-source-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-copy-source-server-side-encryption-customer-key-MD5"><code>x-amz-copy-source-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-source-expected-bucket-owner"><code>x-amz-source-expected-bucket-owner</code></a></td>
    <td>Uploads a part by copying data from an existing object as data source. To specify the data source, you add the request header x-amz-copy-source in your request. To specify a byte range, you add the request header x-amz-copy-source-range in your request. For information about maximum and minimum part sizes and other multipart upload specifications, see Multipart upload limits in the Amazon S3 User Guide. Instead of copying data from an existing object as part data, you might use the UploadPart action to upload new data as a part of an object in your request. You must initiate a multipart upload before you can upload any part. In response to your initiate request, Amazon S3 returns the upload ID, a unique identifier that you must include in your upload part request. For conceptual information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide. For information about copying objects using a single atomic action vs. a multipart upload, see Operations on Objects in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Authentication and authorization All UploadPartCopy requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the x-amz- prefix, including x-amz-copy-source, must be signed. For more information, see REST Authentication. Directory buckets - You must use IAM credentials to authenticate and authorize your access to the UploadPartCopy API operation, instead of using the temporary security credentials through the CreateSession API operation. Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf. Permissions You must have READ access to the source object and WRITE access to the destination bucket. General purpose bucket permissions - You must have the permissions in a policy based on the bucket types of your source bucket and destination bucket in an UploadPartCopy operation. If the source object is in a general purpose bucket, you must have the s3:GetObject permission to read the source object that is being copied. If the destination bucket is a general purpose bucket, you must have the s3:PutObject permission to write the object copy to the destination bucket. To perform a multipart upload with encryption using an Key Management Service key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey actions on the key. The requester must also have permissions for the kms:GenerateDataKey action for the CreateMultipartUpload API. Then, the requester needs permissions for the kms:Decrypt action on the UploadPart and UploadPartCopy APIs. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information about KMS permissions, see Protecting data using server-side encryption with KMS in the Amazon S3 User Guide. For information about the permissions required to use the multipart upload API, see Multipart upload and permissions and Multipart upload API and permissions in the Amazon S3 User Guide. Directory bucket permissions - You must have permissions in a bucket policy or an IAM identity-based policy based on the source and destination bucket types in an UploadPartCopy operation. If the source object that you want to copy is in a directory bucket, you must have the s3express:CreateSession permission in the Action element of a policy to read the object. If no session mode is specified, the session will be created with the maximum allowable privilege, attempting ReadWrite first, then ReadOnly if ReadWrite is not permitted. If you want to explicitly restrict the access to be read-only, you can set the s3express:SessionMode condition key to ReadOnly on the copy source bucket. If the copy destination is a directory bucket, you must have the s3express:CreateSession permission in the Action element of a policy to write the object to the destination. The s3express:SessionMode condition key cannot be set to ReadOnly on the copy destination. If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide. Encryption General purpose buckets - For information about using server-side encryption with customer-provided encryption keys with the UploadPartCopy operation, see CopyObject and UploadPart. If you have server-side encryption with customer-provided keys (SSE-C) blocked for your general purpose bucket, you will get an HTTP 403 Access Denied error when you specify the SSE-C request headers while writing new data to your bucket. For more information, see Blocking or unblocking SSE-C for a general purpose bucket. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For directory buckets, when you perform a CreateMultipartUpload operation and an UploadPartCopy operation, the request headers you provide in the CreateMultipartUpload request must match the default encryption configuration of the destination bucket. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through UploadPartCopy. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object. Special errors Error Code: NoSuchUpload Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed. HTTP Status Code: 404 Not Found Error Code: InvalidRequest Description: The specified copy source is not supported as a byte-range copy source. HTTP Status Code: 400 Bad Request HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to UploadPartCopy: CreateMultipartUpload UploadPart CompleteMultipartUpload AbortMultipartUpload ListParts ListMultipartUploads You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The bucket name. Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format bucket-base-name--zone-id--x-s3 (for example, amzn-s3-demo-bucket--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide. Copying objects across different Amazon Web Services Regions isn't supported when the source or destination bucket is in Amazon Web Services Local Zones. The source and destination buckets must have the same parent Amazon Web Services Region. Otherwise, you get an HTTP 400 Bad Request error with the error code InvalidRequest. Access points - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. Object Lambda access points are not supported by directory buckets. S3 on Outposts - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see What is S3 on Outposts? in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Object key for which the multipart upload was initiated.</td>
</tr>
<tr id="parameter-partNumber">
    <td><CopyableCode code="partNumber" /></td>
    <td><code>integer</code></td>
    <td>Part number of part being copied. This is a positive integer between 1 and 10,000.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-uploadId">
    <td><CopyableCode code="uploadId" /></td>
    <td><code>string</code></td>
    <td>Upload ID identifying the multipart upload whose part is being copied.</td>
</tr>
<tr id="parameter-x-amz-copy-source">
    <td><CopyableCode code="x-amz-copy-source" /></td>
    <td><code>string</code></td>
    <td>Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an access point: For objects not accessed through an access point, specify the name of the source bucket and key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL-encoded. For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:accesspoint/<code>&lt;access-point-name&gt;</code>/object/<code>&lt;key&gt;</code>. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded. Amazon S3 supports copy operations using Access points only when the source and destination buckets are in the same Amazon Web Services Region. Access points are not supported by directory buckets. Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:outpost/<code>&lt;outpost-id&gt;</code>/object/<code>&lt;key&gt;</code>. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL-encoded. If your bucket has versioning enabled, you could have multiple versions of the same object. By default, x-amz-copy-source identifies the current version of the source object to copy. To copy a specific version of the source object to copy, append ?versionId=<code>&lt;version-id&gt;</code> to the x-amz-copy-source request header (for example, x-amz-copy-source: /awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If the current version is a delete marker and you don't specify a versionId in the x-amz-copy-source request header, Amazon S3 returns a 404 Not Found error, because the object does not exist. If you specify versionId in the x-amz-copy-source and the versionId is a delete marker, Amazon S3 returns an HTTP 400 Bad Request error, because you are not allowed to specify a delete marker as a version for the x-amz-copy-source. Directory buckets - S3 Versioning isn't enabled and supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-copy-source-if-match">
    <td><CopyableCode code="x-amz-copy-source-if-match" /></td>
    <td><code>string</code></td>
    <td>Copies the object if its entity tag (ETag) matches the specified tag. If both of the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request as follows: x-amz-copy-source-if-match condition evaluates to true, and; x-amz-copy-source-if-unmodified-since condition evaluates to false; Amazon S3 returns 200 OK and copies the data.</td>
</tr>
<tr id="parameter-x-amz-copy-source-if-modified-since">
    <td><CopyableCode code="x-amz-copy-source-if-modified-since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Copies the object if it has been modified since the specified time. If both of the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request as follows: x-amz-copy-source-if-none-match condition evaluates to false, and; x-amz-copy-source-if-modified-since condition evaluates to true; Amazon S3 returns 412 Precondition Failed response code.</td>
</tr>
<tr id="parameter-x-amz-copy-source-if-none-match">
    <td><CopyableCode code="x-amz-copy-source-if-none-match" /></td>
    <td><code>string</code></td>
    <td>Copies the object if its entity tag (ETag) is different than the specified ETag. If both of the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request as follows: x-amz-copy-source-if-none-match condition evaluates to false, and; x-amz-copy-source-if-modified-since condition evaluates to true; Amazon S3 returns 412 Precondition Failed response code.</td>
</tr>
<tr id="parameter-x-amz-copy-source-if-unmodified-since">
    <td><CopyableCode code="x-amz-copy-source-if-unmodified-since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Copies the object if it hasn't been modified since the specified time. If both of the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request as follows: x-amz-copy-source-if-match condition evaluates to true, and; x-amz-copy-source-if-unmodified-since condition evaluates to false; Amazon S3 returns 200 OK and copies the data.</td>
</tr>
<tr id="parameter-x-amz-copy-source-range">
    <td><CopyableCode code="x-amz-copy-source-range" /></td>
    <td><code>string</code></td>
    <td>The range of bytes to copy from the source object. The range value must use the form bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You can copy a range only if the source object is greater than 5 MB.</td>
</tr>
<tr id="parameter-x-amz-copy-source-server-side-encryption-customer-algorithm">
    <td><CopyableCode code="x-amz-copy-source-server-side-encryption-customer-algorithm" /></td>
    <td><code>string</code></td>
    <td>Specifies the algorithm to use when decrypting the source object (for example, AES256). This functionality is not supported when the source object is in a directory bucket.</td>
</tr>
<tr id="parameter-x-amz-copy-source-server-side-encryption-customer-key">
    <td><CopyableCode code="x-amz-copy-source-server-side-encryption-customer-key" /></td>
    <td><code>string</code></td>
    <td>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created. This functionality is not supported when the source object is in a directory bucket.</td>
</tr>
<tr id="parameter-x-amz-copy-source-server-side-encryption-customer-key-MD5">
    <td><CopyableCode code="x-amz-copy-source-server-side-encryption-customer-key-MD5" /></td>
    <td><code>string</code></td>
    <td>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. This functionality is not supported when the source object is in a directory bucket.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected destination bucket owner. If the account ID that you provide does not match the actual owner of the destination bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-algorithm">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-algorithm" /></td>
    <td><code>string</code></td>
    <td>Specifies the algorithm to use when encrypting the object (for example, AES256). This functionality is not supported when the destination bucket is a directory bucket.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-key">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-key" /></td>
    <td><code>string</code></td>
    <td>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request. This functionality is not supported when the destination bucket is a directory bucket.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-key-MD5">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-key-MD5" /></td>
    <td><code>string</code></td>
    <td>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. This functionality is not supported when the destination bucket is a directory bucket.</td>
</tr>
<tr id="parameter-x-amz-source-expected-bucket-owner">
    <td><CopyableCode code="x-amz-source-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected source bucket owner. If the account ID that you provide does not match the actual owner of the source bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="upload_part_copy"
    values={[
        { label: 'upload_part_copy', value: 'upload_part_copy' }
    ]}
>
<TabItem value="upload_part_copy">

Uploads a part by copying data from an existing object as data source. To specify the data source, you add the request header x-amz-copy-source in your request. To specify a byte range, you add the request header x-amz-copy-source-range in your request. For information about maximum and minimum part sizes and other multipart upload specifications, see Multipart upload limits in the Amazon S3 User Guide. Instead of copying data from an existing object as part data, you might use the UploadPart action to upload new data as a part of an object in your request. You must initiate a multipart upload before you can upload any part. In response to your initiate request, Amazon S3 returns the upload ID, a unique identifier that you must include in your upload part request. For conceptual information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide. For information about copying objects using a single atomic action vs. a multipart upload, see Operations on Objects in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Authentication and authorization All UploadPartCopy requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the x-amz- prefix, including x-amz-copy-source, must be signed. For more information, see REST Authentication. Directory buckets - You must use IAM credentials to authenticate and authorize your access to the UploadPartCopy API operation, instead of using the temporary security credentials through the CreateSession API operation. Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf. Permissions You must have READ access to the source object and WRITE access to the destination bucket. General purpose bucket permissions - You must have the permissions in a policy based on the bucket types of your source bucket and destination bucket in an UploadPartCopy operation. If the source object is in a general purpose bucket, you must have the s3:GetObject permission to read the source object that is being copied. If the destination bucket is a general purpose bucket, you must have the s3:PutObject permission to write the object copy to the destination bucket. To perform a multipart upload with encryption using an Key Management Service key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey actions on the key. The requester must also have permissions for the kms:GenerateDataKey action for the CreateMultipartUpload API. Then, the requester needs permissions for the kms:Decrypt action on the UploadPart and UploadPartCopy APIs. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information about KMS permissions, see Protecting data using server-side encryption with KMS in the Amazon S3 User Guide. For information about the permissions required to use the multipart upload API, see Multipart upload and permissions and Multipart upload API and permissions in the Amazon S3 User Guide. Directory bucket permissions - You must have permissions in a bucket policy or an IAM identity-based policy based on the source and destination bucket types in an UploadPartCopy operation. If the source object that you want to copy is in a directory bucket, you must have the s3express:CreateSession permission in the Action element of a policy to read the object. If no session mode is specified, the session will be created with the maximum allowable privilege, attempting ReadWrite first, then ReadOnly if ReadWrite is not permitted. If you want to explicitly restrict the access to be read-only, you can set the s3express:SessionMode condition key to ReadOnly on the copy source bucket. If the copy destination is a directory bucket, you must have the s3express:CreateSession permission in the Action element of a policy to write the object to the destination. The s3express:SessionMode condition key cannot be set to ReadOnly on the copy destination. If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide. Encryption General purpose buckets - For information about using server-side encryption with customer-provided encryption keys with the UploadPartCopy operation, see CopyObject and UploadPart. If you have server-side encryption with customer-provided keys (SSE-C) blocked for your general purpose bucket, you will get an HTTP 403 Access Denied error when you specify the SSE-C request headers while writing new data to your bucket. For more information, see Blocking or unblocking SSE-C for a general purpose bucket. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For directory buckets, when you perform a CreateMultipartUpload operation and an UploadPartCopy operation, the request headers you provide in the CreateMultipartUpload request must match the default encryption configuration of the destination bucket. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through UploadPartCopy. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object. Special errors Error Code: NoSuchUpload Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed. HTTP Status Code: 404 Not Found Error Code: InvalidRequest Description: The specified copy source is not supported as a byte-range copy source. HTTP Status Code: 400 Bad Request HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to UploadPartCopy: CreateMultipartUpload UploadPart CompleteMultipartUpload AbortMultipartUpload ListParts ListMultipartUploads You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
EXEC aws.s3.part_copies.upload_part_copy 
@bucket='{{ bucket }}' --required, 
@x-amz-copy-source='{{ x-amz-copy-source }}' --required, 
@key='{{ key }}' --required, 
@partNumber='{{ partNumber }}' --required, 
@uploadId='{{ uploadId }}' --required, 
@region='{{ region }}' --required, 
@x-amz-copy-source-if-match='{{ x-amz-copy-source-if-match }}', 
@x-amz-copy-source-if-modified-since='{{ x-amz-copy-source-if-modified-since }}', 
@x-amz-copy-source-if-none-match='{{ x-amz-copy-source-if-none-match }}', 
@x-amz-copy-source-if-unmodified-since='{{ x-amz-copy-source-if-unmodified-since }}', 
@x-amz-copy-source-range='{{ x-amz-copy-source-range }}', 
@x-amz-server-side-encryption-customer-algorithm='{{ x-amz-server-side-encryption-customer-algorithm }}', 
@x-amz-server-side-encryption-customer-key='{{ x-amz-server-side-encryption-customer-key }}', 
@x-amz-server-side-encryption-customer-key-MD5='{{ x-amz-server-side-encryption-customer-key-MD5 }}', 
@x-amz-copy-source-server-side-encryption-customer-algorithm='{{ x-amz-copy-source-server-side-encryption-customer-algorithm }}', 
@x-amz-copy-source-server-side-encryption-customer-key='{{ x-amz-copy-source-server-side-encryption-customer-key }}', 
@x-amz-copy-source-server-side-encryption-customer-key-MD5='{{ x-amz-copy-source-server-side-encryption-customer-key-MD5 }}', 
@x-amz-request-payer='{{ x-amz-request-payer }}', 
@x-amz-expected-bucket-owner='{{ x-amz-expected-bucket-owner }}', 
@x-amz-source-expected-bucket-owner='{{ x-amz-source-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
