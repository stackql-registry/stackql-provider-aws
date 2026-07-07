--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - datapipeline
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datapipeline.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_tags"><CopyableCode code="add_tags" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Adds or modifies tags for the specified pipeline.</td>
</tr>
<tr>
    <td><a href="#remove_tags"><CopyableCode code="remove_tags" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a></td>
    <td></td>
    <td>Removes existing tags from the specified pipeline.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="add_tags"
    values={[
        { label: 'add_tags', value: 'add_tags' },
        { label: 'remove_tags', value: 'remove_tags' }
    ]}
>
<TabItem value="add_tags">

Adds or modifies tags for the specified pipeline.

```sql
UPDATE aws.datapipeline.tags
SET 
pipelineId = '{{ pipelineId }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND pipelineId = '{{ pipelineId }}' --required
AND tags = '{{ tags }}' --required;
```
</TabItem>
<TabItem value="remove_tags">

Removes existing tags from the specified pipeline.

```sql
UPDATE aws.datapipeline.tags
SET 
pipelineId = '{{ pipelineId }}',
tagKeys = '{{ tagKeys }}'
WHERE 
region = '{{ region }}' --required
AND pipelineId = '{{ pipelineId }}' --required
AND tagKeys = '{{ tagKeys }}' --required;
```
</TabItem>
</Tabs>
