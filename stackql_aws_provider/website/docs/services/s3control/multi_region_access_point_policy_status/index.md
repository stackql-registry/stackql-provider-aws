--- 
title: multi_region_access_point_policy_status
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_access_point_policy_status
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

Creates, updates, deletes, gets or lists a <code>multi_region_access_point_policy_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_access_point_policy_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.multi_region_access_point_policy_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_multi_region_access_point_policy_status"
    values={[
        { label: 'get_multi_region_access_point_policy_status', value: 'get_multi_region_access_point_policy_status' }
    ]}
>
<TabItem value="get_multi_region_access_point_policy_status">

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
    <td><CopyableCode code="IsPublic" /></td>
    <td><code>boolean</code></td>
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
    <td><a href="#get_multi_region_access_point_policy_status"><CopyableCode code="get_multi_region_access_point_policy_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicyStatus: GetMultiRegionAccessPointPolicy PutMultiRegionAccessPointPolicy</td>
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
    defaultValue="get_multi_region_access_point_policy_status"
    values={[
        { label: 'get_multi_region_access_point_policy_status', value: 'get_multi_region_access_point_policy_status' }
    ]}
>
<TabItem value="get_multi_region_access_point_policy_status">

This operation is not supported by directory buckets. Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicyStatus: GetMultiRegionAccessPointPolicy PutMultiRegionAccessPointPolicy

```sql
SELECT
IsPublic
FROM aws.s3control.multi_region_access_point_policy_status
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
