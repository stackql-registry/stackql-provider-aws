--- 
title: ipam_address_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_address_histories
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

Creates, updates, deletes, gets or lists an <code>ipam_address_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_address_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_address_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_address_history"
    values={[
        { label: 'get_ipam_address_history', value: 'get_ipam_address_history' }
    ]}
>
<TabItem value="get_ipam_address_history">

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
    <td><CopyableCode code="ResourceCidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceComplianceStatus" /></td>
    <td><code>string</code></td>
    <td>The compliance status of a resource. For more information on compliance statuses, see Monitor CIDR usage by resource in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceOverlapStatus" /></td>
    <td><code>string</code></td>
    <td>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see Monitor CIDR usage by resource in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceOwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource owner.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="SampledEndTime" /></td>
    <td><code>string</code></td>
    <td>Sampled end time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the end time may have occurred before this specific time.</td>
</tr>
<tr>
    <td><CopyableCode code="SampledStartTime" /></td>
    <td><code>string</code></td>
    <td>Sampled start time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the start time may have occurred before this specific time.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The VPC ID of the resource.</td>
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
    <td><a href="#get_ipam_address_history"><CopyableCode code="get_ipam_address_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamScopeId"><code>IpamScopeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieve historical information about a CIDR within an IPAM scope. For more information, see View the history of IP addresses in the Amazon VPC IPAM User Guide.</td>
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
<tr id="parameter-IpamScopeId">
    <td><CopyableCode code="IpamScopeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM scope that the CIDR is in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR you want the history of. The CIDR can be an IPv4 or IPv6 IP address range. If you enter a /16 IPv4 CIDR, you will get records that match it exactly. You will not get records for any subnets within the /16 CIDR.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time period for which you are looking for history. If you omit this option, it will default to the current time.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of historical results you would like returned per page. Defaults to 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the time period for which you are looking for history. If you omit this option, it will default to the value of EndTime.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC you want your history records filtered by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_address_history"
    values={[
        { label: 'get_ipam_address_history', value: 'get_ipam_address_history' }
    ]}
>
<TabItem value="get_ipam_address_history">

Retrieve historical information about a CIDR within an IPAM scope. For more information, see View the history of IP addresses in the Amazon VPC IPAM User Guide.

```sql
SELECT
ResourceCidr,
ResourceComplianceStatus,
ResourceId,
ResourceName,
ResourceOverlapStatus,
ResourceOwnerId,
ResourceRegion,
ResourceType,
SampledEndTime,
SampledStartTime,
VpcId
FROM aws.ec2.ipam_address_histories
WHERE IpamScopeId = '{{ IpamScopeId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Cidr = '{{ Cidr }}'
AND VpcId = '{{ VpcId }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
