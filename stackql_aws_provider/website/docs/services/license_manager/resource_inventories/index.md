--- 
title: resource_inventories
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_inventories
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>resource_inventories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_inventories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.resource_inventories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_inventory"
    values={[
        { label: 'list_resource_inventory', value: 'list_resource_inventory' }
    ]}
>
<TabItem value="list_resource_inventory">

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
    <td><CopyableCode code="AmiId" /></td>
    <td><code>string</code></td>
    <td>Amazon Machine Image (AMI) ID associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="HostId" /></td>
    <td><code>string</code></td>
    <td>Dedicated Host ID where the resource is running.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>EC2 instance type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="MarketplaceProductCodes" /></td>
    <td><code>array</code></td>
    <td>List of Marketplace product codes associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>Platform of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="PlatformVersion" /></td>
    <td><code>string</code></td>
    <td>Platform version of the resource in the inventory.</td>
</tr>
<tr>
    <td><CopyableCode code="Region" /></td>
    <td><code>string</code></td>
    <td>Region where the resource is located.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceOwningAccountId" /></td>
    <td><code>string</code></td>
    <td>ID of the account that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (EC2_INSTANCE, EC2_HOST, EC2_AMI, RDS, SYSTEMS_MANAGER_MANAGED_INSTANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="UsageOperation" /></td>
    <td><code>string</code></td>
    <td>Usage operation value that corresponds to the license type for billing purposes.</td>
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
    <td><a href="#list_resource_inventory"><CopyableCode code="list_resource_inventory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists resources managed using Systems Manager inventory.</td>
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
    defaultValue="list_resource_inventory"
    values={[
        { label: 'list_resource_inventory', value: 'list_resource_inventory' }
    ]}
>
<TabItem value="list_resource_inventory">

Lists resources managed using Systems Manager inventory.

```sql
SELECT
AmiId,
HostId,
InstanceType,
MarketplaceProductCodes,
Platform,
PlatformVersion,
Region,
ResourceArn,
ResourceId,
ResourceOwningAccountId,
ResourceType,
UsageOperation
FROM aws.license_manager.resource_inventories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
