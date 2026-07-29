--- 
title: probes
hide_title: false
hide_table_of_contents: false
keywords:
  - probes
  - networkmonitor
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

Creates, updates, deletes, gets or lists a <code>probes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="probes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmonitor.probes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_probe"
    values={[
        { label: 'get_probe', value: 'get_probe' }
    ]}
>
<TabItem value="get_probe">

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
    <td><CopyableCode code="address_family" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the IP address is IPV4 or IPV6. (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date that the probe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>The destination IP address for the monitor. This must be either an IPv4 or IPv6 address.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_port" /></td>
    <td><code>integer</code></td>
    <td>The port associated with the destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date that the probe was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="packet_size" /></td>
    <td><code>integer</code></td>
    <td>The size of the packets sent between the source and destination. This must be a number between 56 and 8500.</td>
</tr>
<tr>
    <td><CopyableCode code="probe_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the probe. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="probe_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the probe for which details are returned. (pattern: &lt;code&gt;probe-&#91;a-z0-9A-Z-&#93;&#123;21,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol used for the network traffic between the source and destination. This must be either TCP or ICMP. (TCP, ICMP)</td>
</tr>
<tr>
    <td><CopyableCode code="source_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the probe. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the probe. (PENDING, ACTIVE, INACTIVE, ERROR, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of key-value pairs assigned to the probe.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the source VPC or subnet. (pattern: &lt;code&gt;vpc-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_probe"><CopyableCode code="get_probe" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-probe_id"><code>probe_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details about a probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs.</td>
</tr>
<tr>
    <td><a href="#create_probe"><CopyableCode code="create_probe" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-probe"><code>probe</code></a></td>
    <td></td>
    <td>Create a probe within a monitor. Once you create a probe, and it begins monitoring your network traffic, you'll incur billing charges for that probe. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. Note the name of the monitorName you want to create the probe for.</td>
</tr>
<tr>
    <td><a href="#update_probe"><CopyableCode code="update_probe" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-probe_id"><code>probe_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a monitor probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. You can update the following para create a monitor with probes using this command. For each probe, you define the following: state—The state of the probe. destination— The target destination IP address for the probe. destinationPort—Required only if the protocol is TCP. protocol—The communication protocol between the source and destination. This will be either TCP or ICMP. packetSize—The size of the packets. This must be a number between 56 and 8500. (Optional) tags —Key-value pairs created and assigned to the probe.</td>
</tr>
<tr>
    <td><a href="#delete_probe"><CopyableCode code="delete_probe" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-probe_id"><code>probe_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified probe. Once a probe is deleted you'll no longer incur any billing fees for that probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. You can only delete a single probe at a time using this action.</td>
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
<tr id="parameter-monitor_name">
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor to delete.</td>
</tr>
<tr id="parameter-probe_id">
    <td><CopyableCode code="probe_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the probe to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_probe"
    values={[
        { label: 'get_probe', value: 'get_probe' }
    ]}
>
<TabItem value="get_probe">

Returns the details about a probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs.

```sql
SELECT
address_family,
created_at,
destination,
destination_port,
modified_at,
packet_size,
probe_arn,
probe_id,
protocol,
source_arn,
state,
tags,
vpc_id
FROM aws.networkmonitor.probes
WHERE monitor_name = '{{ monitor_name }}' -- required
AND probe_id = '{{ probe_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_probe"
    values={[
        { label: 'create_probe', value: 'create_probe' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_probe">

Create a probe within a monitor. Once you create a probe, and it begins monitoring your network traffic, you'll incur billing charges for that probe. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. Note the name of the monitorName you want to create the probe for.

```sql
INSERT INTO aws.networkmonitor.probes (
probe,
clientToken,
tags,
monitor_name,
region
)
SELECT 
'{{ probe }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ monitor_name }}',
'{{ region }}'
RETURNING
address_family,
created_at,
destination,
destination_port,
modified_at,
packet_size,
probe_arn,
probe_id,
protocol,
source_arn,
state,
tags,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: probes
  props:
    - name: monitor_name
      value: "{{ monitor_name }}"
      description: Required parameter for the probes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the probes resource.
    - name: probe
      description: |
        Defines a probe when creating a probe or monitor.
      value:
        sourceArn: "{{ sourceArn }}"
        destination: "{{ destination }}"
        destinationPort: {{ destinationPort }}
        protocol: "{{ protocol }}"
        packetSize: {{ packetSize }}
        tags: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_probe"
    values={[
        { label: 'update_probe', value: 'update_probe' }
    ]}
>
<TabItem value="update_probe">

Updates a monitor probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. You can update the following para create a monitor with probes using this command. For each probe, you define the following: state—The state of the probe. destination— The target destination IP address for the probe. destinationPort—Required only if the protocol is TCP. protocol—The communication protocol between the source and destination. This will be either TCP or ICMP. packetSize—The size of the packets. This must be a number between 56 and 8500. (Optional) tags —Key-value pairs created and assigned to the probe.

```sql
UPDATE aws.networkmonitor.probes
SET 
state = '{{ state }}',
destination = '{{ destination }}',
destinationPort = {{ destinationPort }},
protocol = '{{ protocol }}',
packetSize = {{ packetSize }}
WHERE 
monitor_name = '{{ monitor_name }}' --required
AND probe_id = '{{ probe_id }}' --required
AND region = '{{ region }}' --required
RETURNING
address_family,
created_at,
destination,
destination_port,
modified_at,
packet_size,
probe_arn,
probe_id,
protocol,
source_arn,
state,
tags,
vpc_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_probe"
    values={[
        { label: 'delete_probe', value: 'delete_probe' }
    ]}
>
<TabItem value="delete_probe">

Deletes the specified probe. Once a probe is deleted you'll no longer incur any billing fees for that probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. You can only delete a single probe at a time using this action.

```sql
DELETE FROM aws.networkmonitor.probes
WHERE monitor_name = '{{ monitor_name }}' --required
AND probe_id = '{{ probe_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
