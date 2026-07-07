--- 
title: inventory_schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - inventory_schemas
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

Creates, updates, deletes, gets or lists an <code>inventory_schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inventory_schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.inventory_schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_inventory_schema"
    values={[
        { label: 'get_inventory_schema', value: 'get_inventory_schema' }
    ]}
>
<TabItem value="get_inventory_schema">

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
    <td><CopyableCode code="Attributes" /></td>
    <td><code>array</code></td>
    <td>The schema attributes for inventory. This contains data type and attribute name.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The alias name of the inventory type. The alias name is used for display purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the inventory type. Default inventory item type names start with Amazon Web Services. Custom inventory type names will start with Custom. Default inventory item types include the following: AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and AWS:WindowsUpdate. (pattern: &lt;code&gt;^(AWS|Custom):.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The schema version for the inventory item. (pattern: &lt;code&gt;^(&#91;0-9&#93;&#123;1,6&#125;)(\.&#91;0-9&#93;&#123;1,6&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#get_inventory_schema"><CopyableCode code="get_inventory_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.</td>
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
    defaultValue="get_inventory_schema"
    values={[
        { label: 'get_inventory_schema', value: 'get_inventory_schema' }
    ]}
>
<TabItem value="get_inventory_schema">

Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.

```sql
SELECT
Attributes,
DisplayName,
TypeName,
Version
FROM aws.ssm.inventory_schemas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
