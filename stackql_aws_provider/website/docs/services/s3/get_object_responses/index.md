--- 
title: get_object_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - get_object_responses
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

Creates, updates, deletes, gets or lists a <code>get_object_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="get_object_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.get_object_responses" /></td></tr>
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
    <td><a href="#write_get_object_response"><CopyableCode code="write_get_object_response" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-request-route"><code>x-amz-request-route</code></a>, <a href="#parameter-x-amz-request-token"><code>x-amz-request-token</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-fwd-status"><code>x-amz-fwd-status</code></a>, <a href="#parameter-x-amz-fwd-error-code"><code>x-amz-fwd-error-code</code></a>, <a href="#parameter-x-amz-fwd-error-message"><code>x-amz-fwd-error-message</code></a>, <a href="#parameter-x-amz-fwd-header-accept-ranges"><code>x-amz-fwd-header-accept-ranges</code></a>, <a href="#parameter-x-amz-fwd-header-Cache-Control"><code>x-amz-fwd-header-Cache-Control</code></a>, <a href="#parameter-x-amz-fwd-header-Content-Disposition"><code>x-amz-fwd-header-Content-Disposition</code></a>, <a href="#parameter-x-amz-fwd-header-Content-Encoding"><code>x-amz-fwd-header-Content-Encoding</code></a>, <a href="#parameter-x-amz-fwd-header-Content-Language"><code>x-amz-fwd-header-Content-Language</code></a>, <a href="#parameter-Content-Length"><code>Content-Length</code></a>, <a href="#parameter-x-amz-fwd-header-Content-Range"><code>x-amz-fwd-header-Content-Range</code></a>, <a href="#parameter-x-amz-fwd-header-Content-Type"><code>x-amz-fwd-header-Content-Type</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-crc32"><code>x-amz-fwd-header-x-amz-checksum-crc32</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-crc32c"><code>x-amz-fwd-header-x-amz-checksum-crc32c</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-crc64nvme"><code>x-amz-fwd-header-x-amz-checksum-crc64nvme</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-sha1"><code>x-amz-fwd-header-x-amz-checksum-sha1</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-sha256"><code>x-amz-fwd-header-x-amz-checksum-sha256</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-sha512"><code>x-amz-fwd-header-x-amz-checksum-sha512</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-md5"><code>x-amz-fwd-header-x-amz-checksum-md5</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-xxhash64"><code>x-amz-fwd-header-x-amz-checksum-xxhash64</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-xxhash3"><code>x-amz-fwd-header-x-amz-checksum-xxhash3</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-checksum-xxhash128"><code>x-amz-fwd-header-x-amz-checksum-xxhash128</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-delete-marker"><code>x-amz-fwd-header-x-amz-delete-marker</code></a>, <a href="#parameter-x-amz-fwd-header-ETag"><code>x-amz-fwd-header-ETag</code></a>, <a href="#parameter-x-amz-fwd-header-Expires"><code>x-amz-fwd-header-Expires</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-expiration"><code>x-amz-fwd-header-x-amz-expiration</code></a>, <a href="#parameter-x-amz-fwd-header-Last-Modified"><code>x-amz-fwd-header-Last-Modified</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-missing-meta"><code>x-amz-fwd-header-x-amz-missing-meta</code></a>, <a href="#parameter-x-amz-meta-"><code>x-amz-meta-</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-object-lock-mode"><code>x-amz-fwd-header-x-amz-object-lock-mode</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-object-lock-legal-hold"><code>x-amz-fwd-header-x-amz-object-lock-legal-hold</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-object-lock-retain-until-date"><code>x-amz-fwd-header-x-amz-object-lock-retain-until-date</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-mp-parts-count"><code>x-amz-fwd-header-x-amz-mp-parts-count</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-replication-status"><code>x-amz-fwd-header-x-amz-replication-status</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-request-charged"><code>x-amz-fwd-header-x-amz-request-charged</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-restore"><code>x-amz-fwd-header-x-amz-restore</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-server-side-encryption"><code>x-amz-fwd-header-x-amz-server-side-encryption</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id"><code>x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-storage-class"><code>x-amz-fwd-header-x-amz-storage-class</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-tagging-count"><code>x-amz-fwd-header-x-amz-tagging-count</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-version-id"><code>x-amz-fwd-header-x-amz-version-id</code></a>, <a href="#parameter-x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled"><code>x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled</code></a></td>
    <td>This operation is not supported for directory buckets. Passes transformed objects to a GetObject operation when using Object Lambda access points. For information about Object Lambda access points, see Transforming objects with Object Lambda access points in the Amazon S3 User Guide. This operation supports metadata that can be returned by GetObject, in addition to RequestRoute, RequestToken, StatusCode, ErrorCode, and ErrorMessage. The GetObject response metadata is supported so that the WriteGetObjectResponse caller, typically an Lambda function, can provide the same metadata when it internally invokes GetObject. When WriteGetObjectResponse is called by a customer-owned Lambda function, the metadata returned to the end user GetObject call might differ from what Amazon S3 would normally return. You can include any number of metadata headers. When including a metadata header, it should be prefaced with x-amz-meta. For example, x-amz-meta-my-custom-header: MyCustomValue. The primary use case for this is to forward GetObject metadata. Amazon Web Services provides some prebuilt Lambda functions that you can use with S3 Object Lambda to detect and redact personally identifiable information (PII) and decompress S3 objects. These Lambda functions are available in the Amazon Web Services Serverless Application Repository, and can be selected through the Amazon Web Services Management Console when you create your Object Lambda access point. Example 1: PII Access Control - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically detects personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket. Example 2: PII Redaction - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically redacts personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket. Example 3: Decompression - The Lambda function S3ObjectLambdaDecompression, is equipped to decompress objects stored in S3 in one of six compressed file formats including bzip2, gzip, snappy, zlib, zstandard and ZIP. For information on how to view and use these functions, see Using Amazon Web Services built Lambda functions in the Amazon S3 User Guide. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-request-route">
    <td><CopyableCode code="x-amz-request-route" /></td>
    <td><code>string</code></td>
    <td>Route prefix to the HTTP URL generated.</td>
