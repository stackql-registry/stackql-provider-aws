--- 
title: maintenance_window_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_window_targets
  - ssm
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

Creates, updates, deletes, gets or lists a <code>maintenance_window_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_window_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.maintenance_window_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_maintenance_window_targets"
    values={[
        { label: 'describe_maintenance_window_targets', value: 'describe_maintenance_window_targets' }
    ]}
>
<TabItem value="describe_maintenance_window_targets">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the target.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name for the maintenance window target. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerInformation" /></td>
    <td><code>string</code></td>
    <td>A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of target that is being registered with the maintenance window. (INSTANCE, RESOURCE_GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="Targets" /></td>
    <td><code>array</code></td>
    <td>The targets, either managed nodes or tags. Specify managed nodes using the following format: Key=instanceids,Values=<code>&lt;instanceid1&gt;</code>,<code>&lt;instanceid2&gt;</code> Tags are specified using the following format: Key=&lt;tag name&gt;,Values=&lt;tag value&gt;.</td>
</tr>
<tr>
    <td><CopyableCode code="WindowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window to register the target with. (pattern: &lt;code&gt;^mw-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WindowTargetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the target. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_maintenance_window_targets"><CopyableCode code="describe_maintenance_window_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the targets registered with the maintenance window.</td>
</tr>
<tr>
    <td><a href="#update_maintenance_window_target"><CopyableCode code="update_maintenance_window_target" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WindowId"><code>WindowId</code></a>, <a href="#parameter-WindowTargetId"><code>WindowTargetId</code></a></td>
    <td></td>
    <td>Modifies the target of an existing maintenance window. You can change the following: Name Description Owner IDs for an ID target Tags for a Tag target From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see Target. If a parameter is null, then the corresponding field isn't modified.</td>
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
    defaultValue="describe_maintenance_window_targets"
    values={[
        { label: 'describe_maintenance_window_targets', value: 'describe_maintenance_window_targets' }
    ]}
>
<TabItem value="describe_maintenance_window_targets">

Lists the targets registered with the maintenance window.

```sql
SELECT
Description,
Name,
OwnerInformation,
ResourceType,
Targets,
WindowId,
WindowTargetId
FROM aws.ssm.maintenance_window_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_maintenance_window_target"
    values={[
        { label: 'update_maintenance_window_target', value: 'update_maintenance_window_target' }
    ]}
>
<TabItem value="update_maintenance_window_target">

Modifies the target of an existing maintenance window. You can change the following: Name Description Owner IDs for an ID target Tags for a Tag target From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see Target. If a parameter is null, then the corresponding field isn't modified.

```sql
UPDATE aws.ssm.maintenance_window_targets
SET 
WindowId = '{{ WindowId }}',
WindowTargetId = '{{ WindowTargetId }}',
Targets = '{{ Targets }}',
OwnerInformation = '{{ OwnerInformation }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Replace = {{ Replace }}
WHERE 
region = '{{ region }}' --required
AND WindowId = '{{ WindowId }}' --required
AND WindowTargetId = '{{ WindowTargetId }}' --required
RETURNING
Description,
Name,
OwnerInformation,
Targets,
WindowId,
WindowTargetId;
```
</TabItem>
</Tabs>
