--- 
title: contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - contacts
  - sesv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.contacts" /></td></tr>
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
    <td><CopyableCode code="AttributesData" /></td>
    <td><code>string</code></td>
    <td>The attribute data attached to a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="ContactListName" /></td>
    <td><code>string</code></td>
    <td>The name of the contact list to which the contact belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp noting when the contact was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EmailAddress" /></td>
    <td><code>string</code></td>
    <td>The contact's email address.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp noting the last time the contact's information was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicDefaultPreferences" /></td>
    <td><code>array</code></td>
    <td>The default topic preferences applied to the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicPreferences" /></td>
    <td><code>array</code></td>
    <td>The contact's preference for being opted-in to or opted-out of a topic.&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="UnsubscribeAll" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value status noting if the contact is unsubscribed from all contact list topics.</td>
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
    <td><CopyableCode code="Contacts" /></td>
    <td><code>array</code></td>
    <td>The contacts present in a specific contact list.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A string token indicating that there might be additional contacts available to be listed. Copy this token to a subsequent call to ListContacts with the same parameters to retrieve the next page of contacts.</td>
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
    <td><a href="#parameter-contact_list_name"><code>contact_list_name</code></a>, <a href="#parameter-email_address"><code>email_address</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a contact from a contact list.</td>
</tr>
<tr>
    <td><a href="#list_contacts"><CopyableCode code="list_contacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-contact_list_name"><code>contact_list_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the contacts present in a specific contact list.</td>
</tr>
<tr>
    <td><a href="#create_contact"><CopyableCode code="create_contact" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-contact_list_name"><code>contact_list_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailAddress"><code>EmailAddress</code></a></td>
    <td></td>
    <td>Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.</td>
</tr>
<tr>
    <td><a href="#update_contact"><CopyableCode code="update_contact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-contact_list_name"><code>contact_list_name</code></a>, <a href="#parameter-email_address"><code>email_address</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a contact's preferences for a list. You must specify all existing topic preferences in the TopicPreferences object, not just the ones that need updating; otherwise, all your existing preferences will be removed.</td>
</tr>
<tr>
    <td><a href="#delete_contact"><CopyableCode code="delete_contact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-contact_list_name"><code>contact_list_name</code></a>, <a href="#parameter-email_address"><code>email_address</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a contact from a contact list.</td>
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
<tr id="parameter-contact_list_name">
    <td><CopyableCode code="contact_list_name" /></td>
    <td><code>string</code></td>
    <td>The name of the contact list from which the contact should be removed.</td>
</tr>
<tr id="parameter-email_address">
    <td><CopyableCode code="email_address" /></td>
    <td><code>string</code></td>
    <td>The contact's email address.</td>
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
    defaultValue="get_contact"
    values={[
        { label: 'get_contact', value: 'get_contact' },
        { label: 'list_contacts', value: 'list_contacts' }
    ]}
>
<TabItem value="get_contact">

Returns a contact from a contact list.

```sql
SELECT
AttributesData,
ContactListName,
CreatedTimestamp,
EmailAddress,
LastUpdatedTimestamp,
TopicDefaultPreferences,
TopicPreferences,
UnsubscribeAll
FROM aws.sesv2.contacts
WHERE contact_list_name = '{{ contact_list_name }}' -- required
AND email_address = '{{ email_address }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contacts">

Lists the contacts present in a specific contact list.

```sql
SELECT
Contacts,
NextToken
FROM aws.sesv2.contacts
WHERE contact_list_name = '{{ contact_list_name }}' -- required
AND region = '{{ region }}' -- required
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

Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.

```sql
INSERT INTO aws.sesv2.contacts (
EmailAddress,
TopicPreferences,
UnsubscribeAll,
AttributesData,
contact_list_name,
region
)
SELECT 
'{{ EmailAddress }}' /* required */,
'{{ TopicPreferences }}',
{{ UnsubscribeAll }},
'{{ AttributesData }}',
'{{ contact_list_name }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contacts
  props:
    - name: contact_list_name
      value: "{{ contact_list_name }}"
      description: Required parameter for the contacts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contacts resource.
    - name: EmailAddress
      value: "{{ EmailAddress }}"
    - name: TopicPreferences
      value:
        - TopicName: "{{ TopicName }}"
          SubscriptionStatus: "{{ SubscriptionStatus }}"
    - name: UnsubscribeAll
      value: {{ UnsubscribeAll }}
    - name: AttributesData
      value: "{{ AttributesData }}"
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

Updates a contact's preferences for a list. You must specify all existing topic preferences in the TopicPreferences object, not just the ones that need updating; otherwise, all your existing preferences will be removed.

```sql
UPDATE aws.sesv2.contacts
SET 
TopicPreferences = '{{ TopicPreferences }}',
UnsubscribeAll = {{ UnsubscribeAll }},
AttributesData = '{{ AttributesData }}'
WHERE 
contact_list_name = '{{ contact_list_name }}' --required
AND email_address = '{{ email_address }}' --required
AND region = '{{ region }}' --required;
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

Removes a contact from a contact list.

```sql
DELETE FROM aws.sesv2.contacts
WHERE contact_list_name = '{{ contact_list_name }}' --required
AND email_address = '{{ email_address }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
