--- 
title: network_firewall_transit_gateway_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - network_firewall_transit_gateway_attachments
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>network_firewall_transit_gateway_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_firewall_transit_gateway_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.network_firewall_transit_gateway_attachments" /></td></tr>
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
    <td><a href="#delete_network_firewall_transit_gateway_attachment"><CopyableCode code="delete_network_firewall_transit_gateway_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a transit gateway attachment from a Network Firewall. Either the firewall owner or the transit gateway owner can delete the attachment. After you delete a transit gateway attachment, traffic will no longer flow through the firewall endpoints. After you initiate the delete operation, use DescribeFirewall to monitor the deletion status.</td>
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

## `DELETE` examples

<Tabs
    defaultValue="delete_network_firewall_transit_gateway_attachment"
    values={[
        { label: 'delete_network_firewall_transit_gateway_attachment', value: 'delete_network_firewall_transit_gateway_attachment' }
    ]}
>
<TabItem value="delete_network_firewall_transit_gateway_attachment">

Deletes a transit gateway attachment from a Network Firewall. Either the firewall owner or the transit gateway owner can delete the attachment. After you delete a transit gateway attachment, traffic will no longer flow through the firewall endpoints. After you initiate the delete operation, use DescribeFirewall to monitor the deletion status.

```sql
DELETE FROM aws.network_firewall.network_firewall_transit_gateway_attachments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
