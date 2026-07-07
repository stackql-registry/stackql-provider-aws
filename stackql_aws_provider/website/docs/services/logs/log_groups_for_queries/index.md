--- 
title: log_groups_for_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - log_groups_for_queries
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

Creates, updates, deletes, gets or lists a <code>log_groups_for_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_groups_for_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.log_groups_for_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_log_groups_for_query"
    values={[
        { label: 'list_log_groups_for_query', value: 'list_log_groups_for_query' }
    ]}
>
<TabItem value="list_log_groups_for_query">

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
    <td><CopyableCode code="log_group_identifier" /></td>
    <td><code>string</code></td>
    <td>An array of the names and ARNs of the log groups that were processed in the query.</td>
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
    <td><a href="#list_log_groups_for_query"><CopyableCode code="list_log_groups_for_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the log groups that were analyzed during a single CloudWatch Logs Insights query. This can be useful for queries that use log group name prefixes or the filterIndex command, because the log groups are dynamically selected in these cases. For more information about field indexes, see Create field indexes to improve query performance and reduce costs.</td>
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
    defaultValue="list_log_groups_for_query"
    values={[
        { label: 'list_log_groups_for_query', value: 'list_log_groups_for_query' }
    ]}
>
<TabItem value="list_log_groups_for_query">

Returns a list of the log groups that were analyzed during a single CloudWatch Logs Insights query. This can be useful for queries that use log group name prefixes or the filterIndex command, because the log groups are dynamically selected in these cases. For more information about field indexes, see Create field indexes to improve query performance and reduce costs.

```sql
SELECT
log_group_identifier
FROM aws.logs.log_groups_for_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
