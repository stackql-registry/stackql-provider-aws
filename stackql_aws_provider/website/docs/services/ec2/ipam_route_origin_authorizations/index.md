--- 
title: ipam_route_origin_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_route_origin_authorizations
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

Creates, updates, deletes, gets or lists an <code>ipam_route_origin_authorizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_route_origin_authorizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_route_origin_authorizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_route_origin_authorizations"
    values={[
        { label: 'get_ipam_route_origin_authorizations', value: 'get_ipam_route_origin_authorizations' }
    ]}
>
<TabItem value="get_ipam_route_origin_authorizations">

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
    <td><CopyableCode code="asn" /></td>
    <td><code>string</code></td>
    <td>The Autonomous System Number (ASN) authorized to originate the prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address prefix in CIDR notation authorized by the ROA.</td>
</tr>
<tr>
    <td><CopyableCode code="max_length" /></td>
    <td><code>integer</code></td>
    <td>The maximum prefix length that the ASN is authorized to announce.</td>
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
    <td><a href="#get_ipam_route_origin_authorizations"><CopyableCode code="get_ipam_route_origin_authorizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves the current Route Origin Authorizations (ROAs) published to the RPKI for an IPAM internet registry association. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
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
<tr id="parameter-IpamInternetRegistryAssociationId">
    <td><CopyableCode code="IpamInternetRegistryAssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM internet registry association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>Filter results to a specific CIDR prefix.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
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
    defaultValue="get_ipam_route_origin_authorizations"
    values={[
        { label: 'get_ipam_route_origin_authorizations', value: 'get_ipam_route_origin_authorizations' }
    ]}
>
<TabItem value="get_ipam_route_origin_authorizations">

Retrieves the current Route Origin Authorizations (ROAs) published to the RPKI for an IPAM internet registry association. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
asn,
cidr,
max_length
FROM aws.ec2.ipam_route_origin_authorizations
WHERE IpamInternetRegistryAssociationId = '{{ IpamInternetRegistryAssociationId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Cidr = '{{ Cidr }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
