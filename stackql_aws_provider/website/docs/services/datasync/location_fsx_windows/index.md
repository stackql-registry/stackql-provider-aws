--- 
title: location_fsx_windows
hide_title: false
hide_table_of_contents: false
keywords:
  - location_fsx_windows
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

Creates, updates, deletes, gets or lists a <code>location_fsx_windows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_fsx_windows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_fsx_windows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_fsx_windows"
    values={[
        { label: 'describe_location_fsx_windows', value: 'describe_location_fsx_windows' }
    ]}
>
<TabItem value="describe_location_fsx_windows">

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
    <td><CopyableCode code="cmk_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as a Password that DataSync uses to access a specific storage location, with a customer-managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the FSx for Windows File Server location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a customer-managed secret, such as a Password that DataSync uses to access a specific storage location, with a customer-managed Identity and Access Management (IAM) role that provides access to the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the Microsoft Active Directory domain that the FSx for Windows File Server file system belongs to. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;((\.|-+)?&#91;A-Za-z0-9&#93;)&#123;0,252&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the FSx for Windows File Server location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_uri" /></td>
    <td><code>string</code></td>
    <td>The uniform resource identifier (URI) of the FSx for Windows File Server location. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as a Password that DataSync uses to access a specific storage location. DataSync uses the default Amazon Web Services-managed KMS key to encrypt this secret in Secrets Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_arns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the Amazon EC2 security groups that provide access to your file system's preferred subnet. For information about configuring security groups for file system access, see the Amazon FSx for Windows File Server User Guide .</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>The user with the permissions to mount and access the FSx for Windows File Server file system. (pattern: &lt;code&gt;^&#91;^\x22\x5B\x5D/\\:;|=,+*?\x3C\x3E&#93;&#123;1,104&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_location_fsx_windows"><CopyableCode code="describe_location_fsx_windows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for an Amazon FSx for Windows File Server file system is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_fsx_windows"><CopyableCode code="create_location_fsx_windows" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FsxFilesystemArn"><code>FsxFilesystemArn</code></a>, <a href="#parameter-SecurityGroupArns"><code>SecurityGroupArns</code></a></td>
    <td></td>
    <td>Creates a transfer location for an Amazon FSx for Windows File Server file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for Windows File Server file systems.</td>
</tr>
<tr>
    <td><a href="#update_location_fsx_windows"><CopyableCode code="update_location_fsx_windows" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Amazon FSx for Windows File Server transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with FSx for Windows File Server.</td>
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
    defaultValue="describe_location_fsx_windows"
    values={[
        { label: 'describe_location_fsx_windows', value: 'describe_location_fsx_windows' }
    ]}
>
<TabItem value="describe_location_fsx_windows">

Provides details about how an DataSync transfer location for an Amazon FSx for Windows File Server file system is configured.

```sql
SELECT
cmk_secret_config,
creation_time,
custom_secret_config,
domain,
location_arn,
location_uri,
managed_secret_config,
security_group_arns,
user
FROM aws.datasync.location_fsx_windows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_fsx_windows"
    values={[
        { label: 'create_location_fsx_windows', value: 'create_location_fsx_windows' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_fsx_windows">

Creates a transfer location for an Amazon FSx for Windows File Server file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for Windows File Server file systems.

```sql
INSERT INTO aws.datasync.location_fsx_windows (
Subdirectory,
FsxFilesystemArn,
SecurityGroupArns,
Tags,
User,
Domain,
Password,
CmkSecretConfig,
CustomSecretConfig,
region
)
SELECT 
'{{ Subdirectory }}',
'{{ FsxFilesystemArn }}' /* required */,
'{{ SecurityGroupArns }}' /* required */,
'{{ Tags }}',
'{{ User }}',
'{{ Domain }}',
'{{ Password }}',
'{{ CmkSecretConfig }}',
'{{ CustomSecretConfig }}',
'{{ region }}'
RETURNING
location_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_fsx_windows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_fsx_windows resource.
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies a mount path for your file system using forward slashes. This is where DataSync reads or writes data (depending on if this is a source or destination location).
    - name: FsxFilesystemArn
      value: "{{ FsxFilesystemArn }}"
      description: |
        Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file system.
    - name: SecurityGroupArns
      value:
        - "{{ SecurityGroupArns }}"
      description: |
        Specifies the ARNs of the Amazon EC2 security groups that provide access to your file system's preferred subnet. The security groups that you specify must be able to communicate with your file system's security groups. For information about configuring security groups for file system access, see the Amazon FSx for Windows File Server User Guide . If you choose a security group that doesn't allow connections from within itself, do one of the following: Configure the security group to allow it to communicate within itself. Choose a different security group that can communicate with the mount target's security group.
    - name: Tags
      description: |
        Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: User
      value: "{{ User }}"
      description: |
        Specifies the user with the permissions to mount and access the files, folders, and file metadata in your FSx for Windows File Server file system. For information about choosing a user with the right level of access for your transfer, see required permissions for FSx for Windows File Server locations.
    - name: Domain
      value: "{{ Domain }}"
      description: |
        Specifies the name of the Windows domain that the FSx for Windows File Server file system belongs to. If you have multiple Active Directory domains in your environment, configuring this parameter makes sure that DataSync connects to the right file system.
    - name: Password
      value: "{{ Password }}"
      description: |
        Specifies the password of the user with the permissions to mount and access the files, folders, and file metadata in your FSx for Windows File Server file system.
    - name: CmkSecretConfig
      description: |
        Specifies configuration information for a DataSync-managed secret, which includes the password that DataSync uses to access a specific FSx Windows storage location, with a customer-managed KMS key. When you include this parameter as part of a CreateLocationFsxWindows request, you provide only the KMS key ARN. DataSync uses this KMS key together with the Password you specify for to create a DataSync-managed secret to store the location access credentials. Make sure that DataSync has permission to access the KMS key that you specify. For more information, see Using a service-managed secret encrypted with a custom KMS key. You can use either CmkSecretConfig (with Password) or CustomSecretConfig (without Password) to provide credentials for a CreateLocationFsxWindows request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: CustomSecretConfig
      description: |
        Specifies configuration information for a customer-managed Secrets Manager secret where the password for an FSx for Windows File Server storage location is stored in plain text, in Secrets Manager. This configuration includes the secret ARN, and the ARN for an IAM role that provides access to the secret. For more information, see Using a secret that you manage. You can use either CmkSecretConfig (with Password) or CustomSecretConfig (without Password) to provide credentials for a CreateLocationFsxWindows request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        SecretAccessRoleArn: "{{ SecretAccessRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_fsx_windows"
    values={[
        { label: 'update_location_fsx_windows', value: 'update_location_fsx_windows' }
    ]}
>
<TabItem value="update_location_fsx_windows">

Modifies the following configuration parameters of the Amazon FSx for Windows File Server transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with FSx for Windows File Server.

```sql
UPDATE aws.datasync.location_fsx_windows
SET 
LocationArn = '{{ LocationArn }}',
Subdirectory = '{{ Subdirectory }}',
Domain = '{{ Domain }}',
User = '{{ User }}',
Password = '{{ Password }}',
CmkSecretConfig = '{{ CmkSecretConfig }}',
CustomSecretConfig = '{{ CustomSecretConfig }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
