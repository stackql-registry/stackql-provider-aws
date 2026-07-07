--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - keyspaces
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.keyspaces.tags" /></td></tr>
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
    <td>The key of the tag. Tag keys are case sensitive. Each Amazon Keyspaces resource can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the tag. Tag values are case-sensitive and can be null.</td>
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
    <td>Returns a list of all tags associated with the specified Amazon Keyspaces resource. To read keyspace metadata using ListTagsForResource, the IAM principal needs Select action permissions for the specified resource and the system keyspace.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see Adding tags and labels to Amazon Keyspaces resources in the Amazon Keyspaces Developer Guide. For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see Amazon Keyspaces resource access based on tags in the Amazon Keyspaces Developer Guide.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Removes the association of tags from a Amazon Keyspaces resource.</td>
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

Returns a list of all tags associated with the specified Amazon Keyspaces resource. To read keyspace metadata using ListTagsForResource, the IAM principal needs Select action permissions for the specified resource and the system keyspace.

```sql
SELECT
key,
value
FROM aws.keyspaces.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="tag_resource"
    values={[
        { label: 'tag_resource', value: 'tag_resource' }
    ]}
>
<TabItem value="tag_resource">

Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see Adding tags and labels to Amazon Keyspaces resources in the Amazon Keyspaces Developer Guide. For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see Amazon Keyspaces resource access based on tags in the Amazon Keyspaces Developer Guide.

```sql
UPDATE aws.keyspaces.tags
SET 
resourceArn = '{{ resourceArn }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND resourceArn = '{{ resourceArn }}' --required
AND tags = '{{ tags }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="untag_resource"
    values={[
        { label: 'untag_resource', value: 'untag_resource' }
    ]}
>
<TabItem value="untag_resource">

Removes the association of tags from a Amazon Keyspaces resource.

```sql
EXEC aws.keyspaces.tags.untag_resource 
@region='{{ region }}' --required 
@@json=
'{
"resourceArn": "{{ resourceArn }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
