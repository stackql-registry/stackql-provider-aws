--- 
title: interconnects
hide_title: false
hide_table_of_contents: false
keywords:
  - interconnects
  - directconnect
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

Creates, updates, deletes, gets or lists an <code>interconnects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="interconnects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.interconnects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_interconnects"
    values={[
        { label: 'describe_interconnects', value: 'describe_interconnects' }
    ]}
>
<TabItem value="describe_interconnects">

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
    <td><CopyableCode code="interconnects" /></td>
    <td><code>array</code></td>
    <td>The interconnects.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#describe_interconnects"><CopyableCode code="describe_interconnects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.</td>
</tr>
<tr>
    <td><a href="#create_interconnect"><CopyableCode code="create_interconnect" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-interconnectName"><code>interconnectName</code></a>, <a href="#parameter-bandwidth"><code>bandwidth</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td></td>
    <td>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location. An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created. For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling AllocateHostedConnection. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner. Intended for use by Direct Connect Partners only.</td>
</tr>
<tr>
    <td><a href="#allocate_connection_on_interconnect"><CopyableCode code="allocate_connection_on_interconnect" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bandwidth"><code>bandwidth</code></a>, <a href="#parameter-connectionName"><code>connectionName</code></a>, <a href="#parameter-ownerAccount"><code>ownerAccount</code></a>, <a href="#parameter-interconnectId"><code>interconnectId</code></a>, <a href="#parameter-vlan"><code>vlan</code></a></td>
    <td></td>
    <td>Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect. Intended for use by Direct Connect Partners only.</td>
</tr>
<tr>
    <td><a href="#delete_interconnect"><CopyableCode code="delete_interconnect" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified interconnect. Intended for use by Direct Connect Partners only.</td>
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
    defaultValue="describe_interconnects"
    values={[
        { label: 'describe_interconnects', value: 'describe_interconnects' }
    ]}
>
<TabItem value="describe_interconnects">

Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

```sql
SELECT
interconnects,
next_token
FROM aws.directconnect.interconnects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_interconnect"
    values={[
        { label: 'create_interconnect', value: 'create_interconnect' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_interconnect">

Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location. An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created. For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling AllocateHostedConnection. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner. Intended for use by Direct Connect Partners only.

```sql
INSERT INTO aws.directconnect.interconnects (
interconnectName,
bandwidth,
location,
lagId,
tags,
providerName,
requestMACSec,
region
)
SELECT 
'{{ interconnectName }}' /* required */,
'{{ bandwidth }}' /* required */,
'{{ location }}' /* required */,
'{{ lagId }}',
'{{ tags }}',
'{{ providerName }}',
{{ requestMACSec }},
'{{ region }}'
RETURNING
aws_device,
aws_device_v2,
aws_logical_device_id,
bandwidth,
encryption_mode,
has_logical_redundancy,
interconnect_id,
interconnect_name,
interconnect_state,
jumbo_frame_capable,
lag_id,
loa_issue_time,
location,
mac_sec_capable,
mac_sec_keys,
port_encryption_status,
provider_name,
region,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: interconnects
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the interconnects resource.
    - name: interconnectName
      value: "{{ interconnectName }}"
      description: |
        The name of the interconnect.
    - name: bandwidth
      value: "{{ bandwidth }}"
      description: |
        The port bandwidth, in Gbps. The possible values are 1, 10, and 100.
    - name: location
      value: "{{ location }}"
      description: |
        The location of the interconnect.
    - name: lagId
      value: "{{ lagId }}"
      description: |
        The ID of the LAG.
    - name: tags
      description: |
        The tags to associate with the interconnect.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: providerName
      value: "{{ providerName }}"
      description: |
        The name of the service provider associated with the interconnect.
    - name: requestMACSec
      value: {{ requestMACSec }}
      description: |
        Indicates whether you want the interconnect to support MAC Security (MACsec).
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="allocate_connection_on_interconnect"
    values={[
        { label: 'allocate_connection_on_interconnect', value: 'allocate_connection_on_interconnect' }
    ]}
>
<TabItem value="allocate_connection_on_interconnect">

Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect. Intended for use by Direct Connect Partners only.

```sql
UPDATE aws.directconnect.interconnects
SET 
bandwidth = '{{ bandwidth }}',
connectionName = '{{ connectionName }}',
ownerAccount = '{{ ownerAccount }}',
interconnectId = '{{ interconnectId }}',
vlan = {{ vlan }}
WHERE 
region = '{{ region }}' --required
AND bandwidth = '{{ bandwidth }}' --required
AND connectionName = '{{ connectionName }}' --required
AND ownerAccount = '{{ ownerAccount }}' --required
AND interconnectId = '{{ interconnectId }}' --required
AND vlan = '{{ vlan }}' --required
RETURNING
aws_device,
aws_device_v2,
aws_logical_device_id,
bandwidth,
connection_id,
connection_name,
connection_state,
encryption_mode,
has_logical_redundancy,
jumbo_frame_capable,
lag_id,
loa_issue_time,
location,
mac_sec_capable,
mac_sec_keys,
owner_account,
partner_interconnect_mac_sec_capable,
partner_name,
port_encryption_status,
provider_name,
region,
tags,
vlan;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_interconnect"
    values={[
        { label: 'delete_interconnect', value: 'delete_interconnect' }
    ]}
>
<TabItem value="delete_interconnect">

Deletes the specified interconnect. Intended for use by Direct Connect Partners only.

```sql
DELETE FROM aws.directconnect.interconnects
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
