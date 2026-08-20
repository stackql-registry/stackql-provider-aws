--- 
title: container_group_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - container_group_definitions
  - gamelift
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

Creates, updates, deletes, gets or lists a <code>container_group_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_group_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.container_group_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_container_group_definition"
    values={[
        { label: 'describe_container_group_definition', value: 'describe_container_group_definition' }
    ]}
>
<TabItem value="describe_container_group_definition">

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
    <td><CopyableCode code="container_group_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to an Amazon GameLift Servers ContainerGroupDefinition resource. It uniquely identifies the resource across all Amazon Web Services Regions. Format is arn:aws:gamelift:&#91;region&#93;::containergroupdefinition/&#91;container group definition name&#93;:&#91;version&#93;. (pattern: &lt;code&gt;^arn:.*:containergroupdefinition\/&#91;a-zA-Z0-9\-&#93;+(:&#91;0-9&#93;+)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_group_type" /></td>
    <td><code>string</code></td>
    <td>The type of container group. Container group type determines how Amazon GameLift Servers deploys the container group on each fleet instance. (GAME_SERVER, PER_INSTANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_container_definition" /></td>
    <td><code>object</code></td>
    <td>The definition for the game server container in this group. This property is used only when the container group type is GAME_SERVER. This container definition specifies a container image with the game server build.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A descriptive identifier for the container group definition. The name value is unique in an Amazon Web Services Region. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>string</code></td>
    <td>The platform that all containers in the container group definition run on. Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See Migrate to server SDK version 5. (AMAZON_LINUX_2023)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the container group definition resource. Values include: COPYING -- Amazon GameLift Servers is in the process of making copies of all container images that are defined in the group. While in this state, the resource can't be used to create a container fleet. READY -- Amazon GameLift Servers has copied the registry images for all containers that are defined in the group. You can use a container group definition in this status to create a container fleet. FAILED -- Amazon GameLift Servers failed to create a valid container group definition resource. For more details on the cause of the failure, see StatusReason. A container group definition resource in failed status will be deleted within a few minutes. (READY, COPYING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about a container group definition that's in FAILED status. Possible reasons include: An internal issue prevented Amazon GameLift Servers from creating the container group definition resource. Delete the failed resource and call CreateContainerGroupDefinitionagain. An access-denied message means that you don't have permissions to access the container image on ECR. See IAM permission examples for help setting up required IAM permissions for Amazon GameLift Servers. The ImageUri value for at least one of the containers in the container group definition was invalid or not found in the current Amazon Web Services account. At least one of the container images referenced in the container group definition exceeds the allowed size. For size limits, see Amazon GameLift Servers endpoints and quotas. At least one of the container images referenced in the container group definition uses a different operating system than the one defined for the container group.</td>
</tr>
<tr>
    <td><CopyableCode code="support_container_definitions" /></td>
    <td><code>array</code></td>
    <td>The set of definitions for support containers in this group. A container group definition might have zero support container definitions. Support container can be used in any type of container group.</td>
</tr>
<tr>
    <td><CopyableCode code="total_memory_limit_mebibytes" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in MiB) on a fleet instance to allocate for the container group. All containers in the group share these resources. You can set a limit for each container definition in the group. If individual containers have limits, this total value must be greater than any individual container's memory limit.</td>
</tr>
<tr>
    <td><CopyableCode code="total_vcpu_limit" /></td>
    <td><code>number (double)</code></td>
    <td>The amount of vCPU units on a fleet instance to allocate for the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share these resources. You can set a limit for each container definition in the group. If individual containers have limits, this total value must be equal to or greater than the sum of the limits for each container in the group.</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>An optional description that was provided for a container group definition update. Each version can have a unique description.</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer</code></td>
    <td>Indicates the version of a particular container group definition. This number is incremented automatically when you update a container group definition. You can view, update, or delete individual versions or the entire container group definition.</td>
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
    <td><a href="#describe_container_group_definition"><CopyableCode code="describe_container_group_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Retrieves the properties of a container group definition, including all container definitions in the group. Request options: Retrieve the latest version of a container group definition. Specify the container group definition name only, or use an ARN value without a version number. Retrieve a particular version. Specify the container group definition name and a version number, or use an ARN value that includes the version number. Results: If successful, this operation returns the complete properties of a container group definition version. Learn more Manage a container group definition</td>
