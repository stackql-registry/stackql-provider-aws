--- 
title: layer_version_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - layer_version_policies
  - lambda
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

Creates, updates, deletes, gets or lists a <code>layer_version_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="layer_version_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.layer_version_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_layer_version_policy"
    values={[
        { label: 'get_layer_version_policy', value: 'get_layer_version_policy' }
    ]}
>
<TabItem value="get_layer_version_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The policy document.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the current revision of the policy.</td>
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
    <td><a href="#get_layer_version_policy"><CopyableCode code="get_layer_version_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-layer_name"><code>layer_name</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the permission policy for a version of an Lambda layer. For more information, see AddLayerVersionPermission.</td>
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
<tr id="parameter-layer_name">
    <td><CopyableCode code="layer_name" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the layer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_number">
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_layer_version_policy"
    values={[
        { label: 'get_layer_version_policy', value: 'get_layer_version_policy' }
    ]}
>
<TabItem value="get_layer_version_policy">

Returns the permission policy for a version of an Lambda layer. For more information, see AddLayerVersionPermission.

```sql
SELECT
policy,
revision_id
FROM aws.lambda.layer_version_policies
WHERE layer_name = '{{ layer_name }}' -- required
AND version_number = '{{ version_number }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
