--- 
title: ip_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_routes
  - ds
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

Creates, updates, deletes, gets or lists an <code>ip_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.ip_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ip_routes"
    values={[
        { label: 'list_ip_routes', value: 'list_ip_routes' }
    ]}
>
<TabItem value="list_ip_routes">

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
    <td><CopyableCode code="AddedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the address block was added to the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="CidrIp" /></td>
    <td><code>string</code></td>
    <td>IP address block in the IpRoute. (pattern: &lt;code&gt;^((&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#123;2&#125;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)\.)&#123;3&#125;(&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#123;2&#125;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)(\/(&#91;1-9&#93;|&#91;1-2&#93;&#91;0-9&#93;|3&#91;0-2&#93;))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CidrIpv6" /></td>
    <td><code>string</code></td>
    <td>IPv6 address block in the IpRoute. (pattern: &lt;code&gt;^(((&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;7&#125;&#91;0-9a-fA-F&#93;&#123;1,4&#125;)|((&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,7&#125;:)|((&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,6&#125;:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)|((&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,5&#125;(:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,2&#125;)|((&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,4&#125;(:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,3&#125;)|((&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,3&#125;(:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,4&#125;)|((&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,2&#125;(:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,5&#125;)|(&#91;0-9a-fA-F&#93;&#123;1,4&#125;:((:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,6&#125;))|(:((:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,7&#125;|:)))\/(12&#91;0-8&#93;|1&#91;01&#93;&#91;0-9&#93;|&#91;1-9&#93;?&#91;0-9&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description of the IpRouteInfo. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9_&#93;)&#91;\\a-zA-Z0-9_@#%*+=:?./!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>Identifier (ID) of the directory associated with the IP addresses. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IpRouteStatusMsg" /></td>
    <td><code>string</code></td>
    <td>The status of the IP address block. (Adding, Added, Removing, Removed, AddFailed, RemoveFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="IpRouteStatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the IpRouteStatusMsg.</td>
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
    <td><a href="#list_ip_routes"><CopyableCode code="list_ip_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the address blocks that you have added to a directory.</td>
</tr>
<tr>
    <td><a href="#add_ip_routes"><CopyableCode code="add_ip_routes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-IpRoutes"><code>IpRoutes</code></a></td>
    <td></td>
    <td>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. AddIpRoutes adds this address block. You can also use AddIpRoutes to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. Before you call AddIpRoutes, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the AddIpRoutes operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.</td>
</tr>
<tr>
    <td><a href="#remove_ip_routes"><CopyableCode code="remove_ip_routes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Removes IP address blocks from a directory.</td>
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
    defaultValue="list_ip_routes"
    values={[
        { label: 'list_ip_routes', value: 'list_ip_routes' }
    ]}
>
<TabItem value="list_ip_routes">

Lists the address blocks that you have added to a directory.

```sql
SELECT
AddedDateTime,
CidrIp,
CidrIpv6,
Description,
DirectoryId,
IpRouteStatusMsg,
IpRouteStatusReason
FROM aws.ds.ip_routes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_ip_routes"
    values={[
        { label: 'add_ip_routes', value: 'add_ip_routes' },
        { label: 'remove_ip_routes', value: 'remove_ip_routes' }
    ]}
>
<TabItem value="add_ip_routes">

If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. AddIpRoutes adds this address block. You can also use AddIpRoutes to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. Before you call AddIpRoutes, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the AddIpRoutes operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.

```sql
UPDATE aws.ds.ip_routes
SET 
DirectoryId = '{{ DirectoryId }}',
IpRoutes = '{{ IpRoutes }}',
UpdateSecurityGroupForDirectoryControllers = {{ UpdateSecurityGroupForDirectoryControllers }}
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND IpRoutes = '{{ IpRoutes }}' --required;
```
</TabItem>
<TabItem value="remove_ip_routes">

Removes IP address blocks from a directory.

```sql
UPDATE aws.ds.ip_routes
SET 
DirectoryId = '{{ DirectoryId }}',
CidrIps = '{{ CidrIps }}',
CidrIpv6s = '{{ CidrIpv6s }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required;
```
</TabItem>
</Tabs>
