--- 
title: firewall_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_metadatas
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

Creates, updates, deletes, gets or lists a <code>firewall_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.firewall_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_firewall_metadata"
    values={[
        { label: 'describe_firewall_metadata', value: 'describe_firewall_metadata' }
    ]}
>
<TabItem value="describe_firewall_metadata">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the firewall. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FirewallArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the firewall. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FirewallPolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the firewall policy. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The readiness of the configured firewall to handle network traffic across all of the Availability Zones where you have it configured. This setting is READY only when the ConfigurationSyncStateSummary value is IN_SYNC and the Attachment Status values for all of the configured subnets are READY. (PROVISIONING, DELETING, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedAvailabilityZones" /></td>
    <td><code>object</code></td>
    <td>The Availability Zones that the firewall currently supports. This includes all Availability Zones for which the firewall has a subnet defined.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the transit gateway attachment associated with this firewall. This field is only present for transit gateway-attached firewalls. (pattern: &lt;code&gt;^tgw-attach-&#91;0-9a-z&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_firewall_metadata"><CopyableCode code="describe_firewall_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the high-level information about a firewall, including the Availability Zones where the Firewall is currently in use.</td>
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
    defaultValue="describe_firewall_metadata"
    values={[
        { label: 'describe_firewall_metadata', value: 'describe_firewall_metadata' }
    ]}
>
<TabItem value="describe_firewall_metadata">

Returns the high-level information about a firewall, including the Availability Zones where the Firewall is currently in use.

```sql
SELECT
Description,
FirewallArn,
FirewallPolicyArn,
Status,
SupportedAvailabilityZones,
TransitGatewayAttachmentId
FROM aws.network_firewall.firewall_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
