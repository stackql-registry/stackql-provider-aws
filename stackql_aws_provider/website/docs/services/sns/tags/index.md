--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - sns
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.tags" /></td></tr>
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
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>The required key portion of the tag.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The optional value portion of the tag.</td>
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
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all tags added to the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the Amazon Simple Notification Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Add tags to the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the Amazon SNS Developer Guide. When you use topic tags, keep the following guidelines in mind: Adding more than 50 tags to a topic isn't recommended. Tags don't have any semantic meaning. Amazon SNS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If your application requires a higher throughput, file a technical support request.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove tags from the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the Amazon SNS Developer Guide.</td>
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
<tr id="parameter-ResourceArn">
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the topic from which to remove tags.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>The list of tag keys to remove from the specified topic.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be added to the specified topic. A tag consists of a required key and an optional value.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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

List all tags added to the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the Amazon Simple Notification Service Developer Guide.

```sql
SELECT
Key,
Value
FROM aws.sns.tags
WHERE ResourceArn = '{{ ResourceArn }}' -- required
AND region = '{{ region }}' -- required
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

Add tags to the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the Amazon SNS Developer Guide. When you use topic tags, keep the following guidelines in mind: Adding more than 50 tags to a topic isn't recommended. Tags don't have any semantic meaning. Amazon SNS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If your application requires a higher throughput, file a technical support request.

```sql
UPDATE aws.sns.tags
SET 
-- No updatable properties
WHERE 
ResourceArn = '{{ ResourceArn }}' --required
AND Tags = '{{ Tags }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Remove tags from the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the Amazon SNS Developer Guide.

```sql
UPDATE aws.sns.tags
SET 
-- No updatable properties
WHERE 
ResourceArn = '{{ ResourceArn }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
