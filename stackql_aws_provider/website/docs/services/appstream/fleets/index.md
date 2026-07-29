--- 
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
  - appstream
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

Creates, updates, deletes, gets or lists a <code>fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleets"
    values={[
        { label: 'describe_fleets', value: 'describe_fleets' }
    ]}
>
<TabItem value="describe_fleets">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the fleet. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_capacity_status" /></td>
    <td><code>object</code></td>
    <td>The capacity status for the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the fleet was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description to display.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_imdsv1" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Instance Metadata Service Version 1 (IMDSv1) is disabled for the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_timeout_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that a streaming session remains active after users disconnect. If they try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. Specify a value between 60 and 36000.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The fleet name to display.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_join_info" /></td>
    <td><code>object</code></td>
    <td>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_default_internet_access" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether default internet access is enabled for the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_errors" /></td>
    <td><code>array</code></td>
    <td>The fleet errors.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_type" /></td>
    <td><code>string</code></td>
    <td>The fleet type. ALWAYS_ON Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps. ON_DEMAND Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps. (ALWAYS_ON, ON_DEMAND, ELASTIC)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that is applied to the fleet. To assume a role, the fleet instance calls the AWS Security Token Service (STS) AssumeRole API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the appstream_machine_role credential profile on the instance. For more information, see Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances in the Amazon WorkSpaces Applications Administration Guide. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="idle_disconnect_timeout_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the DisconnectTimeoutInSeconds time interval begins. Users are notified before they are disconnected due to inactivity. If users try to reconnect to the streaming session before the time interval specified in DisconnectTimeoutInSeconds elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in IdleDisconnectTimeoutInSeconds elapses, they are disconnected. To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000. The default value is 0. If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the public, private, or shared image. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_name" /></td>
    <td><code>string</code></td>
    <td>The name of the image used to create the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type to use when launching fleet instances. The following instance types are available: stream.standard.small stream.standard.medium stream.standard.large stream.compute.large stream.compute.xlarge stream.compute.2xlarge stream.compute.4xlarge stream.compute.8xlarge stream.memory.large stream.memory.xlarge stream.memory.2xlarge stream.memory.4xlarge stream.memory.8xlarge stream.memory.z1d.large stream.memory.z1d.xlarge stream.memory.z1d.2xlarge stream.memory.z1d.3xlarge stream.memory.z1d.6xlarge stream.memory.z1d.12xlarge stream.graphics.g4dn.xlarge stream.graphics.g4dn.2xlarge stream.graphics.g4dn.4xlarge stream.graphics.g4dn.8xlarge stream.graphics.g4dn.12xlarge stream.graphics.g4dn.16xlarge stream.graphics.g5.xlarge stream.graphics.g5.2xlarge stream.graphics.g5.4xlarge stream.graphics.g5.8xlarge stream.graphics.g5.16xlarge stream.graphics.g5.12xlarge stream.graphics.g5.24xlarge stream.graphics.g6.xlarge stream.graphics.g6.2xlarge stream.graphics.g6.4xlarge stream.graphics.g6.8xlarge stream.graphics.g6.16xlarge stream.graphics.g6.12xlarge stream.graphics.g6.24xlarge stream.graphics.gr6.4xlarge stream.graphics.gr6.8xlarge stream.graphics.g6f.large stream.graphics.g6f.xlarge stream.graphics.g6f.2xlarge stream.graphics.g6f.4xlarge stream.graphics.gr6f.4xlarge</td>
</tr>
<tr>
    <td><CopyableCode code="max_concurrent_sessions" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of concurrent sessions for the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="max_sessions_per_instance" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of user sessions on an instance. This only applies to multi-session fleets.</td>
</tr>
<tr>
    <td><CopyableCode code="max_user_duration_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. Specify a value between 600 and 360000.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform of the fleet. (WINDOWS, WINDOWS_SERVER_2016, WINDOWS_SERVER_2019, WINDOWS_SERVER_2022, WINDOWS_SERVER_2025, AMAZON_LINUX2, RHEL8, ROCKY_LINUX8, UBUNTU_PRO_2404)</td>
