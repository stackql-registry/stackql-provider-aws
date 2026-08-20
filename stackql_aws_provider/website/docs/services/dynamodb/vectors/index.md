--- 
title: vectors
hide_title: false
hide_table_of_contents: false
keywords:
  - vectors
  - dynamodb
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

Creates, updates, deletes, gets or lists a <code>vectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.vectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_vectors"
    values={[
        { label: 'search_vectors', value: 'search_vectors' }
    ]}
>
<TabItem value="search_vectors">

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
    <td><CopyableCode code="consumed_capacity" /></td>
    <td><code>object</code></td>
    <td>The capacity units consumed by the SearchVectors operation. Contains VectorSearchRequestBytes, which represents the vector search capacity consumed.</td>
</tr>
<tr>
    <td><CopyableCode code="search_results" /></td>
    <td><code>array</code></td>
    <td>A list of items returned by the vector similarity search, sorted by similarity with the most similar item first. Each item contains the projected attributes and a similarity score.</td>
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
    <td><a href="#search_vectors"><CopyableCode code="search_vectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Performs a vector similarity search on a vector index associated with an Amazon DynamoDB table, and returns the most similar items sorted by similarity score based on the distance function configured for the index. Score interpretation depends on the distance function: COSINE - Returns the items with the k smallest scores. Scores range from 0 (identical) to 2 (opposite). Lower scores indicate higher similarity. EUCLIDEAN - Returns the items with the k smallest scores. Scores represent the Euclidean distance between vectors. Lower scores indicate higher similarity. DOT_PRODUCT - Returns the items with the k highest scores. Higher scores indicate higher similarity.</td>
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
    defaultValue="search_vectors"
    values={[
        { label: 'search_vectors', value: 'search_vectors' }
    ]}
>
<TabItem value="search_vectors">

Performs a vector similarity search on a vector index associated with an Amazon DynamoDB table, and returns the most similar items sorted by similarity score based on the distance function configured for the index. Score interpretation depends on the distance function: COSINE - Returns the items with the k smallest scores. Scores range from 0 (identical) to 2 (opposite). Lower scores indicate higher similarity. EUCLIDEAN - Returns the items with the k smallest scores. Scores represent the Euclidean distance between vectors. Lower scores indicate higher similarity. DOT_PRODUCT - Returns the items with the k highest scores. Higher scores indicate higher similarity.

```sql
SELECT
consumed_capacity,
search_results
FROM aws.dynamodb.vectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
