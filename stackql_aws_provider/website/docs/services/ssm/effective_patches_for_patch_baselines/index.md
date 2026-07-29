--- 
title: effective_patches_for_patch_baselines
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_patches_for_patch_baselines
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

Creates, updates, deletes, gets or lists an <code>effective_patches_for_patch_baselines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_patches_for_patch_baselines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.effective_patches_for_patch_baselines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_effective_patches_for_patch_baseline"
    values={[
        { label: 'describe_effective_patches_for_patch_baseline', value: 'describe_effective_patches_for_patch_baseline' }
    ]}
>
<TabItem value="describe_effective_patches_for_patch_baseline">

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
    <td><CopyableCode code="patch" /></td>
    <td><code>object</code></td>
    <td>Represents metadata about a patch.</td>
</tr>
<tr>
    <td><CopyableCode code="patch_status" /></td>
    <td><code>object</code></td>
    <td>The status of the patch in a patch baseline. This includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.</td>
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
    <td><a href="#describe_effective_patches_for_patch_baseline"><CopyableCode code="describe_effective_patches_for_patch_baseline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.</td>
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
    defaultValue="describe_effective_patches_for_patch_baseline"
    values={[
        { label: 'describe_effective_patches_for_patch_baseline', value: 'describe_effective_patches_for_patch_baseline' }
    ]}
>
<TabItem value="describe_effective_patches_for_patch_baseline">

Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.

```sql
SELECT
patch,
patch_status
FROM aws.ssm.effective_patches_for_patch_baselines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
