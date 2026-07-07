--- 
title: cost_categories
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_categories
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

Creates, updates, deletes, gets or lists a <code>cost_categories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_categories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.cost_categories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_categories"
    values={[
        { label: 'get_cost_categories', value: 'get_cost_categories' }
    ]}
>
<TabItem value="get_cost_categories">

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
    <td><CopyableCode code="CostCategoryNames" /></td>
    <td><code>array</code></td>
    <td>The names of the cost categories.</td>
</tr>
<tr>
    <td><CopyableCode code="CostCategoryValues" /></td>
    <td><code>array</code></td>
    <td>The cost category values. If the CostCategoryName key isn't specified in the request, the CostCategoryValues fields aren't returned.</td>
</tr>
<tr>
    <td><CopyableCode code="NextPageToken" /></td>
    <td><code>string</code></td>
    <td>If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReturnSize" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that are returned.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalSize" /></td>
    <td><code>integer</code></td>
    <td>The total number of objects.</td>
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
    <td><a href="#get_cost_categories"><CopyableCode code="get_cost_categories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an array of cost category names and values incurred cost. If some cost category names and values are not associated with any cost, they will not be returned by this API.</td>
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
    defaultValue="get_cost_categories"
    values={[
        { label: 'get_cost_categories', value: 'get_cost_categories' }
    ]}
>
<TabItem value="get_cost_categories">

Retrieves an array of cost category names and values incurred cost. If some cost category names and values are not associated with any cost, they will not be returned by this API.

```sql
SELECT
CostCategoryNames,
CostCategoryValues,
NextPageToken,
ReturnSize,
TotalSize
FROM aws.ce.cost_categories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
