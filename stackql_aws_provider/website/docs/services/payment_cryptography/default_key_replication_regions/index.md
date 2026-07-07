--- 
title: default_key_replication_regions
hide_title: false
hide_table_of_contents: false
keywords:
  - default_key_replication_regions
  - payment_cryptography
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

Creates, updates, deletes, gets or lists a <code>default_key_replication_regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_key_replication_regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.default_key_replication_regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_key_replication_regions"
    values={[
        { label: 'get_default_key_replication_regions', value: 'get_default_key_replication_regions' }
    ]}
>
<TabItem value="get_default_key_replication_regions">

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
    <td><CopyableCode code="enabled_replication_region" /></td>
    <td><code>string</code></td>
    <td>The list of regions where default key replication is currently enabled for the account. New keys created in this account will automatically be replicated to these regions unless explicitly configured otherwise during key creation.</td>
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
    <td><a href="#get_default_key_replication_regions"><CopyableCode code="get_default_key_replication_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the list of Amazon Web Services Regions where Multi-Region key replication is currently enabled for your Amazon Web Services account. This operation returns the current Multi-Region key replication configuration. New keys created in your account will be automatically replicated to these regions unless explicitly overridden during key creation. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: EnableDefaultKeyReplicationRegions DisableDefaultKeyReplicationRegions</td>
</tr>
<tr>
    <td><a href="#disable_default_key_replication_regions"><CopyableCode code="disable_default_key_replication_regions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationRegions"><code>ReplicationRegions</code></a></td>
    <td></td>
    <td>Disables Multi-Region key replication settings for the specified Amazon Web Services Regions in your Amazon Web Services account, preventing new keys from being automatically replicated to those regions. After disabling Multi-Region key replication for specific regions, new keys created in your account will not be automatically replicated to those regions. You can still manually add replication to those regions for individual keys using the AddKeyReplicationRegions operation. This operation does not affect existing keys or their current replication configuration. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: EnableDefaultKeyReplicationRegions GetDefaultKeyReplicationRegions</td>
</tr>
<tr>
    <td><a href="#enable_default_key_replication_regions"><CopyableCode code="enable_default_key_replication_regions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationRegions"><code>ReplicationRegions</code></a></td>
    <td></td>
    <td>Enables Multi-Region key replication settings for your Amazon Web Services account, causing new keys to be automatically replicated to the specified Amazon Web Services Regions when created. When Multi-Region key replication are enabled, any new keys created in your account will automatically be replicated to these regions unless you explicitly override this behavior during key creation. This simplifies key management for applications that operate across multiple regions. Existing keys are not affected by this operation - only keys created after enabling default replication will be automatically replicated. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: DisableDefaultKeyReplicationRegions GetDefaultKeyReplicationRegions</td>
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
    defaultValue="get_default_key_replication_regions"
    values={[
        { label: 'get_default_key_replication_regions', value: 'get_default_key_replication_regions' }
    ]}
>
<TabItem value="get_default_key_replication_regions">

Retrieves the list of Amazon Web Services Regions where Multi-Region key replication is currently enabled for your Amazon Web Services account. This operation returns the current Multi-Region key replication configuration. New keys created in your account will be automatically replicated to these regions unless explicitly overridden during key creation. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: EnableDefaultKeyReplicationRegions DisableDefaultKeyReplicationRegions

```sql
SELECT
enabled_replication_region
FROM aws.payment_cryptography.default_key_replication_regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_default_key_replication_regions"
    values={[
        { label: 'disable_default_key_replication_regions', value: 'disable_default_key_replication_regions' },
        { label: 'enable_default_key_replication_regions', value: 'enable_default_key_replication_regions' }
    ]}
>
<TabItem value="disable_default_key_replication_regions">

Disables Multi-Region key replication settings for the specified Amazon Web Services Regions in your Amazon Web Services account, preventing new keys from being automatically replicated to those regions. After disabling Multi-Region key replication for specific regions, new keys created in your account will not be automatically replicated to those regions. You can still manually add replication to those regions for individual keys using the AddKeyReplicationRegions operation. This operation does not affect existing keys or their current replication configuration. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: EnableDefaultKeyReplicationRegions GetDefaultKeyReplicationRegions

```sql
EXEC aws.payment_cryptography.default_key_replication_regions.disable_default_key_replication_regions 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationRegions": "{{ ReplicationRegions }}"
}'
;
```
</TabItem>
<TabItem value="enable_default_key_replication_regions">

Enables Multi-Region key replication settings for your Amazon Web Services account, causing new keys to be automatically replicated to the specified Amazon Web Services Regions when created. When Multi-Region key replication are enabled, any new keys created in your account will automatically be replicated to these regions unless you explicitly override this behavior during key creation. This simplifies key management for applications that operate across multiple regions. Existing keys are not affected by this operation - only keys created after enabling default replication will be automatically replicated. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: DisableDefaultKeyReplicationRegions GetDefaultKeyReplicationRegions

```sql
EXEC aws.payment_cryptography.default_key_replication_regions.enable_default_key_replication_regions 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationRegions": "{{ ReplicationRegions }}"
}'
;
```
</TabItem>
</Tabs>
