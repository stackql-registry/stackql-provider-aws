--- 
title: graph_member_datasources
hide_title: false
hide_table_of_contents: false
keywords:
  - graph_member_datasources
  - detective
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

Creates, updates, deletes, gets or lists a <code>graph_member_datasources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="graph_member_datasources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.detective.graph_member_datasources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_graph_member_datasources"
    values={[
        { label: 'batch_get_graph_member_datasources', value: 'batch_get_graph_member_datasources' }
    ]}
>
<TabItem value="batch_get_graph_member_datasources">

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
    <td><CopyableCode code="member_datasources" /></td>
    <td><code>array</code></td>
    <td>Details on the status of data source packages for members of the behavior graph.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_accounts" /></td>
    <td><code>array</code></td>
    <td>Accounts that data source package information could not be retrieved for.</td>
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
    <td><a href="#batch_get_graph_member_datasources"><CopyableCode code="batch_get_graph_member_datasources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets data source package information for the behavior graph.</td>
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
    defaultValue="batch_get_graph_member_datasources"
    values={[
        { label: 'batch_get_graph_member_datasources', value: 'batch_get_graph_member_datasources' }
    ]}
>
<TabItem value="batch_get_graph_member_datasources">

Gets data source package information for the behavior graph.

```sql
SELECT
member_datasources,
unprocessed_accounts
FROM aws.detective.graph_member_datasources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
