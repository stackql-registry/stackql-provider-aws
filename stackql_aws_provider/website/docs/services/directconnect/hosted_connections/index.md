--- 
title: hosted_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_connections
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

Creates, updates, deletes, gets or lists a <code>hosted_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.hosted_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hosted_connections"
    values={[
        { label: 'describe_hosted_connections', value: 'describe_hosted_connections' }
    ]}
>
<TabItem value="describe_hosted_connections">

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
    <td><CopyableCode code="connections" /></td>
    <td><code>array</code></td>
    <td>The connections.</td>
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
    <td><a href="#describe_hosted_connections"><CopyableCode code="describe_hosted_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG). Intended for use by Direct Connect Partners only.</td>
</tr>
<tr>
    <td><a href="#allocate_hosted_connection"><CopyableCode code="allocate_hosted_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-ownerAccount"><code>ownerAccount</code></a>, <a href="#parameter-bandwidth"><code>bandwidth</code></a>, <a href="#parameter-connectionName"><code>connectionName</code></a>, <a href="#parameter-vlan"><code>vlan</code></a></td>
    <td></td>
    <td>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects. Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity. Intended for use by Direct Connect Partners only.</td>
</tr>
<tr>
    <td><a href="#associate_hosted_connection"><CopyableCode code="associate_hosted_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-parentConnectionId"><code>parentConnectionId</code></a></td>
    <td></td>
    <td>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated. Intended for use by Direct Connect Partners only.</td>
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
    defaultValue="describe_hosted_connections"
    values={[
        { label: 'describe_hosted_connections', value: 'describe_hosted_connections' }
    ]}
>
<TabItem value="describe_hosted_connections">

Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG). Intended for use by Direct Connect Partners only.

```sql
SELECT
connections,
next_token
FROM aws.directconnect.hosted_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="allocate_hosted_connection"
    values={[
        { label: 'allocate_hosted_connection', value: 'allocate_hosted_connection' },
        { label: 'associate_hosted_connection', value: 'associate_hosted_connection' }
    ]}
>
<TabItem value="allocate_hosted_connection">

Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects. Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity. Intended for use by Direct Connect Partners only.

```sql
UPDATE aws.directconnect.hosted_connections
SET 
connectionId = '{{ connectionId }}',
ownerAccount = '{{ ownerAccount }}',
bandwidth = '{{ bandwidth }}',
connectionName = '{{ connectionName }}',
vlan = {{ vlan }},
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND connectionId = '{{ connectionId }}' --required
AND ownerAccount = '{{ ownerAccount }}' --required
AND bandwidth = '{{ bandwidth }}' --required
AND connectionName = '{{ connectionName }}' --required
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
<TabItem value="associate_hosted_connection">

Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated. Intended for use by Direct Connect Partners only.

```sql
UPDATE aws.directconnect.hosted_connections
SET 
connectionId = '{{ connectionId }}',
parentConnectionId = '{{ parentConnectionId }}'
WHERE 
region = '{{ region }}' --required
AND connectionId = '{{ connectionId }}' --required
AND parentConnectionId = '{{ parentConnectionId }}' --required
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
