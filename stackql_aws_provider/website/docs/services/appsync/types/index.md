--- 
title: types
hide_title: false
hide_table_of_contents: false
keywords:
  - types
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

Creates, updates, deletes, gets or lists a <code>types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_types"
    values={[
        { label: 'list_types', value: 'list_types' }
    ]}
>
<TabItem value="list_types">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The type name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The type Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The type definition.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The type description.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The type format: SDL or JSON. (SDL, JSON)</td>
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
    <td><a href="#list_types"><CopyableCode code="list_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the types for a given API.</td>
</tr>
<tr>
    <td><a href="#create_type"><CopyableCode code="create_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a>, <a href="#parameter-format"><code>format</code></a></td>
    <td></td>
    <td>Creates a Type object.</td>
</tr>
<tr>
    <td><a href="#update_type"><CopyableCode code="update_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-type_name"><code>type_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-format"><code>format</code></a></td>
    <td></td>
    <td>Updates a Type object.</td>
</tr>
<tr>
    <td><a href="#delete_type"><CopyableCode code="delete_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-type_name"><code>type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Type object.</td>
</tr>
<tr>
    <td><a href="#get_type"><CopyableCode code="get_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-type_name"><code>type_name</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a Type object.</td>
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
    <td>The type format: SDL or JSON.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-type_name">
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td>The type name.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that you want the request to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_types"
    values={[
        { label: 'list_types', value: 'list_types' }
    ]}
>
<TabItem value="list_types">

Lists the types for a given API.

```sql
SELECT
name,
arn,
definition,
description,
format_
FROM aws.appsync.types
WHERE api_id = '{{ api_id }}' -- required
AND format = '{{ format }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_type"
    values={[
        { label: 'create_type', value: 'create_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_type">

Creates a Type object.

```sql
INSERT INTO aws.appsync.types (
definition,
format,
api_id,
region
)
SELECT 
'{{ definition }}' /* required */,
'{{ format }}' /* required */,
'{{ api_id }}',
'{{ region }}'
RETURNING
type_
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: types
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the types resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the types resource.
    - name: definition
      value: "{{ definition }}"
    - name: format
      value: "{{ format }}"
      valid_values: ['SDL', 'JSON']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_type"
    values={[
        { label: 'update_type', value: 'update_type' }
    ]}
>
<TabItem value="update_type">

Updates a Type object.

```sql
UPDATE aws.appsync.types
SET 
definition = '{{ definition }}',
format = '{{ format }}'
WHERE 
api_id = '{{ api_id }}' --required
AND type_name = '{{ type_name }}' --required
AND region = '{{ region }}' --required
AND format = '{{ format }}' --required
RETURNING
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_type"
    values={[
        { label: 'delete_type', value: 'delete_type' }
    ]}
>
<TabItem value="delete_type">

Deletes a Type object.

```sql
DELETE FROM aws.appsync.types
WHERE api_id = '{{ api_id }}' --required
AND type_name = '{{ type_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_type"
    values={[
        { label: 'get_type', value: 'get_type' }
    ]}
>
<TabItem value="get_type">

Retrieves a Type object.

```sql
EXEC aws.appsync.types.get_type 
@api_id='{{ api_id }}' --required, 
@type_name='{{ type_name }}' --required, 
@format='{{ format }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
