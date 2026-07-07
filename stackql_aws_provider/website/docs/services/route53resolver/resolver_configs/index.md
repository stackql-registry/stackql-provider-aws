--- 
title: resolver_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_configs
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

Creates, updates, deletes, gets or lists a <code>resolver_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_config"
    values={[
        { label: 'get_resolver_config', value: 'get_resolver_config' },
        { label: 'list_resolver_configs', value: 'list_resolver_configs' }
    ]}
>
<TabItem value="get_resolver_config">

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
    <td><CopyableCode code="AutodefinedReverse" /></td>
    <td><code>string</code></td>
    <td>The status of whether or not the Resolver will create autodefined rules for reverse DNS lookups. This is enabled by default. The status can be one of following: ENABLING: Autodefined rules for reverse DNS lookups are being enabled but are not complete. ENABLED: Autodefined rules for reverse DNS lookups are enabled. DISABLING: Autodefined rules for reverse DNS lookups are being disabled but are not complete. DISABLED: Autodefined rules for reverse DNS lookups are disabled. (ENABLING, ENABLED, DISABLING, DISABLED, UPDATING_TO_USE_LOCAL_RESOURCE_SETTING, USE_LOCAL_RESOURCE_SETTING)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>ID for the Resolver configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The owner account ID of the Amazon Virtual Private Cloud VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Virtual Private Cloud VPC or a Route 53 Profile that you're configuring Resolver for.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resolver_configs">

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
    <td><CopyableCode code="AutodefinedReverse" /></td>
    <td><code>string</code></td>
    <td>The status of whether or not the Resolver will create autodefined rules for reverse DNS lookups. This is enabled by default. The status can be one of following: ENABLING: Autodefined rules for reverse DNS lookups are being enabled but are not complete. ENABLED: Autodefined rules for reverse DNS lookups are enabled. DISABLING: Autodefined rules for reverse DNS lookups are being disabled but are not complete. DISABLED: Autodefined rules for reverse DNS lookups are disabled. (ENABLING, ENABLED, DISABLING, DISABLED, UPDATING_TO_USE_LOCAL_RESOURCE_SETTING, USE_LOCAL_RESOURCE_SETTING)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>ID for the Resolver configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The owner account ID of the Amazon Virtual Private Cloud VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Virtual Private Cloud VPC or a Route 53 Profile that you're configuring Resolver for.</td>
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
    <td><a href="#get_resolver_config"><CopyableCode code="get_resolver_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.</td>
</tr>
<tr>
    <td><a href="#list_resolver_configs"><CopyableCode code="list_resolver_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.</td>
</tr>
<tr>
    <td><a href="#update_resolver_config"><CopyableCode code="update_resolver_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-AutodefinedReverseFlag"><code>AutodefinedReverseFlag</code></a></td>
    <td></td>
    <td>Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.</td>
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
    defaultValue="get_resolver_config"
    values={[
        { label: 'get_resolver_config', value: 'get_resolver_config' },
        { label: 'list_resolver_configs', value: 'list_resolver_configs' }
    ]}
>
<TabItem value="get_resolver_config">

Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

```sql
SELECT
AutodefinedReverse,
Id,
OwnerId,
ResourceId
FROM aws.route53resolver.resolver_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resolver_configs">

Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.

```sql
SELECT
AutodefinedReverse,
Id,
OwnerId,
ResourceId
FROM aws.route53resolver.resolver_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resolver_config"
    values={[
        { label: 'update_resolver_config', value: 'update_resolver_config' }
    ]}
>
<TabItem value="update_resolver_config">

Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

```sql
UPDATE aws.route53resolver.resolver_configs
SET 
ResourceId = '{{ ResourceId }}',
AutodefinedReverseFlag = '{{ AutodefinedReverseFlag }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND AutodefinedReverseFlag = '{{ AutodefinedReverseFlag }}' --required
RETURNING
ResolverConfig;
```
</TabItem>
</Tabs>
