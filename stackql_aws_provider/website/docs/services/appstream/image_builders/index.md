--- 
title: image_builders
hide_title: false
hide_table_of_contents: false
keywords:
  - image_builders
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

Creates, updates, deletes, gets or lists an <code>image_builders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_builders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.image_builders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_builders"
    values={[
        { label: 'describe_image_builders', value: 'describe_image_builders' }
    ]}
>
<TabItem value="describe_image_builders">

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
    <td><CopyableCode code="access_endpoints" /></td>
    <td><code>array</code></td>
    <td>The list of virtual private cloud (VPC) interface endpoint objects. Administrators can connect to the image builder only through the specified endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="appstream_agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of the WorkSpaces Applications agent that is currently being used by the image builder.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the image builder. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp when the image builder was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description to display.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_imdsv1" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Instance Metadata Service Version 1 (IMDSv1) is disabled for the image builder.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The image builder name to display.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_join_info" /></td>
    <td><code>object</code></td>
    <td>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_default_internet_access" /></td>
    <td><code>boolean</code></td>
    <td>Enables or disables default internet access for the image builder.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that is applied to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) AssumeRole API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the appstream_machine_role credential profile on the instance. For more information, see Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances in the Amazon WorkSpaces Applications Administration Guide. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the image from which this builder was created. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_builder_errors" /></td>
    <td><code>array</code></td>
    <td>The image builder errors.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type for the image builder. The following instance types are available: stream.standard.small stream.standard.medium stream.standard.large stream.compute.large stream.compute.xlarge stream.compute.2xlarge stream.compute.4xlarge stream.compute.8xlarge stream.memory.large stream.memory.xlarge stream.memory.2xlarge stream.memory.4xlarge stream.memory.8xlarge stream.memory.z1d.large stream.memory.z1d.xlarge stream.memory.z1d.2xlarge stream.memory.z1d.3xlarge stream.memory.z1d.6xlarge stream.memory.z1d.12xlarge stream.graphics.g4dn.xlarge stream.graphics.g4dn.2xlarge stream.graphics.g4dn.4xlarge stream.graphics.g4dn.8xlarge stream.graphics.g4dn.12xlarge stream.graphics.g4dn.16xlarge stream.graphics.g5.xlarge stream.graphics.g5.2xlarge stream.graphics.g5.4xlarge stream.graphics.g5.8xlarge stream.graphics.g5.16xlarge stream.graphics.g5.12xlarge stream.graphics.g5.24xlarge stream.graphics.g6.xlarge stream.graphics.g6.2xlarge stream.graphics.g6.4xlarge stream.graphics.g6.8xlarge stream.graphics.g6.16xlarge stream.graphics.g6.12xlarge stream.graphics.g6.24xlarge stream.graphics.gr6.4xlarge stream.graphics.gr6.8xlarge stream.graphics.g6f.large stream.graphics.g6f.xlarge stream.graphics.g6f.2xlarge stream.graphics.g6f.4xlarge stream.graphics.gr6f.4xlarge</td>
</tr>
<tr>
    <td><CopyableCode code="latest_appstream_agent_version" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the image builder is using the latest WorkSpaces Applications agent version or not. (TRUE, FALSE)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the image builder.</td>
</tr>
<tr>
    <td><CopyableCode code="network_access_configuration" /></td>
    <td><code>object</code></td>
    <td>Describes the network details of the fleet or image builder instance.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The operating system platform of the image builder. (WINDOWS, WINDOWS_SERVER_2016, WINDOWS_SERVER_2019, WINDOWS_SERVER_2022, WINDOWS_SERVER_2025, AMAZON_LINUX2, RHEL8, ROCKY_LINUX8, UBUNTU_PRO_2404)</td>
