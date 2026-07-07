--- 
title: hybrid_ad_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - hybrid_ad_updates
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

Creates, updates, deletes, gets or lists a <code>hybrid_ad_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hybrid_ad_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.hybrid_ad_updates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hybrid_ad_update"
    values={[
        { label: 'describe_hybrid_ad_update', value: 'describe_hybrid_ad_update' }
    ]}
>
<TabItem value="describe_hybrid_ad_update">

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
    <td><CopyableCode code="HybridAdministratorAccount" /></td>
    <td><code>array</code></td>
    <td>A list of update activities related to hybrid directory administrator account changes.</td>
</tr>
<tr>
    <td><CopyableCode code="SelfManagedInstances" /></td>
    <td><code>array</code></td>
    <td>A list of update activities related to the self-managed instances with SSM in the self-managed instances with SSM hybrid directory configuration.</td>
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
    <td><a href="#describe_hybrid_ad_update"><CopyableCode code="describe_hybrid_ad_update" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about update activities for a hybrid directory. This operation provides details about configuration changes, administrator account updates, and self-managed instance settings (IDs and DNS IPs).</td>
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
    defaultValue="describe_hybrid_ad_update"
    values={[
        { label: 'describe_hybrid_ad_update', value: 'describe_hybrid_ad_update' }
    ]}
>
<TabItem value="describe_hybrid_ad_update">

Retrieves information about update activities for a hybrid directory. This operation provides details about configuration changes, administrator account updates, and self-managed instance settings (IDs and DNS IPs).

```sql
SELECT
HybridAdministratorAccount,
SelfManagedInstances
FROM aws.ds.hybrid_ad_updates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
