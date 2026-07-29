--- 
title: multipart_uploads
hide_title: false
hide_table_of_contents: false
keywords:
  - multipart_uploads
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

Creates, updates, deletes, gets or lists a <code>multipart_uploads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multipart_uploads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.multipart_uploads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_multipart_uploads"
    values={[
        { label: 'list_multipart_uploads', value: 'list_multipart_uploads' }
    ]}
>
<TabItem value="list_multipart_uploads">

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
    <td><CopyableCode code="initiated" /></td>
    <td><code>string</code></td>
    <td>Date and time at which the multipart upload was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="initiator" /></td>
    <td><code>string</code></td>
    <td>Identifies who initiated the multipart upload.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Key of the object for which the multipart upload was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Specifies the owner of the object that is part of the multipart upload. Directory buckets - The bucket owner is returned as the object owner for all the objects.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>The class of storage used to store the object. Directory buckets - Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_id" /></td>
    <td><code>string</code></td>
    <td>Upload ID that identifies the multipart upload.</td>
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
    <td><a href="#list_multipart_uploads"><CopyableCode code="list_multipart_uploads" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-encoding-type"><code>encoding-type</code></a>, <a href="#parameter-key-marker"><code>key-marker</code></a>, <a href="#parameter-max-uploads"><code>max-uploads</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-upload-id-marker"><code>upload-id-marker</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a></td>
    <td>This operation lists in-progress multipart uploads in a bucket. An in-progress multipart upload is a multipart upload that has been initiated by the CreateMultipartUpload request, but has not yet been completed or aborted. Directory buckets - If multipart uploads in a directory bucket are in progress, you can't delete the bucket until all the in-progress multipart uploads are aborted or completed. To delete these in-progress multipart uploads, use the ListMultipartUploads operation to list the in-progress multipart uploads in the bucket and use the AbortMultipartUpload operation to abort all the in-progress multipart uploads. The ListMultipartUploads operation returns a maximum of 1,000 multipart uploads in the response. The limit of 1,000 multipart uploads is also the default value. You can further limit the number of uploads in a response by specifying the max-uploads request parameter. If there are more than 1,000 multipart uploads that satisfy your ListMultipartUploads request, the response returns an IsTruncated element with the value of true, a NextKeyMarker element, and a NextUploadIdMarker element. To list the remaining multipart uploads, you need to make subsequent ListMultipartUploads requests. In these requests, include two query parameters: key-marker and upload-id-marker. Set the value of key-marker to the NextKeyMarker value from the previous response. Similarly, set the value of upload-id-marker to the NextUploadIdMarker value from the previous response. Directory buckets - The upload-id-marker element and the NextUploadIdMarker element aren't supported by directory buckets. To list the additional multipart uploads, you only need to set the value of key-marker to the NextKeyMarker value from the previous response. For more information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . Sorting of multipart uploads in response General purpose bucket - In the ListMultipartUploads response, the multipart uploads are sorted based on two criteria: Key-based sorting - Multipart uploads are initially sorted in ascending order based on their object keys. Time-based sorting - For uploads that share the same object key, they are further sorted in ascending order based on the upload initiation time. Among uploads with the same key, the one that was initiated first will appear before the ones that were initiated later. Directory bucket - In the ListMultipartUploads response, the multipart uploads aren't sorted lexicographically based on the object keys. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to ListMultipartUploads: CreateMultipartUpload UploadPart CompleteMultipartUpload ListParts AbortMultipartUpload You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#create_multipart_upload"><CopyableCode code="create_multipart_upload" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-Cache-Control"><code>Cache-Control</code></a>, <a href="#parameter-Content-Disposition"><code>Content-Disposition</code></a>, <a href="#parameter-Content-Encoding"><code>Content-Encoding</code></a>, <a href="#parameter-Content-Language"><code>Content-Language</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-Expires"><code>Expires</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-x-amz-meta-"><code>x-amz-meta-</code></a>, <a href="#parameter-x-amz-server-side-encryption"><code>x-amz-server-side-encryption</code></a>, <a href="#parameter-x-amz-storage-class"><code>x-amz-storage-class</code></a>, <a href="#parameter-x-amz-website-redirect-location"><code>x-amz-website-redirect-location</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-server-side-encryption-aws-kms-key-id"><code>x-amz-server-side-encryption-aws-kms-key-id</code></a>, <a href="#parameter-x-amz-server-side-encryption-context"><code>x-amz-server-side-encryption-context</code></a>, <a href="#parameter-x-amz-server-side-encryption-bucket-key-enabled"><code>x-amz-server-side-encryption-bucket-key-enabled</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-tagging"><code>x-amz-tagging</code></a>, <a href="#parameter-x-amz-object-lock-mode"><code>x-amz-object-lock-mode</code></a>, <a href="#parameter-x-amz-object-lock-retain-until-date"><code>x-amz-object-lock-retain-until-date</code></a>, <a href="#parameter-x-amz-object-lock-legal-hold"><code>x-amz-object-lock-legal-hold</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-checksum-algorithm"><code>x-amz-checksum-algorithm</code></a>, <a href="#parameter-x-amz-checksum-type"><code>x-amz-checksum-type</code></a></td>
    <td>End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). This action initiates a multipart upload and returns an upload ID. This upload ID is used to associate all of the parts in the specific multipart upload. You specify this upload ID in each of your subsequent upload part requests (see UploadPart). You also include this upload ID in the final request to either complete or abort the multipart upload request. For more information about multipart uploads, see Multipart Upload Overview in the Amazon S3 User Guide. After you initiate a multipart upload and upload one or more parts, to stop being charged for storing the uploaded parts, you must either complete or abort the multipart upload. Amazon S3 frees up the space used to store the parts and stops charging you for storing them only after you either complete or abort a multipart upload. If you have configured a lifecycle rule to abort incomplete multipart uploads, the created multipart upload must be completed within the number of days specified in the bucket lifecycle configuration. Otherwise, the incomplete multipart upload becomes eligible for an abort action and Amazon S3 aborts the multipart upload. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration. Directory buckets - S3 Lifecycle is not supported by directory buckets. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Request signing For request signing, multipart upload is just a series of regular requests. You initiate a multipart upload, send one or more requests to upload parts, and then complete the multipart upload process. You sign each request individually. There is nothing special about signing multipart upload requests. For more information about signing, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 User Guide. Permissions General purpose bucket permissions - To perform a multipart upload with encryption using an Key Management Service (KMS) KMS key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey actions on the key. The requester must also have permissions for the kms:GenerateDataKey action for the CreateMultipartUpload API. Then, the requester needs permissions for the kms:Decrypt action on the UploadPart and UploadPartCopy APIs. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see Multipart upload API and permissions and Protecting data using server-side encryption with Amazon Web Services KMS in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . Encryption General purpose buckets - Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. Amazon S3 automatically encrypts all new objects that are uploaded to an S3 bucket. When doing a multipart upload, if you don't specify encryption information in your request, the encryption setting of the uploaded parts is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the uploaded parts. When you perform a CreateMultipartUpload operation, if you want to use a different type of encryption setting for the uploaded parts, you can request that Amazon S3 encrypts the object with a different encryption key (such as an Amazon S3 managed key, a KMS key, or a customer-provided key). When the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If you choose to provide your own encryption key, the request headers you provide in UploadPart and UploadPartCopy requests must match the headers you used in the CreateMultipartUpload request. Use KMS keys (SSE-KMS) that include the Amazon Web Services managed key (aws/s3) and KMS customer managed keys stored in Key Management Service (KMS) – If you want Amazon Web Services to manage the keys used to encrypt data, specify the following headers in the request. x-amz-server-side-encryption x-amz-server-side-encryption-aws-kms-key-id x-amz-server-side-encryption-context If you specify x-amz-server-side-encryption:aws:kms, but don't provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3 key) in KMS to protect the data. To perform a multipart upload with encryption by using an Amazon Web Services KMS key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey* actions on the key. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see Multipart upload API and permissions and Protecting data using server-side encryption with Amazon Web Services KMS in the Amazon S3 User Guide. If your Identity and Access Management (IAM) user or role is in the same Amazon Web Services account as the KMS key, then you must have these permissions on the key policy. If your IAM user or role is in a different account from the key, then you must have the permissions on both the key policy and your IAM user or role. All GET and PUT requests for an object protected by KMS fail if you don't make them by using Secure Sockets Layer (SSL), Transport Layer Security (TLS), or Signature Version 4. For information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 User Guide. For more information about server-side encryption with KMS keys (SSE-KMS), see Protecting Data Using Server-Side Encryption with KMS keys in the Amazon S3 User Guide. Use customer-provided encryption keys (SSE-C) – If you want to manage your own encryption keys, provide all the following headers in the request. x-amz-server-side-encryption-customer-algorithm x-amz-server-side-encryption-customer-key x-amz-server-side-encryption-customer-key-MD5 For more information about server-side encryption with customer-provided encryption keys (SSE-C), see Protecting data using server-side encryption with customer-provided encryption keys (SSE-C) in the Amazon S3 User Guide. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket. For directory buckets, when you perform a CreateMultipartUpload operation and an UploadPartCopy operation, the request headers you provide in the CreateMultipartUpload request must match the default encryption configuration of the destination bucket. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to CreateMultipartUpload: UploadPart CompleteMultipartUpload AbortMultipartUpload ListParts ListMultipartUploads You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the bucket where the multipart upload is initiated and where the object is uploaded. Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format bucket-base-name--zone-id--x-s3 (for example, amzn-s3-demo-bucket--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide. Access points - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. Object Lambda access points are not supported by directory buckets. S3 on Outposts - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see What is S3 on Outposts? in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Object key for which the multipart upload is to be initiated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Cache-Control">
    <td><CopyableCode code="Cache-Control" /></td>
    <td><code>string</code></td>
    <td>Specifies caching behavior along the request/reply chain.</td>
