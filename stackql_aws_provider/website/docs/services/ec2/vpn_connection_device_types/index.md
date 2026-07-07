--- 
title: vpn_connection_device_types
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_connection_device_types
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

Creates, updates, deletes, gets or lists a <code>vpn_connection_device_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpn_connection_device_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpn_connection_device_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpn_connection_device_types"
    values={[
        { label: 'get_vpn_connection_device_types', value: 'get_vpn_connection_device_types' }
    ]}
>
<TabItem value="get_vpn_connection_device_types">

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
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>Customer gateway device platform.</td>
</tr>
<tr>
    <td><CopyableCode code="Software" /></td>
    <td><code>string</code></td>
    <td>Customer gateway device software version.</td>
</tr>
<tr>
    <td><CopyableCode code="Vendor" /></td>
    <td><code>string</code></td>
    <td>Customer gateway device vendor.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnConnectionDeviceTypeId" /></td>
    <td><code>string</code></td>
    <td>Customer gateway device identifier.</td>
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
    <td><a href="#get_vpn_connection_device_types"><CopyableCode code="get_vpn_connection_device_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Obtain a list of customer gateway devices for which sample configuration files can be provided. The request has no additional parameters. You can also see the list of device types with sample configuration files available under Your customer gateway device in the Amazon Web Services Site-to-Site VPN User Guide.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by GetVpnConnectionDeviceTypes in paginated output. When this parameter is used, GetVpnConnectionDeviceTypes only returns MaxResults results in a single page along with a NextToken response element. The remaining results of the initial request can be seen by sending another GetVpnConnectionDeviceTypes request with the returned NextToken value. This value can be between 200 and 1000. If this parameter is not used, then GetVpnConnectionDeviceTypes returns all results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The NextToken value returned from a previous paginated GetVpnConnectionDeviceTypes request where MaxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the NextToken value. This value is null when there are no more results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vpn_connection_device_types"
    values={[
        { label: 'get_vpn_connection_device_types', value: 'get_vpn_connection_device_types' }
    ]}
>
<TabItem value="get_vpn_connection_device_types">

Obtain a list of customer gateway devices for which sample configuration files can be provided. The request has no additional parameters. You can also see the list of device types with sample configuration files available under Your customer gateway device in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
SELECT
Platform,
Software,
Vendor,
VpnConnectionDeviceTypeId
FROM aws.ec2.vpn_connection_device_types
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
