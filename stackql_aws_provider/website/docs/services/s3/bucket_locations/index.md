--- 
title: bucket_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_locations
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

Creates, updates, deletes, gets or lists a <code>bucket_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_location"
    values={[
        { label: 'get_bucket_location', value: 'get_bucket_location' }
    ]}
>
<TabItem value="get_bucket_location">

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
    <td><a href="#get_bucket_location"><CopyableCode code="get_bucket_location" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Using the GetBucketLocation operation is no longer a best practice. To return the Region that a bucket resides in, we recommend that you use the HeadBucket operation instead. For backward compatibility, Amazon S3 continues to support the GetBucketLocation operation. Returns the Region the bucket resides in. You set the bucket's Region using the LocationConstraint request parameter in a CreateBucket request. For more information, see CreateBucket. In a bucket's home Region, calls to the GetBucketLocation operation are governed by the bucket's policy. In other Regions, the bucket policy doesn't apply, which means that cross-account access won't be authorized. However, calls to the HeadBucket operation always return the bucket’s location through an HTTP response header, whether access to the bucket is authorized or not. Therefore, we recommend using the HeadBucket operation for bucket Region discovery and to avoid using the GetBucketLocation operation. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes. This operation is not supported for directory buckets. The following operations are related to GetBucketLocation: GetObject CreateBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the bucket for which to get the location. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_location"
    values={[
        { label: 'get_bucket_location', value: 'get_bucket_location' }
    ]}
>
<TabItem value="get_bucket_location">

Using the GetBucketLocation operation is no longer a best practice. To return the Region that a bucket resides in, we recommend that you use the HeadBucket operation instead. For backward compatibility, Amazon S3 continues to support the GetBucketLocation operation. Returns the Region the bucket resides in. You set the bucket's Region using the LocationConstraint request parameter in a CreateBucket request. For more information, see CreateBucket. In a bucket's home Region, calls to the GetBucketLocation operation are governed by the bucket's policy. In other Regions, the bucket policy doesn't apply, which means that cross-account access won't be authorized. However, calls to the HeadBucket operation always return the bucket’s location through an HTTP response header, whether access to the bucket is authorized or not. Therefore, we recommend using the HeadBucket operation for bucket Region discovery and to avoid using the GetBucketLocation operation. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes. This operation is not supported for directory buckets. The following operations are related to GetBucketLocation: GetObject CreateBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
line_items
FROM aws.s3.bucket_locations
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
