--- 
title: journeys
hide_title: false
hide_table_of_contents: false
keywords:
  - journeys
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>journeys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="journeys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.journeys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_journey"
    values={[
        { label: 'get_journey', value: 'get_journey' },
        { label: 'list_journeys', value: 'list_journeys' }
    ]}
>
<TabItem value="get_journey">

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
    <td><CopyableCode code="activities" /></td>
    <td><code>object</code></td>
    <td>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the journey applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="closed_days" /></td>
    <td><code>object</code></td>
    <td>The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The date, in ISO 8601 format, when the journey was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey.</td>
</tr>
<tr>
    <td><CopyableCode code="journey_channel_settings" /></td>
    <td><code>object</code></td>
    <td>The channel-specific configurations for the journey.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The date, in ISO 8601 format, when the journey was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="limits" /></td>
    <td><code>object</code></td>
    <td>The messaging and entry limits for the journey.</td>
</tr>
<tr>
    <td><CopyableCode code="local_time" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the journey's scheduled start and end times use each participant's local time. If this value is true, the schedule uses each participant's local time.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the journey.</td>
</tr>
<tr>
    <td><CopyableCode code="open_hours" /></td>
    <td><code>object</code></td>
    <td>The time when a journey can send messages. QuietTime should be configured first and SendingSchedule should be set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="quiet_time" /></td>
    <td><code>object</code></td>
    <td>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met: The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value. The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey. The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey. If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_frequency" /></td>
    <td><code>string</code></td>
    <td>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_on_segment_update" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the journey participants should be refreshed when a segment is updated.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>The schedule settings for the journey.</td>
</tr>
<tr>
    <td><CopyableCode code="sending_schedule" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if journey has Advance Quiet Time enabled. This flag should be set to true in order to allow using OpenHours and ClosedDays.</td>
</tr>
<tr>
    <td><CopyableCode code="start_activity" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the first activity in the journey.</td>
</tr>
<tr>
    <td><CopyableCode code="start_condition" /></td>
    <td><code>object</code></td>
    <td>The segment that defines which users are participants in the journey.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current status of the journey. Possible values are: DRAFT - The journey is being developed and hasn't been published yet. ACTIVE - The journey has been developed and published. Depending on the journey's schedule, the journey may currently be running or scheduled to start running at a later time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it. COMPLETED - The journey has been published and has finished running. All participants have entered the journey and no participants are waiting to complete the journey or any activities in the journey. CANCELLED - The journey has been stopped. If a journey's status is CANCELLED, you can't add, change, or remove activities or segment settings from the journey. CLOSED - The journey has been published and has started running. It may have also passed its scheduled end time, or passed its scheduled start time and a refresh frequency hasn't been specified for it. If a journey's status is CLOSED, you can't add participants to it, and no existing participants can enter the journey for the first time. However, any existing participants who are currently waiting to start an activity may continue the journey. (DRAFT, ACTIVE, COMPLETED, CANCELLED, CLOSED, PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="timezone_estimation_methods" /></td>
    <td><code>array</code></td>
    <td>An array of time zone estimation methods, if any, to use for determining an Endpoints time zone if the Endpoint does not have a value for the Demographic.Timezone attribute. PHONE_NUMBER - A time zone is determined based on the Endpoint.Address and Endpoint.Location.Country. POSTAL_CODE - A time zone is determined based on the Endpoint.Location.PostalCode and Endpoint.Location.Country. POSTAL_CODE detection is only supported in the United States, United Kingdom, Australia, New Zealand, Canada, France, Italy, Spain, Germany and in regions where Amazon Pinpoint is available.</td>
</tr>
<tr>
    <td><CopyableCode code="wait_for_quiet_time" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether endpoints in quiet hours should enter a wait activity until quiet hours have elapsed.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>This object is not used or supported.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_journeys">

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
    <td><CopyableCode code="item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each journey that's associated with the application.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
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
    <td><a href="#get_journey"><CopyableCode code="get_journey" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-journey-id"><code>journey-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status, configuration, and other settings for a journey.</td>
</tr>
<tr>
    <td><a href="#list_journeys"><CopyableCode code="list_journeys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.</td>
</tr>
<tr>
    <td><a href="#create_journey"><CopyableCode code="create_journey" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WriteJourneyRequest"><code>WriteJourneyRequest</code></a></td>
    <td></td>
    <td>Creates a journey for an application.</td>
</tr>
<tr>
    <td><a href="#update_journey"><CopyableCode code="update_journey" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-journey-id"><code>journey-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WriteJourneyRequest"><code>WriteJourneyRequest</code></a></td>
    <td></td>
    <td>Updates the configuration and other settings for a journey.</td>
</tr>
<tr>
    <td><a href="#update_journey_state"><CopyableCode code="update_journey_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-journey-id"><code>journey-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JourneyStateRequest"><code>JourneyStateRequest</code></a></td>
    <td></td>
    <td>Cancels (stops) an active journey.</td>
</tr>
<tr>
    <td><a href="#delete_journey"><CopyableCode code="delete_journey" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-journey-id"><code>journey-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a journey from an application.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-journey-id">
    <td><CopyableCode code="journey-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The NextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_journey"
    values={[
        { label: 'get_journey', value: 'get_journey' },
        { label: 'list_journeys', value: 'list_journeys' }
    ]}
>
<TabItem value="get_journey">

Retrieves information about the status, configuration, and other settings for a journey.

