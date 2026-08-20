--- 
title: ipam_discovered_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_discovered_routes
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

Creates, updates, deletes, gets or lists an <code>ipam_discovered_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_discovered_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_discovered_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_discovered_routes"
    values={[
        { label: 'get_ipam_discovered_routes', value: 'get_ipam_discovered_routes' }
    ]}
>
<TabItem value="get_ipam_discovered_routes">

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
    <td><CopyableCode code="advertisement_type" /></td>
    <td><code>string</code></td>
    <td>The advertisement type of the route. Possible values: regional - The IP address is advertised from a single location (regional services such as Amazon EC2). global - The IP address is advertised from multiple global locations simultaneously (global services such as Amazon CloudFront).</td>
</tr>
<tr>
    <td><CopyableCode code="asn" /></td>
    <td><code>string</code></td>
    <td>The Autonomous System Number (ASN) that originates the route.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address prefix of the discovered route in CIDR notation.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM pool associated with the route.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_resource_discovery_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM resource discovery that discovered the route.</td>
</tr>
<tr>
    <td><CopyableCode code="network_border_group" /></td>
    <td><code>string</code></td>
    <td>The network border group for the route.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the BYOIP pool associated with the route.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource owner.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the route was discovered.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_time" /></td>
    <td><code>string</code></td>
    <td>The time when the route was last sampled.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the BYOIP CIDR. Possible values: advertised - The CIDR is being advertised. deprovisioned - The CIDR has been deprovisioned. failed-deprovision - Deprovisioning failed. failed-provision - Provisioning failed. pending-deprovision - Deprovisioning is in progress. pending-provision - Provisioning is in progress. provisioned - The CIDR is provisioned. provisioned-not-publicly-advertisable - The CIDR is provisioned but not publicly advertisable.</td>
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
    <td><a href="#get_ipam_discovered_routes"><CopyableCode code="get_ipam_discovered_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamResourceDiscoveryId"><code>IpamResourceDiscoveryId</code></a>, <a href="#parameter-ResourceRegion"><code>ResourceRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Retrieves Border Gateway Protocol (BGP) routes discovered by IPAM resource discovery for a specified Region. Use this operation to view the Bring Your Own IP (BYOIP) address ranges that are currently advertised through BGP. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
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
<tr id="parameter-IpamResourceDiscoveryId">
    <td><CopyableCode code="IpamResourceDiscoveryId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM resource discovery.</td>
</tr>
<tr id="parameter-ResourceRegion">
    <td><CopyableCode code="ResourceRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region to retrieve discovered routes for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to apply to the results.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_discovered_routes"
    values={[
        { label: 'get_ipam_discovered_routes', value: 'get_ipam_discovered_routes' }
    ]}
>
<TabItem value="get_ipam_discovered_routes">

Retrieves Border Gateway Protocol (BGP) routes discovered by IPAM resource discovery for a specified Region. Use this operation to view the Bring Your Own IP (BYOIP) address ranges that are currently advertised through BGP. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
advertisement_type,
asn,
cidr,
ipam_pool_id,
ipam_resource_discovery_id,
network_border_group,
pool_id,
resource_owner_id,
resource_region,
sample_time,
state
FROM aws.ec2.ipam_discovered_routes
WHERE IpamResourceDiscoveryId = '{{ IpamResourceDiscoveryId }}' -- required
AND ResourceRegion = '{{ ResourceRegion }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