</tr>
<tr id="parameter-x-amz-request-token">
    <td><CopyableCode code="x-amz-request-token" /></td>
    <td><code>string</code></td>
    <td>A single use encrypted token that maps WriteGetObjectResponse to the end user GetObject request.</td>
</tr>
<tr id="parameter-Content-Length">
    <td><CopyableCode code="Content-Length" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the content body in bytes.</td>
</tr>
<tr id="parameter-x-amz-fwd-error-code">
    <td><CopyableCode code="x-amz-fwd-error-code" /></td>
    <td><code>string</code></td>
    <td>A string that uniquely identifies an error condition. Returned in the <code>&lt;Code&gt;</code> tag of the error XML response for a corresponding GetObject call. Cannot be used with a successful StatusCode header or when the transformed object is provided in the body. All error codes from S3 are sentence-cased. The regular expression (regex) value is "^&#91;A-Z&#93;&#91;a-zA-Z&#93;+$".</td>
</tr>
<tr id="parameter-x-amz-fwd-error-message">
    <td><CopyableCode code="x-amz-fwd-error-message" /></td>
    <td><code>string</code></td>
    <td>Contains a generic description of the error condition. Returned in the <code>&lt;Message&gt;</code> tag of the error XML response for a corresponding GetObject call. Cannot be used with a successful StatusCode header or when the transformed object is provided in body.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-Cache-Control">
    <td><CopyableCode code="x-amz-fwd-header-Cache-Control" /></td>
    <td><code>string</code></td>
    <td>Specifies caching behavior along the request/reply chain.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-Content-Disposition">
    <td><CopyableCode code="x-amz-fwd-header-Content-Disposition" /></td>
    <td><code>string</code></td>
    <td>Specifies presentational information for the object.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-Content-Encoding">
    <td><CopyableCode code="x-amz-fwd-header-Content-Encoding" /></td>
    <td><code>string</code></td>
    <td>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-Content-Language">
    <td><CopyableCode code="x-amz-fwd-header-Content-Language" /></td>
    <td><code>string</code></td>
    <td>The language the content is in.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-Content-Range">
    <td><CopyableCode code="x-amz-fwd-header-Content-Range" /></td>
    <td><code>string</code></td>
    <td>The portion of the object returned in the response.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-Content-Type">
    <td><CopyableCode code="x-amz-fwd-header-Content-Type" /></td>
    <td><code>string</code></td>
    <td>A standard MIME type describing the format of the object data.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-ETag">
    <td><CopyableCode code="x-amz-fwd-header-ETag" /></td>
    <td><code>string</code></td>
    <td>An opaque identifier assigned by a web server to a specific version of a resource found at a URL.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-Expires">
    <td><CopyableCode code="x-amz-fwd-header-Expires" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the object is no longer cacheable.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-Last-Modified">
    <td><CopyableCode code="x-amz-fwd-header-Last-Modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the object was last modified.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-accept-ranges">
    <td><CopyableCode code="x-amz-fwd-header-accept-ranges" /></td>
    <td><code>string</code></td>
    <td>Indicates that a range of bytes was specified.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-crc32">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-crc32" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the Base64 encoded, 32-bit CRC32 checksum of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original GetObject request required checksum validation. For more information about checksums, see Checking object integrity in the Amazon S3 User Guide. Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-crc32c">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-crc32c" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the Base64 encoded, 32-bit CRC32C checksum of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original GetObject request required checksum validation. For more information about checksums, see Checking object integrity in the Amazon S3 User Guide. Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-crc64nvme">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-crc64nvme" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit CRC64NVME checksum of the part. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-md5">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-md5" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit MD5 digest of the part. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-sha1">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-sha1" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the Base64 encoded, 160-bit SHA1 digest of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original GetObject request required checksum validation. For more information about checksums, see Checking object integrity in the Amazon S3 User Guide. Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-sha256">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-sha256" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the Base64 encoded, 256-bit SHA256 digest of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original GetObject request required checksum validation. For more information about checksums, see Checking object integrity in the Amazon S3 User Guide. Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-sha512">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-sha512" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 512-bit SHA512 digest of the part. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-xxhash128">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-xxhash128" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit XXHASH128 checksum of the part. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-xxhash3">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-xxhash3" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit XXHASH3 checksum of the part. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-checksum-xxhash64">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-checksum-xxhash64" /></td>
    <td><code>string</code></td>
    <td>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit XXHASH64 checksum of the part. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-delete-marker">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-delete-marker" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether an object stored in Amazon S3 is (true) or is not (false) a delete marker. To learn more about delete markers, see Working with delete markers.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-expiration">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-expiration" /></td>
    <td><code>string</code></td>
    <td>If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key-value pairs that provide the object expiration information. The value of the rule-id is URL-encoded.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-missing-meta">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-missing-meta" /></td>
    <td><code>integer</code></td>
    <td>Set to the number of metadata entries not returned in x-amz-meta headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-mp-parts-count">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-mp-parts-count" /></td>
    <td><code>integer</code></td>
    <td>The count of parts this object has.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-object-lock-legal-hold">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-object-lock-legal-hold" /></td>
    <td><code>string</code></td>
    <td>Indicates whether an object stored in Amazon S3 has an active legal hold.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-object-lock-mode">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-object-lock-mode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether an object stored in Amazon S3 has Object Lock enabled. For more information about S3 Object Lock, see Object Lock.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-object-lock-retain-until-date">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-object-lock-retain-until-date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when Object Lock is configured to expire.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-replication-status">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-replication-status" /></td>
    <td><code>string</code></td>
    <td>Indicates if request involves bucket that is either a source or destination in a Replication rule. For more information about S3 Replication, see Replication.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-request-charged">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-request-charged" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-restore">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-restore" /></td>
    <td><code>string</code></td>
    <td>Provides information about object restoration operation and expiration time of the restored object copy.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-server-side-encryption">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-server-side-encryption" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption algorithm used when storing requested object in Amazon S3 or Amazon FSx. When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id" /></td>
    <td><code>string</code></td>
    <td>If present, specifies the ID (Key ID, Key ARN, or Key Alias) of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for stored in Amazon S3 object.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with Amazon Web Services KMS (SSE-KMS).</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm" /></td>
    <td><code>string</code></td>
    <td>Encryption algorithm used if server-side encryption with a customer-provided encryption key was specified for object stored in Amazon S3.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5" /></td>
    <td><code>string</code></td>
    <td>128-bit MD5 digest of customer-provided encryption key used in Amazon S3 to encrypt data stored in S3. For more information, see Protecting data using server-side encryption with customer-provided encryption keys (SSE-C).</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-storage-class">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-storage-class" /></td>
    <td><code>string</code></td>
    <td>Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects. For more information, see Storage Classes.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-tagging-count">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-tagging-count" /></td>
    <td><code>integer</code></td>
    <td>The number of tags, if any, on the object.</td>
