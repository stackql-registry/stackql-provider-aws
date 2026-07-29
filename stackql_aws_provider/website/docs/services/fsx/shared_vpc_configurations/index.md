--- 
title: shared_vpc_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - shared_vpc_configurations
  - fsx
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

Creates, updates, deletes, gets or lists a <code>shared_vpc_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shared_vpc_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.shared_vpc_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_shared_vpc_configuration"
    values={[
        { label: 'describe_shared_vpc_configuration', value: 'describe_shared_vpc_configuration' }
    ]}
>
<TabItem value="describe_shared_vpc_configuration">

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
    <td><CopyableCode code="enable_fsx_route_table_updates_from_participant_accounts" /></td>
    <td><code>string</code></td>
    <td>Indicates whether participant accounts can create FSx for ONTAP Multi-AZ file systems in shared subnets. (pattern: &lt;code&gt;^(?i)(true|false)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_shared_vpc_configuration"><CopyableCode code="describe_shared_vpc_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Indicates whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual private cloud (VPC) owner. For more information, see Creating FSx for ONTAP file systems in shared subnets.</td>
</tr>
<tr>
    <td><a href="#update_shared_vpc_configuration"><CopyableCode code="update_shared_vpc_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual private cloud (VPC) owner. For more information, see the Amazon FSx for NetApp ONTAP User Guide. We strongly recommend that participant-created Multi-AZ file systems in the shared VPC are deleted before you disable this feature. Once the feature is disabled, these file systems will enter a MISCONFIGURED state and behave like Single-AZ file systems. For more information, see Important considerations before disabling shared VPC support for Multi-AZ file systems.</td>
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
    defaultValue="describe_shared_vpc_configuration"
    values={[
        { label: 'describe_shared_vpc_configuration', value: 'describe_shared_vpc_configuration' }
    ]}
>
<TabItem value="describe_shared_vpc_configuration">

Indicates whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual private cloud (VPC) owner. For more information, see Creating FSx for ONTAP file systems in shared subnets.

```sql
SELECT
enable_fsx_route_table_updates_from_participant_accounts
FROM aws.fsx.shared_vpc_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_shared_vpc_configuration"
    values={[
        { label: 'update_shared_vpc_configuration', value: 'update_shared_vpc_configuration' }
    ]}
>
<TabItem value="update_shared_vpc_configuration">

Configures whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual private cloud (VPC) owner. For more information, see the Amazon FSx for NetApp ONTAP User Guide. We strongly recommend that participant-created Multi-AZ file systems in the shared VPC are deleted before you disable this feature. Once the feature is disabled, these file systems will enter a MISCONFIGURED state and behave like Single-AZ file systems. For more information, see Important considerations before disabling shared VPC support for Multi-AZ file systems.

```sql
UPDATE aws.fsx.shared_vpc_configurations
SET 
EnableFsxRouteTableUpdatesFromParticipantAccounts = '{{ EnableFsxRouteTableUpdatesFromParticipantAccounts }}',
ClientRequestToken = '{{ ClientRequestToken }}'
WHERE 
region = '{{ region }}' --required
RETURNING
enable_fsx_route_table_updates_from_participant_accounts;
```
</TabItem>
</Tabs>
