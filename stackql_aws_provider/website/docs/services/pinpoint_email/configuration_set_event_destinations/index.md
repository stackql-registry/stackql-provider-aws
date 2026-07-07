--- 
title: configuration_set_event_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_set_event_destinations
  - pinpoint_email
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_email.configuration_set_event_destinations" /></td></tr>
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
    <td>An array that includes all of the events destinations that have been configured for the configuration set.</td>
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
    <td>Retrieve a list of event destinations that are associated with a configuration set. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</td>
</tr>
<tr>
    <td><a href="#create_configuration_set_event_destination"><CopyableCode code="create_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDestinationName"><code>EventDestinationName</code></a>, <a href="#parameter-EventDestination"><code>EventDestination</code></a></td>
    <td></td>
    <td>Create an event destination. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. A single configuration set can include more than one event destination.</td>
</tr>
<tr>
    <td><a href="#update_configuration_set_event_destination"><CopyableCode code="update_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-event_destination_name"><code>event_destination_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDestination"><code>EventDestination</code></a></td>
    <td></td>
    <td>Update the configuration of an event destination for a configuration set. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_set_event_destination"><CopyableCode code="delete_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-event_destination_name"><code>event_destination_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an event destination. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</td>
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
    <td>The name of the configuration set that contains the event destination that you want to delete.</td>
</tr>
<tr id="parameter-event_destination_name">
    <td><CopyableCode code="event_destination_name" /></td>
    <td><code>string</code></td>
    <td>The name of the event destination that you want to delete.</td>
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

Retrieve a list of event destinations that are associated with a configuration set. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.

```sql
SELECT
EventDestinations
FROM aws.pinpoint_email.configuration_set_event_destinations
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

Create an event destination. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. A single configuration set can include more than one event destination.

```sql
INSERT INTO aws.pinpoint_email.configuration_set_event_destinations (
EventDestinationName,
EventDestination,
configuration_set_name,
region
)
SELECT 
'{{ EventDestinationName }}' /* required */,
'{{ EventDestination }}' /* required */,
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
    - name: EventDestinationName
      value: "{{ EventDestinationName }}"
      description: |
        The name of an event destination. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
    - name: EventDestination
      description: |
        An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
      value:
        Enabled: {{ Enabled }}
        MatchingEventTypes:
          - "{{ MatchingEventTypes }}"
        KinesisFirehoseDestination:
          IamRoleArn: "{{ IamRoleArn }}"
          DeliveryStreamArn: "{{ DeliveryStreamArn }}"
        CloudWatchDestination:
          DimensionConfigurations:
            - DimensionName: "{{ DimensionName }}"
              DimensionValueSource: "{{ DimensionValueSource }}"
              DefaultDimensionValue: "{{ DefaultDimensionValue }}"
        SnsDestination:
          TopicArn: "{{ TopicArn }}"
        PinpointDestination:
          ApplicationArn: "{{ ApplicationArn }}"
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

Update the configuration of an event destination for a configuration set. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.

```sql
UPDATE aws.pinpoint_email.configuration_set_event_destinations
SET 
EventDestination = '{{ EventDestination }}'
WHERE 
configuration_set_name = '{{ configuration_set_name }}' --required
AND event_destination_name = '{{ event_destination_name }}' --required
AND region = '{{ region }}' --required
AND EventDestination = '{{ EventDestination }}' --required;
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

Delete an event destination. In Amazon Pinpoint, events include message sends, deliveries, opens, clicks, bounces, and complaints. Event destinations are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.

```sql
DELETE FROM aws.pinpoint_email.configuration_set_event_destinations
WHERE configuration_set_name = '{{ configuration_set_name }}' --required
AND event_destination_name = '{{ event_destination_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