</tr>
<tr>
    <td><a href="#create_container_group_definition"><CopyableCode code="create_container_group_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TotalMemoryLimitMebibytes"><code>TotalMemoryLimitMebibytes</code></a>, <a href="#parameter-TotalVcpuLimit"><code>TotalVcpuLimit</code></a>, <a href="#parameter-OperatingSystem"><code>OperatingSystem</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Creates a ContainerGroupDefinition that describes a set of containers for hosting your game server with Amazon GameLift Servers managed containers hosting. An Amazon GameLift Servers container group is similar to a container task or pod. Use container group definitions when you create a container fleet with CreateContainerFleet. A container group definition determines how Amazon GameLift Servers deploys your containers to each instance in a container fleet. You can maintain multiple versions of a container group definition. There are two types of container groups: A game server container group has the containers that run your game server application and supporting software. A game server container group can have these container types: Game server container. This container runs your game server. You can define one game server container in a game server container group. Support container. This container runs software in parallel with your game server. You can define up to 8 support containers in a game server group. When building a game server container group definition, you can choose to bundle your game server executable and all dependent software into a single game server container. Alternatively, you can separate the software into one game server container and one or more support containers. On a container fleet instance, a game server container group can be deployed multiple times (depending on the compute resources of the instance). This means that all containers in the container group are replicated together. A per-instance container group has containers for processes that aren't replicated on a container fleet instance. This might include background services, logging, test processes, or processes that need to persist independently of the game server container group. When building a per-instance container group, you can define up to 10 support containers. This operation requires Identity and Access Management (IAM) permissions to access container images in Amazon ECR repositories. See IAM permissions for Amazon GameLift Servers for help setting the appropriate permissions. Request options Use this operation to make the following types of requests. You can specify values for the minimum required parameters and customize optional values later. Create a game server container group definition. Provide the following required parameter values: Name ContainerGroupType (GAME_SERVER) OperatingSystem TotalMemoryLimitMebibytes TotalVcpuLimit At least one GameServerContainerDefinition ContainerName ImageUrl PortConfiguration ServerSdkVersion Create a per-instance container group definition. Provide the following required parameter values: Name ContainerGroupType (PER_INSTANCE) OperatingSystem TotalMemoryLimitMebibytes TotalVcpuLimit At least one SupportContainerDefinition ContainerName ImageUrl Results If successful, this request creates a ContainerGroupDefinition resource and assigns a unique ARN value. You can update most properties of a container group definition by calling UpdateContainerGroupDefinition, and optionally save the update as a new version.</td>
</tr>
<tr>
    <td><a href="#update_container_group_definition"><CopyableCode code="update_container_group_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Updates properties in an existing container group definition. This operation doesn't replace the definition. Instead, it creates a new version of the definition and saves it separately. You can access all versions that you choose to retain. The only property you can't update is the container group type. Request options: Update based on the latest version of the container group definition. Specify the container group definition name only, or use an ARN value without a version number. Provide updated values for the properties that you want to change only. All other values remain the same as the latest version. Update based on a specific version of the container group definition. Specify the container group definition name and a source version number, or use an ARN value with a version number. Provide updated values for the properties that you want to change only. All other values remain the same as the source version. Change a game server container definition. Provide a complete set of container definitions, including the updated definition. Add or change a support container definition. Provide a complete set of container definitions, including the updated definition. Remove a support container definition. Provide a complete set of container definitions, excluding the definition to remove. If the container group has only one support container definition, provide an empty set. Results: If successful, this operation returns the complete properties of the new container group definition version. If the container group definition version is used in an active fleets, the update automatically initiates a new fleet deployment of the new version. You can track a fleet's deployments using ListFleetDeployments.</td>
