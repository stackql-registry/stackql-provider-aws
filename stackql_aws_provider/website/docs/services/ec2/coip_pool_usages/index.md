--- 
title: coip_pool_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - coip_pool_usages
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

Creates, updates, deletes, gets or lists a <code>coip_pool_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="coip_pool_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.coip_pool_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_coip_pool_usage"
    values={[
        { label: 'get_coip_pool_usage', value: 'get_coip_pool_usage' }
    ]}
>
<TabItem value="get_coip_pool_usage">

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
    <td><CopyableCode code="CoipAddressUsages" /></td>
    <td><code>string</code></td>
    <td>Information about the address usage.</td>
</tr>
<tr>
    <td><CopyableCode code="CoipPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer-owned address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#get_coip_pool_usage"><CopyableCode code="get_coip_pool_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the allocations from the specified customer-owned address pool.</td>
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
<tr id="parameter-PoolId">
    <td><CopyableCode code="PoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the address pool.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. coip-address-usage.allocation-id - The allocation ID of the address. coip-address-usage.aws-account-id - The ID of the Amazon Web Services account that is using the customer-owned IP address. coip-address-usage.aws-service - The Amazon Web Services service that is using the customer-owned IP address. coip-address-usage.co-ip - The customer-owned IP address.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_coip_pool_usage"
    values={[
        { label: 'get_coip_pool_usage', value: 'get_coip_pool_usage' }
    ]}
>
<TabItem value="get_coip_pool_usage">

Describes the allocations from the specified customer-owned address pool.

```sql
SELECT
CoipAddressUsages,
CoipPoolId,
LocalGatewayRouteTableId,
NextToken
FROM aws.ec2.coip_pool_usages
WHERE PoolId = '{{ PoolId }}' -- required
AND region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
