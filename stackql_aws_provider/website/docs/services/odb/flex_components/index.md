--- 
title: flex_components
hide_title: false
hide_table_of_contents: false
keywords:
  - flex_components
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

Creates, updates, deletes, gets or lists a <code>flex_components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flex_components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.flex_components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_flex_components"
    values={[
        { label: 'list_flex_components', value: 'list_flex_components' }
    ]}
>
<TabItem value="list_flex_components">

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
    <td>The name of the flex component.</td>
</tr>
<tr>
    <td><CopyableCode code="available_core_count" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of CPU cores that can be enabled for the flex component.</td>
</tr>
<tr>
    <td><CopyableCode code="available_db_storage_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of database storage, in gigabytes (GB), that can be enabled for the flex component.</td>
</tr>
<tr>
    <td><CopyableCode code="available_local_storage_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of local storage, in gigabytes (GB), that can be enabled for the flex component.</td>
</tr>
<tr>
    <td><CopyableCode code="available_memory_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of memory, in gigabytes (GB), that can be enabled for the flex component.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_model" /></td>
    <td><code>string</code></td>
    <td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="description_summary" /></td>
    <td><code>string</code></td>
    <td>A summary description of the flex component.</td>
</tr>
<tr>
    <td><CopyableCode code="hardware_type" /></td>
    <td><code>string</code></td>
    <td>The type of hardware for the flex component. Valid values are COMPUTE for compute servers and CELL for storage servers. (COMPUTE, CELL)</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_core_count" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of CPU cores that can be enabled for the flex component.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_minimum_core_count" /></td>
    <td><code>integer</code></td>
    <td>The runtime minimum number of CPU cores that can be enabled for the flex component.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape that uses the flex component.</td>
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
    <td><a href="#list_flex_components"><CopyableCode code="list_flex_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the flex components that are available for an Exadata infrastructure.</td>
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
    defaultValue="list_flex_components"
    values={[
        { label: 'list_flex_components', value: 'list_flex_components' }
    ]}
>
<TabItem value="list_flex_components">

Returns information about the flex components that are available for an Exadata infrastructure.

```sql
SELECT
name,
available_core_count,
available_db_storage_in_gbs,
available_local_storage_in_gbs,
available_memory_in_gbs,
compute_model,
description_summary,
hardware_type,
minimum_core_count,
runtime_minimum_core_count,
shape
FROM aws.odb.flex_components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
