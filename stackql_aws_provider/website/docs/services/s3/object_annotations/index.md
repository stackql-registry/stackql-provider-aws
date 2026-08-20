--- 
title: object_annotations
hide_title: false
hide_table_of_contents: false
keywords:
  - object_annotations
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

Creates, updates, deletes, gets or lists an <code>object_annotations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_annotations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.object_annotations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_object_annotation"
    values={[
        { label: 'get_object_annotation', value: 'get_object_annotation' },
        { label: 'list_object_annotations', value: 'list_object_annotations' }
    ]}
>
<TabItem value="get_object_annotation">

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
<TabItem value="list_object_annotations">

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
    <td><CopyableCode code="annotation_name" /></td>
    <td><code>string</code></td>
    <td>The name of the annotation.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum_algorithm" /></td>
    <td><code>string</code></td>
    <td>The checksum algorithm used for the annotation.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The entity tag of the annotation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string</code></td>
    <td>The date and time the annotation was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_status" /></td>
    <td><code>string</code></td>
    <td>The replication status of the annotation.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the annotation payload, in bytes.</td>
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
    <td><a href="#get_object_annotation"><CopyableCode code="get_object_annotation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-annotationName"><code>annotationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-checksum-mode"><code>x-amz-checksum-mode</code></a></td>
    <td>Retrieves an annotation from an Amazon S3 object. To use this operation, you must have the s3:GetObjectAnnotation permission. If checksum mode is enabled via the x-amz-checksum-mode header, Amazon S3 returns the stored checksum in the response headers for client-side validation. Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets). The following operations are related to GetObjectAnnotation: PutObjectAnnotation ListObjectAnnotations DeleteObjectAnnotation</td>
</tr>
<tr>
    <td><a href="#list_object_annotations"><CopyableCode code="list_object_annotations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-max-annotation-results"><code>max-annotation-results</code></a>, <a href="#parameter-annotation-prefix"><code>annotation-prefix</code></a>, <a href="#parameter-continuation-token"><code>continuation-token</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Lists the annotations attached to an Amazon S3 object. Results are paginated, with a maximum of 1,000 annotations per object. Use the AnnotationPrefix parameter to filter the results by name prefix. To use this operation, you must have the s3:ListObjectAnnotations permission. Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets). The following operations are related to ListObjectAnnotations: PutObjectAnnotation GetObjectAnnotation DeleteObjectAnnotation</td>
</tr>
<tr>
    <td><a href="#put_object_annotation"><CopyableCode code="put_object_annotation" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-annotationName"><code>annotationName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AnnotationPayload"><code>AnnotationPayload</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-object-if-match"><code>x-amz-object-if-match</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-checksum-crc32"><code>x-amz-checksum-crc32</code></a>, <a href="#parameter-x-amz-checksum-crc32c"><code>x-amz-checksum-crc32c</code></a>, <a href="#parameter-x-amz-checksum-crc64nvme"><code>x-amz-checksum-crc64nvme</code></a>, <a href="#parameter-x-amz-checksum-sha1"><code>x-amz-checksum-sha1</code></a>, <a href="#parameter-x-amz-checksum-sha256"><code>x-amz-checksum-sha256</code></a>, <a href="#parameter-x-amz-checksum-sha512"><code>x-amz-checksum-sha512</code></a>, <a href="#parameter-x-amz-checksum-md5"><code>x-amz-checksum-md5</code></a>, <a href="#parameter-x-amz-checksum-xxhash64"><code>x-amz-checksum-xxhash64</code></a>, <a href="#parameter-x-amz-checksum-xxhash3"><code>x-amz-checksum-xxhash3</code></a>, <a href="#parameter-x-amz-checksum-xxhash128"><code>x-amz-checksum-xxhash128</code></a>, <a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Attaches an annotation to an Amazon S3 object. An annotation is a named payload of 1 byte to 1 MiB that you can associate with a specific object or object version. Each object can have up to 1,000 annotations. For annotation naming rules and restrictions, see Annotation naming guidelines in the Amazon S3 User Guide. Annotations inherit the encryption of their parent object. For objects without server-side encryption, annotations are encrypted with SSE-S3 (the default for new objects). Objects encrypted with SSE-C cannot have annotations. To use this operation, you must have the s3:PutObjectAnnotation permission. If the bucket has Requester Pays enabled, you must include the x-amz-request-payer header. Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets). The following operations are related to PutObjectAnnotation: GetObjectAnnotation ListObjectAnnotations DeleteObjectAnnotation</td>
