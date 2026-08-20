--- 
title: metadata_model_childrens
hide_title: false
hide_table_of_contents: false
keywords:
  - metadata_model_childrens
  - dms
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

Creates, updates, deletes, gets or lists a <code>metadata_model_childrens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metadata_model_childrens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.metadata_model_childrens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_metadata_model_children"
    values={[
        { label: 'describe_metadata_model_children', value: 'describe_metadata_model_children' }
    ]}
>
<TabItem value="describe_metadata_model_children">

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
    <td><CopyableCode code="metadata_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the metadata model.</td>
</tr>
<tr>
    <td><CopyableCode code="selection_rules" /></td>
    <td><code>string</code></td>
    <td>A JSON string that identifies this metadata model in the metadata tree. For the selection rule format, see Selection rules in DMS Schema Conversion. Usage: You can pass this value as the SelectionRules parameter to any operation that accepts selection rules, such as DescribeMetadataModel, StartMetadataModelConversion, and others.</td>
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
    <td><a href="#describe_metadata_model_children"><CopyableCode code="describe_metadata_model_children" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of child metadata models for the specified metadata model in the database hierarchy. Required permissions: dms:DescribeMetadataModelChildren. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
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
    defaultValue="describe_metadata_model_children"
    values={[
        { label: 'describe_metadata_model_children', value: 'describe_metadata_model_children' }
    ]}
>
<TabItem value="describe_metadata_model_children">

Gets a list of child metadata models for the specified metadata model in the database hierarchy. Required permissions: dms:DescribeMetadataModelChildren. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
SELECT
metadata_model_name,
selection_rules
FROM aws.dms.metadata_model_childrens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
