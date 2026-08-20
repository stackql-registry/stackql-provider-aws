--- 
title: orderable_instance_types
hide_title: false
hide_table_of_contents: false
keywords:
  - orderable_instance_types
  - outposts
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

Creates, updates, deletes, gets or lists an <code>orderable_instance_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orderable_instance_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.orderable_instance_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_orderable_instance_types"
    values={[
        { label: 'list_orderable_instance_types', value: 'list_orderable_instance_types' }
    ]}
>
<TabItem value="list_orderable_instance_types">

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
    <td><CopyableCode code="form_factor_configs" /></td>
    <td><code>array</code></td>
    <td>The supported form factor and Outpost generation configurations for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_in_mib" /></td>
    <td><code>integer</code></td>
    <td>The memory size of the instance type, in MiB.</td>
</tr>
<tr>
    <td><CopyableCode code="network_performance" /></td>
    <td><code>string</code></td>
    <td>The network performance of the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="_vcpus" /></td>
    <td><code>integer</code></td>
    <td>The number of default VCPUs in the instance type.</td>
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
    <td><a href="#list_orderable_instance_types"><CopyableCode code="list_orderable_instance_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OutpostGenerationFilter"><code>OutpostGenerationFilter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the instance types that can be ordered for an Outpost. You can filter the results by Outpost generation.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum page size.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token.</td>
</tr>
<tr id="parameter-OutpostGenerationFilter">
    <td><CopyableCode code="OutpostGenerationFilter" /></td>
    <td><code>string</code></td>
    <td>Filters the results by Outpost generation. Specify GENERATION_1 for first-generation rack deployments or GENERATION_2 for second-generation rack deployments.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_orderable_instance_types"
    values={[
        { label: 'list_orderable_instance_types', value: 'list_orderable_instance_types' }
    ]}
>
<TabItem value="list_orderable_instance_types">

Lists the instance types that can be ordered for an Outpost. You can filter the results by Outpost generation.

```sql
SELECT
form_factor_configs,
instance_type,
memory_in_mib,
network_performance,
_vcpus
FROM aws.outposts.orderable_instance_types
WHERE region = '{{ region }}' -- required
AND OutpostGenerationFilter = '{{ OutpostGenerationFilter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