</tr>
<tr id="parameter-Content-Disposition">
    <td><CopyableCode code="Content-Disposition" /></td>
    <td><code>string</code></td>
    <td>Specifies presentational information for the object.</td>
</tr>
<tr id="parameter-Content-Encoding">
    <td><CopyableCode code="Content-Encoding" /></td>
    <td><code>string</code></td>
    <td>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For directory buckets, only the aws-chunked value is supported in this header field.</td>
</tr>
<tr id="parameter-Content-Language">
    <td><CopyableCode code="Content-Language" /></td>
    <td><code>string</code></td>
    <td>The language that the content is in.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>A standard MIME type describing the format of the object data.</td>
</tr>
<tr id="parameter-Expires">
    <td><CopyableCode code="Expires" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the object is no longer cacheable.</td>
</tr>
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td>Character you use to group keys. All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, CommonPrefixes. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under CommonPrefixes result element are not returned elsewhere in the response. CommonPrefixes is filtered out from results if it is not lexicographically greater than the key-marker. Directory buckets - For directory buckets, / is the only supported delimiter.</td>
</tr>
<tr id="parameter-encoding-type">
    <td><CopyableCode code="encoding-type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-key-marker">
    <td><CopyableCode code="key-marker" /></td>
    <td><code>string</code></td>
    <td>Specifies the multipart upload after which listing should begin. General purpose buckets - For general purpose buckets, key-marker is an object key. Together with upload-id-marker, this parameter specifies the multipart upload after which listing should begin. If upload-id-marker is not specified, only the keys lexicographically greater than the specified key-marker will be included in the list. If upload-id-marker is specified, any multipart uploads for a key equal to the key-marker might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified upload-id-marker. Directory buckets - For directory buckets, key-marker is obfuscated and isn't a real object key. The upload-id-marker parameter isn't supported by directory buckets. To list the additional multipart uploads, you only need to set the value of key-marker to the NextKeyMarker value from the previous response. In the ListMultipartUploads response, the multipart uploads aren't sorted lexicographically based on the object keys.</td>
