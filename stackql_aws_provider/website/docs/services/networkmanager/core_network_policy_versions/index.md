--- 
title: core_network_policy_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - core_network_policy_versions
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

Creates, updates, deletes, gets or lists a <code>core_network_policy_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="core_network_policy_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.core_network_policy_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_core_network_policy_versions"
    values={[
        { label: 'list_core_network_policy_versions', value: 'list_core_network_policy_versions' }
    ]}
>
<TabItem value="list_core_network_policy_versions">

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
    <td><CopyableCode code="Alias" /></td>
    <td><code>string</code></td>
    <td>Whether a core network policy is the current policy or the most recently submitted policy. (LIVE, LATEST)</td>
</tr>
<tr>
    <td><CopyableCode code="ChangeSetState" /></td>
    <td><code>string</code></td>
    <td>The status of the policy version change set. (PENDING_GENERATION, FAILED_GENERATION, READY_TO_EXECUTE, EXECUTING, EXECUTION_SUCCEEDED, OUT_OF_DATE)</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when a core network policy version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of a core network policy version. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyVersionId" /></td>
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
    <td><a href="#list_core_network_policy_versions"><CopyableCode code="list_core_network_policy_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of core network policy versions.</td>
</tr>
<tr>
    <td><a href="#delete_core_network_policy_version"><CopyableCode code="delete_core_network_policy_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-policy_version_id"><code>policy_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a policy version from a core network. You can't delete the current LIVE policy.</td>
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
    <td>The ID of a core network for the deleted policy.</td>
</tr>
<tr id="parameter-policy_version_id">
    <td><CopyableCode code="policy_version_id" /></td>
    <td><code>integer</code></td>
    <td>The version ID of the deleted policy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_core_network_policy_versions"
    values={[
        { label: 'list_core_network_policy_versions', value: 'list_core_network_policy_versions' }
    ]}
>
<TabItem value="list_core_network_policy_versions">

Returns a list of core network policy versions.

```sql
SELECT
Alias,
ChangeSetState,
CoreNetworkId,
CreatedAt,
Description,
PolicyVersionId
FROM aws.networkmanager.core_network_policy_versions
WHERE core_network_id = '{{ core_network_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_core_network_policy_version"
    values={[
        { label: 'delete_core_network_policy_version', value: 'delete_core_network_policy_version' }
    ]}
>
<TabItem value="delete_core_network_policy_version">

Deletes a policy version from a core network. You can't delete the current LIVE policy.

```sql
DELETE FROM aws.networkmanager.core_network_policy_versions
WHERE core_network_id = '{{ core_network_id }}' --required
AND policy_version_id = '{{ policy_version_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
