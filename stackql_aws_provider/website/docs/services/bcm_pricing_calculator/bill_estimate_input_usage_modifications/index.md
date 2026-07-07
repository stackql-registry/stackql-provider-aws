--- 
title: bill_estimate_input_usage_modifications
hide_title: false
hide_table_of_contents: false
keywords:
  - bill_estimate_input_usage_modifications
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

Creates, updates, deletes, gets or lists a <code>bill_estimate_input_usage_modifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bill_estimate_input_usage_modifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_pricing_calculator.bill_estimate_input_usage_modifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bill_estimate_input_usage_modifications"
    values={[
        { label: 'list_bill_estimate_input_usage_modifications', value: 'list_bill_estimate_input_usage_modifications' }
    ]}
>
<TabItem value="list_bill_estimate_input_usage_modifications">

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
    <td>The unique identifier of the usage modification. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityZone" /></td>
    <td><code>string</code></td>
    <td>The availability zone associated with this usage modification, if applicable. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>The group identifier for the usage modification. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="historicalUsage" /></td>
    <td><code>object</code></td>
    <td>Historical usage data associated with this modification, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location associated with this usage modification.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The specific operation associated with this usage modification. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quantities" /></td>
    <td><code>array</code></td>
    <td>The modified usage quantities.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceCode" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service code for this usage modification. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usageAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with this usage modification. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usageType" /></td>
    <td><code>string</code></td>
    <td>The type of usage being modified. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9\.\-_:, \/()&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_bill_estimate_input_usage_modifications"><CopyableCode code="list_bill_estimate_input_usage_modifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the input usage modifications associated with a bill estimate.</td>
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
    defaultValue="list_bill_estimate_input_usage_modifications"
    values={[
        { label: 'list_bill_estimate_input_usage_modifications', value: 'list_bill_estimate_input_usage_modifications' }
    ]}
>
<TabItem value="list_bill_estimate_input_usage_modifications">

Lists the input usage modifications associated with a bill estimate.

```sql
SELECT
id,
availabilityZone,
group,
historicalUsage,
location,
operation,
quantities,
serviceCode,
usageAccountId,
usageType
FROM aws.bcm_pricing_calculator.bill_estimate_input_usage_modifications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
