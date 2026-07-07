--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
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

Creates, updates, deletes, gets or lists an <code>account_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.account_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_settings"
    values={[
        { label: 'describe_account_settings', value: 'describe_account_settings' }
    ]}
>
<TabItem value="describe_account_settings">

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
    <td><CopyableCode code="AccountSettings" /></td>
    <td><code>object</code></td>
    <td>The Amazon Quick Sight settings for this Amazon Web Services account. This information includes the edition of Amazon Quick Sight that you subscribed to (Standard or Enterprise) and the notification email for the Amazon Quick Sight subscription. In the Quick Sight console, the Amazon Quick Sight subscription is sometimes referred to as a Quick Sight "account" even though it's technically not an account by itself. Instead, it's a subscription to the Amazon Quick Sight service for your Amazon Web Services account. The edition that you subscribe to applies to Quick in every Amazon Web Services Region where you use it.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
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
    <td><a href="#describe_account_settings"><CopyableCode code="describe_account_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the settings that were used when your Quick Sight subscription was first created in this Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_account_settings"><CopyableCode code="update_account_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefaultNamespace"><code>DefaultNamespace</code></a></td>
    <td></td>
    <td>Updates the Amazon Quick Sight settings in your Amazon Web Services account.</td>
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
    <td>The ID for the Amazon Web Services account that contains the Quick Sight settings that you want to list.</td>
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
    defaultValue="describe_account_settings"
    values={[
        { label: 'describe_account_settings', value: 'describe_account_settings' }
    ]}
>
<TabItem value="describe_account_settings">

Describes the settings that were used when your Quick Sight subscription was first created in this Amazon Web Services account.

```sql
SELECT
AccountSettings,
RequestId,
Status
FROM aws.quicksight.account_settings
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
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

Updates the Amazon Quick Sight settings in your Amazon Web Services account.

```sql
UPDATE aws.quicksight.account_settings
SET 
DefaultNamespace = '{{ DefaultNamespace }}',
NotificationEmail = '{{ NotificationEmail }}',
TerminationProtectionEnabled = {{ TerminationProtectionEnabled }}
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND DefaultNamespace = '{{ DefaultNamespace }}' --required
RETURNING
RequestId,
Status;
```
</TabItem>
</Tabs>
