--- 
title: workspace_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_configurations
  - amp
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.workspace_configurations" /></td></tr>
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
    <td><CopyableCode code="limits_per_label_set" /></td>
    <td><code>array</code></td>
    <td>This is an array of structures, where each structure displays one label sets for the workspace and the limits for that label set.</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>This field displays how many days that metrics are retained in the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>This structure displays the current status of the workspace configuration, and might also contain a reason for that status.</td>
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
    <td>Use this operation to return information about the configuration of a workspace. The configuration details returned include workspace configuration status, label set limits, and retention period.</td>
</tr>
<tr>
    <td><a href="#update_workspace_configuration"><CopyableCode code="update_workspace_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to create or update the label sets, label set limits, and retention period of a workspace. You must specify at least one of limitsPerLabelSet or retentionPeriodInDays for the request to be valid.</td>
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
    <td>The ID of the workspace that you want to update. To find the IDs of your workspaces, use the ListWorkspaces operation.</td>
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

Use this operation to return information about the configuration of a workspace. The configuration details returned include workspace configuration status, label set limits, and retention period.

```sql
SELECT
limits_per_label_set,
retention_period_in_days,
status
FROM aws.amp.workspace_configurations
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

Use this operation to create or update the label sets, label set limits, and retention period of a workspace. You must specify at least one of limitsPerLabelSet or retentionPeriodInDays for the request to be valid.

```sql
UPDATE aws.amp.workspace_configurations
SET 
clientToken = '{{ clientToken }}',
limitsPerLabelSet = '{{ limitsPerLabelSet }}',
retentionPeriodInDays = {{ retentionPeriodInDays }}
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
RETURNING
status;
```
</TabItem>
</Tabs>