```sql
SELECT
activities,
application_id,
closed_days,
creation_date,
id,
journey_channel_settings,
last_modified_date,
limits,
local_time,
name,
open_hours,
quiet_time,
refresh_frequency,
refresh_on_segment_update,
schedule,
sending_schedule,
start_activity,
start_condition,
state,
timezone_estimation_methods,
wait_for_quiet_time,
tags
FROM aws.pinpoint.journeys
WHERE `application-id` = '{{ application-id }}' -- required
AND `journey-id` = '{{ journey-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_journeys">

Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.

```sql
SELECT
item,
next_token
FROM aws.pinpoint.journeys
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
AND `page-size` = '{{ page-size }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_journey"
    values={[
        { label: 'create_journey', value: 'create_journey' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_journey">

Creates a journey for an application.

```sql
INSERT INTO aws.pinpoint.journeys (
WriteJourneyRequest,
`application-id`,
region
)
SELECT 
'{{ WriteJourneyRequest }}' /* required */,
'{{ application-id }}',
'{{ region }}'
RETURNING
journey_response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: journeys
  props:
    - name: application-id
      value: "{{ application-id }}"
      description: Required parameter for the journeys resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the journeys resource.
    - name: WriteJourneyRequest
      description: |
        Specifies the configuration and other settings for a journey.
      value:
        Activities: "{{ Activities }}"
        CreationDate: "{{ CreationDate }}"
        LastModifiedDate: "{{ LastModifiedDate }}"
        Limits:
          DailyCap: {{ DailyCap }}
          EndpointReentryCap: {{ EndpointReentryCap }}
          MessagesPerSecond: {{ MessagesPerSecond }}
          EndpointReentryInterval: "{{ EndpointReentryInterval }}"
          TimeframeCap:
            Cap: {{ Cap }}
            Days: {{ Days }}
          TotalCap: {{ TotalCap }}
        LocalTime: {{ LocalTime }}
        Name: "{{ Name }}"
        QuietTime:
          End: "{{ End }}"
          Start: "{{ Start }}"
        RefreshFrequency: "{{ RefreshFrequency }}"
        Schedule:
          EndTime: "{{ EndTime }}"
          StartTime: "{{ StartTime }}"
          Timezone: "{{ Timezone }}"
        StartActivity: "{{ StartActivity }}"
        StartCondition:
          Description: "{{ Description }}"
          EventStartCondition:
            EventFilter:
              Dimensions:
                Attributes: "{{ Attributes }}"
                EventType: "{{ EventType }}"
                Metrics: "{{ Metrics }}"
              FilterType: "{{ FilterType }}"
            SegmentId: "{{ SegmentId }}"
          SegmentStartCondition:
            SegmentId: "{{ SegmentId }}"
        State: "{{ State }}"
        WaitForQuietTime: {{ WaitForQuietTime }}
        RefreshOnSegmentUpdate: {{ RefreshOnSegmentUpdate }}
        JourneyChannelSettings:
          ConnectCampaignArn: "{{ ConnectCampaignArn }}"
          ConnectCampaignExecutionRoleArn: "{{ ConnectCampaignExecutionRoleArn }}"
        SendingSchedule: {{ SendingSchedule }}
        OpenHours:
          EMAIL: "{{ EMAIL }}"
          SMS: "{{ SMS }}"
          PUSH: "{{ PUSH }}"
          VOICE: "{{ VOICE }}"
          CUSTOM: "{{ CUSTOM }}"
        ClosedDays:
          EMAIL:
            - Name: "{{ Name }}"
              StartDateTime: "{{ StartDateTime }}"
              EndDateTime: "{{ EndDateTime }}"
          SMS:
            - Name: "{{ Name }}"
              StartDateTime: "{{ StartDateTime }}"
              EndDateTime: "{{ EndDateTime }}"
          PUSH:
            - Name: "{{ Name }}"
              StartDateTime: "{{ StartDateTime }}"
              EndDateTime: "{{ EndDateTime }}"
          VOICE:
            - Name: "{{ Name }}"
              StartDateTime: "{{ StartDateTime }}"
              EndDateTime: "{{ EndDateTime }}"
          CUSTOM:
            - Name: "{{ Name }}"
              StartDateTime: "{{ StartDateTime }}"
              EndDateTime: "{{ EndDateTime }}"
        TimezoneEstimationMethods:
          - "{{ TimezoneEstimationMethods }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_journey"
    values={[
        { label: 'update_journey', value: 'update_journey' },
        { label: 'update_journey_state', value: 'update_journey_state' }
    ]}
>
<TabItem value="update_journey">

Updates the configuration and other settings for a journey.

```sql
UPDATE aws.pinpoint.journeys
SET 
WriteJourneyRequest = '{{ WriteJourneyRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND `journey-id` = '{{ journey-id }}' --required
AND region = '{{ region }}' --required
AND WriteJourneyRequest = '{{ WriteJourneyRequest }}' --required
RETURNING
journey_response;
```
</TabItem>
<TabItem value="update_journey_state">

Cancels (stops) an active journey.

```sql
UPDATE aws.pinpoint.journeys
SET 
JourneyStateRequest = '{{ JourneyStateRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND `journey-id` = '{{ journey-id }}' --required
AND region = '{{ region }}' --required
AND JourneyStateRequest = '{{ JourneyStateRequest }}' --required
RETURNING
journey_response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_journey"
    values={[
        { label: 'delete_journey', value: 'delete_journey' }
    ]}
>
<TabItem value="delete_journey">

Deletes a journey from an application.

```sql
DELETE FROM aws.pinpoint.journeys
WHERE `application-id` = '{{ application-id }}' --required
AND `journey-id` = '{{ journey-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
