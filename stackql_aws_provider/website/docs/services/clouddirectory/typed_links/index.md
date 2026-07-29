--- 
title: typed_links
hide_title: false
hide_table_of_contents: false
keywords:
  - typed_links
  - clouddirectory
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

Creates, updates, deletes, gets or lists a <code>typed_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="typed_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.typed_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#attach_typed_link"><CopyableCode code="attach_typed_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceObjectReference"><code>SourceObjectReference</code></a>, <a href="#parameter-TargetObjectReference"><code>TargetObjectReference</code></a>, <a href="#parameter-TypedLinkFacet"><code>TypedLinkFacet</code></a>, <a href="#parameter-Attributes"><code>Attributes</code></a></td>
    <td></td>
    <td>Attaches a typed link to a specified source and target object. For more information, see Typed Links.</td>
</tr>
<tr>
    <td><a href="#detach_typed_link"><CopyableCode code="detach_typed_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TypedLinkSpecifier"><code>TypedLinkSpecifier</code></a></td>
    <td></td>
    <td>Detaches a typed link from a specified source and target object. For more information, see Typed Links.</td>
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
<tr id="parameter-x-amz-data-partition">
    <td><CopyableCode code="x-amz-data-partition" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the directory where you want to detach the typed link.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="attach_typed_link"
    values={[
        { label: 'attach_typed_link', value: 'attach_typed_link' },
        { label: 'detach_typed_link', value: 'detach_typed_link' }
    ]}
>
<TabItem value="attach_typed_link">

Attaches a typed link to a specified source and target object. For more information, see Typed Links.

```sql
UPDATE aws.clouddirectory.typed_links
SET 
SourceObjectReference = '{{ SourceObjectReference }}',
TargetObjectReference = '{{ TargetObjectReference }}',
TypedLinkFacet = '{{ TypedLinkFacet }}',
Attributes = '{{ Attributes }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND SourceObjectReference = '{{ SourceObjectReference }}' --required
AND TargetObjectReference = '{{ TargetObjectReference }}' --required
AND TypedLinkFacet = '{{ TypedLinkFacet }}' --required
AND Attributes = '{{ Attributes }}' --required
RETURNING
typed_link_specifier;
```
</TabItem>
<TabItem value="detach_typed_link">

Detaches a typed link from a specified source and target object. For more information, see Typed Links.

```sql
UPDATE aws.clouddirectory.typed_links
SET 
TypedLinkSpecifier = '{{ TypedLinkSpecifier }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND TypedLinkSpecifier = '{{ TypedLinkSpecifier }}' --required;
```
</TabItem>
</Tabs>
