--- 
title: patch_group_states
hide_title: false
hide_table_of_contents: false
keywords:
  - patch_group_states
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

Creates, updates, deletes, gets or lists a <code>patch_group_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="patch_group_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.patch_group_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_patch_group_state"
    values={[
        { label: 'describe_patch_group_state', value: 'describe_patch_group_state' }
    ]}
>
<TabItem value="describe_patch_group_state">

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
    <td><CopyableCode code="instances" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes in the patch group.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_available_security_updates" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes for which security-related patches are available but not approved because because they didn't meet the patch baseline requirements. For example, an updated version of a patch might have been released before the specified auto-approval period was over. Applies to Windows Server managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_critical_non_compliant_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes where patches that are specified as Critical for compliance reporting in the patch baseline aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is NON_COMPLIANT.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_failed_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with patches from the patch baseline that failed to install.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_installed_other_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with patches installed that aren't defined in the patch baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_installed_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with installed patches.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_installed_pending_reboot_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with patches installed by Patch Manager that haven't been rebooted after the patch installation. The status of these managed nodes is NON_COMPLIANT.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_installed_rejected_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with patches installed that are specified in a RejectedPatches list. Patches with a status of INSTALLED_REJECTED were typically installed before they were added to a RejectedPatches list. If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of InstancesWithInstalledRejectedPatches will always be 0 (zero).</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_missing_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with missing patches from the patch baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_not_applicable_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with patches that aren't applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_other_non_compliant_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with patches installed that are specified as other than Critical or Security but aren't compliant with the patch baseline. The status of these managed nodes is NON_COMPLIANT.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_security_non_compliant_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes where patches that are specified as Security in a patch advisory aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is NON_COMPLIANT.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_with_unreported_not_applicable_patches" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes with NotApplicable patches beyond the supported limit, which aren't reported by name to Inventory. Inventory is a tool in Amazon Web Services Systems Manager.</td>
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
    <td><a href="#describe_patch_group_state"><CopyableCode code="describe_patch_group_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns high-level aggregated patch compliance state information for a patch group.</td>
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
    defaultValue="describe_patch_group_state"
    values={[
        { label: 'describe_patch_group_state', value: 'describe_patch_group_state' }
    ]}
>
<TabItem value="describe_patch_group_state">

Returns high-level aggregated patch compliance state information for a patch group.

```sql
SELECT
instances,
instances_with_available_security_updates,
instances_with_critical_non_compliant_patches,
instances_with_failed_patches,
instances_with_installed_other_patches,
instances_with_installed_patches,
instances_with_installed_pending_reboot_patches,
instances_with_installed_rejected_patches,
instances_with_missing_patches,
instances_with_not_applicable_patches,
instances_with_other_non_compliant_patches,
instances_with_security_non_compliant_patches,
instances_with_unreported_not_applicable_patches
FROM aws.ssm.patch_group_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
