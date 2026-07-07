--- 
title: container_group_definition_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - container_group_definition_versions
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

Creates, updates, deletes, gets or lists a <code>container_group_definition_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_group_definition_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.container_group_definition_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_container_group_definition_versions"
    values={[
        { label: 'list_container_group_definition_versions', value: 'list_container_group_definition_versions' }
    ]}
>
<TabItem value="list_container_group_definition_versions">

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
    <td><CopyableCode code="ContainerGroupDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to an Amazon GameLift Servers ContainerGroupDefinition resource. It uniquely identifies the resource across all Amazon Web Services Regions. Format is arn:aws:gamelift:&#91;region&#93;::containergroupdefinition/&#91;container group definition name&#93;:&#91;version&#93;. (pattern: &lt;code&gt;^arn:.*:containergroupdefinition\/&#91;a-zA-Z0-9\-&#93;+(:&#91;0-9&#93;+)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ContainerGroupType" /></td>
    <td><code>string</code></td>
    <td>The type of container group. Container group type determines how Amazon GameLift Servers deploys the container group on each fleet instance. (GAME_SERVER, PER_INSTANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerContainerDefinition" /></td>
    <td><code>object</code></td>
    <td>The definition for the game server container in this group. This property is used only when the container group type is GAME_SERVER. This container definition specifies a container image with the game server build.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A descriptive identifier for the container group definition. The name value is unique in an Amazon Web Services Region. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingSystem" /></td>
    <td><code>string</code></td>
    <td>The platform that all containers in the container group definition run on. Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See Migrate to server SDK version 5. (AMAZON_LINUX_2023)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Current status of the container group definition resource. Values include: COPYING -- Amazon GameLift Servers is in the process of making copies of all container images that are defined in the group. While in this state, the resource can't be used to create a container fleet. READY -- Amazon GameLift Servers has copied the registry images for all containers that are defined in the group. You can use a container group definition in this status to create a container fleet. FAILED -- Amazon GameLift Servers failed to create a valid container group definition resource. For more details on the cause of the failure, see StatusReason. A container group definition resource in failed status will be deleted within a few minutes. (READY, COPYING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information about a container group definition that's in FAILED status. Possible reasons include: An internal issue prevented Amazon GameLift Servers from creating the container group definition resource. Delete the failed resource and call CreateContainerGroupDefinitionagain. An access-denied message means that you don't have permissions to access the container image on ECR. See IAM permission examples for help setting up required IAM permissions for Amazon GameLift Servers. The ImageUri value for at least one of the containers in the container group definition was invalid or not found in the current Amazon Web Services account. At least one of the container images referenced in the container group definition exceeds the allowed size. For size limits, see Amazon GameLift Servers endpoints and quotas. At least one of the container images referenced in the container group definition uses a different operating system than the one defined for the container group.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportContainerDefinitions" /></td>
    <td><code>array</code></td>
    <td>The set of definitions for support containers in this group. A container group definition might have zero support container definitions. Support container can be used in any type of container group.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalMemoryLimitMebibytes" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in MiB) on a fleet instance to allocate for the container group. All containers in the group share these resources. You can set a limit for each container definition in the group. If individual containers have limits, this total value must be greater than any individual container's memory limit.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalVcpuLimit" /></td>
    <td><code>number (double)</code></td>
    <td>The amount of vCPU units on a fleet instance to allocate for the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share these resources. You can set a limit for each container definition in the group. If individual containers have limits, this total value must be equal to or greater than the sum of the limits for each container in the group.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionDescription" /></td>
    <td><code>string</code></td>
    <td>An optional description that was provided for a container group definition update. Each version can have a unique description.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionNumber" /></td>
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
    <td><a href="#list_container_group_definition_versions"><CopyableCode code="list_container_group_definition_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Retrieves all versions of a container group definition. Use the pagination parameters to retrieve results in a set of sequential pages. Request options: Get all versions of a specified container group definition. Specify the container group definition name or ARN value. (If the ARN value has a version number, it's ignored.) Results: If successful, this operation returns the complete properties of a set of container group definition versions that match the request. This operation returns the list of container group definitions in descending version order (latest first). Learn more Manage a container group definition</td>
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
    defaultValue="list_container_group_definition_versions"
    values={[
        { label: 'list_container_group_definition_versions', value: 'list_container_group_definition_versions' }
    ]}
>
<TabItem value="list_container_group_definition_versions">

This API works with the following fleet types: Container Retrieves all versions of a container group definition. Use the pagination parameters to retrieve results in a set of sequential pages. Request options: Get all versions of a specified container group definition. Specify the container group definition name or ARN value. (If the ARN value has a version number, it's ignored.) Results: If successful, this operation returns the complete properties of a set of container group definition versions that match the request. This operation returns the list of container group definitions in descending version order (latest first). Learn more Manage a container group definition

```sql
SELECT
ContainerGroupDefinitionArn,
ContainerGroupType,
CreationTime,
GameServerContainerDefinition,
Name,
OperatingSystem,
Status,
StatusReason,
SupportContainerDefinitions,
TotalMemoryLimitMebibytes,
TotalVcpuLimit,
VersionDescription,
VersionNumber
FROM aws.gamelift.container_group_definition_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
