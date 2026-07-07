--- 
title: unfiltered_partition_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - unfiltered_partition_metadatas
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

Creates, updates, deletes, gets or lists an <code>unfiltered_partition_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="unfiltered_partition_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.unfiltered_partition_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_unfiltered_partition_metadata"
    values={[
        { label: 'get_unfiltered_partition_metadata', value: 'get_unfiltered_partition_metadata' }
    ]}
>
<TabItem value="get_unfiltered_partition_metadata">

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
    <td><CopyableCode code="AuthorizedColumns" /></td>
    <td><code>array</code></td>
    <td>A list of column names that the user has been granted access to.</td>
</tr>
<tr>
    <td><CopyableCode code="IsRegisteredWithLakeFormation" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that indicates whether the partition location is registered with Lake Formation.</td>
</tr>
<tr>
    <td><CopyableCode code="Partition" /></td>
    <td><code>object</code></td>
    <td>Represents a slice of table data.</td>
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
    <td><a href="#get_unfiltered_partition_metadata"><CopyableCode code="get_unfiltered_partition_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata. For IAM authorization, the public IAM action associated with this API is glue:GetPartition.</td>
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
    defaultValue="get_unfiltered_partition_metadata"
    values={[
        { label: 'get_unfiltered_partition_metadata', value: 'get_unfiltered_partition_metadata' }
    ]}
>
<TabItem value="get_unfiltered_partition_metadata">

Retrieves partition metadata from the Data Catalog that contains unfiltered metadata. For IAM authorization, the public IAM action associated with this API is glue:GetPartition.

```sql
SELECT
AuthorizedColumns,
IsRegisteredWithLakeFormation,
Partition
FROM aws.glue.unfiltered_partition_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
