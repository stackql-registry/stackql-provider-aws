--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - location
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.tags" /></td></tr>
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
    <td>Tags that have been applied to the specified resource. Tags are mapped from the tag key to the tag value: "TagKey" : "TagValue". Format example: &#123;"tag1" : "value1", "tag2" : "value2"&#125;</td>
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
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of tags that are applied to the specified Amazon Location resource.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes one or more tags from the specified Amazon Location resource.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate up to 50 tags with a resource.</td>
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
    <td>The Amazon Resource Name (ARN) of the resource whose tags you want to update. Format example: arn:aws:geo:region:account-id:resourcetype/ExampleResource</td>
</tr>
<tr id="parameter-tagKeys">
    <td><CopyableCode code="tagKeys" /></td>
    <td><code>array</code></td>
    <td>The list of tag keys to remove from the specified resource.</td>
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

Returns a list of tags that are applied to the specified Amazon Location resource.

```sql
SELECT
Tags
FROM aws.location.tags
WHERE resource_arn = '{{ resource_arn }}' -- required
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

Removes one or more tags from the specified Amazon Location resource.

```sql
UPDATE aws.location.tags
SET 
-- No updatable properties
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND tagKeys = '{{ tagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate up to 50 tags with a resource.

```sql
UPDATE aws.location.tags
SET 
Tags = '{{ Tags }}'
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
