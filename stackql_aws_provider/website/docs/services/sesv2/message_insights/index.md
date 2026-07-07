--- 
title: message_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - message_insights
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

Creates, updates, deletes, gets or lists a <code>message_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="message_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.message_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_message_insights"
    values={[
        { label: 'get_message_insights', value: 'get_message_insights' }
    ]}
>
<TabItem value="get_message_insights">

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
    <td><CopyableCode code="EmailTags" /></td>
    <td><code>array</code></td>
    <td>A list of tags, in the form of name/value pairs, that were applied to the email you sent, along with Amazon SES Auto-Tags.</td>
</tr>
<tr>
    <td><CopyableCode code="FromEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The from address used to send the message.</td>
</tr>
<tr>
    <td><CopyableCode code="Insights" /></td>
    <td><code>array</code></td>
    <td>A set of insights associated with the message.</td>
</tr>
<tr>
    <td><CopyableCode code="MessageId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the message.</td>
</tr>
<tr>
    <td><CopyableCode code="Subject" /></td>
    <td><code>string</code></td>
    <td>The subject line of the message.</td>
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
    <td><a href="#get_message_insights"><CopyableCode code="get_message_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a specific message, including the from address, the subject, the recipient address, email tags, as well as events associated with the message. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-message_id">
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>A MessageId is a unique identifier for a message, and is returned when sending emails through Amazon SES.</td>
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
    defaultValue="get_message_insights"
    values={[
        { label: 'get_message_insights', value: 'get_message_insights' }
    ]}
>
<TabItem value="get_message_insights">

Provides information about a specific message, including the from address, the subject, the recipient address, email tags, as well as events associated with the message. You can execute this operation no more than once per second.

```sql
SELECT
EmailTags,
FromEmailAddress,
Insights,
MessageId,
Subject
FROM aws.sesv2.message_insights
WHERE message_id = '{{ message_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
