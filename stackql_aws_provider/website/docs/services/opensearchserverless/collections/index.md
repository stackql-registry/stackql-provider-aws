--- 
title: collections
hide_title: false
hide_table_of_contents: false
keywords:
  - collections
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

Creates, updates, deletes, gets or lists a <code>collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_collections"
    values={[
        { label: 'list_collections', value: 'list_collections' }
    ]}
>
<TabItem value="list_collections">

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
    <td><CopyableCode code="collection_summaries" /></td>
    <td><code>array</code></td>
    <td>Details about each collection.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</td>
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
    <td><a href="#list_collections"><CopyableCode code="list_collections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all OpenSearch Serverless collections. For more information, see Creating and managing Amazon OpenSearch Serverless collections. Make sure to include an empty request body &#123;&#125; if you don't include any collection filters in the request.</td>
</tr>
<tr>
    <td><a href="#create_collection"><CopyableCode code="create_collection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new OpenSearch Serverless collection. For more information, see Creating and managing Amazon OpenSearch Serverless collections.</td>
</tr>
<tr>
    <td><a href="#update_collection"><CopyableCode code="update_collection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Updates an OpenSearch Serverless collection.</td>
</tr>
<tr>
    <td><a href="#delete_collection"><CopyableCode code="delete_collection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OpenSearch Serverless collection. For more information, see Creating and managing Amazon OpenSearch Serverless collections.</td>
</tr>
<tr>
    <td><a href="#batch_get_collection"><CopyableCode code="batch_get_collection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns attributes for one or more collections, including the collection endpoint, the OpenSearch Dashboards endpoint, and FIPS-compliant endpoints. For more information, see Creating and managing Amazon OpenSearch Serverless collections.</td>
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
    defaultValue="list_collections"
    values={[
        { label: 'list_collections', value: 'list_collections' }
    ]}
>
<TabItem value="list_collections">

Lists all OpenSearch Serverless collections. For more information, see Creating and managing Amazon OpenSearch Serverless collections. Make sure to include an empty request body &#123;&#125; if you don't include any collection filters in the request.

```sql
SELECT
collection_summaries,
next_token
FROM aws.opensearchserverless.collections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_collection"
    values={[
        { label: 'create_collection', value: 'create_collection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_collection">

Creates a new OpenSearch Serverless collection. For more information, see Creating and managing Amazon OpenSearch Serverless collections.

```sql
INSERT INTO aws.opensearchserverless.collections (
name,
type,
description,
tags,
standbyReplicas,
vectorOptions,
collectionGroupName,
encryptionConfig,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}',
'{{ description }}',
'{{ tags }}',
'{{ standbyReplicas }}',
'{{ vectorOptions }}',
'{{ collectionGroupName }}',
'{{ encryptionConfig }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
create_collection_detail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: collections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the collections resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the collection.
    - name: type
      value: "{{ type }}"
      description: |
        The type of collection.
      valid_values: ['SEARCH', 'TIMESERIES', 'VECTORSEARCH']
    - name: description
      value: "{{ description }}"
      description: |
        Description of the collection.
    - name: tags
      description: |
        An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Serverless collection.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: standbyReplicas
      value: "{{ standbyReplicas }}"
      description: |
        Indicates whether standby replicas should be used for a collection.
      valid_values: ['ENABLED', 'DISABLED']
    - name: vectorOptions
      description: |
        Configuration options for vector search capabilities in the collection.
      value:
        ServerlessVectorAcceleration: "{{ ServerlessVectorAcceleration }}"
    - name: collectionGroupName
      value: "{{ collectionGroupName }}"
      description: |
        The name of the collection group to associate with the collection.
    - name: encryptionConfig
      description: |
        Encryption settings for the collection.
      value:
        aWSOwnedKey: {{ aWSOwnedKey }}
        kmsKeyArn: "{{ kmsKeyArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Unique, case-sensitive identifier to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_collection"
    values={[
        { label: 'update_collection', value: 'update_collection' }
    ]}
>
<TabItem value="update_collection">

Updates an OpenSearch Serverless collection.

```sql
UPDATE aws.opensearchserverless.collections
SET 
id = '{{ id }}',
description = '{{ description }}',
vectorOptions = '{{ vectorOptions }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
RETURNING
update_collection_detail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_collection"
    values={[
        { label: 'delete_collection', value: 'delete_collection' }
    ]}
>
<TabItem value="delete_collection">

Deletes an OpenSearch Serverless collection. For more information, see Creating and managing Amazon OpenSearch Serverless collections.

```sql
DELETE FROM aws.opensearchserverless.collections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_get_collection"
    values={[
        { label: 'batch_get_collection', value: 'batch_get_collection' }
    ]}
>
<TabItem value="batch_get_collection">

Returns attributes for one or more collections, including the collection endpoint, the OpenSearch Dashboards endpoint, and FIPS-compliant endpoints. For more information, see Creating and managing Amazon OpenSearch Serverless collections.

```sql
EXEC aws.opensearchserverless.collections.batch_get_collection 
@region='{{ region }}' --required 
@@json=
'{
"ids": "{{ ids }}", 
"names": "{{ names }}"
}'
;
```
</TabItem>
</Tabs>
