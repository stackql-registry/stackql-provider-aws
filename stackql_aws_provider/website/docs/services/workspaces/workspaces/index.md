--- 
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspaces"
    values={[
        { label: 'describe_workspaces', value: 'describe_workspaces' }
    ]}
>
<TabItem value="describe_workspaces">

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
    <td><CopyableCode code="bundle_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bundle used to create the WorkSpace. (pattern: &lt;code&gt;^wsb-&#91;0-9a-z&#93;&#123;8,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="computer_name" /></td>
    <td><code>string</code></td>
    <td>The name of the WorkSpace, as seen by the operating system. The format of this name varies. For more information, see Launch a WorkSpace.</td>
</tr>
<tr>
    <td><CopyableCode code="data_replication_settings" /></td>
    <td><code>object</code></td>
    <td>Indicates the settings of the data replication.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Directory Service directory for the WorkSpace. (pattern: &lt;code&gt;^(d-&#91;0-9a-f&#93;&#123;8,63&#125;$)|(wsd-&#91;0-9a-z&#93;&#123;8,63&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The error code that is returned if the WorkSpace cannot be created.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The text of the error message that is returned if the WorkSpace cannot be created.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the WorkSpace.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_address" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address of the WorkSpace. (pattern: &lt;code&gt;^(?:&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;7&#125;&#91;0-9a-fA-F&#93;&#123;1,4&#125;|&#91;0-9a-fA-F&#93;&#123;1,4&#125;(?::&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;0,6&#125;::&#91;0-9a-fA-F&#93;&#123;1,4&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modification_states" /></td>
    <td><code>array</code></td>
    <td>The modification states of the WorkSpace.</td>
</tr>
<tr>
    <td><CopyableCode code="related_workspaces" /></td>
    <td><code>array</code></td>
    <td>The standby WorkSpace or primary WorkSpace related to the specified WorkSpace.</td>
</tr>
<tr>
    <td><CopyableCode code="root_volume_encryption_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the data stored on the root volume is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="standby_workspaces_properties" /></td>
    <td><code>array</code></td>
    <td>The properties of the standby WorkSpace</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The operational state of the WorkSpace. PENDING – The WorkSpace is in a waiting state (for example, the WorkSpace is being created). AVAILABLE – The WorkSpace is running and has passed the health checks. IMPAIRED – Refer to UNHEALTHY state. UNHEALTHY – The WorkSpace is not responding to health checks. REBOOTING – The WorkSpace is being rebooted (restarted). STARTING – The WorkSpace is starting up and health checks are being run. REBUILDING – The WorkSpace is being rebuilt. RESTORING – The WorkSpace is being restored. MAINTENANCE – The WorkSpace is undergoing scheduled maintenance by Amazon Web Services. ADMIN_MAINTENANCE – The WorkSpace is undergoing maintenance by the WorkSpaces administrator. TERMINATING – The WorkSpace is being deleted. TERMINATED – The WorkSpace has been deleted. SUSPENDED – The WorkSpace has been suspended for image creation. UPDATING – The WorkSpace is undergoing an update. STOPPING – The WorkSpace is being stopped. STOPPED – The WorkSpace has been stopped. ERROR – The WorkSpace is an error state (for example, an error occurred during startup). After a WorkSpace is terminated, the TERMINATED state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using DescribeWorkSpaces. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated. (PENDING, AVAILABLE, IMPAIRED, UNHEALTHY, REBOOTING, STARTING, REBUILDING, RESTORING, MAINTENANCE, ADMIN_MAINTENANCE, TERMINATING, TERMINATED, SUSPENDED, UPDATING, STOPPING, STOPPED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subnet for the WorkSpace. (pattern: &lt;code&gt;^(subnet-(&#91;0-9a-f&#93;&#123;8&#125;|&#91;0-9a-f&#93;&#123;17&#125;))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The user for the WorkSpace.</td>
</tr>
<tr>
    <td><CopyableCode code="user_volume_encryption_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the data stored on the user volume is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_encryption_key" /></td>
    <td><code>string</code></td>
    <td>The ARN of the symmetric KMS key used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric KMS keys.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the WorkSpace. (pattern: &lt;code&gt;^ws-&#91;0-9a-z&#93;&#123;8,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the user-decoupled WorkSpace. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_()&#93;&#91;a-zA-Z0-9_.()-&#93;&#123;1,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_properties" /></td>
    <td><code>object</code></td>
    <td>The properties of the WorkSpace.</td>
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
    <td><a href="#describe_workspaces"><CopyableCode code="describe_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified WorkSpaces. You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</td>
</tr>
<tr>
    <td><a href="#create_standby_workspaces"><CopyableCode code="create_standby_workspaces" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PrimaryRegion"><code>PrimaryRegion</code></a>, <a href="#parameter-StandbyWorkspaces"><code>StandbyWorkspaces</code></a></td>
    <td></td>
    <td>Creates a standby WorkSpace in a secondary Region.</td>
</tr>
<tr>
    <td><a href="#create_workspaces"><CopyableCode code="create_workspaces" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Workspaces"><code>Workspaces</code></a></td>
    <td></td>
    <td>Creates one or more WorkSpaces. This operation is asynchronous and returns before the WorkSpaces are created. The MANUAL running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see Amazon WorkSpaces Core. You don't need to specify the PCOIP protocol for Linux bundles because DCV (formerly WSP) is the default protocol for those bundles. User-decoupled WorkSpaces are only supported by Amazon WorkSpaces Core. Review your running mode to ensure you are using one that is optimal for your needs and budget. For more information on switching running modes, see Can I switch between hourly and monthly billing?</td>
</tr>
<tr>
    <td><a href="#modify_workspace_access_properties"><CopyableCode code="modify_workspace_access_properties" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-WorkspaceAccessProperties"><code>WorkspaceAccessProperties</code></a></td>
    <td></td>
    <td>Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see Control Device Access.</td>
</tr>
<tr>
    <td><a href="#modify_workspace_creation_properties"><CopyableCode code="modify_workspace_creation_properties" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-WorkspaceCreationProperties"><code>WorkspaceCreationProperties</code></a></td>
    <td></td>
    <td>Modify the default properties used to create WorkSpaces.</td>
</tr>
<tr>
    <td><a href="#modify_workspace_state"><CopyableCode code="modify_workspace_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkspaceId"><code>WorkspaceId</code></a>, <a href="#parameter-WorkspaceState"><code>WorkspaceState</code></a></td>
    <td></td>
    <td>Sets the state of the specified WorkSpace. To maintain a WorkSpace without being interrupted, set the WorkSpace state to ADMIN_MAINTENANCE. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the ADMIN_MAINTENANCE state.</td>
</tr>
<tr>
    <td><a href="#modify_workspace_properties"><CopyableCode code="modify_workspace_properties" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkspaceId"><code>WorkspaceId</code></a></td>
    <td></td>
    <td>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see Modify a WorkSpace. The MANUAL running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see Amazon WorkSpaces Core.</td>
</tr>
<tr>
    <td><a href="#terminate_workspaces"><CopyableCode code="terminate_workspaces" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates the specified WorkSpaces. Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace. You can terminate a WorkSpace that is in any state except SUSPENDED. This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the TERMINATED state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using DescribeWorkSpaces. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated. Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the Directory Service pricing terms. To delete empty directories, see Delete the Directory for Your WorkSpaces. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</td>
</tr>
<tr>
    <td><a href="#copy_workspace_image"><CopyableCode code="copy_workspace_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-SourceImageId"><code>SourceImageId</code></a>, <a href="#parameter-SourceRegion"><code>SourceRegion</code></a></td>
    <td></td>
    <td>Copies the specified image from the specified Region to the current Region. For more information about copying images, see Copy a Custom WorkSpaces Image. In the China (Ningxia) Region, you can copy images only within the same Region. In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support. Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the DescribeWorkSpaceImages and DescribeWorkspaceImagePermissions API operations.</td>
</tr>
<tr>
    <td><a href="#import_workspace_image"><CopyableCode code="import_workspace_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Ec2ImageId"><code>Ec2ImageId</code></a>, <a href="#parameter-IngestionProcess"><code>IngestionProcess</code></a>, <a href="#parameter-ImageName"><code>ImageName</code></a>, <a href="#parameter-ImageDescription"><code>ImageDescription</code></a></td>
    <td></td>
    <td>Imports the specified Windows 10 or 11 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see Bring Your Own Windows Desktop Licenses.</td>
</tr>
<tr>
    <td><a href="#reboot_workspaces"><CopyableCode code="reboot_workspaces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RebootWorkspaceRequests"><code>RebootWorkspaceRequests</code></a></td>
    <td></td>
    <td>Reboots the specified WorkSpaces. You cannot reboot a WorkSpace unless its state is AVAILABLE, UNHEALTHY, or REBOOTING. Reboot a WorkSpace in the REBOOTING state only if your WorkSpace has been stuck in the REBOOTING state for over 20 minutes. This operation is asynchronous and returns before the WorkSpaces have rebooted.</td>
</tr>
<tr>
    <td><a href="#rebuild_workspaces"><CopyableCode code="rebuild_workspaces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RebuildWorkspaceRequests"><code>RebuildWorkspaceRequests</code></a></td>
    <td></td>
    <td>Rebuilds the specified WorkSpace. You cannot rebuild a WorkSpace unless its state is AVAILABLE, ERROR, UNHEALTHY, STOPPED, or REBOOTING. Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see Rebuild a WorkSpace. This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</td>
</tr>
<tr>
    <td><a href="#start_workspaces"><CopyableCode code="start_workspaces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StartWorkspaceRequests"><code>StartWorkspaceRequests</code></a></td>
    <td></td>
    <td>Starts the specified WorkSpaces. You cannot start a WorkSpace unless it has a running mode of AutoStop or Manual and a state of STOPPED.</td>
</tr>
<tr>
    <td><a href="#start_workspaces_pool"><CopyableCode code="start_workspaces_pool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolId"><code>PoolId</code></a></td>
    <td></td>
    <td>End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see Amazon WorkSpaces Pools end of support. Starts the specified pool. You cannot start a pool unless it has a running mode of AutoStop and a state of STOPPED.</td>
</tr>
<tr>
    <td><a href="#stop_workspaces"><CopyableCode code="stop_workspaces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StopWorkspaceRequests"><code>StopWorkspaceRequests</code></a></td>
    <td></td>
    <td>Stops the specified WorkSpaces. You cannot stop a WorkSpace unless it has a running mode of AutoStop or Manual and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.</td>
</tr>
<tr>
    <td><a href="#stop_workspaces_pool"><CopyableCode code="stop_workspaces_pool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolId"><code>PoolId</code></a></td>
    <td></td>
    <td>End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see Amazon WorkSpaces Pools end of support. Stops the specified pool. You cannot stop a WorkSpace pool unless it has a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.</td>
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
    defaultValue="describe_workspaces"
    values={[
        { label: 'describe_workspaces', value: 'describe_workspaces' }
    ]}
>
<TabItem value="describe_workspaces">

Describes the specified WorkSpaces. You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.

```sql
SELECT
bundle_id,
computer_name,
data_replication_settings,
directory_id,
error_code,
error_message,
ip_address,
ipv_6_address,
modification_states,
related_workspaces,
root_volume_encryption_enabled,
standby_workspaces_properties,
state,
subnet_id,
user_name,
user_volume_encryption_enabled,
volume_encryption_key,
workspace_id,
workspace_name,
workspace_properties
FROM aws.workspaces.workspaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_standby_workspaces"
    values={[
        { label: 'create_standby_workspaces', value: 'create_standby_workspaces' },
        { label: 'create_workspaces', value: 'create_workspaces' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_standby_workspaces">

Creates a standby WorkSpace in a secondary Region.

```sql
INSERT INTO aws.workspaces.workspaces (
PrimaryRegion,
StandbyWorkspaces,
region
)
SELECT 
'{{ PrimaryRegion }}' /* required */,
'{{ StandbyWorkspaces }}' /* required */,
'{{ region }}'
RETURNING
failed_standby_requests,
pending_standby_requests
;
```
</TabItem>
<TabItem value="create_workspaces">

Creates one or more WorkSpaces. This operation is asynchronous and returns before the WorkSpaces are created. The MANUAL running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see Amazon WorkSpaces Core. You don't need to specify the PCOIP protocol for Linux bundles because DCV (formerly WSP) is the default protocol for those bundles. User-decoupled WorkSpaces are only supported by Amazon WorkSpaces Core. Review your running mode to ensure you are using one that is optimal for your needs and budget. For more information on switching running modes, see Can I switch between hourly and monthly billing?

```sql
INSERT INTO aws.workspaces.workspaces (
Workspaces,
region
)
SELECT 
'{{ Workspaces }}' /* required */,
'{{ region }}'
RETURNING
failed_requests,
pending_requests
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspaces resource.
    - name: PrimaryRegion
      value: "{{ PrimaryRegion }}"
      description: |
        The Region of the primary WorkSpace.
    - name: StandbyWorkspaces
      description: |
        Information about the standby WorkSpace to be created.
      value:
        - PrimaryWorkspaceId: "{{ PrimaryWorkspaceId }}"
          VolumeEncryptionKey: "{{ VolumeEncryptionKey }}"
          DirectoryId: "{{ DirectoryId }}"
          Tags: "{{ Tags }}"
          DataReplication: "{{ DataReplication }}"
    - name: Workspaces
      description: |
        The WorkSpaces to create. You can specify up to 25 WorkSpaces.
      value:
        - DirectoryId: "{{ DirectoryId }}"
          UserName: "{{ UserName }}"
          BundleId: "{{ BundleId }}"
          VolumeEncryptionKey: "{{ VolumeEncryptionKey }}"
          UserVolumeEncryptionEnabled: {{ UserVolumeEncryptionEnabled }}
          RootVolumeEncryptionEnabled: {{ RootVolumeEncryptionEnabled }}
          WorkspaceProperties:
            RunningMode: "{{ RunningMode }}"
            RunningModeAutoStopTimeoutInMinutes: {{ RunningModeAutoStopTimeoutInMinutes }}
            RootVolumeSizeGib: {{ RootVolumeSizeGib }}
            UserVolumeSizeGib: {{ UserVolumeSizeGib }}
            ComputeTypeName: "{{ ComputeTypeName }}"
            Protocols:
              - "{{ Protocols }}"
            OperatingSystemName: "{{ OperatingSystemName }}"
            GlobalAccelerator:
              Mode: "{{ Mode }}"
              PreferredProtocol: "{{ PreferredProtocol }}"
            NestedVirtualizationEnabled: {{ NestedVirtualizationEnabled }}
          Tags: "{{ Tags }}"
          WorkspaceName: "{{ WorkspaceName }}"
          Ipv6Address: "{{ Ipv6Address }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_workspace_access_properties"
    values={[
        { label: 'modify_workspace_access_properties', value: 'modify_workspace_access_properties' },
        { label: 'modify_workspace_creation_properties', value: 'modify_workspace_creation_properties' },
        { label: 'modify_workspace_state', value: 'modify_workspace_state' },
        { label: 'modify_workspace_properties', value: 'modify_workspace_properties' }
    ]}
>
<TabItem value="modify_workspace_access_properties">

Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see Control Device Access.

```sql
UPDATE aws.workspaces.workspaces
SET 
ResourceId = '{{ ResourceId }}',
WorkspaceAccessProperties = '{{ WorkspaceAccessProperties }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND WorkspaceAccessProperties = '{{ WorkspaceAccessProperties }}' --required;
```
</TabItem>
<TabItem value="modify_workspace_creation_properties">

Modify the default properties used to create WorkSpaces.

```sql
UPDATE aws.workspaces.workspaces
SET 
ResourceId = '{{ ResourceId }}',
WorkspaceCreationProperties = '{{ WorkspaceCreationProperties }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND WorkspaceCreationProperties = '{{ WorkspaceCreationProperties }}' --required;
```
</TabItem>
<TabItem value="modify_workspace_state">

Sets the state of the specified WorkSpace. To maintain a WorkSpace without being interrupted, set the WorkSpace state to ADMIN_MAINTENANCE. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the ADMIN_MAINTENANCE state.

```sql
UPDATE aws.workspaces.workspaces
SET 
WorkspaceId = '{{ WorkspaceId }}',
WorkspaceState = '{{ WorkspaceState }}'
WHERE 
region = '{{ region }}' --required
AND WorkspaceId = '{{ WorkspaceId }}' --required
AND WorkspaceState = '{{ WorkspaceState }}' --required;
```
</TabItem>
<TabItem value="modify_workspace_properties">

Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see Modify a WorkSpace. The MANUAL running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see Amazon WorkSpaces Core.

```sql
UPDATE aws.workspaces.workspaces
SET 
WorkspaceId = '{{ WorkspaceId }}',
WorkspaceProperties = '{{ WorkspaceProperties }}',
DataReplication = '{{ DataReplication }}'
WHERE 
region = '{{ region }}' --required
AND WorkspaceId = '{{ WorkspaceId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_workspaces"
    values={[
        { label: 'terminate_workspaces', value: 'terminate_workspaces' }
    ]}
>
<TabItem value="terminate_workspaces">

Terminates the specified WorkSpaces. Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace. You can terminate a WorkSpace that is in any state except SUSPENDED. This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the TERMINATED state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using DescribeWorkSpaces. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated. Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the Directory Service pricing terms. To delete empty directories, see Delete the Directory for Your WorkSpaces. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.

```sql
DELETE FROM aws.workspaces.workspaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_workspace_image"
    values={[
        { label: 'copy_workspace_image', value: 'copy_workspace_image' },
        { label: 'import_workspace_image', value: 'import_workspace_image' },
        { label: 'reboot_workspaces', value: 'reboot_workspaces' },
        { label: 'rebuild_workspaces', value: 'rebuild_workspaces' },
        { label: 'start_workspaces', value: 'start_workspaces' },
        { label: 'start_workspaces_pool', value: 'start_workspaces_pool' },
        { label: 'stop_workspaces', value: 'stop_workspaces' },
        { label: 'stop_workspaces_pool', value: 'stop_workspaces_pool' }
    ]}
>
<TabItem value="copy_workspace_image">

Copies the specified image from the specified Region to the current Region. For more information about copying images, see Copy a Custom WorkSpaces Image. In the China (Ningxia) Region, you can copy images only within the same Region. In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support. Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the DescribeWorkSpaceImages and DescribeWorkspaceImagePermissions API operations.

```sql
EXEC aws.workspaces.workspaces.copy_workspace_image 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"Description": "{{ Description }}", 
"SourceImageId": "{{ SourceImageId }}", 
"SourceRegion": "{{ SourceRegion }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="import_workspace_image">

Imports the specified Windows 10 or 11 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see Bring Your Own Windows Desktop Licenses.

```sql
EXEC aws.workspaces.workspaces.import_workspace_image 
@region='{{ region }}' --required 
@@json=
'{
"Ec2ImageId": "{{ Ec2ImageId }}", 
"IngestionProcess": "{{ IngestionProcess }}", 
"ImageName": "{{ ImageName }}", 
"ImageDescription": "{{ ImageDescription }}", 
"Tags": "{{ Tags }}", 
"Applications": "{{ Applications }}"
}'
;
```
</TabItem>
<TabItem value="reboot_workspaces">

Reboots the specified WorkSpaces. You cannot reboot a WorkSpace unless its state is AVAILABLE, UNHEALTHY, or REBOOTING. Reboot a WorkSpace in the REBOOTING state only if your WorkSpace has been stuck in the REBOOTING state for over 20 minutes. This operation is asynchronous and returns before the WorkSpaces have rebooted.

```sql
EXEC aws.workspaces.workspaces.reboot_workspaces 
@region='{{ region }}' --required 
@@json=
'{
"RebootWorkspaceRequests": "{{ RebootWorkspaceRequests }}"
}'
;
```
</TabItem>
<TabItem value="rebuild_workspaces">

Rebuilds the specified WorkSpace. You cannot rebuild a WorkSpace unless its state is AVAILABLE, ERROR, UNHEALTHY, STOPPED, or REBOOTING. Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see Rebuild a WorkSpace. This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.

```sql
EXEC aws.workspaces.workspaces.rebuild_workspaces 
@region='{{ region }}' --required 
@@json=
'{
"RebuildWorkspaceRequests": "{{ RebuildWorkspaceRequests }}"
}'
;
```
</TabItem>
<TabItem value="start_workspaces">

Starts the specified WorkSpaces. You cannot start a WorkSpace unless it has a running mode of AutoStop or Manual and a state of STOPPED.

```sql
EXEC aws.workspaces.workspaces.start_workspaces 
@region='{{ region }}' --required 
@@json=
'{
"StartWorkspaceRequests": "{{ StartWorkspaceRequests }}"
}'
;
```
</TabItem>
<TabItem value="start_workspaces_pool">

End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see Amazon WorkSpaces Pools end of support. Starts the specified pool. You cannot start a pool unless it has a running mode of AutoStop and a state of STOPPED.

```sql
EXEC aws.workspaces.workspaces.start_workspaces_pool 
@region='{{ region }}' --required 
@@json=
'{
"PoolId": "{{ PoolId }}"
}'
;
```
</TabItem>
<TabItem value="stop_workspaces">

Stops the specified WorkSpaces. You cannot stop a WorkSpace unless it has a running mode of AutoStop or Manual and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.

```sql
EXEC aws.workspaces.workspaces.stop_workspaces 
@region='{{ region }}' --required 
@@json=
'{
"StopWorkspaceRequests": "{{ StopWorkspaceRequests }}"
}'
;
```
</TabItem>
<TabItem value="stop_workspaces_pool">

End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027, you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see Amazon WorkSpaces Pools end of support. Stops the specified pool. You cannot stop a WorkSpace pool unless it has a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.

```sql
EXEC aws.workspaces.workspaces.stop_workspaces_pool 
@region='{{ region }}' --required 
@@json=
'{
"PoolId": "{{ PoolId }}"
}'
;
```
</TabItem>
</Tabs>