</tr>
<tr>
    <td><a href="#delete_container_group_definition"><CopyableCode code="delete_container_group_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Request options: Deletes a container group definition. Delete an entire container group definition, including all versions. Specify the container group definition name, or use an ARN value without the version number. Delete a particular version. Specify the container group definition name and a version number, or use an ARN value that includes the version number. Keep the newest versions and delete all older versions. Specify the container group definition name and the number of versions to retain. For example, set VersionCountToRetain to 5 to delete all but the five most recent versions. Result If successful, Amazon GameLift Servers removes the container group definition versions that you request deletion for. This request will fail for any requested versions if the following is true: If the version is being used in an active fleet If the version is being deployed to a fleet in a deployment that's currently in progress. If the version is designated as a rollback definition in a fleet deployment that's currently in progress. Learn more Manage a container group definition</td>
</tr>
<tr>
    <td><a href="#list_container_group_definitions"><CopyableCode code="list_container_group_definitions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Retrieves container group definitions for the Amazon Web Services account and Amazon Web Services Region. Use the pagination parameters to retrieve results in a set of sequential pages. This operation returns only the latest version of each definition. To retrieve all versions of a container group definition, use ListContainerGroupDefinitionVersions. Request options: Retrieve the most recent versions of all container group definitions. Retrieve the most recent versions of all container group definitions, filtered by type. Specify the container group type to filter on. Results: If successful, this operation returns the complete properties of a set of container group definition versions that match the request. This operation returns the list of container group definitions in no particular order.</td>
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
    defaultValue="describe_container_group_definition"
    values={[
        { label: 'describe_container_group_definition', value: 'describe_container_group_definition' }
    ]}
>
<TabItem value="describe_container_group_definition">

This API works with the following fleet types: Container Retrieves the properties of a container group definition, including all container definitions in the group. Request options: Retrieve the latest version of a container group definition. Specify the container group definition name only, or use an ARN value without a version number. Retrieve a particular version. Specify the container group definition name and a version number, or use an ARN value that includes the version number. Results: If successful, this operation returns the complete properties of a container group definition version. Learn more Manage a container group definition

