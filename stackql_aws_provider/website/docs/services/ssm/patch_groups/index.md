--- 
title: patch_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - patch_groups
  - ssm
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

Creates, updates, deletes, gets or lists a <code>patch_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="patch_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.patch_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_patch_groups"
    values={[
        { label: 'describe_patch_groups', value: 'describe_patch_groups' }
    ]}
>
<TabItem value="describe_patch_groups">

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
    <td><CopyableCode code="BaselineIdentity" /></td>
    <td><code>object</code></td>
    <td>Defines the basic information about a patch baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="PatchGroup" /></td>
    <td><code>string</code></td>
    <td>The name of the patch group registered with the patch baseline. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_patch_groups"><CopyableCode code="describe_patch_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all patch groups that have been registered with patch baselines.</td>
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
    defaultValue="describe_patch_groups"
    values={[
        { label: 'describe_patch_groups', value: 'describe_patch_groups' }
    ]}
>
<TabItem value="describe_patch_groups">

Lists all patch groups that have been registered with patch baselines.

```sql
SELECT
BaselineIdentity,
PatchGroup
FROM aws.ssm.patch_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
