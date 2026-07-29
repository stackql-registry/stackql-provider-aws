--- 
title: api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - api_keys
  - apigateway
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

Creates, updates, deletes, gets or lists an <code>api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.api_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_api_key"
    values={[
        { label: 'get_api_key', value: 'get_api_key' },
        { label: 'get_api_keys', value: 'get_api_keys' }
    ]}
>
<TabItem value="get_api_key">

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
    <td>The identifier of the API Key.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the API Key.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API Key was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_id" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services Marketplace customer identifier, when integrating with the Amazon Web Services SaaS Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the API Key.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the API Key can be used by callers.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API Key was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="stage_keys" /></td>
    <td><code>array</code></td>
    <td>A list of Stage resources that are associated with the ApiKey resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the API Key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_api_keys">

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
    <td>The identifier of the API Key.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the API Key.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API Key was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_id" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services Marketplace customer identifier, when integrating with the Amazon Web Services SaaS Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the API Key.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the API Key can be used by callers.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API Key was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="stage_keys" /></td>
    <td><code>array</code></td>
    <td>A list of Stage resources that are associated with the ApiKey resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the API Key.</td>
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
    <td><a href="#get_api_key"><CopyableCode code="get_api_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api__key"><code>api__key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeValue"><code>includeValue</code></a></td>
    <td>Gets information about the current ApiKey resource.</td>
</tr>
<tr>
    <td><a href="#get_api_keys"><CopyableCode code="get_api_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-includeValues"><code>includeValues</code></a></td>
    <td>Gets information about the current ApiKeys resource.</td>
</tr>
<tr>
    <td><a href="#create_api_key"><CopyableCode code="create_api_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create an ApiKey resource.</td>
</tr>
<tr>
    <td><a href="#update_api_key"><CopyableCode code="update_api_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api__key"><code>api__key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes information about an ApiKey resource.</td>
</tr>
<tr>
    <td><a href="#delete_api_key"><CopyableCode code="delete_api_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api__key"><code>api__key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the ApiKey resource.</td>
</tr>
<tr>
    <td><a href="#import_api_keys"><CopyableCode code="import_api_keys" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-format"><code>format</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td><a href="#parameter-failonwarnings"><code>failonwarnings</code></a></td>
    <td>Import API keys from an external source, such as a CSV-formatted file.</td>
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
<tr id="parameter-api__key">
    <td><CopyableCode code="api__key" /></td>
    <td><code>string</code></td>
    <td>The identifier of the ApiKey resource to be deleted.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>A query parameter to specify the input format to imported API keys. Currently, only the csv format is supported.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-customerId">
    <td><CopyableCode code="customerId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a customer in Amazon Web Services Marketplace or an external system, such as a developer portal.</td>
</tr>
<tr id="parameter-failonwarnings">
    <td><CopyableCode code="failonwarnings" /></td>
    <td><code>boolean</code></td>
    <td>A query parameter to indicate whether to rollback ApiKey importation (true) or not (false) when error is encountered.</td>
</tr>
<tr id="parameter-includeValue">
    <td><CopyableCode code="includeValue" /></td>
    <td><code>boolean</code></td>
    <td>A boolean flag to specify whether (true) or not (false) the result contains the key value.</td>
</tr>
<tr id="parameter-includeValues">
    <td><CopyableCode code="includeValues" /></td>
    <td><code>boolean</code></td>
    <td>A boolean flag to specify whether (true) or not (false) the result contains key values.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of queried API keys.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_api_key"
    values={[
        { label: 'get_api_key', value: 'get_api_key' },
        { label: 'get_api_keys', value: 'get_api_keys' }
    ]}
>
<TabItem value="get_api_key">

Gets information about the current ApiKey resource.

```sql
SELECT
id,
name,
created_date,
customer_id,
description,
enabled,
last_updated_date,
stage_keys,
tags,
value
FROM aws.apigateway.api_keys
WHERE api__key = '{{ api__key }}' -- required
AND region = '{{ region }}' -- required
AND includeValue = '{{ includeValue }}'
;
```
</TabItem>
<TabItem value="get_api_keys">

Gets information about the current ApiKeys resource.

```sql
SELECT
id,
name,
created_date,
customer_id,
description,
enabled,
last_updated_date,
stage_keys,
tags,
value
FROM aws.apigateway.api_keys
WHERE region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
AND name = '{{ name }}'
AND customerId = '{{ customerId }}'
AND includeValues = '{{ includeValues }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_api_key"
    values={[
        { label: 'create_api_key', value: 'create_api_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_api_key">

Create an ApiKey resource.

```sql
INSERT INTO aws.apigateway.api_keys (
name,
description,
enabled,
generateDistinctId,
value,
stageKeys,
customerId,
tags,
region
)
SELECT 
'{{ name }}',
'{{ description }}',
{{ enabled }},
{{ generateDistinctId }},
'{{ value }}',
'{{ stageKeys }}',
'{{ customerId }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
created_date,
customer_id,
description,
enabled,
last_updated_date,
stage_keys,
tags,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the api_keys resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: enabled
      value: {{ enabled }}
    - name: generateDistinctId
      value: {{ generateDistinctId }}
    - name: value
      value: "{{ value }}"
    - name: stageKeys
      value:
        - restApiId: "{{ restApiId }}"
          stageName: "{{ stageName }}"
    - name: customerId
      value: "{{ customerId }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_api_key"
    values={[
        { label: 'update_api_key', value: 'update_api_key' }
    ]}
>
<TabItem value="update_api_key">

Changes information about an ApiKey resource.

```sql
UPDATE aws.apigateway.api_keys
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
api__key = '{{ api__key }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
created_date,
customer_id,
description,
enabled,
last_updated_date,
stage_keys,
tags,
value;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_api_key"
    values={[
        { label: 'delete_api_key', value: 'delete_api_key' }
    ]}
>
<TabItem value="delete_api_key">

Deletes the ApiKey resource.

```sql
DELETE FROM aws.apigateway.api_keys
WHERE api__key = '{{ api__key }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_api_keys"
    values={[
        { label: 'import_api_keys', value: 'import_api_keys' }
    ]}
>
<TabItem value="import_api_keys">

Import API keys from an external source, such as a CSV-formatted file.

```sql
EXEC aws.apigateway.api_keys.import_api_keys 
@format='{{ format }}' --required, 
@region='{{ region }}' --required, 
@failonwarnings={{ failonwarnings }} 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
</Tabs>
