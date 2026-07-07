--- 
title: facet_names
hide_title: false
hide_table_of_contents: false
keywords:
  - facet_names
  - clouddirectory
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

Creates, updates, deletes, gets or lists a <code>facet_names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="facet_names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.facet_names" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_facet_names"
    values={[
        { label: 'list_facet_names', value: 'list_facet_names' }
    ]}
>
<TabItem value="list_facet_names">

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
    <td><CopyableCode code="facet_name" /></td>
    <td><code>string</code></td>
    <td>The names of facets that exist within the schema.</td>
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
    <td><a href="#list_facet_names"><CopyableCode code="list_facet_names" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the names of facets that exist in a schema.</td>
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
<tr id="parameter-x-amz-data-partition">
    <td><CopyableCode code="x-amz-data-partition" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) to retrieve facet names from.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_facet_names"
    values={[
        { label: 'list_facet_names', value: 'list_facet_names' }
    ]}
>
<TabItem value="list_facet_names">

Retrieves the names of facets that exist in a schema.

```sql
SELECT
facet_name
FROM aws.clouddirectory.facet_names
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
