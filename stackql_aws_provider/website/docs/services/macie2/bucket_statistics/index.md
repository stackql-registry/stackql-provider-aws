--- 
title: bucket_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_statistics
  - macie2
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

Creates, updates, deletes, gets or lists a <code>bucket_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.bucket_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_statistics"
    values={[
        { label: 'get_bucket_statistics', value: 'get_bucket_statistics' }
    ]}
>
<TabItem value="get_bucket_statistics">

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
    <td><CopyableCode code="bucketCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketCountByEffectivePermission" /></td>
    <td><code>object</code></td>
    <td>The total number of buckets that are publicly accessible due to a combination of permissions settings for each bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketCountByEncryptionType" /></td>
    <td><code>object</code></td>
    <td>The total number of buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketCountByObjectEncryptionRequirement" /></td>
    <td><code>object</code></td>
    <td>The total number of buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketCountBySharedAccessType" /></td>
    <td><code>object</code></td>
    <td>The total number of buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs).</td>
</tr>
<tr>
    <td><CopyableCode code="bucketStatisticsBySensitivity" /></td>
    <td><code>object</code></td>
    <td>The aggregated sensitive data discovery statistics for the buckets. If automated sensitive data discovery is currently disabled for your account, the value for most statistics is 0.</td>
</tr>
<tr>
    <td><CopyableCode code="classifiableObjectCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</td>
</tr>
<tr>
    <td><CopyableCode code="classifiableSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format. If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved bucket or object metadata from Amazon S3 for the buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="objectCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of objects in the buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total storage size, in bytes, of the buckets. If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInBytesCompressed" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the buckets. If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of the applicable objects in the buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="unclassifiableObjectCount" /></td>
    <td><code>object</code></td>
    <td>The total number of objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</td>
</tr>
<tr>
    <td><CopyableCode code="unclassifiableObjectSizeInBytes" /></td>
    <td><code>object</code></td>
    <td>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</td>
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
    <td><a href="#get_bucket_statistics"><CopyableCode code="get_bucket_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_statistics"
    values={[
        { label: 'get_bucket_statistics', value: 'get_bucket_statistics' }
    ]}
>
<TabItem value="get_bucket_statistics">

Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.

```sql
SELECT
bucketCount,
bucketCountByEffectivePermission,
bucketCountByEncryptionType,
bucketCountByObjectEncryptionRequirement,
bucketCountBySharedAccessType,
bucketStatisticsBySensitivity,
classifiableObjectCount,
classifiableSizeInBytes,
lastUpdated,
objectCount,
sizeInBytes,
sizeInBytesCompressed,
unclassifiableObjectCount,
unclassifiableObjectSizeInBytes
FROM aws.macie2.bucket_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
