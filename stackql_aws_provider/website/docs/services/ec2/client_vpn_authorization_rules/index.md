--- 
title: client_vpn_authorization_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - client_vpn_authorization_rules
  - ec2
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

Creates, updates, deletes, gets or lists a <code>client_vpn_authorization_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_vpn_authorization_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.client_vpn_authorization_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_client_vpn_authorization_rules"
    values={[
        { label: 'describe_client_vpn_authorization_rules', value: 'describe_client_vpn_authorization_rules' }
    ]}
>
<TabItem value="describe_client_vpn_authorization_rules">

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
    <td><CopyableCode code="AccessAll" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the authorization rule grants access to all clients.</td>
</tr>
<tr>
    <td><CopyableCode code="ClientVpnEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint with which the authorization rule is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the authorization rule.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationCidr" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Active Directory group to which the authorization rule grants access.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current state of the authorization rule.</td>
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
    <td><a href="#describe_client_vpn_authorization_rules"><CopyableCode code="describe_client_vpn_authorization_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the authorization rules for a specified Client VPN endpoint.</td>
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
<tr id="parameter-ClientVpnEndpointId">
    <td><CopyableCode code="ClientVpnEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive. description - The description of the authorization rule. destination-cidr - The CIDR of the network to which the authorization rule applies. group-id - The ID of the Active Directory group to which the authorization rule grants access.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_client_vpn_authorization_rules"
    values={[
        { label: 'describe_client_vpn_authorization_rules', value: 'describe_client_vpn_authorization_rules' }
    ]}
>
<TabItem value="describe_client_vpn_authorization_rules">

Describes the authorization rules for a specified Client VPN endpoint.

```sql
SELECT
AccessAll,
ClientVpnEndpointId,
Description,
DestinationCidr,
GroupId,
Status
FROM aws.ec2.client_vpn_authorization_rules
WHERE ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
