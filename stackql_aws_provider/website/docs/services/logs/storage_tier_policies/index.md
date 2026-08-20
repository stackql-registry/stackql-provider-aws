--- 
title: storage_tier_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_tier_policies
  - logs
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

Creates, updates, deletes, gets or lists a <code>storage_tier_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_tier_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.storage_tier_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_tier_policy"
    values={[
        { label: 'get_storage_tier_policy', value: 'get_storage_tier_policy' }
    ]}
>
<TabItem value="get_storage_tier_policy">

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
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time when the storage tier policy was last updated, expressed as the number of milliseconds after January 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_tier" /></td>
    <td><code>string</code></td>
    <td>The current storage tier for the account. (STANDARD, INTELLIGENT_TIERING)</td>
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
    <td><a href="#get_storage_tier_policy"><CopyableCode code="get_storage_tier_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the storage tier policy for the account.</td>
</tr>
<tr>
    <td><a href="#put_storage_tier_policy"><CopyableCode code="put_storage_tier_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-storageTier"><code>storageTier</code></a></td>
    <td></td>
    <td>Sets the storage tier policy for the account. When you set the storage tier to INTELLIGENT_TIERING, the service automatically moves log data to the most cost-effective storage tier based on access frequency.</td>
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
    defaultValue="get_storage_tier_policy"
    values={[
        { label: 'get_storage_tier_policy', value: 'get_storage_tier_policy' }
    ]}
>
<TabItem value="get_storage_tier_policy">

Returns the storage tier policy for the account.

```sql
SELECT
last_updated_time,
storage_tier
FROM aws.logs.storage_tier_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_storage_tier_policy"
    values={[
        { label: 'put_storage_tier_policy', value: 'put_storage_tier_policy' }
    ]}
>
<TabItem value="put_storage_tier_policy">

Sets the storage tier policy for the account. When you set the storage tier to INTELLIGENT_TIERING, the service automatically moves log data to the most cost-effective storage tier based on access frequency.

```sql
REPLACE aws.logs.storage_tier_policies
SET 
storageTier = '{{ storageTier }}'
WHERE 
region = '{{ region }}' --required
AND storageTier = '{{ storageTier }}' --required
RETURNING
last_updated_time,
storage_tier;
```
</TabItem>
</Tabs>
