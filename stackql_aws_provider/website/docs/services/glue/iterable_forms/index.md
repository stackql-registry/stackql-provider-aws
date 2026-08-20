--- 
title: iterable_forms
hide_title: false
hide_table_of_contents: false
keywords:
  - iterable_forms
  - glue
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

Creates, updates, deletes, gets or lists an <code>iterable_forms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="iterable_forms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.iterable_forms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_iterable_forms"
    values={[
        { label: 'batch_get_iterable_forms', value: 'batch_get_iterable_forms' },
        { label: 'list_iterable_forms', value: 'list_iterable_forms' }
    ]}
>
<TabItem value="batch_get_iterable_forms">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>The list of errors for items that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of retrieved iterable form items.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iterable_forms">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the item.</td>
</tr>
<tr>
    <td><CopyableCode code="glossary_terms" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the glossary terms associated with the item.</td>
</tr>
<tr>
    <td><CopyableCode code="item_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the item.</td>
</tr>
<tr>
    <td><CopyableCode code="item_name" /></td>
    <td><code>string</code></td>
    <td>The name of the item.</td>
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
    <td><a href="#batch_get_iterable_forms"><CopyableCode code="batch_get_iterable_forms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple items from an iterable form on an asset in Glue Data Catalog in a single request.</td>
</tr>
<tr>
    <td><a href="#list_iterable_forms"><CopyableCode code="list_iterable_forms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the items in an iterable form on an asset in Glue Data Catalog. For example, lists the columns of a table asset.</td>
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
    defaultValue="batch_get_iterable_forms"
    values={[
        { label: 'batch_get_iterable_forms', value: 'batch_get_iterable_forms' },
        { label: 'list_iterable_forms', value: 'list_iterable_forms' }
    ]}
>
<TabItem value="batch_get_iterable_forms">

Retrieves multiple items from an iterable form on an asset in Glue Data Catalog in a single request.

```sql
SELECT
errors,
items
FROM aws.glue.iterable_forms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_iterable_forms">

Lists the items in an iterable form on an asset in Glue Data Catalog. For example, lists the columns of a table asset.

```sql
SELECT
description,
glossary_terms,
item_id,
item_name
FROM aws.glue.iterable_forms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
