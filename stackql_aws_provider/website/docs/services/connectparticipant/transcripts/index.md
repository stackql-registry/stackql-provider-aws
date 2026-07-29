--- 
title: transcripts
hide_title: false
hide_table_of_contents: false
keywords:
  - transcripts
  - connectparticipant
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

Creates, updates, deletes, gets or lists a <code>transcripts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transcripts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectparticipant.transcripts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transcript"
    values={[
        { label: 'get_transcript', value: 'get_transcript' }
    ]}
>
<TabItem value="get_transcript">

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
    <td><CopyableCode code="initial_contact_id" /></td>
    <td><code>string</code></td>
    <td>The initial contact ID for the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="transcript" /></td>
    <td><code>array</code></td>
    <td>The list of messages in the session.</td>
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
    <td><a href="#get_transcript"><CopyableCode code="get_transcript" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see Enable persistent chat. For security recommendations, see Amazon Connect Chat security best practices. If you have a process that consumes events in the transcript of an chat that has ended, note that chat transcripts contain the following event content types if the event has occurred during the chat session: application/vnd.amazonaws.connect.event.participant.invited application/vnd.amazonaws.connect.event.participant.joined application/vnd.amazonaws.connect.event.participant.left application/vnd.amazonaws.connect.event.chat.ended application/vnd.amazonaws.connect.event.transfer.succeeded application/vnd.amazonaws.connect.event.transfer.failed ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.</td>
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
<tr id="parameter-X-Amz-Bearer">
    <td><CopyableCode code="X-Amz-Bearer" /></td>
    <td><code>string</code></td>
    <td>The authentication token associated with the participant's connection.</td>
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
    defaultValue="get_transcript"
    values={[
        { label: 'get_transcript', value: 'get_transcript' }
    ]}
>
<TabItem value="get_transcript">

Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see Enable persistent chat. For security recommendations, see Amazon Connect Chat security best practices. If you have a process that consumes events in the transcript of an chat that has ended, note that chat transcripts contain the following event content types if the event has occurred during the chat session: application/vnd.amazonaws.connect.event.participant.invited application/vnd.amazonaws.connect.event.participant.joined application/vnd.amazonaws.connect.event.participant.left application/vnd.amazonaws.connect.event.chat.ended application/vnd.amazonaws.connect.event.transfer.succeeded application/vnd.amazonaws.connect.event.transfer.failed ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.

```sql
SELECT
initial_contact_id,
next_token,
transcript
FROM aws.connectparticipant.transcripts
WHERE `X-Amz-Bearer` = '{{ X-Amz-Bearer }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
