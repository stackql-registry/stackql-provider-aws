--- 
title: direct_connect_gateway_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - direct_connect_gateway_attachments
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

Creates, updates, deletes, gets or lists a <code>direct_connect_gateway_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="direct_connect_gateway_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.direct_connect_gateway_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_direct_connect_gateway_attachments"
    values={[
        { label: 'describe_direct_connect_gateway_attachments', value: 'describe_direct_connect_gateway_attachments' }
    ]}
>
<TabItem value="describe_direct_connect_gateway_attachments">

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
    <td><CopyableCode code="attachment_state" /></td>
    <td><code>string</code></td>
    <td>The state of the attachment. The following are the possible values: attaching: The initial state after a virtual interface is created using the Direct Connect gateway. attached: The Direct Connect gateway and virtual interface are attached and ready to pass traffic. detaching: The initial state after calling DeleteVirtualInterface. detached: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped. (attaching, attached, detaching, detached)</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_type" /></td>
    <td><code>string</code></td>
    <td>The type of attachment. (TransitVirtualInterface, PrivateVirtualInterface)</td>
</tr>
<tr>
    <td><CopyableCode code="direct_connect_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Direct Connect gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="state_change_error" /></td>
    <td><code>string</code></td>
    <td>The error message if the state of an object failed to advance.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_interface_owner_account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_interface_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the virtual interface is located.</td>
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
    <td><a href="#describe_direct_connect_gateway_attachments"><CopyableCode code="describe_direct_connect_gateway_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.</td>
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
    defaultValue="describe_direct_connect_gateway_attachments"
    values={[
        { label: 'describe_direct_connect_gateway_attachments', value: 'describe_direct_connect_gateway_attachments' }
    ]}
>
<TabItem value="describe_direct_connect_gateway_attachments">

Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.

```sql
SELECT
attachment_state,
attachment_type,
direct_connect_gateway_id,
state_change_error,
virtual_interface_id,
virtual_interface_owner_account,
virtual_interface_region
FROM aws.directconnect.direct_connect_gateway_attachments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
