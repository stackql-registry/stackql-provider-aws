--- 
title: annotation_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_stores
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

Creates, updates, deletes, gets or lists an <code>annotation_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotation_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.annotation_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_annotation_store"
    values={[
        { label: 'get_annotation_store', value: 'get_annotation_store' },
        { label: 'list_annotation_stores', value: 'list_annotation_stores' }
    ]}
>
<TabItem value="get_annotation_store">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The store's description.</td>
</tr>
<tr>
    <td><CopyableCode code="numVersions" /></td>
    <td><code>integer</code></td>
    <td>An integer indicating how many versions of an annotation store exist.</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>object</code></td>
    <td>A genome reference.</td>
</tr>
<tr>
    <td><CopyableCode code="sseConfig" /></td>
    <td><code>object</code></td>
    <td>Server-side encryption (SSE) settings for a store.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The store's status. (CREATING, UPDATING, DELETING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A status message.</td>
</tr>
<tr>
    <td><CopyableCode code="storeArn" /></td>
    <td><code>string</code></td>
    <td>The store's ARN. (pattern: &lt;code&gt;arn:(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storeFormat" /></td>
    <td><code>string</code></td>
    <td>The store's annotation file format. (GFF, TSV, VCF)</td>
</tr>
<tr>
    <td><CopyableCode code="storeOptions" /></td>
    <td><code>object</code></td>
    <td>Settings for a store.</td>
</tr>
<tr>
    <td><CopyableCode code="storeSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The store's size in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The store's tags.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_annotation_stores">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The store's creation time.</td>
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
    <td><CopyableCode code="sseConfig" /></td>
    <td><code>object</code></td>
    <td>Server-side encryption (SSE) settings for a store.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The store's status. (CREATING, UPDATING, DELETING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The store's status message.</td>
</tr>
<tr>
    <td><CopyableCode code="storeArn" /></td>
    <td><code>string</code></td>
    <td>The store's ARN. (pattern: &lt;code&gt;arn:(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storeFormat" /></td>
    <td><code>string</code></td>
    <td>The store's file format. (GFF, TSV, VCF)</td>
</tr>
<tr>
    <td><CopyableCode code="storeSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The store's size in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
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
    <td><a href="#get_annotation_store"><CopyableCode code="get_annotation_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Gets information about an annotation store.</td>
</tr>
<tr>
    <td><a href="#list_annotation_stores"><CopyableCode code="list_annotation_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Retrieves a list of annotation stores.</td>
</tr>
<tr>
    <td><a href="#create_annotation_store"><CopyableCode code="create_annotation_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-storeFormat"><code>storeFormat</code></a></td>
    <td></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Creates an annotation store.</td>
</tr>
<tr>
    <td><a href="#update_annotation_store"><CopyableCode code="update_annotation_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Updates an annotation store.</td>
</tr>
<tr>
    <td><a href="#delete_annotation_store"><CopyableCode code="delete_annotation_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Deletes an annotation store.</td>
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
    defaultValue="get_annotation_store"
    values={[
        { label: 'get_annotation_store', value: 'get_annotation_store' },
        { label: 'list_annotation_stores', value: 'list_annotation_stores' }
    ]}
>
<TabItem value="get_annotation_store">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Gets information about an annotation store.

```sql
SELECT
id,
name,
creationTime,
description,
numVersions,
reference,
sseConfig,
status,
statusMessage,
storeArn,
storeFormat,
storeOptions,
storeSizeBytes,
tags,
updateTime
FROM aws.omics.annotation_stores
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_annotation_stores">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Retrieves a list of annotation stores.

```sql
SELECT
id,
name,
creationTime,
description,
reference,
sseConfig,
status,
statusMessage,
storeArn,
storeFormat,
storeSizeBytes,
updateTime
FROM aws.omics.annotation_stores
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_annotation_store"
    values={[
        { label: 'create_annotation_store', value: 'create_annotation_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_annotation_store">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Creates an annotation store.

```sql
INSERT INTO aws.omics.annotation_stores (
reference,
name,
description,
tags,
versionName,
sseConfig,
storeFormat,
storeOptions,
region
)
SELECT 
'{{ reference }}',
'{{ name }}',
'{{ description }}',
'{{ tags }}',
'{{ versionName }}',
'{{ sseConfig }}',
'{{ storeFormat }}' /* required */,
'{{ storeOptions }}',
'{{ region }}'
RETURNING
id,
name,
creationTime,
reference,
status,
storeFormat,
storeOptions,
versionName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: annotation_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the annotation_stores resource.
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
    - name: versionName
      value: "{{ versionName }}"
    - name: sseConfig
      description: |
        Server-side encryption (SSE) settings for a store.
      value:
        type_: "{{ type_ }}"
        keyArn: "{{ keyArn }}"
    - name: storeFormat
      value: "{{ storeFormat }}"
      valid_values: ['GFF', 'TSV', 'VCF']
    - name: storeOptions
      description: |
        Settings for a store.
      value:
        tsvStoreOptions:
          annotationType: "{{ annotationType }}"
          formatToHeader: "{{ formatToHeader }}"
          schema: "{{ schema }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_annotation_store"
    values={[
        { label: 'update_annotation_store', value: 'update_annotation_store' }
    ]}
>
<TabItem value="update_annotation_store">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Updates an annotation store.

```sql
UPDATE aws.omics.annotation_stores
SET 
description = '{{ description }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
creationTime,
description,
reference,
status,
storeFormat,
storeOptions,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_annotation_store"
    values={[
        { label: 'delete_annotation_store', value: 'delete_annotation_store' }
    ]}
>
<TabItem value="delete_annotation_store">

Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change. Deletes an annotation store.

```sql
DELETE FROM aws.omics.annotation_stores
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
