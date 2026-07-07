--- 
title: outpost_lags
hide_title: false
hide_table_of_contents: false
keywords:
  - outpost_lags
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

Creates, updates, deletes, gets or lists an <code>outpost_lags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outpost_lags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.outpost_lags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_outpost_lags"
    values={[
        { label: 'describe_outpost_lags', value: 'describe_outpost_lags' }
    ]}
>
<TabItem value="describe_outpost_lags">

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
    <td><CopyableCode code="LocalGatewayVirtualInterfaceIds" /></td>
    <td><code>string</code></td>
    <td>The IDs of the local gateway virtual interfaces associated with the Outpost LAG.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the Outpost LAG.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostLagId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost LAG.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost LAG owner.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceLinkVirtualInterfaceIds" /></td>
    <td><code>string</code></td>
    <td>The service link virtual interface IDs associated with the Outpost LAG.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the Outpost LAG.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags associated with the Outpost LAG.</td>
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
    <td><a href="#describe_outpost_lags"><CopyableCode code="describe_outpost_lags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OutpostLagId"><code>OutpostLagId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the Outposts link aggregation groups (LAGs). LAGs are only available for second-generation Outposts racks at this time.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters to use for narrowing down the request. The following filters are supported: service-link-virtual-interface-id - The ID of the service link virtual interface. service-link-virtual-interface-arn - The ARN of the service link virtual interface. outpost-id - The Outpost ID. outpost-arn - The Outpost ARN. owner-id - The ID of the Amazon Web Services account that owns the service link virtual interface. vlan - The ID of the address pool. local-address - The local address. peer-address - The peer address. peer-bgp-asn - The peer BGP ASN. outpost-lag-id - The Outpost LAG ID. configuration-state - The configuration state of the service link virtual interface.</td>
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
<tr id="parameter-OutpostLagId">
    <td><CopyableCode code="OutpostLagId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Outpost LAGs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_outpost_lags"
    values={[
        { label: 'describe_outpost_lags', value: 'describe_outpost_lags' }
    ]}
>
<TabItem value="describe_outpost_lags">

Describes the Outposts link aggregation groups (LAGs). LAGs are only available for second-generation Outposts racks at this time.

```sql
SELECT
LocalGatewayVirtualInterfaceIds,
OutpostArn,
OutpostLagId,
OwnerId,
ServiceLinkVirtualInterfaceIds,
State,
Tags
FROM aws.ec2.outpost_lags
WHERE region = '{{ region }}' -- required
AND OutpostLagId = '{{ OutpostLagId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
