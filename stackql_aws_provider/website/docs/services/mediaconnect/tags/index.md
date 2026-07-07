--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - mediaconnect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_global_resource"
    values={[
        { label: 'list_tags_for_global_resource', value: 'list_tags_for_global_resource' }
    ]}
>
<TabItem value="list_tags_for_global_resource">

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
    <td>A map of tag keys and values associated with the global resource.</td>
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
    <td><a href="#list_tags_for_global_resource"><CopyableCode code="list_tags_for_global_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the tags associated with a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.</td>
</tr>
<tr>
    <td><a href="#untag_global_resource"><CopyableCode code="untag_global_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes tags from a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.</td>
</tr>
<tr>
    <td><a href="#tag_global_resource"><CopyableCode code="tag_global_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds tags to a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.</td>
</tr>
<tr>
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all tags on a MediaConnect resource in the current region.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates the specified tags to a resource with the specified resourceArn in the current region. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes specified tags from a resource in the current region.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource that you want to untag.</td>
</tr>
<tr id="parameter-tagKeys">
    <td><CopyableCode code="tagKeys" /></td>
    <td><code>array</code></td>
    <td>The keys of the tags to be removed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tags_for_global_resource"
    values={[
        { label: 'list_tags_for_global_resource', value: 'list_tags_for_global_resource' }
    ]}
>
<TabItem value="list_tags_for_global_resource">

Lists the tags associated with a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.

```sql
SELECT
Tags
FROM aws.mediaconnect.tags
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_global_resource"
    values={[
        { label: 'untag_global_resource', value: 'untag_global_resource' },
        { label: 'tag_global_resource', value: 'tag_global_resource' }
    ]}
>
<TabItem value="untag_global_resource">

Removes tags from a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.

```sql
UPDATE aws.mediaconnect.tags
SET 
-- No updatable properties
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND tagKeys = '{{ tagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="tag_global_resource">

Adds tags to a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.

```sql
UPDATE aws.mediaconnect.tags
SET 
Tags = '{{ Tags }}'
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' },
        { label: 'tag_resource', value: 'tag_resource' },
        { label: 'untag_resource', value: 'untag_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

List all tags on a MediaConnect resource in the current region.

```sql
EXEC aws.mediaconnect.tags.list_tags_for_resource 
@resource_arn='{{ resource_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="tag_resource">

Associates the specified tags to a resource with the specified resourceArn in the current region. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.

```sql
EXEC aws.mediaconnect.tags.tag_resource 
@resource_arn='{{ resource_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="untag_resource">

Deletes specified tags from a resource in the current region.

```sql
EXEC aws.mediaconnect.tags.untag_resource 
@resource_arn='{{ resource_arn }}' --required, 
@tagKeys='{{ tagKeys }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
