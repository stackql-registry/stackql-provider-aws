--- 
title: core_network_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - core_network_policies
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>core_network_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="core_network_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.core_network_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_core_network_policy"
    values={[
        { label: 'get_core_network_policy', value: 'get_core_network_policy' }
    ]}
>
<TabItem value="get_core_network_policy">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Whether a core network policy is the current LIVE policy or the most recently submitted policy. (LIVE, LATEST)</td>
</tr>
<tr>
    <td><CopyableCode code="change_set_state" /></td>
    <td><code>string</code></td>
    <td>The state of a core network policy. (PENDING_GENERATION, FAILED_GENERATION, READY_TO_EXECUTE, EXECUTING, EXECUTION_SUCCEEDED, OUT_OF_DATE)</td>
</tr>
<tr>
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when a core network policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a core network policy. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_document" /></td>
    <td><code>string</code></td>
    <td>Describes a core network policy. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_errors" /></td>
    <td><code>array</code></td>
    <td>Describes any errors in a core network policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_version_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the policy version.</td>
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
    <td><a href="#get_core_network_policy"><CopyableCode code="get_core_network_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-policyVersionId"><code>policyVersionId</code></a>, <a href="#parameter-alias"><code>alias</code></a></td>
    <td>Returns details about a core network policy. You can get details about your current live policy or any previous policy version.</td>
</tr>
<tr>
    <td><a href="#put_core_network_policy"><CopyableCode code="put_core_network_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a></td>
    <td></td>
    <td>Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.</td>
</tr>
<tr>
    <td><a href="#restore_core_network_policy_version"><CopyableCode code="restore_core_network_policy_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-policy_version_id"><code>policy_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.</td>
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
<tr id="parameter-core_network_id">
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network.</td>
</tr>
<tr id="parameter-policy_version_id">
    <td><CopyableCode code="policy_version_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the policy version to restore.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias of a core network policy</td>
</tr>
<tr id="parameter-policyVersionId">
    <td><CopyableCode code="policyVersionId" /></td>
    <td><code>integer</code></td>
    <td>The ID of a core network policy version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_core_network_policy"
    values={[
        { label: 'get_core_network_policy', value: 'get_core_network_policy' }
    ]}
>
<TabItem value="get_core_network_policy">

Returns details about a core network policy. You can get details about your current live policy or any previous policy version.

```sql
SELECT
alias,
change_set_state,
core_network_id,
created_at,
description,
policy_document,
policy_errors,
policy_version_id
FROM aws.networkmanager.core_network_policies
WHERE core_network_id = '{{ core_network_id }}' -- required
AND region = '{{ region }}' -- required
AND policyVersionId = '{{ policyVersionId }}'
AND alias = '{{ alias }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_core_network_policy"
    values={[
        { label: 'put_core_network_policy', value: 'put_core_network_policy' }
    ]}
>
<TabItem value="put_core_network_policy">

Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.

```sql
REPLACE aws.networkmanager.core_network_policies
SET 
PolicyDocument = '{{ PolicyDocument }}',
Description = '{{ Description }}',
LatestVersionId = {{ LatestVersionId }},
ClientToken = '{{ ClientToken }}'
WHERE 
core_network_id = '{{ core_network_id }}' --required
AND region = '{{ region }}' --required
AND PolicyDocument = '{{ PolicyDocument }}' --required
RETURNING
core_network_policy;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_core_network_policy_version"
    values={[
        { label: 'restore_core_network_policy_version', value: 'restore_core_network_policy_version' }
    ]}
>
<TabItem value="restore_core_network_policy_version">

Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.

```sql
EXEC aws.networkmanager.core_network_policies.restore_core_network_policy_version 
@core_network_id='{{ core_network_id }}' --required, 
@policy_version_id='{{ policy_version_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
