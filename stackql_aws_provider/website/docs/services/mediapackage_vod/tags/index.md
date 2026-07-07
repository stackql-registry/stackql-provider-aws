--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - mediapackage_vod
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackage_vod.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

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
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>A collection of tags associated with a resource</td>
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
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource-arn"><code>resource-arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the tags assigned to the specified resource.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource-arn"><code>resource-arn</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes tags from the specified resource. You can specify one or more tags to remove.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource-arn"><code>resource-arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds tags to the specified resource. You can specify one or more tags to add.</td>
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
<tr id="parameter-resource-arn">
    <td><CopyableCode code="resource-arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.</td>
</tr>
<tr id="parameter-tagKeys">
    <td><CopyableCode code="tagKeys" /></td>
    <td><code>array</code></td>
    <td>A comma-separated list of the tag keys to remove from the resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

Returns a list of the tags assigned to the specified resource.

```sql
SELECT
Tags
FROM aws.mediapackage_vod.tags
WHERE `resource-arn` = '{{ resource-arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_resource"
    values={[
        { label: 'untag_resource', value: 'untag_resource' },
        { label: 'tag_resource', value: 'tag_resource' }
    ]}
>
<TabItem value="untag_resource">

Removes tags from the specified resource. You can specify one or more tags to remove.

```sql
UPDATE aws.mediapackage_vod.tags
SET 
-- No updatable properties
WHERE 
`resource-arn` = '{{ resource-arn }}' --required
AND tagKeys = '{{ tagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Adds tags to the specified resource. You can specify one or more tags to add.

```sql
UPDATE aws.mediapackage_vod.tags
SET 
Tags = '{{ Tags }}'
WHERE 
`resource-arn` = '{{ resource-arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
