--- 
title: backup_plan_from_jsons
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plan_from_jsons
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

Creates, updates, deletes, gets or lists a <code>backup_plan_from_jsons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_plan_from_jsons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_plan_from_jsons" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backup_plan_from_json"
    values={[
        { label: 'get_backup_plan_from_json', value: 'get_backup_plan_from_json' }
    ]}
>
<TabItem value="get_backup_plan_from_json">

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
    <td><CopyableCode code="advanced_backup_settings" /></td>
    <td><code>array</code></td>
    <td>Contains a list of BackupOptions for each resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_plan_name" /></td>
    <td><code>string</code></td>
    <td>The display name of a backup plan. Must contain only alphanumeric or '-_.' special characters. If this is set in the console, it can contain 1 to 50 characters; if this is set through CLI or API, it can contain 1 to 200 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>An array of BackupRule objects, each of which specifies a scheduled task that is used to back up a selection of resources.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_settings" /></td>
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
    <td><a href="#get_backup_plan_from_json"><CopyableCode code="get_backup_plan_from_json" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a valid JSON document specifying a backup plan or an error.</td>
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
    defaultValue="get_backup_plan_from_json"
    values={[
        { label: 'get_backup_plan_from_json', value: 'get_backup_plan_from_json' }
    ]}
>
<TabItem value="get_backup_plan_from_json">

Returns a valid JSON document specifying a backup plan or an error.

```sql
SELECT
advanced_backup_settings,
backup_plan_name,
rules,
scan_settings
FROM aws.backup.backup_plan_from_jsons
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
