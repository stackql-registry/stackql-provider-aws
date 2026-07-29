--- 
title: ipam_discovered_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_discovered_accounts
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

Creates, updates, deletes, gets or lists an <code>ipam_discovered_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_discovered_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_discovered_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_discovered_accounts"
    values={[
        { label: 'get_ipam_discovered_accounts', value: 'get_ipam_discovered_accounts' }
    ]}
>
<TabItem value="get_ipam_discovered_accounts">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="discovery_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that the account information is returned from. An account can be discovered in multiple regions and will have a separate discovered account for each Region.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The resource discovery failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="last_attempted_discovery_time" /></td>
    <td><code>string</code></td>
    <td>The last attempted resource discovery time.</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_discovery_time" /></td>
    <td><code>string</code></td>
    <td>The last successful resource discovery time.</td>
</tr>
<tr>
    <td><CopyableCode code="organizational_unit_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an Organizational Unit in Amazon Web Services Organizations.</td>
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
    <td><a href="#get_ipam_discovered_accounts"><CopyableCode code="get_ipam_discovered_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamResourceDiscoveryId"><code>IpamResourceDiscoveryId</code></a>, <a href="#parameter-DiscoveryRegion"><code>DiscoveryRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Gets IPAM discovered accounts. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts. Only the IPAM account can get all discovered accounts in the organization.</td>
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
<tr id="parameter-DiscoveryRegion">
    <td><CopyableCode code="DiscoveryRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that the account information is returned from.</td>
</tr>
<tr id="parameter-IpamResourceDiscoveryId">
    <td><CopyableCode code="IpamResourceDiscoveryId" /></td>
    <td><code>string</code></td>
    <td>A resource discovery ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>Discovered account filters.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of discovered accounts to return in one page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_discovered_accounts"
    values={[
        { label: 'get_ipam_discovered_accounts', value: 'get_ipam_discovered_accounts' }
    ]}
>
<TabItem value="get_ipam_discovered_accounts">

Gets IPAM discovered accounts. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts. Only the IPAM account can get all discovered accounts in the organization.

```sql
SELECT
account_id,
discovery_region,
failure_reason,
last_attempted_discovery_time,
last_successful_discovery_time,
organizational_unit_id
FROM aws.ec2.ipam_discovered_accounts
WHERE IpamResourceDiscoveryId = '{{ IpamResourceDiscoveryId }}' -- required
AND DiscoveryRegion = '{{ DiscoveryRegion }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
