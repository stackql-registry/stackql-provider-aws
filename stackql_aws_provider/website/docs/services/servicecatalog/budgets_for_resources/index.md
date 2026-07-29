--- 
title: budgets_for_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - budgets_for_resources
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>budgets_for_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budgets_for_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.budgets_for_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_budgets_for_resource"
    values={[
        { label: 'list_budgets_for_resource', value: 'list_budgets_for_resource' }
    ]}
>
<TabItem value="list_budgets_for_resource">

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
    <td><CopyableCode code="budgets" /></td>
    <td><code>array</code></td>
    <td>Information about the associated budgets.</td>
</tr>
<tr>
    <td><CopyableCode code="next_page_token" /></td>
    <td><code>string</code></td>
    <td>The page token to use to retrieve the next set of results. If there are no additional results, this value is null. (pattern: &lt;code&gt;&#91;\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_budgets_for_resource"><CopyableCode code="list_budgets_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the budgets associated to the specified resource.</td>
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
    defaultValue="list_budgets_for_resource"
    values={[
        { label: 'list_budgets_for_resource', value: 'list_budgets_for_resource' }
    ]}
>
<TabItem value="list_budgets_for_resource">

Lists all the budgets associated to the specified resource.

```sql
SELECT
budgets,
next_page_token
FROM aws.servicecatalog.budgets_for_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
