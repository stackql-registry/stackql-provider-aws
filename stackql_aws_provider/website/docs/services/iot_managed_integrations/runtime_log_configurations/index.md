--- 
title: runtime_log_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - runtime_log_configurations
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>runtime_log_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runtime_log_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.runtime_log_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_runtime_log_configuration"
    values={[
        { label: 'get_runtime_log_configuration', value: 'get_runtime_log_configuration' }
    ]}
>
<TabItem value="get_runtime_log_configuration">

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
    <td><CopyableCode code="ManagedThingId" /></td>
    <td><code>string</code></td>
    <td>The id for a managed thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuntimeLogConfigurations" /></td>
    <td><code>object</code></td>
    <td>The runtime log configuration for a managed thing.</td>
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
    <td><a href="#get_runtime_log_configuration"><CopyableCode code="get_runtime_log_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managed_thing_id"><code>managed_thing_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the runtime log configuration for a specific managed thing.</td>
</tr>
<tr>
    <td><a href="#put_runtime_log_configuration"><CopyableCode code="put_runtime_log_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-managed_thing_id"><code>managed_thing_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuntimeLogConfigurations"><code>RuntimeLogConfigurations</code></a></td>
    <td></td>
    <td>Set the runtime log configuration for a specific managed thing.</td>
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
<tr id="parameter-managed_thing_id">
    <td><CopyableCode code="managed_thing_id" /></td>
    <td><code>string</code></td>
    <td>The id for a managed thing.</td>
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
    defaultValue="get_runtime_log_configuration"
    values={[
        { label: 'get_runtime_log_configuration', value: 'get_runtime_log_configuration' }
    ]}
>
<TabItem value="get_runtime_log_configuration">

Get the runtime log configuration for a specific managed thing.

```sql
SELECT
ManagedThingId,
RuntimeLogConfigurations
FROM aws.iot_managed_integrations.runtime_log_configurations
WHERE managed_thing_id = '{{ managed_thing_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_runtime_log_configuration"
    values={[
        { label: 'put_runtime_log_configuration', value: 'put_runtime_log_configuration' }
    ]}
>
<TabItem value="put_runtime_log_configuration">

Set the runtime log configuration for a specific managed thing.

```sql
REPLACE aws.iot_managed_integrations.runtime_log_configurations
SET 
RuntimeLogConfigurations = '{{ RuntimeLogConfigurations }}'
WHERE 
managed_thing_id = '{{ managed_thing_id }}' --required
AND region = '{{ region }}' --required
AND RuntimeLogConfigurations = '{{ RuntimeLogConfigurations }}' --required;
```
</TabItem>
</Tabs>