</tr>
<tr id="parameter-max-uploads">
    <td><CopyableCode code="max-uploads" /></td>
    <td><code>integer</code></td>
    <td>Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using prefix to make groups in the same way that you'd use a folder in a file system.) Directory buckets - For directory buckets, only prefixes that end in a delimiter (/) are supported.</td>
</tr>
<tr id="parameter-upload-id-marker">
    <td><CopyableCode code="upload-id-marker" /></td>
    <td><code>string</code></td>
    <td>Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified upload-id-marker. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-acl">
    <td><CopyableCode code="x-amz-acl" /></td>
    <td><code>string</code></td>
    <td>The canned ACL to apply to the object. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL in the Amazon S3 User Guide. By default, all objects are private. Only the owner has full access control. When uploading an object, you can grant access permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the new object. For more information, see Using ACLs. One way to grant the permissions using the request headers is to specify a canned ACL with the x-amz-acl request header. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-checksum-algorithm">
    <td><CopyableCode code="x-amz-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm that you want Amazon S3 to use to create the checksum for the object. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-checksum-type">
    <td><CopyableCode code="x-amz-checksum-type" /></td>
    <td><code>string</code></td>
    <td>Indicates the checksum type that you want Amazon S3 to use to calculate the object’s checksum value. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-grant-full-control">
    <td><CopyableCode code="x-amz-grant-full-control" /></td>
    <td><code>string</code></td>
    <td>Specify access permissions explicitly to give the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-grant-read">
    <td><CopyableCode code="x-amz-grant-read" /></td>
    <td><code>string</code></td>
    <td>Specify access permissions explicitly to allow grantee to read the object data and its metadata. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-grant-read-acp">
    <td><CopyableCode code="x-amz-grant-read-acp" /></td>
    <td><code>string</code></td>
    <td>Specify access permissions explicitly to allows grantee to read the object ACL. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-grant-write-acp">
    <td><CopyableCode code="x-amz-grant-write-acp" /></td>
    <td><code>string</code></td>
    <td>Specify access permissions explicitly to allows grantee to allow grantee to write the ACL for the applicable object. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr id="parameter-x-amz-meta-">
    <td><CopyableCode code="x-amz-meta-" /></td>
    <td><code>object</code></td>
    <td>A map of metadata to store with the object in S3.</td>
