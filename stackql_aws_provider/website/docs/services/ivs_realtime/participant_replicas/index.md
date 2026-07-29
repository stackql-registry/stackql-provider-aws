--- 
title: participant_replicas
hide_title: false
hide_table_of_contents: false
keywords:
  - participant_replicas
  - ivs_realtime
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

Creates, updates, deletes, gets or lists a <code>participant_replicas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="participant_replicas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.participant_replicas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_participant_replicas"
    values={[
        { label: 'list_participant_replicas', value: 'list_participant_replicas' }
    ]}
>
<TabItem value="list_participant_replicas">

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
    <td><CopyableCode code="destination_session_id" /></td>
    <td><code>string</code></td>
    <td>ID of the session within the destination stage. (pattern: &lt;code&gt;st-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_stage_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the stage where the participant is replicated. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stage/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="participant_id" /></td>
    <td><code>string</code></td>
    <td>Participant ID of the publisher that will be replicated. This is assigned by IVS and returned by CreateParticipantToken or the jti (JWT ID) used to create a self signed token. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_state" /></td>
    <td><code>string</code></td>
    <td>Replica’s current replication state. (ACTIVE, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="source_session_id" /></td>
    <td><code>string</code></td>
    <td>ID of the session within the source stage. (pattern: &lt;code&gt;st-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_stage_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the stage from which this participant is replicated. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stage/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_participant_replicas"><CopyableCode code="list_participant_replicas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the replicas for a participant from a source stage.</td>
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
    defaultValue="list_participant_replicas"
    values={[
        { label: 'list_participant_replicas', value: 'list_participant_replicas' }
    ]}
>
<TabItem value="list_participant_replicas">

Lists all the replicas for a participant from a source stage.

```sql
SELECT
destination_session_id,
destination_stage_arn,
participant_id,
replication_state,
source_session_id,
source_stage_arn
FROM aws.ivs_realtime.participant_replicas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
