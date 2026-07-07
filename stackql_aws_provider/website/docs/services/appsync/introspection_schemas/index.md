--- 
title: introspection_schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - introspection_schemas
  - appsync
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

Creates, updates, deletes, gets or lists an <code>introspection_schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="introspection_schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.introspection_schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_introspection_schema"
    values={[
        { label: 'get_introspection_schema', value: 'get_introspection_schema' }
    ]}
>
<TabItem value="get_introspection_schema">

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
    <td><CopyableCode code="schema" /></td>
    <td><code>string (byte)</code></td>
    <td>The schema, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL SDL documentation.</td>
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
    <td><a href="#get_introspection_schema"><CopyableCode code="get_introspection_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeDirectives"><code>includeDirectives</code></a></td>
    <td>Retrieves the introspection schema for a GraphQL API.</td>
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
<tr id="parameter-api_id">
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The API ID.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The schema format: SDL or JSON.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includeDirectives">
    <td><CopyableCode code="includeDirectives" /></td>
    <td><code>boolean</code></td>
    <td>A flag that specifies whether the schema introspection should contain directives.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_introspection_schema"
    values={[
        { label: 'get_introspection_schema', value: 'get_introspection_schema' }
    ]}
>
<TabItem value="get_introspection_schema">

Retrieves the introspection schema for a GraphQL API.

```sql
SELECT
schema
FROM aws.appsync.introspection_schemas
WHERE api_id = '{{ api_id }}' -- required
AND format = '{{ format }}' -- required
AND region = '{{ region }}' -- required
AND includeDirectives = '{{ includeDirectives }}'
;
```
</TabItem>
</Tabs>