</tr>
<tr id="parameter-x-amz-object-lock-legal-hold">
    <td><CopyableCode code="x-amz-object-lock-legal-hold" /></td>
    <td><code>string</code></td>
    <td>Specifies whether you want to apply a legal hold to the uploaded object. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-mode">
    <td><CopyableCode code="x-amz-object-lock-mode" /></td>
    <td><code>string</code></td>
    <td>Specifies the Object Lock mode that you want to apply to the uploaded object. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-object-lock-retain-until-date">
    <td><CopyableCode code="x-amz-object-lock-retain-until-date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the date and time when you want the Object Lock to expire. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-server-side-encryption">
    <td><CopyableCode code="x-amz-server-side-encryption" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.</td>
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
    <td>Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.</td>
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
    <td>Specifies the 128-bit MD5 digest of the customer-provided encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-storage-class">
    <td><CopyableCode code="x-amz-storage-class" /></td>
    <td><code>string</code></td>
    <td>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide. Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.</td>
</tr>
<tr id="parameter-x-amz-tagging">
    <td><CopyableCode code="x-amz-tagging" /></td>
    <td><code>string</code></td>
    <td>The tag-set for the object. The tag-set must be encoded as URL Query parameters. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-website-redirect-location">
    <td><CopyableCode code="x-amz-website-redirect-location" /></td>
    <td><code>string</code></td>
    <td>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. This functionality is not supported for directory buckets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_multipart_uploads"
    values={[
        { label: 'list_multipart_uploads', value: 'list_multipart_uploads' }
    ]}
>
<TabItem value="list_multipart_uploads">

