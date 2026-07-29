--- 
title: configured_audience_model_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_audience_model_policies
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>configured_audience_model_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configured_audience_model_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.configured_audience_model_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configured_audience_model_policy"
    values={[
        { label: 'get_configured_audience_model_policy', value: 'get_configured_audience_model_policy' }
    ]}
>
<TabItem value="get_configured_audience_model_policy">

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
    <td><CopyableCode code="configured_audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_audience_model_policy" /></td>
    <td><code>string</code></td>
    <td>The configured audience model policy. This is a JSON IAM resource policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_hash" /></td>
    <td><code>string</code></td>
    <td>A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy. (pattern: &lt;code&gt;&#91;0-9a-f&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_configured_audience_model_policy"><CopyableCode code="get_configured_audience_model_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configured_audience_model_arn"><code>configured_audience_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a configured audience model policy.</td>
</tr>
<tr>
    <td><a href="#put_configured_audience_model_policy"><CopyableCode code="put_configured_audience_model_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-configured_audience_model_arn"><code>configured_audience_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuredAudienceModelPolicy"><code>configuredAudienceModelPolicy</code></a></td>
    <td></td>
    <td>Create or update the resource policy for a configured audience model.</td>
</tr>
<tr>
    <td><a href="#delete_configured_audience_model_policy"><CopyableCode code="delete_configured_audience_model_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configured_audience_model_arn"><code>configured_audience_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified configured audience model policy.</td>
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
<tr id="parameter-configured_audience_model_arn">
    <td><CopyableCode code="configured_audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model policy that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configured_audience_model_policy"
    values={[
        { label: 'get_configured_audience_model_policy', value: 'get_configured_audience_model_policy' }
    ]}
>
<TabItem value="get_configured_audience_model_policy">

Returns information about a configured audience model policy.

```sql
SELECT
configured_audience_model_arn,
configured_audience_model_policy,
policy_hash
FROM aws.cleanroomsml.configured_audience_model_policies
WHERE configured_audience_model_arn = '{{ configured_audience_model_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_configured_audience_model_policy"
    values={[
        { label: 'put_configured_audience_model_policy', value: 'put_configured_audience_model_policy' }
    ]}
>
<TabItem value="put_configured_audience_model_policy">

Create or update the resource policy for a configured audience model.

```sql
REPLACE aws.cleanroomsml.configured_audience_model_policies
SET 
configuredAudienceModelPolicy = '{{ configuredAudienceModelPolicy }}',
previousPolicyHash = '{{ previousPolicyHash }}',
policyExistenceCondition = '{{ policyExistenceCondition }}'
WHERE 
configured_audience_model_arn = '{{ configured_audience_model_arn }}' --required
AND region = '{{ region }}' --required
AND configuredAudienceModelPolicy = '{{ configuredAudienceModelPolicy }}' --required
RETURNING
configured_audience_model_policy,
policy_hash;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configured_audience_model_policy"
    values={[
        { label: 'delete_configured_audience_model_policy', value: 'delete_configured_audience_model_policy' }
    ]}
>
<TabItem value="delete_configured_audience_model_policy">

Deletes the specified configured audience model policy.

```sql
DELETE FROM aws.cleanroomsml.configured_audience_model_policies
WHERE configured_audience_model_arn = '{{ configured_audience_model_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
