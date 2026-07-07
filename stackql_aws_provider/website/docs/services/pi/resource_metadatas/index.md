--- 
title: resource_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_metadatas
  - pi
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

Creates, updates, deletes, gets or lists a <code>resource_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pi.resource_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_metadata"
    values={[
        { label: 'get_resource_metadata', value: 'get_resource_metadata' }
    ]}
>
<TabItem value="get_resource_metadata">

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
    <td><CopyableCode code="Features" /></td>
    <td><code>object</code></td>
    <td>The metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Identifier" /></td>
    <td><code>string</code></td>
    <td>An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_resource_metadata"><CopyableCode code="get_resource_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.</td>
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
    defaultValue="get_resource_metadata"
    values={[
        { label: 'get_resource_metadata', value: 'get_resource_metadata' }
    ]}
>
<TabItem value="get_resource_metadata">

Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.

```sql
SELECT
Features,
Identifier
FROM aws.pi.resource_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
