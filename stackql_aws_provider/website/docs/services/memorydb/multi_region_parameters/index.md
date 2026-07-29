--- 
title: multi_region_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_parameters
  - memorydb
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

Creates, updates, deletes, gets or lists a <code>multi_region_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.multi_region_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_multi_region_parameters"
    values={[
        { label: 'describe_multi_region_parameters', value: 'describe_multi_region_parameters' }
    ]}
>
<TabItem value="describe_multi_region_parameters">

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
    <td><CopyableCode code="multi_region_parameters" /></td>
    <td><code>array</code></td>
    <td>A list of parameters specific to a particular multi-region parameter group. Each element in the list contains detailed information about one parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An optional token to include in the response. If this token is provided, the response includes only results beyond the token, up to the value specified by MaxResults.</td>
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
    <td><a href="#describe_multi_region_parameters"><CopyableCode code="describe_multi_region_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the detailed parameter list for a particular multi-region parameter group.</td>
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
    defaultValue="describe_multi_region_parameters"
    values={[
        { label: 'describe_multi_region_parameters', value: 'describe_multi_region_parameters' }
    ]}
>
<TabItem value="describe_multi_region_parameters">

Returns the detailed parameter list for a particular multi-region parameter group.

```sql
SELECT
multi_region_parameters,
next_token
FROM aws.memorydb.multi_region_parameters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
