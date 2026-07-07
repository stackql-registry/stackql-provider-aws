--- 
title: backup_plan_from_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plan_from_templates
  - backup
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

Creates, updates, deletes, gets or lists a <code>backup_plan_from_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_plan_from_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_plan_from_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backup_plan_from_template"
    values={[
        { label: 'get_backup_plan_from_template', value: 'get_backup_plan_from_template' }
    ]}
>
<TabItem value="get_backup_plan_from_template">

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
    <td><CopyableCode code="AdvancedBackupSettings" /></td>
    <td><code>array</code></td>
    <td>Contains a list of BackupOptions for each resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanName" /></td>
    <td><code>string</code></td>
    <td>The display name of a backup plan. Must contain only alphanumeric or '-_.' special characters. If this is set in the console, it can contain 1 to 50 characters; if this is set through CLI or API, it can contain 1 to 200 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="Rules" /></td>
    <td><code>array</code></td>
    <td>An array of BackupRule objects, each of which specifies a scheduled task that is used to back up a selection of resources.</td>
</tr>
<tr>
    <td><CopyableCode code="ScanSettings" /></td>
    <td><code>array</code></td>
    <td>Contains your scanning configuration for the backup plan and includes the Malware scanner, your selected resources, and scanner role.</td>
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
    <td><a href="#get_backup_plan_from_template"><CopyableCode code="get_backup_plan_from_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the template specified by its templateId as a backup plan.</td>
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
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a stored backup plan template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_backup_plan_from_template"
    values={[
        { label: 'get_backup_plan_from_template', value: 'get_backup_plan_from_template' }
    ]}
>
<TabItem value="get_backup_plan_from_template">

Returns the template specified by its templateId as a backup plan.

```sql
SELECT
AdvancedBackupSettings,
BackupPlanName,
Rules,
ScanSettings
FROM aws.backup.backup_plan_from_templates
WHERE template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
