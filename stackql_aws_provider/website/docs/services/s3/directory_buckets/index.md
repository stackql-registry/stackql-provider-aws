--- 
title: directory_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - directory_buckets
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

Creates, updates, deletes, gets or lists a <code>directory_buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="directory_buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.directory_buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_directory_buckets"
    values={[
        { label: 'list_directory_buckets', value: 'list_directory_buckets' }
    ]}
>
<TabItem value="list_directory_buckets">

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
    <td><CopyableCode code="bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 bucket. ARNs uniquely identify Amazon Web Services resources across all of Amazon Web Services. This parameter is only supported for S3 directory buckets. For more information, see Using tags with directory buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_region" /></td>
    <td><code>string</code></td>
    <td>BucketRegion indicates the Amazon Web Services region where the bucket is located. If the request contains at least one valid parameter, it is included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>Date the bucket was created. This date can change when making changes to your bucket, such as editing its bucket policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket.</td>
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
    <td><a href="#list_directory_buckets"><CopyableCode code="list_directory_buckets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-continuation-token"><code>continuation-token</code></a>, <a href="#parameter-max-directory-buckets"><code>max-directory-buckets</code></a></td>
    <td>Returns a list of all Amazon S3 directory buckets owned by the authenticated sender of the request. For more information about directory buckets, see Directory buckets in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions You must have the s3express:ListAllMyDirectoryBuckets permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. The BucketRegion response element is not part of the ListDirectoryBuckets Response Syntax. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
<tr id="parameter-continuation-token">
    <td><CopyableCode code="continuation-token" /></td>
    <td><code>string</code></td>
    <td>ContinuationToken indicates to Amazon S3 that the list is being continued on buckets in this account with a token. ContinuationToken is obfuscated and is not a real bucket name. You can use this ContinuationToken for the pagination of the list results.</td>
</tr>
<tr id="parameter-max-directory-buckets">
    <td><CopyableCode code="max-directory-buckets" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of buckets to be returned in response. When the number is more than the count of buckets that are owned by an Amazon Web Services account, return all the buckets in response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_directory_buckets"
    values={[
        { label: 'list_directory_buckets', value: 'list_directory_buckets' }
    ]}
>
<TabItem value="list_directory_buckets">

Returns a list of all Amazon S3 directory buckets owned by the authenticated sender of the request. For more information about directory buckets, see Directory buckets in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions You must have the s3express:ListAllMyDirectoryBuckets permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. The BucketRegion response element is not part of the ListDirectoryBuckets Response Syntax. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
bucket_arn,
bucket_region,
creation_date,
name
FROM aws.s3.directory_buckets
WHERE region = '{{ region }}' -- required
AND `continuation-token` = '{{ continuation-token }}'
AND `max-directory-buckets` = '{{ max-directory-buckets }}'
;
```
</TabItem>
</Tabs>