```sql
SELECT
container_group_definition_arn,
container_group_type,
creation_time,
game_server_container_definition,
name,
operating_system,
status,
status_reason,
support_container_definitions,
total_memory_limit_mebibytes,
total_vcpu_limit,
version_description,
version_number
FROM aws.gamelift.container_group_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_container_group_definition"
    values={[
        { label: 'create_container_group_definition', value: 'create_container_group_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_container_group_definition">

This API works with the following fleet types: Container Creates a ContainerGroupDefinition that describes a set of containers for hosting your game server with Amazon GameLift Servers managed containers hosting. An Amazon GameLift Servers container group is similar to a container task or pod. Use container group definitions when you create a container fleet with CreateContainerFleet. A container group definition determines how Amazon GameLift Servers deploys your containers to each instance in a container fleet. You can maintain multiple versions of a container group definition. There are two types of container groups: A game server container group has the containers that run your game server application and supporting software. A game server container group can have these container types: Game server container. This container runs your game server. You can define one game server container in a game server container group. Support container. This container runs software in parallel with your game server. You can define up to 8 support containers in a game server group. When building a game server container group definition, you can choose to bundle your game server executable and all dependent software into a single game server container. Alternatively, you can separate the software into one game server container and one or more support containers. On a container fleet instance, a game server container group can be deployed multiple times (depending on the compute resources of the instance). This means that all containers in the container group are replicated together. A per-instance container group has containers for processes that aren't replicated on a container fleet instance. This might include background services, logging, test processes, or processes that need to persist independently of the game server container group. When building a per-instance container group, you can define up to 10 support containers. This operation requires Identity and Access Management (IAM) permissions to access container images in Amazon ECR repositories. See IAM permissions for Amazon GameLift Servers for help setting the appropriate permissions. Request options Use this operation to make the following types of requests. You can specify values for the minimum required parameters and customize optional values later. Create a game server container group definition. Provide the following required parameter values: Name ContainerGroupType (GAME_SERVER) OperatingSystem TotalMemoryLimitMebibytes TotalVcpuLimit At least one GameServerContainerDefinition ContainerName ImageUrl PortConfiguration ServerSdkVersion Create a per-instance container group definition. Provide the following required parameter values: Name ContainerGroupType (PER_INSTANCE) OperatingSystem TotalMemoryLimitMebibytes TotalVcpuLimit At least one SupportContainerDefinition ContainerName ImageUrl Results If successful, this request creates a ContainerGroupDefinition resource and assigns a unique ARN value. You can update most properties of a container group definition by calling UpdateContainerGroupDefinition, and optionally save the update as a new version.

```sql
INSERT INTO aws.gamelift.container_group_definitions (
Name,
ContainerGroupType,
TotalMemoryLimitMebibytes,
TotalVcpuLimit,
GameServerContainerDefinition,
SupportContainerDefinitions,
OperatingSystem,
VersionDescription,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ ContainerGroupType }}',
{{ TotalMemoryLimitMebibytes }} /* required */,
{{ TotalVcpuLimit }} /* required */,
'{{ GameServerContainerDefinition }}',
'{{ SupportContainerDefinitions }}',
'{{ OperatingSystem }}' /* required */,
'{{ VersionDescription }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
container_group_definition
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: container_group_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the container_group_definitions resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A descriptive identifier for the container group definition. The name value must be unique in an Amazon Web Services Region.
    - name: ContainerGroupType
      value: "{{ ContainerGroupType }}"
      description: |
        The type of container group being defined. Container group type determines how Amazon GameLift Servers deploys the container group on each fleet instance. Default value: GAME_SERVER
      valid_values: ['GAME_SERVER', 'PER_INSTANCE']
    - name: TotalMemoryLimitMebibytes
      value: {{ TotalMemoryLimitMebibytes }}
      description: |
        The maximum amount of memory (in MiB) to allocate to the container group. All containers in the group share this memory. If you specify memory limits for an individual container, the total value must be greater than any individual container's memory limit. Default value: 1024
    - name: TotalVcpuLimit
      value: {{ TotalVcpuLimit }}
      description: |
        The maximum amount of vCPU units to allocate to the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share this memory. If you specify vCPU limits for individual containers, the total value must be equal to or greater than the sum of the CPU limits for all containers in the group. Default value: 1
    - name: GameServerContainerDefinition
      description: |
        The definition for the game server container in this group. Define a game server container only when the container group type is GAME_SERVER. Game server containers specify a container image with your game server build. You can pass in your container definitions as a JSON file.
      value:
        ContainerName: "{{ ContainerName }}"
        DependsOn:
          - ContainerName: "{{ ContainerName }}"
            Condition: "{{ Condition }}"
        MountPoints:
          - InstancePath: "{{ InstancePath }}"
            ContainerPath: "{{ ContainerPath }}"
            AccessLevel: "{{ AccessLevel }}"
        EnvironmentOverride:
          - Name: "{{ Name }}"
            Value: "{{ Value }}"
        ImageUri: "{{ ImageUri }}"
        PortConfiguration:
          ContainerPortRanges:
            - FromPort: {{ FromPort }}
              ToPort: {{ ToPort }}
              Protocol: "{{ Protocol }}"
        ServerSdkVersion: "{{ ServerSdkVersion }}"
        LinuxCapabilities:
          Include:
            - "{{ Include }}"
    - name: SupportContainerDefinitions
      description: |
        One or more definition for support containers in this group. You can define a support container in any type of container group. You can pass in your container definitions as a JSON file.
      value:
        - ContainerName: "{{ ContainerName }}"
          DependsOn: "{{ DependsOn }}"
          MountPoints: "{{ MountPoints }}"
          EnvironmentOverride: "{{ EnvironmentOverride }}"
          Essential: {{ Essential }}
          HealthCheck:
            Command:
              - "{{ Command }}"
            Interval: {{ Interval }}
            Retries: {{ Retries }}
            StartPeriod: {{ StartPeriod }}
            Timeout: {{ Timeout }}
          ImageUri: "{{ ImageUri }}"
          MemoryHardLimitMebibytes: {{ MemoryHardLimitMebibytes }}
          PortConfiguration:
            ContainerPortRanges:
              - FromPort: {{ FromPort }}
                ToPort: {{ ToPort }}
                Protocol: "{{ Protocol }}"
          Vcpu: {{ Vcpu }}
          LinuxCapabilities:
            Include:
              - "{{ Include }}"
    - name: OperatingSystem
      value: "{{ OperatingSystem }}"
      description: |
        The platform that all containers in the group use. Containers in a group must run on the same operating system. Default value: AMAZON_LINUX_2023 Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See Migrate to server SDK version 5.
      valid_values: ['AMAZON_LINUX_2023']
    - name: VersionDescription
      value: "{{ VersionDescription }}"
      description: |
        A description for the initial version of this container group definition.
    - name: Tags
      description: |
        A list of labels to assign to the container group definition resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_container_group_definition"
    values={[
        { label: 'update_container_group_definition', value: 'update_container_group_definition' }
    ]}
