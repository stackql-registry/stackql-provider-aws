--- 
title: bandwidth_rate_limit_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - bandwidth_rate_limit_schedules
  - backup_gateway
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup_gateway.bandwidth_rate_limit_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bandwidth_rate_limit_schedule"
    values={[
        { label: 'get_bandwidth_rate_limit_schedule', value: 'get_bandwidth_rate_limit_schedule' }
    ]}
>
<TabItem value="get_bandwidth_rate_limit_schedule">

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
    <td><CopyableCode code="BandwidthRateLimitIntervals" /></td>
    <td><code>array</code></td>
    <td>An array containing bandwidth rate limit schedule intervals for a gateway. When no bandwidth rate limit intervals have been scheduled, the array is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):backup-gateway(:&#91;a-zA-Z-0-9&#93;+)&#123;3&#125;\/&#91;a-zA-Z-0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_bandwidth_rate_limit_schedule"><CopyableCode code="get_bandwidth_rate_limit_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.</td>
</tr>
<tr>
    <td><a href="#put_bandwidth_rate_limit_schedule"><CopyableCode code="put_bandwidth_rate_limit_schedule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayArn"><code>GatewayArn</code></a>, <a href="#parameter-BandwidthRateLimitIntervals"><code>BandwidthRateLimitIntervals</code></a></td>
    <td></td>
    <td>This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.</td>
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
    defaultValue="get_bandwidth_rate_limit_schedule"
    values={[
        { label: 'get_bandwidth_rate_limit_schedule', value: 'get_bandwidth_rate_limit_schedule' }
    ]}
>
<TabItem value="get_bandwidth_rate_limit_schedule">

Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.

```sql
SELECT
BandwidthRateLimitIntervals,
GatewayArn
FROM aws.backup_gateway.bandwidth_rate_limit_schedules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bandwidth_rate_limit_schedule"
    values={[
        { label: 'put_bandwidth_rate_limit_schedule', value: 'put_bandwidth_rate_limit_schedule' }
    ]}
>
<TabItem value="put_bandwidth_rate_limit_schedule">

This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.

```sql
REPLACE aws.backup_gateway.bandwidth_rate_limit_schedules
SET 
GatewayArn = '{{ GatewayArn }}',
BandwidthRateLimitIntervals = '{{ BandwidthRateLimitIntervals }}'
WHERE 
region = '{{ region }}' --required
AND GatewayArn = '{{ GatewayArn }}' --required
AND BandwidthRateLimitIntervals = '{{ BandwidthRateLimitIntervals }}' --required
RETURNING
GatewayArn;
```
</TabItem>
</Tabs>
