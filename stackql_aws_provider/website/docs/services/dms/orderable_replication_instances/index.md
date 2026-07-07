--- 
title: orderable_replication_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - orderable_replication_instances
  - dms
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

Creates, updates, deletes, gets or lists an <code>orderable_replication_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orderable_replication_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.orderable_replication_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_orderable_replication_instances"
    values={[
        { label: 'describe_orderable_replication_instances', value: 'describe_orderable_replication_instances' }
    ]}
>
<TabItem value="describe_orderable_replication_instances">

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
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>List of Availability Zones for this replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultAllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The default amount of storage (in gigabytes) that is allocated for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the replication engine.</td>
</tr>
<tr>
    <td><CopyableCode code="IncludedAllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage (in gigabytes) that is allocated for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxAllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MinAllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ReleaseStatus" /></td>
    <td><code>string</code></td>
    <td>The value returned when the specified EngineVersion of the replication instance is in Beta or test mode. This indicates some features might not work as expected. DMS supports the ReleaseStatus parameter in versions 3.1.4 and later. (beta, prod)</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see Selecting the right DMS replication instance for your migration.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>The type of storage used by the replication instance.</td>
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
    <td><a href="#describe_orderable_replication_instances"><CopyableCode code="describe_orderable_replication_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the replication instance types that can be created in the specified region.</td>
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
    defaultValue="describe_orderable_replication_instances"
    values={[
        { label: 'describe_orderable_replication_instances', value: 'describe_orderable_replication_instances' }
    ]}
>
<TabItem value="describe_orderable_replication_instances">

Returns information about the replication instance types that can be created in the specified region.

```sql
SELECT
AvailabilityZones,
DefaultAllocatedStorage,
EngineVersion,
IncludedAllocatedStorage,
MaxAllocatedStorage,
MinAllocatedStorage,
ReleaseStatus,
ReplicationInstanceClass,
StorageType
FROM aws.dms.orderable_replication_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
