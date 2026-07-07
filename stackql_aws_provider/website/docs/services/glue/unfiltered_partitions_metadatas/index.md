--- 
title: unfiltered_partitions_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - unfiltered_partitions_metadatas
  - glue
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

Creates, updates, deletes, gets or lists an <code>unfiltered_partitions_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="unfiltered_partitions_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.unfiltered_partitions_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_unfiltered_partitions_metadata"
    values={[
        { label: 'get_unfiltered_partitions_metadata', value: 'get_unfiltered_partitions_metadata' }
    ]}
>
<TabItem value="get_unfiltered_partitions_metadata">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A continuation token, if the returned list of partitions does not include the last one.</td>
</tr>
<tr>
    <td><CopyableCode code="UnfilteredPartitions" /></td>
    <td><code>array</code></td>
    <td>A list of requested partitions.</td>
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
    <td><a href="#get_unfiltered_partitions_metadata"><CopyableCode code="get_unfiltered_partitions_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata. For IAM authorization, the public IAM action associated with this API is glue:GetPartitions.</td>
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
    defaultValue="get_unfiltered_partitions_metadata"
    values={[
        { label: 'get_unfiltered_partitions_metadata', value: 'get_unfiltered_partitions_metadata' }
    ]}
>
<TabItem value="get_unfiltered_partitions_metadata">

Retrieves partition metadata from the Data Catalog that contains unfiltered metadata. For IAM authorization, the public IAM action associated with this API is glue:GetPartitions.

```sql
SELECT
NextToken,
UnfilteredPartitions
FROM aws.glue.unfiltered_partitions_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
