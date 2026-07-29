--- 
title: query_suggestions
hide_title: false
hide_table_of_contents: false
keywords:
  - query_suggestions
  - kendra
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

Creates, updates, deletes, gets or lists a <code>query_suggestions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_suggestions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.query_suggestions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_suggestions"
    values={[
        { label: 'get_query_suggestions', value: 'get_query_suggestions' }
    ]}
>
<TabItem value="get_query_suggestions">

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
    <td><CopyableCode code="query_suggestions_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for a list of query suggestions for an index.</td>
</tr>
<tr>
    <td><CopyableCode code="suggestions" /></td>
    <td><code>array</code></td>
    <td>A list of query suggestions for an index.</td>
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
    <td><a href="#get_query_suggestions"><CopyableCode code="get_query_suggestions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetches the queries that are suggested to your users. GetQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
</tr>
<tr>
    <td><a href="#clear_query_suggestions"><CopyableCode code="clear_query_suggestions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Clears existing query suggestions from an index. This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions. ClearQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
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
    defaultValue="get_query_suggestions"
    values={[
        { label: 'get_query_suggestions', value: 'get_query_suggestions' }
    ]}
>
<TabItem value="get_query_suggestions">

Fetches the queries that are suggested to your users. GetQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
SELECT
query_suggestions_id,
suggestions
FROM aws.kendra.query_suggestions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="clear_query_suggestions"
    values={[
        { label: 'clear_query_suggestions', value: 'clear_query_suggestions' }
    ]}
>
<TabItem value="clear_query_suggestions">

Clears existing query suggestions from an index. This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions. ClearQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
EXEC aws.kendra.query_suggestions.clear_query_suggestions 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}"
}'
;
```
</TabItem>
</Tabs>