This operation lists in-progress multipart uploads in a bucket. An in-progress multipart upload is a multipart upload that has been initiated by the CreateMultipartUpload request, but has not yet been completed or aborted. Directory buckets - If multipart uploads in a directory bucket are in progress, you can't delete the bucket until all the in-progress multipart uploads are aborted or completed. To delete these in-progress multipart uploads, use the ListMultipartUploads operation to list the in-progress multipart uploads in the bucket and use the AbortMultipartUpload operation to abort all the in-progress multipart uploads. The ListMultipartUploads operation returns a maximum of 1,000 multipart uploads in the response. The limit of 1,000 multipart uploads is also the default value. You can further limit the number of uploads in a response by specifying the max-uploads request parameter. If there are more than 1,000 multipart uploads that satisfy your ListMultipartUploads request, the response returns an IsTruncated element with the value of true, a NextKeyMarker element, and a NextUploadIdMarker element. To list the remaining multipart uploads, you need to make subsequent ListMultipartUploads requests. In these requests, include two query parameters: key-marker and upload-id-marker. Set the value of key-marker to the NextKeyMarker value from the previous response. Similarly, set the value of upload-id-marker to the NextUploadIdMarker value from the previous response. Directory buckets - The upload-id-marker element and the NextUploadIdMarker element aren't supported by directory buckets. To list the additional multipart uploads, you only need to set the value of key-marker to the NextKeyMarker value from the previous response. For more information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . Sorting of multipart uploads in response General purpose bucket - In the ListMultipartUploads response, the multipart uploads are sorted based on two criteria: Key-based sorting - Multipart uploads are initially sorted in ascending order based on their object keys. Time-based sorting - For uploads that share the same object key, they are further sorted in ascending order based on the upload initiation time. Among uploads with the same key, the one that was initiated first will appear before the ones that were initiated later. Directory bucket - In the ListMultipartUploads response, the multipart uploads aren't sorted lexicographically based on the object keys. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to ListMultipartUploads: CreateMultipartUpload UploadPart CompleteMultipartUpload ListParts AbortMultipartUpload You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
checksum_algorithm,
checksum_type,
initiated,
initiator,
key,
owner,
storage_class,
upload_id
FROM aws.s3.multipart_uploads
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND delimiter = '{{ delimiter }}'
AND `encoding-type` = '{{ encoding-type }}'
AND `key-marker` = '{{ key-marker }}'
AND `max-uploads` = '{{ max-uploads }}'
AND prefix = '{{ prefix }}'
AND `upload-id-marker` = '{{ upload-id-marker }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_multipart_upload"
    values={[
        { label: 'create_multipart_upload', value: 'create_multipart_upload' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_multipart_upload">

End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an HTTP 405 (Method Not Allowed) error. This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo). This action initiates a multipart upload and returns an upload ID. This upload ID is used to associate all of the parts in the specific multipart upload. You specify this upload ID in each of your subsequent upload part requests (see UploadPart). You also include this upload ID in the final request to either complete or abort the multipart upload request. For more information about multipart uploads, see Multipart Upload Overview in the Amazon S3 User Guide. After you initiate a multipart upload and upload one or more parts, to stop being charged for storing the uploaded parts, you must either complete or abort the multipart upload. Amazon S3 frees up the space used to store the parts and stops charging you for storing them only after you either complete or abort a multipart upload. If you have configured a lifecycle rule to abort incomplete multipart uploads, the created multipart upload must be completed within the number of days specified in the bucket lifecycle configuration. Otherwise, the incomplete multipart upload becomes eligible for an abort action and Amazon S3 aborts the multipart upload. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration. Directory buckets - S3 Lifecycle is not supported by directory buckets. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Request signing For request signing, multipart upload is just a series of regular requests. You initiate a multipart upload, send one or more requests to upload parts, and then complete the multipart upload process. You sign each request individually. There is nothing special about signing multipart upload requests. For more information about signing, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 User Guide. Permissions General purpose bucket permissions - To perform a multipart upload with encryption using an Key Management Service (KMS) KMS key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey actions on the key. The requester must also have permissions for the kms:GenerateDataKey action for the CreateMultipartUpload API. Then, the requester needs permissions for the kms:Decrypt action on the UploadPart and UploadPartCopy APIs. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see Multipart upload API and permissions and Protecting data using server-side encryption with Amazon Web Services KMS in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . Encryption General purpose buckets - Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. Amazon S3 automatically encrypts all new objects that are uploaded to an S3 bucket. When doing a multipart upload, if you don't specify encryption information in your request, the encryption setting of the uploaded parts is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the uploaded parts. When you perform a CreateMultipartUpload operation, if you want to use a different type of encryption setting for the uploaded parts, you can request that Amazon S3 encrypts the object with a different encryption key (such as an Amazon S3 managed key, a KMS key, or a customer-provided key). When the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If you choose to provide your own encryption key, the request headers you provide in UploadPart and UploadPartCopy requests must match the headers you used in the CreateMultipartUpload request. Use KMS keys (SSE-KMS) that include the Amazon Web Services managed key (aws/s3) and KMS customer managed keys stored in Key Management Service (KMS) – If you want Amazon Web Services to manage the keys used to encrypt data, specify the following headers in the request. x-amz-server-side-encryption x-amz-server-side-encryption-aws-kms-key-id x-amz-server-side-encryption-context If you specify x-amz-server-side-encryption:aws:kms, but don't provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3 key) in KMS to protect the data. To perform a multipart upload with encryption by using an Amazon Web Services KMS key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey* actions on the key. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see Multipart upload API and permissions and Protecting data using server-side encryption with Amazon Web Services KMS in the Amazon S3 User Guide. If your Identity and Access Management (IAM) user or role is in the same Amazon Web Services account as the KMS key, then you must have these permissions on the key policy. If your IAM user or role is in a different account from the key, then you must have the permissions on both the key policy and your IAM user or role. All GET and PUT requests for an object protected by KMS fail if you don't make them by using Secure Sockets Layer (SSL), Transport Layer Security (TLS), or Signature Version 4. For information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 User Guide. For more information about server-side encryption with KMS keys (SSE-KMS), see Protecting Data Using Server-Side Encryption with KMS keys in the Amazon S3 User Guide. Use customer-provided encryption keys (SSE-C) – If you want to manage your own encryption keys, provide all the following headers in the request. x-amz-server-side-encryption-customer-algorithm x-amz-server-side-encryption-customer-key x-amz-server-side-encryption-customer-key-MD5 For more information about server-side encryption with customer-provided encryption keys (SSE-C), see Protecting data using server-side encryption with customer-provided encryption keys (SSE-C) in the Amazon S3 User Guide. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket. For directory buckets, when you perform a CreateMultipartUpload operation and an UploadPartCopy operation, the request headers you provide in the CreateMultipartUpload request must match the default encryption configuration of the destination bucket. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. The following operations are related to CreateMultipartUpload: UploadPart CompleteMultipartUpload AbortMultipartUpload ListParts ListMultipartUploads You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
INSERT INTO aws.s3.multipart_uploads (
bucket,
key,
region,
`x-amz-acl`,
`Cache-Control`,
`Content-Disposition`,
`Content-Encoding`,
`Content-Language`,
`Content-Type`,
Expires,
`x-amz-grant-full-control`,
`x-amz-grant-read`,
`x-amz-grant-read-acp`,
`x-amz-grant-write-acp`,
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
`x-amz-expected-bucket-owner`,
`x-amz-checksum-algorithm`,
`x-amz-checksum-type`
)
SELECT 
'{{ bucket }}',
'{{ key }}',
'{{ region }}',
'{{ x-amz-acl }}',
'{{ Cache-Control }}',
'{{ Content-Disposition }}',
'{{ Content-Encoding }}',
'{{ Content-Language }}',
'{{ Content-Type }}',
'{{ Expires }}',
'{{ x-amz-grant-full-control }}',
'{{ x-amz-grant-read }}',
'{{ x-amz-grant-read-acp }}',
'{{ x-amz-grant-write-acp }}',
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
'{{ x-amz-expected-bucket-owner }}',
'{{ x-amz-checksum-algorithm }}',
'{{ x-amz-checksum-type }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multipart_uploads
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the multipart_uploads resource.
    - name: key
      value: "{{ key }}"
      description: Required parameter for the multipart_uploads resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multipart_uploads resource.
    - name: x-amz-acl
      value: "{{ x-amz-acl }}"
      description: The canned ACL to apply to the object. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL in the Amazon S3 User Guide. By default, all objects are private. Only the owner has full access control. When uploading an object, you can grant access permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the new object. For more information, see Using ACLs. One way to grant the permissions using the request headers is to specify a canned ACL with the x-amz-acl request header. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: The canned ACL to apply to the object. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL in the Amazon S3 User Guide. By default, all objects are private. Only the owner has full access control. When uploading an object, you can grant access permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the new object. For more information, see Using ACLs. One way to grant the permissions using the request headers is to specify a canned ACL with the x-amz-acl request header. This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: Cache-Control
      value: "{{ Cache-Control }}"
      description: Specifies caching behavior along the request/reply chain.
      description: Specifies caching behavior along the request/reply chain.
    - name: Content-Disposition
      value: "{{ Content-Disposition }}"
      description: Specifies presentational information for the object.
      description: Specifies presentational information for the object.
    - name: Content-Encoding
      value: "{{ Content-Encoding }}"
      description: Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For directory buckets, only the aws-chunked value is supported in this header field.
      description: Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For directory buckets, only the aws-chunked value is supported in this header field.
    - name: Content-Language
      value: "{{ Content-Language }}"
      description: The language that the content is in.
      description: The language that the content is in.
    - name: Content-Type
      value: "{{ Content-Type }}"
      description: A standard MIME type describing the format of the object data.
      description: A standard MIME type describing the format of the object data.
    - name: Expires
      value: "{{ Expires }}"
      description: The date and time at which the object is no longer cacheable.
      description: The date and time at which the object is no longer cacheable.
    - name: x-amz-grant-full-control
      value: "{{ x-amz-grant-full-control }}"
      description: Specify access permissions explicitly to give the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: Specify access permissions explicitly to give the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: x-amz-grant-read
      value: "{{ x-amz-grant-read }}"
      description: Specify access permissions explicitly to allow grantee to read the object data and its metadata. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: Specify access permissions explicitly to allow grantee to read the object data and its metadata. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: x-amz-grant-read-acp
      value: "{{ x-amz-grant-read-acp }}"
      description: Specify access permissions explicitly to allows grantee to read the object ACL. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: Specify access permissions explicitly to allows grantee to read the object ACL. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: x-amz-grant-write-acp
      value: "{{ x-amz-grant-write-acp }}"
      description: Specify access permissions explicitly to allows grantee to allow grantee to write the ACL for the applicable object. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
      description: Specify access permissions explicitly to allows grantee to allow grantee to write the ACL for the applicable object. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following: id – if the value specified is the canonical user ID of an Amazon Web Services account uri – if you are granting permissions to a predefined group emailAddress – if the value specified is the email address of an Amazon Web Services account Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: US East (N. Virginia) US West (N. California) US West (Oregon) Asia Pacific (Singapore) Asia Pacific (Sydney) Asia Pacific (Tokyo) Europe (Ireland) South America (São Paulo) For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata: x-amz-grant-read: id="11112222333", id="444455556666" This functionality is not supported for directory buckets. This functionality is not supported for Amazon S3 on Outposts.
    - name: x-amz-meta-
      value: "{{ x-amz-meta- }}"
      description: A map of metadata to store with the object in S3.
      description: A map of metadata to store with the object in S3.
    - name: x-amz-server-side-encryption
      value: "{{ x-amz-server-side-encryption }}"
      description: The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
      description: The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx. Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
    - name: x-amz-storage-class
      value: "{{ x-amz-storage-class }}"
      description: By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide. Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.
      description: By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide. Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.
    - name: x-amz-website-redirect-location
      value: "{{ x-amz-website-redirect-location }}"
      description: If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. This functionality is not supported for directory buckets.
      description: If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. This functionality is not supported for directory buckets.
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
      description: Specifies the 128-bit MD5 digest of the customer-provided encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. This functionality is not supported for directory buckets.
      description: Specifies the 128-bit MD5 digest of the customer-provided encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. This functionality is not supported for directory buckets.
    - name: x-amz-server-side-encryption-aws-kms-key-id
      value: "{{ x-amz-server-side-encryption-aws-kms-key-id }}"
      description: Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID. General purpose buckets - If you specify x-amz-server-side-encryption with aws:kms or aws:kms:dsse, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify x-amz-server-side-encryption:aws:kms or x-amz-server-side-encryption:aws:kms:dsse, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3) to protect the data. Directory buckets - To encrypt data using SSE-KMS, it's recommended to specify the x-amz-server-side-encryption header to aws:kms. Then, the x-amz-server-side-encryption-aws-kms-key-id header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the x-amz-server-side-encryption-aws-kms-key-id header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported. Incorrect key specification results in an HTTP 400 Bad Request error.
      description: Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID. General purpose buckets - If you specify x-amz-server-side-encryption with aws:kms or aws:kms:dsse, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify x-amz-server-side-encryption:aws:kms or x-amz-server-side-encryption:aws:kms:dsse, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3) to protect the data. Directory buckets - To encrypt data using SSE-KMS, it's recommended to specify the x-amz-server-side-encryption header to aws:kms. Then, the x-amz-server-side-encryption-aws-kms-key-id header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the x-amz-server-side-encryption-aws-kms-key-id header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported. Incorrect key specification results in an HTTP 400 Bad Request error.
    - name: x-amz-server-side-encryption-context
      value: "{{ x-amz-server-side-encryption-context }}"
      description: Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
      description: Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
    - name: x-amz-server-side-encryption-bucket-key-enabled
      value: {{ x-amz-server-side-encryption-bucket-key-enabled }}
      description: Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key. Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
      description: Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key. Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
    - name: x-amz-request-payer
      value: "{{ x-amz-request-payer }}"
    - name: x-amz-tagging
      value: "{{ x-amz-tagging }}"
      description: The tag-set for the object. The tag-set must be encoded as URL Query parameters. This functionality is not supported for directory buckets.
      description: The tag-set for the object. The tag-set must be encoded as URL Query parameters. This functionality is not supported for directory buckets.
    - name: x-amz-object-lock-mode
      value: "{{ x-amz-object-lock-mode }}"
      description: Specifies the Object Lock mode that you want to apply to the uploaded object. This functionality is not supported for directory buckets.
      description: Specifies the Object Lock mode that you want to apply to the uploaded object. This functionality is not supported for directory buckets.
    - name: x-amz-object-lock-retain-until-date
      value: "{{ x-amz-object-lock-retain-until-date }}"
      description: Specifies the date and time when you want the Object Lock to expire. This functionality is not supported for directory buckets.
      description: Specifies the date and time when you want the Object Lock to expire. This functionality is not supported for directory buckets.
    - name: x-amz-object-lock-legal-hold
      value: "{{ x-amz-object-lock-legal-hold }}"
      description: Specifies whether you want to apply a legal hold to the uploaded object. This functionality is not supported for directory buckets.
      description: Specifies whether you want to apply a legal hold to the uploaded object. This functionality is not supported for directory buckets.
    - name: x-amz-expected-bucket-owner
      value: "{{ x-amz-expected-bucket-owner }}"
      description: The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).
      description: The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).
    - name: x-amz-checksum-algorithm
      value: "{{ x-amz-checksum-algorithm }}"
      description: Indicates the algorithm that you want Amazon S3 to use to create the checksum for the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: Indicates the algorithm that you want Amazon S3 to use to create the checksum for the object. For more information, see Checking object integrity in the Amazon S3 User Guide.
    - name: x-amz-checksum-type
      value: "{{ x-amz-checksum-type }}"
      description: Indicates the checksum type that you want Amazon S3 to use to calculate the object’s checksum value. For more information, see Checking object integrity in the Amazon S3 User Guide.
      description: Indicates the checksum type that you want Amazon S3 to use to calculate the object’s checksum value. For more information, see Checking object integrity in the Amazon S3 User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>
