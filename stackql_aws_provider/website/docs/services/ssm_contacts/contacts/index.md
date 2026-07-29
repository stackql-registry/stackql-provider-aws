--- 
title: contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - contacts
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

Creates, updates, deletes, gets or lists a <code>contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.contacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_contact"
    values={[
        { label: 'get_contact', value: 'get_contact' },
        { label: 'list_contacts', value: 'list_contacts' }
    ]}
>
<TabItem value="get_contact">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the contact or escalation plan. The alias is unique and identifiable. (pattern: &lt;code&gt;^&#91;a-z0-9_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the contact or escalation plan. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The full name of the contact or escalation plan. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>object</code></td>
    <td>Details about the specific timing or stages and targets of the escalation plan or engagement plan.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of contact. (PERSONAL, ESCALATION, ONCALL_SCHEDULE)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The unique and identifiable alias of the contact or escalation plan. (pattern: &lt;code&gt;^&#91;a-z0-9_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the contact or escalation plan. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The full name of the contact or escalation plan. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of contact. PERSONAL: A single, individual contact. ESCALATION: An escalation plan. ONCALL_SCHEDULE: An on-call schedule. (PERSONAL, ESCALATION, ONCALL_SCHEDULE)</td>
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
    <td><a href="#get_contact"><CopyableCode code="get_contact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified contact or escalation plan.</td>
</tr>
<tr>
    <td><a href="#list_contacts"><CopyableCode code="list_contacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all contacts and escalation plans in Incident Manager.</td>
</tr>
<tr>
    <td><a href="#create_contact"><CopyableCode code="create_contact" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.</td>
</tr>
<tr>
    <td><a href="#update_contact"><CopyableCode code="update_contact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a></td>
    <td></td>
    <td>Updates the contact or escalation plan specified.</td>
</tr>
<tr>
    <td><a href="#delete_contact"><CopyableCode code="delete_contact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>To remove a contact from Incident Manager, you can delete the contact. However, deleting a contact does not remove it from escalation plans and related response plans. Deleting an escalation plan also does not remove it from all related response plans. To modify an escalation plan, we recommend using the UpdateContact action to specify a different existing contact.</td>
</tr>
<tr>
    <td><a href="#activate_contact_channel"><CopyableCode code="activate_contact_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactChannelId"><code>ContactChannelId</code></a>, <a href="#parameter-ActivationCode"><code>ActivationCode</code></a></td>
    <td></td>
    <td>Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.</td>
</tr>
<tr>
    <td><a href="#deactivate_contact_channel"><CopyableCode code="deactivate_contact_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactChannelId"><code>ContactChannelId</code></a></td>
    <td></td>
    <td>To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.</td>
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
    defaultValue="get_contact"
    values={[
        { label: 'get_contact', value: 'get_contact' },
        { label: 'list_contacts', value: 'list_contacts' }
    ]}
>
<TabItem value="get_contact">

Retrieves information about the specified contact or escalation plan.

```sql
SELECT
alias,
contact_arn,
display_name,
plan,
type
FROM aws.ssm_contacts.contacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contacts">

Lists all contacts and escalation plans in Incident Manager.

```sql
SELECT
alias,
contact_arn,
display_name,
type
FROM aws.ssm_contacts.contacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact"
    values={[
        { label: 'create_contact', value: 'create_contact' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact">

Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.

```sql
INSERT INTO aws.ssm_contacts.contacts (
Alias,
DisplayName,
Type,
Plan,
Tags,
IdempotencyToken,
region
)
SELECT 
'{{ Alias }}',
'{{ DisplayName }}',
'{{ Type }}',
'{{ Plan }}',
'{{ Tags }}',
'{{ IdempotencyToken }}',
'{{ region }}'
RETURNING
contact_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contacts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contacts resource.
    - name: Alias
      value: "{{ Alias }}"
      description: |
        The short name to quickly identify a contact or escalation plan. The contact alias must be unique and identifiable.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The full name of the contact or escalation plan.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of contact to create. PERSONAL: A single, individual contact. ESCALATION: An escalation plan. ONCALL_SCHEDULE: An on-call schedule.
      valid_values: ['PERSONAL', 'ESCALATION', 'ONCALL_SCHEDULE']
    - name: Plan
      description: |
        A list of stages. A contact has an engagement plan with stages that contact specified contact channels. An escalation plan uses stages that contact specified contacts.
      value:
        Stages:
          - DurationInMinutes: {{ DurationInMinutes }}
            Targets: "{{ Targets }}"
        RotationIds:
          - "{{ RotationIds }}"
    - name: Tags
      description: |
        Adds a tag to the target. You can only tag resources created in the first Region of your replication set.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A token ensuring that the operation is called only once with the specified details.
`}</CodeBlock>

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

Updates the contact or escalation plan specified.

```sql
UPDATE aws.ssm_contacts.contacts
SET 
ContactId = '{{ ContactId }}',
DisplayName = '{{ DisplayName }}',
Plan = '{{ Plan }}'
WHERE 
region = '{{ region }}' --required
AND ContactId = '{{ ContactId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact"
    values={[
        { label: 'delete_contact', value: 'delete_contact' }
    ]}
>
<TabItem value="delete_contact">

To remove a contact from Incident Manager, you can delete the contact. However, deleting a contact does not remove it from escalation plans and related response plans. Deleting an escalation plan also does not remove it from all related response plans. To modify an escalation plan, we recommend using the UpdateContact action to specify a different existing contact.

```sql
DELETE FROM aws.ssm_contacts.contacts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_contact_channel"
    values={[
        { label: 'activate_contact_channel', value: 'activate_contact_channel' },
        { label: 'deactivate_contact_channel', value: 'deactivate_contact_channel' }
    ]}
>
<TabItem value="activate_contact_channel">

Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.

```sql
EXEC aws.ssm_contacts.contacts.activate_contact_channel 
@region='{{ region }}' --required 
@@json=
'{
"ContactChannelId": "{{ ContactChannelId }}", 
"ActivationCode": "{{ ActivationCode }}"
}'
;
```
</TabItem>
<TabItem value="deactivate_contact_channel">

To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.

```sql
EXEC aws.ssm_contacts.contacts.deactivate_contact_channel 
@region='{{ region }}' --required 
@@json=
'{
"ContactChannelId": "{{ ContactChannelId }}"
}'
;
```
</TabItem>
</Tabs>
