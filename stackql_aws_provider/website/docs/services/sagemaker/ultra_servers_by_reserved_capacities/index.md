--- 
title: ultra_servers_by_reserved_capacities
hide_title: false
hide_table_of_contents: false
keywords:
  - ultra_servers_by_reserved_capacities
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>ultra_servers_by_reserved_capacities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ultra_servers_by_reserved_capacities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.ultra_servers_by_reserved_capacities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ultra_servers_by_reserved_capacity"
    values={[
        { label: 'list_ultra_servers_by_reserved_capacity', value: 'list_ultra_servers_by_reserved_capacity' }
    ]}
>
<TabItem value="list_ultra_servers_by_reserved_capacity">

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
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone where the UltraServer is provisioned. (pattern: &lt;code&gt;&#91;a-z&#93;+\-&#91;0-9a-z\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances currently available for use in this UltraServer.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableSpareInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of available spare instances in the UltraServer.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfiguredSpareInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of spare instances configured for this UltraServer to provide enhanced resiliency.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthStatus" /></td>
    <td><code>string</code></td>
    <td>The overall health status of the UltraServer. (OK, Impaired, Insufficient-Data)</td>
</tr>
<tr>
    <td><CopyableCode code="InUseInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances currently in use in this UltraServer.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type used in the UltraServer. (ml.p4d.24xlarge, ml.p5.48xlarge, ml.p5e.48xlarge, ml.p5en.48xlarge, ml.trn1.32xlarge, ml.trn2.48xlarge, ml.p6-b200.48xlarge, ml.p4de.24xlarge, ml.p6e-gb200.36xlarge, ml.p5.4xlarge, ml.p6-b300.48xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of instances in this UltraServer.</td>
</tr>
<tr>
    <td><CopyableCode code="UltraServerId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the UltraServer. (pattern: &lt;code&gt;(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UltraServerType" /></td>
    <td><code>string</code></td>
    <td>The type of UltraServer, such as ml.u-p6e-gb200x72. (pattern: &lt;code&gt;ml.&#91;a-z0-9\-.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UnhealthyInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances in this UltraServer that are currently in an unhealthy state.</td>
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
    <td><a href="#list_ultra_servers_by_reserved_capacity"><CopyableCode code="list_ultra_servers_by_reserved_capacity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all UltraServers that are part of a specified reserved capacity.</td>
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
    defaultValue="list_ultra_servers_by_reserved_capacity"
    values={[
        { label: 'list_ultra_servers_by_reserved_capacity', value: 'list_ultra_servers_by_reserved_capacity' }
    ]}
>
<TabItem value="list_ultra_servers_by_reserved_capacity">

Lists all UltraServers that are part of a specified reserved capacity.

```sql
SELECT
AvailabilityZone,
AvailableInstanceCount,
AvailableSpareInstanceCount,
ConfiguredSpareInstanceCount,
HealthStatus,
InUseInstanceCount,
InstanceType,
TotalInstanceCount,
UltraServerId,
UltraServerType,
UnhealthyInstanceCount
FROM aws.sagemaker.ultra_servers_by_reserved_capacities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
