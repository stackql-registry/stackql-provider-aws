--- 
title: hours_of_operation_overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - hours_of_operation_overrides
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

Creates, updates, deletes, gets or lists an <code>hours_of_operation_overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hours_of_operation_overrides" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.hours_of_operation_overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hours_of_operation_override"
    values={[
        { label: 'describe_hours_of_operation_override', value: 'describe_hours_of_operation_override' },
        { label: 'list_hours_of_operation_overrides', value: 'list_hours_of_operation_overrides' },
        { label: 'search_hours_of_operation_overrides', value: 'search_hours_of_operation_overrides' }
    ]}
>
<TabItem value="describe_hours_of_operation_override">

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
    <td><CopyableCode code="Config" /></td>
    <td><code>array</code></td>
    <td>Configuration information for the hours of operation override: day, start time, and end time.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the hours of operation override. (pattern: &lt;code&gt;^&#91;\P&#123;C&#125;\r\n\t&#93;&#123;1,250&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveFrom" /></td>
    <td><code>string</code></td>
    <td>The date from which the hours of operation override would be effective. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveTill" /></td>
    <td><code>string</code></td>
    <td>The date until the hours of operation override is effective. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationOverrideId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation override.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the hours of operation override. (pattern: &lt;code&gt;^&#91;\P&#123;C&#125;\r\n\t&#93;&#123;1,127&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OverrideType" /></td>
    <td><code>string</code></td>
    <td>Whether the override will be defined as a standard or as a recurring event. (STANDARD, OPEN, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="RecurrenceConfig" /></td>
    <td><code>object</code></td>
    <td>Defines the recurrence configuration for overrides. This configuration uses a recurrence pattern to specify when and how frequently an event should repeat.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hours_of_operation_overrides">

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
    <td><CopyableCode code="Config" /></td>
    <td><code>array</code></td>
    <td>Configuration information for the hours of operation override: day, start time, and end time.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the hours of operation override. (pattern: &lt;code&gt;^&#91;\P&#123;C&#125;\r\n\t&#93;&#123;1,250&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveFrom" /></td>
    <td><code>string</code></td>
    <td>The date from which the hours of operation override would be effective. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveTill" /></td>
    <td><code>string</code></td>
    <td>The date until the hours of operation override is effective. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationOverrideId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation override.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the hours of operation override. (pattern: &lt;code&gt;^&#91;\P&#123;C&#125;\r\n\t&#93;&#123;1,127&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OverrideType" /></td>
    <td><code>string</code></td>
    <td>Whether the override will be defined as a standard or as a recurring event. (STANDARD, OPEN, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="RecurrenceConfig" /></td>
    <td><code>object</code></td>
    <td>Defines the recurrence configuration for overrides. This configuration uses a recurrence pattern to specify when and how frequently an event should repeat.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_hours_of_operation_overrides">

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
    <td><CopyableCode code="Config" /></td>
    <td><code>array</code></td>
    <td>Configuration information for the hours of operation override: day, start time, and end time.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the hours of operation override. (pattern: &lt;code&gt;^&#91;\P&#123;C&#125;\r\n\t&#93;&#123;1,250&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveFrom" /></td>
    <td><code>string</code></td>
    <td>The date from which the hours of operation override would be effective. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveTill" /></td>
    <td><code>string</code></td>
    <td>The date until the hours of operation override is effective. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="HoursOfOperationOverrideId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation override.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the hours of operation override. (pattern: &lt;code&gt;^&#91;\P&#123;C&#125;\r\n\t&#93;&#123;1,127&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OverrideType" /></td>
    <td><code>string</code></td>
    <td>Whether the override will be defined as a standard or as a recurring event. (STANDARD, OPEN, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="RecurrenceConfig" /></td>
    <td><code>object</code></td>
    <td>Defines the recurrence configuration for overrides. This configuration uses a recurrence pattern to specify when and how frequently an event should repeat.</td>
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
    <td><a href="#describe_hours_of_operation_override"><CopyableCode code="describe_hours_of_operation_override" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-hours_of_operation_override_id"><code>hours_of_operation_override_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the hours of operation override.</td>
</tr>
<tr>
    <td><a href="#list_hours_of_operation_overrides"><CopyableCode code="list_hours_of_operation_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List the hours of operation overrides.</td>
</tr>
<tr>
    <td><a href="#search_hours_of_operation_overrides"><CopyableCode code="search_hours_of_operation_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the hours of operation overrides.</td>
</tr>
<tr>
    <td><a href="#create_hours_of_operation_override"><CopyableCode code="create_hours_of_operation_override" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EffectiveFrom"><code>EffectiveFrom</code></a>, <a href="#parameter-EffectiveTill"><code>EffectiveTill</code></a></td>
    <td></td>
    <td>Creates an hours of operation override in an Amazon Connect hours of operation resource.</td>
</tr>
<tr>
    <td><a href="#update_hours_of_operation_override"><CopyableCode code="update_hours_of_operation_override" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-hours_of_operation_override_id"><code>hours_of_operation_override_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the hours of operation override.</td>
</tr>
<tr>
    <td><a href="#delete_hours_of_operation_override"><CopyableCode code="delete_hours_of_operation_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-hours_of_operation_override_id"><code>hours_of_operation_override_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an hours of operation override in an Amazon Connect hours of operation resource.</td>
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
<tr id="parameter-hours_of_operation_id">
    <td><CopyableCode code="hours_of_operation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr id="parameter-hours_of_operation_override_id">
    <td><CopyableCode code="hours_of_operation_override_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation override.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
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
    defaultValue="describe_hours_of_operation_override"
    values={[
        { label: 'describe_hours_of_operation_override', value: 'describe_hours_of_operation_override' },
        { label: 'list_hours_of_operation_overrides', value: 'list_hours_of_operation_overrides' },
        { label: 'search_hours_of_operation_overrides', value: 'search_hours_of_operation_overrides' }
    ]}
>
<TabItem value="describe_hours_of_operation_override">

Describes the hours of operation override.

```sql
SELECT
Config,
Description,
EffectiveFrom,
EffectiveTill,
HoursOfOperationArn,
HoursOfOperationId,
HoursOfOperationOverrideId,
Name,
OverrideType,
RecurrenceConfig
FROM aws.connect.hours_of_operation_overrides
WHERE instance_id = '{{ instance_id }}' -- required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' -- required
AND hours_of_operation_override_id = '{{ hours_of_operation_override_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hours_of_operation_overrides">

List the hours of operation overrides.

```sql
SELECT
Config,
Description,
EffectiveFrom,
EffectiveTill,
HoursOfOperationArn,
HoursOfOperationId,
HoursOfOperationOverrideId,
Name,
OverrideType,
RecurrenceConfig
FROM aws.connect.hours_of_operation_overrides
WHERE instance_id = '{{ instance_id }}' -- required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_hours_of_operation_overrides">

Searches the hours of operation overrides.

```sql
SELECT
Config,
Description,
EffectiveFrom,
EffectiveTill,
HoursOfOperationArn,
HoursOfOperationId,
HoursOfOperationOverrideId,
Name,
OverrideType,
RecurrenceConfig
FROM aws.connect.hours_of_operation_overrides
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hours_of_operation_override"
    values={[
        { label: 'create_hours_of_operation_override', value: 'create_hours_of_operation_override' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hours_of_operation_override">

Creates an hours of operation override in an Amazon Connect hours of operation resource.

```sql
INSERT INTO aws.connect.hours_of_operation_overrides (
Name,
Description,
Config,
EffectiveFrom,
EffectiveTill,
RecurrenceConfig,
OverrideType,
instance_id,
hours_of_operation_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Config }}',
'{{ EffectiveFrom }}' /* required */,
'{{ EffectiveTill }}' /* required */,
'{{ RecurrenceConfig }}',
'{{ OverrideType }}',
'{{ instance_id }}',
'{{ hours_of_operation_id }}',
'{{ region }}'
RETURNING
HoursOfOperationOverrideId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hours_of_operation_overrides
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the hours_of_operation_overrides resource.
    - name: hours_of_operation_id
      value: "{{ hours_of_operation_id }}"
      description: Required parameter for the hours_of_operation_overrides resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hours_of_operation_overrides resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Config
      value:
        - Day: "{{ Day }}"
          StartTime:
            Hours: {{ Hours }}
            Minutes: {{ Minutes }}
          EndTime:
            Hours: {{ Hours }}
            Minutes: {{ Minutes }}
    - name: EffectiveFrom
      value: "{{ EffectiveFrom }}"
    - name: EffectiveTill
      value: "{{ EffectiveTill }}"
    - name: RecurrenceConfig
      description: |
        Defines the recurrence configuration for overrides. This configuration uses a recurrence pattern to specify when and how frequently an event should repeat.
      value:
        RecurrencePattern:
          Frequency: "{{ Frequency }}"
          Interval: {{ Interval }}
          ByMonth:
            - {{ ByMonth }}
          ByMonthDay:
            - {{ ByMonthDay }}
          ByWeekdayOccurrence:
            - {{ ByWeekdayOccurrence }}
    - name: OverrideType
      value: "{{ OverrideType }}"
      valid_values: ['STANDARD', 'OPEN', 'CLOSED']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_hours_of_operation_override"
    values={[
        { label: 'update_hours_of_operation_override', value: 'update_hours_of_operation_override' }
    ]}
>
<TabItem value="update_hours_of_operation_override">

Update the hours of operation override.

```sql
UPDATE aws.connect.hours_of_operation_overrides
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Config = '{{ Config }}',
EffectiveFrom = '{{ EffectiveFrom }}',
EffectiveTill = '{{ EffectiveTill }}',
RecurrenceConfig = '{{ RecurrenceConfig }}',
OverrideType = '{{ OverrideType }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' --required
AND hours_of_operation_override_id = '{{ hours_of_operation_override_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hours_of_operation_override"
    values={[
        { label: 'delete_hours_of_operation_override', value: 'delete_hours_of_operation_override' }
    ]}
>
<TabItem value="delete_hours_of_operation_override">

Deletes an hours of operation override in an Amazon Connect hours of operation resource.

```sql
DELETE FROM aws.connect.hours_of_operation_overrides
WHERE instance_id = '{{ instance_id }}' --required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' --required
AND hours_of_operation_override_id = '{{ hours_of_operation_override_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
