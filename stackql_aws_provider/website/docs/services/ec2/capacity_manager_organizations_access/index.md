--- 
title: capacity_manager_organizations_access
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_manager_organizations_access
  - ec2
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

Creates, updates, deletes, gets or lists a <code>capacity_manager_organizations_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_manager_organizations_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_manager_organizations_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_capacity_manager_organizations_access"><CopyableCode code="update_capacity_manager_organizations_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-OrganizationsAccess"><code>OrganizationsAccess</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Updates the Organizations access setting for EC2 Capacity Manager. This controls whether Capacity Manager can aggregate data from all accounts in your Amazon Web Services Organization or only from the current account.</td>
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
<tr id="parameter-OrganizationsAccess">
    <td><CopyableCode code="OrganizationsAccess" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable or disable cross-account access for Amazon Web Services Organizations. When enabled, Capacity Manager aggregates data from all accounts in your organization.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_capacity_manager_organizations_access"
    values={[
        { label: 'update_capacity_manager_organizations_access', value: 'update_capacity_manager_organizations_access' }
    ]}
>
<TabItem value="update_capacity_manager_organizations_access">

Updates the Organizations access setting for EC2 Capacity Manager. This controls whether Capacity Manager can aggregate data from all accounts in your Amazon Web Services Organization or only from the current account.

```sql
UPDATE aws.ec2.capacity_manager_organizations_access
SET 
-- No updatable properties
WHERE 
OrganizationsAccess = '{{ OrganizationsAccess }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND ClientToken = '{{ ClientToken}}'
RETURNING
CapacityManagerStatus,
OrganizationsAccess;
```
</TabItem>
</Tabs>
