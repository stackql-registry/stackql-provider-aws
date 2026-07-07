--- 
title: cost_and_usage_with_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_and_usage_with_resources
  - ce
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

Creates, updates, deletes, gets or lists a <code>cost_and_usage_with_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_and_usage_with_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.cost_and_usage_with_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_and_usage_with_resources"
    values={[
        { label: 'get_cost_and_usage_with_resources', value: 'get_cost_and_usage_with_resources' }
    ]}
>
<TabItem value="get_cost_and_usage_with_resources">

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
    <td><CopyableCode code="DimensionValueAttributes" /></td>
    <td><code>array</code></td>
    <td>The attributes that apply to a specific dimension value. For example, if the value is a linked account, the attribute is that account name.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupDefinitions" /></td>
    <td><code>array</code></td>
    <td>The groups that are specified by the Filter or GroupBy parameters in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="NextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResultsByTime" /></td>
    <td><code>array</code></td>
    <td>The time period that's covered by the results in the response.</td>
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
    <td><a href="#get_cost_and_usage_with_resources"><CopyableCode code="get_cost_and_usage_with_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Management account in an organization in Organizations have access to all member accounts. Hourly granularity is only available for EC2-Instances (Elastic Compute Cloud) resource-level data. All other resource-level data is available at daily granularity. This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see Controlling Access for Cost Explorer in the Billing and Cost Management User Guide.</td>
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
    defaultValue="get_cost_and_usage_with_resources"
    values={[
        { label: 'get_cost_and_usage_with_resources', value: 'get_cost_and_usage_with_resources' }
    ]}
>
<TabItem value="get_cost_and_usage_with_resources">

Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Management account in an organization in Organizations have access to all member accounts. Hourly granularity is only available for EC2-Instances (Elastic Compute Cloud) resource-level data. All other resource-level data is available at daily granularity. This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see Controlling Access for Cost Explorer in the Billing and Cost Management User Guide.

```sql
SELECT
DimensionValueAttributes,
GroupDefinitions,
NextPageToken,
ResultsByTime
FROM aws.ce.cost_and_usage_with_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
