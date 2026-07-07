--- 
title: capacity_manager_metric_dimensions
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_manager_metric_dimensions
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

Creates, updates, deletes, gets or lists a <code>capacity_manager_metric_dimensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_manager_metric_dimensions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_manager_metric_dimensions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_manager_metric_dimensions"
    values={[
        { label: 'get_capacity_manager_metric_dimensions', value: 'get_capacity_manager_metric_dimensions' }
    ]}
>
<TabItem value="get_capacity_manager_metric_dimensions">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the capacity resource.</td>
</tr>
<tr>
    <td><CopyableCode code="AccountName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services account that owns the capacity resource. This dimension is only available when Organizations access is enabled for Capacity Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Availability Zone where the capacity resource is located.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceFamily" /></td>
    <td><code>string</code></td>
    <td>The EC2 instance family of the capacity resource.</td>
</tr>
<tr>
    <td><CopyableCode code="InstancePlatform" /></td>
    <td><code>string</code></td>
    <td>The platform or operating system of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The specific EC2 instance type of the capacity resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the capacity reservation. This provides a unique identifier that can be used across Amazon Web Services services to reference the specific reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationCreateTimestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the capacity reservation was originally created, in milliseconds since epoch. This differs from the start timestamp as reservations can be created before they become active.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationEndDateType" /></td>
    <td><code>string</code></td>
    <td>The type of end date for the capacity reservation. This indicates whether the reservation has a fixed end date, is open-ended, or follows a specific termination pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationEndTimestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the capacity reservation expires and is no longer available, in milliseconds since epoch. After this time, the reservation will not provide any capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the capacity reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationInstanceMatchCriteria" /></td>
    <td><code>string</code></td>
    <td>The instance matching criteria for the capacity reservation, determining how instances are matched to the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationStartTimestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the capacity reservation becomes active and available for use, in milliseconds since epoch. This is when the reservation begins providing capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationState" /></td>
    <td><code>string</code></td>
    <td>The current state of the capacity reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationType" /></td>
    <td><code>string</code></td>
    <td>The type of capacity reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationUnusedFinancialOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that is financially responsible for unused capacity reservation costs.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the capacity resource is located.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags associated with the capacity resource, represented as key-value pairs. Only tags that have been activated for monitoring via UpdateCapacityManagerMonitoredTagKeys are included.</td>
</tr>
<tr>
    <td><CopyableCode code="Tenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy of the EC2 instances associated with this capacity dimension. Valid values are 'default' for shared tenancy, 'dedicated' for dedicated instances, or 'host' for dedicated hosts.</td>
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
    <td><a href="#get_capacity_manager_metric_dimensions"><CopyableCode code="get_capacity_manager_metric_dimensions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-GroupBy"><code>GroupBy</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-MetricName"><code>MetricName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FilterBy"><code>FilterBy</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves the available dimension values for capacity metrics within a specified time range. This is useful for discovering what accounts, regions, instance families, and other dimensions have data available for filtering and grouping.</td>
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
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time for the dimension query, in ISO 8601 format. Only dimensions with data in this time range will be returned.</td>
</tr>
<tr id="parameter-GroupBy">
    <td><CopyableCode code="GroupBy" /></td>
    <td><code>array</code></td>
    <td>The dimensions to group by when retrieving available dimension values. This determines which dimension combinations are returned. Required parameter.</td>
</tr>
<tr id="parameter-MetricName">
    <td><CopyableCode code="MetricName" /></td>
    <td><code>array</code></td>
    <td>The metric names to use as an additional filter when retrieving dimensions. Only dimensions that have data for these metrics will be returned. Required parameter with maximum size of 1 for v1.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time for the dimension query, in ISO 8601 format. Only dimensions with data in this time range will be returned.</td>
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
<tr id="parameter-FilterBy">
    <td><CopyableCode code="FilterBy" /></td>
    <td><code>array</code></td>
    <td>Conditions to filter which dimension values are returned. Each filter specifies a dimension, comparison operator, and values to match against.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of dimension combinations to return. Valid range is 1 to 1000. Use with NextToken for pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results. Use this value in a subsequent call to retrieve additional dimension values.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_capacity_manager_metric_dimensions"
    values={[
        { label: 'get_capacity_manager_metric_dimensions', value: 'get_capacity_manager_metric_dimensions' }
    ]}
>
<TabItem value="get_capacity_manager_metric_dimensions">

Retrieves the available dimension values for capacity metrics within a specified time range. This is useful for discovering what accounts, regions, instance families, and other dimensions have data available for filtering and grouping.

```sql
SELECT
AccountId,
AccountName,
AvailabilityZoneId,
InstanceFamily,
InstancePlatform,
InstanceType,
ReservationArn,
ReservationCreateTimestamp,
ReservationEndDateType,
ReservationEndTimestamp,
ReservationId,
ReservationInstanceMatchCriteria,
ReservationStartTimestamp,
ReservationState,
ReservationType,
ReservationUnusedFinancialOwner,
ResourceRegion,
Tags,
Tenancy
FROM aws.ec2.capacity_manager_metric_dimensions
WHERE GroupBy = '{{ GroupBy }}' -- required
AND StartTime = '{{ StartTime }}' -- required
AND EndTime = '{{ EndTime }}' -- required
AND MetricName = '{{ MetricName }}' -- required
AND region = '{{ region }}' -- required
AND FilterBy = '{{ FilterBy }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
