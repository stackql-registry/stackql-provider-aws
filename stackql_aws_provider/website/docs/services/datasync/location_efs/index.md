--- 
title: location_efs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_efs
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

Creates, updates, deletes, gets or lists a <code>location_efs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_efs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_efs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_efs"
    values={[
        { label: 'describe_location_efs', value: 'describe_location_efs' }
    ]}
>
<TabItem value="describe_location_efs">

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
    <td><CopyableCode code="AccessPointArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the access point that DataSync uses to access the Amazon EFS file system. For more information, see Accessing restricted file systems. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):elasticfilesystem:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:access-point/fsap-&#91;0-9a-f&#93;&#123;8,40&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Ec2Config" /></td>
    <td><code>object</code></td>
    <td>The subnet and security groups that DataSync uses to connect to one of your Amazon EFS file system's mount targets.</td>
</tr>
<tr>
    <td><CopyableCode code="FileSystemAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management (IAM) role that allows DataSync to access your Amazon EFS file system. For more information, see Creating a DataSync IAM role for file system access. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):iam::&#91;0-9&#93;&#123;12&#125;:role/.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InTransitEncryption" /></td>
    <td><code>string</code></td>
    <td>Indicates whether DataSync uses Transport Layer Security (TLS) encryption when transferring data to or from the Amazon EFS file system. (NONE, TLS1_2)</td>
</tr>
<tr>
    <td><CopyableCode code="LocationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon EFS file system location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LocationUri" /></td>
    <td><code>string</code></td>
    <td>The URL of the Amazon EFS file system location. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_location_efs"><CopyableCode code="describe_location_efs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for an Amazon EFS file system is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_efs"><CopyableCode code="create_location_efs" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EfsFilesystemArn"><code>EfsFilesystemArn</code></a>, <a href="#parameter-Ec2Config"><code>Ec2Config</code></a></td>
    <td></td>
    <td>Creates a transfer location for an Amazon EFS file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses Amazon EFS file systems.</td>
</tr>
<tr>
    <td><a href="#update_location_efs"><CopyableCode code="update_location_efs" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Amazon EFS transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with Amazon EFS.</td>
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
    defaultValue="describe_location_efs"
    values={[
        { label: 'describe_location_efs', value: 'describe_location_efs' }
    ]}
>
<TabItem value="describe_location_efs">

Provides details about how an DataSync transfer location for an Amazon EFS file system is configured.

```sql
SELECT
AccessPointArn,
CreationTime,
Ec2Config,
FileSystemAccessRoleArn,
InTransitEncryption,
LocationArn,
LocationUri
FROM aws.datasync.location_efs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_efs"
    values={[
        { label: 'create_location_efs', value: 'create_location_efs' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_efs">

Creates a transfer location for an Amazon EFS file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses Amazon EFS file systems.

```sql
INSERT INTO aws.datasync.location_efs (
Subdirectory,
EfsFilesystemArn,
Ec2Config,
Tags,
AccessPointArn,
FileSystemAccessRoleArn,
InTransitEncryption,
region
)
SELECT 
'{{ Subdirectory }}',
'{{ EfsFilesystemArn }}' /* required */,
'{{ Ec2Config }}' /* required */,
'{{ Tags }}',
'{{ AccessPointArn }}',
'{{ FileSystemAccessRoleArn }}',
'{{ InTransitEncryption }}',
'{{ region }}'
RETURNING
LocationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_efs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_efs resource.
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies a mount path for your Amazon EFS file system. This is where DataSync reads or writes data on your file system (depending on if this is a source or destination location). By default, DataSync uses the root directory (or access point if you provide one by using AccessPointArn). You can also include subdirectories using forward slashes (for example, /path/to/folder).
    - name: EfsFilesystemArn
      value: "{{ EfsFilesystemArn }}"
      description: |
        Specifies the ARN for your Amazon EFS file system.
    - name: Ec2Config
      description: |
        Specifies the subnet and security groups DataSync uses to connect to one of your Amazon EFS file system's mount targets.
      value:
        SubnetArn: "{{ SubnetArn }}"
        SecurityGroupArns:
          - "{{ SecurityGroupArns }}"
    - name: Tags
      description: |
        Specifies the key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AccessPointArn
      value: "{{ AccessPointArn }}"
      description: |
        Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to mount your Amazon EFS file system. For more information, see Accessing restricted file systems.
    - name: FileSystemAccessRoleArn
      value: "{{ FileSystemAccessRoleArn }}"
      description: |
        Specifies an Identity and Access Management (IAM) role that allows DataSync to access your Amazon EFS file system. For information on creating this role, see Creating a DataSync IAM role for file system access.
    - name: InTransitEncryption
      value: "{{ InTransitEncryption }}"
      description: |
        Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2 encryption when it transfers data to or from your Amazon EFS file system. If you specify an access point using AccessPointArn or an IAM role using FileSystemAccessRoleArn, you must set this parameter to TLS1_2.
      valid_values: ['NONE', 'TLS1_2']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_efs"
    values={[
        { label: 'update_location_efs', value: 'update_location_efs' }
    ]}
>
<TabItem value="update_location_efs">

Modifies the following configuration parameters of the Amazon EFS transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with Amazon EFS.

```sql
UPDATE aws.datasync.location_efs
SET 
LocationArn = '{{ LocationArn }}',
Subdirectory = '{{ Subdirectory }}',
AccessPointArn = '{{ AccessPointArn }}',
FileSystemAccessRoleArn = '{{ FileSystemAccessRoleArn }}',
InTransitEncryption = '{{ InTransitEncryption }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
