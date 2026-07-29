--- 
title: patch_baseline_for_patch_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - patch_baseline_for_patch_groups
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

Creates, updates, deletes, gets or lists a <code>patch_baseline_for_patch_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="patch_baseline_for_patch_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.patch_baseline_for_patch_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_patch_baseline_for_patch_group"
    values={[
        { label: 'get_patch_baseline_for_patch_group', value: 'get_patch_baseline_for_patch_group' }
    ]}
>
<TabItem value="get_patch_baseline_for_patch_group">

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
    <td><CopyableCode code="baseline_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the patch baseline that should be used for the patch group. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-:/&#93;&#123;20,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>string</code></td>
    <td>The operating system rule specified for patch groups using the patch baseline. (WINDOWS, AMAZON_LINUX, AMAZON_LINUX_2, AMAZON_LINUX_2022, UBUNTU, REDHAT_ENTERPRISE_LINUX, SUSE, CENTOS, ORACLE_LINUX, DEBIAN, MACOS, RASPBIAN, ROCKY_LINUX, ALMA_LINUX, AMAZON_LINUX_2023)</td>
</tr>
<tr>
    <td><CopyableCode code="patch_group" /></td>
    <td><code>string</code></td>
    <td>The name of the patch group. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
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
    <td><a href="#get_patch_baseline_for_patch_group"><CopyableCode code="get_patch_baseline_for_patch_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the patch baseline that should be used for the specified patch group.</td>
</tr>
<tr>
    <td><a href="#register_patch_baseline_for_patch_group"><CopyableCode code="register_patch_baseline_for_patch_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BaselineId"><code>BaselineId</code></a>, <a href="#parameter-PatchGroup"><code>PatchGroup</code></a></td>
    <td></td>
    <td>Registers a patch baseline for a patch group.</td>
</tr>
<tr>
    <td><a href="#deregister_patch_baseline_for_patch_group"><CopyableCode code="deregister_patch_baseline_for_patch_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a patch group from a patch baseline.</td>
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
    defaultValue="get_patch_baseline_for_patch_group"
    values={[
        { label: 'get_patch_baseline_for_patch_group', value: 'get_patch_baseline_for_patch_group' }
    ]}
>
<TabItem value="get_patch_baseline_for_patch_group">

Retrieves the patch baseline that should be used for the specified patch group.

```sql
SELECT
baseline_id,
operating_system,
patch_group
FROM aws.ssm.patch_baseline_for_patch_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_patch_baseline_for_patch_group"
    values={[
        { label: 'register_patch_baseline_for_patch_group', value: 'register_patch_baseline_for_patch_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_patch_baseline_for_patch_group">

Registers a patch baseline for a patch group.

```sql
INSERT INTO aws.ssm.patch_baseline_for_patch_groups (
BaselineId,
PatchGroup,
region
)
SELECT 
'{{ BaselineId }}' /* required */,
'{{ PatchGroup }}' /* required */,
'{{ region }}'
RETURNING
baseline_id,
patch_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: patch_baseline_for_patch_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the patch_baseline_for_patch_groups resource.
    - name: BaselineId
      value: "{{ BaselineId }}"
      description: |
        The ID of the patch baseline to register with the patch group.
    - name: PatchGroup
      value: "{{ PatchGroup }}"
      description: |
        The name of the patch group to be registered with the patch baseline.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_patch_baseline_for_patch_group"
    values={[
        { label: 'deregister_patch_baseline_for_patch_group', value: 'deregister_patch_baseline_for_patch_group' }
    ]}
>
<TabItem value="deregister_patch_baseline_for_patch_group">

Removes a patch group from a patch baseline.

```sql
DELETE FROM aws.ssm.patch_baseline_for_patch_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
