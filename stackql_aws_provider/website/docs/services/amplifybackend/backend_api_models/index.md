--- 
title: backend_api_models
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_api_models
  - amplifybackend
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

Creates, updates, deletes, gets or lists a <code>backend_api_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backend_api_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifybackend.backend_api_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backend_api_models"
    values={[
        { label: 'get_backend_api_models', value: 'get_backend_api_models' }
    ]}
>
<TabItem value="get_backend_api_models">

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
    <td><CopyableCode code="ModelIntrospectionSchema" /></td>
    <td><code>string</code></td>
    <td>Stringified JSON of the model introspection schema for an existing backend API resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Models" /></td>
    <td><code>string</code></td>
    <td>Stringified JSON of the datastore model.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the request. (LATEST, STALE)</td>
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
    <td><a href="#get_backend_api_models"><CopyableCode code="get_backend_api_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a model introspection schema for an existing backend API resource.</td>
</tr>
<tr>
    <td><a href="#generate_backend_api_models"><CopyableCode code="generate_backend_api_models" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a></td>
    <td></td>
    <td>Generates a model schema for an existing backend API resource.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr id="parameter-backend_environment_name">
    <td><CopyableCode code="backend_environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
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
    defaultValue="get_backend_api_models"
    values={[
        { label: 'get_backend_api_models', value: 'get_backend_api_models' }
    ]}
>
<TabItem value="get_backend_api_models">

Gets a model introspection schema for an existing backend API resource.

```sql
SELECT
ModelIntrospectionSchema,
Models,
Status
FROM aws.amplifybackend.backend_api_models
WHERE app_id = '{{ app_id }}' -- required
AND backend_environment_name = '{{ backend_environment_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_backend_api_models"
    values={[
        { label: 'generate_backend_api_models', value: 'generate_backend_api_models' }
    ]}
>
<TabItem value="generate_backend_api_models">

Generates a model schema for an existing backend API resource.

```sql
EXEC aws.amplifybackend.backend_api_models.generate_backend_api_models 
@app_id='{{ app_id }}' --required, 
@backend_environment_name='{{ backend_environment_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ResourceName": "{{ ResourceName }}"
}'
;
```
</TabItem>
</Tabs>
