--- 
title: catalog_import_status
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_import_status
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

Creates, updates, deletes, gets or lists a <code>catalog_import_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_import_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.catalog_import_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_catalog_import_status"
    values={[
        { label: 'get_catalog_import_status', value: 'get_catalog_import_status' }
    ]}
>
<TabItem value="get_catalog_import_status">

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
    <td><CopyableCode code="ImportCompleted" /></td>
    <td><code>boolean</code></td>
    <td>True if the migration has completed, or False otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the migration was started.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportedBy" /></td>
    <td><code>string</code></td>
    <td>The name of the person who initiated the migration. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_catalog_import_status"><CopyableCode code="get_catalog_import_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status of a migration operation.</td>
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
    defaultValue="get_catalog_import_status"
    values={[
        { label: 'get_catalog_import_status', value: 'get_catalog_import_status' }
    ]}
>
<TabItem value="get_catalog_import_status">

Retrieves the status of a migration operation.

```sql
SELECT
ImportCompleted,
ImportTime,
ImportedBy
FROM aws.glue.catalog_import_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
