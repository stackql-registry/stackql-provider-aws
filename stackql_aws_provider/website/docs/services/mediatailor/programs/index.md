--- 
title: programs
hide_title: false
hide_table_of_contents: false
keywords:
  - programs
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

Creates, updates, deletes, gets or lists a <code>programs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="programs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.programs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_program"
    values={[
        { label: 'describe_program', value: 'describe_program' }
    ]}
>
<TabItem value="describe_program">

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
    <td><CopyableCode code="AdBreaks" /></td>
    <td><code>array</code></td>
    <td>The ad break configuration settings.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the program.</td>
</tr>
<tr>
    <td><CopyableCode code="AudienceMedia" /></td>
    <td><code>array</code></td>
    <td>The list of AudienceMedia defined in program.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel that the program belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="ClipRange" /></td>
    <td><code>object</code></td>
    <td>Clip range configuration for the VOD source associated with the program.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the program was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DurationMillis" /></td>
    <td><code>integer (int64)</code></td>
    <td>The duration of the live program in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="LiveSourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the LiveSource for this Program.</td>
</tr>
<tr>
    <td><CopyableCode code="ProgramName" /></td>
    <td><code>string</code></td>
    <td>The name of the program.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the program is scheduled to start in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2021-03-27T17:48:16.751Z represents March 27, 2021 at 17:48:16.751 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLocationName" /></td>
    <td><code>string</code></td>
    <td>The source location name.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the program. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
<tr>
    <td><CopyableCode code="VodSourceName" /></td>
    <td><code>string</code></td>
    <td>The name that's used to refer to a VOD source.</td>
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
    <td><a href="#describe_program"><CopyableCode code="describe_program" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-program_name"><code>program_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a program within a channel. For information about programs, see Working with programs in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#create_program"><CopyableCode code="create_program" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-program_name"><code>program_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ScheduleConfiguration"><code>ScheduleConfiguration</code></a>, <a href="#parameter-SourceLocationName"><code>SourceLocationName</code></a></td>
    <td></td>
    <td>Creates a program within a channel. For information about programs, see Working with programs in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#update_program"><CopyableCode code="update_program" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-program_name"><code>program_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ScheduleConfiguration"><code>ScheduleConfiguration</code></a></td>
    <td></td>
    <td>Updates a program within a channel.</td>
</tr>
<tr>
    <td><a href="#delete_program"><CopyableCode code="delete_program" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-program_name"><code>program_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a program within a channel. For information about programs, see Working with programs in the MediaTailor User Guide.</td>
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
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel.</td>
</tr>
<tr id="parameter-program_name">
    <td><CopyableCode code="program_name" /></td>
    <td><code>string</code></td>
    <td>The name of the program.</td>
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
    defaultValue="describe_program"
    values={[
        { label: 'describe_program', value: 'describe_program' }
    ]}
>
<TabItem value="describe_program">

Describes a program within a channel. For information about programs, see Working with programs in the MediaTailor User Guide.

