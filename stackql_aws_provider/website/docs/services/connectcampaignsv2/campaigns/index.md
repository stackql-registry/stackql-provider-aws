--- 
title: campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - campaigns
  - connectcampaignsv2
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

Creates, updates, deletes, gets or lists a <code>campaigns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="campaigns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaignsv2.campaigns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_campaign"
    values={[
        { label: 'describe_campaign', value: 'describe_campaign' },
        { label: 'list_campaigns', value: 'list_campaigns' }
    ]}
>
<TabItem value="describe_campaign">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identifier representing a Campaign (pattern: &lt;code&gt;&#91;-:/a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of an Amazon Connect Campaign name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The resource name of an Amazon Connect campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_subtype_config" /></td>
    <td><code>object</code></td>
    <td>Campaign Channel Subtype config</td>
</tr>
<tr>
    <td><CopyableCode code="communication_limits_override" /></td>
    <td><code>object</code></td>
    <td>Communication limits config</td>
</tr>
<tr>
    <td><CopyableCode code="communication_time_config" /></td>
    <td><code>object</code></td>
    <td>Campaign communication time config</td>
</tr>
<tr>
    <td><CopyableCode code="connect_campaign_flow_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Names(ARN) (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;+:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-\d&#123;1,2&#125;:&#91;a-zA-Z0-9-&#93;+:&#91;^:&#93;+(?:/&#91;^:&#93;+)*(?:/&#91;^:&#93;+)?(?:\:&#91;^:&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_instance_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Connect Instance Id (pattern: &lt;code&gt;&#91;-_.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entry_limits_config" /></td>
    <td><code>object</code></td>
    <td>Campaign entry limits config</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Campaign schedule</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Source of the campaign</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of campaign externally exposed in APIs. (MANAGED, JOURNEY)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_campaigns">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identifier representing a Campaign (pattern: &lt;code&gt;&#91;-:/a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of an Amazon Connect Campaign name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The resource name of an Amazon Connect campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_subtypes" /></td>
    <td><code>array</code></td>
    <td>Channel subtype list</td>
</tr>
<tr>
    <td><CopyableCode code="connect_campaign_flow_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Names(ARN) (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;+:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-\d&#123;1,2&#125;:&#91;a-zA-Z0-9-&#93;+:&#91;^:&#93;+(?:/&#91;^:&#93;+)*(?:/&#91;^:&#93;+)?(?:\:&#91;^:&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_instance_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Connect Instance Id (pattern: &lt;code&gt;&#91;-_.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entry_limits_config" /></td>
    <td><code>object</code></td>
    <td>Campaign entry limits config</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Campaign schedule</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of campaign externally exposed in APIs. (MANAGED, JOURNEY)</td>
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
    <td><a href="#describe_campaign"><CopyableCode code="describe_campaign" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specific campaign.</td>
</tr>
<tr>
    <td><a href="#list_campaigns"><CopyableCode code="list_campaigns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides summary information about the campaigns under the specified Amazon Connect account.</td>
</tr>
<tr>
    <td><a href="#create_campaign"><CopyableCode code="create_campaign" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-connectInstanceId"><code>connectInstanceId</code></a></td>
    <td></td>
    <td>Creates a campaign for the specified Amazon Connect account. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_channel_subtype_config"><CopyableCode code="update_campaign_channel_subtype_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelSubtypeConfig"><code>channelSubtypeConfig</code></a></td>
    <td></td>
    <td>Updates the channel subtype config of a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_communication_limits"><CopyableCode code="update_campaign_communication_limits" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-communicationLimitsOverride"><code>communicationLimitsOverride</code></a></td>
    <td></td>
    <td>Updates the communication limits config for a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_communication_time"><CopyableCode code="update_campaign_communication_time" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-communicationTimeConfig"><code>communicationTimeConfig</code></a></td>
    <td></td>
    <td>Updates the communication time config for a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_entry_limits"><CopyableCode code="update_campaign_entry_limits" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-entryLimitsConfig"><code>entryLimitsConfig</code></a></td>
    <td></td>
    <td>Updates the entry limits config for a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_flow_association"><CopyableCode code="update_campaign_flow_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectCampaignFlowArn"><code>connectCampaignFlowArn</code></a></td>
    <td></td>
    <td>Updates the campaign flow associated with a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_name"><CopyableCode code="update_campaign_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the name of a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_schedule"><CopyableCode code="update_campaign_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-schedule"><code>schedule</code></a></td>
    <td></td>
    <td>Updates the schedule for a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_source"><CopyableCode code="update_campaign_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td></td>
    <td>Updates the campaign source with a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#delete_campaign_channel_subtype_config"><CopyableCode code="delete_campaign_channel_subtype_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-channelSubtype"><code>channelSubtype</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the channel subtype config of a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#delete_campaign_communication_limits"><CopyableCode code="delete_campaign_communication_limits" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-config"><code>config</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the communication limits config for a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#delete_campaign"><CopyableCode code="delete_campaign" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a campaign from the specified Amazon Connect account.</td>
</tr>
<tr>
    <td><a href="#delete_campaign_communication_time"><CopyableCode code="delete_campaign_communication_time" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-config"><code>config</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the communication time config for a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#delete_campaign_entry_limits"><CopyableCode code="delete_campaign_entry_limits" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the entry limits config for a campaign. This API is idempotent.</td>
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
<tr id="parameter-channelSubtype">
    <td><CopyableCode code="channelSubtype" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-config">
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_campaign"
    values={[
        { label: 'describe_campaign', value: 'describe_campaign' },
        { label: 'list_campaigns', value: 'list_campaigns' }
    ]}
>
<TabItem value="describe_campaign">

Describes the specific campaign.

```sql
SELECT
id,
name,
arn,
channel_subtype_config,
communication_limits_override,
communication_time_config,
connect_campaign_flow_arn,
connect_instance_id,
entry_limits_config,
schedule,
source,
tags,
type_
FROM aws.connectcampaignsv2.campaigns
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_campaigns">

Provides summary information about the campaigns under the specified Amazon Connect account.

```sql
SELECT
id,
name,
arn,
channel_subtypes,
connect_campaign_flow_arn,
connect_instance_id,
entry_limits_config,
schedule,
type_
FROM aws.connectcampaignsv2.campaigns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_campaign"
    values={[
        { label: 'create_campaign', value: 'create_campaign' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_campaign">

Creates a campaign for the specified Amazon Connect account. This API is idempotent.

```sql
INSERT INTO aws.connectcampaignsv2.campaigns (
name,
connectInstanceId,
channelSubtypeConfig,
type,
source,
connectCampaignFlowArn,
schedule,
entryLimitsConfig,
communicationTimeConfig,
communicationLimitsOverride,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ connectInstanceId }}' /* required */,
'{{ channelSubtypeConfig }}',
'{{ type }}',
'{{ source }}',
'{{ connectCampaignFlowArn }}',
'{{ schedule }}',
'{{ entryLimitsConfig }}',
'{{ communicationTimeConfig }}',
'{{ communicationLimitsOverride }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: campaigns
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the campaigns resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of an Amazon Connect Campaign name.
    - name: connectInstanceId
      value: "{{ connectInstanceId }}"
      description: |
        Amazon Connect Instance Id
    - name: channelSubtypeConfig
      description: |
        Campaign Channel Subtype config
      value:
        telephony:
          capacity: {{ capacity }}
          connectQueueId: "{{ connectQueueId }}"
          outboundMode:
            progressive:
              bandwidthAllocation: {{ bandwidthAllocation }}
            predictive:
              bandwidthAllocation: {{ bandwidthAllocation }}
            agentless: "{{ agentless }}"
            preview:
              bandwidthAllocation: {{ bandwidthAllocation }}
              timeoutConfig:
                durationInSeconds: {{ durationInSeconds }}
              agentActions:
                - "{{ agentActions }}"
          defaultOutboundConfig:
            connectContactFlowId: "{{ connectContactFlowId }}"
            connectSourcePhoneNumber: "{{ connectSourcePhoneNumber }}"
            answerMachineDetectionConfig:
              enableAnswerMachineDetection: {{ enableAnswerMachineDetection }}
              awaitAnswerMachinePrompt: {{ awaitAnswerMachinePrompt }}
            ringTimeout: {{ ringTimeout }}
        sms:
          capacity: {{ capacity }}
          outboundMode:
            agentless: "{{ agentless }}"
          defaultOutboundConfig:
            connectSourcePhoneNumberArn: "{{ connectSourcePhoneNumberArn }}"
            wisdomTemplateArn: "{{ wisdomTemplateArn }}"
        email:
          capacity: {{ capacity }}
          outboundMode:
            agentless: "{{ agentless }}"
          defaultOutboundConfig:
            connectSourceEmailAddress: "{{ connectSourceEmailAddress }}"
            sourceEmailAddressDisplayName: "{{ sourceEmailAddressDisplayName }}"
            wisdomTemplateArn: "{{ wisdomTemplateArn }}"
        whatsApp:
          capacity: {{ capacity }}
          outboundMode:
            agentless: "{{ agentless }}"
          defaultOutboundConfig:
            connectSourcePhoneNumberArn: "{{ connectSourcePhoneNumberArn }}"
            wisdomTemplateArn: "{{ wisdomTemplateArn }}"
    - name: type
      value: "{{ type }}"
      description: |
        The type of campaign externally exposed in APIs.
      valid_values: ['MANAGED', 'JOURNEY']
    - name: source
      description: |
        Source of the campaign
      value:
        customerProfilesSegmentArn: "{{ customerProfilesSegmentArn }}"
        eventTrigger:
          customerProfilesDomainArn: "{{ customerProfilesDomainArn }}"
    - name: connectCampaignFlowArn
      value: "{{ connectCampaignFlowArn }}"
      description: |
        Amazon Resource Names(ARN)
    - name: schedule
      description: |
        Campaign schedule
      value:
        startTime: "{{ startTime }}"
        endTime: "{{ endTime }}"
        refreshFrequency: "{{ refreshFrequency }}"
    - name: entryLimitsConfig
      description: |
        Campaign entry limits config
      value:
        maxEntryCount: {{ maxEntryCount }}
        minEntryInterval: "{{ minEntryInterval }}"
    - name: communicationTimeConfig
      description: |
        Campaign communication time config
      value:
        localTimeZoneConfig:
          defaultTimeZone: "{{ defaultTimeZone }}"
          localTimeZoneDetection:
            - "{{ localTimeZoneDetection }}"
          localTimeZoneDetectionScope: "{{ localTimeZoneDetectionScope }}"
        telephony:
          openHours:
            dailyHours: "{{ dailyHours }}"
          restrictedPeriods:
            restrictedPeriodList:
              - name: "{{ name }}"
                startDate: "{{ startDate }}"
                endDate: "{{ endDate }}"
        sms:
          openHours:
            dailyHours: "{{ dailyHours }}"
          restrictedPeriods:
            restrictedPeriodList:
              - name: "{{ name }}"
                startDate: "{{ startDate }}"
                endDate: "{{ endDate }}"
        email:
          openHours:
            dailyHours: "{{ dailyHours }}"
          restrictedPeriods:
            restrictedPeriodList:
              - name: "{{ name }}"
                startDate: "{{ startDate }}"
                endDate: "{{ endDate }}"
        whatsApp:
          openHours:
            dailyHours: "{{ dailyHours }}"
          restrictedPeriods:
            restrictedPeriodList:
              - name: "{{ name }}"
                startDate: "{{ startDate }}"
                endDate: "{{ endDate }}"
    - name: communicationLimitsOverride
      description: |
        Communication limits config
      value:
        allChannelSubtypes:
          communicationLimitsList:
            - maxCountPerRecipient: {{ maxCountPerRecipient }}
              frequency: {{ frequency }}
              unit: "{{ unit }}"
        instanceLimitsHandling: "{{ instanceLimitsHandling }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Tag map with key and value.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_campaign_channel_subtype_config"
    values={[
        { label: 'update_campaign_channel_subtype_config', value: 'update_campaign_channel_subtype_config' },
        { label: 'update_campaign_communication_limits', value: 'update_campaign_communication_limits' },
        { label: 'update_campaign_communication_time', value: 'update_campaign_communication_time' },
        { label: 'update_campaign_entry_limits', value: 'update_campaign_entry_limits' },
        { label: 'update_campaign_flow_association', value: 'update_campaign_flow_association' },
        { label: 'update_campaign_name', value: 'update_campaign_name' },
        { label: 'update_campaign_schedule', value: 'update_campaign_schedule' },
        { label: 'update_campaign_source', value: 'update_campaign_source' }
    ]}
>
<TabItem value="update_campaign_channel_subtype_config">

Updates the channel subtype config of a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaignsv2.campaigns
SET 
channelSubtypeConfig = '{{ channelSubtypeConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND channelSubtypeConfig = '{{ channelSubtypeConfig }}' --required;
```
</TabItem>
<TabItem value="update_campaign_communication_limits">

Updates the communication limits config for a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaignsv2.campaigns
SET 
communicationLimitsOverride = '{{ communicationLimitsOverride }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND communicationLimitsOverride = '{{ communicationLimitsOverride }}' --required;
```
</TabItem>
<TabItem value="update_campaign_communication_time">

Updates the communication time config for a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaignsv2.campaigns
SET 
communicationTimeConfig = '{{ communicationTimeConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND communicationTimeConfig = '{{ communicationTimeConfig }}' --required;
```
</TabItem>
<TabItem value="update_campaign_entry_limits">

Updates the entry limits config for a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaignsv2.campaigns
SET 
entryLimitsConfig = '{{ entryLimitsConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND entryLimitsConfig = '{{ entryLimitsConfig }}' --required;
```
</TabItem>
<TabItem value="update_campaign_flow_association">

Updates the campaign flow associated with a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaignsv2.campaigns
SET 
connectCampaignFlowArn = '{{ connectCampaignFlowArn }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND connectCampaignFlowArn = '{{ connectCampaignFlowArn }}' --required;
```
</TabItem>
<TabItem value="update_campaign_name">

Updates the name of a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaignsv2.campaigns
SET 
name = '{{ name }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
<TabItem value="update_campaign_schedule">

Updates the schedule for a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaignsv2.campaigns
SET 
schedule = '{{ schedule }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND schedule = '{{ schedule }}' --required;
```
</TabItem>
<TabItem value="update_campaign_source">

Updates the campaign source with a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaignsv2.campaigns
SET 
source = '{{ source }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND source = '{{ source }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_campaign_channel_subtype_config"
    values={[
        { label: 'delete_campaign_channel_subtype_config', value: 'delete_campaign_channel_subtype_config' },
        { label: 'delete_campaign_communication_limits', value: 'delete_campaign_communication_limits' },
        { label: 'delete_campaign', value: 'delete_campaign' }
    ]}
>
<TabItem value="delete_campaign_channel_subtype_config">

Deletes the channel subtype config of a campaign. This API is idempotent.

```sql
DELETE FROM aws.connectcampaignsv2.campaigns
WHERE id = '{{ id }}' --required
AND channelSubtype = '{{ channelSubtype }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_campaign_communication_limits">

Deletes the communication limits config for a campaign. This API is idempotent.

```sql
DELETE FROM aws.connectcampaignsv2.campaigns
WHERE id = '{{ id }}' --required
AND config = '{{ config }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_campaign">

Deletes a campaign from the specified Amazon Connect account.

```sql
DELETE FROM aws.connectcampaignsv2.campaigns
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_campaign_communication_time"
    values={[
        { label: 'delete_campaign_communication_time', value: 'delete_campaign_communication_time' },
        { label: 'delete_campaign_entry_limits', value: 'delete_campaign_entry_limits' }
    ]}
>
<TabItem value="delete_campaign_communication_time">

Deletes the communication time config for a campaign. This API is idempotent.

```sql
EXEC aws.connectcampaignsv2.campaigns.delete_campaign_communication_time 
@id='{{ id }}' --required, 
@config='{{ config }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_campaign_entry_limits">

Deletes the entry limits config for a campaign. This API is idempotent.

```sql
EXEC aws.connectcampaignsv2.campaigns.delete_campaign_entry_limits 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
