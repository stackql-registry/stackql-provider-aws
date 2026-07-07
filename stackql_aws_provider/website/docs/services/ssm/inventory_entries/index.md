--- 
title: inventory_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - inventory_entries
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

Creates, updates, deletes, gets or lists an <code>inventory_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inventory_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.inventory_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_inventory_entries"
    values={[
        { label: 'list_inventory_entries', value: 'list_inventory_entries' }
    ]}
>
<TabItem value="list_inventory_entries">

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
    <td><code>string</code></td>
    <td>The time that inventory information was collected for the managed nodes. (pattern: &lt;code&gt;^(20)&#91;0-9&#93;&#91;0-9&#93;-(0&#91;1-9&#93;|1&#91;012&#93;)-(&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;|0&#91;1-9&#93;)(T)(2&#91;0-3&#93;|&#91;0-1&#93;&#91;0-9&#93;)(:&#91;0-5&#93;&#91;0-9&#93;)(:&#91;0-5&#93;&#91;0-9&#93;)(Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Entries" /></td>
    <td><code>array</code></td>
    <td>A list of inventory items on the managed nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The managed node ID targeted by the request to query inventory information. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="SchemaVersion" /></td>
    <td><code>string</code></td>
    <td>The inventory schema version used by the managed nodes. (pattern: &lt;code&gt;^(&#91;0-9&#93;&#123;1,6&#125;)(\.&#91;0-9&#93;&#123;1,6&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The type of inventory item returned by the request. (pattern: &lt;code&gt;^(AWS|Custom):.*$&lt;/code&gt;)</td>
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
    <td><a href="#list_inventory_entries"><CopyableCode code="list_inventory_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A list of inventory items returned by the request.</td>
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
    defaultValue="list_inventory_entries"
    values={[
        { label: 'list_inventory_entries', value: 'list_inventory_entries' }
    ]}
>
<TabItem value="list_inventory_entries">

A list of inventory items returned by the request.

```sql
SELECT
CaptureTime,
Entries,
InstanceId,
NextToken,
SchemaVersion,
TypeName
FROM aws.ssm.inventory_entries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
