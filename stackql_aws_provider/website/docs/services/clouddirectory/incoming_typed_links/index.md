--- 
title: incoming_typed_links
hide_title: false
hide_table_of_contents: false
keywords:
  - incoming_typed_links
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

Creates, updates, deletes, gets or lists an <code>incoming_typed_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incoming_typed_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.incoming_typed_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_incoming_typed_links"
    values={[
        { label: 'list_incoming_typed_links', value: 'list_incoming_typed_links' }
    ]}
>
<TabItem value="list_incoming_typed_links">

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
    <td><CopyableCode code="identity_attribute_values" /></td>
    <td><code>array</code></td>
    <td>Identifies the attribute value to update.</td>
</tr>
<tr>
    <td><CopyableCode code="source_object_reference" /></td>
    <td><code>object</code></td>
    <td>The reference that identifies an object.</td>
</tr>
<tr>
    <td><CopyableCode code="target_object_reference" /></td>
    <td><code>object</code></td>
    <td>The reference that identifies an object.</td>
</tr>
<tr>
    <td><CopyableCode code="typed_link_facet" /></td>
    <td><code>object</code></td>
    <td>Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.</td>
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
    <td><a href="#list_incoming_typed_links"><CopyableCode code="list_incoming_typed_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of all the incoming TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed Links.</td>
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
    <td>The Amazon Resource Name (ARN) of the directory where you want to list the typed links.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_incoming_typed_links"
    values={[
        { label: 'list_incoming_typed_links', value: 'list_incoming_typed_links' }
    ]}
>
<TabItem value="list_incoming_typed_links">

Returns a paginated list of all the incoming TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see Typed Links.

```sql
SELECT
identity_attribute_values,
source_object_reference,
target_object_reference,
typed_link_facet
FROM aws.clouddirectory.incoming_typed_links
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
