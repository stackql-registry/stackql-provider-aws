--- 
title: game_session_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - game_session_queues
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

Creates, updates, deletes, gets or lists a <code>game_session_queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_session_queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.game_session_queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_game_session_queues"
    values={[
        { label: 'describe_game_session_queues', value: 'describe_game_session_queues' }
    ]}
>
<TabItem value="describe_game_session_queues">

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
    <td><CopyableCode code="CustomEventData" /></td>
    <td><code>string</code></td>
    <td>Information that is added to all events that are related to this game session queue. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Destinations" /></td>
    <td><code>array</code></td>
    <td>A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.</td>
</tr>
<tr>
    <td><CopyableCode code="FilterConfiguration" /></td>
    <td><code>object</code></td>
    <td>A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as us-west-2. If this parameter is not set, game sessions can be placed in any queue location.</td>
</tr>
<tr>
    <td><CopyableCode code="GameSessionQueueArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::gamesessionqueue/&lt;queue name&gt;. In a Amazon GameLift Servers game session queue ARN, the resource ID matches the Name value. (pattern: &lt;code&gt;^arn:.*:gamesessionqueue\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with game session queue. Queue names must be unique within each Region. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationTarget" /></td>
    <td><code>string</code></td>
    <td>An SNS topic ARN that is set up to receive game session placement notifications. See Setting up notifications for game session placement. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*(\.fifo)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PlayerLatencyPolicies" /></td>
    <td><code>array</code></td>
    <td>A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests. Use multiple policies to gradually relax the cap over time if Amazon GameLift Servers can't make a placement. Policies are evaluated in order starting with the lowest maximum latency value.</td>
</tr>
<tr>
    <td><CopyableCode code="PriorityConfiguration" /></td>
    <td><code>object</code></td>
    <td>Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeoutInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status. The minimum value is 10 and the maximum value is 600.</td>
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
    <td><a href="#describe_game_session_queues"><CopyableCode code="describe_game_session_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region. Learn more View Your Queues</td>
</tr>
<tr>
    <td><a href="#create_game_session_queue"><CopyableCode code="create_game_session_queue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to locate the best available placement locations for a new game session, and then prompts the game server process to start a new game session. A game session queue is configured with a set of destinations (Amazon GameLift Servers fleets or aliases) that determine where the queue can place new game sessions. These destinations can span multiple Amazon Web Services Regions, can use different instance types, and can include both Spot and On-Demand fleets. If the queue includes multi-location fleets, the queue can place game sessions in any of a fleet's remote locations. You can configure a queue to determine how it selects the best available placement for a new game session. Queues can prioritize placement decisions based on a combination of location, hosting cost, and player latency. You can set up the queue to use the default prioritization or provide alternate instructions using PriorityConfiguration. Request options Use this operation to make these common types of requests. Create a queue with the minimum required parameters. Name Destinations (This parameter isn't required, but a queue can't make placements without at least one destination.) Create a queue with placement notification. Queues that have high placement activity must use a notification system, such as with Amazon Simple Notification Service (Amazon SNS) or Amazon CloudWatch. Required parameters Name and Destinations NotificationTarget Create a queue with custom prioritization settings. These custom settings replace the default prioritization configuration for a queue. Required parameters Name and Destinations PriorityConfiguration Create a queue with special rules for processing player latency data. Required parameters Name and Destinations PlayerLatencyPolicies Results If successful, this operation returns a new GameSessionQueue object with an assigned queue ARN. Use the queue's name or ARN when submitting new game session requests with StartGameSessionPlacement or StartMatchmaking. Learn more Design a game session queue Create a game session queue Related actions CreateGameSessionQueue | DescribeGameSessionQueues | UpdateGameSessionQueue | DeleteGameSessionQueue | All APIs by task</td>
</tr>
<tr>
    <td><a href="#update_game_session_queue"><CopyableCode code="update_game_session_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. Learn more Using Multi-Region Queues</td>
</tr>
<tr>
    <td><a href="#delete_game_session_queue"><CopyableCode code="delete_game_session_queue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Deletes a game session queue. Once a queue is successfully deleted, unfulfilled StartGameSessionPlacement requests that reference the queue will fail. To delete a queue, specify the queue name.</td>
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
    defaultValue="describe_game_session_queues"
    values={[
        { label: 'describe_game_session_queues', value: 'describe_game_session_queues' }
    ]}
>
<TabItem value="describe_game_session_queues">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region. Learn more View Your Queues

