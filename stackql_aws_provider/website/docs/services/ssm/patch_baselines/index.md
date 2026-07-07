--- 
title: patch_baselines
hide_title: false
hide_table_of_contents: false
keywords:
  - patch_baselines
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

Creates, updates, deletes, gets or lists a <code>patch_baselines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="patch_baselines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.patch_baselines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_patch_baseline"
    values={[
        { label: 'get_patch_baseline', value: 'get_patch_baseline' },
        { label: 'describe_patch_baselines', value: 'describe_patch_baselines' }
    ]}
>
<TabItem value="get_patch_baseline">

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
    <td><CopyableCode code="ApprovalRules" /></td>
    <td><code>object</code></td>
    <td>A set of rules defining the approval rules for a patch baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovedPatches" /></td>
    <td><code>array</code></td>
    <td>A list of explicitly approved patches for the baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovedPatchesComplianceLevel" /></td>
    <td><code>string</code></td>
    <td>Returns the specified compliance severity level for approved patches in the patch baseline. (CRITICAL, HIGH, MEDIUM, LOW, INFORMATIONAL, UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovedPatchesEnableNonSecurity" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is false. Applies to Linux managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableSecurityUpdatesComplianceStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the compliance status of managed nodes for which security-related patches are available but were not approved. This preference is specified when the CreatePatchBaseline or UpdatePatchBaseline commands are run. Applies to Windows Server managed nodes only. (COMPLIANT, NON_COMPLIANT)</td>
</tr>
<tr>
    <td><CopyableCode code="BaselineId" /></td>
    <td><code>string</code></td>
    <td>The ID of the retrieved patch baseline. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-:/&#93;&#123;20,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the patch baseline was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the patch baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalFilters" /></td>
    <td><code>object</code></td>
    <td>A set of patch filters, typically used for approval rules.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the patch baseline was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the patch baseline. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingSystem" /></td>
    <td><code>string</code></td>
    <td>Returns the operating system specified for the patch baseline. (WINDOWS, AMAZON_LINUX, AMAZON_LINUX_2, AMAZON_LINUX_2022, UBUNTU, REDHAT_ENTERPRISE_LINUX, SUSE, CENTOS, ORACLE_LINUX, DEBIAN, MACOS, RASPBIAN, ROCKY_LINUX, ALMA_LINUX, AMAZON_LINUX_2023)</td>
</tr>
<tr>
    <td><CopyableCode code="PatchGroups" /></td>
    <td><code>array</code></td>
    <td>Patch groups included in the patch baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="RejectedPatches" /></td>
    <td><code>array</code></td>
    <td>A list of explicitly rejected patches for the baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="RejectedPatchesAction" /></td>
    <td><code>string</code></td>
    <td>The action specified to take on patches included in the RejectedPatches list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency. (ALLOW_AS_DEPENDENCY, BLOCK)</td>
</tr>
<tr>
    <td><CopyableCode code="Sources" /></td>
    <td><code>array</code></td>
    <td>Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_patch_baselines">

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
    <td><CopyableCode code="BaselineDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the patch baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="BaselineId" /></td>
    <td><code>string</code></td>
    <td>The ID of the patch baseline. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-:/&#93;&#123;20,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BaselineName" /></td>
    <td><code>string</code></td>
    <td>The name of the patch baseline. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultBaseline" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingSystem" /></td>
    <td><code>string</code></td>
    <td>Defines the operating system the patch baseline applies to. The default value is WINDOWS. (WINDOWS, AMAZON_LINUX, AMAZON_LINUX_2, AMAZON_LINUX_2022, UBUNTU, REDHAT_ENTERPRISE_LINUX, SUSE, CENTOS, ORACLE_LINUX, DEBIAN, MACOS, RASPBIAN, ROCKY_LINUX, ALMA_LINUX, AMAZON_LINUX_2023)</td>
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
    <td><a href="#get_patch_baseline"><CopyableCode code="get_patch_baseline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a patch baseline.</td>
</tr>
<tr>
    <td><a href="#describe_patch_baselines"><CopyableCode code="describe_patch_baselines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the patch baselines in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_patch_baseline"><CopyableCode code="create_patch_baseline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a patch baseline. For information about valid key-value pairs in PatchFilters for each supported operating system type, see PatchFilter.</td>
</tr>
<tr>
    <td><a href="#update_patch_baseline"><CopyableCode code="update_patch_baseline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BaselineId"><code>BaselineId</code></a></td>
    <td></td>
    <td>Modifies an existing patch baseline. Fields not specified in the request are left unchanged. For information about valid key-value pairs in PatchFilters for each supported operating system type, see PatchFilter.</td>
</tr>
<tr>
    <td><a href="#delete_patch_baseline"><CopyableCode code="delete_patch_baseline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a patch baseline.</td>
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
    defaultValue="get_patch_baseline"
    values={[
        { label: 'get_patch_baseline', value: 'get_patch_baseline' },
        { label: 'describe_patch_baselines', value: 'describe_patch_baselines' }
    ]}
>
<TabItem value="get_patch_baseline">

Retrieves information about a patch baseline.

```sql
SELECT
ApprovalRules,
ApprovedPatches,
ApprovedPatchesComplianceLevel,
ApprovedPatchesEnableNonSecurity,
AvailableSecurityUpdatesComplianceStatus,
BaselineId,
CreatedDate,
Description,
GlobalFilters,
ModifiedDate,
Name,
OperatingSystem,
PatchGroups,
RejectedPatches,
RejectedPatchesAction,
Sources
FROM aws.ssm.patch_baselines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_patch_baselines">

Lists the patch baselines in your Amazon Web Services account.

```sql
SELECT
BaselineDescription,
BaselineId,
BaselineName,
DefaultBaseline,
OperatingSystem
FROM aws.ssm.patch_baselines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_patch_baseline"
    values={[
        { label: 'create_patch_baseline', value: 'create_patch_baseline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_patch_baseline">

Creates a patch baseline. For information about valid key-value pairs in PatchFilters for each supported operating system type, see PatchFilter.

```sql
INSERT INTO aws.ssm.patch_baselines (
OperatingSystem,
Name,
GlobalFilters,
ApprovalRules,
ApprovedPatches,
ApprovedPatchesComplianceLevel,
ApprovedPatchesEnableNonSecurity,
RejectedPatches,
RejectedPatchesAction,
Description,
Sources,
AvailableSecurityUpdatesComplianceStatus,
ClientToken,
Tags,
region
)
SELECT 
'{{ OperatingSystem }}',
'{{ Name }}',
'{{ GlobalFilters }}',
'{{ ApprovalRules }}',
'{{ ApprovedPatches }}',
'{{ ApprovedPatchesComplianceLevel }}',
{{ ApprovedPatchesEnableNonSecurity }},
'{{ RejectedPatches }}',
'{{ RejectedPatchesAction }}',
'{{ Description }}',
'{{ Sources }}',
'{{ AvailableSecurityUpdatesComplianceStatus }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
BaselineId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: patch_baselines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the patch_baselines resource.
    - name: OperatingSystem
      value: "{{ OperatingSystem }}"
      description: |
        Defines the operating system the patch baseline applies to. The default value is WINDOWS.
      valid_values: ['WINDOWS', 'AMAZON_LINUX', 'AMAZON_LINUX_2', 'AMAZON_LINUX_2022', 'UBUNTU', 'REDHAT_ENTERPRISE_LINUX', 'SUSE', 'CENTOS', 'ORACLE_LINUX', 'DEBIAN', 'MACOS', 'RASPBIAN', 'ROCKY_LINUX', 'ALMA_LINUX', 'AMAZON_LINUX_2023']
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the patch baseline.
    - name: GlobalFilters
      description: |
        A set of global filters used to include patches in the baseline. The GlobalFilters parameter can be configured only by using the CLI or an Amazon Web Services SDK. It can't be configured from the Patch Manager console, and its value isn't displayed in the console.
      value:
        PatchFilters:
          - Key: "{{ Key }}"
            Values: "{{ Values }}"
    - name: ApprovalRules
      description: |
        A set of rules used to include patches in the baseline.
      value:
        PatchRules:
          - PatchFilterGroup:
              PatchFilters:
                - Key: "{{ Key }}"
                  Values: "{{ Values }}"
            ComplianceLevel: "{{ ComplianceLevel }}"
            ApproveAfterDays: {{ ApproveAfterDays }}
            ApproveUntilDate: "{{ ApproveUntilDate }}"
            EnableNonSecurity: {{ EnableNonSecurity }}
    - name: ApprovedPatches
      value:
        - "{{ ApprovedPatches }}"
      description: |
        A list of explicitly approved patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see Package name formats for approved and rejected patch lists in the Amazon Web Services Systems Manager User Guide.
    - name: ApprovedPatchesComplianceLevel
      value: "{{ ApprovedPatchesComplianceLevel }}"
      description: |
        Defines the compliance level for approved patches. When an approved patch is reported as missing, this value describes the severity of the compliance violation. The default value is UNSPECIFIED.
      valid_values: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'INFORMATIONAL', 'UNSPECIFIED']
    - name: ApprovedPatchesEnableNonSecurity
      value: {{ ApprovedPatchesEnableNonSecurity }}
      description: |
        Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is false. Applies to Linux managed nodes only.
    - name: RejectedPatches
      value:
        - "{{ RejectedPatches }}"
      description: |
        A list of explicitly rejected patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see Package name formats for approved and rejected patch lists in the Amazon Web Services Systems Manager User Guide.
    - name: RejectedPatchesAction
      value: "{{ RejectedPatchesAction }}"
      description: |
        The action for Patch Manager to take on patches included in the RejectedPackages list. ALLOW_AS_DEPENDENCY Linux and macOS: A package in the rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as INSTALLED_OTHER. This is the default action if no option is specified. Windows Server: Windows Server doesn't support the concept of package dependencies. If a package in the rejected patches list and already installed on the node, its status is reported as INSTALLED_OTHER. Any package not already installed on the node is skipped. This is the default action if no option is specified. BLOCK All OSs: Packages in the rejected patches list, and packages that include them as dependencies, aren't installed by Patch Manager under any circumstances. State value assignment for patch compliance: If a package was installed before it was added to the rejected patches list, or is installed outside of Patch Manager afterward, it's considered noncompliant with the patch baseline and its status is reported as INSTALLED_REJECTED. If an update attempts to install a dependency package that is now rejected by the baseline, when previous versions of the package were not rejected, the package being updated is reported as MISSING for SCAN operations and as FAILED for INSTALL operations.
      valid_values: ['ALLOW_AS_DEPENDENCY', 'BLOCK']
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the patch baseline.
    - name: Sources
      description: |
        Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
      value:
        - Name: "{{ Name }}"
          Products: "{{ Products }}"
          Configuration: "{{ Configuration }}"
    - name: AvailableSecurityUpdatesComplianceStatus
      value: "{{ AvailableSecurityUpdatesComplianceStatus }}"
      description: |
        Indicates the status you want to assign to security patches that are available but not approved because they don't meet the installation criteria specified in the patch baseline. Example scenario: Security patches that you might want installed can be skipped if you have specified a long period to wait after a patch is released before installation. If an update to the patch is released during your specified waiting period, the waiting period for installing the patch starts over. If the waiting period is too long, multiple versions of the patch could be released but never installed. Supported for Windows Server managed nodes only.
      valid_values: ['COMPLIANT', 'NON_COMPLIANT']
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        User-provided idempotency token.
    - name: Tags
      description: |
        Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a patch baseline to identify the severity level of patches it specifies and the operating system family it applies to. In this case, you could specify the following key-value pairs: Key=PatchSeverity,Value=Critical Key=OS,Value=Windows To add tags to an existing patch baseline, use the AddTagsToResource operation.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_patch_baseline"
    values={[
        { label: 'update_patch_baseline', value: 'update_patch_baseline' }
    ]}
>
<TabItem value="update_patch_baseline">

Modifies an existing patch baseline. Fields not specified in the request are left unchanged. For information about valid key-value pairs in PatchFilters for each supported operating system type, see PatchFilter.

```sql
UPDATE aws.ssm.patch_baselines
SET 
BaselineId = '{{ BaselineId }}',
Name = '{{ Name }}',
GlobalFilters = '{{ GlobalFilters }}',
ApprovalRules = '{{ ApprovalRules }}',
ApprovedPatches = '{{ ApprovedPatches }}',
ApprovedPatchesComplianceLevel = '{{ ApprovedPatchesComplianceLevel }}',
ApprovedPatchesEnableNonSecurity = {{ ApprovedPatchesEnableNonSecurity }},
RejectedPatches = '{{ RejectedPatches }}',
RejectedPatchesAction = '{{ RejectedPatchesAction }}',
Description = '{{ Description }}',
Sources = '{{ Sources }}',
AvailableSecurityUpdatesComplianceStatus = '{{ AvailableSecurityUpdatesComplianceStatus }}',
Replace = {{ Replace }}
WHERE 
region = '{{ region }}' --required
AND BaselineId = '{{ BaselineId }}' --required
RETURNING
ApprovalRules,
ApprovedPatches,
ApprovedPatchesComplianceLevel,
ApprovedPatchesEnableNonSecurity,
AvailableSecurityUpdatesComplianceStatus,
BaselineId,
CreatedDate,
Description,
GlobalFilters,
ModifiedDate,
Name,
OperatingSystem,
RejectedPatches,
RejectedPatchesAction,
Sources;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_patch_baseline"
    values={[
        { label: 'delete_patch_baseline', value: 'delete_patch_baseline' }
    ]}
>
<TabItem value="delete_patch_baseline">

Deletes a patch baseline.

```sql
DELETE FROM aws.ssm.patch_baselines
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
