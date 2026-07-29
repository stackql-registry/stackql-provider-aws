--- 
title: catalog_items
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_items
  - outposts
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

Creates, updates, deletes, gets or lists a <code>catalog_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.catalog_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_catalog_item"
    values={[
        { label: 'get_catalog_item', value: 'get_catalog_item' },
        { label: 'list_catalog_items', value: 'list_catalog_items' }
    ]}
>
<TabItem value="get_catalog_item">

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
    <td><CopyableCode code="catalog_item_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the catalog item. (pattern: &lt;code&gt;OR-&#91;A-Z0-9&#93;&#123;7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ec2_capacities" /></td>
    <td><code>array</code></td>
    <td>Information about the EC2 capacity of an item.</td>
</tr>
<tr>
    <td><CopyableCode code="item_status" /></td>
    <td><code>string</code></td>
    <td>The status of a catalog item. (AVAILABLE, DISCONTINUED)</td>
</tr>
<tr>
    <td><CopyableCode code="power_kva" /></td>
    <td><code>number (float)</code></td>
    <td>Information about the power draw of an item.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_storage" /></td>
    <td><code>array</code></td>
    <td>The supported storage options for the catalog item.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_uplink_gbps" /></td>
    <td><code>array</code></td>
    <td>The uplink speed this catalog item requires for the connection to the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="weight_lbs" /></td>
    <td><code>integer</code></td>
    <td>The weight of the item in pounds.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_catalog_items">

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
    <td><CopyableCode code="catalog_item_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the catalog item. (pattern: &lt;code&gt;OR-&#91;A-Z0-9&#93;&#123;7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ec2_capacities" /></td>
    <td><code>array</code></td>
    <td>Information about the EC2 capacity of an item.</td>
</tr>
<tr>
    <td><CopyableCode code="item_status" /></td>
    <td><code>string</code></td>
    <td>The status of a catalog item. (AVAILABLE, DISCONTINUED)</td>
</tr>
<tr>
    <td><CopyableCode code="power_kva" /></td>
    <td><code>number (float)</code></td>
    <td>Information about the power draw of an item.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_storage" /></td>
    <td><code>array</code></td>
    <td>The supported storage options for the catalog item.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_uplink_gbps" /></td>
    <td><code>array</code></td>
    <td>The uplink speed this catalog item requires for the connection to the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="weight_lbs" /></td>
    <td><code>integer</code></td>
    <td>The weight of the item in pounds.</td>
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
    <td><a href="#get_catalog_item"><CopyableCode code="get_catalog_item" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-catalog_item_id"><code>catalog_item_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified catalog item.</td>
</tr>
<tr>
    <td><a href="#list_catalog_items"><CopyableCode code="list_catalog_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-ItemClassFilter"><code>ItemClassFilter</code></a>, <a href="#parameter-SupportedStorageFilter"><code>SupportedStorageFilter</code></a>, <a href="#parameter-EC2FamilyFilter"><code>EC2FamilyFilter</code></a></td>
    <td>Lists the items in the catalog. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</td>
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
<tr id="parameter-catalog_item_id">
    <td><CopyableCode code="catalog_item_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the catalog item.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-EC2FamilyFilter">
    <td><CopyableCode code="EC2FamilyFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by EC2 family (for example, M5).</td>
</tr>
<tr id="parameter-ItemClassFilter">
    <td><CopyableCode code="ItemClassFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by item class.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-SupportedStorageFilter">
    <td><CopyableCode code="SupportedStorageFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by storage option.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_catalog_item"
    values={[
        { label: 'get_catalog_item', value: 'get_catalog_item' },
        { label: 'list_catalog_items', value: 'list_catalog_items' }
    ]}
>
<TabItem value="get_catalog_item">

Gets information about the specified catalog item.

```sql
SELECT
catalog_item_id,
ec2_capacities,
item_status,
power_kva,
supported_storage,
supported_uplink_gbps,
weight_lbs
FROM aws.outposts.catalog_items
WHERE catalog_item_id = '{{ catalog_item_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_catalog_items">

Lists the items in the catalog. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.

```sql
SELECT
catalog_item_id,
ec2_capacities,
item_status,
power_kva,
supported_storage,
supported_uplink_gbps,
weight_lbs
FROM aws.outposts.catalog_items
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND ItemClassFilter = '{{ ItemClassFilter }}'
AND SupportedStorageFilter = '{{ SupportedStorageFilter }}'
AND EC2FamilyFilter = '{{ EC2FamilyFilter }}'
;
```
</TabItem>
</Tabs>
