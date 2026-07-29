--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - ecs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.account_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_account_settings"
    values={[
        { label: 'list_account_settings', value: 'list_account_settings' }
    ]}
>
<TabItem value="list_account_settings">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The Amazon ECS resource name. (serviceLongArnFormat, taskLongArnFormat, containerInstanceLongArnFormat, awsvpcTrunking, containerInsights, fargateFIPSMode, tagResourceAuthorization, fargateTaskRetirementWaitPeriod, guardDutyActivate, defaultLogDriverMode, fargateEventWindows)</td>
</tr>
<tr>
    <td><CopyableCode code="principal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the principal. It can be a user, role, or the root user. If this field is omitted, the authenticated user is assumed.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Indicates whether Amazon Web Services manages the account setting, or if the user manages it. aws_managed account settings are read-only, as Amazon Web Services manages such on the customer's behalf. Currently, the guardDutyActivate account setting is the only one Amazon Web Services manages. (user, aws_managed)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Determines whether the account setting is on or off for the specified resource.</td>
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
    <td><a href="#list_account_settings"><CopyableCode code="list_account_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the account settings for a specified principal.</td>
</tr>
<tr>
    <td><a href="#put_account_setting"><CopyableCode code="put_account_setting" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Modifies an account setting. Account settings are set on a per-Region basis. If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see Account Settings in the Amazon Elastic Container Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_account_setting"><CopyableCode code="delete_account_setting" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables an account setting for a specified user, role, or the root user for an account.</td>
</tr>
<tr>
    <td><a href="#put_account_setting_default"><CopyableCode code="put_account_setting_default" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.</td>
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
    defaultValue="list_account_settings"
    values={[
        { label: 'list_account_settings', value: 'list_account_settings' }
    ]}
>
<TabItem value="list_account_settings">

Lists the account settings for a specified principal.

```sql
SELECT
name,
principal_arn,
type_,
value
FROM aws.ecs.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_setting"
    values={[
        { label: 'put_account_setting', value: 'put_account_setting' }
    ]}
>
<TabItem value="put_account_setting">

Modifies an account setting. Account settings are set on a per-Region basis. If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see Account Settings in the Amazon Elastic Container Service Developer Guide.

```sql
REPLACE aws.ecs.account_settings
SET 
name = '{{ name }}',
value = '{{ value }}',
principalArn = '{{ principalArn }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND value = '{{ value }}' --required
RETURNING
setting;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_setting"
    values={[
        { label: 'delete_account_setting', value: 'delete_account_setting' }
    ]}
>
<TabItem value="delete_account_setting">

Disables an account setting for a specified user, role, or the root user for an account.

```sql
DELETE FROM aws.ecs.account_settings
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="put_account_setting_default"
    values={[
        { label: 'put_account_setting_default', value: 'put_account_setting_default' }
    ]}
>
<TabItem value="put_account_setting_default">

Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.

```sql
EXEC aws.ecs.account_settings.put_account_setting_default 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"value": "{{ value }}"
}'
;
```
</TabItem>
</Tabs>
