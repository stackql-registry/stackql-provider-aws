--- 
title: dedicated_ips
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_ips
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>dedicated_ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.dedicated_ips" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dedicated_ip"
    values={[
        { label: 'get_dedicated_ip', value: 'get_dedicated_ip' },
        { label: 'get_dedicated_ips', value: 'get_dedicated_ips' }
    ]}
>
<TabItem value="get_dedicated_ip">

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
    <td><CopyableCode code="Ip" /></td>
    <td><code>string</code></td>
    <td>An IPv4 address.</td>
</tr>
<tr>
    <td><CopyableCode code="PoolName" /></td>
    <td><code>string</code></td>
    <td>The name of a dedicated IP pool.</td>
</tr>
<tr>
    <td><CopyableCode code="WarmupPercentage" /></td>
    <td><code>integer</code></td>
    <td>Indicates the progress of your dedicated IP warm-up: 0-100 – For standard dedicated IP addresses, this shows the warm-up completion percentage. A value of 100 means the IP address is fully warmed up and ready for use. -1 – Appears for IP addresses in managed dedicated pools where Amazon SES automatically handles the warm-up process, making the percentage not applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="WarmupStatus" /></td>
    <td><code>string</code></td>
    <td>The warm-up status of a dedicated IP address. The status can have one of the following values: IN_PROGRESS – The IP address isn't ready to use because the dedicated IP warm-up process is ongoing. DONE – The dedicated IP warm-up process is complete, and the IP address is ready to use. NOT_APPLICABLE – The warm-up status doesn't apply to this IP address. This status is used for IP addresses in managed dedicated IP pools, where Amazon SES automatically handles the warm-up process. (IN_PROGRESS, DONE, NOT_APPLICABLE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_dedicated_ips">

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
    <td><CopyableCode code="DedicatedIps" /></td>
    <td><code>array</code></td>
    <td>A list of dedicated IP addresses that are associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates that there are additional dedicated IP addresses to list. To view additional addresses, issue another request to GetDedicatedIps, passing this token in the NextToken parameter.</td>
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
    <td><a href="#get_dedicated_ip"><CopyableCode code="get_dedicated_ip" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.</td>
</tr>
<tr>
    <td><a href="#get_dedicated_ips"><CopyableCode code="get_dedicated_ips" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PoolName"><code>PoolName</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>List the dedicated IP addresses that are associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#put_dedicated_ip_in_pool"><CopyableCode code="put_dedicated_ip_in_pool" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationPoolName"><code>DestinationPoolName</code></a></td>
    <td></td>
    <td>Move a dedicated IP address to an existing dedicated IP pool. The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. The dedicated IP pool you specify must already exist. You can create a new pool by using the CreateDedicatedIpPool operation.</td>
</tr>
<tr>
    <td><a href="#put_dedicated_ip_warmup_attributes"><CopyableCode code="put_dedicated_ip_warmup_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WarmupPercentage"><code>WarmupPercentage</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string</code></td>
    <td>The dedicated IP address that you want to update the warm-up attributes for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to GetDedicatedIps to indicate the position of the dedicated IP pool in the list of IP pools.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results to show in a single call to GetDedicatedIpsRequest. If the number of results is larger than the number you specified in this parameter, then the response includes a NextToken element, which you can use to obtain additional results.</td>
</tr>
<tr id="parameter-PoolName">
    <td><CopyableCode code="PoolName" /></td>
    <td><code>string</code></td>
    <td>The name of the IP pool that the dedicated IP address is associated with.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dedicated_ip"
    values={[
        { label: 'get_dedicated_ip', value: 'get_dedicated_ip' },
        { label: 'get_dedicated_ips', value: 'get_dedicated_ips' }
    ]}
>
<TabItem value="get_dedicated_ip">

Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.

```sql
SELECT
Ip,
PoolName,
WarmupPercentage,
WarmupStatus
FROM aws.sesv2.dedicated_ips
WHERE ip = '{{ ip }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_dedicated_ips">

List the dedicated IP addresses that are associated with your Amazon Web Services account.

```sql
SELECT
DedicatedIps,
NextToken
FROM aws.sesv2.dedicated_ips
WHERE region = '{{ region }}' -- required
AND PoolName = '{{ PoolName }}'
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_dedicated_ip_in_pool"
    values={[
        { label: 'put_dedicated_ip_in_pool', value: 'put_dedicated_ip_in_pool' },
        { label: 'put_dedicated_ip_warmup_attributes', value: 'put_dedicated_ip_warmup_attributes' }
    ]}
>
<TabItem value="put_dedicated_ip_in_pool">

Move a dedicated IP address to an existing dedicated IP pool. The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. The dedicated IP pool you specify must already exist. You can create a new pool by using the CreateDedicatedIpPool operation.

```sql
REPLACE aws.sesv2.dedicated_ips
SET 
DestinationPoolName = '{{ DestinationPoolName }}'
WHERE 
ip = '{{ ip }}' --required
AND region = '{{ region }}' --required
AND DestinationPoolName = '{{ DestinationPoolName }}' --required;
```
</TabItem>
<TabItem value="put_dedicated_ip_warmup_attributes">

No description available.

```sql
REPLACE aws.sesv2.dedicated_ips
SET 
WarmupPercentage = {{ WarmupPercentage }}
WHERE 
ip = '{{ ip }}' --required
AND region = '{{ region }}' --required
AND WarmupPercentage = '{{ WarmupPercentage }}' --required;
```
</TabItem>
</Tabs>
