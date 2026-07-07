--- 
title: pages_by_contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - pages_by_contacts
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

Creates, updates, deletes, gets or lists a <code>pages_by_contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pages_by_contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.pages_by_contacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pages_by_contact"
    values={[
        { label: 'list_pages_by_contact', value: 'list_pages_by_contact' }
    ]}
>
<TabItem value="list_pages_by_contact">

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
    <td>The ARN of the contact that Incident Manager is engaging. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the message was delivered to the contact channel.</td>
</tr>
<tr>
    <td><CopyableCode code="EngagementArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the engagement that this page is part of. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IncidentId" /></td>
    <td><code>string</code></td>
    <td>The ARN of the incident that's engaging the contact channel. (pattern: &lt;code&gt;^&#91;\\a-zA-Z0-9_@#%*+=:?.\/!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PageArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the page to the contact channel. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReadTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the contact channel acknowledged engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="Sender" /></td>
    <td><code>string</code></td>
    <td>The user that started the engagement. (pattern: &lt;code&gt;^&#91;\\a-zA-Z0-9_@#%*+=:?.\/!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SentTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that Incident Manager engaged the contact channel.</td>
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
    <td><a href="#list_pages_by_contact"><CopyableCode code="list_pages_by_contact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the engagements to a contact's contact channels.</td>
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
    defaultValue="list_pages_by_contact"
    values={[
        { label: 'list_pages_by_contact', value: 'list_pages_by_contact' }
    ]}
>
<TabItem value="list_pages_by_contact">

Lists the engagements to a contact's contact channels.

```sql
SELECT
ContactArn,
DeliveryTime,
EngagementArn,
IncidentId,
PageArn,
ReadTime,
Sender,
SentTime
FROM aws.ssm_contacts.pages_by_contacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
