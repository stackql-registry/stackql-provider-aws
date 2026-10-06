--- 
title: aws_network_performance_metric_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_network_performance_metric_subscriptions
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

Creates, updates, deletes, gets or lists an <code>aws_network_performance_metric_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_network_performance_metric_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.aws_network_performance_metric_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_aws_network_performance_metric_subscriptions"
    values={[
        { label: 'describe_aws_network_performance_metric_subscriptions', value: 'describe_aws_network_performance_metric_subscriptions' }
    ]}
>
<TabItem value="describe_aws_network_performance_metric_subscriptions">

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
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>The Region or Availability Zone that's the target for the subscription. For example, eu-west-1.</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>string</code></td>
    <td>The metric used for the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>The data aggregation time for the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The Region or Availability Zone that's the source for the subscription. For example, us-east-1.</td>
</tr>
<tr>
    <td><CopyableCode code="statistic" /></td>
    <td><code>string</code></td>
    <td>The statistic used for the subscription.</td>
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
    <td><a href="#describe_aws_network_performance_metric_subscriptions"><CopyableCode code="describe_aws_network_performance_metric_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the current Infrastructure Performance metric subscriptions.</td>
</tr>
<tr>
    <td><a href="#disable_aws_network_performance_metric_subscription"><CopyableCode code="disable_aws_network_performance_metric_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-Destination"><code>Destination</code></a>, <a href="#parameter-Metric"><code>Metric</code></a>, <a href="#parameter-Statistic"><code>Statistic</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables Infrastructure Performance metric subscriptions.</td>
</tr>
<tr>
    <td><a href="#enable_aws_network_performance_metric_subscription"><CopyableCode code="enable_aws_network_performance_metric_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-Destination"><code>Destination</code></a>, <a href="#parameter-Metric"><code>Metric</code></a>, <a href="#parameter-Statistic"><code>Statistic</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables Infrastructure Performance subscriptions.</td>
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
<tr id="parameter-Destination">
    <td><CopyableCode code="Destination" /></td>
    <td><code>string</code></td>
    <td>The target Region (like us-east-2) or Availability Zone ID (like use2-az2) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-Metric">
    <td><CopyableCode code="Metric" /></td>
    <td><code>string</code></td>
    <td>The metric used for the enabled subscription.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The source Region (like us-east-1) or Availability Zone ID (like use1-az1) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.</td>
</tr>
<tr id="parameter-Statistic">
    <td><CopyableCode code="Statistic" /></td>
    <td><code>string</code></td>
    <td>The statistic used for the enabled subscription.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_aws_network_performance_metric_subscriptions"
    values={[
        { label: 'describe_aws_network_performance_metric_subscriptions', value: 'describe_aws_network_performance_metric_subscriptions' }
    ]}
>
<TabItem value="describe_aws_network_performance_metric_subscriptions">

Describes the current Infrastructure Performance metric subscriptions.

```sql
SELECT
destination,
metric,
period,
source,
statistic
FROM aws.ec2.aws_network_performance_metric_subscriptions
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_aws_network_performance_metric_subscription"
    values={[
        { label: 'disable_aws_network_performance_metric_subscription', value: 'disable_aws_network_performance_metric_subscription' },
        { label: 'enable_aws_network_performance_metric_subscription', value: 'enable_aws_network_performance_metric_subscription' }
    ]}
>
<TabItem value="disable_aws_network_performance_metric_subscription">

Disables Infrastructure Performance metric subscriptions.

```sql
EXEC aws.ec2.aws_network_performance_metric_subscriptions.disable_aws_network_performance_metric_subscription 
@region='{{ region }}' --required, 
@Source='{{ Source }}', 
@Destination='{{ Destination }}', 
@Metric='{{ Metric }}', 
@Statistic='{{ Statistic }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_aws_network_performance_metric_subscription">

Enables Infrastructure Performance subscriptions.

```sql
EXEC aws.ec2.aws_network_performance_metric_subscriptions.enable_aws_network_performance_metric_subscription 
@region='{{ region }}' --required, 
@Source='{{ Source }}', 
@Destination='{{ Destination }}', 
@Metric='{{ Metric }}', 
@Statistic='{{ Statistic }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
