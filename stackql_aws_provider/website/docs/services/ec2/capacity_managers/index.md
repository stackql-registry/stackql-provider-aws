--- 
title: capacity_managers
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_managers
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

Creates, updates, deletes, gets or lists a <code>capacity_managers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_managers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_managers" /></td></tr>
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
    <td><a href="#disable_capacity_manager"><CopyableCode code="disable_capacity_manager" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Disables EC2 Capacity Manager for your account. This stops data ingestion and removes access to capacity analytics and optimization recommendations. Previously collected data is retained but no new data will be processed.</td>
</tr>
<tr>
    <td><a href="#enable_capacity_manager"><CopyableCode code="enable_capacity_manager" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OrganizationsAccess"><code>OrganizationsAccess</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Enables EC2 Capacity Manager for your account. This starts data ingestion for your EC2 capacity usage across On-Demand, Spot, and Capacity Reservations. Initial data processing may take several hours to complete.</td>
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
<tr id="parameter-OrganizationsAccess">
    <td><CopyableCode code="OrganizationsAccess" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable cross-account access for Amazon Web Services Organizations. When enabled, Capacity Manager can aggregate data from all accounts in your organization. Default is false.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="disable_capacity_manager"
    values={[
        { label: 'disable_capacity_manager', value: 'disable_capacity_manager' },
        { label: 'enable_capacity_manager', value: 'enable_capacity_manager' }
    ]}
>
<TabItem value="disable_capacity_manager">

Disables EC2 Capacity Manager for your account. This stops data ingestion and removes access to capacity analytics and optimization recommendations. Previously collected data is retained but no new data will be processed.

```sql
EXEC aws.ec2.capacity_managers.disable_capacity_manager 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@ClientToken='{{ ClientToken }}'
;
```
</TabItem>
<TabItem value="enable_capacity_manager">

Enables EC2 Capacity Manager for your account. This starts data ingestion for your EC2 capacity usage across On-Demand, Spot, and Capacity Reservations. Initial data processing may take several hours to complete.

```sql
EXEC aws.ec2.capacity_managers.enable_capacity_manager 
@region='{{ region }}' --required, 
@OrganizationsAccess={{ OrganizationsAccess }}, 
@DryRun={{ DryRun }}, 
@ClientToken='{{ ClientToken }}'
;
```
</TabItem>
</Tabs>
