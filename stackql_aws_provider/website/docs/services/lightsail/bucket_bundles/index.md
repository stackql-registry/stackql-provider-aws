--- 
title: bucket_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_bundles
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>bucket_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.bucket_bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_bundles"
    values={[
        { label: 'get_bucket_bundles', value: 'get_bucket_bundles' }
    ]}
>
<TabItem value="get_bucket_bundles">

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
    <td><CopyableCode code="bundles" /></td>
    <td><code>array</code></td>
    <td>An object that describes bucket bundles.</td>
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
    <td><a href="#get_bucket_bundles"><CopyableCode code="get_bucket_bundles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the bundles that you can apply to a Amazon Lightsail bucket. The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket. Use the UpdateBucketBundle action to update the bundle for a bucket.</td>
</tr>
<tr>
    <td><a href="#update_bucket_bundle"><CopyableCode code="update_bucket_bundle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-bundleId"><code>bundleId</code></a></td>
    <td></td>
    <td>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket. A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the GetBuckets action. The ableToUpdateBundle parameter in the response will indicate whether you can currently update a bucket's bundle. Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</td>
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
    defaultValue="get_bucket_bundles"
    values={[
        { label: 'get_bucket_bundles', value: 'get_bucket_bundles' }
    ]}
>
<TabItem value="get_bucket_bundles">

Returns the bundles that you can apply to a Amazon Lightsail bucket. The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket. Use the UpdateBucketBundle action to update the bundle for a bucket.

```sql
SELECT
bundles
FROM aws.lightsail.bucket_bundles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bucket_bundle"
    values={[
        { label: 'update_bucket_bundle', value: 'update_bucket_bundle' }
    ]}
>
<TabItem value="update_bucket_bundle">

Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket. A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the GetBuckets action. The ableToUpdateBundle parameter in the response will indicate whether you can currently update a bucket's bundle. Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.

```sql
UPDATE aws.lightsail.bucket_bundles
SET 
bucketName = '{{ bucketName }}',
bundleId = '{{ bundleId }}'
WHERE 
region = '{{ region }}' --required
AND bucketName = '{{ bucketName }}' --required
AND bundleId = '{{ bundleId }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>
