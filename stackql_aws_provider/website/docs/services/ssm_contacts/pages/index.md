--- 
title: pages
hide_title: false
hide_table_of_contents: false
keywords:
  - pages
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

Creates, updates, deletes, gets or lists a <code>pages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.pages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_page"
    values={[
        { label: 'describe_page', value: 'describe_page' }
    ]}
>
<TabItem value="describe_page">

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
    <td><CopyableCode code="ContactArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the contact that was engaged. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Content" /></td>
    <td><code>string</code></td>
    <td>The secure content of the message that was sent to the contact. Use this field for engagements to VOICE and EMAIL. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the contact channel received the engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="EngagementArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the engagement that engaged the contact channel. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IncidentId" /></td>
    <td><code>string</code></td>
    <td>The ARN of the incident that engaged the contact channel. (pattern: &lt;code&gt;^&#91;\\a-zA-Z0-9_@#%*+=:?.\/!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PageArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the engagement to a contact channel. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PublicContent" /></td>
    <td><code>string</code></td>
    <td>The insecure content of the message that was sent to the contact. Use this field for engagements to SMS. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PublicSubject" /></td>
    <td><code>string</code></td>
    <td>The insecure subject of the message that was sent to the contact. Use this field for engagements to SMS. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReadTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the contact channel acknowledged the engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="Sender" /></td>
    <td><code>string</code></td>
    <td>The user that started the engagement. (pattern: &lt;code&gt;^&#91;\\a-zA-Z0-9_@#%*+=:?.\/!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SentTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the engagement was sent to the contact channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Subject" /></td>
    <td><code>string</code></td>
    <td>The secure subject of the message that was sent to the contact. Use this field for engagements to VOICE and EMAIL. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_page"><CopyableCode code="describe_page" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists details of the engagement to a contact channel.</td>
</tr>
<tr>
    <td><a href="#accept_page"><CopyableCode code="accept_page" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PageId"><code>PageId</code></a>, <a href="#parameter-AcceptType"><code>AcceptType</code></a>, <a href="#parameter-AcceptCode"><code>AcceptCode</code></a></td>
    <td></td>
    <td>Used to acknowledge an engagement to a contact channel during an incident.</td>
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
    defaultValue="describe_page"
    values={[
        { label: 'describe_page', value: 'describe_page' }
    ]}
>
<TabItem value="describe_page">

Lists details of the engagement to a contact channel.

```sql
SELECT
ContactArn,
Content,
DeliveryTime,
EngagementArn,
IncidentId,
PageArn,
PublicContent,
PublicSubject,
ReadTime,
Sender,
SentTime,
Subject
FROM aws.ssm_contacts.pages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_page"
    values={[
        { label: 'accept_page', value: 'accept_page' }
    ]}
>
<TabItem value="accept_page">

Used to acknowledge an engagement to a contact channel during an incident.

```sql
EXEC aws.ssm_contacts.pages.accept_page 
@region='{{ region }}' --required 
@@json=
'{
"PageId": "{{ PageId }}", 
"ContactChannelId": "{{ ContactChannelId }}", 
"AcceptType": "{{ AcceptType }}", 
"Note": "{{ Note }}", 
"AcceptCode": "{{ AcceptCode }}", 
"AcceptCodeValidation": "{{ AcceptCodeValidation }}"
}'
;
```
</TabItem>
</Tabs>