</tr>
<tr>
    <td><CopyableCode code="root_volume_config" /></td>
    <td><code>object</code></td>
    <td>The current configuration of the root volume for fleet instances, including the storage size in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="session_script_s3_location" /></td>
    <td><code>object</code></td>
    <td>The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state for the fleet. (STARTING, RUNNING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_view" /></td>
    <td><code>string</code></td>
    <td>The WorkSpaces Applications view that is displayed to your users when they stream from the fleet. When APP is specified, only the windows of applications opened by users display. When DESKTOP is specified, the standard desktop that is provided by the operating system displays. The default value is APP. (APP, DESKTOP)</td>
</tr>
<tr>
    <td><CopyableCode code="usb_device_filter_strings" /></td>
    <td><code>array</code></td>
    <td>The USB device filter strings associated with the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The VPC configuration for the fleet.</td>
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
    <td><a href="#describe_fleets"><CopyableCode code="describe_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.</td>
</tr>
<tr>
    <td><a href="#create_streaming_url"><CopyableCode code="create_streaming_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-FleetName"><code>FleetName</code></a>, <a href="#parameter-UserId"><code>UserId</code></a></td>
    <td></td>
    <td>Creates a temporary URL to start an WorkSpaces Applications streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup.</td>
</tr>
<tr>
    <td><a href="#create_fleet"><CopyableCode code="create_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a></td>
    <td></td>
    <td>Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.</td>
</tr>
<tr>
    <td><a href="#associate_application_fleet"><CopyableCode code="associate_application_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetName"><code>FleetName</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a></td>
    <td></td>
    <td>Associates the specified application with the specified fleet. This is only supported for Elastic fleets.</td>
</tr>
<tr>
    <td><a href="#associate_fleet"><CopyableCode code="associate_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetName"><code>FleetName</code></a>, <a href="#parameter-StackName"><code>StackName</code></a></td>
    <td></td>
    <td>Associates the specified fleet with the specified stack.</td>
</tr>
<tr>
    <td><a href="#update_fleet"><CopyableCode code="update_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified fleet. If the fleet is in the STOPPED state, you can update any attribute except the fleet name. If the fleet is in the RUNNING state, you can update the following based on the fleet type: Always-On and On-Demand fleet types You can update the DisplayName, ComputeCapacity, ImageARN, ImageName, IdleDisconnectTimeoutInSeconds, and DisconnectTimeoutInSeconds attributes. Elastic fleet type You can update the DisplayName, IdleDisconnectTimeoutInSeconds, DisconnectTimeoutInSeconds, MaxConcurrentSessions, SessionScriptS3Location and UsbDeviceFilterStrings attributes. If the fleet is in the STARTING or STOPPED state, you can't update it.</td>
</tr>
<tr>
    <td><a href="#delete_fleet"><CopyableCode code="delete_fleet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified fleet.</td>
</tr>
<tr>
    <td><a href="#disassociate_application_fleet"><CopyableCode code="disassociate_application_fleet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetName"><code>FleetName</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a></td>
    <td></td>
    <td>Disassociates the specified application from the fleet.</td>
</tr>
<tr>
    <td><a href="#disassociate_fleet"><CopyableCode code="disassociate_fleet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetName"><code>FleetName</code></a>, <a href="#parameter-StackName"><code>StackName</code></a></td>
    <td></td>
    <td>Disassociates the specified fleet from the specified stack.</td>
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
    defaultValue="describe_fleets"
    values={[
        { label: 'describe_fleets', value: 'describe_fleets' }
    ]}
>
<TabItem value="describe_fleets">

Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.

```sql
SELECT
arn,
compute_capacity_status,
created_time,
description,
disable_imdsv1,
disconnect_timeout_in_seconds,
display_name,
domain_join_info,
enable_default_internet_access,
fleet_errors,
fleet_type,
iam_role_arn,
idle_disconnect_timeout_in_seconds,
image_arn,
image_name,
instance_type,
max_concurrent_sessions,
max_sessions_per_instance,
max_user_duration_in_seconds,
name,
platform,
root_volume_config,
session_script_s3_location,
state,
stream_view,
usb_device_filter_strings,
vpc_config
FROM aws.appstream.fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_streaming_url"
    values={[
        { label: 'create_streaming_url', value: 'create_streaming_url' },
        { label: 'create_fleet', value: 'create_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_streaming_url">

Creates a temporary URL to start an WorkSpaces Applications streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup.

```sql
INSERT INTO aws.appstream.fleets (
StackName,
FleetName,
UserId,
ApplicationId,
Validity,
SessionContext,
region
)
SELECT 
'{{ StackName }}' /* required */,
'{{ FleetName }}' /* required */,
'{{ UserId }}' /* required */,
'{{ ApplicationId }}',
{{ Validity }},
'{{ SessionContext }}',
'{{ region }}'
RETURNING
expires,
streaming_url
;
```
</TabItem>
<TabItem value="create_fleet">

Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.

```sql
INSERT INTO aws.appstream.fleets (
Name,
ImageName,
ImageArn,
InstanceType,
FleetType,
ComputeCapacity,
VpcConfig,
MaxUserDurationInSeconds,
DisconnectTimeoutInSeconds,
Description,
DisplayName,
EnableDefaultInternetAccess,
DomainJoinInfo,
Tags,
IdleDisconnectTimeoutInSeconds,
IamRoleArn,
StreamView,
Platform,
MaxConcurrentSessions,
UsbDeviceFilterStrings,
SessionScriptS3Location,
MaxSessionsPerInstance,
RootVolumeConfig,
DisableIMDSV1,
region
)
SELECT 
'{{ Name }}',
'{{ ImageName }}',
'{{ ImageArn }}',
'{{ InstanceType }}' /* required */,
'{{ FleetType }}',
'{{ ComputeCapacity }}',
'{{ VpcConfig }}',
{{ MaxUserDurationInSeconds }},
{{ DisconnectTimeoutInSeconds }},
'{{ Description }}',
'{{ DisplayName }}',
{{ EnableDefaultInternetAccess }},
'{{ DomainJoinInfo }}',
'{{ Tags }}',
{{ IdleDisconnectTimeoutInSeconds }},
'{{ IamRoleArn }}',
'{{ StreamView }}',
'{{ Platform }}',
{{ MaxConcurrentSessions }},
'{{ UsbDeviceFilterStrings }}',
'{{ SessionScriptS3Location }}',
{{ MaxSessionsPerInstance }},
'{{ RootVolumeConfig }}',
{{ DisableIMDSV1 }},
'{{ region }}'
RETURNING
fleet
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fleets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fleets resource.
    - name: StackName
      value: "{{ StackName }}"
      description: |
        The name of the stack.
    - name: FleetName
      value: "{{ FleetName }}"
      description: |
        The name of the fleet.
    - name: UserId
      value: "{{ UserId }}"
      description: |
        The identifier of the user.
    - name: ApplicationId
      value: "{{ ApplicationId }}"
      description: |
        The name of the application to launch after the session starts. This is the name that you specified as Name in the Image Assistant. If your fleet is enabled for the Desktop stream view, you can also choose to launch directly to the operating system desktop. To do so, specify Desktop.
    - name: Validity
      value: {{ Validity }}
      description: |
        The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 60 seconds.
    - name: SessionContext
      value: "{{ SessionContext }}"
      description: |
        The session context. For more information, see Session Context in the Amazon WorkSpaces Applications Administration Guide.
    - name: Name
      value: "{{ Name }}"
      description: |
        A unique name for the fleet.
    - name: ImageName
      value: "{{ ImageName }}"
      description: |
        The name of the image used to create the fleet.
    - name: ImageArn
      value: "{{ ImageArn }}"
      description: |
        The ARN of the public, private, or shared image to use.
    - name: InstanceType
      value: "{{ InstanceType }}"
      description: |
        The instance type to use when launching fleet instances. The following instance types are available: stream.standard.small stream.standard.medium stream.standard.large stream.standard.xlarge stream.standard.2xlarge stream.compute.large stream.compute.xlarge stream.compute.2xlarge stream.compute.4xlarge stream.compute.8xlarge stream.memory.large stream.memory.xlarge stream.memory.2xlarge stream.memory.4xlarge stream.memory.8xlarge stream.memory.z1d.large stream.memory.z1d.xlarge stream.memory.z1d.2xlarge stream.memory.z1d.3xlarge stream.memory.z1d.6xlarge stream.memory.z1d.12xlarge stream.graphics.g4dn.xlarge stream.graphics.g4dn.2xlarge stream.graphics.g4dn.4xlarge stream.graphics.g4dn.8xlarge stream.graphics.g4dn.12xlarge stream.graphics.g4dn.16xlarge stream.graphics.g5.xlarge stream.graphics.g5.2xlarge stream.graphics.g5.4xlarge stream.graphics.g5.8xlarge stream.graphics.g5.12xlarge stream.graphics.g5.16xlarge stream.graphics.g5.24xlarge stream.graphics.g6.xlarge stream.graphics.g6.2xlarge stream.graphics.g6.4xlarge stream.graphics.g6.8xlarge stream.graphics.g6.16xlarge stream.graphics.g6.12xlarge stream.graphics.g6.24xlarge stream.graphics.gr6.4xlarge stream.graphics.gr6.8xlarge stream.graphics.g6f.large stream.graphics.g6f.xlarge stream.graphics.g6f.2xlarge stream.graphics.g6f.4xlarge stream.graphics.gr6f.4xlarge The following instance types are available for Elastic fleets: stream.standard.small stream.standard.medium stream.standard.large stream.standard.xlarge stream.standard.2xlarge
    - name: FleetType
      value: "{{ FleetType }}"
      description: |
        The fleet type. ALWAYS_ON Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps. ON_DEMAND Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.
      valid_values: ['ALWAYS_ON', 'ON_DEMAND', 'ELASTIC']
    - name: ComputeCapacity
      description: |
        The desired capacity for the fleet. This is not allowed for Elastic fleets. For Elastic fleets, specify MaxConcurrentSessions instead.
      value:
        DesiredInstances: {{ DesiredInstances }}
        DesiredSessions: {{ DesiredSessions }}
    - name: VpcConfig
      description: |
        The VPC configuration for the fleet. This is required for Elastic fleets, but not required for other fleet types. Elastic fleets require that you specify at least two subnets in different availability zones.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: MaxUserDurationInSeconds
      value: {{ MaxUserDurationInSeconds }}
      description: |
        The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. Specify a value between 600 and 432000.
    - name: DisconnectTimeoutInSeconds
      value: {{ DisconnectTimeoutInSeconds }}
      description: |
        The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. Specify a value between 60 and 36000.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description to display.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The fleet name to display.
    - name: EnableDefaultInternetAccess
      value: {{ EnableDefaultInternetAccess }}
      description: |
        Enables or disables default internet access for the fleet.
    - name: DomainJoinInfo
      description: |
        The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. This is not allowed for Elastic fleets.
      value:
        DirectoryName: "{{ DirectoryName }}"
        OrganizationalUnitDistinguishedName: "{{ OrganizationalUnitDistinguishedName }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to associate with the fleet. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. If you do not specify a value, the value is set to an empty string. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: _ . : / = + \ - @ For more information, see Tagging Your Resources in the Amazon WorkSpaces Applications Administration Guide.
    - name: IdleDisconnectTimeoutInSeconds
      value: {{ IdleDisconnectTimeoutInSeconds }}
      description: |
        The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the DisconnectTimeoutInSeconds time interval begins. Users are notified before they are disconnected due to inactivity. If they try to reconnect to the streaming session before the time interval specified in DisconnectTimeoutInSeconds elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in IdleDisconnectTimeoutInSeconds elapses, they are disconnected. To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000. The default value is 0. If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity.
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) AssumeRole API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the appstream_machine_role credential profile on the instance. For more information, see Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances in the Amazon WorkSpaces Applications Administration Guide.
    - name: StreamView
      value: "{{ StreamView }}"
      description: |
        The WorkSpaces Applications view that is displayed to your users when they stream from the fleet. When APP is specified, only the windows of applications opened by users display. When DESKTOP is specified, the standard desktop that is provided by the operating system displays. The default value is APP.
      valid_values: ['APP', 'DESKTOP']
    - name: Platform
      value: "{{ Platform }}"
      description: |
        The fleet platform. WINDOWS_SERVER_2019, AMAZON_LINUX2 and UBUNTU_PRO_2404 are supported for Elastic fleets.
      valid_values: ['WINDOWS', 'WINDOWS_SERVER_2016', 'WINDOWS_SERVER_2019', 'WINDOWS_SERVER_2022', 'WINDOWS_SERVER_2025', 'AMAZON_LINUX2', 'RHEL8', 'ROCKY_LINUX8', 'UBUNTU_PRO_2404']
    - name: MaxConcurrentSessions
      value: {{ MaxConcurrentSessions }}
      description: |
        The maximum concurrent sessions of the Elastic fleet. This is required for Elastic fleets, and not allowed for other fleet types.
    - name: UsbDeviceFilterStrings
      value:
        - "{{ UsbDeviceFilterStrings }}"
      description: |
        The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client. This is allowed but not required for Elastic fleets.
    - name: SessionScriptS3Location
      description: |
        The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.
      value:
        S3Bucket: "{{ S3Bucket }}"
        S3Key: "{{ S3Key }}"
    - name: MaxSessionsPerInstance
      value: {{ MaxSessionsPerInstance }}
      description: |
        The maximum number of user sessions on an instance. This only applies to multi-session fleets.
    - name: RootVolumeConfig
      description: |
        The configuration for the root volume of fleet instances. Use this to customize storage capacity from 200 GB up to 500 GB based on your application requirements.
      value:
        VolumeSizeInGb: {{ VolumeSizeInGb }}
    - name: DisableIMDSV1
      value: {{ DisableIMDSV1 }}
      description: |
        Set to true to disable Instance Metadata Service Version 1 (IMDSv1) and enforce IMDSv2. Set to false to enable both IMDSv1 and IMDSv2. Before disabling IMDSv1, ensure your WorkSpaces Applications images are running the agent version or managed image update released on or after January 16, 2024 to support IMDSv2 enforcement.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_application_fleet"
    values={[
        { label: 'associate_application_fleet', value: 'associate_application_fleet' },
        { label: 'associate_fleet', value: 'associate_fleet' },
        { label: 'update_fleet', value: 'update_fleet' }
    ]}
