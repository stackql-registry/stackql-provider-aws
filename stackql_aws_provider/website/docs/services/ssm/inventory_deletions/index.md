--- 
title: inventory_deletions
hide_title: false
hide_table_of_contents: false
keywords:
  - inventory_deletions
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

Creates, updates, deletes, gets or lists an <code>inventory_deletions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inventory_deletions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.inventory_deletions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inventory_deletions"
    values={[
        { label: 'describe_inventory_deletions', value: 'describe_inventory_deletions' }
    ]}
>
<TabItem value="describe_inventory_deletions">

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
    <td><CopyableCode code="DeletionId" /></td>
    <td><code>string</code></td>
    <td>The deletion ID returned by the DeleteInventory operation. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC timestamp when the delete operation started.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionSummary" /></td>
    <td><code>object</code></td>
    <td>Information about the delete operation. For more information about this summary, see Understanding the delete inventory summary in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="LastStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. Possible values are InProgress and Complete. (InProgress, Complete)</td>
</tr>
<tr>
    <td><CopyableCode code="LastStatusMessage" /></td>
    <td><code>string</code></td>
    <td>Information about the status.</td>
</tr>
<tr>
    <td><CopyableCode code="LastStatusUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC timestamp of when the last status report.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the inventory data type. (pattern: &lt;code&gt;^(AWS|Custom):.*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_inventory_deletions"><CopyableCode code="describe_inventory_deletions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a specific delete inventory operation.</td>
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
    defaultValue="describe_inventory_deletions"
    values={[
        { label: 'describe_inventory_deletions', value: 'describe_inventory_deletions' }
    ]}
>
<TabItem value="describe_inventory_deletions">

Describes a specific delete inventory operation.

```sql
SELECT
DeletionId,
DeletionStartTime,
DeletionSummary,
LastStatus,
LastStatusMessage,
LastStatusUpdateTime,
TypeName
FROM aws.ssm.inventory_deletions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
