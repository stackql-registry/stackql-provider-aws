--- 
title: contact_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_channels
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

Creates, updates, deletes, gets or lists a <code>contact_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.contact_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_contact_channel"
    values={[
        { label: 'get_contact_channel', value: 'get_contact_channel' },
        { label: 'list_contact_channels', value: 'list_contact_channels' }
    ]}
>
<TabItem value="get_contact_channel">

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
    <td><CopyableCode code="ActivationStatus" /></td>
    <td><code>string</code></td>
    <td>A Boolean value indicating if the contact channel has been activated or not. (ACTIVATED, NOT_ACTIVATED)</td>
</tr>
<tr>
    <td><CopyableCode code="ContactArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the contact that the channel belongs to. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ContactChannelArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the contact channel. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryAddress" /></td>
    <td><code>object</code></td>
    <td>The details that Incident Manager uses when trying to engage the contact channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the contact channel (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of contact channel. The type is SMS, VOICE, or EMAIL. (SMS, VOICE, EMAIL)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_contact_channels">

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
    <td><CopyableCode code="ActivationStatus" /></td>
    <td><code>string</code></td>
    <td>A Boolean value describing if the contact channel has been activated or not. If the contact channel isn't activated, Incident Manager can't engage the contact through it. (ACTIVATED, NOT_ACTIVATED)</td>
</tr>
<tr>
    <td><CopyableCode code="ContactArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the contact that contains the contact channel. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ContactChannelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the contact channel. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryAddress" /></td>
    <td><code>object</code></td>
    <td>The details that Incident Manager uses when trying to engage the contact channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the contact channel. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of the contact channel. Incident Manager supports three contact methods: SMS VOICE EMAIL (SMS, VOICE, EMAIL)</td>
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
    <td><a href="#get_contact_channel"><CopyableCode code="get_contact_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List details about a specific contact channel.</td>
</tr>
<tr>
    <td><a href="#list_contact_channels"><CopyableCode code="list_contact_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all contact channels for the specified contact.</td>
</tr>
<tr>
    <td><a href="#create_contact_channel"><CopyableCode code="create_contact_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-DeliveryAddress"><code>DeliveryAddress</code></a></td>
    <td></td>
    <td>A contact channel is the method that Incident Manager uses to engage your contact.</td>
</tr>
<tr>
    <td><a href="#update_contact_channel"><CopyableCode code="update_contact_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactChannelId"><code>ContactChannelId</code></a></td>
    <td></td>
    <td>Updates a contact's contact channel.</td>
</tr>
<tr>
    <td><a href="#delete_contact_channel"><CopyableCode code="delete_contact_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>To stop receiving engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel does not remove it from the contact's engagement plan, but the stage that includes the channel will be ignored. If you delete the only contact channel for a contact, you'll no longer be able to engage that contact during an incident.</td>
</tr>
<tr>
    <td><a href="#send_activation_code"><CopyableCode code="send_activation_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactChannelId"><code>ContactChannelId</code></a></td>
    <td></td>
    <td>Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the ActivateChannel operation. Incident Manager can't engage a contact channel until it has been activated.</td>
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
    defaultValue="get_contact_channel"
    values={[
        { label: 'get_contact_channel', value: 'get_contact_channel' },
        { label: 'list_contact_channels', value: 'list_contact_channels' }
    ]}
>
<TabItem value="get_contact_channel">

List details about a specific contact channel.

```sql
SELECT
ActivationStatus,
ContactArn,
ContactChannelArn,
DeliveryAddress,
Name,
Type
FROM aws.ssm_contacts.contact_channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contact_channels">

Lists all contact channels for the specified contact.

```sql
SELECT
ActivationStatus,
ContactArn,
ContactChannelArn,
DeliveryAddress,
Name,
Type
FROM aws.ssm_contacts.contact_channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact_channel"
    values={[
        { label: 'create_contact_channel', value: 'create_contact_channel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact_channel">

A contact channel is the method that Incident Manager uses to engage your contact.

```sql
INSERT INTO aws.ssm_contacts.contact_channels (
ContactId,
Name,
Type,
DeliveryAddress,
DeferActivation,
IdempotencyToken,
region
)
SELECT 
'{{ ContactId }}' /* required */,
'{{ Name }}',
'{{ Type }}',
'{{ DeliveryAddress }}' /* required */,
{{ DeferActivation }},
'{{ IdempotencyToken }}',
'{{ region }}'
RETURNING
ContactChannelArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_channels
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contact_channels resource.
    - name: ContactId
      value: "{{ ContactId }}"
      description: |
        The Amazon Resource Name (ARN) of the contact you are adding the contact channel to.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the contact channel.
    - name: Type
      value: "{{ Type }}"
      description: |
        Incident Manager supports three types of contact channels: SMS VOICE EMAIL
      valid_values: ['SMS', 'VOICE', 'EMAIL']
    - name: DeliveryAddress
      description: |
        The details that Incident Manager uses when trying to engage the contact channel. The format is dependent on the type of the contact channel. The following are the expected formats: SMS - '+' followed by the country code and phone number VOICE - '+' followed by the country code and phone number EMAIL - any standard email format
      value:
        SimpleAddress: "{{ SimpleAddress }}"
    - name: DeferActivation
      value: {{ DeferActivation }}
      description: |
        If you want to activate the channel at a later time, you can choose to defer activation. Incident Manager can't engage your contact channel until it has been activated.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A token ensuring that the operation is called only once with the specified details.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contact_channel"
    values={[
        { label: 'update_contact_channel', value: 'update_contact_channel' }
    ]}
>
<TabItem value="update_contact_channel">

Updates a contact's contact channel.

```sql
UPDATE aws.ssm_contacts.contact_channels
SET 
ContactChannelId = '{{ ContactChannelId }}',
Name = '{{ Name }}',
DeliveryAddress = '{{ DeliveryAddress }}'
WHERE 
region = '{{ region }}' --required
AND ContactChannelId = '{{ ContactChannelId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_channel"
    values={[
        { label: 'delete_contact_channel', value: 'delete_contact_channel' }
    ]}
>
<TabItem value="delete_contact_channel">

To stop receiving engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel does not remove it from the contact's engagement plan, but the stage that includes the channel will be ignored. If you delete the only contact channel for a contact, you'll no longer be able to engage that contact during an incident.

```sql
DELETE FROM aws.ssm_contacts.contact_channels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_activation_code"
    values={[
        { label: 'send_activation_code', value: 'send_activation_code' }
    ]}
>
<TabItem value="send_activation_code">

Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the ActivateChannel operation. Incident Manager can't engage a contact channel until it has been activated.

```sql
EXEC aws.ssm_contacts.contact_channels.send_activation_code 
@region='{{ region }}' --required 
@@json=
'{
"ContactChannelId": "{{ ContactChannelId }}"
}'
;
```
</TabItem>
</Tabs>
