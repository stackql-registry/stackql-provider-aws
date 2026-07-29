--- 
title: api_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - api_mappings
  - apigatewayv2
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

Creates, updates, deletes, gets or lists an <code>api_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.api_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_api_mapping"
    values={[
        { label: 'get_api_mapping', value: 'get_api_mapping' },
        { label: 'get_api_mappings', value: 'get_api_mappings' }
    ]}
>
<TabItem value="get_api_mapping">

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
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="api_mapping_id" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="api_mapping_key" /></td>
    <td><code>string</code></td>
    <td>After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_api_mappings">

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The elements from this collection.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
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
    <td><a href="#get_api_mapping"><CopyableCode code="get_api_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_mapping_id"><code>api_mapping_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an API mapping.</td>
</tr>
<tr>
    <td><a href="#get_api_mappings"><CopyableCode code="get_api_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets API mappings.</td>
</tr>
<tr>
    <td><a href="#create_api_mapping"><CopyableCode code="create_api_mapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApiId"><code>ApiId</code></a></td>
    <td></td>
    <td>Creates an API mapping.</td>
</tr>
<tr>
    <td><a href="#update_api_mapping"><CopyableCode code="update_api_mapping" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_mapping_id"><code>api_mapping_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApiId"><code>ApiId</code></a></td>
    <td></td>
    <td>The API mapping.</td>
</tr>
<tr>
    <td><a href="#delete_api_mapping"><CopyableCode code="delete_api_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_mapping_id"><code>api_mapping_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an API mapping.</td>
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
<tr id="parameter-api_mapping_id">
    <td><CopyableCode code="api_mapping_id" /></td>
    <td><code>string</code></td>
    <td>The API mapping identifier.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_api_mapping"
    values={[
        { label: 'get_api_mapping', value: 'get_api_mapping' },
        { label: 'get_api_mappings', value: 'get_api_mappings' }
    ]}
>
<TabItem value="get_api_mapping">

Gets an API mapping.

```sql
SELECT
api_id,
api_mapping_id,
api_mapping_key,
stage
FROM aws.apigatewayv2.api_mappings
WHERE api_mapping_id = '{{ api_mapping_id }}' -- required
AND domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_api_mappings">

Gets API mappings.

```sql
SELECT
items,
next_token
FROM aws.apigatewayv2.api_mappings
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_api_mapping"
    values={[
        { label: 'create_api_mapping', value: 'create_api_mapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_api_mapping">

Creates an API mapping.

```sql
INSERT INTO aws.apigatewayv2.api_mappings (
ApiId,
ApiMappingKey,
Stage,
domain_name,
region
)
SELECT 
'{{ ApiId }}' /* required */,
'{{ ApiMappingKey }}',
'{{ Stage }}',
'{{ domain_name }}',
'{{ region }}'
RETURNING
api_id,
api_mapping_id,
api_mapping_key,
stage
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_mappings
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the api_mappings resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the api_mappings resource.
    - name: ApiId
      value: "{{ ApiId }}"
      description: |
        The identifier.
    - name: ApiMappingKey
      value: "{{ ApiMappingKey }}"
      description: |
        After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.
    - name: Stage
      value: "{{ Stage }}"
      description: |
        A string with a length between [1-128].
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_api_mapping"
    values={[
        { label: 'update_api_mapping', value: 'update_api_mapping' }
    ]}
>
<TabItem value="update_api_mapping">

The API mapping.

```sql
UPDATE aws.apigatewayv2.api_mappings
SET 
ApiId = '{{ ApiId }}',
ApiMappingKey = '{{ ApiMappingKey }}',
Stage = '{{ Stage }}'
WHERE 
api_mapping_id = '{{ api_mapping_id }}' --required
AND domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND ApiId = '{{ ApiId }}' --required
RETURNING
api_id,
api_mapping_id,
api_mapping_key,
stage;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_api_mapping"
    values={[
        { label: 'delete_api_mapping', value: 'delete_api_mapping' }
    ]}
>
<TabItem value="delete_api_mapping">

Deletes an API mapping.

```sql
DELETE FROM aws.apigatewayv2.api_mappings
WHERE api_mapping_id = '{{ api_mapping_id }}' --required
AND domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
