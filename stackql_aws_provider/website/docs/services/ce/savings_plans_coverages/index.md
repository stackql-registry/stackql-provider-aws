--- 
title: savings_plans_coverages
hide_title: false
hide_table_of_contents: false
keywords:
  - savings_plans_coverages
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

Creates, updates, deletes, gets or lists a <code>savings_plans_coverages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="savings_plans_coverages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.savings_plans_coverages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_savings_plans_coverage"
    values={[
        { label: 'get_savings_plans_coverage', value: 'get_savings_plans_coverage' }
    ]}
>
<TabItem value="get_savings_plans_coverage">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SavingsPlansCoverages" /></td>
    <td><code>array</code></td>
    <td>The amount of spend that your Savings Plans covered.</td>
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
    <td><a href="#get_savings_plans_coverage"><CopyableCode code="get_savings_plans_coverage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, cost categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions: LINKED_ACCOUNT REGION SERVICE INSTANCE_FAMILY To determine valid values for a dimension, use the GetDimensionValues operation.</td>
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
    defaultValue="get_savings_plans_coverage"
    values={[
        { label: 'get_savings_plans_coverage', value: 'get_savings_plans_coverage' }
    ]}
>
<TabItem value="get_savings_plans_coverage">

Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, cost categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions: LINKED_ACCOUNT REGION SERVICE INSTANCE_FAMILY To determine valid values for a dimension, use the GetDimensionValues operation.

```sql
SELECT
NextToken,
SavingsPlansCoverages
FROM aws.ce.savings_plans_coverages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
