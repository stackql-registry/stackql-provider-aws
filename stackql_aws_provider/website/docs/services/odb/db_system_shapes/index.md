--- 
title: db_system_shapes
hide_title: false
hide_table_of_contents: false
keywords:
  - db_system_shapes
  - odb
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

Creates, updates, deletes, gets or lists a <code>db_system_shapes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_system_shapes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.db_system_shapes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_db_system_shapes"
    values={[
        { label: 'list_db_system_shapes', value: 'list_db_system_shapes' }
    ]}
>
<TabItem value="list_db_system_shapes">

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
    <td>The name of the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="areServerTypesSupported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the hardware system model supports configurable database and server storage types.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of CPU cores that can be enabled for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCoreCountPerNode" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of CPU cores per DB node that can be enabled for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDataStorageInTBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of data storage, in terabytes (TB), that can be enabled for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDataStoragePerServerInTBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of data storage, in terabytes (TB), that's available per storage server for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDbNodePerNodeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of DB node storage, in gigabytes (GB), that's available per DB node for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDbNodeStorageInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of DB node storage, in gigabytes (GB), that can be enabled for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMemoryInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of memory, in gigabytes (GB), that can be enabled for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMemoryPerNodeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of memory, in gigabytes (GB), that's available per DB node for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="coreCountIncrement" /></td>
    <td><code>integer</code></td>
    <td>The discrete number by which the CPU core count for the shape can be increased or decreased.</td>
</tr>
<tr>
    <td><CopyableCode code="maxStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Exadata storage servers that's available for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="maximumNodeCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of compute servers that is available for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minCoreCountPerNode" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of CPU cores that can be enabled per node for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minDataStorageInTBs" /></td>
    <td><code>integer</code></td>
    <td>The minimum amount of data storage, in terabytes (TB), that must be allocated for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minDbNodeStoragePerNodeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The minimum amount of DB node storage, in gigabytes (GB), that must be allocated per DB node for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minMemoryPerNodeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The minimum amount of memory, in gigabytes (GB), that must be allocated per DB node for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of Exadata storage servers that are available for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of CPU cores that can be enabled for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumNodeCount" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of compute servers that are available for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeMinimumCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The runtime minimum number of CPU cores that can be enabled for the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="shapeFamily" /></td>
    <td><code>string</code></td>
    <td>The family of the shape.</td>
</tr>
<tr>
    <td><CopyableCode code="shapeType" /></td>
    <td><code>string</code></td>
    <td>The shape type. This property is determined by the CPU hardware. (AMD, INTEL, INTEL_FLEX_X9, AMPERE_FLEX_A1)</td>
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
    <td><a href="#list_db_system_shapes"><CopyableCode code="list_db_system_shapes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the shapes that are available for an Exadata infrastructure.</td>
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
    defaultValue="list_db_system_shapes"
    values={[
        { label: 'list_db_system_shapes', value: 'list_db_system_shapes' }
    ]}
>
<TabItem value="list_db_system_shapes">

Returns information about the shapes that are available for an Exadata infrastructure.

```sql
SELECT
name,
areServerTypesSupported,
availableCoreCount,
availableCoreCountPerNode,
availableDataStorageInTBs,
availableDataStoragePerServerInTBs,
availableDbNodePerNodeInGBs,
availableDbNodeStorageInGBs,
availableMemoryInGBs,
availableMemoryPerNodeInGBs,
computeModel,
coreCountIncrement,
maxStorageCount,
maximumNodeCount,
minCoreCountPerNode,
minDataStorageInTBs,
minDbNodeStoragePerNodeInGBs,
minMemoryPerNodeInGBs,
minStorageCount,
minimumCoreCount,
minimumNodeCount,
runtimeMinimumCoreCount,
shapeFamily,
shapeType
FROM aws.odb.db_system_shapes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
