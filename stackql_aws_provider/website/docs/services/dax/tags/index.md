--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - dax
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dax.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags"
    values={[
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="list_tags">

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
    <td>The key for the tag. Tag keys are case sensitive. Every DAX cluster can only have one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
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
    <td><a href="#list_tags"><CopyableCode code="list_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all of the tags for a DAX cluster. You can call ListTags up to 10 times per second, per account.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Removes the association of tags from a DAX resource. You can call UntagResource up to 5 times per second, per account.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a></td>
    <td></td>
    <td>Associates a set of tags with a DAX resource. You can call TagResource up to 5 times per second, per account.</td>
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
    defaultValue="list_tags"
    values={[
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="list_tags">

List all of the tags for a DAX cluster. You can call ListTags up to 10 times per second, per account.

```sql
SELECT
Key,
Value
FROM aws.dax.tags
WHERE region = '{{ region }}' -- required
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

Removes the association of tags from a DAX resource. You can call UntagResource up to 5 times per second, per account.

```sql
UPDATE aws.dax.tags
SET 
ResourceName = '{{ ResourceName }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND ResourceName = '{{ ResourceName }}' --required
AND TagKeys = '{{ TagKeys }}' --required
RETURNING
Tags;
```
</TabItem>
<TabItem value="tag_resource">

Associates a set of tags with a DAX resource. You can call TagResource up to 5 times per second, per account.

```sql
UPDATE aws.dax.tags
SET 
ResourceName = '{{ ResourceName }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ResourceName = '{{ ResourceName }}' --required
RETURNING
Tags;
```
</TabItem>
</Tabs>
