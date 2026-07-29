--- 
title: self_upgrade_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - self_upgrade_configurations
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>self_upgrade_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="self_upgrade_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.self_upgrade_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_self_upgrade_configuration"
    values={[
        { label: 'describe_self_upgrade_configuration', value: 'describe_self_upgrade_configuration' }
    ]}
>
<TabItem value="describe_self_upgrade_configuration">

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
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="self_upgrade_configuration" /></td>
    <td><code>object</code></td>
    <td>The self-upgrade configuration for the Quick account.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_self_upgrade_configuration"><CopyableCode code="describe_self_upgrade_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the self-upgrade configuration for a Quick account.</td>
</tr>
<tr>
    <td><a href="#update_self_upgrade_configuration"><CopyableCode code="update_self_upgrade_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SelfUpgradeStatus"><code>SelfUpgradeStatus</code></a></td>
    <td></td>
    <td>Updates the self-upgrade configuration for a Quick account.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the Quick self-upgrade configuration that you want to update.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Quick namespace that you want to update the Quick self-upgrade configuration for.</td>
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
    defaultValue="describe_self_upgrade_configuration"
    values={[
        { label: 'describe_self_upgrade_configuration', value: 'describe_self_upgrade_configuration' }
    ]}
>
<TabItem value="describe_self_upgrade_configuration">

Describes the self-upgrade configuration for a Quick account.

```sql
SELECT
request_id,
self_upgrade_configuration,
status
FROM aws.quicksight.self_upgrade_configurations
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_self_upgrade_configuration"
    values={[
        { label: 'update_self_upgrade_configuration', value: 'update_self_upgrade_configuration' }
    ]}
>
<TabItem value="update_self_upgrade_configuration">

Updates the self-upgrade configuration for a Quick account.

```sql
UPDATE aws.quicksight.self_upgrade_configurations
SET 
SelfUpgradeStatus = '{{ SelfUpgradeStatus }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
AND SelfUpgradeStatus = '{{ SelfUpgradeStatus }}' --required
RETURNING
request_id,
status;
```
</TabItem>
</Tabs>
