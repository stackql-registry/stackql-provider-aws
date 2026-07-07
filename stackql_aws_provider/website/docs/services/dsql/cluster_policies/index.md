--- 
title: cluster_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_policies
  - dsql
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

Creates, updates, deletes, gets or lists a <code>cluster_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dsql.cluster_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster_policy"
    values={[
        { label: 'get_cluster_policy', value: 'get_cluster_policy' }
    ]}
>
<TabItem value="get_cluster_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>A resource-based policy document in JSON format. Length constraints: Minimum length of 1. Maximum length of 20480 characters (approximately 20KB).</td>
</tr>
<tr>
    <td><CopyableCode code="policyVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the policy document. This version number is incremented each time the policy is updated.</td>
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
    <td><a href="#get_cluster_policy"><CopyableCode code="get_cluster_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the resource-based policy document attached to a cluster. This policy defines the access permissions and conditions for the cluster.</td>
</tr>
<tr>
    <td><a href="#put_cluster_policy"><CopyableCode code="put_cluster_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Attaches a resource-based policy to a cluster. This policy defines access permissions and conditions for the cluster, allowing you to control which principals can perform actions on the cluster.</td>
</tr>
<tr>
    <td><a href="#delete_cluster_policy"><CopyableCode code="delete_cluster_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expected-policy-version"><code>expected-policy-version</code></a>, <a href="#parameter-client-token"><code>client-token</code></a></td>
    <td>Deletes the resource-based policy attached to a cluster. This removes all access permissions defined by the policy, reverting to default access controls.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-client-token">
    <td><CopyableCode code="client-token" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-expected-policy-version">
    <td><CopyableCode code="expected-policy-version" /></td>
    <td><code>string</code></td>
    <td>The expected version of the policy to delete. This parameter ensures that you're deleting the correct version of the policy and helps prevent accidental deletions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cluster_policy"
    values={[
        { label: 'get_cluster_policy', value: 'get_cluster_policy' }
    ]}
>
<TabItem value="get_cluster_policy">

Retrieves the resource-based policy document attached to a cluster. This policy defines the access permissions and conditions for the cluster.

```sql
SELECT
policy,
policyVersion
FROM aws.dsql.cluster_policies
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_cluster_policy"
    values={[
        { label: 'put_cluster_policy', value: 'put_cluster_policy' }
    ]}
>
<TabItem value="put_cluster_policy">

Attaches a resource-based policy to a cluster. This policy defines access permissions and conditions for the cluster, allowing you to control which principals can perform actions on the cluster.

```sql
REPLACE aws.dsql.cluster_policies
SET 
policy = '{{ policy }}',
bypassPolicyLockoutSafetyCheck = {{ bypassPolicyLockoutSafetyCheck }},
expectedPolicyVersion = '{{ expectedPolicyVersion }}',
clientToken = '{{ clientToken }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND policy = '{{ policy }}' --required
RETURNING
policyVersion;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster_policy"
    values={[
        { label: 'delete_cluster_policy', value: 'delete_cluster_policy' }
    ]}
>
<TabItem value="delete_cluster_policy">

Deletes the resource-based policy attached to a cluster. This removes all access permissions defined by the policy, reverting to default access controls.

```sql
DELETE FROM aws.dsql.cluster_policies
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND `expected-policy-version` = '{{ expected-policy-version }}'
AND `client-token` = '{{ client-token }}'
;
```
</TabItem>
</Tabs>
