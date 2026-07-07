--- 
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
  - efs
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

Creates, updates, deletes, gets or lists an <code>access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_access_points"
    values={[
        { label: 'describe_access_points', value: 'describe_access_points' }
    ]}
>
<TabItem value="describe_access_points">

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
    <td>The unique Amazon Resource Name (ARN) associated with the access point. (pattern: &lt;code&gt;^arn:aws&#91;-a-z&#93;*:elasticfilesystem:&#91;0-9a-z-:&#93;+:access-point/fsap-&#91;0-9a-f&#93;&#123;8,40&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AccessPointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the access point, assigned by Amazon EFS. (pattern: &lt;code&gt;^(arn:aws&#91;-a-z&#93;*:elasticfilesystem:&#91;0-9a-z-:&#93;+:access-point/fsap-&#91;0-9a-f&#93;&#123;8,40&#125;|fsap-&#91;0-9a-f&#93;&#123;8,40&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>The opaque string specified in the request to ensure idempotent creation. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FileSystemId" /></td>
    <td><code>string</code></td>
    <td>The ID of the EFS file system that the access point applies to. (pattern: &lt;code&gt;^(arn:aws&#91;-a-z&#93;*:elasticfilesystem:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;8,40&#125;|fs-&#91;0-9a-f&#93;&#123;8,40&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LifeCycleState" /></td>
    <td><code>string</code></td>
    <td>Identifies the lifecycle phase of the access point. (creating, available, updating, deleting, deleted, error)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the access point. This is the value of the Name tag.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>Identifies the Amazon Web Services account that owns the access point resource. (pattern: &lt;code&gt;^(\d&#123;12&#125;)|(\d&#123;4&#125;-\d&#123;4&#125;-\d&#123;4&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PosixUser" /></td>
    <td><code>object</code></td>
    <td>The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="RootDirectory" /></td>
    <td><code>object</code></td>
    <td>Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's RootDirectory and its subdirectories.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the access point, presented as an array of Tag objects.</td>
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
    <td><a href="#describe_access_points"><CopyableCode code="describe_access_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-AccessPointId"><code>AccessPointId</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td>Returns the description of a specific Amazon EFS access point if the AccessPointId is provided. If you provide an EFS FileSystemId, it returns descriptions of all access points for that file system. You can provide either an AccessPointId or a FileSystemId in the request, but not both. This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action.</td>
</tr>
<tr>
    <td><a href="#create_access_point"><CopyableCode code="create_access_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td></td>
    <td>Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in the application's own directory and any subdirectories. A file system can have a maximum of 10,000 access points unless you request an increase. To learn more, see Mounting a file system using EFS access points. If multiple requests to create access points on the same file system are sent in quick succession, and the file system is near the limit of access points, you may experience a throttling response for these requests. This is to ensure that the file system does not exceed the stated access point limit. This operation requires permissions for the elasticfilesystem:CreateAccessPoint action. Access points can be tagged on creation. If tags are specified in the creation action, IAM performs additional authorization on the elasticfilesystem:TagResource action to verify if users have permissions to create tags. Therefore, you must grant explicit permissions to use the elasticfilesystem:TagResource action. For more information, see Granting permissions to tag resources during creation.</td>
</tr>
<tr>
    <td><a href="#delete_access_point"><CopyableCode code="delete_access_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_point_id"><code>access_point_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection. This operation requires permissions for the elasticfilesystem:DeleteAccessPoint action.</td>
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
<tr id="parameter-access_point_id">
    <td><CopyableCode code="access_point_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access point that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccessPointId">
    <td><CopyableCode code="AccessPointId" /></td>
    <td><code>string</code></td>
    <td>(Optional) Specifies an EFS access point to describe in the response; mutually exclusive with FileSystemId.</td>
</tr>
<tr id="parameter-FileSystemId">
    <td><CopyableCode code="FileSystemId" /></td>
    <td><code>string</code></td>
    <td>(Optional) If you provide a FileSystemId, EFS returns all access points for that file system; mutually exclusive with AccessPointId.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>(Optional) When retrieving all access points for a file system, you can optionally specify the MaxItems parameter to limit the number of objects returned in a response. The default value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>NextToken is present if the response is paginated. You can use NextMarker in the subsequent request to fetch the next page of access point descriptions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_access_points"
    values={[
        { label: 'describe_access_points', value: 'describe_access_points' }
    ]}
>
<TabItem value="describe_access_points">

Returns the description of a specific Amazon EFS access point if the AccessPointId is provided. If you provide an EFS FileSystemId, it returns descriptions of all access points for that file system. You can provide either an AccessPointId or a FileSystemId in the request, but not both. This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action.

```sql
SELECT
AccessPointArn,
AccessPointId,
ClientToken,
FileSystemId,
LifeCycleState,
Name,
OwnerId,
PosixUser,
RootDirectory,
Tags
FROM aws.efs.access_points
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND AccessPointId = '{{ AccessPointId }}'
AND FileSystemId = '{{ FileSystemId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_point"
    values={[
        { label: 'create_access_point', value: 'create_access_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_point">

Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in the application's own directory and any subdirectories. A file system can have a maximum of 10,000 access points unless you request an increase. To learn more, see Mounting a file system using EFS access points. If multiple requests to create access points on the same file system are sent in quick succession, and the file system is near the limit of access points, you may experience a throttling response for these requests. This is to ensure that the file system does not exceed the stated access point limit. This operation requires permissions for the elasticfilesystem:CreateAccessPoint action. Access points can be tagged on creation. If tags are specified in the creation action, IAM performs additional authorization on the elasticfilesystem:TagResource action to verify if users have permissions to create tags. Therefore, you must grant explicit permissions to use the elasticfilesystem:TagResource action. For more information, see Granting permissions to tag resources during creation.

```sql
INSERT INTO aws.efs.access_points (
ClientToken,
Tags,
FileSystemId,
PosixUser,
RootDirectory,
region
)
SELECT 
'{{ ClientToken }}' /* required */,
'{{ Tags }}',
'{{ FileSystemId }}' /* required */,
'{{ PosixUser }}',
'{{ RootDirectory }}',
'{{ region }}'
RETURNING
AccessPointArn,
AccessPointId,
ClientToken,
FileSystemId,
LifeCycleState,
Name,
OwnerId,
PosixUser,
RootDirectory,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_points
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_points resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: FileSystemId
      value: "{{ FileSystemId }}"
    - name: PosixUser
      description: |
        The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
      value:
        Uid: {{ Uid }}
        Gid: {{ Gid }}
        SecondaryGids:
          - {{ SecondaryGids }}
    - name: RootDirectory
      description: |
        Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's RootDirectory and its subdirectories.
      value:
        Path: "{{ Path }}"
        CreationInfo:
          OwnerUid: {{ OwnerUid }}
          OwnerGid: {{ OwnerGid }}
          Permissions: "{{ Permissions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_point"
    values={[
        { label: 'delete_access_point', value: 'delete_access_point' }
    ]}
>
<TabItem value="delete_access_point">

Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection. This operation requires permissions for the elasticfilesystem:DeleteAccessPoint action.

```sql
DELETE FROM aws.efs.access_points
WHERE access_point_id = '{{ access_point_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
