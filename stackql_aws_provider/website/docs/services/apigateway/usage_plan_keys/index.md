--- 
title: usage_plan_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_plan_keys
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

Creates, updates, deletes, gets or lists a <code>usage_plan_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_plan_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.usage_plan_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_plan_key"
    values={[
        { label: 'get_usage_plan_key', value: 'get_usage_plan_key' },
        { label: 'get_usage_plan_keys', value: 'get_usage_plan_keys' }
    ]}
>
<TabItem value="get_usage_plan_key">

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
    <td>The Id of a usage plan key.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a usage plan key.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of a usage plan key. Currently, the valid key type is API_KEY.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of a usage plan key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_usage_plan_keys">

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
    <td>The Id of a usage plan key.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a usage plan key.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of a usage plan key. Currently, the valid key type is API_KEY.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of a usage plan key.</td>
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
    <td><a href="#get_usage_plan_key"><CopyableCode code="get_usage_plan_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-key_id"><code>key_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a usage plan key of a given key identifier.</td>
</tr>
<tr>
    <td><a href="#get_usage_plan_keys"><CopyableCode code="get_usage_plan_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Gets all the usage plan keys representing the API keys added to a specified usage plan.</td>
</tr>
<tr>
    <td><a href="#create_usage_plan_key"><CopyableCode code="create_usage_plan_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyId"><code>keyId</code></a>, <a href="#parameter-keyType"><code>keyType</code></a></td>
    <td></td>
    <td>Creates a usage plan key for adding an existing API key to a usage plan.</td>
</tr>
<tr>
    <td><a href="#delete_usage_plan_key"><CopyableCode code="delete_usage_plan_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-key_id"><code>key_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a usage plan key and remove the underlying API key from the associated usage plan.</td>
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
<tr id="parameter-key_id">
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The Id of the UsagePlanKey resource to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-usageplan_id">
    <td><CopyableCode code="usageplan_id" /></td>
    <td><code>string</code></td>
    <td>The Id of the UsagePlan resource representing the usage plan containing the to-be-deleted UsagePlanKey resource representing a plan customer.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A query parameter specifying the name of the to-be-returned usage plan keys.</td>
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
    defaultValue="get_usage_plan_key"
    values={[
        { label: 'get_usage_plan_key', value: 'get_usage_plan_key' },
        { label: 'get_usage_plan_keys', value: 'get_usage_plan_keys' }
    ]}
>
<TabItem value="get_usage_plan_key">

Gets a usage plan key of a given key identifier.

```sql
SELECT
id,
name,
type_,
value
FROM aws.apigateway.usage_plan_keys
WHERE usageplan_id = '{{ usageplan_id }}' -- required
AND key_id = '{{ key_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_usage_plan_keys">

Gets all the usage plan keys representing the API keys added to a specified usage plan.

```sql
SELECT
id,
name,
type_,
value
FROM aws.apigateway.usage_plan_keys
WHERE usageplan_id = '{{ usageplan_id }}' -- required
AND region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_usage_plan_key"
    values={[
        { label: 'create_usage_plan_key', value: 'create_usage_plan_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_usage_plan_key">

Creates a usage plan key for adding an existing API key to a usage plan.

```sql
INSERT INTO aws.apigateway.usage_plan_keys (
keyId,
keyType,
usageplan_id,
region
)
SELECT 
'{{ keyId }}' /* required */,
'{{ keyType }}' /* required */,
'{{ usageplan_id }}',
'{{ region }}'
RETURNING
id,
name,
type_,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usage_plan_keys
  props:
    - name: usageplan_id
      value: "{{ usageplan_id }}"
      description: Required parameter for the usage_plan_keys resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usage_plan_keys resource.
    - name: keyId
      value: "{{ keyId }}"
    - name: keyType
      value: "{{ keyType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_usage_plan_key"
    values={[
        { label: 'delete_usage_plan_key', value: 'delete_usage_plan_key' }
    ]}
>
<TabItem value="delete_usage_plan_key">

Deletes a usage plan key and remove the underlying API key from the associated usage plan.

```sql
DELETE FROM aws.apigateway.usage_plan_keys
WHERE usageplan_id = '{{ usageplan_id }}' --required
AND key_id = '{{ key_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
