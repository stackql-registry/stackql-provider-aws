--- 
title: lens_version_differences
hide_title: false
hide_table_of_contents: false
keywords:
  - lens_version_differences
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>lens_version_differences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lens_version_differences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.lens_version_differences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lens_version_difference"
    values={[
        { label: 'get_lens_version_difference', value: 'get_lens_version_difference' }
    ]}
>
<TabItem value="get_lens_version_difference">

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
    <td><CopyableCode code="base_lens_version" /></td>
    <td><code>string</code></td>
    <td>The base version of the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_lens_version" /></td>
    <td><code>string</code></td>
    <td>The latest version of the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the lens. For Amazon Web Services official lenses, this is either the lens alias, such as serverless, or the lens ARN, such as arn:aws:wellarchitected:us-east-1::lens/serverless. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses. For custom lenses, this is the lens ARN, such as arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef. Each lens is identified by its LensSummary$LensAlias.</td>
</tr>
<tr>
    <td><CopyableCode code="lens_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="target_lens_version" /></td>
    <td><code>string</code></td>
    <td>The target lens version for the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="version_differences" /></td>
    <td><code>object</code></td>
    <td>The differences between the base and latest versions of the lens.</td>
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
    <td><a href="#get_lens_version_difference"><CopyableCode code="get_lens_version_difference" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BaseLensVersion"><code>BaseLensVersion</code></a>, <a href="#parameter-TargetLensVersion"><code>TargetLensVersion</code></a></td>
    <td>Get lens version differences.</td>
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
<tr id="parameter-lens_alias">
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BaseLensVersion">
    <td><CopyableCode code="BaseLensVersion" /></td>
    <td><code>string</code></td>
    <td>The base version of the lens.</td>
</tr>
<tr id="parameter-TargetLensVersion">
    <td><CopyableCode code="TargetLensVersion" /></td>
    <td><code>string</code></td>
    <td>The lens version to target a difference for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_lens_version_difference"
    values={[
        { label: 'get_lens_version_difference', value: 'get_lens_version_difference' }
    ]}
>
<TabItem value="get_lens_version_difference">

Get lens version differences.

```sql
SELECT
base_lens_version,
latest_lens_version,
lens_alias,
lens_arn,
target_lens_version,
version_differences
FROM aws.wellarchitected.lens_version_differences
WHERE lens_alias = '{{ lens_alias }}' -- required
AND region = '{{ region }}' -- required
AND BaseLensVersion = '{{ BaseLensVersion }}'
AND TargetLensVersion = '{{ TargetLensVersion }}'
;
```
</TabItem>
</Tabs>
