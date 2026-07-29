--- 
title: typed_link_facet_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - typed_link_facet_attributes
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

Creates, updates, deletes, gets or lists a <code>typed_link_facet_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="typed_link_facet_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.typed_link_facet_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_typed_link_facet_attributes"
    values={[
        { label: 'list_typed_link_facet_attributes', value: 'list_typed_link_facet_attributes' }
    ]}
>
<TabItem value="list_typed_link_facet_attributes">

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
    <td><CopyableCode code="default_value" /></td>
    <td><code>object</code></td>
    <td>The default value of the attribute (if configured).</td>
</tr>
<tr>
    <td><CopyableCode code="is_immutable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the attribute is mutable or not.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the typed link attribute. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._:-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="required_behavior" /></td>
    <td><code>string</code></td>
    <td>The required behavior of the TypedLinkAttributeDefinition. (REQUIRED_ALWAYS, NOT_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>object</code></td>
    <td>Validation rules that are attached to the attribute definition.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the attribute. (STRING, BINARY, BOOLEAN, NUMBER, DATETIME, VARIANT)</td>
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
    <td><a href="#list_typed_link_facet_attributes"><CopyableCode code="list_typed_link_facet_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of all attribute definitions for a particular TypedLinkFacet. For more information, see Typed Links.</td>
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
    <td>The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_typed_link_facet_attributes"
    values={[
        { label: 'list_typed_link_facet_attributes', value: 'list_typed_link_facet_attributes' }
    ]}
>
<TabItem value="list_typed_link_facet_attributes">

Returns a paginated list of all attribute definitions for a particular TypedLinkFacet. For more information, see Typed Links.

```sql
SELECT
default_value,
is_immutable,
name,
required_behavior,
rules,
type
FROM aws.clouddirectory.typed_link_facet_attributes
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
