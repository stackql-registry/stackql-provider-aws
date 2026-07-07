--- 
title: resolver_dnssec_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_dnssec_configs
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

Creates, updates, deletes, gets or lists a <code>resolver_dnssec_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_dnssec_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_dnssec_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_dnssec_config"
    values={[
        { label: 'get_resolver_dnssec_config', value: 'get_resolver_dnssec_config' },
        { label: 'list_resolver_dnssec_configs', value: 'list_resolver_dnssec_configs' }
    ]}
>
<TabItem value="get_resolver_dnssec_config">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID for a configuration for DNSSEC validation.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationStatus" /></td>
    <td><code>string</code></td>
    <td>The validation status for a DNSSEC configuration. The status can be one of the following: ENABLING: DNSSEC validation is being enabled but is not complete. ENABLED: DNSSEC validation is enabled. DISABLING: DNSSEC validation is being disabled but is not complete. DISABLED DNSSEC validation is disabled. (ENABLING, ENABLED, DISABLING, DISABLED, UPDATING_TO_USE_LOCAL_RESOURCE_SETTING, USE_LOCAL_RESOURCE_SETTING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resolver_dnssec_configs">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID for a configuration for DNSSEC validation.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationStatus" /></td>
    <td><code>string</code></td>
    <td>The validation status for a DNSSEC configuration. The status can be one of the following: ENABLING: DNSSEC validation is being enabled but is not complete. ENABLED: DNSSEC validation is enabled. DISABLING: DNSSEC validation is being disabled but is not complete. DISABLED DNSSEC validation is disabled. (ENABLING, ENABLED, DISABLING, DISABLED, UPDATING_TO_USE_LOCAL_RESOURCE_SETTING, USE_LOCAL_RESOURCE_SETTING)</td>
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
    <td><a href="#get_resolver_dnssec_config"><CopyableCode code="get_resolver_dnssec_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets DNSSEC validation information for a specified resource.</td>
</tr>
<tr>
    <td><a href="#list_resolver_dnssec_configs"><CopyableCode code="list_resolver_dnssec_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_resolver_dnssec_config"><CopyableCode code="update_resolver_dnssec_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-Validation"><code>Validation</code></a></td>
    <td></td>
    <td>Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.</td>
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
    defaultValue="get_resolver_dnssec_config"
    values={[
        { label: 'get_resolver_dnssec_config', value: 'get_resolver_dnssec_config' },
        { label: 'list_resolver_dnssec_configs', value: 'list_resolver_dnssec_configs' }
    ]}
>
<TabItem value="get_resolver_dnssec_config">

Gets DNSSEC validation information for a specified resource.

```sql
SELECT
Id,
OwnerId,
ResourceId,
ValidationStatus
FROM aws.route53resolver.resolver_dnssec_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resolver_dnssec_configs">

Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.

```sql
SELECT
Id,
OwnerId,
ResourceId,
ValidationStatus
FROM aws.route53resolver.resolver_dnssec_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resolver_dnssec_config"
    values={[
        { label: 'update_resolver_dnssec_config', value: 'update_resolver_dnssec_config' }
    ]}
>
<TabItem value="update_resolver_dnssec_config">

Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.

```sql
UPDATE aws.route53resolver.resolver_dnssec_configs
SET 
ResourceId = '{{ ResourceId }}',
Validation = '{{ Validation }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND Validation = '{{ Validation }}' --required
RETURNING
ResolverDNSSECConfig;
```
</TabItem>
</Tabs>