>
<TabItem value="update_container_group_definition">

This API works with the following fleet types: Container Updates properties in an existing container group definition. This operation doesn't replace the definition. Instead, it creates a new version of the definition and saves it separately. You can access all versions that you choose to retain. The only property you can't update is the container group type. Request options: Update based on the latest version of the container group definition. Specify the container group definition name only, or use an ARN value without a version number. Provide updated values for the properties that you want to change only. All other values remain the same as the latest version. Update based on a specific version of the container group definition. Specify the container group definition name and a source version number, or use an ARN value with a version number. Provide updated values for the properties that you want to change only. All other values remain the same as the source version. Change a game server container definition. Provide a complete set of container definitions, including the updated definition. Add or change a support container definition. Provide a complete set of container definitions, including the updated definition. Remove a support container definition. Provide a complete set of container definitions, excluding the definition to remove. If the container group has only one support container definition, provide an empty set. Results: If successful, this operation returns the complete properties of the new container group definition version. If the container group definition version is used in an active fleets, the update automatically initiates a new fleet deployment of the new version. You can track a fleet's deployments using ListFleetDeployments.

```sql
UPDATE aws.gamelift.container_group_definitions
SET 
Name = '{{ Name }}',
GameServerContainerDefinition = '{{ GameServerContainerDefinition }}',
SupportContainerDefinitions = '{{ SupportContainerDefinitions }}',
TotalMemoryLimitMebibytes = {{ TotalMemoryLimitMebibytes }},
TotalVcpuLimit = {{ TotalVcpuLimit }},
VersionDescription = '{{ VersionDescription }}',
SourceVersionNumber = {{ SourceVersionNumber }},
OperatingSystem = '{{ OperatingSystem }}'
WHERE 
region = '{{ region }}' --required
RETURNING
container_group_definition;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_container_group_definition"
    values={[
        { label: 'delete_container_group_definition', value: 'delete_container_group_definition' }
    ]}
>
<TabItem value="delete_container_group_definition">

This API works with the following fleet types: Container Request options: Deletes a container group definition. Delete an entire container group definition, including all versions. Specify the container group definition name, or use an ARN value without the version number. Delete a particular version. Specify the container group definition name and a version number, or use an ARN value that includes the version number. Keep the newest versions and delete all older versions. Specify the container group definition name and the number of versions to retain. For example, set VersionCountToRetain to 5 to delete all but the five most recent versions. Result If successful, Amazon GameLift Servers removes the container group definition versions that you request deletion for. This request will fail for any requested versions if the following is true: If the version is being used in an active fleet If the version is being deployed to a fleet in a deployment that's currently in progress. If the version is designated as a rollback definition in a fleet deployment that's currently in progress. Learn more Manage a container group definition

```sql
DELETE FROM aws.gamelift.container_group_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_container_group_definitions"
    values={[
        { label: 'list_container_group_definitions', value: 'list_container_group_definitions' }
    ]}
>
<TabItem value="list_container_group_definitions">

This API works with the following fleet types: Container Retrieves container group definitions for the Amazon Web Services account and Amazon Web Services Region. Use the pagination parameters to retrieve results in a set of sequential pages. This operation returns only the latest version of each definition. To retrieve all versions of a container group definition, use ListContainerGroupDefinitionVersions. Request options: Retrieve the most recent versions of all container group definitions. Retrieve the most recent versions of all container group definitions, filtered by type. Specify the container group type to filter on. Results: If successful, this operation returns the complete properties of a set of container group definition versions that match the request. This operation returns the list of container group definitions in no particular order.

```sql
EXEC aws.gamelift.container_group_definitions.list_container_group_definitions 
@region='{{ region }}' --required 
@@json=
'{
"ContainerGroupType": "{{ ContainerGroupType }}", 
"Limit": {{ Limit }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
