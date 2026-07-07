--- 
title: categories
hide_title: false
hide_table_of_contents: false
keywords:
  - categories
  - qapps
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

Creates, updates, deletes, gets or lists a <code>categories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="categories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.categories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_categories"
    values={[
        { label: 'list_categories', value: 'list_categories' }
    ]}
>
<TabItem value="list_categories">

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
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The categories of a Amazon Q Business application environment instance.</td>
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
    <td><a href="#list_categories"><CopyableCode code="list_categories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the categories of a Amazon Q Business application environment instance. For more information, see Custom labels for Amazon Q Apps.</td>
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
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_categories"
    values={[
        { label: 'list_categories', value: 'list_categories' }
    ]}
>
<TabItem value="list_categories">

Lists the categories of a Amazon Q Business application environment instance. For more information, see Custom labels for Amazon Q Apps.

```sql
SELECT
categories
FROM aws.qapps.categories
WHERE `instance-id` = '{{ instance-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
