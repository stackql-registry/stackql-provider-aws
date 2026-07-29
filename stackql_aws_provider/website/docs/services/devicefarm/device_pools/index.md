--- 
title: device_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - device_pools
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>device_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.device_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device_pool"
    values={[
        { label: 'get_device_pool', value: 'get_device_pool' }
    ]}
>
<TabItem value="get_device_pool">

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
    <td>The device pool's name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The device pool's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The device pool's description.</td>
</tr>
<tr>
    <td><CopyableCode code="max_devices" /></td>
    <td><code>integer</code></td>
    <td>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and meet the criteria that you assign for the rules parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter. By specifying the maximum number of devices, you can control the costs that you incur by running tests.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Information about the device pool's rules.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The device pool's type. Allowed values include: CURATED: A device pool that is created and managed by AWS Device Farm. PRIVATE: A device pool that is created and managed by the device pool developer. (CURATED, PRIVATE)</td>
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
    <td><a href="#get_device_pool"><CopyableCode code="get_device_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a device pool.</td>
</tr>
<tr>
    <td><a href="#create_device_pool"><CopyableCode code="create_device_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectArn"><code>projectArn</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-rules"><code>rules</code></a></td>
    <td></td>
    <td>Creates a device pool.</td>
</tr>
<tr>
    <td><a href="#update_device_pool"><CopyableCode code="update_device_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).</td>
</tr>
<tr>
    <td><a href="#delete_device_pool"><CopyableCode code="delete_device_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.</td>
</tr>
<tr>
    <td><a href="#list_device_pools"><CopyableCode code="list_device_pools" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Gets information about device pools.</td>
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
    defaultValue="get_device_pool"
    values={[
        { label: 'get_device_pool', value: 'get_device_pool' }
    ]}
>
<TabItem value="get_device_pool">

Gets information about a device pool.

```sql
SELECT
name,
arn,
description,
max_devices,
rules,
type_
FROM aws.devicefarm.device_pools
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_device_pool"
    values={[
        { label: 'create_device_pool', value: 'create_device_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_device_pool">

Creates a device pool.

```sql
INSERT INTO aws.devicefarm.device_pools (
projectArn,
name,
description,
rules,
maxDevices,
region
)
SELECT 
'{{ projectArn }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ rules }}' /* required */,
{{ maxDevices }},
'{{ region }}'
RETURNING
device_pool
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: device_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the device_pools resource.
    - name: projectArn
      value: "{{ projectArn }}"
      description: |
        The ARN of the project for the device pool.
    - name: name
      value: "{{ name }}"
      description: |
        The device pool's name.
    - name: description
      value: "{{ description }}"
      description: |
        The device pool's description.
    - name: rules
      description: |
        The device pool's rules.
      value:
        - attribute: "{{ attribute }}"
          operator: "{{ operator }}"
          value: "{{ value }}"
    - name: maxDevices
      value: {{ maxDevices }}
      description: |
        The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and meet the criteria that you assign for the rules parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter. By specifying the maximum number of devices, you can control the costs that you incur by running tests.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_device_pool"
    values={[
        { label: 'update_device_pool', value: 'update_device_pool' }
    ]}
>
<TabItem value="update_device_pool">

Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).

```sql
UPDATE aws.devicefarm.device_pools
SET 
arn = '{{ arn }}',
name = '{{ name }}',
description = '{{ description }}',
rules = '{{ rules }}',
maxDevices = {{ maxDevices }},
clearMaxDevices = {{ clearMaxDevices }}
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
device_pool;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_device_pool"
    values={[
        { label: 'delete_device_pool', value: 'delete_device_pool' }
    ]}
>
<TabItem value="delete_device_pool">

Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.

```sql
DELETE FROM aws.devicefarm.device_pools
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_device_pools"
    values={[
        { label: 'list_device_pools', value: 'list_device_pools' }
    ]}
>
<TabItem value="list_device_pools">

Gets information about device pools.

```sql
EXEC aws.devicefarm.device_pools.list_device_pools 
@region='{{ region }}' --required 
@@json=
'{
"arn": "{{ arn }}", 
"type": "{{ type }}", 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