</tr>
<tr>
    <td><a href="#delete_object_annotation"><CopyableCode code="delete_object_annotation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-annotationName"><code>annotationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-object-if-match"><code>x-amz-object-if-match</code></a></td>
    <td>Deletes a specific annotation from an Amazon S3 object. Use the x-amz-object-if-match header to perform a conditional delete that only succeeds if the object's ETag matches the provided value, preventing race conditions during concurrent updates. Deleting an annotation is permanent. Annotations are not independently versioned, so there is no delete marker or way to recover a deleted annotation. To use this operation, you must have the s3:DeleteObjectAnnotation permission. If the object is protected by Object Lock in governance mode, you must also include the x-amz-bypass-governance-retention header. Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets). The following operations are related to DeleteObjectAnnotation: PutObjectAnnotation GetObjectAnnotation ListObjectAnnotations</td>
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
<tr id="parameter-annotationName">
    <td><CopyableCode code="annotationName" /></td>
    <td><code>string</code></td>
    <td>The name of the annotation to delete. Annotation names are UTF-8 encoded and cannot start with aws or s3 (case-insensitive). Length Constraints: Minimum length of 1. Maximum length of 512 bytes.</td>
</tr>
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket that contains the object.</td>
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
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded MD5 digest of the message.</td>
</tr>
<tr id="parameter-annotation-prefix">
    <td><CopyableCode code="annotation-prefix" /></td>
    <td><code>string</code></td>
    <td>Filter results to annotations whose name begins with the specified prefix.</td>
</tr>
<tr id="parameter-continuation-token">
    <td><CopyableCode code="continuation-token" /></td>
    <td><code>string</code></td>
    <td>Continuation token returned by a previous request to retrieve the next page.</td>
</tr>
<tr id="parameter-max-annotation-results">
    <td><CopyableCode code="max-annotation-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of annotations to return in the response. Maximum is 1,000.</td>
</tr>
<tr id="parameter-versionId">
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The version ID of the object.</td>
</tr>
<tr id="parameter-x-amz-checksum-crc32">
    <td><CopyableCode code="x-amz-checksum-crc32" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded CRC32 checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-crc32c">
    <td><CopyableCode code="x-amz-checksum-crc32c" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded CRC32C checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-crc64nvme">
    <td><CopyableCode code="x-amz-checksum-crc64nvme" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded CRC64NVME checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-md5">
    <td><CopyableCode code="x-amz-checksum-md5" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded MD5 checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-mode">
    <td><CopyableCode code="x-amz-checksum-mode" /></td>
    <td><code>string</code></td>
    <td>Set to ENABLED to validate the checksum of the annotation payload on retrieval.</td>
</tr>
<tr id="parameter-x-amz-checksum-sha1">
    <td><CopyableCode code="x-amz-checksum-sha1" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded SHA1 checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-sha256">
    <td><CopyableCode code="x-amz-checksum-sha256" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded SHA256 checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-sha512">
    <td><CopyableCode code="x-amz-checksum-sha512" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded SHA512 checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-xxhash128">
    <td><CopyableCode code="x-amz-checksum-xxhash128" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded XXHASH128 checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-xxhash3">
    <td><CopyableCode code="x-amz-checksum-xxhash3" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded XXHASH3 checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-checksum-xxhash64">
    <td><CopyableCode code="x-amz-checksum-xxhash64" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded XXHASH64 checksum of the annotation payload.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner.</td>
</tr>
<tr id="parameter-x-amz-object-if-match">
    <td><CopyableCode code="x-amz-object-if-match" /></td>
    <td><code>string</code></td>
    <td>If specified, the operation only succeeds if the object's ETag matches the provided value.</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>The checksum algorithm to use. Supported values: CRC32, CRC32C, CRC64NVME, SHA1, SHA256, SHA512, MD5, XXHASH64, XXHASH3, XXHASH128.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_object_annotation"
    values={[
        { label: 'get_object_annotation', value: 'get_object_annotation' },
        { label: 'list_object_annotations', value: 'list_object_annotations' }
    ]}
>
<TabItem value="get_object_annotation">

