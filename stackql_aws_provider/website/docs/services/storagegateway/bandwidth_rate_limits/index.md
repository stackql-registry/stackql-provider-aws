--- 
title: bandwidth_rate_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - bandwidth_rate_limits
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

Creates, updates, deletes, gets or lists a <code>bandwidth_rate_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bandwidth_rate_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.bandwidth_rate_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bandwidth_rate_limit"
    values={[
        { label: 'describe_bandwidth_rate_limit', value: 'describe_bandwidth_rate_limit' }
    ]}
>
<TabItem value="describe_bandwidth_rate_limit">

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
    <td><CopyableCode code="average_download_rate_limit_in_bits_per_sec" /></td>
    <td><code>integer (int64)</code></td>
    <td>The average download bandwidth rate limit in bits per second. This field does not appear in the response if the download rate limit is not set.</td>
</tr>
<tr>
    <td><CopyableCode code="average_upload_rate_limit_in_bits_per_sec" /></td>
    <td><code>integer (int64)</code></td>
    <td>The average upload bandwidth rate limit in bits per second. This field does not appear in the response if the upload rate limit is not set.</td>
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
    <td><a href="#describe_bandwidth_rate_limit"><CopyableCode code="describe_bandwidth_rate_limit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file gateways, use DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</td>
</tr>
<tr>
    <td><a href="#update_bandwidth_rate_limit"><CopyableCode code="update_bandwidth_rate_limit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported only for the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</td>
</tr>
<tr>
    <td><a href="#delete_bandwidth_rate_limit"><CopyableCode code="delete_bandwidth_rate_limit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only for the stored volume, cached volume, and tape gateway types.</td>
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
    defaultValue="describe_bandwidth_rate_limit"
    values={[
        { label: 'describe_bandwidth_rate_limit', value: 'describe_bandwidth_rate_limit' }
    ]}
>
<TabItem value="describe_bandwidth_rate_limit">

Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file gateways, use DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

```sql
SELECT
average_download_rate_limit_in_bits_per_sec,
average_upload_rate_limit_in_bits_per_sec,
gateway_arn
FROM aws.storagegateway.bandwidth_rate_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bandwidth_rate_limit"
    values={[
        { label: 'update_bandwidth_rate_limit', value: 'update_bandwidth_rate_limit' }
    ]}
>
<TabItem value="update_bandwidth_rate_limit">

Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported only for the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.

```sql
UPDATE aws.storagegateway.bandwidth_rate_limits
SET 
GatewayARN = '{{ GatewayARN }}',
AverageUploadRateLimitInBitsPerSec = {{ AverageUploadRateLimitInBitsPerSec }},
AverageDownloadRateLimitInBitsPerSec = {{ AverageDownloadRateLimitInBitsPerSec }}
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
RETURNING
gateway_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bandwidth_rate_limit"
    values={[
        { label: 'delete_bandwidth_rate_limit', value: 'delete_bandwidth_rate_limit' }
    ]}
>
<TabItem value="delete_bandwidth_rate_limit">

Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only for the stored volume, cached volume, and tape gateway types.

```sql
DELETE FROM aws.storagegateway.bandwidth_rate_limits
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
