--- 
title: spot_price_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - spot_price_histories
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

Creates, updates, deletes, gets or lists a <code>spot_price_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spot_price_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.spot_price_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_spot_price_history"
    values={[
        { label: 'describe_spot_price_history', value: 'describe_spot_price_history' }
    ]}
>
<TabItem value="describe_spot_price_history">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="product_description" /></td>
    <td><code>string</code></td>
    <td>A general description of the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="spot_price" /></td>
    <td><code>string</code></td>
    <td>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price. If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time the request was created, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ).</td>
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
    <td><a href="#describe_spot_price_history"><CopyableCode code="describe_spot_price_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-ProductDescription"><code>ProductDescription</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the Spot price history. For more information, see Spot Instance pricing history in the Amazon EC2 User Guide. When you specify a start and end time, the operation returns the prices of the instance types within that time range. It also returns the last price change before the start time, which is the effective price as of the start time.</td>
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
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>Filters the results by the specified Availability Zone. Either AvailabilityZone or AvailabilityZoneId can be specified, but not both</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>Filters the results by the specified ID of the Availability Zone. Either AvailabilityZone or AvailabilityZoneId can be specified, but not both</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, up to the current date, from which to stop retrieving the price history data, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ).</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. availability-zone - The Availability Zone for which prices should be returned. availability-zone-id - The ID of the Availability Zone for which prices should be returned. instance-type - The type of instance (for example, m3.medium). product-description - The product description for the Spot price (Linux/UNIX | Red Hat Enterprise Linux | SUSE Linux | Windows | Linux/UNIX (Amazon VPC) | Red Hat Enterprise Linux (Amazon VPC) | SUSE Linux (Amazon VPC) | Windows (Amazon VPC)). spot-price - The Spot price. The value must match exactly (or use wildcards; greater than or less than comparison is not supported). timestamp - The time stamp of the Spot price history, in UTC format (for example, ddd MMM dd HH:mm:ss UTC YYYY). You can use wildcards (* and ?). Greater than or less than comparison is not supported.</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>array</code></td>
    <td>Filters the results by the specified instance types.</td>
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
<tr id="parameter-ProductDescription">
    <td><CopyableCode code="ProductDescription" /></td>
    <td><code>array</code></td>
    <td>Filters the results by the specified basic product descriptions.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, up to the past 90 days, from which to start retrieving the price history data, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_spot_price_history"
    values={[
        { label: 'describe_spot_price_history', value: 'describe_spot_price_history' }
    ]}
>
<TabItem value="describe_spot_price_history">

Describes the Spot price history. For more information, see Spot Instance pricing history in the Amazon EC2 User Guide. When you specify a start and end time, the operation returns the prices of the instance types within that time range. It also returns the last price change before the start time, which is the effective price as of the start time.

```sql
SELECT
availability_zone,
availability_zone_id,
instance_type,
product_description,
spot_price,
timestamp
FROM aws.ec2.spot_price_histories
WHERE region = '{{ region }}' -- required
AND AvailabilityZoneId = '{{ AvailabilityZoneId }}'
AND DryRun = '{{ DryRun }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND InstanceType = '{{ InstanceType }}'
AND ProductDescription = '{{ ProductDescription }}'
AND Filter = '{{ Filter }}'
AND AvailabilityZone = '{{ AvailabilityZone }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
