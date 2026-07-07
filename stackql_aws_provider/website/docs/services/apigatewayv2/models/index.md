--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model"
    values={[
        { label: 'get_model', value: 'get_model' },
        { label: 'get_models', value: 'get_models' }
    ]}
>
<TabItem value="get_model">

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
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-256&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="Schema" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-32768&#93;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_models">

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
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-256&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="Schema" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-32768&#93;.</td>
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
    <td><a href="#get_model"><CopyableCode code="get_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a Model.</td>
</tr>
<tr>
    <td><a href="#get_models"><CopyableCode code="get_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the Models for an API.</td>
</tr>
<tr>
    <td><a href="#create_model"><CopyableCode code="create_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Model for an API.</td>
</tr>
<tr>
    <td><a href="#update_model"><CopyableCode code="update_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Model.</td>
</tr>
<tr>
    <td><a href="#delete_model"><CopyableCode code="delete_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Model.</td>
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
    <td>The API identifier.</td>
</tr>
<tr id="parameter-model_id">
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>The model ID.</td>
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
    defaultValue="get_model"
    values={[
        { label: 'get_model', value: 'get_model' },
        { label: 'get_models', value: 'get_models' }
    ]}
>
<TabItem value="get_model">

Gets a Model.

```sql
SELECT
ContentType,
Description,
ModelId,
Name,
Schema
FROM aws.apigatewayv2.models
WHERE api_id = '{{ api_id }}' -- required
AND model_id = '{{ model_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_models">

Gets the Models for an API.

```sql
SELECT
ContentType,
Description,
ModelId,
Name,
Schema
FROM aws.apigatewayv2.models
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model"
    values={[
        { label: 'create_model', value: 'create_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model">

Creates a Model for an API.

```sql
INSERT INTO aws.apigatewayv2.models (
ContentType,
Description,
Name,
Schema,
api_id,
region
)
SELECT 
'{{ ContentType }}',
'{{ Description }}',
'{{ Name }}',
'{{ Schema }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
ContentType,
Description,
ModelId,
Name,
Schema
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: models
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the models resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the models resource.
    - name: ContentType
      value: "{{ ContentType }}"
      description: |
        A string with a length between [1-256].
    - name: Description
      value: "{{ Description }}"
      description: |
        A string with a length between [0-1024].
    - name: Name
      value: "{{ Name }}"
      description: |
        A string with a length between [1-128].
    - name: Schema
      value: "{{ Schema }}"
      description: |
        A string with a length between [0-32768].
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_model"
    values={[
        { label: 'update_model', value: 'update_model' }
    ]}
>
<TabItem value="update_model">

Updates a Model.

```sql
UPDATE aws.apigatewayv2.models
SET 
ContentType = '{{ ContentType }}',
Description = '{{ Description }}',
Name = '{{ Name }}',
Schema = '{{ Schema }}'
WHERE 
api_id = '{{ api_id }}' --required
AND model_id = '{{ model_id }}' --required
AND region = '{{ region }}' --required
RETURNING
ContentType,
Description,
ModelId,
Name,
Schema;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model"
    values={[
        { label: 'delete_model', value: 'delete_model' }
    ]}
>
<TabItem value="delete_model">

Deletes a Model.

```sql
DELETE FROM aws.apigatewayv2.models
WHERE api_id = '{{ api_id }}' --required
AND model_id = '{{ model_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
