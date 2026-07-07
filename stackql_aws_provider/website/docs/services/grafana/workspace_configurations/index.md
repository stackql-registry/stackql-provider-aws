--- 
title: workspace_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_configurations
  - grafana
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

Creates, updates, deletes, gets or lists a <code>workspace_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.grafana.workspace_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace_configuration"
    values={[
        { label: 'describe_workspace_configuration', value: 'describe_workspace_configuration' }
    ]}
>
<TabItem value="describe_workspace_configuration">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>string</code></td>
    <td>The configuration string for the workspace that you requested. For more information about the format and configuration options available, see Working in your Grafana workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="grafanaVersion" /></td>
    <td><code>string</code></td>
    <td>The supported Grafana version for the workspace.</td>
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
    <td><a href="#describe_workspace_configuration"><CopyableCode code="describe_workspace_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the current configuration string for the given workspace.</td>
</tr>
<tr>
    <td><a href="#update_workspace_configuration"><CopyableCode code="update_workspace_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Updates the configuration string for the given workspace</td>
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
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace to update.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_workspace_configuration"
    values={[
        { label: 'describe_workspace_configuration', value: 'describe_workspace_configuration' }
    ]}
>
<TabItem value="describe_workspace_configuration">

Gets the current configuration string for the given workspace.

```sql
SELECT
configuration,
grafanaVersion
FROM aws.grafana.workspace_configurations
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspace_configuration"
    values={[
        { label: 'update_workspace_configuration', value: 'update_workspace_configuration' }
    ]}
>
<TabItem value="update_workspace_configuration">

Updates the configuration string for the given workspace

```sql
UPDATE aws.grafana.workspace_configurations
SET 
configuration = '{{ configuration }}',
grafanaVersion = '{{ grafanaVersion }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND configuration = '{{ configuration }}' --required;
```
</TabItem>
</Tabs>
