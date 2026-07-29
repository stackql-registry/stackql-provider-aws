--- 
title: consumable_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - consumable_resources
  - batch
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

Creates, updates, deletes, gets or lists a <code>consumable_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="consumable_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.consumable_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_consumable_resource"
    values={[
        { label: 'describe_consumable_resource', value: 'describe_consumable_resource' },
        { label: 'list_consumable_resources', value: 'list_consumable_resources' }
    ]}
>
<TabItem value="describe_consumable_resource">

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
    <td><CopyableCode code="available_quantity" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of the consumable resource that is currently available to use.</td>
</tr>
<tr>
    <td><CopyableCode code="consumable_resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the consumable resource.</td>
</tr>
<tr>
    <td><CopyableCode code="consumable_resource_name" /></td>
    <td><code>string</code></td>
    <td>The name of the consumable resource.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the consumable resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="in_use_quantity" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of the consumable resource that is currently in use.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the resource is available to be re-used after a job completes. Can be one of: REPLENISHABLE NON_REPLENISHABLE</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that you apply to the consumable resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources.</td>
</tr>
<tr>
    <td><CopyableCode code="total_quantity" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total amount of the consumable resource that is available.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_consumable_resources">

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
    <td><CopyableCode code="consumable_resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the consumable resource.</td>
</tr>
<tr>
    <td><CopyableCode code="consumable_resource_name" /></td>
    <td><code>string</code></td>
    <td>The name of the consumable resource.</td>
</tr>
<tr>
    <td><CopyableCode code="in_use_quantity" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of the consumable resource that is currently in use.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the resource is available to be re-used after a job completes. Can be one of: REPLENISHABLE NON_REPLENISHABLE</td>
</tr>
<tr>
    <td><CopyableCode code="total_quantity" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total amount of the consumable resource that is available.</td>
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
    <td><a href="#describe_consumable_resource"><CopyableCode code="describe_consumable_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the specified consumable resource.</td>
</tr>
<tr>
    <td><a href="#list_consumable_resources"><CopyableCode code="list_consumable_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Batch consumable resources.</td>
</tr>
<tr>
    <td><a href="#create_consumable_resource"><CopyableCode code="create_consumable_resource" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-consumableResourceName"><code>consumableResourceName</code></a></td>
    <td></td>
    <td>Creates an Batch consumable resource.</td>
</tr>
<tr>
    <td><a href="#update_consumable_resource"><CopyableCode code="update_consumable_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-consumableResource"><code>consumableResource</code></a></td>
    <td></td>
    <td>Updates a consumable resource.</td>
</tr>
<tr>
    <td><a href="#delete_consumable_resource"><CopyableCode code="delete_consumable_resource" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified consumable resource.</td>
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
    defaultValue="describe_consumable_resource"
    values={[
        { label: 'describe_consumable_resource', value: 'describe_consumable_resource' },
        { label: 'list_consumable_resources', value: 'list_consumable_resources' }
    ]}
>
<TabItem value="describe_consumable_resource">

Returns a description of the specified consumable resource.

```sql
SELECT
available_quantity,
consumable_resource_arn,
consumable_resource_name,
created_at,
in_use_quantity,
resource_type,
tags,
total_quantity
FROM aws.batch.consumable_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_consumable_resources">

Returns a list of Batch consumable resources.

```sql
SELECT
consumable_resource_arn,
consumable_resource_name,
in_use_quantity,
resource_type,
total_quantity
FROM aws.batch.consumable_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_consumable_resource"
    values={[
        { label: 'create_consumable_resource', value: 'create_consumable_resource' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_consumable_resource">

Creates an Batch consumable resource.

```sql
INSERT INTO aws.batch.consumable_resources (
consumableResourceName,
totalQuantity,
resourceType,
tags,
region
)
SELECT 
'{{ consumableResourceName }}' /* required */,
{{ totalQuantity }},
'{{ resourceType }}',
'{{ tags }}',
'{{ region }}'
RETURNING
consumable_resource_arn,
consumable_resource_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: consumable_resources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the consumable_resources resource.
    - name: consumableResourceName
      value: "{{ consumableResourceName }}"
    - name: totalQuantity
      value: {{ totalQuantity }}
    - name: resourceType
      value: "{{ resourceType }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_consumable_resource"
    values={[
        { label: 'update_consumable_resource', value: 'update_consumable_resource' }
    ]}
>
<TabItem value="update_consumable_resource">

Updates a consumable resource.

```sql
UPDATE aws.batch.consumable_resources
SET 
consumableResource = '{{ consumableResource }}',
operation = '{{ operation }}',
quantity = {{ quantity }},
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND consumableResource = '{{ consumableResource }}' --required
RETURNING
consumable_resource_arn,
consumable_resource_name,
total_quantity;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_consumable_resource"
    values={[
        { label: 'delete_consumable_resource', value: 'delete_consumable_resource' }
    ]}
>
<TabItem value="delete_consumable_resource">

Deletes the specified consumable resource.

```sql
DELETE FROM aws.batch.consumable_resources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
