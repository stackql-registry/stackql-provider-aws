--- 
title: moving_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - moving_addresses
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

Creates, updates, deletes, gets or lists a <code>moving_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="moving_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.moving_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_moving_addresses"
    values={[
        { label: 'describe_moving_addresses', value: 'describe_moving_addresses' }
    ]}
>
<TabItem value="describe_moving_addresses">

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
    <td><CopyableCode code="move_status" /></td>
    <td><code>string</code></td>
    <td>The status of the Elastic IP address that's being moved or restored.</td>
</tr>
<tr>
    <td><CopyableCode code="public_ip" /></td>
    <td><code>string</code></td>
    <td>The Elastic IP address.</td>
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
    <td><a href="#describe_moving_addresses"><CopyableCode code="describe_moving_addresses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-PublicIp"><code>PublicIp</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>This action is deprecated. Describes your Elastic IP addresses that are being moved from or being restored to the EC2-Classic platform. This request does not return information about any other Elastic IP addresses in your account.</td>
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
    <td>One or more filters. moving-status - The status of the Elastic IP address (MovingToVpc | RestoringToClassic).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned NextToken value. This value can be between 5 and 1000; if MaxResults is given a value outside of this range, an error is returned. Default: If no value is provided, the default is 1000.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-PublicIp">
    <td><CopyableCode code="PublicIp" /></td>
    <td><code>array</code></td>
    <td>One or more Elastic IP addresses.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_moving_addresses"
    values={[
        { label: 'describe_moving_addresses', value: 'describe_moving_addresses' }
    ]}
>
<TabItem value="describe_moving_addresses">

This action is deprecated. Describes your Elastic IP addresses that are being moved from or being restored to the EC2-Classic platform. This request does not return information about any other Elastic IP addresses in your account.

```sql
SELECT
move_status,
public_ip
FROM aws.ec2.moving_addresses
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND PublicIp = '{{ PublicIp }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
