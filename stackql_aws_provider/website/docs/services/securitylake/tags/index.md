--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - securitylake
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.tags" /></td></tr>
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
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of objects, one for each tag (key and value) that’s associated with the Amazon Security Lake resource.</td>
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
    <td>Retrieves the tags (keys and values) that are associated with an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Adds or updates one or more tags that are associated with an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region. A tag is a label that you can define and associate with Amazon Web Services resources. Each tag consists of a required tag key and an associated tag value. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor for a tag key. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. For more information, see Tagging Amazon Security Lake resources in the Amazon Security Lake User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes one or more tags (keys and values) from an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region.</td>
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
    <td>The Amazon Resource Name (ARN) of the Amazon Security Lake resource to remove one or more tags from.</td>
</tr>
<tr id="parameter-tagKeys">
    <td><CopyableCode code="tagKeys" /></td>
    <td><code>array</code></td>
    <td>A list of one or more tag keys. For each value in the list, specify the tag key for a tag to remove from the Amazon Security Lake resource.</td>
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

Retrieves the tags (keys and values) that are associated with an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region.

```sql
SELECT
tags
FROM aws.securitylake.tags
WHERE resource_arn = '{{ resource_arn }}' -- required
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

Adds or updates one or more tags that are associated with an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region. A tag is a label that you can define and associate with Amazon Web Services resources. Each tag consists of a required tag key and an associated tag value. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor for a tag key. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. For more information, see Tagging Amazon Security Lake resources in the Amazon Security Lake User Guide.

```sql
UPDATE aws.securitylake.tags
SET 
tags = '{{ tags }}'
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
AND tags = '{{ tags }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Removes one or more tags (keys and values) from an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region.

```sql
UPDATE aws.securitylake.tags
SET 
-- No updatable properties
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND tagKeys = '{{ tagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
