--- 
title: engagements
hide_title: false
hide_table_of_contents: false
keywords:
  - engagements
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

Creates, updates, deletes, gets or lists an <code>engagements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engagements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.engagements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_engagement"
    values={[
        { label: 'describe_engagement', value: 'describe_engagement' },
        { label: 'list_engagements', value: 'list_engagements' }
    ]}
>
<TabItem value="describe_engagement">

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
    <td><CopyableCode code="contact_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the escalation plan or contacts involved in the engagement. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The secure content of the message that was sent to the contact. Use this field for engagements to VOICE and EMAIL. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the engagement. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>The ARN of the incident in which the engagement occurred. (pattern: &lt;code&gt;^&#91;\\a-zA-Z0-9_@#%*+=:?.\/!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="public_content" /></td>
    <td><code>string</code></td>
    <td>The insecure content of the message that was sent to the contact. Use this field for engagements to SMS. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="public_subject" /></td>
    <td><code>string</code></td>
    <td>The insecure subject of the message that was sent to the contact. Use this field for engagements to SMS. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>The user that started the engagement. (pattern: &lt;code&gt;^&#91;\\a-zA-Z0-9_@#%*+=:?.\/!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the engagement started.</td>
</tr>
<tr>
    <td><CopyableCode code="stop_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the engagement ended.</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>The secure subject of the message that was sent to the contact. Use this field for engagements to VOICE and EMAIL. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_engagements">

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
    <td><CopyableCode code="contact_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the escalation plan or contact that Incident Manager is engaging. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the engagement. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>The ARN of the incident that's engaging the contact. (pattern: &lt;code&gt;^&#91;\\a-zA-Z0-9_@#%*+=:?.\/!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>The user that started the engagement. (pattern: &lt;code&gt;^&#91;\\a-zA-Z0-9_@#%*+=:?.\/!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the engagement began.</td>
</tr>
<tr>
    <td><CopyableCode code="stop_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the engagement ended.</td>
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
    <td><a href="#describe_engagement"><CopyableCode code="describe_engagement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.</td>
</tr>
<tr>
    <td><a href="#list_engagements"><CopyableCode code="list_engagements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all engagements that have happened in an incident.</td>
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
    defaultValue="describe_engagement"
    values={[
        { label: 'describe_engagement', value: 'describe_engagement' },
        { label: 'list_engagements', value: 'list_engagements' }
    ]}
>
<TabItem value="describe_engagement">

Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.

```sql
SELECT
contact_arn,
content,
engagement_arn,
incident_id,
public_content,
public_subject,
sender,
start_time,
stop_time,
subject
FROM aws.ssm_contacts.engagements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_engagements">

Lists all engagements that have happened in an incident.

```sql
SELECT
contact_arn,
engagement_arn,
incident_id,
sender,
start_time,
stop_time
FROM aws.ssm_contacts.engagements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
