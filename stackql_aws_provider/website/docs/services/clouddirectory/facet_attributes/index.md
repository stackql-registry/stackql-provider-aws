--- 
title: facet_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - facet_attributes
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

Creates, updates, deletes, gets or lists a <code>facet_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="facet_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.facet_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_facet_attributes"
    values={[
        { label: 'list_facet_attributes', value: 'list_facet_attributes' }
    ]}
>
<TabItem value="list_facet_attributes">

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
    <td><CopyableCode code="attribute_definition" /></td>
    <td><code>object</code></td>
    <td>A facet attribute consists of either a definition or a reference. This structure contains the attribute definition. See Attribute References for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="attribute_reference" /></td>
    <td><code>object</code></td>
    <td>An attribute reference that is associated with the attribute. See Attribute References for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the facet attribute. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._:-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="required_behavior" /></td>
    <td><code>string</code></td>
    <td>The required behavior of the FacetAttribute. (REQUIRED_ALWAYS, NOT_REQUIRED)</td>
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
    <td><a href="#list_facet_attributes"><CopyableCode code="list_facet_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves attributes attached to the facet.</td>
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
    <td>The ARN of the schema where the facet resides.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_facet_attributes"
    values={[
        { label: 'list_facet_attributes', value: 'list_facet_attributes' }
    ]}
>
<TabItem value="list_facet_attributes">

Retrieves attributes attached to the facet.

```sql
SELECT
attribute_definition,
attribute_reference,
name,
required_behavior
FROM aws.clouddirectory.facet_attributes
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
