--- 
title: game_server_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - game_server_groups
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

Creates, updates, deletes, gets or lists a <code>game_server_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_server_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.game_server_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_game_server_group"
    values={[
        { label: 'describe_game_server_group', value: 'describe_game_server_group' },
        { label: 'list_game_server_groups', value: 'list_game_server_groups' }
    ]}
>
<TabItem value="describe_game_server_group">

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
    <td><CopyableCode code="auto_scaling_group_arn" /></td>
    <td><code>string</code></td>
    <td>A generated unique ID for the Amazon EC2 Auto Scaling group that is associated with this game server group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="balancing_strategy" /></td>
    <td><code>string</code></td>
    <td>Indicates how Amazon GameLift Servers FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following: SPOT_ONLY - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced. SPOT_PREFERRED - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances. ON_DEMAND_ONLY - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force. (SPOT_ONLY, SPOT_PREFERRED, ON_DEMAND_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_group_arn" /></td>
    <td><code>string</code></td>
    <td>A generated unique ID for the game server group. (pattern: &lt;code&gt;^arn:.*:gameservergroup\/&#91;a-zA-Z0-9-\.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_group_name" /></td>
    <td><code>string</code></td>
    <td>A developer-defined identifier for the game server group. The name is unique for each Region in each Amazon Web Services account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_protection_policy" /></td>
    <td><code>string</code></td>
    <td>A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. (NO_PROTECTION, FULL_PROTECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_definitions" /></td>
    <td><code>array</code></td>
    <td>The set of Amazon EC2 instance types that Amazon GameLift Servers FleetIQ can use when balancing and automatically scaling instances in the corresponding Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this game server group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift Servers to access your Amazon EC2 Auto Scaling groups. (pattern: &lt;code&gt;^arn:.*:role\/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the game server group. Possible statuses include: NEW - Amazon GameLift Servers FleetIQ has validated the CreateGameServerGroup() request. ACTIVATING - Amazon GameLift Servers FleetIQ is setting up a game server group, which includes creating an Auto Scaling group in your Amazon Web Services account. ACTIVE - The game server group has been successfully created. DELETE_SCHEDULED - A request to delete the game server group has been received. DELETING - Amazon GameLift Servers FleetIQ has received a valid DeleteGameServerGroup() request and is processing it. Amazon GameLift Servers FleetIQ must first complete and release hosts before it deletes the Auto Scaling group and the game server group. DELETED - The game server group has been successfully deleted. ERROR - The asynchronous processes of activating or deleting a game server group has failed, resulting in an error state. (NEW, ACTIVATING, ACTIVE, DELETE_SCHEDULED, DELETING, DELETED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current game server group status. This information might provide additional insight on groups that are in ERROR status.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended_actions" /></td>
    <td><code>array</code></td>
    <td>A list of activities that are currently suspended for this game server group. If this property is empty, all activities are occurring.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_game_server_groups">

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
    <td><CopyableCode code="auto_scaling_group_arn" /></td>
    <td><code>string</code></td>
    <td>A generated unique ID for the Amazon EC2 Auto Scaling group that is associated with this game server group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="balancing_strategy" /></td>
    <td><code>string</code></td>
    <td>Indicates how Amazon GameLift Servers FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following: SPOT_ONLY - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced. SPOT_PREFERRED - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances. ON_DEMAND_ONLY - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force. (SPOT_ONLY, SPOT_PREFERRED, ON_DEMAND_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_group_arn" /></td>
    <td><code>string</code></td>
    <td>A generated unique ID for the game server group. (pattern: &lt;code&gt;^arn:.*:gameservergroup\/&#91;a-zA-Z0-9-\.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_group_name" /></td>
    <td><code>string</code></td>
    <td>A developer-defined identifier for the game server group. The name is unique for each Region in each Amazon Web Services account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_protection_policy" /></td>
    <td><code>string</code></td>
    <td>A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. (NO_PROTECTION, FULL_PROTECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_definitions" /></td>
    <td><code>array</code></td>
    <td>The set of Amazon EC2 instance types that Amazon GameLift Servers FleetIQ can use when balancing and automatically scaling instances in the corresponding Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this game server group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift Servers to access your Amazon EC2 Auto Scaling groups. (pattern: &lt;code&gt;^arn:.*:role\/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the game server group. Possible statuses include: NEW - Amazon GameLift Servers FleetIQ has validated the CreateGameServerGroup() request. ACTIVATING - Amazon GameLift Servers FleetIQ is setting up a game server group, which includes creating an Auto Scaling group in your Amazon Web Services account. ACTIVE - The game server group has been successfully created. DELETE_SCHEDULED - A request to delete the game server group has been received. DELETING - Amazon GameLift Servers FleetIQ has received a valid DeleteGameServerGroup() request and is processing it. Amazon GameLift Servers FleetIQ must first complete and release hosts before it deletes the Auto Scaling group and the game server group. DELETED - The game server group has been successfully deleted. ERROR - The asynchronous processes of activating or deleting a game server group has failed, resulting in an error state. (NEW, ACTIVATING, ACTIVE, DELETE_SCHEDULED, DELETING, DELETED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current game server group status. This information might provide additional insight on groups that are in ERROR status.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended_actions" /></td>
    <td><code>array</code></td>
    <td>A list of activities that are currently suspended for this game server group. If this property is empty, all activities are occurring.</td>
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
    <td><a href="#describe_game_server_group"><CopyableCode code="describe_game_server_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift Servers FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly. To get attributes for a game server group, provide a group name or ARN value. If successful, a GameServerGroup object is returned. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#list_game_server_groups"><CopyableCode code="list_game_server_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Lists a game server groups.</td>
</tr>
<tr>
    <td><a href="#create_game_server_group"><CopyableCode code="create_game_server_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameServerGroupName"><code>GameServerGroupName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-MinSize"><code>MinSize</code></a>, <a href="#parameter-MaxSize"><code>MaxSize</code></a>, <a href="#parameter-LaunchTemplate"><code>LaunchTemplate</code></a>, <a href="#parameter-InstanceDefinitions"><code>InstanceDefinitions</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Creates a Amazon GameLift Servers FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift Servers console. Game server group metrics and events are emitted to Amazon CloudWatch. Before creating a new game server group, you must have the following: An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see Launching an Instance from a Launch Template in the Amazon Elastic Compute Cloud User Guide. An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift Servers FleetIQ to create and interact with the Auto Scaling group. For more information, see Create IAM roles for cross-service interaction in the Amazon GameLift Servers FleetIQ Developer Guide. To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift Servers FleetIQ metric. Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift Servers FleetIQ as part of its balancing activities to optimize for availability and cost. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#update_game_server_group"><CopyableCode code="update_game_server_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameServerGroupName"><code>GameServerGroupName</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Updates Amazon GameLift Servers FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts. To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift Servers FleetIQ can continue to perform instance balancing activity. If successful, a GameServerGroup object is returned. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#delete_game_server_group"><CopyableCode code="delete_game_server_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources: The game server group The corresponding Auto Scaling group All game servers that are currently running in the group To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in ACTIVE or ERROR status. If the delete request is successful, a series of operations are kicked off. The game server group status is changed to DELETE_SCHEDULED, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift Servers FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in ERROR status. Amazon GameLift Servers FleetIQ emits delete events to Amazon CloudWatch. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#claim_game_server"><CopyableCode code="claim_game_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameServerGroupName"><code>GameServerGroupName</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift Servers FleetIQ locates an available game server, places it in CLAIMED status for 60 seconds, and returns connection information that players can use to connect to the game server. To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift Servers FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. Add filter options to further restrict how a game server is chosen, such as only allowing game servers on ACTIVE instances to be claimed. When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains AVAILABLE while the claim status is set to CLAIMED for up to 60 seconds. This time period gives the game server time to update its status to UTILIZED after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable. If you try to claim a specific game server, this request will fail in the following cases: If the game server utilization status is UTILIZED. If the game server claim status is CLAIMED. If the game server is running on an instance in DRAINING status and the provided filter option does not allow placing on DRAINING instances. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#suspend_game_server_group"><CopyableCode code="suspend_game_server_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameServerGroupName"><code>GameServerGroupName</code></a>, <a href="#parameter-SuspendActions"><code>SuspendActions</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling ResumeGameServerGroup. You can suspend the following activity: Instance type replacement - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a GameServerGroup object is returned showing that the activity is listed in SuspendedActions. Learn more Amazon GameLift Servers FleetIQ Guide</td>
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
    defaultValue="describe_game_server_group"
    values={[
        { label: 'describe_game_server_group', value: 'describe_game_server_group' },
        { label: 'list_game_server_groups', value: 'list_game_server_groups' }
    ]}
>
<TabItem value="describe_game_server_group">

This API works with the following fleet types: EC2 (FleetIQ) Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift Servers FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly. To get attributes for a game server group, provide a group name or ARN value. If successful, a GameServerGroup object is returned. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
SELECT
auto_scaling_group_arn,
balancing_strategy,
creation_time,
game_server_group_arn,
game_server_group_name,
game_server_protection_policy,
instance_definitions,
last_updated_time,
role_arn,
status,
status_reason,
suspended_actions
FROM aws.gamelift.game_server_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_game_server_groups">

This API works with the following fleet types: EC2 (FleetIQ) Lists a game server groups.

```sql
SELECT
auto_scaling_group_arn,
balancing_strategy,
creation_time,
game_server_group_arn,
game_server_group_name,
game_server_protection_policy,
instance_definitions,
last_updated_time,
role_arn,
status,
status_reason,
suspended_actions
FROM aws.gamelift.game_server_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_game_server_group"
    values={[
        { label: 'create_game_server_group', value: 'create_game_server_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_game_server_group">

This API works with the following fleet types: EC2 (FleetIQ) Creates a Amazon GameLift Servers FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift Servers console. Game server group metrics and events are emitted to Amazon CloudWatch. Before creating a new game server group, you must have the following: An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see Launching an Instance from a Launch Template in the Amazon Elastic Compute Cloud User Guide. An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift Servers FleetIQ to create and interact with the Auto Scaling group. For more information, see Create IAM roles for cross-service interaction in the Amazon GameLift Servers FleetIQ Developer Guide. To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift Servers FleetIQ metric. Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift Servers FleetIQ as part of its balancing activities to optimize for availability and cost. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
INSERT INTO aws.gamelift.game_server_groups (
GameServerGroupName,
RoleArn,
MinSize,
MaxSize,
LaunchTemplate,
InstanceDefinitions,
AutoScalingPolicy,
BalancingStrategy,
GameServerProtectionPolicy,
VpcSubnets,
Tags,
region
)
SELECT 
'{{ GameServerGroupName }}' /* required */,
'{{ RoleArn }}' /* required */,
{{ MinSize }} /* required */,
{{ MaxSize }} /* required */,
'{{ LaunchTemplate }}' /* required */,
'{{ InstanceDefinitions }}' /* required */,
'{{ AutoScalingPolicy }}',
'{{ BalancingStrategy }}',
'{{ GameServerProtectionPolicy }}',
'{{ VpcSubnets }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
game_server_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: game_server_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the game_server_groups resource.
    - name: GameServerGroupName
      value: "{{ GameServerGroupName }}"
      description: |
        An identifier for the new game server group. This value is used to generate unique ARN identifiers for the Amazon EC2 Auto Scaling group and the Amazon GameLift Servers FleetIQ game server group. The name must be unique per Region per Amazon Web Services account.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift Servers to access your Amazon EC2 Auto Scaling groups.
    - name: MinSize
      value: {{ MinSize }}
      description: |
        The minimum number of instances allowed in the Amazon EC2 Auto Scaling group. During automatic scaling events, Amazon GameLift Servers FleetIQ and Amazon EC2 do not scale down the group below this minimum. In production, this value should be set to at least 1. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.
    - name: MaxSize
      value: {{ MaxSize }}
      description: |
        The maximum number of instances allowed in the Amazon EC2 Auto Scaling group. During automatic scaling events, Amazon GameLift Servers FleetIQ and EC2 do not scale up the group above this maximum. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.
    - name: LaunchTemplate
      description: |
        The Amazon EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. You can specify the template using either the template name or ID. For help with creating a launch template, see Creating a Launch Template for an Auto Scaling Group in the Amazon Elastic Compute Cloud Auto Scaling User Guide. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs. If you specify network interfaces in your launch template, you must explicitly set the property AssociatePublicIpAddress to "true". If no network interface is specified in the launch template, Amazon GameLift Servers FleetIQ uses your account's default VPC.
      value:
        LaunchTemplateId: "{{ LaunchTemplateId }}"
        LaunchTemplateName: "{{ LaunchTemplateName }}"
        Version: "{{ Version }}"
    - name: InstanceDefinitions
      description: |
        The Amazon EC2 instance types and sizes to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by Amazon GameLift Servers FleetIQ. For more information on instance types, see EC2 Instance Types in the Amazon Elastic Compute Cloud User Guide. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see Instance Weighting for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
      value:
        - InstanceType: "{{ InstanceType }}"
          WeightedCapacity: "{{ WeightedCapacity }}"
    - name: AutoScalingPolicy
      description: |
        Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. The scaling policy uses the metric "PercentUtilizedGameServers" to maintain a buffer of idle game servers that can immediately accommodate new games and players. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.
      value:
        EstimatedInstanceWarmup: {{ EstimatedInstanceWarmup }}
        TargetTrackingConfiguration:
          TargetValue: {{ TargetValue }}
    - name: BalancingStrategy
      value: "{{ BalancingStrategy }}"
      description: |
        Indicates how Amazon GameLift Servers FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following: SPOT_ONLY - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced. SPOT_PREFERRED - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances. ON_DEMAND_ONLY - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.
      valid_values: ['SPOT_ONLY', 'SPOT_PREFERRED', 'ON_DEMAND_ONLY']
    - name: GameServerProtectionPolicy
      value: "{{ GameServerProtectionPolicy }}"
      description: |
        A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to NO_PROTECTION by default.
      valid_values: ['NO_PROTECTION', 'FULL_PROTECTION']
    - name: VpcSubnets
      value:
        - "{{ VpcSubnets }}"
      description: |
        A list of virtual private cloud (VPC) subnets to use with instances in the game server group. By default, all Amazon GameLift Servers FleetIQ-supported Availability Zones are used. You can use this parameter to specify VPCs that you've set up. This property cannot be updated after the game server group is created, and the corresponding Auto Scaling group will always use the property value that is set with this request, even if the Auto Scaling group is updated directly.
    - name: Tags
      description: |
        A list of labels to assign to the new game server group resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management, and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_game_server_group"
    values={[
        { label: 'update_game_server_group', value: 'update_game_server_group' }
    ]}
>
<TabItem value="update_game_server_group">

This API works with the following fleet types: EC2 (FleetIQ) Updates Amazon GameLift Servers FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts. To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift Servers FleetIQ can continue to perform instance balancing activity. If successful, a GameServerGroup object is returned. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
UPDATE aws.gamelift.game_server_groups
SET 
GameServerGroupName = '{{ GameServerGroupName }}',
RoleArn = '{{ RoleArn }}',
InstanceDefinitions = '{{ InstanceDefinitions }}',
GameServerProtectionPolicy = '{{ GameServerProtectionPolicy }}',
BalancingStrategy = '{{ BalancingStrategy }}'
WHERE 
region = '{{ region }}' --required
AND GameServerGroupName = '{{ GameServerGroupName }}' --required
RETURNING
game_server_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_game_server_group"
    values={[
        { label: 'delete_game_server_group', value: 'delete_game_server_group' }
    ]}
>
<TabItem value="delete_game_server_group">

This API works with the following fleet types: EC2 (FleetIQ) Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources: The game server group The corresponding Auto Scaling group All game servers that are currently running in the group To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in ACTIVE or ERROR status. If the delete request is successful, a series of operations are kicked off. The game server group status is changed to DELETE_SCHEDULED, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift Servers FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in ERROR status. Amazon GameLift Servers FleetIQ emits delete events to Amazon CloudWatch. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
DELETE FROM aws.gamelift.game_server_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="claim_game_server"
    values={[
        { label: 'claim_game_server', value: 'claim_game_server' },
        { label: 'suspend_game_server_group', value: 'suspend_game_server_group' }
    ]}
>
<TabItem value="claim_game_server">

This API works with the following fleet types: EC2 (FleetIQ) Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift Servers FleetIQ locates an available game server, places it in CLAIMED status for 60 seconds, and returns connection information that players can use to connect to the game server. To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift Servers FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. Add filter options to further restrict how a game server is chosen, such as only allowing game servers on ACTIVE instances to be claimed. When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains AVAILABLE while the claim status is set to CLAIMED for up to 60 seconds. This time period gives the game server time to update its status to UTILIZED after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable. If you try to claim a specific game server, this request will fail in the following cases: If the game server utilization status is UTILIZED. If the game server claim status is CLAIMED. If the game server is running on an instance in DRAINING status and the provided filter option does not allow placing on DRAINING instances. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
EXEC aws.gamelift.game_server_groups.claim_game_server 
@region='{{ region }}' --required 
@@json=
'{
"GameServerGroupName": "{{ GameServerGroupName }}", 
"GameServerId": "{{ GameServerId }}", 
"GameServerData": "{{ GameServerData }}", 
"FilterOption": "{{ FilterOption }}"
}'
;
```
</TabItem>
<TabItem value="suspend_game_server_group">

This API works with the following fleet types: EC2 (FleetIQ) Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling ResumeGameServerGroup. You can suspend the following activity: Instance type replacement - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a GameServerGroup object is returned showing that the activity is listed in SuspendedActions. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
EXEC aws.gamelift.game_server_groups.suspend_game_server_group 
@region='{{ region }}' --required 
@@json=
'{
"GameServerGroupName": "{{ GameServerGroupName }}", 
"SuspendActions": "{{ SuspendActions }}"
}'
;
```
</TabItem>
</Tabs>
