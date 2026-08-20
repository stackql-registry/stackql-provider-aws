--- 
title: form_types
hide_title: false
hide_table_of_contents: false
keywords:
  - form_types
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

Creates, updates, deletes, gets or lists a <code>form_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="form_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.form_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_form_type"
    values={[
        { label: 'get_form_type', value: 'get_form_type' },
        { label: 'list_form_types', value: 'list_form_types' }
    ]}
>
<TabItem value="get_form_type">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the form type.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the form type. (pattern: &lt;code&gt;^&#91;A-Z&#93;\w*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The Smithy IDL schema of the form type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_form_types">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the form type.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the form type. (pattern: &lt;code&gt;^&#91;A-Z&#93;\w*$&lt;/code&gt;)</td>
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
    <td><a href="#get_form_type"><CopyableCode code="get_form_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a form type in Glue Data Catalog by its identifier.</td>
</tr>
<tr>
    <td><a href="#list_form_types"><CopyableCode code="list_form_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the form types defined in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#put_form_type"><CopyableCode code="put_form_type" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates a form type in Glue Data Catalog. A form type defines the schema for structured metadata that can be attached to assets.</td>
</tr>
<tr>
    <td><a href="#delete_form_type"><CopyableCode code="delete_form_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a form type from Glue Data Catalog. A form type cannot be deleted if it is still referenced by an asset type.</td>
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
    defaultValue="get_form_type"
    values={[
        { label: 'get_form_type', value: 'get_form_type' },
        { label: 'list_form_types', value: 'list_form_types' }
    ]}
>
<TabItem value="get_form_type">

Retrieves a form type in Glue Data Catalog by its identifier.

```sql
SELECT
id,
name,
schema
FROM aws.glue.form_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_form_types">

Lists the form types defined in Glue Data Catalog.

```sql
SELECT
id,
name
FROM aws.glue.form_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_form_type"
    values={[
        { label: 'put_form_type', value: 'put_form_type' }
    ]}
>
<TabItem value="put_form_type">

Creates or updates a form type in Glue Data Catalog. A form type defines the schema for structured metadata that can be attached to assets.

```sql
REPLACE aws.glue.form_types
SET 
Name = '{{ Name }}',
Schema = '{{ Schema }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
RETURNING
id,
name,
schema;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_form_type"
    values={[
        { label: 'delete_form_type', value: 'delete_form_type' }
    ]}
>
<TabItem value="delete_form_type">

Deletes a form type from Glue Data Catalog. A form type cannot be deleted if it is still referenced by an asset type.

```sql
DELETE FROM aws.glue.form_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