>
<TabItem value="associate_application_fleet">

Associates the specified application with the specified fleet. This is only supported for Elastic fleets.

```sql
UPDATE aws.appstream.fleets
SET 
FleetName = '{{ FleetName }}',
ApplicationArn = '{{ ApplicationArn }}'
WHERE 
region = '{{ region }}' --required
AND FleetName = '{{ FleetName }}' --required
AND ApplicationArn = '{{ ApplicationArn }}' --required
RETURNING
application_fleet_association;
```
</TabItem>
<TabItem value="associate_fleet">

Associates the specified fleet with the specified stack.

```sql
UPDATE aws.appstream.fleets
SET 
FleetName = '{{ FleetName }}',
StackName = '{{ StackName }}'
WHERE 
region = '{{ region }}' --required
AND FleetName = '{{ FleetName }}' --required
AND StackName = '{{ StackName }}' --required;
```
</TabItem>
<TabItem value="update_fleet">

Updates the specified fleet. If the fleet is in the STOPPED state, you can update any attribute except the fleet name. If the fleet is in the RUNNING state, you can update the following based on the fleet type: Always-On and On-Demand fleet types You can update the DisplayName, ComputeCapacity, ImageARN, ImageName, IdleDisconnectTimeoutInSeconds, and DisconnectTimeoutInSeconds attributes. Elastic fleet type You can update the DisplayName, IdleDisconnectTimeoutInSeconds, DisconnectTimeoutInSeconds, MaxConcurrentSessions, SessionScriptS3Location and UsbDeviceFilterStrings attributes. If the fleet is in the STARTING or STOPPED state, you can't update it.

