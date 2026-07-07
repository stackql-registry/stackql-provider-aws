--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
  - ssm
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_nodes"
    values={[
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="list_nodes">

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
    <td><CopyableCode code="CaptureTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC timestamp for when the managed node data was last captured.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed node. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NodeType" /></td>
    <td><code>object</code></td>
    <td>Information about the type of node.</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>object</code></td>
    <td>Information about the ownership of the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="Region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that a managed node was created in or assigned to.</td>
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
    <td><a href="#list_nodes"><CopyableCode code="list_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Takes in filters and returns a list of managed nodes matching the filter criteria.</td>
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
    defaultValue="list_nodes"
    values={[
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="list_nodes">

Takes in filters and returns a list of managed nodes matching the filter criteria.

```sql
SELECT
CaptureTime,
Id,
NodeType,
Owner,
Region
FROM aws.ssm.nodes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
