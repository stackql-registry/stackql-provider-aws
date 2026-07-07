--- 
title: instance_types
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_types
  - workspaces_instances
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

Creates, updates, deletes, gets or lists an <code>instance_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_instances.instance_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_instance_types"
    values={[
        { label: 'list_instance_types', value: 'list_instance_types' }
    ]}
>
<TabItem value="list_instance_types">

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
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the WorkSpace Instance type. (pattern: &lt;code&gt;(&#91;a-z0-9-&#93;+)\.(&#91;a-z0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedInstanceConfigurations" /></td>
    <td><code>array</code></td>
    <td>Lists all valid combinations of tenancy, platform type, and billing mode supported for the specific WorkSpace Instance type. Contains the complete set of configuration options available for this instance type.</td>
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
    <td><a href="#list_instance_types"><CopyableCode code="list_instance_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of instance types supported by Amazon WorkSpaces Instances, enabling precise workspace infrastructure configuration.</td>
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
    defaultValue="list_instance_types"
    values={[
        { label: 'list_instance_types', value: 'list_instance_types' }
    ]}
>
<TabItem value="list_instance_types">

Retrieves a list of instance types supported by Amazon WorkSpaces Instances, enabling precise workspace infrastructure configuration.

```sql
SELECT
InstanceType,
SupportedInstanceConfigurations
FROM aws.workspaces_instances.instance_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
