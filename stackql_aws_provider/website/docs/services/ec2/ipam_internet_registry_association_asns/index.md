--- 
title: ipam_internet_registry_association_asns
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_internet_registry_association_asns
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

Creates, updates, deletes, gets or lists an <code>ipam_internet_registry_association_asns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_internet_registry_association_asns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_internet_registry_association_asns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_internet_registry_association_asns"
    values={[
        { label: 'get_ipam_internet_registry_association_asns', value: 'get_ipam_internet_registry_association_asns' }
    ]}
>
<TabItem value="get_ipam_internet_registry_association_asns">

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
    <td>The Autonomous System Number.</td>
</tr>
<tr>
    <td><CopyableCode code="last_observed_at" /></td>
    <td><code>string</code></td>
    <td>The time when the ASN was last observed at the internet registry.</td>
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
    <td><a href="#get_ipam_internet_registry_association_asns"><CopyableCode code="get_ipam_internet_registry_association_asns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Retrieves Autonomous System Numbers (ASNs) registered with an internet registry for an IPAM internet registry association. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
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
    defaultValue="get_ipam_internet_registry_association_asns"
    values={[
        { label: 'get_ipam_internet_registry_association_asns', value: 'get_ipam_internet_registry_association_asns' }
    ]}
>
<TabItem value="get_ipam_internet_registry_association_asns">

Retrieves Autonomous System Numbers (ASNs) registered with an internet registry for an IPAM internet registry association. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
asn,
last_observed_at
FROM aws.ec2.ipam_internet_registry_association_asns
WHERE IpamInternetRegistryAssociationId = '{{ IpamInternetRegistryAssociationId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>
