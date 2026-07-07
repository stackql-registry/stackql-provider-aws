--- 
title: router_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - router_configurations
  - directconnect
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

Creates, updates, deletes, gets or lists a <code>router_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="router_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.router_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_router_configuration"
    values={[
        { label: 'describe_router_configuration', value: 'describe_router_configuration' }
    ]}
>
<TabItem value="describe_router_configuration">

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
    <td><CopyableCode code="customerRouterConfig" /></td>
    <td><code>string</code></td>
    <td>The customer router configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="router" /></td>
    <td><code>object</code></td>
    <td>The details about the router.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualInterfaceName" /></td>
    <td><code>string</code></td>
    <td>Provides the details about a virtual interface's router.</td>
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
    <td><a href="#describe_router_configuration"><CopyableCode code="describe_router_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Details about the router.</td>
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
    defaultValue="describe_router_configuration"
    values={[
        { label: 'describe_router_configuration', value: 'describe_router_configuration' }
    ]}
>
<TabItem value="describe_router_configuration">

Details about the router.

```sql
SELECT
customerRouterConfig,
router,
virtualInterfaceId,
virtualInterfaceName
FROM aws.directconnect.router_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
