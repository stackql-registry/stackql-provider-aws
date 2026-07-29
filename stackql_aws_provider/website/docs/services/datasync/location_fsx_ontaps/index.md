--- 
title: location_fsx_ontaps
hide_title: false
hide_table_of_contents: false
keywords:
  - location_fsx_ontaps
  - datasync
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

Creates, updates, deletes, gets or lists a <code>location_fsx_ontaps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_fsx_ontaps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_fsx_ontaps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_fsx_ontap"
    values={[
        { label: 'describe_location_fsx_ontap', value: 'describe_location_fsx_ontap' }
    ]}
>
<TabItem value="describe_location_fsx_ontap">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fsx_filesystem_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the FSx for ONTAP file system. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):fsx:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:file-system/fs-&#91;0-9a-f&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the FSx for ONTAP file system location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_uri" /></td>
    <td><code>string</code></td>
    <td>The uniform resource identifier (URI) of the FSx for ONTAP file system location. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>object</code></td>
    <td>Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_arns" /></td>
    <td><code>array</code></td>
    <td>The security groups that DataSync uses to access your FSx for ONTAP file system.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_virtual_machine_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the storage virtual machine (SVM) on your FSx for ONTAP file system where you're copying data to or from. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):fsx:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:storage-virtual-machine/fs-&#91;0-9a-f&#93;+/svm-&#91;0-9a-f&#93;&#123;17,&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_location_fsx_ontap"><CopyableCode code="describe_location_fsx_ontap" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for an Amazon FSx for NetApp ONTAP file system is configured. If your location uses SMB, the DescribeLocationFsxOntap operation doesn't actually return a Password.</td>
</tr>
<tr>
    <td><a href="#create_location_fsx_ontap"><CopyableCode code="create_location_fsx_ontap" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecurityGroupArns"><code>SecurityGroupArns</code></a>, <a href="#parameter-StorageVirtualMachineArn"><code>StorageVirtualMachineArn</code></a></td>
    <td></td>
    <td>Creates a transfer location for an Amazon FSx for NetApp ONTAP file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for ONTAP file systems.</td>
</tr>
<tr>
    <td><a href="#update_location_fsx_ontap"><CopyableCode code="update_location_fsx_ontap" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Amazon FSx for NetApp ONTAP transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with FSx for ONTAP.</td>
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
    defaultValue="describe_location_fsx_ontap"
    values={[
        { label: 'describe_location_fsx_ontap', value: 'describe_location_fsx_ontap' }
    ]}
>
<TabItem value="describe_location_fsx_ontap">

Provides details about how an DataSync transfer location for an Amazon FSx for NetApp ONTAP file system is configured. If your location uses SMB, the DescribeLocationFsxOntap operation doesn't actually return a Password.

```sql
SELECT
creation_time,
fsx_filesystem_arn,
location_arn,
location_uri,
protocol,
security_group_arns,
storage_virtual_machine_arn
FROM aws.datasync.location_fsx_ontaps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_fsx_ontap"
    values={[
        { label: 'create_location_fsx_ontap', value: 'create_location_fsx_ontap' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_fsx_ontap">

Creates a transfer location for an Amazon FSx for NetApp ONTAP file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for ONTAP file systems.

```sql
INSERT INTO aws.datasync.location_fsx_ontaps (
Protocol,
SecurityGroupArns,
StorageVirtualMachineArn,
Subdirectory,
Tags,
region
)
SELECT 
'{{ Protocol }}',
'{{ SecurityGroupArns }}' /* required */,
'{{ StorageVirtualMachineArn }}' /* required */,
'{{ Subdirectory }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
location_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_fsx_ontaps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_fsx_ontaps resource.
    - name: Protocol
      description: |
        Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
      value:
        NFS:
          MountOptions:
            Version: "{{ Version }}"
        SMB:
          Domain: "{{ Domain }}"
          MountOptions:
            Version: "{{ Version }}"
          Password: "{{ Password }}"
          User: "{{ User }}"
          ManagedSecretConfig:
            SecretArn: "{{ SecretArn }}"
          CmkSecretConfig:
            SecretArn: "{{ SecretArn }}"
            KmsKeyArn: "{{ KmsKeyArn }}"
          CustomSecretConfig:
            SecretArn: "{{ SecretArn }}"
            SecretAccessRoleArn: "{{ SecretAccessRoleArn }}"
    - name: SecurityGroupArns
      value:
        - "{{ SecurityGroupArns }}"
      description: |
        Specifies the Amazon EC2 security groups that provide access to your file system's preferred subnet. The security groups must allow outbound traffic on the following ports (depending on the protocol you use): Network File System (NFS): TCP ports 111, 635, and 2049 Server Message Block (SMB): TCP port 445 Your file system's security groups must also allow inbound traffic on the same ports.
    - name: StorageVirtualMachineArn
      value: "{{ StorageVirtualMachineArn }}"
      description: |
        Specifies the ARN of the storage virtual machine (SVM) in your file system where you want to copy data to or from.
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies a path to the file share in the SVM where you want to transfer data to or from. You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares). For example, your mount path might be /vol1, /vol1/tree1, or /share1. Don't specify a junction path in the SVM's root volume. For more information, see Managing FSx for ONTAP storage virtual machines in the Amazon FSx for NetApp ONTAP User Guide.
    - name: Tags
      description: |
        Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_fsx_ontap"
    values={[
        { label: 'update_location_fsx_ontap', value: 'update_location_fsx_ontap' }
    ]}
>
<TabItem value="update_location_fsx_ontap">

Modifies the following configuration parameters of the Amazon FSx for NetApp ONTAP transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with FSx for ONTAP.

```sql
UPDATE aws.datasync.location_fsx_ontaps
SET 
LocationArn = '{{ LocationArn }}',
Protocol = '{{ Protocol }}',
Subdirectory = '{{ Subdirectory }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
