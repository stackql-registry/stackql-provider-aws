--- 
title: location_fsx_open_zfs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_fsx_open_zfs
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

Creates, updates, deletes, gets or lists a <code>location_fsx_open_zfs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_fsx_open_zfs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_fsx_open_zfs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_fsx_open_zfs"
    values={[
        { label: 'describe_location_fsx_open_zfs', value: 'describe_location_fsx_open_zfs' }
    ]}
>
<TabItem value="describe_location_fsx_open_zfs">

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
    <td>The time that the FSx for OpenZFS location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the FSx for OpenZFS location that was described. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_uri" /></td>
    <td><code>string</code></td>
    <td>The uniform resource identifier (URI) of the FSx for OpenZFS location that was described. Example: fsxz:​//us-west-2.fs-1234567890abcdef02/fsx/folderA/folder (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>object</code></td>
    <td>Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_arns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the security groups that are configured for the FSx for OpenZFS file system.</td>
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
    <td><a href="#describe_location_fsx_open_zfs"><CopyableCode code="describe_location_fsx_open_zfs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for an Amazon FSx for OpenZFS file system is configured. Response elements related to SMB aren't supported with the DescribeLocationFsxOpenZfs operation.</td>
</tr>
<tr>
    <td><a href="#create_location_fsx_open_zfs"><CopyableCode code="create_location_fsx_open_zfs" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FsxFilesystemArn"><code>FsxFilesystemArn</code></a>, <a href="#parameter-SecurityGroupArns"><code>SecurityGroupArns</code></a></td>
    <td></td>
    <td>Creates a transfer location for an Amazon FSx for OpenZFS file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for OpenZFS file systems. Request parameters related to SMB aren't supported with the CreateLocationFsxOpenZfs operation.</td>
</tr>
<tr>
    <td><a href="#update_location_fsx_open_zfs"><CopyableCode code="update_location_fsx_open_zfs" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Amazon FSx for OpenZFS transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with FSx for OpenZFS. Request parameters related to SMB aren't supported with the UpdateLocationFsxOpenZfs operation.</td>
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
    defaultValue="describe_location_fsx_open_zfs"
    values={[
        { label: 'describe_location_fsx_open_zfs', value: 'describe_location_fsx_open_zfs' }
    ]}
>
<TabItem value="describe_location_fsx_open_zfs">

Provides details about how an DataSync transfer location for an Amazon FSx for OpenZFS file system is configured. Response elements related to SMB aren't supported with the DescribeLocationFsxOpenZfs operation.

```sql
SELECT
creation_time,
location_arn,
location_uri,
protocol,
security_group_arns
FROM aws.datasync.location_fsx_open_zfs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_fsx_open_zfs"
    values={[
        { label: 'create_location_fsx_open_zfs', value: 'create_location_fsx_open_zfs' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_fsx_open_zfs">

Creates a transfer location for an Amazon FSx for OpenZFS file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for OpenZFS file systems. Request parameters related to SMB aren't supported with the CreateLocationFsxOpenZfs operation.

```sql
INSERT INTO aws.datasync.location_fsx_open_zfs (
FsxFilesystemArn,
Protocol,
SecurityGroupArns,
Subdirectory,
Tags,
region
)
SELECT 
'{{ FsxFilesystemArn }}' /* required */,
'{{ Protocol }}',
'{{ SecurityGroupArns }}' /* required */,
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
- name: location_fsx_open_zfs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_fsx_open_zfs resource.
    - name: FsxFilesystemArn
      value: "{{ FsxFilesystemArn }}"
      description: |
        The Amazon Resource Name (ARN) of the FSx for OpenZFS file system.
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
        The ARNs of the security groups that are used to configure the FSx for OpenZFS file system.
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        A subdirectory in the location's path that must begin with /fsx. DataSync uses this subdirectory to read or write data (depending on whether the file system is a source or destination location).
    - name: Tags
      description: |
        The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_fsx_open_zfs"
    values={[
        { label: 'update_location_fsx_open_zfs', value: 'update_location_fsx_open_zfs' }
    ]}
>
<TabItem value="update_location_fsx_open_zfs">

Modifies the following configuration parameters of the Amazon FSx for OpenZFS transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with FSx for OpenZFS. Request parameters related to SMB aren't supported with the UpdateLocationFsxOpenZfs operation.

```sql
UPDATE aws.datasync.location_fsx_open_zfs
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
