--- 
title: records
hide_title: false
hide_table_of_contents: false
keywords:
  - records
  - keyspacesstreams
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

Creates, updates, deletes, gets or lists a <code>records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.keyspacesstreams.records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_records"
    values={[
        { label: 'get_records', value: 'get_records' }
    ]}
>
<TabItem value="get_records">

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
    <td><CopyableCode code="change_records" /></td>
    <td><code>array</code></td>
    <td>An array of change data records retrieved from the specified shard. Each record represents a single data modification (insert, update, or delete) to a row in the Amazon Keyspaces table. Records include the primary key columns and information about what data was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="iterator_description" /></td>
    <td><code>object</code></td>
    <td>Provides information about the current iterator at the time GetRecords request was processed by Keyspaces.</td>
</tr>
<tr>
    <td><CopyableCode code="next_shard_iterator" /></td>
    <td><code>string</code></td>
    <td>The next position in the shard from which to start sequentially reading data records. If null, the shard has been closed and the requested iterator will not return any more data.</td>
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
    <td><a href="#get_records"><CopyableCode code="get_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves data records from a specified shard in an Amazon Keyspaces data stream. This operation returns a collection of data records from the shard, including the primary key columns and information about modifications made to the captured table data. Each record represents a single data modification in the Amazon Keyspaces table and includes metadata about when the change occurred.</td>
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
    defaultValue="get_records"
    values={[
        { label: 'get_records', value: 'get_records' }
    ]}
>
<TabItem value="get_records">

Retrieves data records from a specified shard in an Amazon Keyspaces data stream. This operation returns a collection of data records from the shard, including the primary key columns and information about modifications made to the captured table data. Each record represents a single data modification in the Amazon Keyspaces table and includes metadata about when the change occurred.

```sql
SELECT
change_records,
iterator_description,
next_shard_iterator
FROM aws.keyspacesstreams.records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
