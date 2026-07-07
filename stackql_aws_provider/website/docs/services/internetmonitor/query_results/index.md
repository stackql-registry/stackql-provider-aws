--- 
title: query_results
hide_title: false
hide_table_of_contents: false
keywords:
  - query_results
  - internetmonitor
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

Creates, updates, deletes, gets or lists a <code>query_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.internetmonitor.query_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_results"
    values={[
        { label: 'get_query_results', value: 'get_query_results' }
    ]}
>
<TabItem value="get_query_results">

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
    <td><CopyableCode code="Data" /></td>
    <td><code>array</code></td>
    <td>The data results that the query returns. Data is returned in arrays, aligned with the Fields for the query, which creates a repository of Amazon CloudWatch Internet Monitor information for your application. Then, you can filter the information in the repository by using FilterParameters that you define.</td>
</tr>
<tr>
    <td><CopyableCode code="Fields" /></td>
    <td><code>array</code></td>
    <td>The fields that the query returns data for. Fields are name-data type pairs, such as availability_score-float.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
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
    <td><a href="#get_query_results"><CopyableCode code="get_query_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Return the data for a query with the Amazon CloudWatch Internet Monitor query interface. Specify the query that you want to return results for by providing a QueryId and a monitor name. For more information about using the query interface, including examples, see Using the Amazon CloudWatch Internet Monitor query interface in the Amazon CloudWatch Internet Monitor User Guide.</td>
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
<tr id="parameter-monitor_name">
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor to return data for.</td>
</tr>
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the query that you want to return data results for. A QueryId is an internally-generated identifier for a specific query.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of query results that you want to return with this call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_query_results"
    values={[
        { label: 'get_query_results', value: 'get_query_results' }
    ]}
>
<TabItem value="get_query_results">

Return the data for a query with the Amazon CloudWatch Internet Monitor query interface. Specify the query that you want to return results for by providing a QueryId and a monitor name. For more information about using the query interface, including examples, see Using the Amazon CloudWatch Internet Monitor query interface in the Amazon CloudWatch Internet Monitor User Guide.

```sql
SELECT
Data,
Fields,
NextToken
FROM aws.internetmonitor.query_results
WHERE monitor_name = '{{ monitor_name }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
