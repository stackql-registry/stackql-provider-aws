--- 
title: contact_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_lists
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

Creates, updates, deletes, gets or lists a <code>contact_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.contact_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_contact_list"
    values={[
        { label: 'get_contact_list', value: 'get_contact_list' },
        { label: 'list_contact_lists', value: 'list_contact_lists' }
    ]}
>
<TabItem value="get_contact_list">

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
    <td><CopyableCode code="ContactListName" /></td>
    <td><code>string</code></td>
    <td>The name of the contact list.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp noting when the contact list was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of what the contact list is about.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp noting the last time the contact list was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with a contact list.</td>
</tr>
<tr>
    <td><CopyableCode code="Topics" /></td>
    <td><code>array</code></td>
    <td>An interest group, theme, or label within a list. A contact list can have multiple topics.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_contact_lists">

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
    <td><CopyableCode code="ContactLists" /></td>
    <td><code>array</code></td>
    <td>The available contact lists.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A string token indicating that there might be additional contact lists available to be listed. Copy this token to a subsequent call to ListContactLists with the same parameters to retrieve the next page of contact lists.</td>
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
    <td><a href="#get_contact_list"><CopyableCode code="get_contact_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-contact_list_name"><code>contact_list_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns contact list metadata. It does not return any information about the contacts present in the list.</td>
</tr>
<tr>
    <td><a href="#list_contact_lists"><CopyableCode code="list_contact_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PageSize"><code>PageSize</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists all of the contact lists available. If your output includes a "NextToken" field with a string value, this indicates there may be additional contacts on the filtered list - regardless of the number of contacts returned.</td>
</tr>
<tr>
    <td><a href="#create_contact_list"><CopyableCode code="create_contact_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactListName"><code>ContactListName</code></a></td>
    <td></td>
    <td>Creates a contact list.</td>
</tr>
<tr>
    <td><a href="#update_contact_list"><CopyableCode code="update_contact_list" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-contact_list_name"><code>contact_list_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates contact list metadata. This operation does a complete replacement.</td>
</tr>
<tr>
    <td><a href="#delete_contact_list"><CopyableCode code="delete_contact_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-contact_list_name"><code>contact_list_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a contact list and all of the contacts on that list.</td>
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
    <td>The name of the contact list.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A string token indicating that there might be additional contact lists available to be listed. Use the token provided in the Response to use in the subsequent call to ListContactLists with the same parameters to retrieve the next page of contact lists.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of contact lists to return at once. Use this parameter to paginate results. If additional contact lists exist beyond the specified limit, the NextToken element is sent in the response. Use the NextToken value in subsequent requests to retrieve additional lists.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_contact_list"
    values={[
        { label: 'get_contact_list', value: 'get_contact_list' },
        { label: 'list_contact_lists', value: 'list_contact_lists' }
    ]}
>
<TabItem value="get_contact_list">

Returns contact list metadata. It does not return any information about the contacts present in the list.

```sql
SELECT
ContactListName,
CreatedTimestamp,
Description,
LastUpdatedTimestamp,
Tags,
Topics
FROM aws.sesv2.contact_lists
WHERE contact_list_name = '{{ contact_list_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contact_lists">

Lists all of the contact lists available. If your output includes a "NextToken" field with a string value, this indicates there may be additional contacts on the filtered list - regardless of the number of contacts returned.

```sql
SELECT
ContactLists,
NextToken
FROM aws.sesv2.contact_lists
WHERE region = '{{ region }}' -- required
AND PageSize = '{{ PageSize }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact_list"
    values={[
        { label: 'create_contact_list', value: 'create_contact_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact_list">

Creates a contact list.

```sql
INSERT INTO aws.sesv2.contact_lists (
ContactListName,
Topics,
Description,
Tags,
region
)
SELECT 
'{{ ContactListName }}' /* required */,
'{{ Topics }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contact_lists resource.
    - name: ContactListName
      value: "{{ ContactListName }}"
    - name: Topics
      value:
        - TopicName: "{{ TopicName }}"
          DisplayName: "{{ DisplayName }}"
          Description: "{{ Description }}"
          DefaultSubscriptionStatus: "{{ DefaultSubscriptionStatus }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contact_list"
    values={[
        { label: 'update_contact_list', value: 'update_contact_list' }
    ]}
>
<TabItem value="update_contact_list">

Updates contact list metadata. This operation does a complete replacement.

```sql
UPDATE aws.sesv2.contact_lists
SET 
Topics = '{{ Topics }}',
Description = '{{ Description }}'
WHERE 
contact_list_name = '{{ contact_list_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_list"
    values={[
        { label: 'delete_contact_list', value: 'delete_contact_list' }
    ]}
>
<TabItem value="delete_contact_list">

Deletes a contact list and all of the contacts on that list.

```sql
DELETE FROM aws.sesv2.contact_lists
WHERE contact_list_name = '{{ contact_list_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
