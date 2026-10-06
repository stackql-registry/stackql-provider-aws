--- 
title: object_content
hide_title: false
hide_table_of_contents: false
keywords:
  - object_content
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

Creates, updates, deletes, gets or lists an <code>object_content</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_content" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.object_content" /></td></tr>
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
    <td><a href="#select_object_content"><CopyableCode code="select_object_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Expression"><code>Expression</code></a>, <a href="#parameter-ExpressionType"><code>ExpressionType</code></a>, <a href="#parameter-InputSerialization"><code>InputSerialization</code></a>, <a href="#parameter-OutputSerialization"><code>OutputSerialization</code></a></td>
    <td><a href="#parameter-x-amz-server-side-encryption-customer-algorithm"><code>x-amz-server-side-encryption-customer-algorithm</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key"><code>x-amz-server-side-encryption-customer-key</code></a>, <a href="#parameter-x-amz-server-side-encryption-customer-key-MD5"><code>x-amz-server-side-encryption-customer-key-MD5</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. This action filters the contents of an Amazon S3 object based on a simple structured query language (SQL) statement. In the request, along with the SQL expression, you must also specify a data serialization format (JSON, CSV, or Apache Parquet) of the object. Amazon S3 uses this format to parse object data into records, and returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. This functionality is not supported for Amazon S3 on Outposts. For more information about Amazon S3 Select, see Selecting Content from Objects and SELECT Command in the Amazon S3 User Guide. Permissions You must have the s3:GetObject permission for this operation. Amazon S3 Select does not support anonymous access. For more information about permissions, see Specifying Permissions in a Policy in the Amazon S3 User Guide. Object Data Formats You can use Amazon S3 Select to query objects that have the following format properties: CSV, JSON, and Parquet - Objects must be in CSV, JSON, or Parquet format. UTF-8 - UTF-8 is the only encoding type Amazon S3 Select supports. GZIP or BZIP2 - CSV and JSON files can be compressed using GZIP or BZIP2. GZIP and BZIP2 are the only compression formats that Amazon S3 Select supports for CSV and JSON files. Amazon S3 Select supports columnar compression for Parquet using GZIP or Snappy. Amazon S3 Select does not support whole-object compression for Parquet objects. Server-side encryption - Amazon S3 Select supports querying objects that are protected with server-side encryption. For objects that are encrypted with customer-provided encryption keys (SSE-C), you must use HTTPS, and you must use the headers that are documented in the GetObject. For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide. For objects that are encrypted with Amazon S3 managed keys (SSE-S3) and Amazon Web Services KMS keys (SSE-KMS), server-side encryption is handled transparently, so you don't need to specify anything. For more information about server-side encryption, including SSE-S3 and SSE-KMS, see Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide. Working with the Response Body Given the response size is unknown, Amazon S3 Select streams the response as a series of messages and includes a Transfer-Encoding header with chunked as its value in the response. For more information, see Appendix: SelectObjectContent Response. GetObject Support The SelectObjectContent action does not support the following GetObject functionality. For more information, see GetObject. Range: Although you can specify a scan range for an Amazon S3 Select request (see SelectObjectContentRequest - ScanRange in the request parameters), you cannot specify the range of bytes of an object to return. The GLACIER, DEEP_ARCHIVE, and REDUCED_REDUNDANCY storage classes, or the ARCHIVE_ACCESS and DEEP_ARCHIVE_ACCESS access tiers of the INTELLIGENT_TIERING storage class: You cannot query objects in the GLACIER, DEEP_ARCHIVE, or REDUCED_REDUNDANCY storage classes, nor objects in the ARCHIVE_ACCESS or DEEP_ARCHIVE_ACCESS access tiers of the INTELLIGENT_TIERING storage class. For more information about storage classes, see Using Amazon S3 storage classes in the Amazon S3 User Guide. Special Errors For a list of special errors for this operation, see List of SELECT Object Content Error Codes The following operations are related to SelectObjectContent: GetObject GetBucketLifecycleConfiguration PutBucketLifecycleConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The S3 bucket.</td>
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
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-algorithm">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-algorithm" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-key">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-key" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-customer-key-MD5">
    <td><CopyableCode code="x-amz-server-side-encryption-customer-key-MD5" /></td>
    <td><code>string</code></td>
    <td>The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="select_object_content"
    values={[
        { label: 'select_object_content', value: 'select_object_content' }
    ]}