```sql
UPDATE aws.appstream.fleets
SET 
ImageName = '{{ ImageName }}',
ImageArn = '{{ ImageArn }}',
Name = '{{ Name }}',
InstanceType = '{{ InstanceType }}',
ComputeCapacity = '{{ ComputeCapacity }}',
VpcConfig = '{{ VpcConfig }}',
MaxUserDurationInSeconds = {{ MaxUserDurationInSeconds }},
DisconnectTimeoutInSeconds = {{ DisconnectTimeoutInSeconds }},
DeleteVpcConfig = {{ DeleteVpcConfig }},
Description = '{{ Description }}',
DisplayName = '{{ DisplayName }}',
EnableDefaultInternetAccess = {{ EnableDefaultInternetAccess }},
DomainJoinInfo = '{{ DomainJoinInfo }}',
IdleDisconnectTimeoutInSeconds = {{ IdleDisconnectTimeoutInSeconds }},
AttributesToDelete = '{{ AttributesToDelete }}',
IamRoleArn = '{{ IamRoleArn }}',
StreamView = '{{ StreamView }}',
Platform = '{{ Platform }}',
MaxConcurrentSessions = {{ MaxConcurrentSessions }},
UsbDeviceFilterStrings = '{{ UsbDeviceFilterStrings }}',
SessionScriptS3Location = '{{ SessionScriptS3Location }}',
MaxSessionsPerInstance = {{ MaxSessionsPerInstance }},
RootVolumeConfig = '{{ RootVolumeConfig }}',
DisableIMDSV1 = {{ DisableIMDSV1 }}
WHERE 
region = '{{ region }}' --required
RETURNING
fleet;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleet"
    values={[
        { label: 'delete_fleet', value: 'delete_fleet' }
    ]}
>
<TabItem value="delete_fleet">

Deletes the specified fleet.

```sql
DELETE FROM aws.appstream.fleets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_application_fleet"
    values={[
        { label: 'disassociate_application_fleet', value: 'disassociate_application_fleet' },
        { label: 'disassociate_fleet', value: 'disassociate_fleet' }
    ]}
>
<TabItem value="disassociate_application_fleet">

Disassociates the specified application from the fleet.

```sql
EXEC aws.appstream.fleets.disassociate_application_fleet 
@region='{{ region }}' --required 
@@json=
'{
"FleetName": "{{ FleetName }}", 
"ApplicationArn": "{{ ApplicationArn }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_fleet">

Disassociates the specified fleet from the specified stack.

```sql
EXEC aws.appstream.fleets.disassociate_fleet 
@region='{{ region }}' --required 
@@json=
'{
"FleetName": "{{ FleetName }}", 
"StackName": "{{ StackName }}"
}'
;
```
</TabItem>
</Tabs>
