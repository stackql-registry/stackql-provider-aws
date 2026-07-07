--- 
title: insights
hide_title: false
hide_table_of_contents: false
keywords:
  - insights
  - opensearch
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

Creates, updates, deletes, gets or lists an <code>insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_insights"
    values={[
        { label: 'list_insights', value: 'list_insights' }
    ]}
>
<TabItem value="list_insights">

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
    <td><CopyableCode code="Insights" /></td>
    <td><code>array</code></td>
    <td>The list of insights returned for the specified entity.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
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
    <td><a href="#list_insights"><CopyableCode code="list_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists insights for an Amazon OpenSearch Service domain or Amazon Web Services account. Returns a paginated list of insights based on the specified entity, filters, time range, and sort order.</td>
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
    defaultValue="list_insights"
    values={[
        { label: 'list_insights', value: 'list_insights' }
    ]}
>
<TabItem value="list_insights">

Lists insights for an Amazon OpenSearch Service domain or Amazon Web Services account. Returns a paginated list of insights based on the specified entity, filters, time range, and sort order.

```sql
SELECT
Insights,
NextToken
FROM aws.opensearch.insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
