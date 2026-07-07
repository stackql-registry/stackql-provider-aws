--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - ce
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tags"
    values={[
        { label: 'get_tags', value: 'get_tags' },
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="get_tags">

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
    <td><CopyableCode code="NextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReturnSize" /></td>
    <td><code>integer</code></td>
    <td>The number of query results that Amazon Web Services returns at a time.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags that match your request.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalSize" /></td>
    <td><code>integer</code></td>
    <td>The total number of query results.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="ResourceTags" /></td>
    <td><code>array</code></td>
    <td>A list of tag key value pairs that are associated with the resource.</td>
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
    <td><a href="#get_tags"><CopyableCode code="get_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string.</td>
</tr>
<tr>
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-ResourceTags"><code>ResourceTags</code></a></td>
    <td></td>
    <td>An API operation for adding one or more tags (key-value pairs) to a resource. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag. Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-ResourceTagKeys"><code>ResourceTagKeys</code></a></td>
    <td></td>
    <td>Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value.</td>
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
    defaultValue="get_tags"
    values={[
        { label: 'get_tags', value: 'get_tags' },
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="get_tags">

Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string.

```sql
SELECT
NextPageToken,
ReturnSize,
Tags,
TotalSize
FROM aws.ce.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tags_for_resource">

Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN).

```sql
SELECT
ResourceTags
FROM aws.ce.tags
WHERE region = '{{ region }}' -- required
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

An API operation for adding one or more tags (key-value pairs) to a resource. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag. Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.

```sql
UPDATE aws.ce.tags
SET 
ResourceArn = '{{ ResourceArn }}',
ResourceTags = '{{ ResourceTags }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND ResourceTags = '{{ ResourceTags }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value.

```sql
UPDATE aws.ce.tags
SET 
ResourceArn = '{{ ResourceArn }}',
ResourceTagKeys = '{{ ResourceTagKeys }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND ResourceTagKeys = '{{ ResourceTagKeys }}' --required;
```
</TabItem>
</Tabs>
