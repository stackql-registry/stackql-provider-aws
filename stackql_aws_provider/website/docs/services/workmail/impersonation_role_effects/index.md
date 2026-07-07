--- 
title: impersonation_role_effects
hide_title: false
hide_table_of_contents: false
keywords:
  - impersonation_role_effects
  - workmail
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

Creates, updates, deletes, gets or lists an <code>impersonation_role_effects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="impersonation_role_effects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.impersonation_role_effects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_impersonation_role_effect"
    values={[
        { label: 'get_impersonation_role_effect', value: 'get_impersonation_role_effect' }
    ]}
>
<TabItem value="get_impersonation_role_effect">

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
    <td><CopyableCode code="Effect" /></td>
    <td><code>string</code></td>
    <td>Effect of the impersonation role on the target user based on its rules. Available effects are ALLOW or DENY. (ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="MatchedRules" /></td>
    <td><code>array</code></td>
    <td>A list of the rules that match the input and produce the configured effect.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The impersonation role type. (FULL_ACCESS, READ_ONLY)</td>
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
    <td><a href="#get_impersonation_role_effect"><CopyableCode code="get_impersonation_role_effect" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Tests whether the given impersonation role can impersonate a target user.</td>
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
    defaultValue="get_impersonation_role_effect"
    values={[
        { label: 'get_impersonation_role_effect', value: 'get_impersonation_role_effect' }
    ]}
>
<TabItem value="get_impersonation_role_effect">

Tests whether the given impersonation role can impersonate a target user.

```sql
SELECT
Effect,
MatchedRules,
Type
FROM aws.workmail.impersonation_role_effects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
