--- 
title: free_tier_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - free_tier_usages
  - freetier
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

Creates, updates, deletes, gets or lists a <code>free_tier_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="free_tier_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.freetier.free_tier_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_free_tier_usage"
    values={[
        { label: 'get_free_tier_usage', value: 'get_free_tier_usage' }
    ]}
>
<TabItem value="get_free_tier_usage">

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
    <td><CopyableCode code="actual_usage_amount" /></td>
    <td><code>number (double)</code></td>
    <td>Describes the actual usage accrued month-to-day (MTD) that you've used so far.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Free Tier offer. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="forecasted_usage_amount" /></td>
    <td><code>number (double)</code></td>
    <td>Describes the forecasted usage by the month that you're expected to use.</td>
</tr>
<tr>
    <td><CopyableCode code="free_tier_type" /></td>
    <td><code>string</code></td>
    <td>Describes the type of the Free Tier offer. For example, the offer can be "12 Months Free", "Always Free", and "Free Trial". (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="limit" /></td>
    <td><code>number (double)</code></td>
    <td>Describes the maximum usage allowed in Free Tier.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Describes usageType more granularly with the specific Amazon Web Services service API operation. For example, this can be the RunInstances API operation for Amazon Elastic Compute Cloud. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Describes the Amazon Web Services Region for which this offer is applicable (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services service providing the Free Tier offer. For example, this can be Amazon Elastic Compute Cloud. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>Describes the unit of the usageType, such as Hrs. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_type" /></td>
    <td><code>string</code></td>
    <td>Describes the usage details of the offer. For example, this might be Global-BoxUsage:freetrial. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_free_tier_usage"><CopyableCode code="get_free_tier_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all Free Tier usage objects that match your filters.</td>
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
    defaultValue="get_free_tier_usage"
    values={[
        { label: 'get_free_tier_usage', value: 'get_free_tier_usage' }
    ]}
>
<TabItem value="get_free_tier_usage">

Returns a list of all Free Tier usage objects that match your filters.

```sql
SELECT
actual_usage_amount,
description,
forecasted_usage_amount,
free_tier_type,
limit,
operation,
region,
service,
unit,
usage_type
FROM aws.freetier.free_tier_usages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
