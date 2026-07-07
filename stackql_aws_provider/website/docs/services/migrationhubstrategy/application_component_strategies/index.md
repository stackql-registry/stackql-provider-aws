--- 
title: application_component_strategies
hide_title: false
hide_table_of_contents: false
keywords:
  - application_component_strategies
  - migrationhubstrategy
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

Creates, updates, deletes, gets or lists an <code>application_component_strategies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_component_strategies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhubstrategy.application_component_strategies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_component_strategies"
    values={[
        { label: 'get_application_component_strategies', value: 'get_application_component_strategies' }
    ]}
>
<TabItem value="get_application_component_strategies">

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
    <td><CopyableCode code="applicationComponentStrategies" /></td>
    <td><code>array</code></td>
    <td>A list of application component strategy recommendations.</td>
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
    <td><a href="#get_application_component_strategies"><CopyableCode code="get_application_component_strategies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_component_id"><code>application_component_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of all the recommended strategies and tools for an application component running on a server.</td>
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
<tr id="parameter-application_component_id">
    <td><CopyableCode code="application_component_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application component. The ID is unique within an AWS account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application_component_strategies"
    values={[
        { label: 'get_application_component_strategies', value: 'get_application_component_strategies' }
    ]}
>
<TabItem value="get_application_component_strategies">

Retrieves a list of all the recommended strategies and tools for an application component running on a server.

```sql
SELECT
applicationComponentStrategies
FROM aws.migrationhubstrategy.application_component_strategies
WHERE application_component_id = '{{ application_component_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
