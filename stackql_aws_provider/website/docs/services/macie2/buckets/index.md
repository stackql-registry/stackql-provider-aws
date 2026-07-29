--- 
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
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

Creates, updates, deletes, gets or lists a <code>buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_buckets"
    values={[
        { label: 'describe_buckets', value: 'describe_buckets' }
    ]}
>
<TabItem value="describe_buckets">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Amazon Web Services account that owns the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="allows_unencrypted_object_uploads" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are added to the bucket. Possible values are: FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header. TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header. UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects. Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256. (TRUE, FALSE, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="automated_discovery_monitoring_status" /></td>
    <td><code>string</code></td>
    <td>Specifies whether automated sensitive data discovery is currently configured to analyze objects in the bucket. Possible values are: MONITORED, the bucket is included in analyses; and, NOT_MONITORED, the bucket is excluded from analyses. If automated sensitive data discovery is disabled for your account, this value is NOT_MONITORED. (MONITORED, NOT_MONITORED)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the bucket was created. This value can also indicate when changes such as edits to the bucket's policy were most recently made to the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_name" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="classifiable_object_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</td>
</tr>
<tr>
    <td><CopyableCode code="classifiable_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format. If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The code for an error or issue that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. Possible values are: ACCESS_DENIED - Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request. BUCKET_COUNT_EXCEEDS_QUOTA - Retrieving and processing the information would exceed the quota for the number of buckets that Macie monitors for an account (10,000). If this value is null, Macie was able to retrieve and process the information. (ACCESS_DENIED, BUCKET_COUNT_EXCEEDS_QUOTA)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>A brief description of the error or issue (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.</td>
</tr>
<tr>
    <td><CopyableCode code="job_details" /></td>
    <td><code>object</code></td>
    <td>Specifies whether any one-time or recurring classification jobs are configured to analyze objects in the bucket, and, if so, the details of the job that ran most recently.</td>
</tr>
<tr>
    <td><CopyableCode code="last_automated_discovery_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently analyzed objects in the bucket while performing automated sensitive data discovery. This value is null if this analysis hasn't occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved bucket or object metadata from Amazon S3 for the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="object_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of objects in the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="object_count_by_encryption_type" /></td>
    <td><code>object</code></td>
    <td>The total number of objects in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="public_access" /></td>
    <td><code>object</code></td>
    <td>Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket, and provides information about those settings.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that hosts the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_details" /></td>
    <td><code>object</code></td>
    <td>Specifies whether the bucket is configured to replicate one or more objects to buckets for other Amazon Web Services accounts and, if so, which accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivity_score" /></td>
    <td><code>integer</code></td>
    <td>The sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive). If automated sensitive data discovery has never been enabled for your account or it's been disabled for your organization or standalone account for more than 30 days, possible values are: 1, the bucket is empty; or, 50, the bucket stores objects but it's been excluded from recent analyses.</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption" /></td>
    <td><code>object</code></td>
    <td>The default server-side encryption settings for the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="shared_access" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the bucket is shared with another Amazon Web Services account, an Amazon CloudFront origin access identity (OAI), or a CloudFront origin access control (OAC). Possible values are: EXTERNAL - The bucket is shared with one or more of the following or any combination of the following: a CloudFront OAI, a CloudFront OAC, or an Amazon Web Services account that isn't part of your Amazon Macie organization. INTERNAL - The bucket is shared with one or more Amazon Web Services accounts that are part of your Amazon Macie organization. It isn't shared with a CloudFront OAI or OAC. NOT_SHARED - The bucket isn't shared with another Amazon Web Services account, a CloudFront OAI, or a CloudFront OAC. UNKNOWN - Amazon Macie wasn't able to evaluate the shared access settings for the bucket. An Amazon Macie organization is a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation. (EXTERNAL, INTERNAL, NOT_SHARED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total storage size, in bytes, of the bucket. If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes_compressed" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket. If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array that specifies the tags (keys and values) that are associated with the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="unclassifiable_object_count" /></td>
    <td><code>object</code></td>
    <td>The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</td>
</tr>
<tr>
    <td><CopyableCode code="unclassifiable_object_size_in_bytes" /></td>
    <td><code>object</code></td>
    <td>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</td>
</tr>
<tr>
    <td><CopyableCode code="versioning" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether versioning is enabled for the bucket.</td>
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
    <td><a href="#describe_buckets"><CopyableCode code="describe_buckets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.</td>
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
    defaultValue="describe_buckets"
    values={[
        { label: 'describe_buckets', value: 'describe_buckets' }
    ]}
>
<TabItem value="describe_buckets">

Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.

```sql
SELECT
account_id,
allows_unencrypted_object_uploads,
automated_discovery_monitoring_status,
bucket_arn,
bucket_created_at,
bucket_name,
classifiable_object_count,
classifiable_size_in_bytes,
error_code,
error_message,
job_details,
last_automated_discovery_time,
last_updated,
object_count,
object_count_by_encryption_type,
public_access,
region,
replication_details,
sensitivity_score,
server_side_encryption,
shared_access,
size_in_bytes,
size_in_bytes_compressed,
tags,
unclassifiable_object_count,
unclassifiable_object_size_in_bytes,
versioning
FROM aws.macie2.buckets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