>
<TabItem value="select_object_content">

This operation is not supported for directory buckets. This action filters the contents of an Amazon S3 object based on a simple structured query language (SQL) statement. In the request, along with the SQL expression, you must also specify a data serialization format (JSON, CSV, or Apache Parquet) of the object. Amazon S3 uses this format to parse object data into records, and returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. This functionality is not supported for Amazon S3 on Outposts. For more information about Amazon S3 Select, see Selecting Content from Objects and SELECT Command in the Amazon S3 User Guide. Permissions You must have the s3:GetObject permission for this operation. Amazon S3 Select does not support anonymous access. For more information about permissions, see Specifying Permissions in a Policy in the Amazon S3 User Guide. Object Data Formats You can use Amazon S3 Select to query objects that have the following format properties: CSV, JSON, and Parquet - Objects must be in CSV, JSON, or Parquet format. UTF-8 - UTF-8 is the only encoding type Amazon S3 Select supports. GZIP or BZIP2 - CSV and JSON files can be compressed using GZIP or BZIP2. GZIP and BZIP2 are the only compression formats that Amazon S3 Select supports for CSV and JSON files. Amazon S3 Select supports columnar compression for Parquet using GZIP or Snappy. Amazon S3 Select does not support whole-object compression for Parquet objects. Server-side encryption - Amazon S3 Select supports querying objects that are protected with server-side encryption. For objects that are encrypted with customer-provided encryption keys (SSE-C), you must use HTTPS, and you must use the headers that are documented in the GetObject. For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide. For objects that are encrypted with Amazon S3 managed keys (SSE-S3) and Amazon Web Services KMS keys (SSE-KMS), server-side encryption is handled transparently, so you don't need to specify anything. For more information about server-side encryption, including SSE-S3 and SSE-KMS, see Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide. Working with the Response Body Given the response size is unknown, Amazon S3 Select streams the response as a series of messages and includes a Transfer-Encoding header with chunked as its value in the response. For more information, see Appendix: SelectObjectContent Response. GetObject Support The SelectObjectContent action does not support the following GetObject functionality. For more information, see GetObject. Range: Although you can specify a scan range for an Amazon S3 Select request (see SelectObjectContentRequest - ScanRange in the request parameters), you cannot specify the range of bytes of an object to return. The GLACIER, DEEP_ARCHIVE, and REDUCED_REDUNDANCY storage classes, or the ARCHIVE_ACCESS and DEEP_ARCHIVE_ACCESS access tiers of the INTELLIGENT_TIERING storage class: You cannot query objects in the GLACIER, DEEP_ARCHIVE, or REDUCED_REDUNDANCY storage classes, nor objects in the ARCHIVE_ACCESS or DEEP_ARCHIVE_ACCESS access tiers of the INTELLIGENT_TIERING storage class. For more information about storage classes, see Using Amazon S3 storage classes in the Amazon S3 User Guide. Special Errors For a list of special errors for this operation, see List of SELECT Object Content Error Codes The following operations are related to SelectObjectContent: GetObject GetBucketLifecycleConfiguration PutBucketLifecycleConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
EXEC aws.s3.object_content.select_object_content 
@bucket='{{ bucket }}' --required, 
@key='{{ key }}' --required, 
@region='{{ region }}' --required, 
@x-amz-server-side-encryption-customer-algorithm='{{ x-amz-server-side-encryption-customer-algorithm }}', 
@x-amz-server-side-encryption-customer-key='{{ x-amz-server-side-encryption-customer-key }}', 
@x-amz-server-side-encryption-customer-key-MD5='{{ x-amz-server-side-encryption-customer-key-MD5 }}', 
@x-amz-expected-bucket-owner='{{ x-amz-expected-bucket-owner }}' 
@@json=
'{
"Expression": "{{ Expression }}", 
"ExpressionType": "{{ ExpressionType }}", 
"RequestProgress": "{{ RequestProgress }}", 
"InputSerialization": "{{ InputSerialization }}", 
"OutputSerialization": "{{ OutputSerialization }}", 
"ScanRange": "{{ ScanRange }}"
}'
;
```
</TabItem>
</Tabs>
