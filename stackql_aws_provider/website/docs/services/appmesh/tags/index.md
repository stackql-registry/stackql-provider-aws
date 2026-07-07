--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - appmesh
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appmesh.tags" /></td></tr>
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
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</td>
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
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List the tags for an App Mesh resource.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a></td>
    <td></td>
    <td>Deletes specified tags from a resource.</td>
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
<tr id="parameter-resourceArn">
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource to delete tags from.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of tag results returned by ListTagsForResource in paginated output. When this parameter is used, ListTagsForResource returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListTagsForResource request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListTagsForResource returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListTagsForResource request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.</td>
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

List the tags for an App Mesh resource.

```sql
SELECT
key,
value
FROM aws.appmesh.tags
WHERE resourceArn = '{{ resourceArn }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="tag_resource"
    values={[
        { label: 'tag_resource', value: 'tag_resource' },
        { label: 'untag_resource', value: 'untag_resource' }
    ]}
>
<TabItem value="tag_resource">

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

```sql
UPDATE aws.appmesh.tags
SET 
tags = '{{ tags }}'
WHERE 
resourceArn = '{{ resourceArn }}' --required
AND region = '{{ region }}' --required
AND tags = '{{ tags }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Deletes specified tags from a resource.

```sql
UPDATE aws.appmesh.tags
SET 
tagKeys = '{{ tagKeys }}'
WHERE 
resourceArn = '{{ resourceArn }}' --required
AND region = '{{ region }}' --required
AND tagKeys = '{{ tagKeys }}' --required;
```
</TabItem>
</Tabs>
