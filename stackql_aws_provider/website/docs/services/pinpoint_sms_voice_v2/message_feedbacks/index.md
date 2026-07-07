--- 
title: message_feedbacks
hide_title: false
hide_table_of_contents: false
keywords:
  - message_feedbacks
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>message_feedbacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="message_feedbacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.message_feedbacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#put_message_feedback"><CopyableCode code="put_message_feedback" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MessageId"><code>MessageId</code></a>, <a href="#parameter-MessageFeedbackStatus"><code>MessageFeedbackStatus</code></a></td>
    <td></td>
    <td>Set the MessageFeedbackStatus as RECEIVED or FAILED for the passed in MessageId. If you use message feedback then you must update message feedback record. When you receive a signal that a user has received the message you must use PutMessageFeedback to set the message feedback record as RECEIVED; Otherwise, an hour after the message feedback record is set to FAILED.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_message_feedback"
    values={[
        { label: 'put_message_feedback', value: 'put_message_feedback' }
    ]}
>
<TabItem value="put_message_feedback">

Set the MessageFeedbackStatus as RECEIVED or FAILED for the passed in MessageId. If you use message feedback then you must update message feedback record. When you receive a signal that a user has received the message you must use PutMessageFeedback to set the message feedback record as RECEIVED; Otherwise, an hour after the message feedback record is set to FAILED.

```sql
REPLACE aws.pinpoint_sms_voice_v2.message_feedbacks
SET 
MessageId = '{{ MessageId }}',
MessageFeedbackStatus = '{{ MessageFeedbackStatus }}'
WHERE 
region = '{{ region }}' --required
AND MessageId = '{{ MessageId }}' --required
AND MessageFeedbackStatus = '{{ MessageFeedbackStatus }}' --required
RETURNING
MessageFeedbackStatus,
MessageId;
```
</TabItem>
</Tabs>
