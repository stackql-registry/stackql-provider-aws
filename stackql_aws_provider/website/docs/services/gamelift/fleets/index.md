--- 
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
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

Creates, updates, deletes, gets or lists a <code>fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_fleets"
    values={[
        { label: 'list_fleets', value: 'list_fleets' }
    ]}
>
<TabItem value="list_fleets">

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
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A set of fleet IDs that match the list request.</td>
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
    <td><a href="#list_fleets"><CopyableCode code="list_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves a collection of fleet resources in an Amazon Web Services Region. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only. You can use operation in the following ways: To get a list of all fleets in a Region, don't provide a build or script identifier. To get a list of all fleets where a specific game build is deployed, provide the build ID. To get a list of all Amazon GameLift Servers Realtime fleets with a specific configuration script, provide the script ID. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, this operation returns a list of fleet IDs that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve. Fleet IDs are returned in no particular order.</td>
</tr>
<tr>
    <td><a href="#create_fleet"><CopyableCode code="create_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Creates a fleet of compute resources to host your game servers. Use this operation to set up a fleet for the following compute types: Managed EC2 fleet An EC2 fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances. Your game server build is deployed to each fleet instance. Amazon GameLift Servers manages the fleet's instances and controls the lifecycle of game server processes, which host game sessions for players. EC2 fleets can have instances in multiple locations. Each instance in the fleet is designated a Compute. To create an EC2 fleet, provide these required parameters: Either BuildId or ScriptId ComputeType set to EC2 (the default value) EC2InboundPermissions EC2InstanceType FleetType Name RuntimeConfiguration with at least one ServerProcesses configuration If successful, this operation creates a new fleet resource and places it in NEW status while Amazon GameLift Servers initiates the fleet creation workflow. To debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create a development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. When the fleet status is ACTIVE, you can adjust capacity settings and turn autoscaling on/off for each location. A managed fleet's runtime environment depends on the Amazon Machine Image (AMI) version it uses. When a new fleet is created, Amazon GameLift Servers assigns the latest available AMI version to the fleet, and all compute instances in that fleet are deployed with that version. To update the AMI version, you must create a new fleet. As a best practice, we recommend replacing your managed fleets every 30 days to maintain a secure and up-to-date runtime environment for your hosted game servers. For guidance, see Security best practices for Amazon GameLift Servers. Anywhere fleet An Anywhere fleet represents compute resources that are not owned or managed by Amazon GameLift Servers. You might create an Anywhere fleet with your local machine for testing, or use one to host game servers with on-premises hardware or other game hosting solutions. To create an Anywhere fleet, provide these required parameters: ComputeType set to ANYWHERE Locations specifying a custom location Name If successful, this operation creates a new fleet resource and places it in ACTIVE status. You can register computes with a fleet in ACTIVE status. Learn more Setting up fleets Debug fleet creation issues Multi-location fleets</td>
</tr>
<tr>
    <td><a href="#delete_fleet"><CopyableCode code="delete_fleet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere Deletes all resources and information related to a fleet and shuts down any currently running fleet instances, including those in remote locations. If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling CreateVpcPeeringAuthorization. You don't need to explicitly delete the VPC peering connection. To delete a fleet, specify the fleet ID to be terminated. During the deletion process, the fleet status is changed to DELETING. When completed, the status switches to TERMINATED and the fleet event FLEET_DELETED is emitted. Learn more Setting up Amazon GameLift Servers Fleets</td>
</tr>
<tr>
    <td><a href="#start_fleet_actions"><CopyableCode code="start_fleet_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-Actions"><code>Actions</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Resumes certain types of activity on fleet instances that were suspended with StopFleetActions. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity. This operation can be used in the following ways: To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. If successful, Amazon GameLift Servers once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect. Learn more Setting up Amazon GameLift Servers fleets</td>
</tr>
<tr>
    <td><a href="#stop_fleet_actions"><CopyableCode code="stop_fleet_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-Actions"><code>Actions</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. This operation can be used in the following ways: To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. If successful, Amazon GameLift Servers no longer initiates scaling events except in response to manual changes using UpdateFleetCapacity. To restart fleet actions again, call StartFleetActions. Learn more Setting up Amazon GameLift Servers Fleets</td>
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
    defaultValue="list_fleets"
    values={[
        { label: 'list_fleets', value: 'list_fleets' }
    ]}
