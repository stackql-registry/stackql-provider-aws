--- 
title: object_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - object_versions
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

Creates, updates, deletes, gets or lists an <code>object_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.object_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_object_versions"
    values={[
        { label: 'list_object_versions', value: 'list_object_versions' }
    ]}
>
<TabItem value="list_object_versions">

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
    <td>The entity tag is an MD5 hash of that version of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="is_latest" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the object is (true) or is not (false) the latest version of an object.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The object key.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string</code></td>
    <td>Date and time when the object was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Specifies the owner of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_status" /></td>
    <td><code>string</code></td>
    <td>Specifies the restoration status of an object. Objects in certain storage classes must be restored before they can be retrieved. For more information about these storage classes and how to work with archived objects, see Working with archived objects in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size in bytes of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>The class of storage used to store the object.</td>
</tr>
<tr>
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>Version ID of an object.</td>
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
    <td><a href="#list_object_versions"><CopyableCode code="list_object_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-encoding-type"><code>encoding-type</code></a>, <a href="#parameter-key-marker"><code>key-marker</code></a>, <a href="#parameter-max-keys"><code>max-keys</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-version-id-marker"><code>version-id-marker</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-optional-object-attributes"><code>x-amz-optional-object-attributes</code></a></td>
    <td>This operation is not supported for directory buckets. Returns metadata about all versions of the objects in a bucket. You can also use request parameters as selection criteria to return metadata about a subset of all the object versions. To use this operation, you must have permission to perform the s3:ListBucketVersions action. Be aware of the name difference. A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. To use this operation, you must have READ access to the bucket. The following operations are related to ListObjectVersions: ListObjectsV2 GetObject PutObject DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The bucket name that contains the objects.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td>A delimiter is a character that you specify to group keys. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response. CommonPrefixes is filtered out from results if it is not lexicographically greater than the key-marker.</td>
</tr>
<tr id="parameter-encoding-type">
    <td><CopyableCode code="encoding-type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-key-marker">
    <td><CopyableCode code="key-marker" /></td>
    <td><code>string</code></td>
    <td>Specifies the key to start with when listing objects in a bucket.</td>
</tr>
<tr id="parameter-max-keys">
    <td><CopyableCode code="max-keys" /></td>
    <td><code>integer</code></td>
    <td>Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because max-keys was exceeded, the response contains <code>&lt;isTruncated&gt;</code>true&lt;/isTruncated&gt;. To return the additional keys, see key-marker and version-id-marker.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using prefix to make groups in the same way that you'd use a folder in a file system.) You can use prefix with delimiter to roll up numerous objects into a single result under CommonPrefixes.</td>
</tr>
<tr id="parameter-version-id-marker">
    <td><CopyableCode code="version-id-marker" /></td>
    <td><code>string</code></td>
    <td>Specifies the object version you want to start listing from.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_object_versions"
    values={[
        { label: 'list_object_versions', value: 'list_object_versions' }
    ]}
>
<TabItem value="list_object_versions">

This operation is not supported for directory buckets. Returns metadata about all versions of the objects in a bucket. You can also use request parameters as selection criteria to return metadata about a subset of all the object versions. To use this operation, you must have permission to perform the s3:ListBucketVersions action. Be aware of the name difference. A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. To use this operation, you must have READ access to the bucket. The following operations are related to ListObjectVersions: ListObjectsV2 GetObject PutObject DeleteObject You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
checksum_algorithm,
checksum_type,
e_tag,
is_latest,
key,
last_modified,
owner,
restore_status,
size,
storage_class,
version_id
FROM aws.s3.object_versions
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND delimiter = '{{ delimiter }}'
AND `encoding-type` = '{{ encoding-type }}'
AND `key-marker` = '{{ key-marker }}'
AND `max-keys` = '{{ max-keys }}'
AND prefix = '{{ prefix }}'
AND `version-id-marker` = '{{ version-id-marker }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-optional-object-attributes` = '{{ x-amz-optional-object-attributes }}'
;
```
</TabItem>
</Tabs>
