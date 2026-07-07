--- 
title: dashboard_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_permissions
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

Creates, updates, deletes, gets or lists a <code>dashboard_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.dashboard_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dashboard_permissions"
    values={[
        { label: 'describe_dashboard_permissions', value: 'describe_dashboard_permissions' }
    ]}
>
<TabItem value="describe_dashboard_permissions">

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
    <td><CopyableCode code="DashboardArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="DashboardId" /></td>
    <td><code>string</code></td>
    <td>The ID for the dashboard. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LinkSharingConfiguration" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the configuration of a shareable link to the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="Permissions" /></td>
    <td><code>array</code></td>
    <td>A structure that contains the permissions for the dashboard.</td>
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
    <td><a href="#describe_dashboard_permissions"><CopyableCode code="describe_dashboard_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes read and write permissions for a dashboard.</td>
</tr>
<tr>
    <td><a href="#update_dashboard_permissions"><CopyableCode code="update_dashboard_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates read and write permissions on a dashboard.</td>
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
    <td>The ID of the Amazon Web Services account that contains the dashboard whose permissions you're updating.</td>
</tr>
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the dashboard.</td>
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
    defaultValue="describe_dashboard_permissions"
    values={[
        { label: 'describe_dashboard_permissions', value: 'describe_dashboard_permissions' }
    ]}
>
<TabItem value="describe_dashboard_permissions">

Describes read and write permissions for a dashboard.

```sql
SELECT
DashboardArn,
DashboardId,
LinkSharingConfiguration,
Permissions,
RequestId,
Status
FROM aws.quicksight.dashboard_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND dashboard_id = '{{ dashboard_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dashboard_permissions"
    values={[
        { label: 'update_dashboard_permissions', value: 'update_dashboard_permissions' }
    ]}
>
<TabItem value="update_dashboard_permissions">

Updates read and write permissions on a dashboard.

```sql
UPDATE aws.quicksight.dashboard_permissions
SET 
GrantPermissions = '{{ GrantPermissions }}',
RevokePermissions = '{{ RevokePermissions }}',
GrantLinkPermissions = '{{ GrantLinkPermissions }}',
RevokeLinkPermissions = '{{ RevokeLinkPermissions }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND dashboard_id = '{{ dashboard_id }}' --required
AND region = '{{ region }}' --required
RETURNING
DashboardArn,
DashboardId,
LinkSharingConfiguration,
Permissions,
RequestId,
Status;
```
</TabItem>
</Tabs>
