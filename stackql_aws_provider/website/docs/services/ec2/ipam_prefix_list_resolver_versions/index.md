--- 
title: ipam_prefix_list_resolver_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_prefix_list_resolver_versions
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

Creates, updates, deletes, gets or lists an <code>ipam_prefix_list_resolver_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_prefix_list_resolver_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_prefix_list_resolver_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_prefix_list_resolver_versions"
    values={[
        { label: 'get_ipam_prefix_list_resolver_versions', value: 'get_ipam_prefix_list_resolver_versions' }
    ]}
>
<TabItem value="get_ipam_prefix_list_resolver_versions">

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
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the IPAM prefix list resolver. Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes.</td>
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
    <td><a href="#get_ipam_prefix_list_resolver_versions"><CopyableCode code="get_ipam_prefix_list_resolver_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamPrefixListResolverId"><code>IpamPrefixListResolverId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-IpamPrefixListResolverVersion"><code>IpamPrefixListResolverVersion</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves version information for an IPAM prefix list resolver. Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes. Version example: Initial State (Version 1) Production environment: vpc-prod-web (10.1.0.0/16) - tagged env=prod vpc-prod-db (10.2.0.0/16) - tagged env=prod Resolver rule: Include all VPCs tagged env=prod Version 1 CIDRs: 10.1.0.0/16, 10.2.0.0/16 Infrastructure Change (Version 2) New VPC added: vpc-prod-api (10.3.0.0/16) - tagged env=prod IPAM automatically detects the change and creates a new version. Version 2 CIDRs: 10.1.0.0/16, 10.2.0.0/16, 10.3.0.0/16</td>
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
<tr id="parameter-IpamPrefixListResolverId">
    <td><CopyableCode code="IpamPrefixListResolverId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM prefix list resolver whose versions you want to retrieve.</td>
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
    <td>One or more filters to limit the results.</td>
</tr>
<tr id="parameter-IpamPrefixListResolverVersion">
    <td><CopyableCode code="IpamPrefixListResolverVersion" /></td>
    <td><code>array</code></td>
    <td>Specific version numbers to retrieve. If not specified, all versions are returned.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
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
    defaultValue="get_ipam_prefix_list_resolver_versions"
    values={[
        { label: 'get_ipam_prefix_list_resolver_versions', value: 'get_ipam_prefix_list_resolver_versions' }
    ]}
>
<TabItem value="get_ipam_prefix_list_resolver_versions">

Retrieves version information for an IPAM prefix list resolver. Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes. Version example: Initial State (Version 1) Production environment: vpc-prod-web (10.1.0.0/16) - tagged env=prod vpc-prod-db (10.2.0.0/16) - tagged env=prod Resolver rule: Include all VPCs tagged env=prod Version 1 CIDRs: 10.1.0.0/16, 10.2.0.0/16 Infrastructure Change (Version 2) New VPC added: vpc-prod-api (10.3.0.0/16) - tagged env=prod IPAM automatically detects the change and creates a new version. Version 2 CIDRs: 10.1.0.0/16, 10.2.0.0/16, 10.3.0.0/16

```sql
SELECT
Version
FROM aws.ec2.ipam_prefix_list_resolver_versions
WHERE IpamPrefixListResolverId = '{{ IpamPrefixListResolverId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND IpamPrefixListResolverVersion = '{{ IpamPrefixListResolverVersion }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
