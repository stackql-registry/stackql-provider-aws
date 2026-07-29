--- 
title: indexing_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - indexing_configurations
  - iot
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

Creates, updates, deletes, gets or lists an <code>indexing_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexing_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.indexing_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_indexing_configuration"
    values={[
        { label: 'get_indexing_configuration', value: 'get_indexing_configuration' }
    ]}
>
<TabItem value="get_indexing_configuration">

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
    <td><CopyableCode code="thing_group_indexing_configuration" /></td>
    <td><code>object</code></td>
    <td>The index configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="thing_indexing_configuration" /></td>
    <td><code>object</code></td>
    <td>Thing indexing configuration.</td>
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
    <td><a href="#get_indexing_configuration"><CopyableCode code="get_indexing_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the indexing configuration. Requires permission to access the GetIndexingConfiguration action.</td>
</tr>
<tr>
    <td><a href="#update_indexing_configuration"><CopyableCode code="update_indexing_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the search configuration. Requires permission to access the UpdateIndexingConfiguration action.</td>
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
    defaultValue="get_indexing_configuration"
    values={[
        { label: 'get_indexing_configuration', value: 'get_indexing_configuration' }
    ]}
>
<TabItem value="get_indexing_configuration">

Gets the indexing configuration. Requires permission to access the GetIndexingConfiguration action.

```sql
SELECT
thing_group_indexing_configuration,
thing_indexing_configuration
FROM aws.iot.indexing_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_indexing_configuration"
    values={[
        { label: 'update_indexing_configuration', value: 'update_indexing_configuration' }
    ]}
>
<TabItem value="update_indexing_configuration">

Updates the search configuration. Requires permission to access the UpdateIndexingConfiguration action.

```sql
UPDATE aws.iot.indexing_configurations
SET 
thingIndexingConfiguration = '{{ thingIndexingConfiguration }}',
thingGroupIndexingConfiguration = '{{ thingGroupIndexingConfiguration }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
