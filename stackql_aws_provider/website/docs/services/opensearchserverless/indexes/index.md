--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
  - opensearchserverless
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.indexes" /></td></tr>
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
    <td><CopyableCode code="indexSchema" /></td>
    <td><code>object</code></td>
    <td>The JSON schema definition for the index, including field mappings and settings.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an index in an OpenSearch Serverless collection, including its schema definition. The index might be configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.</td>
</tr>
<tr>
    <td><a href="#create_index"><CopyableCode code="create_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-indexName"><code>indexName</code></a></td>
    <td></td>
    <td>Creates an index within an OpenSearch Serverless collection. Unlike other OpenSearch indexes, indexes created by this API are automatically configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment in the OpenSearch User Guide.</td>
</tr>
<tr>
    <td><a href="#update_index"><CopyableCode code="update_index" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-indexName"><code>indexName</code></a></td>
    <td></td>
    <td>Updates an existing index in an OpenSearch Serverless collection. This operation allows you to modify the index schema, including adding new fields or changing field mappings. You can also enable automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.</td>
</tr>
<tr>
    <td><a href="#delete_index"><CopyableCode code="delete_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an index from an OpenSearch Serverless collection. Be aware that the index might be configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.</td>
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

Retrieves information about an index in an OpenSearch Serverless collection, including its schema definition. The index might be configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.

```sql
SELECT
indexSchema
FROM aws.opensearchserverless.indexes
WHERE region = '{{ region }}' -- required
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

Creates an index within an OpenSearch Serverless collection. Unlike other OpenSearch indexes, indexes created by this API are automatically configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment in the OpenSearch User Guide.

```sql
INSERT INTO aws.opensearchserverless.indexes (
id,
indexName,
indexSchema,
region
)
SELECT 
'{{ id }}' /* required */,
'{{ indexName }}' /* required */,
'{{ indexSchema }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: indexes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the indexes resource.
    - name: id
      value: "{{ id }}"
      description: |
        The unique identifier of the collection in which to create the index.
    - name: indexName
      value: "{{ indexName }}"
      description: |
        The name of the index to create. Index names must be lowercase and can't begin with underscores (_) or hyphens (-).
    - name: indexSchema
      value: "{{ indexSchema }}"
      description: |
        The JSON schema definition for the index, including field mappings and settings.
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

Updates an existing index in an OpenSearch Serverless collection. This operation allows you to modify the index schema, including adding new fields or changing field mappings. You can also enable automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.

```sql
UPDATE aws.opensearchserverless.indexes
SET 
id = '{{ id }}',
indexName = '{{ indexName }}',
indexSchema = '{{ indexSchema }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
AND indexName = '{{ indexName }}' --required;
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

Deletes an index from an OpenSearch Serverless collection. Be aware that the index might be configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.

```sql
DELETE FROM aws.opensearchserverless.indexes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
