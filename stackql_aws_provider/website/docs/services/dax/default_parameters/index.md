--- 
title: default_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - default_parameters
  - dax
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

Creates, updates, deletes, gets or lists a <code>default_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dax.default_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_default_parameters"
    values={[
        { label: 'describe_default_parameters', value: 'describe_default_parameters' }
    ]}
>
<TabItem value="describe_default_parameters">

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
    <td><CopyableCode code="AllowedValues" /></td>
    <td><code>string</code></td>
    <td>A range of values within which the parameter can be set.</td>
</tr>
<tr>
    <td><CopyableCode code="ChangeType" /></td>
    <td><code>string</code></td>
    <td>The conditions under which changes to this parameter can be applied. For example, requires-reboot indicates that a new value for this parameter will only take effect if a node is rebooted. (IMMEDIATE, REQUIRES_REBOOT)</td>
</tr>
<tr>
    <td><CopyableCode code="DataType" /></td>
    <td><code>string</code></td>
    <td>The data type of the parameter. For example, integer:</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the parameter</td>
</tr>
<tr>
    <td><CopyableCode code="IsModifiable" /></td>
    <td><code>string</code></td>
    <td>Whether the customer is allowed to modify the parameter. (TRUE, FALSE, CONDITIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="NodeTypeSpecificValues" /></td>
    <td><code>array</code></td>
    <td>A list of node types, and specific parameter values for each node.</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterName" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterType" /></td>
    <td><code>string</code></td>
    <td>Determines whether the parameter can be applied to any nodes, or only nodes of a particular type. (DEFAULT, NODE_TYPE_SPECIFIC)</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterValue" /></td>
    <td><code>string</code></td>
    <td>The value for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>How the parameter is defined. For example, system denotes a system-defined parameter.</td>
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
    <td><a href="#describe_default_parameters"><CopyableCode code="describe_default_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the default system parameter information for the DAX caching software.</td>
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
    defaultValue="describe_default_parameters"
    values={[
        { label: 'describe_default_parameters', value: 'describe_default_parameters' }
    ]}
>
<TabItem value="describe_default_parameters">

Returns the default system parameter information for the DAX caching software.

```sql
SELECT
AllowedValues,
ChangeType,
DataType,
Description,
IsModifiable,
NodeTypeSpecificValues,
ParameterName,
ParameterType,
ParameterValue,
Source
FROM aws.dax.default_parameters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