>
<TabItem value="list_fleets">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves a collection of fleet resources in an Amazon Web Services Region. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only. You can use operation in the following ways: To get a list of all fleets in a Region, don't provide a build or script identifier. To get a list of all fleets where a specific game build is deployed, provide the build ID. To get a list of all Amazon GameLift Servers Realtime fleets with a specific configuration script, provide the script ID. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, this operation returns a list of fleet IDs that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve. Fleet IDs are returned in no particular order.

```sql
SELECT
fleet_id
FROM aws.gamelift.fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet"
    values={[
        { label: 'create_fleet', value: 'create_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet">

This API works with the following fleet types: EC2, Anywhere, Container Creates a fleet of compute resources to host your game servers. Use this operation to set up a fleet for the following compute types: Managed EC2 fleet An EC2 fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances. Your game server build is deployed to each fleet instance. Amazon GameLift Servers manages the fleet's instances and controls the lifecycle of game server processes, which host game sessions for players. EC2 fleets can have instances in multiple locations. Each instance in the fleet is designated a Compute. To create an EC2 fleet, provide these required parameters: Either BuildId or ScriptId ComputeType set to EC2 (the default value) EC2InboundPermissions EC2InstanceType FleetType Name RuntimeConfiguration with at least one ServerProcesses configuration If successful, this operation creates a new fleet resource and places it in NEW status while Amazon GameLift Servers initiates the fleet creation workflow. To debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create a development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. When the fleet status is ACTIVE, you can adjust capacity settings and turn autoscaling on/off for each location. A managed fleet's runtime environment depends on the Amazon Machine Image (AMI) version it uses. When a new fleet is created, Amazon GameLift Servers assigns the latest available AMI version to the fleet, and all compute instances in that fleet are deployed with that version. To update the AMI version, you must create a new fleet. As a best practice, we recommend replacing your managed fleets every 30 days to maintain a secure and up-to-date runtime environment for your hosted game servers. For guidance, see Security best practices for Amazon GameLift Servers. Anywhere fleet An Anywhere fleet represents compute resources that are not owned or managed by Amazon GameLift Servers. You might create an Anywhere fleet with your local machine for testing, or use one to host game servers with on-premises hardware or other game hosting solutions. To create an Anywhere fleet, provide these required parameters: ComputeType set to ANYWHERE Locations specifying a custom location Name If successful, this operation creates a new fleet resource and places it in ACTIVE status. You can register computes with a fleet in ACTIVE status. Learn more Setting up fleets Debug fleet creation issues Multi-location fleets

```sql
INSERT INTO aws.gamelift.fleets (
Name,
Description,
BuildId,
ScriptId,
ServerLaunchPath,
ServerLaunchParameters,
LogPaths,
EC2InstanceType,
EC2InboundPermissions,
NewGameSessionProtectionPolicy,
RuntimeConfiguration,
ResourceCreationLimitPolicy,
MetricGroups,
PeerVpcAwsAccountId,
PeerVpcId,
FleetType,
InstanceRoleArn,
CertificateConfiguration,
Locations,
Tags,
ComputeType,
AnywhereConfiguration,
InstanceRoleCredentialsProvider,
PlayerGatewayMode,
PlayerGatewayConfiguration,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ BuildId }}',
'{{ ScriptId }}',
'{{ ServerLaunchPath }}',
'{{ ServerLaunchParameters }}',
'{{ LogPaths }}',
'{{ EC2InstanceType }}',
'{{ EC2InboundPermissions }}',
'{{ NewGameSessionProtectionPolicy }}',
'{{ RuntimeConfiguration }}',
'{{ ResourceCreationLimitPolicy }}',
'{{ MetricGroups }}',
'{{ PeerVpcAwsAccountId }}',
'{{ PeerVpcId }}',
'{{ FleetType }}',
'{{ InstanceRoleArn }}',
'{{ CertificateConfiguration }}',
'{{ Locations }}',
'{{ Tags }}',
'{{ ComputeType }}',
'{{ AnywhereConfiguration }}',
'{{ InstanceRoleCredentialsProvider }}',
'{{ PlayerGatewayMode }}',
'{{ PlayerGatewayConfiguration }}',
'{{ region }}'
RETURNING
fleet_attributes,
location_states
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
    - name: Name
      value: "{{ Name }}"
      description: |
        A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the fleet.
    - name: BuildId
      value: "{{ BuildId }}"
      description: |
        The unique identifier for a custom game server build to be deployed to a fleet with compute type EC2. You can use either the build ID or ARN. The build must be uploaded to Amazon GameLift Servers and in READY status. This fleet property can't be changed after the fleet is created.
    - name: ScriptId
      value: "{{ ScriptId }}"
      description: |
        The unique identifier for a Realtime configuration script to be deployed to a fleet with compute type EC2. You can use either the script ID or ARN. Scripts must be uploaded to Amazon GameLift Servers prior to creating the fleet. This fleet property can't be changed after the fleet is created.
    - name: ServerLaunchPath
      value: "{{ ServerLaunchPath }}"
      description: |
        This parameter is no longer used. Specify a server launch path using the RuntimeConfiguration parameter. Requests that use this parameter instead continue to be valid.
    - name: ServerLaunchParameters
      value: "{{ ServerLaunchParameters }}"
      description: |
        This parameter is no longer used. Specify server launch parameters using the RuntimeConfiguration parameter. Requests that use this parameter instead continue to be valid.
    - name: LogPaths
      value:
        - "{{ LogPaths }}"
      description: |
        This parameter is no longer used. To specify where Amazon GameLift Servers should store log files once a server process shuts down, use the Amazon GameLift Servers server API ProcessReady() and specify one or more directory paths in logParameters. For more information, see Initialize the server process in the Amazon GameLift Servers Developer Guide.
    - name: EC2InstanceType
      value: "{{ EC2InstanceType }}"
      description: |
        The Amazon GameLift Servers-supported Amazon EC2 instance type to use with managed EC2 fleets. Instance type determines the computing resources that will be used to host your game servers, including CPU, memory, storage, and networking capacity. See Amazon Elastic Compute Cloud Instance Types for detailed descriptions of Amazon EC2 instance types.
      valid_values: ['t2.micro', 't2.small', 't2.medium', 't2.large', 'c3.large', 'c3.xlarge', 'c3.2xlarge', 'c3.4xlarge', 'c3.8xlarge', 'c4.large', 'c4.xlarge', 'c4.2xlarge', 'c4.4xlarge', 'c4.8xlarge', 'c5.large', 'c5.xlarge', 'c5.2xlarge', 'c5.4xlarge', 'c5.9xlarge', 'c5.12xlarge', 'c5.18xlarge', 'c5.24xlarge', 'c5a.large', 'c5a.xlarge', 'c5a.2xlarge', 'c5a.4xlarge', 'c5a.8xlarge', 'c5a.12xlarge', 'c5a.16xlarge', 'c5a.24xlarge', 'r3.large', 'r3.xlarge', 'r3.2xlarge', 'r3.4xlarge', 'r3.8xlarge', 'r4.large', 'r4.xlarge', 'r4.2xlarge', 'r4.4xlarge', 'r4.8xlarge', 'r4.16xlarge', 'r5.large', 'r5.xlarge', 'r5.2xlarge', 'r5.4xlarge', 'r5.8xlarge', 'r5.12xlarge', 'r5.16xlarge', 'r5.24xlarge', 'r5a.large', 'r5a.xlarge', 'r5a.2xlarge', 'r5a.4xlarge', 'r5a.8xlarge', 'r5a.12xlarge', 'r5a.16xlarge', 'r5a.24xlarge', 'm3.medium', 'm3.large', 'm3.xlarge', 'm3.2xlarge', 'm4.large', 'm4.xlarge', 'm4.2xlarge', 'm4.4xlarge', 'm4.10xlarge', 'm5.large', 'm5.xlarge', 'm5.2xlarge', 'm5.4xlarge', 'm5.8xlarge', 'm5.12xlarge', 'm5.16xlarge', 'm5.24xlarge', 'm5a.large', 'm5a.xlarge', 'm5a.2xlarge', 'm5a.4xlarge', 'm5a.8xlarge', 'm5a.12xlarge', 'm5a.16xlarge', 'm5a.24xlarge', 'c5d.large', 'c5d.xlarge', 'c5d.2xlarge', 'c5d.4xlarge', 'c5d.9xlarge', 'c5d.12xlarge', 'c5d.18xlarge', 'c5d.24xlarge', 'c6a.large', 'c6a.xlarge', 'c6a.2xlarge', 'c6a.4xlarge', 'c6a.8xlarge', 'c6a.12xlarge', 'c6a.16xlarge', 'c6a.24xlarge', 'c6i.large', 'c6i.xlarge', 'c6i.2xlarge', 'c6i.4xlarge', 'c6i.8xlarge', 'c6i.12xlarge', 'c6i.16xlarge', 'c6i.24xlarge', 'r5d.large', 'r5d.xlarge', 'r5d.2xlarge', 'r5d.4xlarge', 'r5d.8xlarge', 'r5d.12xlarge', 'r5d.16xlarge', 'r5d.24xlarge', 'm6g.medium', 'm6g.large', 'm6g.xlarge', 'm6g.2xlarge', 'm6g.4xlarge', 'm6g.8xlarge', 'm6g.12xlarge', 'm6g.16xlarge', 'c6g.medium', 'c6g.large', 'c6g.xlarge', 'c6g.2xlarge', 'c6g.4xlarge', 'c6g.8xlarge', 'c6g.12xlarge', 'c6g.16xlarge', 'r6g.medium', 'r6g.large', 'r6g.xlarge', 'r6g.2xlarge', 'r6g.4xlarge', 'r6g.8xlarge', 'r6g.12xlarge', 'r6g.16xlarge', 'c6gn.medium', 'c6gn.large', 'c6gn.xlarge', 'c6gn.2xlarge', 'c6gn.4xlarge', 'c6gn.8xlarge', 'c6gn.12xlarge', 'c6gn.16xlarge', 'c7g.medium', 'c7g.large', 'c7g.xlarge', 'c7g.2xlarge', 'c7g.4xlarge', 'c7g.8xlarge', 'c7g.12xlarge', 'c7g.16xlarge', 'r7g.medium', 'r7g.large', 'r7g.xlarge', 'r7g.2xlarge', 'r7g.4xlarge', 'r7g.8xlarge', 'r7g.12xlarge', 'r7g.16xlarge', 'm7g.medium', 'm7g.large', 'm7g.xlarge', 'm7g.2xlarge', 'm7g.4xlarge', 'm7g.8xlarge', 'm7g.12xlarge', 'm7g.16xlarge', 'g5g.xlarge', 'g5g.2xlarge', 'g5g.4xlarge', 'g5g.8xlarge', 'g5g.16xlarge', 'r6i.large', 'r6i.xlarge', 'r6i.2xlarge', 'r6i.4xlarge', 'r6i.8xlarge', 'r6i.12xlarge', 'r6i.16xlarge', 'c6gd.medium', 'c6gd.large', 'c6gd.xlarge', 'c6gd.2xlarge', 'c6gd.4xlarge', 'c6gd.8xlarge', 'c6gd.12xlarge', 'c6gd.16xlarge', 'c6in.large', 'c6in.xlarge', 'c6in.2xlarge', 'c6in.4xlarge', 'c6in.8xlarge', 'c6in.12xlarge', 'c6in.16xlarge', 'c7a.medium', 'c7a.large', 'c7a.xlarge', 'c7a.2xlarge', 'c7a.4xlarge', 'c7a.8xlarge', 'c7a.12xlarge', 'c7a.16xlarge', 'c7gd.medium', 'c7gd.large', 'c7gd.xlarge', 'c7gd.2xlarge', 'c7gd.4xlarge', 'c7gd.8xlarge', 'c7gd.12xlarge', 'c7gd.16xlarge', 'c7gn.medium', 'c7gn.large', 'c7gn.xlarge', 'c7gn.2xlarge', 'c7gn.4xlarge', 'c7gn.8xlarge', 'c7gn.12xlarge', 'c7gn.16xlarge', 'c7i.large', 'c7i.xlarge', 'c7i.2xlarge', 'c7i.4xlarge', 'c7i.8xlarge', 'c7i.12xlarge', 'c7i.16xlarge', 'm6a.large', 'm6a.xlarge', 'm6a.2xlarge', 'm6a.4xlarge', 'm6a.8xlarge', 'm6a.12xlarge', 'm6a.16xlarge', 'm6gd.medium', 'm6gd.large', 'm6gd.xlarge', 'm6gd.2xlarge', 'm6gd.4xlarge', 'm6gd.8xlarge', 'm6gd.12xlarge', 'm6gd.16xlarge', 'm6i.large', 'm6i.xlarge', 'm6i.2xlarge', 'm6i.4xlarge', 'm6i.8xlarge', 'm6i.12xlarge', 'm6i.16xlarge', 'm7a.medium', 'm7a.large', 'm7a.xlarge', 'm7a.2xlarge', 'm7a.4xlarge', 'm7a.8xlarge', 'm7a.12xlarge', 'm7a.16xlarge', 'm7gd.medium', 'm7gd.large', 'm7gd.xlarge', 'm7gd.2xlarge', 'm7gd.4xlarge', 'm7gd.8xlarge', 'm7gd.12xlarge', 'm7gd.16xlarge', 'm7i.large', 'm7i.xlarge', 'm7i.2xlarge', 'm7i.4xlarge', 'm7i.8xlarge', 'm7i.12xlarge', 'm7i.16xlarge', 'r6gd.medium', 'r6gd.large', 'r6gd.xlarge', 'r6gd.2xlarge', 'r6gd.4xlarge', 'r6gd.8xlarge', 'r6gd.12xlarge', 'r6gd.16xlarge', 'r7a.medium', 'r7a.large', 'r7a.xlarge', 'r7a.2xlarge', 'r7a.4xlarge', 'r7a.8xlarge', 'r7a.12xlarge', 'r7a.16xlarge', 'r7gd.medium', 'r7gd.large', 'r7gd.xlarge', 'r7gd.2xlarge', 'r7gd.4xlarge', 'r7gd.8xlarge', 'r7gd.12xlarge', 'r7gd.16xlarge', 'r7i.large', 'r7i.xlarge', 'r7i.2xlarge', 'r7i.4xlarge', 'r7i.8xlarge', 'r7i.12xlarge', 'r7i.16xlarge', 'r7i.24xlarge', 'r7i.48xlarge', 'c5ad.large', 'c5ad.xlarge', 'c5ad.2xlarge', 'c5ad.4xlarge', 'c5ad.8xlarge', 'c5ad.12xlarge', 'c5ad.16xlarge', 'c5ad.24xlarge', 'c5n.large', 'c5n.xlarge', 'c5n.2xlarge', 'c5n.4xlarge', 'c5n.9xlarge', 'c5n.18xlarge', 'r5ad.large', 'r5ad.xlarge', 'r5ad.2xlarge', 'r5ad.4xlarge', 'r5ad.8xlarge', 'r5ad.12xlarge', 'r5ad.16xlarge', 'r5ad.24xlarge', 'c6id.large', 'c6id.xlarge', 'c6id.2xlarge', 'c6id.4xlarge', 'c6id.8xlarge', 'c6id.12xlarge', 'c6id.16xlarge', 'c6id.24xlarge', 'c6id.32xlarge', 'c8g.medium', 'c8g.large', 'c8g.xlarge', 'c8g.2xlarge', 'c8g.4xlarge', 'c8g.8xlarge', 'c8g.12xlarge', 'c8g.16xlarge', 'c8g.24xlarge', 'c8g.48xlarge', 'm5ad.large', 'm5ad.xlarge', 'm5ad.2xlarge', 'm5ad.4xlarge', 'm5ad.8xlarge', 'm5ad.12xlarge', 'm5ad.16xlarge', 'm5ad.24xlarge', 'm5d.large', 'm5d.xlarge', 'm5d.2xlarge', 'm5d.4xlarge', 'm5d.8xlarge', 'm5d.12xlarge', 'm5d.16xlarge', 'm5d.24xlarge', 'm5dn.large', 'm5dn.xlarge', 'm5dn.2xlarge', 'm5dn.4xlarge', 'm5dn.8xlarge', 'm5dn.12xlarge', 'm5dn.16xlarge', 'm5dn.24xlarge', 'm5n.large', 'm5n.xlarge', 'm5n.2xlarge', 'm5n.4xlarge', 'm5n.8xlarge', 'm5n.12xlarge', 'm5n.16xlarge', 'm5n.24xlarge', 'm6id.large', 'm6id.xlarge', 'm6id.2xlarge', 'm6id.4xlarge', 'm6id.8xlarge', 'm6id.12xlarge', 'm6id.16xlarge', 'm6id.24xlarge', 'm6id.32xlarge', 'm6idn.large', 'm6idn.xlarge', 'm6idn.2xlarge', 'm6idn.4xlarge', 'm6idn.8xlarge', 'm6idn.12xlarge', 'm6idn.16xlarge', 'm6idn.24xlarge', 'm6idn.32xlarge', 'm6in.large', 'm6in.xlarge', 'm6in.2xlarge', 'm6in.4xlarge', 'm6in.8xlarge', 'm6in.12xlarge', 'm6in.16xlarge', 'm6in.24xlarge', 'm6in.32xlarge', 'm8g.medium', 'm8g.large', 'm8g.xlarge', 'm8g.2xlarge', 'm8g.4xlarge', 'm8g.8xlarge', 'm8g.12xlarge', 'm8g.16xlarge', 'm8g.24xlarge', 'm8g.48xlarge', 'r5dn.large', 'r5dn.xlarge', 'r5dn.2xlarge', 'r5dn.4xlarge', 'r5dn.8xlarge', 'r5dn.12xlarge', 'r5dn.16xlarge', 'r5dn.24xlarge', 'r5n.large', 'r5n.xlarge', 'r5n.2xlarge', 'r5n.4xlarge', 'r5n.8xlarge', 'r5n.12xlarge', 'r5n.16xlarge', 'r5n.24xlarge', 'r6a.large', 'r6a.xlarge', 'r6a.2xlarge', 'r6a.4xlarge', 'r6a.8xlarge', 'r6a.12xlarge', 'r6a.16xlarge', 'r6a.24xlarge', 'r6a.32xlarge', 'r6a.48xlarge', 'r6id.large', 'r6id.xlarge', 'r6id.2xlarge', 'r6id.4xlarge', 'r6id.8xlarge', 'r6id.12xlarge', 'r6id.16xlarge', 'r6id.24xlarge', 'r6id.32xlarge', 'r6idn.large', 'r6idn.xlarge', 'r6idn.2xlarge', 'r6idn.4xlarge', 'r6idn.8xlarge', 'r6idn.12xlarge', 'r6idn.16xlarge', 'r6idn.24xlarge', 'r6idn.32xlarge', 'r6in.large', 'r6in.xlarge', 'r6in.2xlarge', 'r6in.4xlarge', 'r6in.8xlarge', 'r6in.12xlarge', 'r6in.16xlarge', 'r6in.24xlarge', 'r6in.32xlarge', 'r8g.medium', 'r8g.large', 'r8g.xlarge', 'r8g.2xlarge', 'r8g.4xlarge', 'r8g.8xlarge', 'r8g.12xlarge', 'r8g.16xlarge', 'r8g.24xlarge', 'r8g.48xlarge', 'm4.16xlarge', 'c6a.32xlarge', 'c6a.48xlarge', 'c6i.32xlarge', 'r6i.24xlarge', 'r6i.32xlarge', 'c6in.24xlarge', 'c6in.32xlarge', 'c7a.24xlarge', 'c7a.32xlarge', 'c7a.48xlarge', 'c7i.24xlarge', 'c7i.48xlarge', 'm6a.24xlarge', 'm6a.32xlarge', 'm6a.48xlarge', 'm6i.24xlarge', 'm6i.32xlarge', 'm7a.24xlarge', 'm7a.32xlarge', 'm7a.48xlarge', 'm7i.24xlarge', 'm7i.48xlarge', 'r7a.24xlarge', 'r7a.32xlarge', 'r7a.48xlarge', 'c8a.medium', 'c8a.large', 'c8a.xlarge', 'c8a.2xlarge', 'c8i.large', 'c8i.xlarge', 'c8i.2xlarge', 'c9g.medium', 'c9g.large', 'c9g.xlarge', 'c9g.2xlarge', 'm8a.medium', 'm8a.large', 'm8a.xlarge', 'm8a.2xlarge', 'm8i.large', 'm8i.xlarge', 'm8i.2xlarge', 'm9g.large', 'm9g.xlarge', 'm9g.2xlarge']
    - name: EC2InboundPermissions
      description: |
        The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet. Set this parameter for managed EC2 fleets. You can leave this parameter empty when creating the fleet, but you must call https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings to set it before players can connect to game sessions. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. For Amazon GameLift Servers Realtime fleets, Amazon GameLift Servers automatically sets TCP and UDP ranges.
      value:
        - FromPort: {{ FromPort }}
          ToPort: {{ ToPort }}
          IpRange: "{{ IpRange }}"
          Protocol: "{{ Protocol }}"
    - name: NewGameSessionProtectionPolicy
      value: "{{ NewGameSessionProtectionPolicy }}"
      description: |
        The status of termination protection for active game sessions on the fleet. By default, this property is set to NoProtection. You can also set game session protection for an individual game session by calling UpdateGameSession. NoProtection - Game sessions can be terminated during active gameplay as a result of a scale-down event. FullProtection - Game sessions in ACTIVE status cannot be terminated during a scale-down event.
      valid_values: ['NoProtection', 'FullProtection']
    - name: RuntimeConfiguration
      description: |
        Instructions for how to launch and run server processes on the fleet. Set runtime configuration for managed EC2 fleets. For an Anywhere fleets, set this parameter only if the fleet is running the Amazon GameLift Servers Agent. The runtime configuration defines one or more server process configurations. Each server process identifies a game executable or Realtime script file and the number of processes to run concurrently. This parameter replaces the parameters ServerLaunchPath and ServerLaunchParameters, which are still supported for backward compatibility.
      value:
        ServerProcesses:
          - LaunchPath: "{{ LaunchPath }}"
            Parameters: "{{ Parameters }}"
            ConcurrentExecutions: {{ ConcurrentExecutions }}
        MaxConcurrentGameSessionActivations: {{ MaxConcurrentGameSessionActivations }}
        GameSessionActivationTimeoutSeconds: {{ GameSessionActivationTimeoutSeconds }}
    - name: ResourceCreationLimitPolicy
      description: |
        A policy that limits the number of game sessions that an individual player can create on instances in this fleet within a specified span of time.
      value:
        NewGameSessionsPerCreator: {{ NewGameSessionsPerCreator }}
        PolicyPeriodInMinutes: {{ PolicyPeriodInMinutes }}
    - name: MetricGroups
      value:
        - "{{ MetricGroups }}"
      description: |
        The name of an Amazon Web Services CloudWatch metric group to add this fleet to. A metric group is used to aggregate the metrics for multiple fleets. You can specify an existing metric group name or set a new name to create a new metric group. A fleet can be included in only one metric group at a time.
    - name: PeerVpcAwsAccountId
      value: "{{ PeerVpcAwsAccountId }}"
      description: |
        Used when peering your Amazon GameLift Servers fleet with a VPC, the unique identifier for the Amazon Web Services account that owns the VPC. You can find your account ID in the Amazon Web Services Management Console under account settings.
    - name: PeerVpcId
      value: "{{ PeerVpcId }}"
      description: |
        A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the Amazon Web Services Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Servers Fleets.
    - name: FleetType
      value: "{{ FleetType }}"
      description: |
        Indicates whether to use On-Demand or Spot instances for this fleet. By default, this property is set to ON_DEMAND. Learn more about when to use On-Demand versus Spot Instances. This fleet property can't be changed after the fleet is created.
      valid_values: ['ON_DEMAND', 'SPOT']
    - name: InstanceRoleArn
      value: "{{ InstanceRoleArn }}"
      description: |
        A unique identifier for an IAM role that manages access to your Amazon Web Services services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN by using the IAM dashboard in the Amazon Web Services Management Console. Learn more about using on-box credentials for your game servers at Access external resources from a game server. This fleet property can't be changed after the fleet is created.
    - name: CertificateConfiguration
      description: |
        Prompts Amazon GameLift Servers to generate a TLS/SSL certificate for the fleet. Amazon GameLift Servers uses the certificates to encrypt traffic between game clients and the game servers running on Amazon GameLift Servers. By default, the CertificateConfiguration is DISABLED. You can't change this property after you create the fleet. Certificate Manager (ACM) certificates expire after 13 months. Certificate expiration can cause fleets to fail, preventing players from connecting to instances in the fleet. We recommend you replace fleets before 13 months, consider using fleet aliases for a smooth transition. ACM isn't available in all Amazon Web Services regions. A fleet creation request with certificate generation enabled in an unsupported Region, fails with a 4xx error. For more information about the supported Regions, see Supported Regions in the Certificate Manager User Guide.
      value:
        CertificateType: "{{ CertificateType }}"
    - name: Locations
      description: |
        A set of remote locations to deploy additional instances to and manage as a multi-location fleet. Use this parameter when creating a fleet in Amazon Web Services Regions that support multiple locations. You can add any Amazon Web Services Region or Local Zone that's supported by Amazon GameLift Servers. Provide a list of one or more Amazon Web Services Region codes, such as us-west-2, or Local Zone names. When using this parameter, Amazon GameLift Servers requires you to include your home location in the request. For a list of supported Regions and Local Zones, see Amazon GameLift Servers service locations for managed hosting.
      value:
        - Location: "{{ Location }}"
    - name: Tags
      description: |
        A list of labels to assign to the new fleet resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ComputeType
      value: "{{ ComputeType }}"
      description: |
        The type of compute resource used to host your game servers. EC2 – The game server build is deployed to Amazon EC2 instances for cloud hosting. This is the default setting. ANYWHERE – Game servers and supporting software are deployed to compute resources that you provide and manage. With this compute type, you can also set the AnywhereConfiguration parameter.
      valid_values: ['EC2', 'ANYWHERE']
    - name: AnywhereConfiguration
      description: |
        Amazon GameLift Servers Anywhere configuration options.
      value:
        Cost: "{{ Cost }}"
    - name: InstanceRoleCredentialsProvider
      value: "{{ InstanceRoleCredentialsProvider }}"
      description: |
        Prompts Amazon GameLift Servers to generate a shared credentials file for the IAM role that's defined in InstanceRoleArn. The shared credentials file is stored on each fleet instance and refreshed as needed. Use shared credentials for applications that are deployed along with the game server executable, if the game server is integrated with server SDK version 5.x. For more information about using shared credentials, see Communicate with other Amazon Web Services resources from your fleets.
      valid_values: ['SHARED_CREDENTIAL_FILE']
    - name: PlayerGatewayMode
      value: "{{ PlayerGatewayMode }}"
      description: |
        Configures player gateway for your fleet. Player gateway provides benefits such as DDoS protection by rate limiting and validating traﬃc before it reaches game servers, hiding game server IP addresses from players, and providing updated endpoints when relay endpoints become unhealthy. Note, player gateway is only available for fleets using server SDK 5.x or later game server builds. How it works: When enabled, game clients connect to relay endpoints instead of to your game servers. Player gateway validates player gateway tokens and routes traffic to the appropriate game server. Your game backend calls GetPlayerConnectionDetails to retrieve relay endpoints and player gateway tokens for your game clients. To learn more about this topic, see DDoS protection with Amazon GameLift Servers player gateway. Possible values include: DISABLED (default) -- Game clients connect to the game server endpoint. Use this when you do not intend to integrate your game with player gateway. ENABLED -- Player gateway is available in fleet locations where it is supported. Your game backend can call GetPlayerConnectionDetails to obtain a player gateway token and endpoints for game clients. REQUIRED -- Player gateway is available in fleet locations where it is supported, and the fleet can only use locations that support this feature. Attempting to add a remote location to your fleet which does not support player gateway will result in an InvalidRequestException.
      valid_values: ['DISABLED', 'ENABLED', 'REQUIRED']
    - name: PlayerGatewayConfiguration
      description: |
        Configuration settings for player gateway. Use this to specify advanced options for how player gateway handles connections.
      value:
        GameServerIpProtocolSupported: "{{ GameServerIpProtocolSupported }}"
