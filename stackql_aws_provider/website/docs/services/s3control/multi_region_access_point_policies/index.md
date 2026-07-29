--- 
title: multi_region_access_point_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_access_point_policies
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

Creates, updates, deletes, gets or lists a <code>multi_region_access_point_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_access_point_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.multi_region_access_point_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_multi_region_access_point_policy"
    values={[
        { label: 'get_multi_region_access_point_policy', value: 'get_multi_region_access_point_policy' }
    ]}
>
<TabItem value="get_multi_region_access_point_policy">

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
    <td><CopyableCode code="established" /></td>
    <td><code>string</code></td>
    <td>The last established policy for the Multi-Region Access Point.</td>
</tr>
<tr>
    <td><CopyableCode code="proposed" /></td>
    <td><code>string</code></td>
    <td>The proposed policy for the Multi-Region Access Point.</td>
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
    <td><a href="#get_multi_region_access_point_policy"><CopyableCode code="get_multi_region_access_point_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Returns the access control policy of the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicy: GetMultiRegionAccessPointPolicyStatus PutMultiRegionAccessPointPolicy</td>
</tr>
<tr>
    <td><a href="#put_multi_region_access_point_policy"><CopyableCode code="put_multi_region_access_point_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Details"><code>Details</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only one policy, so a request made to this action replaces any existing policy that is associated with the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to PutMultiRegionAccessPointPolicy: GetMultiRegionAccessPointPolicy GetMultiRegionAccessPointPolicyStatus</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Rules for naming Amazon S3 Multi-Region Access Points in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_multi_region_access_point_policy"
    values={[
        { label: 'get_multi_region_access_point_policy', value: 'get_multi_region_access_point_policy' }
    ]}
>
<TabItem value="get_multi_region_access_point_policy">

This operation is not supported by directory buckets. Returns the access control policy of the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicy: GetMultiRegionAccessPointPolicyStatus PutMultiRegionAccessPointPolicy

```sql
SELECT
established,
proposed
FROM aws.s3control.multi_region_access_point_policies
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_multi_region_access_point_policy"
    values={[
        { label: 'put_multi_region_access_point_policy', value: 'put_multi_region_access_point_policy' }
    ]}
>
<TabItem value="put_multi_region_access_point_policy">

This operation is not supported by directory buckets. Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only one policy, so a request made to this action replaces any existing policy that is associated with the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to PutMultiRegionAccessPointPolicy: GetMultiRegionAccessPointPolicy GetMultiRegionAccessPointPolicyStatus

```sql
REPLACE aws.s3control.multi_region_access_point_policies
SET 
ClientToken = '{{ ClientToken }}',
Details = '{{ Details }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
AND ClientToken = '{{ ClientToken }}' --required
AND Details = '{{ Details }}' --required
RETURNING
request_token_arn;
```
</TabItem>
</Tabs>
