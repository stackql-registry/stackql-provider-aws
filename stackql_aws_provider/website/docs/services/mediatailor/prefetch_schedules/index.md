--- 
title: prefetch_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - prefetch_schedules
  - mediatailor
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

Creates, updates, deletes, gets or lists a <code>prefetch_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="prefetch_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.prefetch_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_prefetch_schedule"
    values={[
        { label: 'get_prefetch_schedule', value: 'get_prefetch_schedule' },
        { label: 'list_prefetch_schedules', value: 'list_prefetch_schedules' }
    ]}
>
<TabItem value="get_prefetch_schedule">

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
    <td>The Amazon Resource Name (ARN) of the prefetch schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="Consumption" /></td>
    <td><code>object</code></td>
    <td>For single prefetch, describes how and when that MediaTailor places prefetched ads into upcoming ad breaks.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="PlaybackConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the playback configuration to create the prefetch schedule for.</td>
</tr>
<tr>
    <td><CopyableCode code="RecurringPrefetchConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration that defines how MediaTailor performs recurring prefetch.</td>
</tr>
<tr>
    <td><CopyableCode code="Retrieval" /></td>
    <td><code>object</code></td>
    <td>A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleType" /></td>
    <td><code>string</code></td>
    <td>The frequency that MediaTailor creates prefetch schedules. SINGLE indicates that this schedule applies to one ad break. RECURRING indicates that MediaTailor automatically creates a schedule for each ad avail in a live event. (SINGLE, RECURRING)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamId" /></td>
    <td><code>string</code></td>
    <td>An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the prefetch schedule. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_prefetch_schedules">

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
    <td>The Amazon Resource Name (ARN) of the prefetch schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="Consumption" /></td>
    <td><code>object</code></td>
    <td>For single prefetch, describes how and when that MediaTailor places prefetched ads into upcoming ad breaks.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="PlaybackConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the playback configuration to create the prefetch schedule for.</td>
</tr>
<tr>
    <td><CopyableCode code="RecurringPrefetchConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration that defines how MediaTailor performs recurring prefetch.</td>
</tr>
<tr>
    <td><CopyableCode code="Retrieval" /></td>
    <td><code>object</code></td>
    <td>A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleType" /></td>
    <td><code>string</code></td>
    <td>The frequency that MediaTailor creates prefetch schedules. SINGLE indicates that this schedule applies to one ad break. RECURRING indicates that MediaTailor automatically creates a schedule for each ad avail in a live event. For more information about the prefetch types and when you might use each, see Prefetching ads in Elemental MediaTailor. (SINGLE, RECURRING)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamId" /></td>
    <td><code>string</code></td>
    <td>An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the prefetch schedule. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
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
    <td><a href="#get_prefetch_schedule"><CopyableCode code="get_prefetch_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-playback_configuration_name"><code>playback_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see Using ad prefetching in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#list_prefetch_schedules"><CopyableCode code="list_prefetch_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-playback_configuration_name"><code>playback_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the prefetch schedules for a playback configuration.</td>
</tr>
<tr>
    <td><a href="#create_prefetch_schedule"><CopyableCode code="create_prefetch_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-playback_configuration_name"><code>playback_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see Using ad prefetching in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_prefetch_schedule"><CopyableCode code="delete_prefetch_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-playback_configuration_name"><code>playback_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a prefetch schedule for a specific playback configuration. If you call DeletePrefetchSchedule on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code. For more information about ad prefetching, see Using ad prefetching in the MediaTailor User Guide.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the prefetch schedule. If the action is successful, the service sends back an HTTP 204 response with an empty HTTP body.</td>
</tr>
<tr id="parameter-playback_configuration_name">
    <td><CopyableCode code="playback_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the playback configuration for this prefetch schedule.</td>
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
    defaultValue="get_prefetch_schedule"
    values={[
        { label: 'get_prefetch_schedule', value: 'get_prefetch_schedule' },
        { label: 'list_prefetch_schedules', value: 'list_prefetch_schedules' }
    ]}
>
<TabItem value="get_prefetch_schedule">

Retrieves a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see Using ad prefetching in the MediaTailor User Guide.

