--- 
title: associated_ipv6_pool_cidrs
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_ipv6_pool_cidrs
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

Creates, updates, deletes, gets or lists an <code>associated_ipv6_pool_cidrs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_ipv6_pool_cidrs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.associated_ipv6_pool_cidrs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_associated_ipv6_pool_cidrs"
    values={[
        { label: 'get_associated_ipv6_pool_cidrs', value: 'get_associated_ipv6_pool_cidrs' }
    ]}
>
<TabItem value="get_associated_ipv6_pool_cidrs">

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
    <td><CopyableCode code="associated_resource" /></td>
    <td><code>string</code></td>
    <td>The resource that's associated with the IPv6 CIDR block.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_cidr" /></td>
    <td><code>string</code></td>
    <td>The IPv6 CIDR block.</td>
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
    <td><a href="#get_associated_ipv6_pool_cidrs"><CopyableCode code="get_associated_ipv6_pool_cidrs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.</td>
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
    <td>The ID of the IPv6 address pool.</td>
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
    defaultValue="get_associated_ipv6_pool_cidrs"
    values={[
        { label: 'get_associated_ipv6_pool_cidrs', value: 'get_associated_ipv6_pool_cidrs' }
    ]}
>
<TabItem value="get_associated_ipv6_pool_cidrs">

Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.

```sql
SELECT
associated_resource,
ipv_6_cidr
FROM aws.ec2.associated_ipv6_pool_cidrs
WHERE PoolId = '{{ PoolId }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
