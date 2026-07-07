--- 
title: multi_region_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_parameter_groups
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

Creates, updates, deletes, gets or lists a <code>multi_region_parameter_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_parameter_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.multi_region_parameter_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_multi_region_parameter_groups"
    values={[
        { label: 'describe_multi_region_parameter_groups', value: 'describe_multi_region_parameter_groups' }
    ]}
>
<TabItem value="describe_multi_region_parameter_groups">

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
    <td><CopyableCode code="MultiRegionParameterGroups" /></td>
    <td><code>array</code></td>
    <td>A list of multi-region parameter groups. Each element in the list contains detailed information about one parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
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
    <td><a href="#describe_multi_region_parameter_groups"><CopyableCode code="describe_multi_region_parameter_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of multi-region parameter groups.</td>
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
    defaultValue="describe_multi_region_parameter_groups"
    values={[
        { label: 'describe_multi_region_parameter_groups', value: 'describe_multi_region_parameter_groups' }
    ]}
>
<TabItem value="describe_multi_region_parameter_groups">

Returns a list of multi-region parameter groups.

```sql
SELECT
MultiRegionParameterGroups,
NextToken
FROM aws.memorydb.multi_region_parameter_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
