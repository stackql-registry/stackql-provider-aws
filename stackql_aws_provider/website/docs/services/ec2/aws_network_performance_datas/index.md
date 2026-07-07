--- 
title: aws_network_performance_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_network_performance_datas
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

Creates, updates, deletes, gets or lists an <code>aws_network_performance_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_network_performance_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.aws_network_performance_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aws_network_performance_data"
    values={[
        { label: 'get_aws_network_performance_data', value: 'get_aws_network_performance_data' }
    ]}
>
<TabItem value="get_aws_network_performance_data">

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
    <td><CopyableCode code="Destination" /></td>
    <td><code>string</code></td>
    <td>The Region or Availability Zone that's the destination for the data query. For example, eu-west-1.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID passed in the DataQuery.</td>
</tr>
<tr>
    <td><CopyableCode code="Metric" /></td>
    <td><code>string</code></td>
    <td>The metric used for the network performance request.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricPoints" /></td>
    <td><code>string</code></td>
    <td>A list of MetricPoint objects.</td>
</tr>
<tr>
    <td><CopyableCode code="Period" /></td>
    <td><code>string</code></td>
    <td>The period used for the network performance request.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The Region or Availability Zone that's the source for the data query. For example, us-east-1.</td>
</tr>
<tr>
    <td><CopyableCode code="Statistic" /></td>
    <td><code>string</code></td>
    <td>The statistic used for the network performance request.</td>
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
    <td><a href="#get_aws_network_performance_data"><CopyableCode code="get_aws_network_performance_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DataQuery"><code>DataQuery</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets network performance data.</td>
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
<tr id="parameter-DataQuery">
    <td><CopyableCode code="DataQuery" /></td>
    <td><code>array</code></td>
    <td>A list of network performance data queries.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ending time for the performance data request. The end time must be formatted as yyyy-mm-ddThh:mm:ss. For example, 2022-06-12T12:00:00.000Z.</td>
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
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The starting time for the performance data request. The starting time must be formatted as yyyy-mm-ddThh:mm:ss. For example, 2022-06-10T12:00:00.000Z.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_aws_network_performance_data"
    values={[
        { label: 'get_aws_network_performance_data', value: 'get_aws_network_performance_data' }
    ]}
>
<TabItem value="get_aws_network_performance_data">

Gets network performance data.

```sql
SELECT
Destination,
Id,
Metric,
MetricPoints,
Period,
Source,
Statistic
FROM aws.ec2.aws_network_performance_datas
WHERE region = '{{ region }}' -- required
AND DataQuery = '{{ DataQuery }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
