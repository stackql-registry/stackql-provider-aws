--- 
title: outpost_supported_instance_types
hide_title: false
hide_table_of_contents: false
keywords:
  - outpost_supported_instance_types
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

Creates, updates, deletes, gets or lists an <code>outpost_supported_instance_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outpost_supported_instance_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.outpost_supported_instance_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_outpost_supported_instance_types"
    values={[
        { label: 'get_outpost_supported_instance_types', value: 'get_outpost_supported_instance_types' }
    ]}
>
<TabItem value="get_outpost_supported_instance_types">

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
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="VCPUs" /></td>
    <td><code>integer</code></td>
    <td>The number of default VCPUs in an instance type.</td>
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
    <td><a href="#get_outpost_supported_instance_types"><CopyableCode code="get_outpost_supported_instance_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OrderId"><code>OrderId</code></a>, <a href="#parameter-AssetId"><code>AssetId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Gets the instance types that an Outpost can support in InstanceTypeCapacity. This will generally include instance types that are not currently configured and therefore cannot be launched with the current Outpost capacity configuration.</td>
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
<tr id="parameter-outpost_id">
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the Outpost.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssetId">
    <td><CopyableCode code="AssetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-OrderId">
    <td><CopyableCode code="OrderId" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services Outposts order.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_outpost_supported_instance_types"
    values={[
        { label: 'get_outpost_supported_instance_types', value: 'get_outpost_supported_instance_types' }
    ]}
>
<TabItem value="get_outpost_supported_instance_types">

Gets the instance types that an Outpost can support in InstanceTypeCapacity. This will generally include instance types that are not currently configured and therefore cannot be launched with the current Outpost capacity configuration.

```sql
SELECT
InstanceType,
VCPUs
FROM aws.outposts.outpost_supported_instance_types
WHERE outpost_id = '{{ outpost_id }}' -- required
AND region = '{{ region }}' -- required
AND OrderId = '{{ OrderId }}'
AND AssetId = '{{ AssetId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
