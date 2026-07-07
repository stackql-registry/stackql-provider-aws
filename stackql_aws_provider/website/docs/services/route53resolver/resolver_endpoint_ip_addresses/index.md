--- 
title: resolver_endpoint_ip_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_endpoint_ip_addresses
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>resolver_endpoint_ip_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_endpoint_ip_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_endpoint_ip_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resolver_endpoint_ip_addresses"
    values={[
        { label: 'list_resolver_endpoint_ip_addresses', value: 'list_resolver_endpoint_ip_addresses' }
    ]}
>
<TabItem value="list_resolver_endpoint_ip_addresses">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Ip" /></td>
    <td><code>string</code></td>
    <td>One IPv4 address that the Resolver endpoint uses for DNS queries.</td>
</tr>
<tr>
    <td><CopyableCode code="IpId" /></td>
    <td><code>string</code></td>
    <td>The ID of one IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="Ipv6" /></td>
    <td><code>string</code></td>
    <td>One IPv6 address that the Resolver endpoint uses for DNS queries.</td>
</tr>
<tr>
    <td><CopyableCode code="ModificationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A status code that gives the current status of the request. (CREATING, FAILED_CREATION, ATTACHING, ATTACHED, REMAP_DETACHING, REMAP_ATTACHING, DETACHING, FAILED_RESOURCE_GONE, DELETING, DELETE_FAILED_FAS_EXPIRED, UPDATING, UPDATE_FAILED, ISOLATED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A message that provides additional information about the status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of one subnet.</td>
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
    <td><a href="#list_resolver_endpoint_ip_addresses"><CopyableCode code="list_resolver_endpoint_ip_addresses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the IP addresses for a specified Resolver endpoint.</td>
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
    defaultValue="list_resolver_endpoint_ip_addresses"
    values={[
        { label: 'list_resolver_endpoint_ip_addresses', value: 'list_resolver_endpoint_ip_addresses' }
    ]}
>
<TabItem value="list_resolver_endpoint_ip_addresses">

Gets the IP addresses for a specified Resolver endpoint.

```sql
SELECT
CreationTime,
Ip,
IpId,
Ipv6,
ModificationTime,
Status,
StatusMessage,
SubnetId
FROM aws.route53resolver.resolver_endpoint_ip_addresses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
