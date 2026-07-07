--- 
title: artifact_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - artifact_metadatas
  - securityagent
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

Creates, updates, deletes, gets or lists an <code>artifact_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="artifact_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.artifact_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_artifact_metadata"
    values={[
        { label: 'batch_get_artifact_metadata', value: 'batch_get_artifact_metadata' }
    ]}
>
<TabItem value="batch_get_artifact_metadata">

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
    <td><CopyableCode code="artifactMetadataList" /></td>
    <td><code>array</code></td>
    <td>The list of artifact metadata items that were found.</td>
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
    <td><a href="#batch_get_artifact_metadata"><CopyableCode code="batch_get_artifact_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for one or more artifacts in an agent space.</td>
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
    defaultValue="batch_get_artifact_metadata"
    values={[
        { label: 'batch_get_artifact_metadata', value: 'batch_get_artifact_metadata' }
    ]}
>
<TabItem value="batch_get_artifact_metadata">

Retrieves metadata for one or more artifacts in an agent space.

```sql
SELECT
artifactMetadataList
FROM aws.securityagent.artifact_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
