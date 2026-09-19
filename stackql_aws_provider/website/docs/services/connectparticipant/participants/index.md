--- 
title: participants
hide_title: false
hide_table_of_contents: false
keywords:
  - participants
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

Creates, updates, deletes, gets or lists a <code>participants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="participants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectparticipant.participants" /></td></tr>
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
    <td><a href="#disconnect_participant"><CopyableCode code="disconnect_participant" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disconnects a participant. For security recommendations, see Connect Customer Chat security best practices. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.</td>
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
    defaultValue="disconnect_participant"
    values={[
        { label: 'disconnect_participant', value: 'disconnect_participant' }
    ]}
>
<TabItem value="disconnect_participant">

Disconnects a participant. For security recommendations, see Connect Customer Chat security best practices. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.

```sql
EXEC aws.connectparticipant.participants.disconnect_participant 
@X-Amz-Bearer='{{ X-Amz-Bearer }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
