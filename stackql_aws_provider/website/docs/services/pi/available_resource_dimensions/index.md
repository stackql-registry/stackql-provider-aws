--- 
title: available_resource_dimensions
hide_title: false
hide_table_of_contents: false
keywords:
  - available_resource_dimensions
  - pi
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

Creates, updates, deletes, gets or lists an <code>available_resource_dimensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="available_resource_dimensions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pi.available_resource_dimensions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_available_resource_dimensions"
    values={[
        { label: 'list_available_resource_dimensions', value: 'list_available_resource_dimensions' }
    ]}
>
<TabItem value="list_available_resource_dimensions">

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
    <td><CopyableCode code="metric_dimensions" /></td>
    <td><code>array</code></td>
    <td>The dimension information returned for requested metric types.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_=-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_available_resource_dimensions"><CopyableCode code="list_available_resource_dimensions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.</td>
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
    defaultValue="list_available_resource_dimensions"
    values={[
        { label: 'list_available_resource_dimensions', value: 'list_available_resource_dimensions' }
    ]}
>
<TabItem value="list_available_resource_dimensions">

Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.

```sql
SELECT
metric_dimensions,
next_token
FROM aws.pi.available_resource_dimensions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
