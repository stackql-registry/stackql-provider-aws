--- 
title: firewall_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_configs
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

Creates, updates, deletes, gets or lists a <code>firewall_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_firewall_config"
    values={[
        { label: 'get_firewall_config', value: 'get_firewall_config' },
        { label: 'list_firewall_configs', value: 'list_firewall_configs' }
    ]}
>
<TabItem value="get_firewall_config">

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
    <td><CopyableCode code="FirewallFailOpen" /></td>
    <td><code>string</code></td>
    <td>Determines how DNS Firewall operates during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall returns a failure error when it is unable to properly evaluate a query. If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them. This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association. (ENABLED, DISABLED, USE_LOCAL_RESOURCE_SETTING)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the firewall configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC that this firewall configuration applies to.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_firewall_configs">

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
    <td><CopyableCode code="FirewallFailOpen" /></td>
    <td><code>string</code></td>
    <td>Determines how DNS Firewall operates during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall returns a failure error when it is unable to properly evaluate a query. If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them. This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association. (ENABLED, DISABLED, USE_LOCAL_RESOURCE_SETTING)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the firewall configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC that this firewall configuration applies to.</td>
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
    <td><a href="#get_firewall_config"><CopyableCode code="get_firewall_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).</td>
</tr>
<tr>
    <td><a href="#list_firewall_configs"><CopyableCode code="list_firewall_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. A single call might return only a partial list of the configurations. For information, see MaxResults.</td>
</tr>
<tr>
    <td><a href="#update_firewall_config"><CopyableCode code="update_firewall_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-FirewallFailOpen"><code>FirewallFailOpen</code></a></td>
    <td></td>
    <td>Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).</td>
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
    defaultValue="get_firewall_config"
    values={[
        { label: 'get_firewall_config', value: 'get_firewall_config' },
        { label: 'list_firewall_configs', value: 'list_firewall_configs' }
    ]}
>
<TabItem value="get_firewall_config">

Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).

```sql
SELECT
FirewallFailOpen,
Id,
OwnerId,
ResourceId
FROM aws.route53resolver.firewall_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_firewall_configs">

Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. A single call might return only a partial list of the configurations. For information, see MaxResults.

```sql
SELECT
FirewallFailOpen,
Id,
OwnerId,
ResourceId
FROM aws.route53resolver.firewall_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_firewall_config"
    values={[
        { label: 'update_firewall_config', value: 'update_firewall_config' }
    ]}
>
<TabItem value="update_firewall_config">

Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).

```sql
UPDATE aws.route53resolver.firewall_configs
SET 
ResourceId = '{{ ResourceId }}',
FirewallFailOpen = '{{ FirewallFailOpen }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND FirewallFailOpen = '{{ FirewallFailOpen }}' --required
RETURNING
FirewallConfig;
```
</TabItem>
</Tabs>