</tr>
<tr>
    <td><CopyableCode code="root_volume_config" /></td>
    <td><code>object</code></td>
    <td>The current configuration of the root volume for the image builder, including the storage size in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the image builder. (PENDING, UPDATING_AGENT, RUNNING, STOPPING, STOPPED, REBOOTING, SNAPSHOTTING, DELETING, FAILED, UPDATING, PENDING_QUALIFICATION, PENDING_SYNCING_APPS, SYNCING_APPS, PENDING_IMAGE_IMPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="state_change_reason" /></td>
    <td><code>object</code></td>
    <td>The reason why the last state change occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The VPC configuration of the image builder.</td>
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
    <td><a href="#describe_image_builders"><CopyableCode code="describe_image_builders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.</td>
</tr>
<tr>
    <td><a href="#create_image_builder"><CopyableCode code="create_image_builder" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a></td>
    <td></td>
    <td>Creates an image builder. An image builder is a virtual machine that is used to create an image. The initial state of the builder is PENDING. When it is ready, the state is RUNNING.</td>
</tr>
<tr>
    <td><a href="#create_image_builder_streaming_url"><CopyableCode code="create_image_builder_streaming_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a URL to start an image builder streaming session.</td>
</tr>
<tr>
    <td><a href="#associate_software_to_image_builder"><CopyableCode code="associate_software_to_image_builder" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageBuilderName"><code>ImageBuilderName</code></a>, <a href="#parameter-SoftwareNames"><code>SoftwareNames</code></a></td>
    <td></td>
    <td>Associates license included application(s) with an existing image builder instance.</td>
</tr>
<tr>
    <td><a href="#delete_image_builder"><CopyableCode code="delete_image_builder" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified image builder and releases the capacity.</td>
</tr>
<tr>
    <td><a href="#disassociate_software_from_image_builder"><CopyableCode code="disassociate_software_from_image_builder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageBuilderName"><code>ImageBuilderName</code></a>, <a href="#parameter-SoftwareNames"><code>SoftwareNames</code></a></td>
    <td></td>
    <td>Removes license included application(s) association(s) from an image builder instance.</td>
</tr>
<tr>
    <td><a href="#start_software_deployment_to_image_builder"><CopyableCode code="start_software_deployment_to_image_builder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageBuilderName"><code>ImageBuilderName</code></a></td>
    <td></td>
    <td>Initiates license included applications deployment to an image builder instance.</td>
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
    defaultValue="describe_image_builders"
    values={[
        { label: 'describe_image_builders', value: 'describe_image_builders' }
    ]}
>
<TabItem value="describe_image_builders">

Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.

```sql
SELECT
access_endpoints,
appstream_agent_version,
arn,
created_time,
description,
disable_imdsv1,
display_name,
domain_join_info,
enable_default_internet_access,
iam_role_arn,
image_arn,
image_builder_errors,
instance_type,
latest_appstream_agent_version,
name,
network_access_configuration,
platform,
root_volume_config,
state,
state_change_reason,
vpc_config
FROM aws.appstream.image_builders
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_image_builder"
    values={[
        { label: 'create_image_builder', value: 'create_image_builder' },
        { label: 'create_image_builder_streaming_url', value: 'create_image_builder_streaming_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_image_builder">

Creates an image builder. An image builder is a virtual machine that is used to create an image. The initial state of the builder is PENDING. When it is ready, the state is RUNNING.

```sql
INSERT INTO aws.appstream.image_builders (
Name,
ImageName,
ImageArn,
InstanceType,
Description,
DisplayName,
VpcConfig,
IamRoleArn,
EnableDefaultInternetAccess,
DomainJoinInfo,
AppstreamAgentVersion,
Tags,
AccessEndpoints,
RootVolumeConfig,
SoftwaresToInstall,
SoftwaresToUninstall,
DisableIMDSV1,
region
)
SELECT 
'{{ Name }}',
'{{ ImageName }}',
'{{ ImageArn }}',
'{{ InstanceType }}' /* required */,
'{{ Description }}',
'{{ DisplayName }}',
'{{ VpcConfig }}',
'{{ IamRoleArn }}',
{{ EnableDefaultInternetAccess }},
'{{ DomainJoinInfo }}',
'{{ AppstreamAgentVersion }}',
'{{ Tags }}',
'{{ AccessEndpoints }}',
'{{ RootVolumeConfig }}',
'{{ SoftwaresToInstall }}',
'{{ SoftwaresToUninstall }}',
{{ DisableIMDSV1 }},
'{{ region }}'
RETURNING
image_builder
;
```
</TabItem>
<TabItem value="create_image_builder_streaming_url">

Creates a URL to start an image builder streaming session.

```sql
INSERT INTO aws.appstream.image_builders (
Name,
Validity,
region
)
SELECT 
'{{ Name }}',
{{ Validity }},
'{{ region }}'
RETURNING
expires,
streaming_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: image_builders
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the image_builders resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the image builder.
    - name: ImageName
      value: "{{ ImageName }}"
      description: |
        The name of the image used to create the image builder.
    - name: ImageArn
      value: "{{ ImageArn }}"
      description: |
        The ARN of the public, private, or shared image to use.
    - name: InstanceType
      value: "{{ InstanceType }}"
      description: |
        The instance type to use when launching the image builder. The following instance types are available: stream.standard.small stream.standard.medium stream.standard.large stream.compute.large stream.compute.xlarge stream.compute.2xlarge stream.compute.4xlarge stream.compute.8xlarge stream.memory.large stream.memory.xlarge stream.memory.2xlarge stream.memory.4xlarge stream.memory.8xlarge stream.memory.z1d.large stream.memory.z1d.xlarge stream.memory.z1d.2xlarge stream.memory.z1d.3xlarge stream.memory.z1d.6xlarge stream.memory.z1d.12xlarge stream.graphics.g4dn.xlarge stream.graphics.g4dn.2xlarge stream.graphics.g4dn.4xlarge stream.graphics.g4dn.8xlarge stream.graphics.g4dn.12xlarge stream.graphics.g4dn.16xlarge stream.graphics.g5.xlarge stream.graphics.g5.2xlarge stream.graphics.g5.4xlarge stream.graphics.g5.8xlarge stream.graphics.g5.16xlarge stream.graphics.g5.12xlarge stream.graphics.g5.24xlarge stream.graphics.g6.xlarge stream.graphics.g6.2xlarge stream.graphics.g6.4xlarge stream.graphics.g6.8xlarge stream.graphics.g6.16xlarge stream.graphics.g6.12xlarge stream.graphics.g6.24xlarge stream.graphics.gr6.4xlarge stream.graphics.gr6.8xlarge stream.graphics.g6f.large stream.graphics.g6f.xlarge stream.graphics.g6f.2xlarge stream.graphics.g6f.4xlarge stream.graphics.gr6f.4xlarge
    - name: Description
      value: "{{ Description }}"
      description: |
        The description to display.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The image builder name to display.
    - name: VpcConfig
      description: |
        The VPC configuration for the image builder. You can specify only one subnet.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role to apply to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) AssumeRole API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the appstream_machine_role credential profile on the instance. For more information, see Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances in the Amazon WorkSpaces Applications Administration Guide.
    - name: EnableDefaultInternetAccess
      value: {{ EnableDefaultInternetAccess }}
      description: |
        Enables or disables default internet access for the image builder.
    - name: DomainJoinInfo
      description: |
        The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain.
      value:
        DirectoryName: "{{ DirectoryName }}"
        OrganizationalUnitDistinguishedName: "{{ OrganizationalUnitDistinguishedName }}"
    - name: AppstreamAgentVersion
      value: "{{ AppstreamAgentVersion }}"
      description: |
        The version of the WorkSpaces Applications agent to use for this image builder. To use the latest version of the WorkSpaces Applications agent, specify [LATEST].
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to associate with the image builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: _ . : / = + \ - @ If you do not specify a value, the value is set to an empty string. For more information about tags, see Tagging Your Resources in the Amazon WorkSpaces Applications Administration Guide.
    - name: AccessEndpoints
      description: |
        The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the image builder only through the specified endpoints.
      value:
        - EndpointType: "{{ EndpointType }}"
          VpceId: "{{ VpceId }}"
    - name: RootVolumeConfig
      description: |
        The configuration for the root volume of the image builder. Use this to customize storage capacity from 200 GB up to 500 GB based on your application installation requirements.
      value:
        VolumeSizeInGb: {{ VolumeSizeInGb }}
    - name: SoftwaresToInstall
      value:
        - "{{ SoftwaresToInstall }}"
      description: |
        The list of license included applications to install on the image builder during creation. Possible values include the following: Microsoft_Office_2021_LTSC_Professional_Plus_32Bit Microsoft_Office_2021_LTSC_Professional_Plus_64Bit Microsoft_Office_2024_LTSC_Professional_Plus_32Bit Microsoft_Office_2024_LTSC_Professional_Plus_64Bit Microsoft_Visio_2021_LTSC_Professional_32Bit Microsoft_Visio_2021_LTSC_Professional_64Bit Microsoft_Visio_2024_LTSC_Professional_32Bit Microsoft_Visio_2024_LTSC_Professional_64Bit Microsoft_Project_2021_Professional_32Bit Microsoft_Project_2021_Professional_64Bit Microsoft_Project_2024_Professional_32Bit Microsoft_Project_2024_Professional_64Bit Microsoft_Office_2021_LTSC_Standard_32Bit Microsoft_Office_2021_LTSC_Standard_64Bit Microsoft_Office_2024_LTSC_Standard_32Bit Microsoft_Office_2024_LTSC_Standard_64Bit Microsoft_Visio_2021_LTSC_Standard_32Bit Microsoft_Visio_2021_LTSC_Standard_64Bit Microsoft_Visio_2024_LTSC_Standard_32Bit Microsoft_Visio_2024_LTSC_Standard_64Bit Microsoft_Project_2021_Standard_32Bit Microsoft_Project_2021_Standard_64Bit Microsoft_Project_2024_Standard_32Bit Microsoft_Project_2024_Standard_64Bit
    - name: SoftwaresToUninstall
      value:
        - "{{ SoftwaresToUninstall }}"
      description: |
        The list of license included applications to uninstall from the image builder during creation. Possible values include the following: Microsoft_Office_2021_LTSC_Professional_Plus_32Bit Microsoft_Office_2021_LTSC_Professional_Plus_64Bit Microsoft_Office_2024_LTSC_Professional_Plus_32Bit Microsoft_Office_2024_LTSC_Professional_Plus_64Bit Microsoft_Visio_2021_LTSC_Professional_32Bit Microsoft_Visio_2021_LTSC_Professional_64Bit Microsoft_Visio_2024_LTSC_Professional_32Bit Microsoft_Visio_2024_LTSC_Professional_64Bit Microsoft_Project_2021_Professional_32Bit Microsoft_Project_2021_Professional_64Bit Microsoft_Project_2024_Professional_32Bit Microsoft_Project_2024_Professional_64Bit Microsoft_Office_2021_LTSC_Standard_32Bit Microsoft_Office_2021_LTSC_Standard_64Bit Microsoft_Office_2024_LTSC_Standard_32Bit Microsoft_Office_2024_LTSC_Standard_64Bit Microsoft_Visio_2021_LTSC_Standard_32Bit Microsoft_Visio_2021_LTSC_Standard_64Bit Microsoft_Visio_2024_LTSC_Standard_32Bit Microsoft_Visio_2024_LTSC_Standard_64Bit Microsoft_Project_2021_Standard_32Bit Microsoft_Project_2021_Standard_64Bit Microsoft_Project_2024_Standard_32Bit Microsoft_Project_2024_Standard_64Bit
    - name: DisableIMDSV1
      value: {{ DisableIMDSV1 }}
      description: |
        Set to true to disable Instance Metadata Service Version 1 (IMDSv1) and enforce IMDSv2. Set to false to enable both IMDSv1 and IMDSv2. Before disabling IMDSv1, ensure your WorkSpaces Applications images are running the agent version or managed image update released on or after January 16, 2024 to support IMDSv2 enforcement.
    - name: Validity
      value: {{ Validity }}
      description: |
        The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 3600 seconds.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_software_to_image_builder"
    values={[
        { label: 'associate_software_to_image_builder', value: 'associate_software_to_image_builder' }
    ]}
