--- 
title: mount_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - mount_targets
  - s3files
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

Creates, updates, deletes, gets or lists a <code>mount_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mount_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3files.mount_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mount_target"
    values={[
        { label: 'get_mount_target', value: 'get_mount_target' },
        { label: 'list_mount_targets', value: 'list_mount_targets' }
    ]}
>
<TabItem value="get_mount_target">

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
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID where the mount target is located.</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;|fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_4_address" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address of the mount target. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_address" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address of the mount target.</td>
</tr>
<tr>
    <td><CopyableCode code="mount_target_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the mount target. (pattern: &lt;code&gt;fsmt-&#91;0-9a-f&#93;&#123;17,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface associated with the mount target.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the mount target owner. (pattern: &lt;code&gt;(\d&#123;12&#125;)|(\d&#123;4&#125;-&#123;4&#125;-\d&#123;4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>array</code></td>
    <td>The security groups associated with the mount target.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the mount target. (available, creating, deleting, deleted, error, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the mount target status.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet where the mount target is located. (pattern: &lt;code&gt;subnet-&#91;0-9a-f&#93;&#123;8,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC where the mount target is located.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mount_targets">

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
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID where the mount target is located.</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the S3 File System. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;|fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_4_address" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address of the mount target. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_address" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address of the mount target.</td>
</tr>
<tr>
    <td><CopyableCode code="mount_target_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the mount target. (pattern: &lt;code&gt;fsmt-&#91;0-9a-f&#93;&#123;17,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface associated with the mount target.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the mount target owner. (pattern: &lt;code&gt;(\d&#123;12&#125;)|(\d&#123;4&#125;-&#123;4&#125;-\d&#123;4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the mount target. (available, creating, deleting, deleted, error, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the mount target status.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet where the mount target is located. (pattern: &lt;code&gt;subnet-&#91;0-9a-f&#93;&#123;8,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC where the mount target is located.</td>
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
    <td><a href="#get_mount_target"><CopyableCode code="get_mount_target" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mount_target_id"><code>mount_target_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed resource information for the specified mount target including network configuration.</td>
</tr>
<tr>
    <td><a href="#list_mount_targets"><CopyableCode code="list_mount_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-fileSystemId"><code>fileSystemId</code></a>, <a href="#parameter-accessPointId"><code>accessPointId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns resource information for all mount targets with optional filtering by file system, access point, and VPC.</td>
</tr>
<tr>
    <td><a href="#create_mount_target"><CopyableCode code="create_mount_target" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-fileSystemId"><code>fileSystemId</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a></td>
    <td></td>
    <td>Creates a mount target resource as an endpoint for mounting the S3 File System from compute resources in a specific Availability Zone and VPC. Mount targets provide network access to the file system.</td>
</tr>
<tr>
    <td><a href="#update_mount_target"><CopyableCode code="update_mount_target" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mount_target_id"><code>mount_target_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-securityGroups"><code>securityGroups</code></a></td>
    <td></td>
    <td>Updates the mount target resource, specifically security group configurations.</td>
</tr>
<tr>
    <td><a href="#delete_mount_target"><CopyableCode code="delete_mount_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mount_target_id"><code>mount_target_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified mount target. This operation is irreversible.</td>
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
<tr id="parameter-mount_target_id">
    <td><CopyableCode code="mount_target_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the mount target to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-accessPointId">
    <td><CopyableCode code="accessPointId" /></td>
    <td><code>string</code></td>
    <td>Optional filter to list only mount targets associated with the specified access point ID or Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-fileSystemId">
    <td><CopyableCode code="fileSystemId" /></td>
    <td><code>string</code></td>
    <td>Optional filter to list only mount targets associated with the specified S3 File System ID or Amazon Resource Name (ARN). If provided, only mount targets for this file system will be returned in the response.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of mount targets to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to continue listing mount targets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_mount_target"
    values={[
        { label: 'get_mount_target', value: 'get_mount_target' },
        { label: 'list_mount_targets', value: 'list_mount_targets' }
    ]}
>
<TabItem value="get_mount_target">

Returns detailed resource information for the specified mount target including network configuration.

```sql
SELECT
availability_zone_id,
file_system_id,
ipv_4_address,
ipv_6_address,
mount_target_id,
network_interface_id,
owner_id,
security_groups,
status,
status_message,
subnet_id,
vpc_id
FROM aws.s3files.mount_targets
WHERE mount_target_id = '{{ mount_target_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_mount_targets">

Returns resource information for all mount targets with optional filtering by file system, access point, and VPC.

```sql
SELECT
availability_zone_id,
file_system_id,
ipv_4_address,
ipv_6_address,
mount_target_id,
network_interface_id,
owner_id,
status,
status_message,
subnet_id,
vpc_id
FROM aws.s3files.mount_targets
WHERE region = '{{ region }}' -- required
AND fileSystemId = '{{ fileSystemId }}'
AND accessPointId = '{{ accessPointId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_mount_target"
    values={[
        { label: 'create_mount_target', value: 'create_mount_target' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_mount_target">

Creates a mount target resource as an endpoint for mounting the S3 File System from compute resources in a specific Availability Zone and VPC. Mount targets provide network access to the file system.

```sql
INSERT INTO aws.s3files.mount_targets (
fileSystemId,
subnetId,
ipv4Address,
ipv6Address,
ipAddressType,
securityGroups,
region
)
SELECT 
'{{ fileSystemId }}' /* required */,
'{{ subnetId }}' /* required */,
'{{ ipv4Address }}',
'{{ ipv6Address }}',
'{{ ipAddressType }}',
'{{ securityGroups }}',
'{{ region }}'
RETURNING
availability_zone_id,
file_system_id,
ipv_4_address,
ipv_6_address,
mount_target_id,
network_interface_id,
owner_id,
security_groups,
status,
status_message,
subnet_id,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mount_targets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mount_targets resource.
    - name: fileSystemId
      value: "{{ fileSystemId }}"
    - name: subnetId
      value: "{{ subnetId }}"
    - name: ipv4Address
      value: "{{ ipv4Address }}"
    - name: ipv6Address
      value: "{{ ipv6Address }}"
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      valid_values: ['IPV4_ONLY', 'IPV6_ONLY', 'DUAL_STACK']
    - name: securityGroups
      value:
        - "{{ securityGroups }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_mount_target"
    values={[
        { label: 'update_mount_target', value: 'update_mount_target' }
    ]}
>
<TabItem value="update_mount_target">

Updates the mount target resource, specifically security group configurations.

```sql
UPDATE aws.s3files.mount_targets
SET 
securityGroups = '{{ securityGroups }}'
WHERE 
mount_target_id = '{{ mount_target_id }}' --required
AND region = '{{ region }}' --required
AND securityGroups = '{{ securityGroups }}' --required
RETURNING
availability_zone_id,
file_system_id,
ipv_4_address,
ipv_6_address,
mount_target_id,
network_interface_id,
owner_id,
security_groups,
status,
status_message,
subnet_id,
vpc_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mount_target"
    values={[
        { label: 'delete_mount_target', value: 'delete_mount_target' }
    ]}
>
<TabItem value="delete_mount_target">

Deletes the specified mount target. This operation is irreversible.

```sql
DELETE FROM aws.s3files.mount_targets
WHERE mount_target_id = '{{ mount_target_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
