--- 
title: aggregate_log_group_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregate_log_group_summaries
  - logs
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

Creates, updates, deletes, gets or lists an <code>aggregate_log_group_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aggregate_log_group_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.aggregate_log_group_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_aggregate_log_group_summaries"
    values={[
        { label: 'list_aggregate_log_group_summaries', value: 'list_aggregate_log_group_summaries' }
    ]}
>
<TabItem value="list_aggregate_log_group_summaries">

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
    <td><CopyableCode code="groupingIdentifiers" /></td>
    <td><code>array</code></td>
    <td>An array of key-value pairs that identify the data source characteristics used to group the log groups. The size and content of this array depends on the groupBy parameter specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="logGroupCount" /></td>
    <td><code>integer</code></td>
    <td>The number of log groups in this aggregate summary group.</td>
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
    <td><a href="#list_aggregate_log_group_summaries"><CopyableCode code="list_aggregate_log_group_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an aggregate summary of all log groups in the Region grouped by specified data source characteristics. Supports optional filtering by log group class, name patterns, and data sources. If you perform this action in a monitoring account, you can also return aggregated summaries of log groups from source accounts that are linked to the monitoring account. For more information about using cross-account observability to set up monitoring accounts and source accounts, see CloudWatch cross-account observability. The operation aggregates log groups by data source name and type and optionally format, providing counts of log groups that share these characteristics. The operation paginates results. By default, it returns up to 50 results and includes a token to retrieve more results.</td>
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
    defaultValue="list_aggregate_log_group_summaries"
    values={[
        { label: 'list_aggregate_log_group_summaries', value: 'list_aggregate_log_group_summaries' }
    ]}
>
<TabItem value="list_aggregate_log_group_summaries">

Returns an aggregate summary of all log groups in the Region grouped by specified data source characteristics. Supports optional filtering by log group class, name patterns, and data sources. If you perform this action in a monitoring account, you can also return aggregated summaries of log groups from source accounts that are linked to the monitoring account. For more information about using cross-account observability to set up monitoring accounts and source accounts, see CloudWatch cross-account observability. The operation aggregates log groups by data source name and type and optionally format, providing counts of log groups that share these characteristics. The operation paginates results. By default, it returns up to 50 results and includes a token to retrieve more results.

```sql
SELECT
groupingIdentifiers,
logGroupCount
FROM aws.logs.aggregate_log_group_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
