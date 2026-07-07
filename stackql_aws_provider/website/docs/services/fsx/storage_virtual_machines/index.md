--- 
title: storage_virtual_machines
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_virtual_machines
  - fsx
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

Creates, updates, deletes, gets or lists a <code>storage_virtual_machines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_virtual_machines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.storage_virtual_machines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_storage_virtual_machines"
    values={[
        { label: 'describe_storage_virtual_machines', value: 'describe_storage_virtual_machines' }
    ]}
>
<TabItem value="describe_storage_virtual_machines">

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
    <td><CopyableCode code="ActiveDirectoryConfiguration" /></td>
    <td><code>object</code></td>
    <td>Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoints" /></td>
    <td><code>object</code></td>
    <td>The endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the Iscsi, Management, Nfs, and Smb endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="FileSystemId" /></td>
    <td><code>string</code></td>
    <td>The globally unique ID of the file system, assigned by Amazon FSx. (pattern: &lt;code&gt;^(fs-&#91;0-9a-f&#93;&#123;8,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Lifecycle" /></td>
    <td><code>string</code></td>
    <td>Describes the SVM's lifecycle status. CREATED - The SVM is fully available for use. CREATING - Amazon FSx is creating the new SVM. DELETING - Amazon FSx is deleting an existing SVM. FAILED - Amazon FSx was unable to create the SVM. MISCONFIGURED - The SVM is in a failed but recoverable state. PENDING - Amazon FSx has not started creating the SVM. (CREATED, CREATING, DELETING, FAILED, MISCONFIGURED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="LifecycleTransitionReason" /></td>
    <td><code>object</code></td>
    <td>Describes why a resource lifecycle state changed.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the SVM, if provisioned. (pattern: &lt;code&gt;^&#91;^\u0000\u0085\u2028\u2029\r\n&#93;&#123;1,47&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:(?=&#91;^:&#93;+:fsx:&#91;^:&#93;+:\d&#123;12&#125;:)((|(?=&#91;a-z0-9-.&#93;&#123;1,63&#125;)(?!\d&#123;1,3&#125;(\.\d&#123;1,3&#125;)&#123;3&#125;)(?!&#91;^:&#93;*-&#123;2&#125;)(?!&#91;^:&#93;*-\.)(?!&#91;^:&#93;*\.-)&#91;a-z0-9&#93;.*(?&lt;!-)):)&#123;4&#125;(?!/).&#123;0,1024&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RootVolumeSecurityStyle" /></td>
    <td><code>string</code></td>
    <td>The security style of the root volume of the SVM. (UNIX, NTFS, MIXED)</td>
</tr>
<tr>
    <td><CopyableCode code="StorageVirtualMachineId" /></td>
    <td><code>string</code></td>
    <td>The SVM's system generated unique ID. (pattern: &lt;code&gt;^(svm-&#91;0-9a-f&#93;&#123;17,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Subtype" /></td>
    <td><code>string</code></td>
    <td>Describes the SVM's subtype. (DEFAULT, DP_DESTINATION, SYNC_DESTINATION, SYNC_SOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of Tag values, with a maximum of 50 elements.</td>
</tr>
<tr>
    <td><CopyableCode code="UUID" /></td>
    <td><code>string</code></td>
    <td>The SVM's UUID (universally unique identifier). (pattern: &lt;code&gt;^&#91;^\u0000\u0085\u2028\u2029\r\n&#93;&#123;1,36&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_storage_virtual_machines"><CopyableCode code="describe_storage_virtual_machines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).</td>
</tr>
<tr>
    <td><a href="#create_storage_virtual_machine"><CopyableCode code="create_storage_virtual_machine" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td></td>
    <td>Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.</td>
</tr>
<tr>
    <td><a href="#update_storage_virtual_machine"><CopyableCode code="update_storage_virtual_machine" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StorageVirtualMachineId"><code>StorageVirtualMachineId</code></a></td>
    <td></td>
    <td>Updates an FSx for ONTAP storage virtual machine (SVM).</td>
</tr>
<tr>
    <td><a href="#delete_storage_virtual_machine"><CopyableCode code="delete_storage_virtual_machine" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.</td>
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
    defaultValue="describe_storage_virtual_machines"
    values={[
        { label: 'describe_storage_virtual_machines', value: 'describe_storage_virtual_machines' }
    ]}
>
<TabItem value="describe_storage_virtual_machines">

Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).

```sql
SELECT
ActiveDirectoryConfiguration,
CreationTime,
Endpoints,
FileSystemId,
Lifecycle,
LifecycleTransitionReason,
Name,
ResourceARN,
RootVolumeSecurityStyle,
StorageVirtualMachineId,
Subtype,
Tags,
UUID
FROM aws.fsx.storage_virtual_machines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_storage_virtual_machine"
    values={[
        { label: 'create_storage_virtual_machine', value: 'create_storage_virtual_machine' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_storage_virtual_machine">

Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.

```sql
INSERT INTO aws.fsx.storage_virtual_machines (
ActiveDirectoryConfiguration,
ClientRequestToken,
FileSystemId,
Name,
SvmAdminPassword,
Tags,
RootVolumeSecurityStyle,
region
)
SELECT 
'{{ ActiveDirectoryConfiguration }}',
'{{ ClientRequestToken }}',
'{{ FileSystemId }}' /* required */,
'{{ Name }}',
'{{ SvmAdminPassword }}',
'{{ Tags }}',
'{{ RootVolumeSecurityStyle }}',
'{{ region }}'
RETURNING
StorageVirtualMachine
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: storage_virtual_machines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the storage_virtual_machines resource.
    - name: ActiveDirectoryConfiguration
      description: |
        Describes the self-managed Microsoft Active Directory to which you want to join the SVM. Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS clients accessing the file system.
      value:
        NetBiosName: "{{ NetBiosName }}"
        SelfManagedActiveDirectoryConfiguration:
          DomainName: "{{ DomainName }}"
          OrganizationalUnitDistinguishedName: "{{ OrganizationalUnitDistinguishedName }}"
          FileSystemAdministratorsGroup: "{{ FileSystemAdministratorsGroup }}"
          UserName: "{{ UserName }}"
          Password: "{{ Password }}"
          DnsIps:
            - "{{ DnsIps }}"
          DomainJoinServiceAccountSecret: "{{ DomainJoinServiceAccountSecret }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: FileSystemId
      value: "{{ FileSystemId }}"
      description: |
        The globally unique ID of the file system, assigned by Amazon FSx.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the SVM.
    - name: SvmAdminPassword
      value: "{{ SvmAdminPassword }}"
      description: |
        The password to use when managing the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's fsxadmin user to manage the SVM.
    - name: Tags
      description: |
        A list of Tag values, with a maximum of 50 elements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: RootVolumeSecurityStyle
      value: "{{ RootVolumeSecurityStyle }}"
      description: |
        The security style of the root volume of the SVM. Specify one of the following values: UNIX if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account. NTFS if the file system is managed by a Microsoft Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Microsoft Windows user as the service account. MIXED This is an advanced setting. For more information, see Volume security style in the Amazon FSx for NetApp ONTAP User Guide.
      valid_values: ['UNIX', 'NTFS', 'MIXED']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_storage_virtual_machine"
    values={[
        { label: 'update_storage_virtual_machine', value: 'update_storage_virtual_machine' }
    ]}
>
<TabItem value="update_storage_virtual_machine">

Updates an FSx for ONTAP storage virtual machine (SVM).

```sql
UPDATE aws.fsx.storage_virtual_machines
SET 
ActiveDirectoryConfiguration = '{{ ActiveDirectoryConfiguration }}',
ClientRequestToken = '{{ ClientRequestToken }}',
StorageVirtualMachineId = '{{ StorageVirtualMachineId }}',
SvmAdminPassword = '{{ SvmAdminPassword }}'
WHERE 
region = '{{ region }}' --required
AND StorageVirtualMachineId = '{{ StorageVirtualMachineId }}' --required
RETURNING
StorageVirtualMachine;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_storage_virtual_machine"
    values={[
        { label: 'delete_storage_virtual_machine', value: 'delete_storage_virtual_machine' }
    ]}
>
<TabItem value="delete_storage_virtual_machine">

Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.

```sql
DELETE FROM aws.fsx.storage_virtual_machines
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
