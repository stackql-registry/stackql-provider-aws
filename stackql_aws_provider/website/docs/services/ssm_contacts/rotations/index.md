--- 
title: rotations
hide_title: false
hide_table_of_contents: false
keywords:
  - rotations
  - ssm_contacts
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

Creates, updates, deletes, gets or lists a <code>rotations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rotations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.rotations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rotation"
    values={[
        { label: 'get_rotation', value: 'get_rotation' },
        { label: 'list_rotations', value: 'list_rotations' }
    ]}
>
<TabItem value="get_rotation">

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
    <td><CopyableCode code="ContactIds" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the contacts assigned to the on-call rotation team.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the on-call rotation. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-\s\.&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Recurrence" /></td>
    <td><code>object</code></td>
    <td>Specifies how long a rotation lasts before restarting at the beginning of the shift order.</td>
</tr>
<tr>
    <td><CopyableCode code="RotationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the on-call rotation. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The specified start time for the on-call rotation.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeZoneId" /></td>
    <td><code>string</code></td>
    <td>The time zone that the rotation’s activity is based on, in Internet Assigned Numbers Authority (IANA) format. (pattern: &lt;code&gt;^&#91;:a-zA-Z0-9_\-\s\.\\/&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rotations">

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
    <td><CopyableCode code="ContactIds" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the contacts assigned to the rotation team.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the rotation. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-\s\.&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Recurrence" /></td>
    <td><code>object</code></td>
    <td>Information about when an on-call rotation is in effect and how long the rotation period lasts.</td>
</tr>
<tr>
    <td><CopyableCode code="RotationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the rotation. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the rotation becomes active.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeZoneId" /></td>
    <td><code>string</code></td>
    <td>The time zone the rotation’s activity is based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". (pattern: &lt;code&gt;^&#91;:a-zA-Z0-9_\-\s\.\\/&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_rotation"><CopyableCode code="get_rotation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an on-call rotation.</td>
</tr>
<tr>
    <td><a href="#list_rotations"><CopyableCode code="list_rotations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of on-call rotations.</td>
</tr>
<tr>
    <td><a href="#create_rotation"><CopyableCode code="create_rotation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactIds"><code>ContactIds</code></a>, <a href="#parameter-TimeZoneId"><code>TimeZoneId</code></a></td>
    <td></td>
    <td>Creates a rotation in an on-call schedule.</td>
</tr>
<tr>
    <td><a href="#update_rotation"><CopyableCode code="update_rotation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RotationId"><code>RotationId</code></a></td>
    <td></td>
    <td>Updates the information specified for an on-call rotation.</td>
</tr>
<tr>
    <td><a href="#delete_rotation"><CopyableCode code="delete_rotation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.</td>
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
    defaultValue="get_rotation"
    values={[
        { label: 'get_rotation', value: 'get_rotation' },
        { label: 'list_rotations', value: 'list_rotations' }
    ]}
>
<TabItem value="get_rotation">

Retrieves information about an on-call rotation.

```sql
SELECT
ContactIds,
Name,
Recurrence,
RotationArn,
StartTime,
TimeZoneId
FROM aws.ssm_contacts.rotations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rotations">

Retrieves a list of on-call rotations.

```sql
SELECT
ContactIds,
Name,
Recurrence,
RotationArn,
StartTime,
TimeZoneId
FROM aws.ssm_contacts.rotations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rotation"
    values={[
        { label: 'create_rotation', value: 'create_rotation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rotation">

Creates a rotation in an on-call schedule.

```sql
INSERT INTO aws.ssm_contacts.rotations (
Name,
ContactIds,
StartTime,
TimeZoneId,
Recurrence,
Tags,
IdempotencyToken,
region
)
SELECT 
'{{ Name }}',
'{{ ContactIds }}' /* required */,
'{{ StartTime }}',
'{{ TimeZoneId }}' /* required */,
'{{ Recurrence }}',
'{{ Tags }}',
'{{ IdempotencyToken }}',
'{{ region }}'
RETURNING
RotationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rotations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rotations resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the rotation.
    - name: ContactIds
      value:
        - "{{ ContactIds }}"
      description: |
        The Amazon Resource Names (ARNs) of the contacts to add to the rotation. Only the PERSONAL contact type is supported. The contact types ESCALATION and ONCALL_SCHEDULE are not supported for this operation. The order that you list the contacts in is their shift order in the rotation schedule. To change the order of the contact's shifts, use the UpdateRotation operation.
    - name: StartTime
      value: "{{ StartTime }}"
      description: |
        The date and time that the rotation goes into effect.
    - name: TimeZoneId
      value: "{{ TimeZoneId }}"
      description: |
        The time zone to base the rotation’s activity on in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website. Designators for time zones that don’t support Daylight Savings Time rules, such as Pacific Standard Time (PST), are not supported.
    - name: Recurrence
      description: |
        Information about the rule that specifies when a shift's team members rotate.
      value:
        MonthlySettings:
          - DayOfMonth: {{ DayOfMonth }}
            HandOffTime:
              HourOfDay: {{ HourOfDay }}
              MinuteOfHour: {{ MinuteOfHour }}
        WeeklySettings:
          - DayOfWeek: "{{ DayOfWeek }}"
            HandOffTime:
              HourOfDay: {{ HourOfDay }}
              MinuteOfHour: {{ MinuteOfHour }}
        DailySettings:
          - HourOfDay: {{ HourOfDay }}
            MinuteOfHour: {{ MinuteOfHour }}
        NumberOfOnCalls: {{ NumberOfOnCalls }}
        ShiftCoverages: "{{ ShiftCoverages }}"
        RecurrenceMultiplier: {{ RecurrenceMultiplier }}
    - name: Tags
      description: |
        Optional metadata to assign to the rotation. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For more information, see Tagging Incident Manager resources in the Incident Manager User Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A token that ensures that the operation is called only once with the specified details.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rotation"
    values={[
        { label: 'update_rotation', value: 'update_rotation' }
    ]}
>
<TabItem value="update_rotation">

Updates the information specified for an on-call rotation.

```sql
UPDATE aws.ssm_contacts.rotations
SET 
RotationId = '{{ RotationId }}',
ContactIds = '{{ ContactIds }}',
StartTime = '{{ StartTime }}',
TimeZoneId = '{{ TimeZoneId }}',
Recurrence = '{{ Recurrence }}'
WHERE 
region = '{{ region }}' --required
AND RotationId = '{{ RotationId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rotation"
    values={[
        { label: 'delete_rotation', value: 'delete_rotation' }
    ]}
>
<TabItem value="delete_rotation">

Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.

```sql
DELETE FROM aws.ssm_contacts.rotations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
