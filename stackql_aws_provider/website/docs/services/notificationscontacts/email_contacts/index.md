--- 
title: email_contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - email_contacts
  - notificationscontacts
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

Creates, updates, deletes, gets or lists an <code>email_contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notificationscontacts.email_contacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_email_contact"
    values={[
        { label: 'get_email_contact', value: 'get_email_contact' },
        { label: 'list_email_contacts', value: 'list_email_contacts' }
    ]}
>
<TabItem value="get_email_contact">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the email contact. (pattern: &lt;code&gt;.*&#91;\w-.~&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>The email address this email contact points to. The activation email and any subscribed emails are sent here. (pattern: &lt;code&gt;(.+)@(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the email contact. (pattern: &lt;code&gt;arn:aws:notifications-contacts::&#91;0-9&#93;&#123;12&#125;:emailcontact/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the email contact. Only activated email contacts receive emails. (inactive, active)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_email_contacts">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the email contact. (pattern: &lt;code&gt;.*&#91;\w-.~&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>The email address this email contact points to. The activation email and any subscribed emails are sent here. (pattern: &lt;code&gt;(.+)@(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the email contact. (pattern: &lt;code&gt;arn:aws:notifications-contacts::&#91;0-9&#93;&#123;12&#125;:emailcontact/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the email contact. Only activated email contacts receive emails. (inactive, active)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the resource was last updated.</td>
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
    <td><a href="#get_email_contact"><CopyableCode code="get_email_contact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an email contact.</td>
</tr>
<tr>
    <td><a href="#list_email_contacts"><CopyableCode code="list_email_contacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all email contacts created under the Account.</td>
</tr>
<tr>
    <td><a href="#create_email_contact"><CopyableCode code="create_email_contact" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-emailAddress"><code>emailAddress</code></a></td>
    <td></td>
    <td>Creates an email contact for the provided email address.</td>
</tr>
<tr>
    <td><a href="#delete_email_contact"><CopyableCode code="delete_email_contact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an email contact. Deleting an email contact removes it from all associated notification configurations.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_email_contact"
    values={[
        { label: 'get_email_contact', value: 'get_email_contact' },
        { label: 'list_email_contacts', value: 'list_email_contacts' }
    ]}
>
<TabItem value="get_email_contact">

Returns an email contact.

```sql
SELECT
name,
address,
arn,
creationTime,
status,
updateTime
FROM aws.notificationscontacts.email_contacts
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_email_contacts">

Lists all email contacts created under the Account.

```sql
SELECT
name,
address,
arn,
creationTime,
status,
updateTime
FROM aws.notificationscontacts.email_contacts
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_email_contact"
    values={[
        { label: 'create_email_contact', value: 'create_email_contact' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_email_contact">

Creates an email contact for the provided email address.

```sql
INSERT INTO aws.notificationscontacts.email_contacts (
name,
emailAddress,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ emailAddress }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: email_contacts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the email_contacts resource.
    - name: name
      value: "{{ name }}"
    - name: emailAddress
      value: "{{ emailAddress }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_email_contact"
    values={[
        { label: 'delete_email_contact', value: 'delete_email_contact' }
    ]}
>
<TabItem value="delete_email_contact">

Deletes an email contact. Deleting an email contact removes it from all associated notification configurations.

```sql
DELETE FROM aws.notificationscontacts.email_contacts
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
