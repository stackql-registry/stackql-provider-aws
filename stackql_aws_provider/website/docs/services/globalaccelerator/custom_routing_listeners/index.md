--- 
title: custom_routing_listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_routing_listeners
  - globalaccelerator
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

Creates, updates, deletes, gets or lists a <code>custom_routing_listeners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_routing_listeners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.custom_routing_listeners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_routing_listener"
    values={[
        { label: 'describe_custom_routing_listener', value: 'describe_custom_routing_listener' },
        { label: 'list_custom_routing_listeners', value: 'list_custom_routing_listeners' }
    ]}
>
<TabItem value="describe_custom_routing_listener">

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
    <td><CopyableCode code="listener_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr>
    <td><CopyableCode code="port_ranges" /></td>
    <td><code>array</code></td>
    <td>The port range to support for connections from clients to your accelerator. Separately, you set port ranges for endpoints. For more information, see About endpoints for custom routing accelerators.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_routing_listeners">

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
    <td><CopyableCode code="listener_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr>
    <td><CopyableCode code="port_ranges" /></td>
    <td><code>array</code></td>
    <td>The port range to support for connections from clients to your accelerator. Separately, you set port ranges for endpoints. For more information, see About endpoints for custom routing accelerators.</td>
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
    <td><a href="#describe_custom_routing_listener"><CopyableCode code="describe_custom_routing_listener" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The description of a listener for a custom routing accelerator.</td>
</tr>
<tr>
    <td><a href="#list_custom_routing_listeners"><CopyableCode code="list_custom_routing_listeners" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the listeners for a custom routing accelerator.</td>
</tr>
<tr>
    <td><a href="#create_custom_routing_listener"><CopyableCode code="create_custom_routing_listener" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcceleratorArn"><code>AcceleratorArn</code></a>, <a href="#parameter-PortRanges"><code>PortRanges</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify.</td>
</tr>
<tr>
    <td><a href="#update_custom_routing_listener"><CopyableCode code="update_custom_routing_listener" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-PortRanges"><code>PortRanges</code></a></td>
    <td></td>
    <td>Update a listener for a custom routing accelerator.</td>
</tr>
<tr>
    <td><a href="#delete_custom_routing_listener"><CopyableCode code="delete_custom_routing_listener" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a listener for a custom routing accelerator.</td>
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
    defaultValue="describe_custom_routing_listener"
    values={[
        { label: 'describe_custom_routing_listener', value: 'describe_custom_routing_listener' },
        { label: 'list_custom_routing_listeners', value: 'list_custom_routing_listeners' }
    ]}
>
<TabItem value="describe_custom_routing_listener">

The description of a listener for a custom routing accelerator.

```sql
SELECT
listener_arn,
port_ranges
FROM aws.globalaccelerator.custom_routing_listeners
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_routing_listeners">

List the listeners for a custom routing accelerator.

```sql
SELECT
listener_arn,
port_ranges
FROM aws.globalaccelerator.custom_routing_listeners
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_routing_listener"
    values={[
        { label: 'create_custom_routing_listener', value: 'create_custom_routing_listener' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_routing_listener">

Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify.

```sql
INSERT INTO aws.globalaccelerator.custom_routing_listeners (
AcceleratorArn,
PortRanges,
IdempotencyToken,
region
)
SELECT 
'{{ AcceleratorArn }}' /* required */,
'{{ PortRanges }}' /* required */,
'{{ IdempotencyToken }}' /* required */,
'{{ region }}'
RETURNING
listener
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_routing_listeners
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_routing_listeners resource.
    - name: AcceleratorArn
      value: "{{ AcceleratorArn }}"
      description: |
        The Amazon Resource Name (ARN) of the accelerator for a custom routing listener.
    - name: PortRanges
      description: |
        The port range to support for connections from clients to your accelerator. Separately, you set port ranges for endpoints. For more information, see About endpoints for custom routing accelerators.
      value:
        - FromPort: {{ FromPort }}
          ToPort: {{ ToPort }}
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_routing_listener"
    values={[
        { label: 'update_custom_routing_listener', value: 'update_custom_routing_listener' }
    ]}
>
<TabItem value="update_custom_routing_listener">

Update a listener for a custom routing accelerator.

```sql
UPDATE aws.globalaccelerator.custom_routing_listeners
SET 
ListenerArn = '{{ ListenerArn }}',
PortRanges = '{{ PortRanges }}'
WHERE 
region = '{{ region }}' --required
AND ListenerArn = '{{ ListenerArn }}' --required
AND PortRanges = '{{ PortRanges }}' --required
RETURNING
listener;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_routing_listener"
    values={[
        { label: 'delete_custom_routing_listener', value: 'delete_custom_routing_listener' }
    ]}
>
<TabItem value="delete_custom_routing_listener">

Delete a listener for a custom routing accelerator.

```sql
DELETE FROM aws.globalaccelerator.custom_routing_listeners
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
