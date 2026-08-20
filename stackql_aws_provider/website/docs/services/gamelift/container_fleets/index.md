--- 
title: container_fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - container_fleets
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

Creates, updates, deletes, gets or lists a <code>container_fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.container_fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_container_fleet"
    values={[
        { label: 'describe_container_fleet', value: 'describe_container_fleet' },
        { label: 'list_container_fleets', value: 'list_container_fleets' }
    ]}
>
<TabItem value="describe_container_fleet">

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
    <td><CopyableCode code="billing_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the fleet uses On-Demand or Spot instances for this fleet. Learn more about when to use On-Demand versus Spot Instances. You can't update this fleet property. By default, this property is set to ON_DEMAND. (ON_DEMAND, SPOT)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_details" /></td>
    <td><code>object</code></td>
    <td>Information about the most recent deployment for the container fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A meaningful description of the container fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. In a GameLift fleet ARN, the resource ID matches the FleetId value. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the container fleet to retrieve. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_role_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for an Identity and Access Management (IAM) role with permissions to run your containers on resources that are managed by Amazon GameLift Servers. See Set up an IAM service role. This fleet property can't be changed. (pattern: &lt;code&gt;^arn:.*:role\/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_container_group_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to the fleet's game server container group. The ARN value also identifies the specific container group definition version in use. (pattern: &lt;code&gt;^arn:.*:containergroupdefinition\/&#91;a-zA-Z0-9\-&#93;+(:&#91;0-9&#93;+)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_container_group_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet's game server container group definition, which describes how to deploy containers with your game server build and support software onto each fleet instance. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_container_groups_per_instance" /></td>
    <td><code>integer</code></td>
    <td>The number of times to replicate the game server container group on each fleet instance.</td>
</tr>
<tr>
    <td><CopyableCode code="game_session_creation_limit_policy" /></td>
    <td><code>object</code></td>
    <td>A policy that limits the number of game sessions that each individual player can create on instances in this fleet. The limit applies for a specified span of time.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_connection_port_range" /></td>
    <td><code>object</code></td>
    <td>The set of port numbers to open on each instance in a container fleet. Connection ports are used by inbound traffic to connect with processes that are running in containers on the fleet. The port range must not overlap with the Amazon GameLift Servers reserved port range 4092-4191. This range is reserved for internal Amazon GameLift Servers services.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_inbound_permissions" /></td>
    <td><code>array</code></td>
    <td>The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type to use for all instances in the fleet. Instance type determines the computing resources and processing power that's available to host your game servers. This includes including CPU, memory, storage, and networking capacity. You can't update this fleet property.</td>
</tr>
<tr>
    <td><CopyableCode code="location_attributes" /></td>
    <td><code>array</code></td>
    <td>Information about the container fleet's remote locations where fleet instances are deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="log_configuration" /></td>
    <td><code>object</code></td>
    <td>The method that is used to collect container logs for the fleet. Amazon GameLift Servers saves all standard output for each container in logs, including game session logs. CLOUDWATCH -- Send logs to an Amazon CloudWatch log group that you define. Each container emits a log stream, which is organized in the log group. S3 -- Store logs in an Amazon S3 bucket that you define. NONE -- Don't collect container logs.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_game_server_container_groups_per_instance" /></td>
    <td><code>integer</code></td>
    <td>The calculated maximum number of game server container group that can be deployed on each fleet instance. The calculation depends on the resource needs of the container group and the CPU and memory resources of the fleet's instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_groups" /></td>
    <td><code>array</code></td>
    <td>The name of an Amazon Web Services CloudWatch metric group to add this fleet to. Metric groups aggregate metrics for multiple fleets.</td>
</tr>
<tr>
    <td><CopyableCode code="new_game_session_protection_policy" /></td>
    <td><code>string</code></td>
    <td>Determines whether Amazon GameLift Servers can shut down game sessions on the fleet that are actively running and hosting players. Amazon GameLift Servers might prompt an instance shutdown when scaling down fleet capacity or when retiring unhealthy instances. You can also set game session protection for individual game sessions using UpdateGameSession. NoProtection -- Game sessions can be shut down during active gameplay. FullProtection -- Game sessions in ACTIVE status can't be shut down. (NoProtection, FullProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="per_instance_container_group_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to the fleet's per-instance container group. The ARN value also identifies the specific container group definition version in use. (pattern: &lt;code&gt;^arn:.*:containergroupdefinition\/&#91;a-zA-Z0-9\-&#93;+(:&#91;0-9&#93;+)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="per_instance_container_group_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet's per-instance container group definition. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="player_gateway_mode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether player gateway is enabled for this container fleet. Player gateway provides benefits such as DDoS protection with negligible impact to latency. If ENABLED or REQUIRED, game clients can use player gateway to connect with the game server. If DISABLED, game clients cannot use player gateway. Instead, they have to directly connect to the game server. (DISABLED, ENABLED, REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the container fleet. PENDING -- A new container fleet has been requested. CREATING -- A new container fleet resource is being created. CREATED -- A new container fleet resource has been created. No fleet instances have been deployed. ACTIVATING -- New container fleet instances are being deployed. ACTIVE -- The container fleet has been deployed and is ready to host game sessions. UPDATING -- Updates to the container fleet is being updated. A deployment is in progress. EXPIRED -- The container fleet has been expired. The fleet is scaled down to zero instances and cannot host new game sessions. (PENDING, CREATING, CREATED, ACTIVATING, ACTIVE, UPDATING, DELETING, EXPIRED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_container_fleets">

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
    <td><CopyableCode code="billing_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the fleet uses On-Demand or Spot instances for this fleet. Learn more about when to use On-Demand versus Spot Instances. You can't update this fleet property. By default, this property is set to ON_DEMAND. (ON_DEMAND, SPOT)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_details" /></td>
    <td><code>object</code></td>
    <td>Information about the most recent deployment for the container fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A meaningful description of the container fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. In a GameLift fleet ARN, the resource ID matches the FleetId value. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the container fleet to retrieve. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_role_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for an Identity and Access Management (IAM) role with permissions to run your containers on resources that are managed by Amazon GameLift Servers. See Set up an IAM service role. This fleet property can't be changed. (pattern: &lt;code&gt;^arn:.*:role\/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_container_group_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to the fleet's game server container group. The ARN value also identifies the specific container group definition version in use. (pattern: &lt;code&gt;^arn:.*:containergroupdefinition\/&#91;a-zA-Z0-9\-&#93;+(:&#91;0-9&#93;+)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_container_group_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet's game server container group definition, which describes how to deploy containers with your game server build and support software onto each fleet instance. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_container_groups_per_instance" /></td>
    <td><code>integer</code></td>
    <td>The number of times to replicate the game server container group on each fleet instance.</td>
</tr>
<tr>
    <td><CopyableCode code="game_session_creation_limit_policy" /></td>
    <td><code>object</code></td>
    <td>A policy that limits the number of game sessions that each individual player can create on instances in this fleet. The limit applies for a specified span of time.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_connection_port_range" /></td>
    <td><code>object</code></td>
    <td>The set of port numbers to open on each instance in a container fleet. Connection ports are used by inbound traffic to connect with processes that are running in containers on the fleet. The port range must not overlap with the Amazon GameLift Servers reserved port range 4092-4191. This range is reserved for internal Amazon GameLift Servers services.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_inbound_permissions" /></td>
    <td><code>array</code></td>
    <td>The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type to use for all instances in the fleet. Instance type determines the computing resources and processing power that's available to host your game servers. This includes including CPU, memory, storage, and networking capacity. You can't update this fleet property.</td>
</tr>
<tr>
    <td><CopyableCode code="location_attributes" /></td>
    <td><code>array</code></td>
    <td>Information about the container fleet's remote locations where fleet instances are deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="log_configuration" /></td>
    <td><code>object</code></td>
    <td>The method that is used to collect container logs for the fleet. Amazon GameLift Servers saves all standard output for each container in logs, including game session logs. CLOUDWATCH -- Send logs to an Amazon CloudWatch log group that you define. Each container emits a log stream, which is organized in the log group. S3 -- Store logs in an Amazon S3 bucket that you define. NONE -- Don't collect container logs.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_game_server_container_groups_per_instance" /></td>
    <td><code>integer</code></td>
    <td>The calculated maximum number of game server container group that can be deployed on each fleet instance. The calculation depends on the resource needs of the container group and the CPU and memory resources of the fleet's instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_groups" /></td>
    <td><code>array</code></td>
    <td>The name of an Amazon Web Services CloudWatch metric group to add this fleet to. Metric groups aggregate metrics for multiple fleets.</td>
</tr>
<tr>
    <td><CopyableCode code="new_game_session_protection_policy" /></td>
    <td><code>string</code></td>
    <td>Determines whether Amazon GameLift Servers can shut down game sessions on the fleet that are actively running and hosting players. Amazon GameLift Servers might prompt an instance shutdown when scaling down fleet capacity or when retiring unhealthy instances. You can also set game session protection for individual game sessions using UpdateGameSession. NoProtection -- Game sessions can be shut down during active gameplay. FullProtection -- Game sessions in ACTIVE status can't be shut down. (NoProtection, FullProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="per_instance_container_group_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to the fleet's per-instance container group. The ARN value also identifies the specific container group definition version in use. (pattern: &lt;code&gt;^arn:.*:containergroupdefinition\/&#91;a-zA-Z0-9\-&#93;+(:&#91;0-9&#93;+)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="per_instance_container_group_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet's per-instance container group definition. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="player_gateway_mode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether player gateway is enabled for this container fleet. Player gateway provides benefits such as DDoS protection with negligible impact to latency. If ENABLED or REQUIRED, game clients can use player gateway to connect with the game server. If DISABLED, game clients cannot use player gateway. Instead, they have to directly connect to the game server. (DISABLED, ENABLED, REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the container fleet. PENDING -- A new container fleet has been requested. CREATING -- A new container fleet resource is being created. CREATED -- A new container fleet resource has been created. No fleet instances have been deployed. ACTIVATING -- New container fleet instances are being deployed. ACTIVE -- The container fleet has been deployed and is ready to host game sessions. UPDATING -- Updates to the container fleet is being updated. A deployment is in progress. EXPIRED -- The container fleet has been expired. The fleet is scaled down to zero instances and cannot host new game sessions. (PENDING, CREATING, CREATED, ACTIVATING, ACTIVE, UPDATING, DELETING, EXPIRED)</td>
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
    <td><a href="#describe_container_fleet"><CopyableCode code="describe_container_fleet" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Retrieves the properties for a container fleet. When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. Request options Get container fleet properties for a single fleet. Provide either the fleet ID or ARN value. Results If successful, a ContainerFleet object is returned. This object includes the fleet properties, including information about the most recent deployment. Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</td>
</tr>
<tr>
    <td><a href="#list_container_fleets"><CopyableCode code="list_container_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Retrieves a collection of container fleet resources in an Amazon Web Services Region. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only. Request options Get a list of all fleets. Call this operation without specifying a container group definition. Get a list of fleets filtered by container group definition. Provide the container group definition name or ARN value. To get a list of all Amazon GameLift Servers Realtime fleets with a specific configuration script, provide the script ID. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, this operation returns a collection of container fleets that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve. Fleet IDs are returned in no particular order.</td>
</tr>
<tr>
    <td><a href="#create_container_fleet"><CopyableCode code="create_container_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetRoleArn"><code>FleetRoleArn</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Creates a managed fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your containerized game servers. Use this operation to define how to deploy a container architecture onto each fleet instance and configure fleet settings. You can create a container fleet in any Amazon Web Services Regions that Amazon GameLift Servers supports for multi-location fleets. A container fleet can be deployed to a single location or multiple locations. Container fleets are deployed with Amazon Linux 2023 as the instance operating system. Define the fleet's container architecture using container group definitions. Each fleet can have one of the following container group types: The game server container group runs your game server build and dependent software. Amazon GameLift Servers deploys one or more replicas of this container group to each fleet instance. The number of replicas depends on the computing capabilities of the fleet instance in use. An optional per-instance container group might be used to run other software that only needs to run once per instance, such as background services, logging, or test processes. One per-instance container group is deployed to each fleet instance. Each container group can include the definition for one or more containers. A container definition specifies a container image that is stored in an Amazon Elastic Container Registry (Amazon ECR) public or private repository. Request options Use this operation to make the following types of requests. Most fleet settings have default values, so you can create a working fleet with a minimal configuration and default values, which you can customize later. Create a fleet with no container groups. You can configure a container fleet and then add container group definitions later. In this scenario, no fleet instances are deployed, and the fleet can't host game sessions until you add a game server container group definition. Provide the following required parameter values: FleetRoleArn Create a fleet with a game server container group. Provide the following required parameter values: FleetRoleArn GameServerContainerGroupDefinitionName Create a fleet with a game server container group and a per-instance container group. Provide the following required parameter values: FleetRoleArn GameServerContainerGroupDefinitionName PerInstanceContainerGroupDefinitionName Results If successful, this operation creates a new container fleet resource, places it in PENDING status, and initiates the fleet creation workflow. For fleets with container groups, this workflow starts a fleet deployment and transitions the status to ACTIVE. Fleets without a container group are placed in CREATED status. You can update most of the properties of a fleet, including container group definitions, and deploy the update across all fleet instances. Use UpdateContainerFleet to deploy a new game server version update across the container fleet. A managed fleet's runtime environment depends on the Amazon Machine Image (AMI) version it uses. When a new fleet is created, Amazon GameLift Servers assigns the latest available AMI version to the fleet, and all compute instances in that fleet are deployed with that version. To update the AMI version, you must create a new fleet. As a best practice, we recommend replacing your managed fleets every 30 days to maintain a secure and up-to-date runtime environment for your hosted game servers. For guidance, see Security best practices for Amazon GameLift Servers.</td>
</tr>
<tr>
    <td><a href="#update_container_fleet"><CopyableCode code="update_container_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Updates the properties of a managed container fleet. Depending on the properties being updated, this operation might initiate a fleet deployment. You can track deployments for a fleet using https:​//docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetDeployment.html. A managed fleet's runtime environment, which depends on the fleet's Amazon Machine Image &#123;AMI&#125; version, can't be updated. You must create a new fleet. As a best practice, we recommend replacing your managed fleets every 30 days to maintain a secure and up-to-date runtime environment for your hosted game servers. For guidance, see Security best practices for Amazon GameLift Servers. Request options As with CreateContainerFleet, many fleet properties use common defaults or are calculated based on the fleet's container group definitions. Update fleet properties that result in a fleet deployment. Include only those properties that you want to change. Specify deployment configuration settings. Update fleet properties that don't result in a fleet deployment. Include only those properties that you want to change. Changes to the following properties initiate a fleet deployment: GameServerContainerGroupDefinition PerInstanceContainerGroupDefinition GameServerContainerGroupsPerInstance InstanceInboundPermissions InstanceConnectionPortRange LogConfiguration Results If successful, this operation updates the container fleet resource, and might initiate a new deployment of fleet resources using the deployment configuration provided. A deployment replaces existing fleet instances with new instances that are deployed with the updated fleet properties. The fleet is placed in UPDATING status until the deployment is complete, then return to ACTIVE. You can have only one update deployment active at a time for a fleet. If a second update request initiates a deployment while another deployment is in progress, the first deployment is cancelled.</td>
</tr>
<tr>
    <td><a href="#delete_container_fleet"><CopyableCode code="delete_container_fleet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Deletes all resources and information related to a container fleet and shuts down currently running fleet instances, including those in remote locations. The container fleet must be in ACTIVE status to be deleted. To delete a fleet, specify the fleet ID to be terminated. During the deletion process, the fleet status is changed to DELETING. Learn more Setting up Amazon GameLift Servers Fleets</td>
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
    defaultValue="describe_container_fleet"
    values={[
        { label: 'describe_container_fleet', value: 'describe_container_fleet' },
        { label: 'list_container_fleets', value: 'list_container_fleets' }
    ]}
>
<TabItem value="describe_container_fleet">

This API works with the following fleet types: Container Retrieves the properties for a container fleet. When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. Request options Get container fleet properties for a single fleet. Provide either the fleet ID or ARN value. Results If successful, a ContainerFleet object is returned. This object includes the fleet properties, including information about the most recent deployment. Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.

```sql
SELECT
billing_type,
creation_time,
deployment_details,
description,
fleet_arn,
fleet_id,
fleet_role_arn,
game_server_container_group_definition_arn,
game_server_container_group_definition_name,
game_server_container_groups_per_instance,
game_session_creation_limit_policy,
instance_connection_port_range,
instance_inbound_permissions,
instance_type,
location_attributes,
log_configuration,
maximum_game_server_container_groups_per_instance,
metric_groups,
new_game_session_protection_policy,
per_instance_container_group_definition_arn,
per_instance_container_group_definition_name,
player_gateway_mode,
status
FROM aws.gamelift.container_fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_container_fleets">

This API works with the following fleet types: Container Retrieves a collection of container fleet resources in an Amazon Web Services Region. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only. Request options Get a list of all fleets. Call this operation without specifying a container group definition. Get a list of fleets filtered by container group definition. Provide the container group definition name or ARN value. To get a list of all Amazon GameLift Servers Realtime fleets with a specific configuration script, provide the script ID. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, this operation returns a collection of container fleets that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve. Fleet IDs are returned in no particular order.

```sql
SELECT
billing_type,
creation_time,
deployment_details,
description,
fleet_arn,
fleet_id,
fleet_role_arn,
game_server_container_group_definition_arn,
game_server_container_group_definition_name,
game_server_container_groups_per_instance,
game_session_creation_limit_policy,
instance_connection_port_range,
instance_inbound_permissions,
instance_type,
location_attributes,
log_configuration,
maximum_game_server_container_groups_per_instance,
metric_groups,
new_game_session_protection_policy,
per_instance_container_group_definition_arn,
per_instance_container_group_definition_name,
player_gateway_mode,
status
FROM aws.gamelift.container_fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_container_fleet"
    values={[
        { label: 'create_container_fleet', value: 'create_container_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_container_fleet">

This API works with the following fleet types: Container Creates a managed fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your containerized game servers. Use this operation to define how to deploy a container architecture onto each fleet instance and configure fleet settings. You can create a container fleet in any Amazon Web Services Regions that Amazon GameLift Servers supports for multi-location fleets. A container fleet can be deployed to a single location or multiple locations. Container fleets are deployed with Amazon Linux 2023 as the instance operating system. Define the fleet's container architecture using container group definitions. Each fleet can have one of the following container group types: The game server container group runs your game server build and dependent software. Amazon GameLift Servers deploys one or more replicas of this container group to each fleet instance. The number of replicas depends on the computing capabilities of the fleet instance in use. An optional per-instance container group might be used to run other software that only needs to run once per instance, such as background services, logging, or test processes. One per-instance container group is deployed to each fleet instance. Each container group can include the definition for one or more containers. A container definition specifies a container image that is stored in an Amazon Elastic Container Registry (Amazon ECR) public or private repository. Request options Use this operation to make the following types of requests. Most fleet settings have default values, so you can create a working fleet with a minimal configuration and default values, which you can customize later. Create a fleet with no container groups. You can configure a container fleet and then add container group definitions later. In this scenario, no fleet instances are deployed, and the fleet can't host game sessions until you add a game server container group definition. Provide the following required parameter values: FleetRoleArn Create a fleet with a game server container group. Provide the following required parameter values: FleetRoleArn GameServerContainerGroupDefinitionName Create a fleet with a game server container group and a per-instance container group. Provide the following required parameter values: FleetRoleArn GameServerContainerGroupDefinitionName PerInstanceContainerGroupDefinitionName Results If successful, this operation creates a new container fleet resource, places it in PENDING status, and initiates the fleet creation workflow. For fleets with container groups, this workflow starts a fleet deployment and transitions the status to ACTIVE. Fleets without a container group are placed in CREATED status. You can update most of the properties of a fleet, including container group definitions, and deploy the update across all fleet instances. Use UpdateContainerFleet to deploy a new game server version update across the container fleet. A managed fleet's runtime environment depends on the Amazon Machine Image (AMI) version it uses. When a new fleet is created, Amazon GameLift Servers assigns the latest available AMI version to the fleet, and all compute instances in that fleet are deployed with that version. To update the AMI version, you must create a new fleet. As a best practice, we recommend replacing your managed fleets every 30 days to maintain a secure and up-to-date runtime environment for your hosted game servers. For guidance, see Security best practices for Amazon GameLift Servers.

```sql
INSERT INTO aws.gamelift.container_fleets (
FleetRoleArn,
Description,
GameServerContainerGroupDefinitionName,
PerInstanceContainerGroupDefinitionName,
InstanceConnectionPortRange,
InstanceInboundPermissions,
GameServerContainerGroupsPerInstance,
InstanceType,
BillingType,
Locations,
MetricGroups,
NewGameSessionProtectionPolicy,
GameSessionCreationLimitPolicy,
LogConfiguration,
Tags,
PlayerGatewayMode,
region
)
SELECT 
'{{ FleetRoleArn }}' /* required */,
'{{ Description }}',
'{{ GameServerContainerGroupDefinitionName }}',
'{{ PerInstanceContainerGroupDefinitionName }}',
'{{ InstanceConnectionPortRange }}',
'{{ InstanceInboundPermissions }}',
{{ GameServerContainerGroupsPerInstance }},
'{{ InstanceType }}',
'{{ BillingType }}',
'{{ Locations }}',
'{{ MetricGroups }}',
'{{ NewGameSessionProtectionPolicy }}',
'{{ GameSessionCreationLimitPolicy }}',
'{{ LogConfiguration }}',
'{{ Tags }}',
'{{ PlayerGatewayMode }}',
'{{ region }}'
RETURNING
container_fleet
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: container_fleets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the container_fleets resource.
    - name: FleetRoleArn
      value: "{{ FleetRoleArn }}"
      description: |
        The unique identifier for an Identity and Access Management (IAM) role with permissions to run your containers on resources that are managed by Amazon GameLift Servers. Use an IAM service role with the GameLiftContainerFleetPolicy managed policy attached. For more information, see Set up an IAM service role. You can't change this fleet property after the fleet is created. IAM role ARN values use the following pattern: arn:aws:iam::[Amazon Web Services account]:role/[role name].
    - name: Description
      value: "{{ Description }}"
      description: |
        A meaningful description of the container fleet.
    - name: GameServerContainerGroupDefinitionName
      value: "{{ GameServerContainerGroupDefinitionName }}"
      description: |
        A container group definition resource that describes how to deploy containers with your game server build and support software onto each fleet instance. You can specify the container group definition's name to use the latest version. Alternatively, provide an ARN value with a specific version number. Create a container group definition by calling CreateContainerGroupDefinition. This operation creates a ContainerGroupDefinition resource.
    - name: PerInstanceContainerGroupDefinitionName
      value: "{{ PerInstanceContainerGroupDefinitionName }}"
      description: |
        The name of a container group definition resource that describes a set of axillary software. A fleet instance has one process for executables in this container group. A per-instance container group is optional. You can update the fleet to add or remove a per-instance container group at any time. You can specify the container group definition's name to use the latest version. Alternatively, provide an ARN value with a specific version number. Create a container group definition by calling https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html. This operation creates a https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html resource.
    - name: InstanceConnectionPortRange
      description: |
        The set of port numbers to open on each fleet instance. A fleet's connection ports map to container ports that are configured in the fleet's container group definitions. By default, Amazon GameLift Servers calculates an optimal port range based on your fleet configuration. To use the calculated range, don't set this parameter. The values are: Port range: 4192 to a number calculated based on your fleet configuration. Amazon GameLift Servers uses the following formula: 4192 + [# of game server container groups per fleet instance] * [# of container ports in the game server container group definition] + [# of container ports in the per instance container group definition] You can also choose to manually set this parameter. When manually setting this parameter, you must use port numbers that match the fleet's inbound permissions port range. If you set values manually, Amazon GameLift Servers no longer calculates a port range for you, even if you later remove the manual settings. The port range must not overlap with the Amazon GameLift Servers reserved port range 4092-4191. This range is reserved for internal Amazon GameLift Servers services.
      value:
        FromPort: {{ FromPort }}
        ToPort: {{ ToPort }}
    - name: InstanceInboundPermissions
      description: |
        The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet. As a best practice, when remotely accessing a fleet instance, we recommend opening ports only when you need them and closing them when you're finished. By default, Amazon GameLift Servers calculates an optimal port range based on your fleet configuration. To use the calculated range, don't set this parameter. The values are: Protocol: UDP Port range: 4192 to a number calculated based on your fleet configuration. Amazon GameLift Servers uses the following formula: 4192 + [# of game server container groups per fleet instance] * [# of container ports in the game server container group definition] + [# of container ports in the per instance container group definition] You can also choose to manually set this parameter. When manually setting this parameter, you must use port numbers that match the fleet's connection port range. If you set values manually, Amazon GameLift Servers no longer calculates a port range for you, even if you later remove the manual settings. The port range must not overlap with the Amazon GameLift Servers reserved port range 4092-4191. This range is reserved for internal Amazon GameLift Servers services.
      value:
        - FromPort: {{ FromPort }}
          ToPort: {{ ToPort }}
          IpRange: "{{ IpRange }}"
          Protocol: "{{ Protocol }}"
    - name: GameServerContainerGroupsPerInstance
      value: {{ GameServerContainerGroupsPerInstance }}
      description: |
        The number of times to replicate the game server container group on each fleet instance. By default, Amazon GameLift Servers calculates the maximum number of game server container groups that can fit on each instance. This calculation is based on the CPU and memory resources of the fleet's instance type). To use the calculated maximum, don't set this parameter. If you set this number manually, Amazon GameLift Servers uses your value as long as it's less than the calculated maximum.
    - name: InstanceType
      value: "{{ InstanceType }}"
      description: |
        The Amazon EC2 instance type to use for all instances in the fleet. For multi-location fleets, the instance type must be available in the home region and all remote locations. Instance type determines the computing resources and processing power that's available to host your game servers. This includes including CPU, memory, storage, and networking capacity. By default, Amazon GameLift Servers uses the c5.large instance type. If this instance type does not have sufficient resources for your container groups, you can choose a different instance type that better fits your needs. See Amazon Elastic Compute Cloud Instance Types for detailed descriptions of Amazon EC2 instance types. You can't update this fleet property later.
    - name: BillingType
      value: "{{ BillingType }}"
      description: |
        Indicates whether to use On-Demand or Spot instances for this fleet. Learn more about when to use On-Demand versus Spot Instances. This fleet property can't be changed after the fleet is created. By default, this property is set to ON_DEMAND. You can't update this fleet property later.
      valid_values: ['ON_DEMAND', 'SPOT']
    - name: Locations
      description: |
        A set of locations to deploy container fleet instances to. You can add any Amazon Web Services Region or Local Zone that's supported by Amazon GameLift Servers. Provide a list of one or more Amazon Web Services Region codes, such as us-west-2, or Local Zone names. Also include the fleet's home Region, which is the Amazon Web Services Region where the fleet is created. For a list of supported Regions and Local Zones, see Amazon GameLift Servers service locations for managed hosting.
      value:
        - Location: "{{ Location }}"
    - name: MetricGroups
      value:
        - "{{ MetricGroups }}"
      description: |
        The name of an Amazon Web Services CloudWatch metric group to add this fleet to. You can use a metric group to aggregate metrics for multiple fleets. You can specify an existing metric group name or use a new name to create a new metric group. Each fleet can have only one metric group, but you can change this value at any time.
    - name: NewGameSessionProtectionPolicy
      value: "{{ NewGameSessionProtectionPolicy }}"
      description: |
        Determines whether Amazon GameLift Servers can shut down game sessions on the fleet that are actively running and hosting players. Amazon GameLift Servers might prompt an instance shutdown when scaling down fleet capacity or when retiring unhealthy instances. You can also set game session protection for individual game sessions using UpdateGameSession. NoProtection -- Game sessions can be shut down during active gameplay. FullProtection -- Game sessions in ACTIVE status can't be shut down. By default, this property is set to NoProtection.
      valid_values: ['NoProtection', 'FullProtection']
    - name: GameSessionCreationLimitPolicy
      description: |
        A policy that limits the number of game sessions that each individual player can create on instances in this fleet. The limit applies for a specified span of time.
      value:
        NewGameSessionsPerCreator: {{ NewGameSessionsPerCreator }}
        PolicyPeriodInMinutes: {{ PolicyPeriodInMinutes }}
    - name: LogConfiguration
      description: |
        A method for collecting container logs for the fleet. Amazon GameLift Servers saves all standard output for each container in logs, including game session logs. You can select from the following methods: CLOUDWATCH -- Send logs to an Amazon CloudWatch log group that you define. Each container emits a log stream, which is organized in the log group. S3 -- Store logs in an Amazon S3 bucket that you define. NONE -- Don't collect container logs. By default, this property is set to CLOUDWATCH. Amazon GameLift Servers requires permissions to send logs other Amazon Web Services services in your account. These permissions are included in the IAM fleet role for this container fleet (see FleetRoleArn).
      value:
        LogDestination: "{{ LogDestination }}"
        S3BucketName: "{{ S3BucketName }}"
        LogGroupArn: "{{ LogGroupArn }}"
    - name: Tags
      description: |
        A list of labels to assign to the new fleet resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: PlayerGatewayMode
      value: "{{ PlayerGatewayMode }}"
      description: |
        Configures player gateway for your fleet. Player gateway provides benefits such as DDoS protection by rate limiting and validating traﬃc before it reaches game servers, hiding game server IP addresses from players, and providing updated endpoints when relay endpoints become unhealthy. How it works: When enabled, game clients connect to relay endpoints instead of to your game servers. Player gateway validates player gateway tokens and routes traffic to the appropriate game server. Your game backend calls GetPlayerConnectionDetails to retrieve relay endpoints and player gateway tokens for your game clients. To learn more about this topic, see DDoS protection with Amazon GameLift Servers player gateway. Possible values include: DISABLED (default) -- Game clients connect to the game server endpoint. Use this when you do not intend to integrate your game with player gateway. ENABLED -- Player gateway is available in fleet locations where it is supported. Your game backend can call GetPlayerConnectionDetails to obtain a player gateway token and endpoints for game clients. REQUIRED -- Player gateway is available in fleet locations where it is supported, and the fleet can only use locations that support this feature. Attempting to add a remote location to your fleet which does not support player gateway will result in an InvalidRequestException.
      valid_values: ['DISABLED', 'ENABLED', 'REQUIRED']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_container_fleet"
    values={[
        { label: 'update_container_fleet', value: 'update_container_fleet' }
    ]}
>
<TabItem value="update_container_fleet">

This API works with the following fleet types: Container Updates the properties of a managed container fleet. Depending on the properties being updated, this operation might initiate a fleet deployment. You can track deployments for a fleet using https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetDeployment.html. A managed fleet's runtime environment, which depends on the fleet's Amazon Machine Image &#123;AMI&#125; version, can't be updated. You must create a new fleet. As a best practice, we recommend replacing your managed fleets every 30 days to maintain a secure and up-to-date runtime environment for your hosted game servers. For guidance, see Security best practices for Amazon GameLift Servers. Request options As with CreateContainerFleet, many fleet properties use common defaults or are calculated based on the fleet's container group definitions. Update fleet properties that result in a fleet deployment. Include only those properties that you want to change. Specify deployment configuration settings. Update fleet properties that don't result in a fleet deployment. Include only those properties that you want to change. Changes to the following properties initiate a fleet deployment: GameServerContainerGroupDefinition PerInstanceContainerGroupDefinition GameServerContainerGroupsPerInstance InstanceInboundPermissions InstanceConnectionPortRange LogConfiguration Results If successful, this operation updates the container fleet resource, and might initiate a new deployment of fleet resources using the deployment configuration provided. A deployment replaces existing fleet instances with new instances that are deployed with the updated fleet properties. The fleet is placed in UPDATING status until the deployment is complete, then return to ACTIVE. You can have only one update deployment active at a time for a fleet. If a second update request initiates a deployment while another deployment is in progress, the first deployment is cancelled.

```sql
UPDATE aws.gamelift.container_fleets
SET 
FleetId = '{{ FleetId }}',
GameServerContainerGroupDefinitionName = '{{ GameServerContainerGroupDefinitionName }}',
PerInstanceContainerGroupDefinitionName = '{{ PerInstanceContainerGroupDefinitionName }}',
GameServerContainerGroupsPerInstance = {{ GameServerContainerGroupsPerInstance }},
InstanceConnectionPortRange = '{{ InstanceConnectionPortRange }}',
InstanceInboundPermissionAuthorizations = '{{ InstanceInboundPermissionAuthorizations }}',
InstanceInboundPermissionRevocations = '{{ InstanceInboundPermissionRevocations }}',
DeploymentConfiguration = '{{ DeploymentConfiguration }}',
Description = '{{ Description }}',
MetricGroups = '{{ MetricGroups }}',
NewGameSessionProtectionPolicy = '{{ NewGameSessionProtectionPolicy }}',
GameSessionCreationLimitPolicy = '{{ GameSessionCreationLimitPolicy }}',
LogConfiguration = '{{ LogConfiguration }}',
RemoveAttributes = '{{ RemoveAttributes }}'
WHERE 
region = '{{ region }}' --required
AND FleetId = '{{ FleetId }}' --required
RETURNING
container_fleet;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_container_fleet"
    values={[
        { label: 'delete_container_fleet', value: 'delete_container_fleet' }
    ]}
>
<TabItem value="delete_container_fleet">

This API works with the following fleet types: Container Deletes all resources and information related to a container fleet and shuts down currently running fleet instances, including those in remote locations. The container fleet must be in ACTIVE status to be deleted. To delete a fleet, specify the fleet ID to be terminated. During the deletion process, the fleet status is changed to DELETING. Learn more Setting up Amazon GameLift Servers Fleets

```sql
DELETE FROM aws.gamelift.container_fleets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