```sql
SELECT
CustomEventData,
Destinations,
FilterConfiguration,
GameSessionQueueArn,
Name,
NotificationTarget,
PlayerLatencyPolicies,
PriorityConfiguration,
TimeoutInSeconds
FROM aws.gamelift.game_session_queues
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_game_session_queue"
    values={[
        { label: 'create_game_session_queue', value: 'create_game_session_queue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_game_session_queue">

This API works with the following fleet types: EC2, Anywhere, Container Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to locate the best available placement locations for a new game session, and then prompts the game server process to start a new game session. A game session queue is configured with a set of destinations (Amazon GameLift Servers fleets or aliases) that determine where the queue can place new game sessions. These destinations can span multiple Amazon Web Services Regions, can use different instance types, and can include both Spot and On-Demand fleets. If the queue includes multi-location fleets, the queue can place game sessions in any of a fleet's remote locations. You can configure a queue to determine how it selects the best available placement for a new game session. Queues can prioritize placement decisions based on a combination of location, hosting cost, and player latency. You can set up the queue to use the default prioritization or provide alternate instructions using PriorityConfiguration. Request options Use this operation to make these common types of requests. Create a queue with the minimum required parameters. Name Destinations (This parameter isn't required, but a queue can't make placements without at least one destination.) Create a queue with placement notification. Queues that have high placement activity must use a notification system, such as with Amazon Simple Notification Service (Amazon SNS) or Amazon CloudWatch. Required parameters Name and Destinations NotificationTarget Create a queue with custom prioritization settings. These custom settings replace the default prioritization configuration for a queue. Required parameters Name and Destinations PriorityConfiguration Create a queue with special rules for processing player latency data. Required parameters Name and Destinations PlayerLatencyPolicies Results If successful, this operation returns a new GameSessionQueue object with an assigned queue ARN. Use the queue's name or ARN when submitting new game session requests with StartGameSessionPlacement or StartMatchmaking. Learn more Design a game session queue Create a game session queue Related actions CreateGameSessionQueue | DescribeGameSessionQueues | UpdateGameSessionQueue | DeleteGameSessionQueue | All APIs by task

```sql
INSERT INTO aws.gamelift.game_session_queues (
Name,
TimeoutInSeconds,
PlayerLatencyPolicies,
Destinations,
FilterConfiguration,
PriorityConfiguration,
CustomEventData,
NotificationTarget,
Tags,
region
)
SELECT 
'{{ Name }}',
{{ TimeoutInSeconds }},
'{{ PlayerLatencyPolicies }}',
'{{ Destinations }}',
'{{ FilterConfiguration }}',
'{{ PriorityConfiguration }}',
'{{ CustomEventData }}',
'{{ NotificationTarget }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
GameSessionQueue
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: game_session_queues
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the game_session_queues resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
    - name: TimeoutInSeconds
      value: {{ TimeoutInSeconds }}
      description: |
        The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status. If you don't specify a request timeout, the queue uses a default value. The minimum value is 10 and the maximum value is 600.
    - name: PlayerLatencyPolicies
      description: |
        A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests. Use multiple policies to gradually relax the cap over time if Amazon GameLift Servers can't make a placement. Policies are evaluated in order starting with the lowest maximum latency value.
      value:
        - MaximumIndividualPlayerLatencyMilliseconds: {{ MaximumIndividualPlayerLatencyMilliseconds }}
          PolicyDurationSeconds: {{ PolicyDurationSeconds }}
    - name: Destinations
      description: |
        A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.
      value:
        - DestinationArn: "{{ DestinationArn }}"
    - name: FilterConfiguration
      description: |
        A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as us-west-2. If this parameter is not set, game sessions can be placed in any queue location.
      value:
        AllowedLocations:
          - "{{ AllowedLocations }}"
    - name: PriorityConfiguration
      description: |
        Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process.
      value:
        PriorityOrder:
          - "{{ PriorityOrder }}"
        LocationOrder:
          - "{{ LocationOrder }}"
    - name: CustomEventData
      value: "{{ CustomEventData }}"
      description: |
        Information to be added to all events that are related to this game session queue.
    - name: NotificationTarget
      value: "{{ NotificationTarget }}"
      description: |
        An SNS topic ARN that is set up to receive game session placement notifications. See Setting up notifications for game session placement.
    - name: Tags
      description: |
        A list of labels to assign to the new game session queue resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_game_session_queue"
    values={[
        { label: 'update_game_session_queue', value: 'update_game_session_queue' }
    ]}
>
<TabItem value="update_game_session_queue">

This API works with the following fleet types: EC2, Anywhere, Container Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. Learn more Using Multi-Region Queues

```sql
UPDATE aws.gamelift.game_session_queues
SET 
Name = '{{ Name }}',
TimeoutInSeconds = {{ TimeoutInSeconds }},
PlayerLatencyPolicies = '{{ PlayerLatencyPolicies }}',
Destinations = '{{ Destinations }}',
FilterConfiguration = '{{ FilterConfiguration }}',
PriorityConfiguration = '{{ PriorityConfiguration }}',
CustomEventData = '{{ CustomEventData }}',
NotificationTarget = '{{ NotificationTarget }}'
WHERE 
region = '{{ region }}' --required
RETURNING
GameSessionQueue;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_game_session_queue"
    values={[
        { label: 'delete_game_session_queue', value: 'delete_game_session_queue' }
    ]}
>
<TabItem value="delete_game_session_queue">

This API works with the following fleet types: EC2, Anywhere, Container Deletes a game session queue. Once a queue is successfully deleted, unfulfilled StartGameSessionPlacement requests that reference the queue will fail. To delete a queue, specify the queue name.

```sql
DELETE FROM aws.gamelift.game_session_queues
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
