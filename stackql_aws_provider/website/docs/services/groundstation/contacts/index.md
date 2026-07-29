--- 
title: contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - contacts
  - groundstation
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

Creates, updates, deletes, gets or lists a <code>contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.contacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_contacts"
    values={[
        { label: 'list_contacts', value: 'list_contacts' },
        { label: 'describe_contact', value: 'describe_contact' }
    ]}
>
<TabItem value="list_contacts">

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
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a contact. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_status" /></td>
    <td><code>string</code></td>
    <td>Status of a contact. (SCHEDULING, FAILED_TO_SCHEDULE, SCHEDULED, CANCELLED, AWS_CANCELLED, PREPASS, PASS, POSTPASS, COMPLETED, FAILED, AVAILABLE, CANCELLING, AWS_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time of a contact in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeris" /></td>
    <td><code>object</code></td>
    <td>The ephemeris that determines antenna pointing for the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error message of a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="ground_station" /></td>
    <td><code>string</code></td>
    <td>Name of a ground station.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_elevation" /></td>
    <td><code>object</code></td>
    <td>Maximum elevation angle of a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="mission_profile_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a mission profile. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:mission-profile/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="post_pass_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time in UTC of the post-pass period, at which you receive a CloudWatch event indicating the pass has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="pre_pass_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time in UTC of the pre-pass period, at which you receive a CloudWatch event indicating an upcoming pass.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region of a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="satellite_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a satellite. (pattern: &lt;code&gt;arn:aws:groundstation:(&#91;-a-z0-9&#93;&#123;1,50&#125;)?:&#91;0-9&#93;&#123;12&#125;:satellite/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time of a contact in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version information for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Projected time in UTC your satellite will set below the receive mask. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts. This field is not present for contacts with a SCHEDULING or SCHEDULED status.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Projected time in UTC your satellite will rise above the receive mask. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts. This field is not present for contacts with a SCHEDULING or SCHEDULED status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_contact">

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
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a contact. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_status" /></td>
    <td><code>string</code></td>
    <td>Status of a contact. (SCHEDULING, FAILED_TO_SCHEDULE, SCHEDULED, CANCELLED, AWS_CANCELLED, PREPASS, PASS, POSTPASS, COMPLETED, FAILED, AVAILABLE, CANCELLING, AWS_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="dataflow_list" /></td>
    <td><code>array</code></td>
    <td>List describing source and destination details for each dataflow edge.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time of a contact in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeris" /></td>
    <td><code>object</code></td>
    <td>The ephemeris that determines antenna pointing directions for the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error message for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="ground_station" /></td>
    <td><code>string</code></td>
    <td>Ground station for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_elevation" /></td>
    <td><code>object</code></td>
    <td>Maximum elevation angle of a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="mission_profile_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a mission profile. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:mission-profile/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="post_pass_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time in UTC of the post-pass period, at which you receive a CloudWatch event indicating the pass has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="pre_pass_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time in UTC of the pre-pass period, at which you receive a CloudWatch event indicating an upcoming pass.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region where the ReserveContact API was called to schedule this contact.</td>
</tr>
<tr>
    <td><CopyableCode code="satellite_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a satellite. (pattern: &lt;code&gt;arn:aws:groundstation:(&#91;-a-z0-9&#93;&#123;1,50&#125;)?:&#91;0-9&#93;&#123;12&#125;:satellite/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time of a contact in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_overrides" /></td>
    <td><code>object</code></td>
    <td>Tracking configuration overrides specified when the contact was reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version information for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Projected time in UTC your satellite will set below the receive mask. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Projected time in UTC your satellite will rise above the receive mask. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts.</td>
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
    <td><a href="#list_contacts"><CopyableCode code="list_contacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of contacts. If statusList contains AVAILABLE, the request must include groundStation, missionprofileArn, and satelliteArn.</td>
</tr>
<tr>
    <td><a href="#describe_contact"><CopyableCode code="describe_contact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an existing contact.</td>
</tr>
<tr>
    <td><a href="#update_contact"><CopyableCode code="update_contact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a specific contact.</td>
</tr>
<tr>
    <td><a href="#cancel_contact"><CopyableCode code="cancel_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels or stops a contact with a specified contact ID based on its position in the contact lifecycle. For contacts that: Have yet to start, the contact will be cancelled. Have started but have yet to finish, the contact will be stopped.</td>
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
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a contact.</td>
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
    defaultValue="list_contacts"
    values={[
        { label: 'list_contacts', value: 'list_contacts' },
        { label: 'describe_contact', value: 'describe_contact' }
    ]}
>
<TabItem value="list_contacts">

Returns a list of contacts. If statusList contains AVAILABLE, the request must include groundStation, missionprofileArn, and satelliteArn.

```sql
SELECT
contact_id,
contact_status,
end_time,
ephemeris,
error_message,
ground_station,
maximum_elevation,
mission_profile_arn,
post_pass_end_time,
pre_pass_start_time,
region,
satellite_arn,
start_time,
tags,
version,
visibility_end_time,
visibility_start_time
FROM aws.groundstation.contacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_contact">

Describes an existing contact.

```sql
SELECT
contact_id,
contact_status,
dataflow_list,
end_time,
ephemeris,
error_message,
ground_station,
maximum_elevation,
mission_profile_arn,
post_pass_end_time,
pre_pass_start_time,
region,
satellite_arn,
start_time,
tags,
tracking_overrides,
version,
visibility_end_time,
visibility_start_time
FROM aws.groundstation.contacts
WHERE contact_id = '{{ contact_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contact"
    values={[
        { label: 'update_contact', value: 'update_contact' }
    ]}
>
<TabItem value="update_contact">

Updates a specific contact.

```sql
UPDATE aws.groundstation.contacts
SET 
clientToken = '{{ clientToken }}',
trackingOverrides = '{{ trackingOverrides }}',
satelliteArn = '{{ satelliteArn }}'
WHERE 
contact_id = '{{ contact_id }}' --required
AND region = '{{ region }}' --required
RETURNING
contact_id,
version_id;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_contact"
    values={[
        { label: 'cancel_contact', value: 'cancel_contact' }
    ]}
>
<TabItem value="cancel_contact">

Cancels or stops a contact with a specified contact ID based on its position in the contact lifecycle. For contacts that: Have yet to start, the contact will be cancelled. Have started but have yet to finish, the contact will be stopped.

```sql
EXEC aws.groundstation.contacts.cancel_contact 
@contact_id='{{ contact_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
