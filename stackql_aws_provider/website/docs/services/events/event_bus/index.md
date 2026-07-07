--- 
title: event_bus
hide_title: false
hide_table_of_contents: false
keywords:
  - event_bus
  - events
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

Creates, updates, deletes, gets or lists an <code>event_bus</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_bus" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.event_bus" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_bus"
    values={[
        { label: 'describe_event_bus', value: 'describe_event_bus' }
    ]}
>
<TabItem value="describe_event_bus">

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
    <td>The Amazon Resource Name (ARN) of the account permitted to write events to the current account.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the event bus was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeadLetterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration details of the Amazon SQS queue for EventBridge to use as a dead-letter queue (DLQ). For more information, see Using dead-letter queues to process undelivered events in the EventBridge User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The event bus description.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS customer managed key for EventBridge to use to encrypt events on this event bus, if one has been specified. For more information, see Data encryption in EventBridge in the Amazon EventBridge User Guide. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-/:&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the event bus was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LogConfig" /></td>
    <td><code>object</code></td>
    <td>The logging configuration settings for the event bus. For more information, see Configuring logs for event buses in the EventBridge User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the event bus. Currently, this is always default.</td>
</tr>
<tr>
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The policy that enables the external account to send events to your account.</td>
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
    <td><a href="#describe_event_bus"><CopyableCode code="describe_event_bus" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time. To enable your account to receive events from other accounts on its default event bus, use PutPermission. For more information about partner event buses, see CreateEventBus.</td>
</tr>
<tr>
    <td><a href="#create_event_bus"><CopyableCode code="create_event_bus" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.</td>
</tr>
<tr>
    <td><a href="#update_event_bus"><CopyableCode code="update_event_bus" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified event bus.</td>
</tr>
<tr>
    <td><a href="#delete_event_bus"><CopyableCode code="delete_event_bus" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.</td>
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
    defaultValue="describe_event_bus"
    values={[
        { label: 'describe_event_bus', value: 'describe_event_bus' }
    ]}
>
<TabItem value="describe_event_bus">

Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time. To enable your account to receive events from other accounts on its default event bus, use PutPermission. For more information about partner event buses, see CreateEventBus.

```sql
SELECT
Arn,
CreationTime,
DeadLetterConfig,
Description,
KmsKeyIdentifier,
LastModifiedTime,
LogConfig,
Name,
Policy
FROM aws.events.event_bus
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_bus"
    values={[
        { label: 'create_event_bus', value: 'create_event_bus' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_bus">

Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.

```sql
INSERT INTO aws.events.event_bus (
Name,
EventSourceName,
Description,
KmsKeyIdentifier,
DeadLetterConfig,
LogConfig,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ EventSourceName }}',
'{{ Description }}',
'{{ KmsKeyIdentifier }}',
'{{ DeadLetterConfig }}',
'{{ LogConfig }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
DeadLetterConfig,
Description,
EventBusArn,
KmsKeyIdentifier,
LogConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_bus
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_bus resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the new event bus. Custom event bus names can't contain the / character, but you can use the / character in partner event bus names. In addition, for partner event buses, the name must exactly match the name of the partner event source that this event bus is matched to. You can't use the name default for a custom event bus, as this name is already used for your account's default event bus.
    - name: EventSourceName
      value: "{{ EventSourceName }}"
      description: |
        If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
    - name: Description
      value: "{{ Description }}"
      description: |
        The event bus description.
    - name: KmsKeyIdentifier
      value: "{{ KmsKeyIdentifier }}"
      description: |
        The identifier of the KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on this event bus. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an Amazon Web Services owned key to encrypt events on the event bus. For more information, see Identify and view keys in the Key Management Service Developer Guide. Schema discovery is not supported for event buses encrypted using a customer managed key. EventBridge returns an error if: You call CreateDiscoverer on an event bus set to use a customer managed key for encryption. You call UpdatedEventBus to set a customer managed key on an event bus with schema discovery enabled. To enable schema discovery on an event bus, choose to use an Amazon Web Services owned key. For more information, see Encrypting events in the Amazon EventBridge User Guide. If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a customer managed key for any archives for the event bus as well. For more information, see Encrypting archives in the Amazon EventBridge User Guide.
    - name: DeadLetterConfig
      description: |
        Configuration details of the Amazon SQS queue for EventBridge to use as a dead-letter queue (DLQ). For more information, see Using dead-letter queues to process undelivered events in the EventBridge User Guide.
      value:
        Arn: "{{ Arn }}"
    - name: LogConfig
      description: |
        The logging configuration settings for the event bus. For more information, see Configuring logs for event buses in the EventBridge User Guide.
      value:
        IncludeDetail: "{{ IncludeDetail }}"
        Level: "{{ Level }}"
    - name: Tags
      description: |
        Tags to associate with the event bus.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_bus"
    values={[
        { label: 'update_event_bus', value: 'update_event_bus' }
    ]}
>
<TabItem value="update_event_bus">

Updates the specified event bus.

```sql
UPDATE aws.events.event_bus
SET 
Name = '{{ Name }}',
KmsKeyIdentifier = '{{ KmsKeyIdentifier }}',
Description = '{{ Description }}',
DeadLetterConfig = '{{ DeadLetterConfig }}',
LogConfig = '{{ LogConfig }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Arn,
DeadLetterConfig,
Description,
KmsKeyIdentifier,
LogConfig,
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_bus"
    values={[
        { label: 'delete_event_bus', value: 'delete_event_bus' }
    ]}
>
<TabItem value="delete_event_bus">

Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.

```sql
DELETE FROM aws.events.event_bus
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
