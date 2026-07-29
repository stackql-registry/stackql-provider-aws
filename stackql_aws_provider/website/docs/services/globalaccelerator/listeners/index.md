--- 
title: listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - listeners
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

Creates, updates, deletes, gets or lists a <code>listeners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listeners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.listeners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_listener"
    values={[
        { label: 'describe_listener', value: 'describe_listener' },
        { label: 'list_listeners', value: 'list_listeners' }
    ]}
>
<TabItem value="describe_listener">

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
    <td><CopyableCode code="client_affinity" /></td>
    <td><code>string</code></td>
    <td>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint. Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is NONE, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes. If you want a given client to always be routed to the same endpoint, set client affinity to SOURCE_IP instead. When you use the SOURCE_IP setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value. The default value is NONE. (NONE, SOURCE_IP)</td>
</tr>
<tr>
    <td><CopyableCode code="listener_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr>
    <td><CopyableCode code="port_ranges" /></td>
    <td><code>array</code></td>
    <td>The list of port ranges for the connections from clients to the accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol for the connections from clients to the accelerator. (TCP, UDP)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_listeners">

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
    <td><CopyableCode code="client_affinity" /></td>
    <td><code>string</code></td>
    <td>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint. Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is NONE, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes. If you want a given client to always be routed to the same endpoint, set client affinity to SOURCE_IP instead. When you use the SOURCE_IP setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value. The default value is NONE. (NONE, SOURCE_IP)</td>
</tr>
<tr>
    <td><CopyableCode code="listener_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr>
    <td><CopyableCode code="port_ranges" /></td>
    <td><code>array</code></td>
    <td>The list of port ranges for the connections from clients to the accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol for the connections from clients to the accelerator. (TCP, UDP)</td>
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
    <td><a href="#describe_listener"><CopyableCode code="describe_listener" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe a listener.</td>
</tr>
<tr>
    <td><a href="#list_listeners"><CopyableCode code="list_listeners" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the listeners for an accelerator.</td>
</tr>
<tr>
    <td><a href="#create_listener"><CopyableCode code="create_listener" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcceleratorArn"><code>AcceleratorArn</code></a>, <a href="#parameter-PortRanges"><code>PortRanges</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify.</td>
</tr>
<tr>
    <td><a href="#update_listener"><CopyableCode code="update_listener" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ListenerArn"><code>ListenerArn</code></a></td>
    <td></td>
    <td>Update a listener.</td>
</tr>
<tr>
    <td><a href="#delete_listener"><CopyableCode code="delete_listener" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a listener from an accelerator.</td>
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
    defaultValue="describe_listener"
    values={[
        { label: 'describe_listener', value: 'describe_listener' },
        { label: 'list_listeners', value: 'list_listeners' }
    ]}
>
<TabItem value="describe_listener">

Describe a listener.

```sql
SELECT
client_affinity,
listener_arn,
port_ranges,
protocol
FROM aws.globalaccelerator.listeners
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_listeners">

List the listeners for an accelerator.

```sql
SELECT
client_affinity,
listener_arn,
port_ranges,
protocol
FROM aws.globalaccelerator.listeners
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_listener"
    values={[
        { label: 'create_listener', value: 'create_listener' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_listener">

Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify.

```sql
INSERT INTO aws.globalaccelerator.listeners (
AcceleratorArn,
PortRanges,
Protocol,
ClientAffinity,
IdempotencyToken,
region
)
SELECT 
'{{ AcceleratorArn }}' /* required */,
'{{ PortRanges }}' /* required */,
'{{ Protocol }}',
'{{ ClientAffinity }}',
'{{ IdempotencyToken }}' /* required */,
'{{ region }}'
RETURNING
listener
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: listeners
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the listeners resource.
    - name: AcceleratorArn
      value: "{{ AcceleratorArn }}"
      description: |
        The Amazon Resource Name (ARN) of your accelerator.
    - name: PortRanges
      description: |
        The list of port ranges to support for connections from clients to your accelerator.
      value:
        - FromPort: {{ FromPort }}
          ToPort: {{ ToPort }}
    - name: Protocol
      value: "{{ Protocol }}"
      description: |
        The protocol for connections from clients to your accelerator.
      valid_values: ['TCP', 'UDP']
    - name: ClientAffinity
      value: "{{ ClientAffinity }}"
      description: |
        Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint. Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is NONE, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes. If you want a given client to always be routed to the same endpoint, set client affinity to SOURCE_IP instead. When you use the SOURCE_IP setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value. The default value is NONE.
      valid_values: ['NONE', 'SOURCE_IP']
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_listener"
    values={[
        { label: 'update_listener', value: 'update_listener' }
    ]}
>
<TabItem value="update_listener">

Update a listener.

```sql
UPDATE aws.globalaccelerator.listeners
SET 
ListenerArn = '{{ ListenerArn }}',
PortRanges = '{{ PortRanges }}',
Protocol = '{{ Protocol }}',
ClientAffinity = '{{ ClientAffinity }}'
WHERE 
region = '{{ region }}' --required
AND ListenerArn = '{{ ListenerArn }}' --required
RETURNING
listener;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_listener"
    values={[
        { label: 'delete_listener', value: 'delete_listener' }
    ]}
>
<TabItem value="delete_listener">

Delete a listener from an accelerator.

```sql
DELETE FROM aws.globalaccelerator.listeners
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
