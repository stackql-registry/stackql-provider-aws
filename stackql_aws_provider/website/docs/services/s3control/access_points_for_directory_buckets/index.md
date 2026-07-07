--- 
title: access_points_for_directory_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points_for_directory_buckets
  - s3control
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

Creates, updates, deletes, gets or lists an <code>access_points_for_directory_buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_points_for_directory_buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_points_for_directory_buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_access_points_for_directory_buckets"
    values={[
        { label: 'list_access_points_for_directory_buckets', value: 'list_access_points_for_directory_buckets' }
    ]}
>
<TabItem value="list_access_points_for_directory_buckets">

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
    <td><CopyableCode code="AccessPointArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="Alias" /></td>
    <td><code>string</code></td>
    <td>The name or alias of the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket associated with this access point.</td>
</tr>
<tr>
    <td><CopyableCode code="BucketAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the data source of the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the data source that the access point is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of this access point.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkOrigin" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this access point allows access from the public internet. If VpcConfiguration is specified for this access point, then NetworkOrigin is VPC, and the access point doesn't allow access from the public internet. Otherwise, NetworkOrigin is Internet, and the access point allows access from the public internet, subject to the access point and bucket access policies.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfiguration" /></td>
    <td><code>string</code></td>
    <td>The virtual private cloud (VPC) configuration for this access point, if one exists. This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services services.</td>
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
    <td><a href="#list_access_points_for_directory_buckets"><CopyableCode code="list_access_points_for_directory_buckets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-directoryBucket"><code>directoryBucket</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of the access points that are owned by the Amazon Web Services account and that are associated with the specified directory bucket. To list access points for general purpose buckets, see ListAccesspoints. To use this operation, you must have the permission to perform the s3express:ListAccessPointsForDirectoryBuckets action. For information about REST API errors, see REST error responses.</td>
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
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the access points.</td>
</tr>
<tr id="parameter-directoryBucket">
    <td><CopyableCode code="directoryBucket" /></td>
    <td><code>string</code></td>
    <td>The name of the directory bucket associated with the access points you want to list.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of access points that you would like returned in the ListAccessPointsForDirectoryBuckets response. If the directory bucket is associated with more than this number of access points, the results include the pagination token NextToken. Make another call using the NextToken to retrieve more results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If NextToken is returned, there are more access points available than requested in the maxResults value. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_access_points_for_directory_buckets"
    values={[
        { label: 'list_access_points_for_directory_buckets', value: 'list_access_points_for_directory_buckets' }
    ]}
>
<TabItem value="list_access_points_for_directory_buckets">

Returns a list of the access points that are owned by the Amazon Web Services account and that are associated with the specified directory bucket. To list access points for general purpose buckets, see ListAccesspoints. To use this operation, you must have the permission to perform the s3express:ListAccessPointsForDirectoryBuckets action. For information about REST API errors, see REST error responses.

```sql
SELECT
AccessPointArn,
Alias,
Bucket,
BucketAccountId,
DataSourceId,
DataSourceType,
Name,
NetworkOrigin,
VpcConfiguration
FROM aws.s3control.access_points_for_directory_buckets
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND directoryBucket = '{{ directoryBucket }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