</tr>
<tr id="parameter-x-amz-fwd-header-x-amz-version-id">
    <td><CopyableCode code="x-amz-fwd-header-x-amz-version-id" /></td>
    <td><code>string</code></td>
    <td>An ID used to reference a specific version of the object.</td>
</tr>
<tr id="parameter-x-amz-fwd-status">
    <td><CopyableCode code="x-amz-fwd-status" /></td>
    <td><code>integer</code></td>
    <td>The integer status code for an HTTP response of a corresponding GetObject request. The following is a list of status codes. 200 - OK 206 - Partial Content 304 - Not Modified 400 - Bad Request 401 - Unauthorized 403 - Forbidden 404 - Not Found 405 - Method Not Allowed 409 - Conflict 411 - Length Required 412 - Precondition Failed 416 - Range Not Satisfiable 500 - Internal Server Error 503 - Service Unavailable</td>
</tr>
<tr id="parameter-x-amz-meta-">
    <td><CopyableCode code="x-amz-meta-" /></td>
    <td><code>object</code></td>
    <td>A map of metadata to store with the object in S3.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="write_get_object_response"
    values={[
        { label: 'write_get_object_response', value: 'write_get_object_response' }
    ]}
>
<TabItem value="write_get_object_response">

This operation is not supported for directory buckets. Passes transformed objects to a GetObject operation when using Object Lambda access points. For information about Object Lambda access points, see Transforming objects with Object Lambda access points in the Amazon S3 User Guide. This operation supports metadata that can be returned by GetObject, in addition to RequestRoute, RequestToken, StatusCode, ErrorCode, and ErrorMessage. The GetObject response metadata is supported so that the WriteGetObjectResponse caller, typically an Lambda function, can provide the same metadata when it internally invokes GetObject. When WriteGetObjectResponse is called by a customer-owned Lambda function, the metadata returned to the end user GetObject call might differ from what Amazon S3 would normally return. You can include any number of metadata headers. When including a metadata header, it should be prefaced with x-amz-meta. For example, x-amz-meta-my-custom-header: MyCustomValue. The primary use case for this is to forward GetObject metadata. Amazon Web Services provides some prebuilt Lambda functions that you can use with S3 Object Lambda to detect and redact personally identifiable information (PII) and decompress S3 objects. These Lambda functions are available in the Amazon Web Services Serverless Application Repository, and can be selected through the Amazon Web Services Management Console when you create your Object Lambda access point. Example 1: PII Access Control - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically detects personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket. Example 2: PII Redaction - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically redacts personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket. Example 3: Decompression - The Lambda function S3ObjectLambdaDecompression, is equipped to decompress objects stored in S3 in one of six compressed file formats including bzip2, gzip, snappy, zlib, zstandard and ZIP. For information on how to view and use these functions, see Using Amazon Web Services built Lambda functions in the Amazon S3 User Guide. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
EXEC aws.s3.get_object_responses.write_get_object_response 
@x-amz-request-route='{{ x-amz-request-route }}' --required, 
@x-amz-request-token='{{ x-amz-request-token }}' --required, 
@region='{{ region }}' --required, 
@x-amz-fwd-status='{{ x-amz-fwd-status }}', 
@x-amz-fwd-error-code='{{ x-amz-fwd-error-code }}', 
@x-amz-fwd-error-message='{{ x-amz-fwd-error-message }}', 
@x-amz-fwd-header-accept-ranges='{{ x-amz-fwd-header-accept-ranges }}', 
@x-amz-fwd-header-Cache-Control='{{ x-amz-fwd-header-Cache-Control }}', 
@x-amz-fwd-header-Content-Disposition='{{ x-amz-fwd-header-Content-Disposition }}', 
@x-amz-fwd-header-Content-Encoding='{{ x-amz-fwd-header-Content-Encoding }}', 
@x-amz-fwd-header-Content-Language='{{ x-amz-fwd-header-Content-Language }}', 
@Content-Length='{{ Content-Length }}', 
@x-amz-fwd-header-Content-Range='{{ x-amz-fwd-header-Content-Range }}', 
@x-amz-fwd-header-Content-Type='{{ x-amz-fwd-header-Content-Type }}', 
@x-amz-fwd-header-x-amz-checksum-crc32='{{ x-amz-fwd-header-x-amz-checksum-crc32 }}', 
@x-amz-fwd-header-x-amz-checksum-crc32c='{{ x-amz-fwd-header-x-amz-checksum-crc32c }}', 
@x-amz-fwd-header-x-amz-checksum-crc64nvme='{{ x-amz-fwd-header-x-amz-checksum-crc64nvme }}', 
@x-amz-fwd-header-x-amz-checksum-sha1='{{ x-amz-fwd-header-x-amz-checksum-sha1 }}', 
@x-amz-fwd-header-x-amz-checksum-sha256='{{ x-amz-fwd-header-x-amz-checksum-sha256 }}', 
@x-amz-fwd-header-x-amz-checksum-sha512='{{ x-amz-fwd-header-x-amz-checksum-sha512 }}', 
@x-amz-fwd-header-x-amz-checksum-md5='{{ x-amz-fwd-header-x-amz-checksum-md5 }}', 
@x-amz-fwd-header-x-amz-checksum-xxhash64='{{ x-amz-fwd-header-x-amz-checksum-xxhash64 }}', 
@x-amz-fwd-header-x-amz-checksum-xxhash3='{{ x-amz-fwd-header-x-amz-checksum-xxhash3 }}', 
@x-amz-fwd-header-x-amz-checksum-xxhash128='{{ x-amz-fwd-header-x-amz-checksum-xxhash128 }}', 
@x-amz-fwd-header-x-amz-delete-marker={{ x-amz-fwd-header-x-amz-delete-marker }}, 
@x-amz-fwd-header-ETag='{{ x-amz-fwd-header-ETag }}', 
@x-amz-fwd-header-Expires='{{ x-amz-fwd-header-Expires }}', 
@x-amz-fwd-header-x-amz-expiration='{{ x-amz-fwd-header-x-amz-expiration }}', 
@x-amz-fwd-header-Last-Modified='{{ x-amz-fwd-header-Last-Modified }}', 
@x-amz-fwd-header-x-amz-missing-meta='{{ x-amz-fwd-header-x-amz-missing-meta }}', 
@x-amz-meta-='{{ x-amz-meta- }}', 
@x-amz-fwd-header-x-amz-object-lock-mode='{{ x-amz-fwd-header-x-amz-object-lock-mode }}', 
@x-amz-fwd-header-x-amz-object-lock-legal-hold='{{ x-amz-fwd-header-x-amz-object-lock-legal-hold }}', 
@x-amz-fwd-header-x-amz-object-lock-retain-until-date='{{ x-amz-fwd-header-x-amz-object-lock-retain-until-date }}', 
@x-amz-fwd-header-x-amz-mp-parts-count='{{ x-amz-fwd-header-x-amz-mp-parts-count }}', 
@x-amz-fwd-header-x-amz-replication-status='{{ x-amz-fwd-header-x-amz-replication-status }}', 
@x-amz-fwd-header-x-amz-request-charged='{{ x-amz-fwd-header-x-amz-request-charged }}', 
@x-amz-fwd-header-x-amz-restore='{{ x-amz-fwd-header-x-amz-restore }}', 
@x-amz-fwd-header-x-amz-server-side-encryption='{{ x-amz-fwd-header-x-amz-server-side-encryption }}', 
@x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm='{{ x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm }}', 
@x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id='{{ x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id }}', 
@x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5='{{ x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5 }}', 
@x-amz-fwd-header-x-amz-storage-class='{{ x-amz-fwd-header-x-amz-storage-class }}', 
@x-amz-fwd-header-x-amz-tagging-count='{{ x-amz-fwd-header-x-amz-tagging-count }}', 
@x-amz-fwd-header-x-amz-version-id='{{ x-amz-fwd-header-x-amz-version-id }}', 
@x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled={{ x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled }} 
@@json=
'{
"Body": "{{ Body }}"
}'
;
```
</TabItem>
</Tabs>