```sql
SELECT
AdBreaks,
Arn,
AudienceMedia,
ChannelName,
ClipRange,
CreationTime,
DurationMillis,
LiveSourceName,
ProgramName,
ScheduledStartTime,
SourceLocationName,
Tags,
VodSourceName
FROM aws.mediatailor.programs
WHERE channel_name = '{{ channel_name }}' -- required
AND program_name = '{{ program_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_program"
    values={[
        { label: 'create_program', value: 'create_program' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_program">

Creates a program within a channel. For information about programs, see Working with programs in the MediaTailor User Guide.

```sql
INSERT INTO aws.mediatailor.programs (
AdBreaks,
LiveSourceName,
ScheduleConfiguration,
SourceLocationName,
VodSourceName,
AudienceMedia,
Tags,
channel_name,
program_name,
region
)
SELECT 
'{{ AdBreaks }}',
'{{ LiveSourceName }}',
'{{ ScheduleConfiguration }}' /* required */,
'{{ SourceLocationName }}' /* required */,
'{{ VodSourceName }}',
'{{ AudienceMedia }}',
'{{ Tags }}',
'{{ channel_name }}',
'{{ program_name }}',
'{{ region }}'
RETURNING
AdBreaks,
Arn,
AudienceMedia,
ChannelName,
ClipRange,
CreationTime,
DurationMillis,
LiveSourceName,
ProgramName,
ScheduledStartTime,
SourceLocationName,
Tags,
VodSourceName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: programs
  props:
    - name: channel_name
      value: "{{ channel_name }}"
      description: Required parameter for the programs resource.
    - name: program_name
      value: "{{ program_name }}"
      description: Required parameter for the programs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the programs resource.
    - name: AdBreaks
      value:
        - MessageType: "{{ MessageType }}"
          OffsetMillis: {{ OffsetMillis }}
          Slate:
            SourceLocationName: "{{ SourceLocationName }}"
            VodSourceName: "{{ VodSourceName }}"
          SpliceInsertMessage:
            AvailNum: {{ AvailNum }}
            AvailsExpected: {{ AvailsExpected }}
            SpliceEventId: {{ SpliceEventId }}
            UniqueProgramId: {{ UniqueProgramId }}
          TimeSignalMessage:
            SegmentationDescriptors:
              - SegmentationEventId: {{ SegmentationEventId }}
                SegmentationUpidType: {{ SegmentationUpidType }}
                SegmentationUpid: "{{ SegmentationUpid }}"
                SegmentationTypeId: {{ SegmentationTypeId }}
                SegmentNum: {{ SegmentNum }}
                SegmentsExpected: {{ SegmentsExpected }}
                SubSegmentNum: {{ SubSegmentNum }}
                SubSegmentsExpected: {{ SubSegmentsExpected }}
          AdBreakMetadata: "{{ AdBreakMetadata }}"
    - name: LiveSourceName
      value: "{{ LiveSourceName }}"
    - name: ScheduleConfiguration
      description: |
        Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.
      value:
        Transition:
          DurationMillis: {{ DurationMillis }}
          RelativePosition: "{{ RelativePosition }}"
          RelativeProgram: "{{ RelativeProgram }}"
          ScheduledStartTimeMillis: {{ ScheduledStartTimeMillis }}
          Type: "{{ Type }}"
        ClipRange:
          EndOffsetMillis: {{ EndOffsetMillis }}
          StartOffsetMillis: {{ StartOffsetMillis }}
    - name: SourceLocationName
      value: "{{ SourceLocationName }}"
    - name: VodSourceName
      value: "{{ VodSourceName }}"
    - name: AudienceMedia
      value:
        - Audience: "{{ Audience }}"
          AlternateMedia: "{{ AlternateMedia }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_program"
    values={[
        { label: 'update_program', value: 'update_program' }
    ]}
>
<TabItem value="update_program">

Updates a program within a channel.

```sql
UPDATE aws.mediatailor.programs
SET 
AdBreaks = '{{ AdBreaks }}',
ScheduleConfiguration = '{{ ScheduleConfiguration }}',
AudienceMedia = '{{ AudienceMedia }}'
WHERE 
channel_name = '{{ channel_name }}' --required
AND program_name = '{{ program_name }}' --required
AND region = '{{ region }}' --required
AND ScheduleConfiguration = '{{ ScheduleConfiguration }}' --required
RETURNING
AdBreaks,
Arn,
AudienceMedia,
ChannelName,
ClipRange,
CreationTime,
DurationMillis,
LiveSourceName,
ProgramName,
ScheduledStartTime,
SourceLocationName,
Tags,
VodSourceName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_program"
    values={[
        { label: 'delete_program', value: 'delete_program' }
    ]}
>
<TabItem value="delete_program">

Deletes a program within a channel. For information about programs, see Working with programs in the MediaTailor User Guide.

```sql
DELETE FROM aws.mediatailor.programs
WHERE channel_name = '{{ channel_name }}' --required
AND program_name = '{{ program_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
