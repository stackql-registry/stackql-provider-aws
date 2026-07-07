--- 
title: multi_region_access_point_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_access_point_routes
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

Creates, updates, deletes, gets or lists a <code>multi_region_access_point_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_access_point_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.multi_region_access_point_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_multi_region_access_point_routes"
    values={[
        { label: 'get_multi_region_access_point_routes', value: 'get_multi_region_access_point_routes' }
    ]}
>
<TabItem value="get_multi_region_access_point_routes">

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
    <td><CopyableCode code="Mrap" /></td>
    <td><code>string</code></td>
    <td>The Multi-Region Access Point ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="Routes" /></td>
    <td><code>string</code></td>
    <td>The different routes that make up the route configuration. Active routes return a value of 100, and passive routes return a value of 0.</td>
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
    <td><a href="#get_multi_region_access_point_routes"><CopyableCode code="get_multi_region_access_point_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-mrap"><code>mrap</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or passive. To obtain routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions: us-east-1 us-west-2 ap-southeast-2 ap-northeast-1 eu-west-1</td>
</tr>
<tr>
    <td><a href="#submit_multi_region_access_point_routes"><CopyableCode code="submit_multi_region_access_point_routes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-mrap"><code>mrap</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RouteUpdates"><code>RouteUpdates</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the routing status for the specified Regions from active to passive, or from passive to active. A value of 0 indicates a passive status, which means that traffic won't be routed to the specified Region. A value of 100 indicates an active status, which means that traffic will be routed to the specified Region. At least one Region must be active at all times. When the routing configuration is changed, any in-progress operations (uploads, copies, deletes, and so on) to formerly active Regions will continue to run to their final completion state (success or failure). The routing configurations of any Regions that aren’t specified remain unchanged. Updated routing configurations might not be immediately applied. It can take up to 2 minutes for your changes to take effect. To submit routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions: us-east-1 us-west-2 ap-southeast-2 ap-northeast-1 eu-west-1</td>
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
<tr id="parameter-mrap">
    <td><CopyableCode code="mrap" /></td>
    <td><code>string</code></td>
    <td>The Multi-Region Access Point ARN.</td>
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
    defaultValue="get_multi_region_access_point_routes"
    values={[
        { label: 'get_multi_region_access_point_routes', value: 'get_multi_region_access_point_routes' }
    ]}
>
<TabItem value="get_multi_region_access_point_routes">

This operation is not supported by directory buckets. Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or passive. To obtain routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions: us-east-1 us-west-2 ap-southeast-2 ap-northeast-1 eu-west-1

```sql
SELECT
Mrap,
Routes
FROM aws.s3control.multi_region_access_point_routes
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND mrap = '{{ mrap }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="submit_multi_region_access_point_routes"
    values={[
        { label: 'submit_multi_region_access_point_routes', value: 'submit_multi_region_access_point_routes' }
    ]}
>
<TabItem value="submit_multi_region_access_point_routes">

This operation is not supported by directory buckets. Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the routing status for the specified Regions from active to passive, or from passive to active. A value of 0 indicates a passive status, which means that traffic won't be routed to the specified Region. A value of 100 indicates an active status, which means that traffic will be routed to the specified Region. At least one Region must be active at all times. When the routing configuration is changed, any in-progress operations (uploads, copies, deletes, and so on) to formerly active Regions will continue to run to their final completion state (success or failure). The routing configurations of any Regions that aren’t specified remain unchanged. Updated routing configurations might not be immediately applied. It can take up to 2 minutes for your changes to take effect. To submit routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions: us-east-1 us-west-2 ap-southeast-2 ap-northeast-1 eu-west-1

```sql
EXEC aws.s3control.multi_region_access_point_routes.submit_multi_region_access_point_routes 
@x-amz-account-id='{{ x-amz-account-id }}' --required, 
@mrap='{{ mrap }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"RouteUpdates": "{{ RouteUpdates }}"
}'
;
```
</TabItem>
</Tabs>
