--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
  - opensearch
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

Creates, updates, deletes, gets or lists an <code>indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_index"
    values={[
        { label: 'get_index', value: 'get_index' }
    ]}
>
<TabItem value="get_index">

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
    <td><CopyableCode code="IndexSchema" /></td>
    <td><code>object</code></td>
    <td>The JSON schema of the index including mappings, settings, and semantic enrichment configuration.</td>
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
    <td><a href="#get_index"><CopyableCode code="get_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an OpenSearch index including its schema and semantic enrichment configuration. Use this operation to view the current index structure and semantic search settings.</td>
</tr>
<tr>
    <td><a href="#create_index"><CopyableCode code="create_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexName"><code>IndexName</code></a>, <a href="#parameter-IndexSchema"><code>IndexSchema</code></a></td>
    <td></td>
    <td>Creates an OpenSearch index with optional automatic semantic enrichment for specified text fields. Automatic semantic enrichment enables semantic search capabilities without requiring machine learning expertise, improving search relevance by up to 20% by understanding search intent and contextual meaning beyond keyword matching. The semantic enrichment process has zero impact on search latency as sparse encodings are stored directly within the index during indexing. For more information, see Automatic semantic enrichment.</td>
</tr>
<tr>
    <td><a href="#update_index"><CopyableCode code="update_index" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexSchema"><code>IndexSchema</code></a></td>
    <td></td>
    <td>Updates an existing OpenSearch index schema and semantic enrichment configuration. This operation allows modification of field mappings and semantic search settings for text fields. Changes to semantic enrichment configuration will apply to newly ingested documents.</td>
</tr>
<tr>
    <td><a href="#delete_index"><CopyableCode code="delete_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OpenSearch index. This operation permanently removes the index and cannot be undone.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-index_name">
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The name of the index to delete.</td>
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
    defaultValue="get_index"
    values={[
        { label: 'get_index', value: 'get_index' }
    ]}
>
<TabItem value="get_index">

Retrieves information about an OpenSearch index including its schema and semantic enrichment configuration. Use this operation to view the current index structure and semantic search settings.

```sql
SELECT
IndexSchema
FROM aws.opensearch.indexes
WHERE domain_name = '{{ domain_name }}' -- required
AND index_name = '{{ index_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_index"
    values={[
        { label: 'create_index', value: 'create_index' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_index">

Creates an OpenSearch index with optional automatic semantic enrichment for specified text fields. Automatic semantic enrichment enables semantic search capabilities without requiring machine learning expertise, improving search relevance by up to 20% by understanding search intent and contextual meaning beyond keyword matching. The semantic enrichment process has zero impact on search latency as sparse encodings are stored directly within the index during indexing. For more information, see Automatic semantic enrichment.

```sql
INSERT INTO aws.opensearch.indexes (
IndexName,
IndexSchema,
domain_name,
region
)
SELECT 
'{{ IndexName }}' /* required */,
'{{ IndexSchema }}' /* required */,
'{{ domain_name }}',
'{{ region }}'
RETURNING
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: indexes
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the indexes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the indexes resource.
    - name: IndexName
      value: "{{ IndexName }}"
      description: |
        Name of OpenSearch index to be created/updated/retrieved/deleted for customer's domain
    - name: IndexSchema
      value: "{{ IndexSchema }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_index"
    values={[
        { label: 'update_index', value: 'update_index' }
    ]}
>
<TabItem value="update_index">

Updates an existing OpenSearch index schema and semantic enrichment configuration. This operation allows modification of field mappings and semantic search settings for text fields. Changes to semantic enrichment configuration will apply to newly ingested documents.

```sql
UPDATE aws.opensearch.indexes
SET 
IndexSchema = '{{ IndexSchema }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND index_name = '{{ index_name }}' --required
AND region = '{{ region }}' --required
AND IndexSchema = '{{ IndexSchema }}' --required
RETURNING
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_index"
    values={[
        { label: 'delete_index', value: 'delete_index' }
    ]}
>
<TabItem value="delete_index">

Deletes an OpenSearch index. This operation permanently removes the index and cannot be undone.

```sql
DELETE FROM aws.opensearch.indexes
WHERE domain_name = '{{ domain_name }}' --required
AND index_name = '{{ index_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
