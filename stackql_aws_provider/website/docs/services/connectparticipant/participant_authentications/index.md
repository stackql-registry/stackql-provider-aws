--- 
title: participant_authentications
hide_title: false
hide_table_of_contents: false
keywords:
  - participant_authentications
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

Creates, updates, deletes, gets or lists a <code>participant_authentications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="participant_authentications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectparticipant.participant_authentications" /></td></tr>
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
    <td><a href="#cancel_participant_authentication"><CopyableCode code="cancel_participant_authentication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SessionId"><code>SessionId</code></a></td>
    <td></td>
    <td>Cancels the authentication session. The opted out branch of the Authenticate Customer flow block will be taken. The current supported channel is chat. This API is not supported for Apple Messages for Business, WhatsApp, or SMS chats. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="cancel_participant_authentication"
    values={[
        { label: 'cancel_participant_authentication', value: 'cancel_participant_authentication' }
    ]}
>
<TabItem value="cancel_participant_authentication">

Cancels the authentication session. The opted out branch of the Authenticate Customer flow block will be taken. The current supported channel is chat. This API is not supported for Apple Messages for Business, WhatsApp, or SMS chats. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.

```sql
EXEC aws.connectparticipant.participant_authentications.cancel_participant_authentication 
@X-Amz-Bearer='{{ X-Amz-Bearer }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SessionId": "{{ SessionId }}"
}'
;
```
</TabItem>
</Tabs>
