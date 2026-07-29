--- 
title: variant_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - variant_stores
  - omics
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

Creates, updates, deletes, gets or lists a <code>variant_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="variant_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.variant_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_variant_store"
    values={[
        { label: 'get_variant_store', value: 'get_variant_store' },
        { label: 'list_variant_stores', value: 'list_variant_stores' }
    ]}
>
<TabItem value="get_variant_store">

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
    <td>The store's ID. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The store's name.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The store's description.</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>object</code></td>
    <td>A genome reference.</td>
</tr>
<tr>
    <td><CopyableCode code="sse_config" /></td>
    <td><code>object</code></td>
    <td>Server-side encryption (SSE) settings for a store.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The store's status. (CREATING, UPDATING, DELETING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The store's status message.</td>
</tr>
<tr>
    <td><CopyableCode code="store_arn" /></td>
    <td><code>string</code></td>
    <td>The store's ARN. (pattern: &lt;code&gt;arn:(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="store_size_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The store's size in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The store's tags.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_variant_stores">

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
    <td>The store's ID. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The store's name.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The store's description.</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>object</code></td>
    <td>A genome reference.</td>
</tr>
<tr>
    <td><CopyableCode code="sse_config" /></td>
    <td><code>object</code></td>
    <td>Server-side encryption (SSE) settings for a store.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The store's status. (CREATING, UPDATING, DELETING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The store's status message.</td>
</tr>
<tr>
    <td><CopyableCode code="store_arn" /></td>
    <td><code>string</code></td>
    <td>The store's ARN. (pattern: &lt;code&gt;arn:(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="store_size_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The store's size in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was updated.</td>
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
    <td><a href="#get_variant_store"><CopyableCode code="get_variant_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Gets information about a variant store.</td>
</tr>
<tr>
    <td><a href="#list_variant_stores"><CopyableCode code="list_variant_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Retrieves a list of variant stores.</td>
</tr>
<tr>
    <td><a href="#create_variant_store"><CopyableCode code="create_variant_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-reference"><code>reference</code></a></td>
    <td></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Creates a variant store.</td>
</tr>
<tr>
    <td><a href="#update_variant_store"><CopyableCode code="update_variant_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Updates a variant store.</td>
</tr>
<tr>
    <td><a href="#delete_variant_store"><CopyableCode code="delete_variant_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Deletes a variant store.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The store's name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Whether to force deletion.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of stores to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_variant_store"
    values={[
        { label: 'get_variant_store', value: 'get_variant_store' },
        { label: 'list_variant_stores', value: 'list_variant_stores' }
    ]}
>
<TabItem value="get_variant_store">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Gets information about a variant store.

```sql
SELECT
id,
name,
creation_time,
description,
reference,
sse_config,
status,
status_message,
store_arn,
store_size_bytes,
tags,
update_time
FROM aws.omics.variant_stores
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_variant_stores">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Retrieves a list of variant stores.

```sql
SELECT
id,
name,
creation_time,
description,
reference,
sse_config,
status,
status_message,
store_arn,
store_size_bytes,
update_time
FROM aws.omics.variant_stores
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_variant_store"
    values={[
        { label: 'create_variant_store', value: 'create_variant_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_variant_store">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Creates a variant store.

```sql
INSERT INTO aws.omics.variant_stores (
reference,
name,
description,
tags,
sseConfig,
region
)
SELECT 
'{{ reference }}' /* required */,
'{{ name }}',
'{{ description }}',
'{{ tags }}',
'{{ sseConfig }}',
'{{ region }}'
RETURNING
id,
name,
creation_time,
reference,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: variant_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the variant_stores resource.
    - name: reference
      description: |
        A genome reference.
      value:
        referenceArn: "{{ referenceArn }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: sseConfig
      description: |
        Server-side encryption (SSE) settings for a store.
      value:
        type_: "{{ type_ }}"
        keyArn: "{{ keyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_variant_store"
    values={[
        { label: 'update_variant_store', value: 'update_variant_store' }
    ]}
>
<TabItem value="update_variant_store">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Updates a variant store.

```sql
UPDATE aws.omics.variant_stores
SET 
description = '{{ description }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
creation_time,
description,
reference,
status,
update_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_variant_store"
    values={[
        { label: 'delete_variant_store', value: 'delete_variant_store' }
    ]}
>
<TabItem value="delete_variant_store">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Deletes a variant store.

```sql
DELETE FROM aws.omics.variant_stores
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
