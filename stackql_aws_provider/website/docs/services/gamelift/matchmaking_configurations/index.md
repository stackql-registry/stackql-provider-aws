--- 
title: matchmaking_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - matchmaking_configurations
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

Creates, updates, deletes, gets or lists a <code>matchmaking_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="matchmaking_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.matchmaking_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_matchmaking_configurations"
    values={[
        { label: 'describe_matchmaking_configurations', value: 'describe_matchmaking_configurations' }
    ]}
>
<TabItem value="describe_matchmaking_configurations">

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
    <td><CopyableCode code="acceptance_required" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. When this option is enabled, matchmaking tickets use the status REQUIRES_ACCEPTANCE to indicate when a completed potential match is waiting for player acceptance.</td>
</tr>
<tr>
    <td><CopyableCode code="acceptance_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_player_count" /></td>
    <td><code>integer</code></td>
    <td>The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used when FlexMatchMode is set to STANDALONE.</td>
</tr>
<tr>
    <td><CopyableCode code="backfill_mode" /></td>
    <td><code>string</code></td>
    <td>The method used to backfill game sessions created with this matchmaking configuration. MANUAL indicates that the game makes backfill requests or does not use the match backfill feature. AUTOMATIC indicates that GameLift creates backfill requests whenever a game session has one or more open slots. Learn more about manual and automatic backfill in Backfill existing games with FlexMatch. Automatic backfill is not available when FlexMatchMode is set to STANDALONE. (AUTOMATIC, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers matchmaking configuration resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::matchmakingconfiguration/&lt;matchmaking configuration name&gt;. In a Amazon GameLift Servers configuration ARN, the resource ID matches the Name value. (pattern: &lt;code&gt;^arn:.*:matchmakingconfiguration\/&#91;a-zA-Z0-9-\.&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="custom_event_data" /></td>
    <td><code>string</code></td>
    <td>Information to attach to all events related to the matchmaking configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with matchmaking configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_match_mode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this matchmaking configuration is being used with Amazon GameLift Servers hosting or as a standalone matchmaking solution. STANDALONE - FlexMatch forms matches and returns match information, including players and team assignments, in a MatchmakingSucceeded event. WITH_QUEUE - FlexMatch forms matches and uses the specified Amazon GameLift Servers queue to start a game session for the match. (STANDALONE, WITH_QUEUE)</td>
</tr>
<tr>
    <td><CopyableCode code="game_properties" /></td>
    <td><code>array</code></td>
    <td>A set of key-value pairs that can store custom data in a game session. For example: &#123;"Key": "difficulty", "Value": "novice"&#125;. This information is added to the new GameSession object that is created for a successful match. This parameter is not used when FlexMatchMode is set to STANDALONE. Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations. If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.</td>
</tr>
<tr>
    <td><CopyableCode code="game_session_data" /></td>
    <td><code>string</code></td>
    <td>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session. This information is added to the new GameSession object that is created for a successful match. This parameter is not used when FlexMatchMode is set to STANDALONE.</td>
</tr>
<tr>
    <td><CopyableCode code="game_session_queue_arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::gamesessionqueue/&lt;queue name&gt;. Queues can be located in any Region. Queues are used to start new Amazon GameLift Servers-hosted game sessions for matches that are created with this matchmaking configuration. This property is not set when FlexMatchMode is set to STANDALONE.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-\.&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_target" /></td>
    <td><code>string</code></td>
    <td>An SNS topic ARN that is set up to receive matchmaking notifications. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:_/-&#93;*(\.fifo)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="request_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses. (pattern: &lt;code&gt;^arn:.*:matchmakingruleset\/&#91;a-zA-Z0-9-\.&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule sets that are defined in the same Region. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-\.&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_matchmaking_configurations"><CopyableCode code="describe_matchmaking_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves the details of FlexMatch matchmaking configurations. This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. Learn more Setting up FlexMatch matchmakers</td>
</tr>
<tr>
    <td><a href="#create_matchmaking_configuration"><CopyableCode code="create_matchmaking_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RequestTimeoutSeconds"><code>RequestTimeoutSeconds</code></a>, <a href="#parameter-AcceptanceRequired"><code>AcceptanceRequired</code></a>, <a href="#parameter-RuleSetName"><code>RuleSetName</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift Servers hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift Servers hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift Servers hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift Servers hosting, you also need to identify the game session queue to use when starting a game session for the match. In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration. Learn more Design a FlexMatch matchmaker Set up FlexMatch event notification</td>
</tr>
<tr>
    <td><a href="#update_matchmaking_configuration"><CopyableCode code="update_matchmaking_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. Learn more Design a FlexMatch matchmaker</td>
</tr>
<tr>
    <td><a href="#delete_matchmaking_configuration"><CopyableCode code="delete_matchmaking_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.</td>
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
    defaultValue="describe_matchmaking_configurations"
    values={[
        { label: 'describe_matchmaking_configurations', value: 'describe_matchmaking_configurations' }
    ]}
>
<TabItem value="describe_matchmaking_configurations">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves the details of FlexMatch matchmaking configurations. This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. Learn more Setting up FlexMatch matchmakers

```sql
SELECT
acceptance_required,
acceptance_timeout_seconds,
additional_player_count,
backfill_mode,
configuration_arn,
creation_time,
custom_event_data,
description,
flex_match_mode,
game_properties,
game_session_data,
game_session_queue_arns,
name,
notification_target,
request_timeout_seconds,
rule_set_arn,
rule_set_name
FROM aws.gamelift.matchmaking_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_matchmaking_configuration"
    values={[
        { label: 'create_matchmaking_configuration', value: 'create_matchmaking_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_matchmaking_configuration">

This API works with the following fleet types: EC2, Anywhere, Container Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift Servers hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift Servers hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift Servers hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift Servers hosting, you also need to identify the game session queue to use when starting a game session for the match. In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration. Learn more Design a FlexMatch matchmaker Set up FlexMatch event notification

```sql
INSERT INTO aws.gamelift.matchmaking_configurations (
Name,
Description,
GameSessionQueueArns,
RequestTimeoutSeconds,
AcceptanceTimeoutSeconds,
AcceptanceRequired,
RuleSetName,
NotificationTarget,
AdditionalPlayerCount,
CustomEventData,
GameProperties,
GameSessionData,
BackfillMode,
FlexMatchMode,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ GameSessionQueueArns }}',
{{ RequestTimeoutSeconds }} /* required */,
{{ AcceptanceTimeoutSeconds }},
{{ AcceptanceRequired }} /* required */,
'{{ RuleSetName }}' /* required */,
'{{ NotificationTarget }}',
{{ AdditionalPlayerCount }},
'{{ CustomEventData }}',
'{{ GameProperties }}',
'{{ GameSessionData }}',
'{{ BackfillMode }}',
'{{ FlexMatchMode }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: matchmaking_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the matchmaking_configurations resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.
    - name: Description
      value: "{{ Description }}"
      description: |
        A human-readable description of the matchmaking configuration.
    - name: GameSessionQueueArns
      value:
        - "{{ GameSessionQueueArns }}"
      description: |
        The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:\`<region>\`::gamesessionqueue/<queue name>. Queues can be located in any Region. Queues are used to start new Amazon GameLift Servers-hosted game sessions for matches that are created with this matchmaking configuration. If FlexMatchMode is set to STANDALONE, do not set this parameter.
    - name: RequestTimeoutSeconds
      value: {{ RequestTimeoutSeconds }}
      description: |
        The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.
    - name: AcceptanceTimeoutSeconds
      value: {{ AcceptanceTimeoutSeconds }}
      description: |
        The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
    - name: AcceptanceRequired
      value: {{ AcceptanceRequired }}
      description: |
        A flag that determines whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. With this option enabled, matchmaking tickets use the status REQUIRES_ACCEPTANCE to indicate when a completed potential match is waiting for player acceptance.
    - name: RuleSetName
      value: "{{ RuleSetName }}"
      description: |
        A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region.
    - name: NotificationTarget
      value: "{{ NotificationTarget }}"
      description: |
        An SNS topic ARN that is set up to receive matchmaking notifications. See Setting up notifications for matchmaking for more information.
    - name: AdditionalPlayerCount
      value: {{ AdditionalPlayerCount }}
      description: |
        The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if FlexMatchMode is set to STANDALONE.
    - name: CustomEventData
      value: "{{ CustomEventData }}"
      description: |
        Information to be added to all events related to this matchmaking configuration.
    - name: GameProperties
      description: |
        A set of key-value pairs that can store custom data in a game session. For example: {"Key": "difficulty", "Value": "novice"}. This information is added to the new GameSession object that is created for a successful match. This parameter is not used if FlexMatchMode is set to STANDALONE. Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations. If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: GameSessionData
      value: "{{ GameSessionData }}"
      description: |
        A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session. This information is added to the new GameSession object that is created for a successful match. This parameter is not used if FlexMatchMode is set to STANDALONE.
    - name: BackfillMode
      value: "{{ BackfillMode }}"
      description: |
        The method used to backfill game sessions that are created with this matchmaking configuration. Specify MANUAL when your game manages backfill requests manually or does not use the match backfill feature. Specify AUTOMATIC to have Amazon GameLift Servers create a backfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in Backfill Existing Games with FlexMatch. Automatic backfill is not available when FlexMatchMode is set to STANDALONE.
      valid_values: ['AUTOMATIC', 'MANUAL']
    - name: FlexMatchMode
      value: "{{ FlexMatchMode }}"
      description: |
        Indicates whether this matchmaking configuration is being used with Amazon GameLift Servers hosting or as a standalone matchmaking solution. STANDALONE - FlexMatch forms matches and returns match information, including players and team assignments, in a MatchmakingSucceeded event. WITH_QUEUE - FlexMatch forms matches and uses the specified Amazon GameLift Servers queue to start a game session for the match.
      valid_values: ['STANDALONE', 'WITH_QUEUE']
    - name: Tags
      description: |
        A list of labels to assign to the new matchmaking configuration resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_matchmaking_configuration"
    values={[
        { label: 'update_matchmaking_configuration', value: 'update_matchmaking_configuration' }
    ]}
>
<TabItem value="update_matchmaking_configuration">

This API works with the following fleet types: EC2, Anywhere, Container Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. Learn more Design a FlexMatch matchmaker

```sql
UPDATE aws.gamelift.matchmaking_configurations
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
GameSessionQueueArns = '{{ GameSessionQueueArns }}',
RequestTimeoutSeconds = {{ RequestTimeoutSeconds }},
AcceptanceTimeoutSeconds = {{ AcceptanceTimeoutSeconds }},
AcceptanceRequired = {{ AcceptanceRequired }},
RuleSetName = '{{ RuleSetName }}',
NotificationTarget = '{{ NotificationTarget }}',
AdditionalPlayerCount = {{ AdditionalPlayerCount }},
CustomEventData = '{{ CustomEventData }}',
GameProperties = '{{ GameProperties }}',
GameSessionData = '{{ GameSessionData }}',
BackfillMode = '{{ BackfillMode }}',
FlexMatchMode = '{{ FlexMatchMode }}'
WHERE 
region = '{{ region }}' --required
RETURNING
configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_matchmaking_configuration"
    values={[
        { label: 'delete_matchmaking_configuration', value: 'delete_matchmaking_configuration' }
    ]}
>
<TabItem value="delete_matchmaking_configuration">

This API works with the following fleet types: EC2, Anywhere, Container Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.

```sql
DELETE FROM aws.gamelift.matchmaking_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