>
<TabItem value="associate_software_to_image_builder">

Associates license included application(s) with an existing image builder instance.

```sql
UPDATE aws.appstream.image_builders
SET 
ImageBuilderName = '{{ ImageBuilderName }}',
SoftwareNames = '{{ SoftwareNames }}'
WHERE 
region = '{{ region }}' --required
AND ImageBuilderName = '{{ ImageBuilderName }}' --required
AND SoftwareNames = '{{ SoftwareNames }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image_builder"
    values={[
        { label: 'delete_image_builder', value: 'delete_image_builder' }
    ]}
>
<TabItem value="delete_image_builder">

Deletes the specified image builder and releases the capacity.

```sql
DELETE FROM aws.appstream.image_builders
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_software_from_image_builder"
    values={[
        { label: 'disassociate_software_from_image_builder', value: 'disassociate_software_from_image_builder' },
        { label: 'start_software_deployment_to_image_builder', value: 'start_software_deployment_to_image_builder' }
    ]}
>
<TabItem value="disassociate_software_from_image_builder">

Removes license included application(s) association(s) from an image builder instance.

```sql
EXEC aws.appstream.image_builders.disassociate_software_from_image_builder 
@region='{{ region }}' --required 
@@json=
'{
"ImageBuilderName": "{{ ImageBuilderName }}", 
"SoftwareNames": "{{ SoftwareNames }}"
}'
;
```
</TabItem>
<TabItem value="start_software_deployment_to_image_builder">

Initiates license included applications deployment to an image builder instance.

```sql
EXEC aws.appstream.image_builders.start_software_deployment_to_image_builder 
@region='{{ region }}' --required 
@@json=
'{
"ImageBuilderName": "{{ ImageBuilderName }}", 
"RetryFailedDeployments": {{ RetryFailedDeployments }}
}'
;
```
</TabItem>
</Tabs>
