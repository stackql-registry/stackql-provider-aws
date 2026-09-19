--- 
title: items
hide_title: false
hide_table_of_contents: false
keywords:
  - items
  - sdb
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

Creates, updates, deletes, gets or lists an <code>items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sdb.items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#query_items"><CopyableCode code="query_items" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SelectExpression"><code>SelectExpression</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-ConsistentRead"><code>ConsistentRead</code></a></td>
    <td>The Select operation returns a set of attributes for ItemNames that match the select expression. Select is similar to the standard SQL SELECT statement. The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate NextToken so the client can access the next page of results. For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide.</td>
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
<tr id="parameter-SelectExpression">
    <td><CopyableCode code="SelectExpression" /></td>
    <td><code>string</code></td>
    <td>The expression used to query the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConsistentRead">
    <td><CopyableCode code="ConsistentRead" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If true, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A string informing Amazon SimpleDB where to start the next list of ItemNames.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="query_items"
    values={[
        { label: 'query_items', value: 'query_items' }
    ]}
>
<TabItem value="query_items">

The Select operation returns a set of attributes for ItemNames that match the select expression. Select is similar to the standard SQL SELECT statement. The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate NextToken so the client can access the next page of results. For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide.

```sql
EXEC aws.sdb.items.query_items 
@SelectExpression='{{ SelectExpression }}' --required, 
@region='{{ region }}' --required, 
@NextToken='{{ NextToken }}', 
@ConsistentRead={{ ConsistentRead }}
;
```
</TabItem>
</Tabs>