Retrieves an annotation from an Amazon S3 object. To use this operation, you must have the s3:GetObjectAnnotation permission. If checksum mode is enabled via the x-amz-checksum-mode header, Amazon S3 returns the stored checksum in the response headers for client-side validation. Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets). The following operations are related to GetObjectAnnotation: PutObjectAnnotation ListObjectAnnotations DeleteObjectAnnotation

```sql
SELECT
line_items
FROM aws.s3.object_annotations
WHERE bucket = '{{ bucket }}' -- required
AND key = '{{ key }}' -- required
AND annotationName = '{{ annotationName }}' -- required
AND region = '{{ region }}' -- required
AND versionId = '{{ versionId }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-checksum-mode` = '{{ x-amz-checksum-mode }}'
;
```
</TabItem>
<TabItem value="list_object_annotations">

Lists the annotations attached to an Amazon S3 object. Results are paginated, with a maximum of 1,000 annotations per object. Use the AnnotationPrefix parameter to filter the results by name prefix. To use this operation, you must have the s3:ListObjectAnnotations permission. Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets). The following operations are related to ListObjectAnnotations: PutObjectAnnotation GetObjectAnnotation DeleteObjectAnnotation

```sql
SELECT
annotation_name,
checksum_algorithm,
e_tag,
last_modified,
replication_status,
size
FROM aws.s3.object_annotations
WHERE bucket = '{{ bucket }}' -- required
AND key = '{{ key }}' -- required
AND region = '{{ region }}' -- required
AND versionId = '{{ versionId }}'
AND `max-annotation-results` = '{{ max-annotation-results }}'
AND `annotation-prefix` = '{{ annotation-prefix }}'
AND `continuation-token` = '{{ continuation-token }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_object_annotation"
    values={[
        { label: 'put_object_annotation', value: 'put_object_annotation' }
    ]}
>
<TabItem value="put_object_annotation">

Attaches an annotation to an Amazon S3 object. An annotation is a named payload of 1 byte to 1 MiB that you can associate with a specific object or object version. Each object can have up to 1,000 annotations. For annotation naming rules and restrictions, see Annotation naming guidelines in the Amazon S3 User Guide. Annotations inherit the encryption of their parent object. For objects without server-side encryption, annotations are encrypted with SSE-S3 (the default for new objects). Objects encrypted with SSE-C cannot have annotations. To use this operation, you must have the s3:PutObjectAnnotation permission. If the bucket has Requester Pays enabled, you must include the x-amz-request-payer header. Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets). The following operations are related to PutObjectAnnotation: GetObjectAnnotation ListObjectAnnotations DeleteObjectAnnotation

```sql
REPLACE aws.s3.object_annotations
SET 
AnnotationPayload = '{{ AnnotationPayload }}'
WHERE 
bucket = '{{ bucket }}' --required
AND key = '{{ key }}' --required
AND annotationName = '{{ annotationName }}' --required
AND region = '{{ region }}' --required
AND AnnotationPayload = '{{ AnnotationPayload }}' --required
AND versionId = '{{ versionId}}'
AND `x-amz-object-if-match` = '{{ x-amz-object-if-match}}'
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
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_object_annotation"
    values={[
        { label: 'delete_object_annotation', value: 'delete_object_annotation' }
    ]}
>
<TabItem value="delete_object_annotation">

Deletes a specific annotation from an Amazon S3 object. Use the x-amz-object-if-match header to perform a conditional delete that only succeeds if the object's ETag matches the provided value, preventing race conditions during concurrent updates. Deleting an annotation is permanent. Annotations are not independently versioned, so there is no delete marker or way to recover a deleted annotation. To use this operation, you must have the s3:DeleteObjectAnnotation permission. If the object is protected by Object Lock in governance mode, you must also include the x-amz-bypass-governance-retention header. Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets). The following operations are related to DeleteObjectAnnotation: PutObjectAnnotation GetObjectAnnotation ListObjectAnnotations

```sql
DELETE FROM aws.s3.object_annotations
WHERE bucket = '{{ bucket }}' --required
AND key = '{{ key }}' --required
AND annotationName = '{{ annotationName }}' --required
AND region = '{{ region }}' --required
AND versionId = '{{ versionId }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-object-if-match` = '{{ x-amz-object-if-match }}'
;
```
</TabItem>
</Tabs>
