--- 
title: workload_estimate_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - workload_estimate_usages
  - bcm_pricing_calculator
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

Creates, updates, deletes, gets or lists a <code>workload_estimate_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workload_estimate_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_pricing_calculator.workload_estimate_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_workload_estimate_usage"
    values={[
        { label: 'list_workload_estimate_usage', value: 'list_workload_estimate_usage' }
    ]}
>
<TabItem value="list_workload_estimate_usage">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this usage item. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cost" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated cost for this usage item.</td>
</tr>
<tr>
    <td><CopyableCode code="currency" /></td>
    <td><code>string</code></td>
    <td>The currency of the estimated cost. (USD)</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>The group identifier for this usage item. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="historicalUsage" /></td>
    <td><code>object</code></td>
    <td>Historical usage data associated with this item, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location associated with this usage item.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The specific operation associated with this usage item. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>object</code></td>
    <td>The estimated usage quantity for this item.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceCode" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service code associated with this usage item. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this usage item. (VALID, INVALID, STALE)</td>
</tr>
<tr>
    <td><CopyableCode code="usageAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with this usage item. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usageType" /></td>
    <td><code>string</code></td>
    <td>The type of usage for this item. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_workload_estimate_usage"><CopyableCode code="list_workload_estimate_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the usage associated with a workload estimate.</td>
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
    defaultValue="list_workload_estimate_usage"
    values={[
        { label: 'list_workload_estimate_usage', value: 'list_workload_estimate_usage' }
    ]}
>
<TabItem value="list_workload_estimate_usage">

Lists the usage associated with a workload estimate.

```sql
SELECT
id,
cost,
currency,
group,
historicalUsage,
location,
operation,
quantity,
serviceCode,
status,
usageAccountId,
usageType
FROM aws.bcm_pricing_calculator.workload_estimate_usages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