```sql
SELECT
Arn,
Consumption,
Name,
PlaybackConfigurationName,
RecurringPrefetchConfiguration,
Retrieval,
ScheduleType,
StreamId,
Tags
FROM aws.mediatailor.prefetch_schedules
WHERE name = '{{ name }}' -- required
AND playback_configuration_name = '{{ playback_configuration_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_prefetch_schedules">

Lists the prefetch schedules for a playback configuration.

```sql
SELECT
Arn,
Consumption,
Name,
PlaybackConfigurationName,
RecurringPrefetchConfiguration,
Retrieval,
ScheduleType,
StreamId,
Tags
FROM aws.mediatailor.prefetch_schedules
WHERE playback_configuration_name = '{{ playback_configuration_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_prefetch_schedule"
    values={[
        { label: 'create_prefetch_schedule', value: 'create_prefetch_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_prefetch_schedule">

Creates a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see Using ad prefetching in the MediaTailor User Guide.

```sql
INSERT INTO aws.mediatailor.prefetch_schedules (
Consumption,
Retrieval,
RecurringPrefetchConfiguration,
ScheduleType,
StreamId,
Tags,
name,
playback_configuration_name,
region
)
SELECT 
'{{ Consumption }}',
'{{ Retrieval }}',
'{{ RecurringPrefetchConfiguration }}',
'{{ ScheduleType }}',
'{{ StreamId }}',
'{{ Tags }}',
'{{ name }}',
'{{ playback_configuration_name }}',
'{{ region }}'
RETURNING
Arn,
Consumption,
Name,
PlaybackConfigurationName,
RecurringPrefetchConfiguration,
Retrieval,
ScheduleType,
StreamId,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: prefetch_schedules
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the prefetch_schedules resource.
    - name: playback_configuration_name
      value: "{{ playback_configuration_name }}"
      description: Required parameter for the prefetch_schedules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the prefetch_schedules resource.
    - name: Consumption
      description: |
        For single prefetch, describes how and when that MediaTailor places prefetched ads into upcoming ad breaks.
      value:
        AvailMatchingCriteria:
          - DynamicVariable: "{{ DynamicVariable }}"
            Operator: "{{ Operator }}"
        EndTime: "{{ EndTime }}"
        StartTime: "{{ StartTime }}"
    - name: Retrieval
      description: |
        A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.
      value:
        DynamicVariables: "{{ DynamicVariables }}"
        EndTime: "{{ EndTime }}"
        StartTime: "{{ StartTime }}"
        TrafficShapingType: "{{ TrafficShapingType }}"
        TrafficShapingRetrievalWindow:
          RetrievalWindowDurationSeconds: {{ RetrievalWindowDurationSeconds }}
        TrafficShapingTpsConfiguration:
          PeakTps: {{ PeakTps }}
          PeakConcurrentUsers: {{ PeakConcurrentUsers }}
    - name: RecurringPrefetchConfiguration
      description: |
        The configuration that defines how MediaTailor performs recurring prefetch.
      value:
        StartTime: "{{ StartTime }}"
        EndTime: "{{ EndTime }}"
        RecurringConsumption:
          RetrievedAdExpirationSeconds: {{ RetrievedAdExpirationSeconds }}
          AvailMatchingCriteria:
            - DynamicVariable: "{{ DynamicVariable }}"
              Operator: "{{ Operator }}"
        RecurringRetrieval:
          DynamicVariables: "{{ DynamicVariables }}"
          DelayAfterAvailEndSeconds: {{ DelayAfterAvailEndSeconds }}
          TrafficShapingType: "{{ TrafficShapingType }}"
          TrafficShapingRetrievalWindow:
            RetrievalWindowDurationSeconds: {{ RetrievalWindowDurationSeconds }}
          TrafficShapingTpsConfiguration:
            PeakTps: {{ PeakTps }}
            PeakConcurrentUsers: {{ PeakConcurrentUsers }}
    - name: ScheduleType
      value: "{{ ScheduleType }}"
      valid_values: ['SINGLE', 'RECURRING']
    - name: StreamId
      value: "{{ StreamId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_prefetch_schedule"
    values={[
        { label: 'delete_prefetch_schedule', value: 'delete_prefetch_schedule' }
    ]}
>
<TabItem value="delete_prefetch_schedule">

Deletes a prefetch schedule for a specific playback configuration. If you call DeletePrefetchSchedule on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code. For more information about ad prefetching, see Using ad prefetching in the MediaTailor User Guide.

```sql
DELETE FROM aws.mediatailor.prefetch_schedules
WHERE name = '{{ name }}' --required
AND playback_configuration_name = '{{ playback_configuration_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
