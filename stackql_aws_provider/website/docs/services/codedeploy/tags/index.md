--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - codedeploy
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.tags" /></td></tr>
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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags returned by ListTagsForResource. The tags are associated with the resource identified by the input ResourceArn parameter.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources.</td>
</tr>
<tr>
    <td><a href="#add_tags_to_on_premises_instances"><CopyableCode code="add_tags_to_on_premises_instances" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-instanceNames"><code>instanceNames</code></a></td>
    <td></td>
    <td>Adds tags to on-premises instances.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Disassociates a resource from a list of tags. The resource is identified by the ResourceArn input parameter. The tags are identified by the list of keys in the TagKeys input parameter.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Associates the list of tags in the input Tags parameter with the resource identified by the ResourceArn input parameter.</td>
</tr>
<tr>
    <td><a href="#remove_tags_from_on_premises_instances"><CopyableCode code="remove_tags_from_on_premises_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-instanceNames"><code>instanceNames</code></a></td>
    <td></td>
    <td>Removes one or more tags from one or more on-premises instances.</td>
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
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources.

```sql
SELECT
next_token,
tags
FROM aws.codedeploy.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_tags_to_on_premises_instances"
    values={[
        { label: 'add_tags_to_on_premises_instances', value: 'add_tags_to_on_premises_instances' },
        { label: 'untag_resource', value: 'untag_resource' },
        { label: 'tag_resource', value: 'tag_resource' }
    ]}
>
<TabItem value="add_tags_to_on_premises_instances">

Adds tags to on-premises instances.

```sql
UPDATE aws.codedeploy.tags
SET 
tags = '{{ tags }}',
instanceNames = '{{ instanceNames }}'
WHERE 
region = '{{ region }}' --required
AND tags = '{{ tags }}' --required
AND instanceNames = '{{ instanceNames }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Disassociates a resource from a list of tags. The resource is identified by the ResourceArn input parameter. The tags are identified by the list of keys in the TagKeys input parameter.

```sql
UPDATE aws.codedeploy.tags
SET 
ResourceArn = '{{ ResourceArn }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Associates the list of tags in the input Tags parameter with the resource identified by the ResourceArn input parameter.

```sql
UPDATE aws.codedeploy.tags
SET 
ResourceArn = '{{ ResourceArn }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_tags_from_on_premises_instances"
    values={[
        { label: 'remove_tags_from_on_premises_instances', value: 'remove_tags_from_on_premises_instances' }
    ]}
>
<TabItem value="remove_tags_from_on_premises_instances">

Removes one or more tags from one or more on-premises instances.

```sql
EXEC aws.codedeploy.tags.remove_tags_from_on_premises_instances 
@region='{{ region }}' --required 
@@json=
'{
"tags": "{{ tags }}", 
"instanceNames": "{{ instanceNames }}"
}'
;
```
</TabItem>
</Tabs>
