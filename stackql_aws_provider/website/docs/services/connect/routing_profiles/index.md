--- 
title: routing_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_profiles
  - connect
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

Creates, updates, deletes, gets or lists a <code>routing_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routing_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.routing_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_routing_profile"
    values={[
        { label: 'describe_routing_profile', value: 'describe_routing_profile' },
        { label: 'list_routing_profiles', value: 'list_routing_profiles' },
        { label: 'search_routing_profiles', value: 'search_routing_profiles' }
    ]}
>
<TabItem value="describe_routing_profile">

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
    <td><CopyableCode code="AgentAvailabilityTimer" /></td>
    <td><code>string</code></td>
    <td>Whether agents with this routing profile will have their routing order calculated based on time since their last inbound contact or longest idle time. (TIME_SINCE_LAST_ACTIVITY, TIME_SINCE_LAST_INBOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedManualAssignmentQueueIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the associated manual assignment queues.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedQueueIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the associated queue.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultOutboundQueueId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the default outbound queue for this routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Whether this a default routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MediaConcurrencies" /></td>
    <td><code>array</code></td>
    <td>The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssociatedManualAssignmentQueues" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of associated manual assignment queues in routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssociatedQueues" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of associated queues in routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssociatedUsers" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of associated users in routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingProfileArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingProfileId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_routing_profiles">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the routing profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_routing_profiles">

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
    <td><CopyableCode code="AgentAvailabilityTimer" /></td>
    <td><code>string</code></td>
    <td>Whether agents with this routing profile will have their routing order calculated based on time since their last inbound contact or longest idle time. (TIME_SINCE_LAST_ACTIVITY, TIME_SINCE_LAST_INBOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedManualAssignmentQueueIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the associated manual assignment queues.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedQueueIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the associated queue.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultOutboundQueueId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the default outbound queue for this routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Whether this a default routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MediaConcurrencies" /></td>
    <td><code>array</code></td>
    <td>The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssociatedManualAssignmentQueues" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of associated manual assignment queues in routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssociatedQueues" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of associated queues in routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssociatedUsers" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of associated users in routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingProfileArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingProfileId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#describe_routing_profile"><CopyableCode code="describe_routing_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified routing profile. DescribeRoutingProfile does not populate AssociatedQueueIds in its response. The example Response Syntax shown on this page is incorrect; we are working to update it. SearchRoutingProfiles does include AssociatedQueueIds.</td>
</tr>
<tr>
    <td><a href="#list_routing_profiles"><CopyableCode code="list_routing_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides summary information about the routing profiles for the specified Amazon Connect instance. For more information about routing profiles, see Routing Profiles and Create a Routing Profile in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#search_routing_profiles"><CopyableCode code="search_routing_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches routing profiles in an Amazon Connect instance, with optional filtering. SearchRoutingProfiles does not populate LastModifiedRegion, LastModifiedTime, MediaConcurrencies.CrossChannelBehavior, and AgentAvailabilityTimer in its response, but DescribeRoutingProfile does.</td>
</tr>
<tr>
    <td><a href="#create_routing_profile"><CopyableCode code="create_routing_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefaultOutboundQueueId"><code>DefaultOutboundQueueId</code></a>, <a href="#parameter-MediaConcurrencies"><code>MediaConcurrencies</code></a></td>
    <td></td>
    <td>Creates a new routing profile.</td>
</tr>
<tr>
    <td><a href="#update_routing_profile_agent_availability_timer"><CopyableCode code="update_routing_profile_agent_availability_timer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AgentAvailabilityTimer"><code>AgentAvailabilityTimer</code></a></td>
    <td></td>
    <td>Whether agents with this routing profile will have their routing order calculated based on time since their last inbound contact or longest idle time.</td>
</tr>
<tr>
    <td><a href="#update_routing_profile_concurrency"><CopyableCode code="update_routing_profile_concurrency" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MediaConcurrencies"><code>MediaConcurrencies</code></a></td>
    <td></td>
    <td>Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.</td>
</tr>
<tr>
    <td><a href="#update_user_routing_profile"><CopyableCode code="update_user_routing_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoutingProfileId"><code>RoutingProfileId</code></a></td>
    <td></td>
    <td>Assigns the specified routing profile to the specified user.</td>
</tr>
<tr>
    <td><a href="#update_routing_profile_name"><CopyableCode code="update_routing_profile_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least Name or Description must be provided.</td>
</tr>
<tr>
    <td><a href="#delete_routing_profile"><CopyableCode code="delete_routing_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a routing profile.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-routing_profile_id">
    <td><CopyableCode code="routing_profile_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the routing profile.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user account.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_routing_profile"
    values={[
        { label: 'describe_routing_profile', value: 'describe_routing_profile' },
        { label: 'list_routing_profiles', value: 'list_routing_profiles' },
        { label: 'search_routing_profiles', value: 'search_routing_profiles' }
    ]}
>
<TabItem value="describe_routing_profile">

Describes the specified routing profile. DescribeRoutingProfile does not populate AssociatedQueueIds in its response. The example Response Syntax shown on this page is incorrect; we are working to update it. SearchRoutingProfiles does include AssociatedQueueIds.

```sql
SELECT
AgentAvailabilityTimer,
AssociatedManualAssignmentQueueIds,
AssociatedQueueIds,
DefaultOutboundQueueId,
Description,
InstanceId,
IsDefault,
LastModifiedRegion,
LastModifiedTime,
MediaConcurrencies,
Name,
NumberOfAssociatedManualAssignmentQueues,
NumberOfAssociatedQueues,
NumberOfAssociatedUsers,
RoutingProfileArn,
RoutingProfileId,
Tags
FROM aws.connect.routing_profiles
WHERE instance_id = '{{ instance_id }}' -- required
AND routing_profile_id = '{{ routing_profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_routing_profiles">

Provides summary information about the routing profiles for the specified Amazon Connect instance. For more information about routing profiles, see Routing Profiles and Create a Routing Profile in the Amazon Connect Administrator Guide.

```sql
SELECT
Arn,
Id,
LastModifiedRegion,
LastModifiedTime,
Name
FROM aws.connect.routing_profiles
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_routing_profiles">

Searches routing profiles in an Amazon Connect instance, with optional filtering. SearchRoutingProfiles does not populate LastModifiedRegion, LastModifiedTime, MediaConcurrencies.CrossChannelBehavior, and AgentAvailabilityTimer in its response, but DescribeRoutingProfile does.

```sql
SELECT
AgentAvailabilityTimer,
AssociatedManualAssignmentQueueIds,
AssociatedQueueIds,
DefaultOutboundQueueId,
Description,
InstanceId,
IsDefault,
LastModifiedRegion,
LastModifiedTime,
MediaConcurrencies,
Name,
NumberOfAssociatedManualAssignmentQueues,
NumberOfAssociatedQueues,
NumberOfAssociatedUsers,
RoutingProfileArn,
RoutingProfileId,
Tags
FROM aws.connect.routing_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_routing_profile"
    values={[
        { label: 'create_routing_profile', value: 'create_routing_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_routing_profile">

Creates a new routing profile.

```sql
INSERT INTO aws.connect.routing_profiles (
Name,
Description,
DefaultOutboundQueueId,
QueueConfigs,
ManualAssignmentQueueConfigs,
MediaConcurrencies,
Tags,
AgentAvailabilityTimer,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ DefaultOutboundQueueId }}' /* required */,
'{{ QueueConfigs }}',
'{{ ManualAssignmentQueueConfigs }}',
'{{ MediaConcurrencies }}' /* required */,
'{{ Tags }}',
'{{ AgentAvailabilityTimer }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
RoutingProfileArn,
RoutingProfileId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: routing_profiles
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the routing_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the routing_profiles resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: DefaultOutboundQueueId
      value: "{{ DefaultOutboundQueueId }}"
    - name: QueueConfigs
      value:
        - QueueReference:
            QueueId: "{{ QueueId }}"
            Channel: "{{ Channel }}"
          Priority: {{ Priority }}
          Delay: {{ Delay }}
    - name: ManualAssignmentQueueConfigs
      value:
        - QueueReference:
            QueueId: "{{ QueueId }}"
            Channel: "{{ Channel }}"
    - name: MediaConcurrencies
      value:
        - Channel: "{{ Channel }}"
          Concurrency: {{ Concurrency }}
          CrossChannelBehavior:
            BehaviorType: "{{ BehaviorType }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: AgentAvailabilityTimer
      value: "{{ AgentAvailabilityTimer }}"
      valid_values: ['TIME_SINCE_LAST_ACTIVITY', 'TIME_SINCE_LAST_INBOUND']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_routing_profile_agent_availability_timer"
    values={[
        { label: 'update_routing_profile_agent_availability_timer', value: 'update_routing_profile_agent_availability_timer' },
        { label: 'update_routing_profile_concurrency', value: 'update_routing_profile_concurrency' },
        { label: 'update_user_routing_profile', value: 'update_user_routing_profile' },
        { label: 'update_routing_profile_name', value: 'update_routing_profile_name' }
    ]}
>
<TabItem value="update_routing_profile_agent_availability_timer">

Whether agents with this routing profile will have their routing order calculated based on time since their last inbound contact or longest idle time.

```sql
UPDATE aws.connect.routing_profiles
SET 
AgentAvailabilityTimer = '{{ AgentAvailabilityTimer }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND routing_profile_id = '{{ routing_profile_id }}' --required
AND region = '{{ region }}' --required
AND AgentAvailabilityTimer = '{{ AgentAvailabilityTimer }}' --required;
```
</TabItem>
<TabItem value="update_routing_profile_concurrency">

Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.

```sql
UPDATE aws.connect.routing_profiles
SET 
MediaConcurrencies = '{{ MediaConcurrencies }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND routing_profile_id = '{{ routing_profile_id }}' --required
AND region = '{{ region }}' --required
AND MediaConcurrencies = '{{ MediaConcurrencies }}' --required;
```
</TabItem>
<TabItem value="update_user_routing_profile">

Assigns the specified routing profile to the specified user.

```sql
UPDATE aws.connect.routing_profiles
SET 
RoutingProfileId = '{{ RoutingProfileId }}'
WHERE 
user_id = '{{ user_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND RoutingProfileId = '{{ RoutingProfileId }}' --required;
```
</TabItem>
<TabItem value="update_routing_profile_name">

Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least Name or Description must be provided.

```sql
UPDATE aws.connect.routing_profiles
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND routing_profile_id = '{{ routing_profile_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_routing_profile"
    values={[
        { label: 'delete_routing_profile', value: 'delete_routing_profile' }
    ]}
>
<TabItem value="delete_routing_profile">

Deletes a routing profile.

```sql
DELETE FROM aws.connect.routing_profiles
WHERE instance_id = '{{ instance_id }}' --required
AND routing_profile_id = '{{ routing_profile_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
