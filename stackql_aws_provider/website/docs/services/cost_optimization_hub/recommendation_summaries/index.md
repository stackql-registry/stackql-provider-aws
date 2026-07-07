--- 
title: recommendation_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendation_summaries
  - cost_optimization_hub
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

Creates, updates, deletes, gets or lists a <code>recommendation_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendation_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cost_optimization_hub.recommendation_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommendation_summaries"
    values={[
        { label: 'list_recommendation_summaries', value: 'list_recommendation_summaries' }
    ]}
>
<TabItem value="list_recommendation_summaries">

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
    <td><CopyableCode code="estimatedMonthlySavings" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated total savings resulting from modifications, on a monthly basis.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>The grouping of recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendationCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of instance recommendations.</td>
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
    <td><a href="#list_recommendation_summaries"><CopyableCode code="list_recommendation_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a concise representation of savings estimates for resources. Also returns de-duped savings across different types of recommendations. The following filters are not supported for this API: recommendationIds, resourceArns, and resourceIds.</td>
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
    defaultValue="list_recommendation_summaries"
    values={[
        { label: 'list_recommendation_summaries', value: 'list_recommendation_summaries' }
    ]}
>
<TabItem value="list_recommendation_summaries">

Returns a concise representation of savings estimates for resources. Also returns de-duped savings across different types of recommendations. The following filters are not supported for this API: recommendationIds, resourceArns, and resourceIds.

```sql
SELECT
estimatedMonthlySavings,
group,
recommendationCount
FROM aws.cost_optimization_hub.recommendation_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
