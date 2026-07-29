--- 
title: spot_placement_scores
hide_title: false
hide_table_of_contents: false
keywords:
  - spot_placement_scores
  - ec2
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

Creates, updates, deletes, gets or lists a <code>spot_placement_scores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spot_placement_scores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.spot_placement_scores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_spot_placement_scores"
    values={[
        { label: 'get_spot_placement_scores', value: 'get_spot_placement_scores' }
    ]}
>
<TabItem value="get_spot_placement_scores">

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
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Region.</td>
</tr>
<tr>
    <td><CopyableCode code="score" /></td>
    <td><code>integer</code></td>
    <td>The placement score, on a scale from 1 to 10. A score of 10 indicates that your Spot request is highly likely to succeed in this Region or Availability Zone. A score of 1 indicates that your Spot request is not likely to succeed.</td>
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
    <td><a href="#get_spot_placement_scores"><CopyableCode code="get_spot_placement_scores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TargetCapacity"><code>TargetCapacity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-TargetCapacityUnitType"><code>TargetCapacityUnitType</code></a>, <a href="#parameter-SingleAvailabilityZone"><code>SingleAvailabilityZone</code></a>, <a href="#parameter-RegionName"><code>RegionName</code></a>, <a href="#parameter-InstanceRequirementsWithMetadata"><code>InstanceRequirementsWithMetadata</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Calculates the Spot placement score for a Region or Availability Zone based on the specified target capacity and compute requirements. You can specify your compute requirements either by using InstanceRequirementsWithMetadata and letting Amazon EC2 choose the optimal instance types to fulfill your Spot request, or you can specify the instance types by using InstanceTypes. For more information, see Spot placement score in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-TargetCapacity">
    <td><CopyableCode code="TargetCapacity" /></td>
    <td><code>integer</code></td>
    <td>The target capacity.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-InstanceRequirementsWithMetadata">
    <td><CopyableCode code="InstanceRequirementsWithMetadata" /></td>
    <td><code>object</code></td>
    <td>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes. If you specify InstanceRequirementsWithMetadata, you can't specify InstanceTypes.</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>array</code></td>
    <td>The instance types. We recommend that you specify at least three instance types. If you specify one or two instance types, or specify variations of a single instance type (for example, an m3.xlarge with and without instance storage), the returned placement score will always be low. If you specify InstanceTypes, you can't specify InstanceRequirementsWithMetadata.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-RegionName">
    <td><CopyableCode code="RegionName" /></td>
    <td><code>array</code></td>
    <td>The Regions used to narrow down the list of Regions to be scored. Enter the Region code, for example, us-east-1.</td>
</tr>
<tr id="parameter-SingleAvailabilityZone">
    <td><CopyableCode code="SingleAvailabilityZone" /></td>
    <td><code>boolean</code></td>
    <td>Specify true so that the response returns a list of scored Availability Zones. Otherwise, the response returns a list of scored Regions. A list of scored Availability Zones is useful if you want to launch all of your Spot capacity into a single Availability Zone.</td>
</tr>
<tr id="parameter-TargetCapacityUnitType">
    <td><CopyableCode code="TargetCapacityUnitType" /></td>
    <td><code>string</code></td>
    <td>The unit for the target capacity.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_spot_placement_scores"
    values={[
        { label: 'get_spot_placement_scores', value: 'get_spot_placement_scores' }
    ]}
>
<TabItem value="get_spot_placement_scores">

Calculates the Spot placement score for a Region or Availability Zone based on the specified target capacity and compute requirements. You can specify your compute requirements either by using InstanceRequirementsWithMetadata and letting Amazon EC2 choose the optimal instance types to fulfill your Spot request, or you can specify the instance types by using InstanceTypes. For more information, see Spot placement score in the Amazon EC2 User Guide.

```sql
SELECT
availability_zone_id,
region,
score
FROM aws.ec2.spot_placement_scores
WHERE TargetCapacity = '{{ TargetCapacity }}' -- required
AND region = '{{ region }}' -- required
AND InstanceType = '{{ InstanceType }}'
AND TargetCapacityUnitType = '{{ TargetCapacityUnitType }}'
AND SingleAvailabilityZone = '{{ SingleAvailabilityZone }}'
AND RegionName = '{{ RegionName }}'
AND InstanceRequirementsWithMetadata = '{{ InstanceRequirementsWithMetadata }}'
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
