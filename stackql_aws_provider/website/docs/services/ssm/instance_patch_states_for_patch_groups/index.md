--- 
title: instance_patch_states_for_patch_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_patch_states_for_patch_groups
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

Creates, updates, deletes, gets or lists an <code>instance_patch_states_for_patch_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_patch_states_for_patch_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.instance_patch_states_for_patch_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_patch_states_for_patch_group"
    values={[
        { label: 'describe_instance_patch_states_for_patch_group', value: 'describe_instance_patch_states_for_patch_group' }
    ]}
>
<TabItem value="describe_instance_patch_states_for_patch_group">

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
    <td><CopyableCode code="available_security_update_count" /></td>
    <td><code>integer</code></td>
    <td>The number of security-related patches that are available but not approved because they didn't meet the patch baseline requirements. For example, an updated version of a patch might have been released before the specified auto-approval period was over. Applies to Windows Server managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="baseline_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the patch baseline used to patch the managed node. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-:/&#93;&#123;20,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="critical_non_compliant_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches per node that are specified as Critical for compliance reporting in the patch baseline aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is NON_COMPLIANT.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches from the patch baseline that were attempted to be installed during the last patching operation, but failed to install.</td>
</tr>
<tr>
    <td><CopyableCode code="install_override_list" /></td>
    <td><code>string</code></td>
    <td>An https URL or an Amazon Simple Storage Service (Amazon S3) path-style URL to a list of patches to be installed. This patch installation list, which you maintain in an S3 bucket in YAML format and specify in the SSM document AWS-RunPatchBaseline, overrides the patches specified by the default patch baseline. For more information about the InstallOverrideList parameter, see SSM Command document for patching: AWS-RunPatchBaseline in the Amazon Web Services Systems Manager User Guide. (pattern: &lt;code&gt;^https:​//.+$|^s3:​//(&#91;^/&#93;+)/(.*?(&#91;^/&#93;+))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="installed_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches from the patch baseline that are installed on the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="installed_other_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches not specified in the patch baseline that are installed on the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="installed_pending_reboot_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches installed by Patch Manager since the last time the managed node was rebooted.</td>
</tr>
<tr>
    <td><CopyableCode code="installed_rejected_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches installed on a managed node that are specified in a RejectedPatches list. Patches with a status of InstalledRejected were typically installed before they were added to a RejectedPatches list. If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of InstalledRejectedCount will always be 0 (zero).</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed node the high-level patch compliance information was collected for. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_no_reboot_install_operation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of the last attempt to patch the managed node with NoReboot specified as the reboot option.</td>
</tr>
<tr>
    <td><CopyableCode code="missing_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches from the patch baseline that are applicable for the managed node but aren't currently installed.</td>
</tr>
<tr>
    <td><CopyableCode code="not_applicable_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches from the patch baseline that aren't applicable for the managed node and therefore aren't installed on the node. This number may be truncated if the list of patch names is very large. The number of patches beyond this limit are reported in UnreportedNotApplicableCount.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The type of patching operation that was performed: or SCAN assesses the patch compliance state. INSTALL installs missing patches. (Scan, Install)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the most recent patching operation completed on the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the most recent patching operation was started on the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="other_non_compliant_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches per node that are specified as other than Critical or Security but aren't compliant with the patch baseline. The status of these managed nodes is NON_COMPLIANT.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_information" /></td>
    <td><code>string</code></td>
    <td>Placeholder information. This field will always be empty in the current release of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="patch_group" /></td>
    <td><code>string</code></td>
    <td>The name of the patch group the managed node belongs to. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reboot_option" /></td>
    <td><code>string</code></td>
    <td>Indicates the reboot option specified in the patch baseline. Reboot options apply to Install operations only. Reboots aren't attempted for Patch Manager Scan operations. RebootIfNeeded: Patch Manager tries to reboot the managed node if it installed any patches, or if any patches are detected with a status of InstalledPendingReboot. NoReboot: Patch Manager attempts to install missing packages without trying to reboot the system. Patches installed with this option are assigned a status of InstalledPendingReboot. These patches might not be in effect until a reboot is performed. (RebootIfNeeded, NoReboot)</td>
</tr>
<tr>
    <td><CopyableCode code="security_non_compliant_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches per node that are specified as Security in a patch advisory aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is NON_COMPLIANT.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the patch baseline snapshot used during the patching operation when this compliance data was collected. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="unreported_not_applicable_count" /></td>
    <td><code>integer</code></td>
    <td>The number of patches beyond the supported limit of NotApplicableCount that aren't reported by name to Inventory. Inventory is a tool in Amazon Web Services Systems Manager.</td>
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
    <td><a href="#describe_instance_patch_states_for_patch_group"><CopyableCode code="describe_instance_patch_states_for_patch_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the high-level patch state for the managed nodes in the specified patch group.</td>
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
    defaultValue="describe_instance_patch_states_for_patch_group"
    values={[
        { label: 'describe_instance_patch_states_for_patch_group', value: 'describe_instance_patch_states_for_patch_group' }
    ]}
>
<TabItem value="describe_instance_patch_states_for_patch_group">

Retrieves the high-level patch state for the managed nodes in the specified patch group.

```sql
SELECT
available_security_update_count,
baseline_id,
critical_non_compliant_count,
failed_count,
install_override_list,
installed_count,
installed_other_count,
installed_pending_reboot_count,
installed_rejected_count,
instance_id,
last_no_reboot_install_operation_time,
missing_count,
not_applicable_count,
operation,
operation_end_time,
operation_start_time,
other_non_compliant_count,
owner_information,
patch_group,
reboot_option,
security_non_compliant_count,
snapshot_id,
unreported_not_applicable_count
FROM aws.ssm.instance_patch_states_for_patch_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
