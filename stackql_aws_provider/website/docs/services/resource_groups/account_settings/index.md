--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - resource_groups
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

Creates, updates, deletes, gets or lists an <code>account_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.account_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_settings"
    values={[
        { label: 'get_account_settings', value: 'get_account_settings' }
    ]}
>
<TabItem value="get_account_settings">

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
    <td><CopyableCode code="group_lifecycle_events_desired_status" /></td>
    <td><code>string</code></td>
    <td>The desired target status of the group lifecycle events feature. If (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="group_lifecycle_events_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the group lifecycle events feature. (ACTIVE, INACTIVE, IN_PROGRESS, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="group_lifecycle_events_status_message" /></td>
    <td><code>string</code></td>
    <td>The text of any error message occurs during an attempt to turn group lifecycle events on or off.</td>
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
    <td><a href="#get_account_settings"><CopyableCode code="get_account_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current status of optional features in Resource Groups.</td>
</tr>
<tr>
    <td><a href="#update_account_settings"><CopyableCode code="update_account_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Turns on or turns off optional features in Resource Groups. The preceding example shows that the request to turn on group lifecycle events is IN_PROGRESS. You can call the GetAccountSettings operation to check for completion by looking for GroupLifecycleEventsStatus to change to ACTIVE.</td>
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
    defaultValue="get_account_settings"
    values={[
        { label: 'get_account_settings', value: 'get_account_settings' }
    ]}
>
<TabItem value="get_account_settings">

Retrieves the current status of optional features in Resource Groups.

```sql
SELECT
group_lifecycle_events_desired_status,
group_lifecycle_events_status,
group_lifecycle_events_status_message
FROM aws.resource_groups.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_settings"
    values={[
        { label: 'update_account_settings', value: 'update_account_settings' }
    ]}
>
<TabItem value="update_account_settings">

Turns on or turns off optional features in Resource Groups. The preceding example shows that the request to turn on group lifecycle events is IN_PROGRESS. You can call the GetAccountSettings operation to check for completion by looking for GroupLifecycleEventsStatus to change to ACTIVE.

```sql
UPDATE aws.resource_groups.account_settings
SET 
GroupLifecycleEventsDesiredStatus = '{{ GroupLifecycleEventsDesiredStatus }}'
WHERE 
region = '{{ region }}' --required
RETURNING
account_settings;
```
</TabItem>
</Tabs>
