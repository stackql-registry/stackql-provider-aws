--- 
title: meeting_dial_outs
hide_title: false
hide_table_of_contents: false
keywords:
  - meeting_dial_outs
  - chime
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

Creates, updates, deletes, gets or lists a <code>meeting_dial_outs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="meeting_dial_outs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.meeting_dial_outs" /></td></tr>
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
    <td><a href="#create_meeting_dial_out"><CopyableCode code="create_meeting_dial_out" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FromPhoneNumber"><code>FromPhoneNumber</code></a>, <a href="#parameter-ToPhoneNumber"><code>ToPhoneNumber</code></a>, <a href="#parameter-JoinToken"><code>JoinToken</code></a></td>
    <td></td>
    <td>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer. To play welcome audio or implement an interactive voice response (IVR), use the CreateSipMediaApplicationCall action with the corresponding SIP media application ID. This API is not available in a dedicated namespace.</td>
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
<tr id="parameter-meeting_id">
    <td><CopyableCode code="meeting_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime SDK meeting ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_meeting_dial_out"
    values={[
        { label: 'create_meeting_dial_out', value: 'create_meeting_dial_out' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_meeting_dial_out">

Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer. To play welcome audio or implement an interactive voice response (IVR), use the CreateSipMediaApplicationCall action with the corresponding SIP media application ID. This API is not available in a dedicated namespace.

```sql
INSERT INTO aws.chime.meeting_dial_outs (
FromPhoneNumber,
ToPhoneNumber,
JoinToken,
meeting_id,
region
)
SELECT 
'{{ FromPhoneNumber }}' /* required */,
'{{ ToPhoneNumber }}' /* required */,
'{{ JoinToken }}' /* required */,
'{{ meeting_id }}',
'{{ region }}'
RETURNING
TransactionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: meeting_dial_outs
  props:
    - name: meeting_id
      value: "{{ meeting_id }}"
      description: Required parameter for the meeting_dial_outs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the meeting_dial_outs resource.
    - name: FromPhoneNumber
      value: "{{ FromPhoneNumber }}"
    - name: ToPhoneNumber
      value: "{{ ToPhoneNumber }}"
    - name: JoinToken
      value: "{{ JoinToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
