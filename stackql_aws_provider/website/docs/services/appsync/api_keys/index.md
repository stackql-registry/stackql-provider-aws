--- 
title: api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - api_keys
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

Creates, updates, deletes, gets or lists an <code>api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.api_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_api_keys"
    values={[
        { label: 'list_api_keys', value: 'list_api_keys' }
    ]}
>
<TabItem value="list_api_keys">

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
    <td>The API key ID.</td>
</tr>
<tr>
    <td><CopyableCode code="deletes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time after which the API key is deleted. The date is represented as seconds since the epoch, rounded down to the nearest hour.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the purpose of the API key.</td>
</tr>
<tr>
    <td><CopyableCode code="expires" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour.</td>
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
    <td><a href="#list_api_keys"><CopyableCode code="list_api_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted.</td>
</tr>
<tr>
    <td><a href="#create_api_key"><CopyableCode code="create_api_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a unique key that you can distribute to clients who invoke your API.</td>
</tr>
<tr>
    <td><a href="#update_api_key"><CopyableCode code="update_api_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an API key. You can update the key as long as it's not deleted.</td>
</tr>
<tr>
    <td><a href="#delete_api_key"><CopyableCode code="delete_api_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an API key.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID for the API key.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="list_api_keys"
    values={[
        { label: 'list_api_keys', value: 'list_api_keys' }
    ]}
>
<TabItem value="list_api_keys">

Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted.

```sql
SELECT
id,
deletes,
description,
expires
FROM aws.appsync.api_keys
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates a unique key that you can distribute to clients who invoke your API.

```sql
INSERT INTO aws.appsync.api_keys (
description,
expires,
api_id,
region
)
SELECT 
'{{ description }}',
{{ expires }},
'{{ api_id }}',
'{{ region }}'
RETURNING
apiKey
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_keys
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the api_keys resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the api_keys resource.
    - name: description
      value: "{{ description }}"
    - name: expires
      value: {{ expires }}
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

Updates an API key. You can update the key as long as it's not deleted.

```sql
UPDATE aws.appsync.api_keys
SET 
description = '{{ description }}',
expires = {{ expires }}
WHERE 
api_id = '{{ api_id }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
apiKey;
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

Deletes an API key.

```sql
DELETE FROM aws.appsync.api_keys
WHERE api_id = '{{ api_id }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
