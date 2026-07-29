--- 
title: bandwidth_rate_limit_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - bandwidth_rate_limit_schedules
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>bandwidth_rate_limit_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bandwidth_rate_limit_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.bandwidth_rate_limit_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bandwidth_rate_limit_schedule"
    values={[
        { label: 'describe_bandwidth_rate_limit_schedule', value: 'describe_bandwidth_rate_limit_schedule' }
    ]}
>
<TabItem value="describe_bandwidth_rate_limit_schedule">

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
    <td><CopyableCode code="bandwidth_rate_limit_intervals" /></td>
    <td><code>array</code></td>
    <td>An array that contains the bandwidth rate limit intervals for a tape or volume gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
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
    <td><a href="#describe_bandwidth_rate_limit_schedule"><CopyableCode code="describe_bandwidth_rate_limit_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</td>
</tr>
<tr>
    <td><a href="#update_bandwidth_rate_limit_schedule"><CopyableCode code="update_bandwidth_rate_limit_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-BandwidthRateLimitIntervals"><code>BandwidthRateLimitIntervals</code></a></td>
    <td></td>
    <td>Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3 file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate limits.</td>
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
    defaultValue="describe_bandwidth_rate_limit_schedule"
    values={[
        { label: 'describe_bandwidth_rate_limit_schedule', value: 'describe_bandwidth_rate_limit_schedule' }
    ]}
>
<TabItem value="describe_bandwidth_rate_limit_schedule">

Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

```sql
SELECT
bandwidth_rate_limit_intervals,
gateway_arn
FROM aws.storagegateway.bandwidth_rate_limit_schedules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bandwidth_rate_limit_schedule"
    values={[
        { label: 'update_bandwidth_rate_limit_schedule', value: 'update_bandwidth_rate_limit_schedule' }
    ]}
>
<TabItem value="update_bandwidth_rate_limit_schedule">

Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3 file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate limits.

```sql
UPDATE aws.storagegateway.bandwidth_rate_limit_schedules
SET 
GatewayARN = '{{ GatewayARN }}',
BandwidthRateLimitIntervals = '{{ BandwidthRateLimitIntervals }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND BandwidthRateLimitIntervals = '{{ BandwidthRateLimitIntervals }}' --required
RETURNING
gateway_arn;
```
</TabItem>
</Tabs>
