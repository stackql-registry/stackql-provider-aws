--- 
title: model_manifest_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - model_manifest_nodes
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>model_manifest_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_manifest_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.model_manifest_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_model_manifest_nodes"
    values={[
        { label: 'list_model_manifest_nodes', value: 'list_model_manifest_nodes' }
    ]}
>
<TabItem value="list_model_manifest_nodes">

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
    <td><CopyableCode code="actuator" /></td>
    <td><code>object</code></td>
    <td>Information about a node specified as an actuator. An actuator is a digital representation of a vehicle device.</td>
</tr>
<tr>
    <td><CopyableCode code="attribute" /></td>
    <td><code>object</code></td>
    <td>Information about a node specified as an attribute. An attribute represents static information about a vehicle.</td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>object</code></td>
    <td>Information about a node specified as a branch. A group of signals that are defined in a hierarchical structure.</td>
</tr>
<tr>
    <td><CopyableCode code="property" /></td>
    <td><code>object</code></td>
    <td>Represents a member of the complex data structure. The datatype of the property can be either primitive or another struct.</td>
</tr>
<tr>
    <td><CopyableCode code="sensor" /></td>
    <td><code>object</code></td>
    <td>An input component that reports the environmental condition of a vehicle. You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.</td>
</tr>
<tr>
    <td><CopyableCode code="struct" /></td>
    <td><code>object</code></td>
    <td>Represents a complex or higher-order data structure.</td>
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
    <td><a href="#list_model_manifest_nodes"><CopyableCode code="list_model_manifest_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about nodes specified in a vehicle model (model manifest). This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
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
    defaultValue="list_model_manifest_nodes"
    values={[
        { label: 'list_model_manifest_nodes', value: 'list_model_manifest_nodes' }
    ]}
>
<TabItem value="list_model_manifest_nodes">

Lists information about nodes specified in a vehicle model (model manifest). This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
actuator,
attribute,
branch,
property,
sensor,
struct
FROM aws.iotfleetwise.model_manifest_nodes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