`}</CodeBlock>

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

This API works with the following fleet types: EC2, Anywhere Deletes all resources and information related to a fleet and shuts down any currently running fleet instances, including those in remote locations. If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling CreateVpcPeeringAuthorization. You don't need to explicitly delete the VPC peering connection. To delete a fleet, specify the fleet ID to be terminated. During the deletion process, the fleet status is changed to DELETING. When completed, the status switches to TERMINATED and the fleet event FLEET_DELETED is emitted. Learn more Setting up Amazon GameLift Servers Fleets

```sql
DELETE FROM aws.gamelift.fleets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_fleet_actions"
    values={[
        { label: 'start_fleet_actions', value: 'start_fleet_actions' },
        { label: 'stop_fleet_actions', value: 'stop_fleet_actions' }
    ]}
>
<TabItem value="start_fleet_actions">

This API works with the following fleet types: EC2, Container Resumes certain types of activity on fleet instances that were suspended with StopFleetActions. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity. This operation can be used in the following ways: To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. If successful, Amazon GameLift Servers once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect. Learn more Setting up Amazon GameLift Servers fleets

```sql
EXEC aws.gamelift.fleets.start_fleet_actions 
@region='{{ region }}' --required 
@@json=
'{
"FleetId": "{{ FleetId }}", 
"Actions": "{{ Actions }}", 
"Location": "{{ Location }}"
}'
;
```
</TabItem>
<TabItem value="stop_fleet_actions">

This API works with the following fleet types: EC2, Container Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. This operation can be used in the following ways: To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. If successful, Amazon GameLift Servers no longer initiates scaling events except in response to manual changes using UpdateFleetCapacity. To restart fleet actions again, call StartFleetActions. Learn more Setting up Amazon GameLift Servers Fleets

```sql
EXEC aws.gamelift.fleets.stop_fleet_actions 
@region='{{ region }}' --required 
@@json=
'{
"FleetId": "{{ FleetId }}", 
"Actions": "{{ Actions }}", 
"Location": "{{ Location }}"
}'
;
```
</TabItem>
</Tabs>
