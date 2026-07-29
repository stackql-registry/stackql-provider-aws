--- 
title: registry_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_policies
  - ecr
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

Creates, updates, deletes, gets or lists a <code>registry_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registry_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.registry_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registry_policy"
    values={[
        { label: 'get_registry_policy', value: 'get_registry_policy' }
    ]}
>
<TabItem value="get_registry_policy">

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
    <td><CopyableCode code="policy_text" /></td>
    <td><code>string</code></td>
    <td>The JSON text of the permissions policy for a registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The registry ID associated with the request. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_registry_policy"><CopyableCode code="get_registry_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the permissions policy for a registry.</td>
</tr>
<tr>
    <td><a href="#put_registry_policy"><CopyableCode code="put_registry_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyText"><code>policyText</code></a></td>
    <td></td>
    <td>Creates or updates the permissions policy for your registry. A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see Registry permissions in the Amazon Elastic Container Registry User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_registry_policy"><CopyableCode code="delete_registry_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the registry permissions policy.</td>
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
    defaultValue="get_registry_policy"
    values={[
        { label: 'get_registry_policy', value: 'get_registry_policy' }
    ]}
>
<TabItem value="get_registry_policy">

Retrieves the permissions policy for a registry.

```sql
SELECT
policy_text,
registry_id
FROM aws.ecr.registry_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_registry_policy"
    values={[
        { label: 'put_registry_policy', value: 'put_registry_policy' }
    ]}
>
<TabItem value="put_registry_policy">

Creates or updates the permissions policy for your registry. A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see Registry permissions in the Amazon Elastic Container Registry User Guide.

```sql
REPLACE aws.ecr.registry_policies
SET 
policyText = '{{ policyText }}'
WHERE 
region = '{{ region }}' --required
AND policyText = '{{ policyText }}' --required
RETURNING
policy_text,
registry_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registry_policy"
    values={[
        { label: 'delete_registry_policy', value: 'delete_registry_policy' }
    ]}
>
<TabItem value="delete_registry_policy">

Deletes the registry permissions policy.

```sql
DELETE FROM aws.ecr.registry_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
