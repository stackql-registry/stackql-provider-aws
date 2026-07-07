--- 
title: configuration_set_event_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_set_event_destinations
  - sms_voice
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

Creates, updates, deletes, gets or lists a <code>configuration_set_event_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_set_event_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sms_voice.configuration_set_event_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration_set_event_destinations"
    values={[
        { label: 'get_configuration_set_event_destinations', value: 'get_configuration_set_event_destinations' }
    ]}
>
<TabItem value="get_configuration_set_event_destinations">

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
    <td><CopyableCode code="EventDestinations" /></td>
    <td><code>array</code></td>
    <td>An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.</td>
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
    <td><a href="#get_configuration_set_event_destinations"><CopyableCode code="get_configuration_set_event_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.</td>
</tr>
<tr>
    <td><a href="#create_configuration_set_event_destination"><CopyableCode code="create_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new event destination in a configuration set.</td>
</tr>
<tr>
    <td><a href="#update_configuration_set_event_destination"><CopyableCode code="update_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-event_destination_name"><code>event_destination_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_set_event_destination"><CopyableCode code="delete_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-event_destination_name"><code>event_destination_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an event destination in a configuration set.</td>
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
<tr id="parameter-configuration_set_name">
    <td><CopyableCode code="configuration_set_name" /></td>
    <td><code>string</code></td>
    <td>ConfigurationSetName</td>
</tr>
<tr id="parameter-event_destination_name">
    <td><CopyableCode code="event_destination_name" /></td>
    <td><code>string</code></td>
    <td>EventDestinationName</td>
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
    defaultValue="get_configuration_set_event_destinations"
    values={[
        { label: 'get_configuration_set_event_destinations', value: 'get_configuration_set_event_destinations' }
    ]}
>
<TabItem value="get_configuration_set_event_destinations">

Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.

```sql
SELECT
EventDestinations
FROM aws.sms_voice.configuration_set_event_destinations
WHERE configuration_set_name = '{{ configuration_set_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_set_event_destination"
    values={[
        { label: 'create_configuration_set_event_destination', value: 'create_configuration_set_event_destination' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_set_event_destination">

Create a new event destination in a configuration set.

```sql
INSERT INTO aws.sms_voice.configuration_set_event_destinations (
EventDestination,
EventDestinationName,
configuration_set_name,
region
)
SELECT 
'{{ EventDestination }}',
'{{ EventDestinationName }}',
'{{ configuration_set_name }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_set_event_destinations
  props:
    - name: configuration_set_name
      value: "{{ configuration_set_name }}"
      description: Required parameter for the configuration_set_event_destinations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_set_event_destinations resource.
    - name: EventDestination
      description: |
        An object that defines a single event destination.
      value:
        CloudWatchLogsDestination:
          IamRoleArn: "{{ IamRoleArn }}"
          LogGroupArn: "{{ LogGroupArn }}"
        Enabled: {{ Enabled }}
        KinesisFirehoseDestination:
          DeliveryStreamArn: "{{ DeliveryStreamArn }}"
          IamRoleArn: "{{ IamRoleArn }}"
        MatchingEventTypes:
          - "{{ MatchingEventTypes }}"
        SnsDestination:
          TopicArn: "{{ TopicArn }}"
    - name: EventDestinationName
      value: "{{ EventDestinationName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration_set_event_destination"
    values={[
        { label: 'update_configuration_set_event_destination', value: 'update_configuration_set_event_destination' }
    ]}
>
<TabItem value="update_configuration_set_event_destination">

Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.

```sql
UPDATE aws.sms_voice.configuration_set_event_destinations
SET 
EventDestination = '{{ EventDestination }}'
WHERE 
configuration_set_name = '{{ configuration_set_name }}' --required
AND event_destination_name = '{{ event_destination_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_set_event_destination"
    values={[
        { label: 'delete_configuration_set_event_destination', value: 'delete_configuration_set_event_destination' }
    ]}
>
<TabItem value="delete_configuration_set_event_destination">

Deletes an event destination in a configuration set.

```sql
DELETE FROM aws.sms_voice.configuration_set_event_destinations
WHERE configuration_set_name = '{{ configuration_set_name }}' --required
AND event_destination_name = '{{ event_destination_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
