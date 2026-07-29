--- 
title: bgp_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - bgp_peers
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

Creates, updates, deletes, gets or lists a <code>bgp_peers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bgp_peers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.bgp_peers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_bgp_peer"><CopyableCode code="create_bgp_peer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family. If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface. When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see Address Allocation for Private Internets. For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</td>
</tr>
<tr>
    <td><a href="#delete_bgp_peer"><CopyableCode code="delete_bgp_peer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_bgp_peer"
    values={[
        { label: 'create_bgp_peer', value: 'create_bgp_peer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bgp_peer">

Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family. If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface. When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see Address Allocation for Private Internets. For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.

```sql
INSERT INTO aws.directconnect.bgp_peers (
virtualInterfaceId,
newBGPPeer,
region
)
SELECT 
'{{ virtualInterfaceId }}',
'{{ newBGPPeer }}',
'{{ region }}'
RETURNING
virtual_interface
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bgp_peers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bgp_peers resource.
    - name: virtualInterfaceId
      value: "{{ virtualInterfaceId }}"
      description: |
        The ID of the virtual interface.
    - name: newBGPPeer
      description: |
        Information about the BGP peer.
      value:
        asn: {{ asn }}
        asnLong: {{ asnLong }}
        authKey: "{{ authKey }}"
        addressFamily: "{{ addressFamily }}"
        amazonAddress: "{{ amazonAddress }}"
        customerAddress: "{{ customerAddress }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bgp_peer"
    values={[
        { label: 'delete_bgp_peer', value: 'delete_bgp_peer' }
    ]}
>
<TabItem value="delete_bgp_peer">

Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.

```sql
DELETE FROM aws.directconnect.bgp_peers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
