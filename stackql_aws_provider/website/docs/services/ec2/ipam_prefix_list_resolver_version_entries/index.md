--- 
title: ipam_prefix_list_resolver_version_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_prefix_list_resolver_version_entries
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

Creates, updates, deletes, gets or lists an <code>ipam_prefix_list_resolver_version_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_prefix_list_resolver_version_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_prefix_list_resolver_version_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_prefix_list_resolver_version_entries"
    values={[
        { label: 'get_ipam_prefix_list_resolver_version_entries', value: 'get_ipam_prefix_list_resolver_version_entries' }
    ]}
>
<TabItem value="get_ipam_prefix_list_resolver_version_entries">

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
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR block that was selected and synchronized in this resolver version.</td>
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
    <td><a href="#get_ipam_prefix_list_resolver_version_entries"><CopyableCode code="get_ipam_prefix_list_resolver_version_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamPrefixListResolverId"><code>IpamPrefixListResolverId</code></a>, <a href="#parameter-IpamPrefixListResolverVersion"><code>IpamPrefixListResolverVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves the CIDR entries for a specific version of an IPAM prefix list resolver. This shows the actual CIDRs that were selected and synchronized at a particular point in time.</td>
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
    <td>The ID of the IPAM prefix list resolver whose version entries you want to retrieve.</td>
</tr>
<tr id="parameter-IpamPrefixListResolverVersion">
    <td><CopyableCode code="IpamPrefixListResolverVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the resolver for which to retrieve CIDR entries. If not specified, the latest version is used.</td>
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
    defaultValue="get_ipam_prefix_list_resolver_version_entries"
    values={[
        { label: 'get_ipam_prefix_list_resolver_version_entries', value: 'get_ipam_prefix_list_resolver_version_entries' }
    ]}
>
<TabItem value="get_ipam_prefix_list_resolver_version_entries">

Retrieves the CIDR entries for a specific version of an IPAM prefix list resolver. This shows the actual CIDRs that were selected and synchronized at a particular point in time.

```sql
SELECT
cidr
FROM aws.ec2.ipam_prefix_list_resolver_version_entries
WHERE IpamPrefixListResolverId = '{{ IpamPrefixListResolverId }}' -- required
AND IpamPrefixListResolverVersion = '{{ IpamPrefixListResolverVersion }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
