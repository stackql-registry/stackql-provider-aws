--- 
title: rcs_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - rcs_agents
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

Creates, updates, deletes, gets or lists a <code>rcs_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rcs_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.rcs_agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rcs_agents"
    values={[
        { label: 'describe_rcs_agents', value: 'describe_rcs_agents' }
    ]}
>
<TabItem value="describe_rcs_agents">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the RCS agent was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to true the RCS agent can't be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="opt_out_list_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OptOutList associated with the RCS agent. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pool associated with the RCS agent.</td>
</tr>
<tr>
    <td><CopyableCode code="rcs_agent_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the RCS agent.</td>
</tr>
<tr>
    <td><CopyableCode code="rcs_agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the RCS agent.</td>
</tr>
<tr>
    <td><CopyableCode code="self_managed_opt_outs_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the RCS agent. (CREATED, PENDING, TESTING, PARTIAL, ACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="testing_agent" /></td>
    <td><code>object</code></td>
    <td>The testing agent information associated with the RCS agent.</td>
</tr>
<tr>
    <td><CopyableCode code="two_way_channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the two way channel. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="two_way_channel_role" /></td>
    <td><code>string</code></td>
    <td>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="two_way_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.</td>
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
    <td><a href="#describe_rcs_agents"><CopyableCode code="describe_rcs_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified RCS agents or all RCS agents associated with your Amazon Web Services account. If you specify RCS agent IDs, the output includes information for only the specified RCS agents. If you specify filters, the output includes information for only those RCS agents that meet the filter criteria. If you don't specify RCS agent IDs or filters, the output includes information for all RCS agents.</td>
</tr>
<tr>
    <td><a href="#create_rcs_agent"><CopyableCode code="create_rcs_agent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new RCS agent for sending rich messages through the RCS channel. The RCS agent serves as an origination identity for sending RCS messages to your recipients.</td>
</tr>
<tr>
    <td><a href="#update_rcs_agent"><CopyableCode code="update_rcs_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RcsAgentId"><code>RcsAgentId</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing RCS agent. You can update the opt-out list, deletion protection, two-way messaging settings, and self-managed opt-outs configuration.</td>
</tr>
<tr>
    <td><a href="#delete_rcs_agent"><CopyableCode code="delete_rcs_agent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing RCS agent. If deletion protection is enabled, an error is returned.</td>
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
    defaultValue="describe_rcs_agents"
    values={[
        { label: 'describe_rcs_agents', value: 'describe_rcs_agents' }
    ]}
>
<TabItem value="describe_rcs_agents">

Retrieves the specified RCS agents or all RCS agents associated with your Amazon Web Services account. If you specify RCS agent IDs, the output includes information for only the specified RCS agents. If you specify filters, the output includes information for only those RCS agents that meet the filter criteria. If you don't specify RCS agent IDs or filters, the output includes information for all RCS agents.

```sql
SELECT
created_timestamp,
deletion_protection_enabled,
opt_out_list_name,
pool_id,
rcs_agent_arn,
rcs_agent_id,
self_managed_opt_outs_enabled,
status,
testing_agent,
two_way_channel_arn,
two_way_channel_role,
two_way_enabled
FROM aws.pinpoint_sms_voice_v2.rcs_agents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rcs_agent"
    values={[
        { label: 'create_rcs_agent', value: 'create_rcs_agent' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rcs_agent">

Creates a new RCS agent for sending rich messages through the RCS channel. The RCS agent serves as an origination identity for sending RCS messages to your recipients.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.rcs_agents (
DeletionProtectionEnabled,
OptOutListName,
Tags,
ClientToken,
region
)
SELECT 
{{ DeletionProtectionEnabled }},
'{{ OptOutListName }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
created_timestamp,
deletion_protection_enabled,
opt_out_list_name,
rcs_agent_arn,
rcs_agent_id,
self_managed_opt_outs_enabled,
status,
tags,
two_way_channel_arn,
two_way_channel_role,
two_way_enabled
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rcs_agents
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rcs_agents resource.
    - name: DeletionProtectionEnabled
      value: {{ DeletionProtectionEnabled }}
      description: |
        By default this is set to false. When set to true the RCS agent can't be deleted. You can change this value using the UpdateRcsAgent action.
    - name: OptOutListName
      value: "{{ OptOutListName }}"
      description: |
        The OptOutList to associate with the RCS agent. Valid values are either OptOutListName or OptOutListArn.
    - name: Tags
      description: |
        An array of tags (key and value pairs) associated with the RCS agent.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rcs_agent"
    values={[
        { label: 'update_rcs_agent', value: 'update_rcs_agent' }
    ]}
>
<TabItem value="update_rcs_agent">

Updates the configuration of an existing RCS agent. You can update the opt-out list, deletion protection, two-way messaging settings, and self-managed opt-outs configuration.

```sql
UPDATE aws.pinpoint_sms_voice_v2.rcs_agents
SET 
RcsAgentId = '{{ RcsAgentId }}',
DeletionProtectionEnabled = {{ DeletionProtectionEnabled }},
OptOutListName = '{{ OptOutListName }}',
SelfManagedOptOutsEnabled = {{ SelfManagedOptOutsEnabled }},
TwoWayChannelArn = '{{ TwoWayChannelArn }}',
TwoWayChannelRole = '{{ TwoWayChannelRole }}',
TwoWayEnabled = {{ TwoWayEnabled }}
WHERE 
region = '{{ region }}' --required
AND RcsAgentId = '{{ RcsAgentId }}' --required
RETURNING
created_timestamp,
deletion_protection_enabled,
opt_out_list_name,
rcs_agent_arn,
rcs_agent_id,
self_managed_opt_outs_enabled,
status,
two_way_channel_arn,
two_way_channel_role,
two_way_enabled;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rcs_agent"
    values={[
        { label: 'delete_rcs_agent', value: 'delete_rcs_agent' }
    ]}
>
<TabItem value="delete_rcs_agent">

Deletes an existing RCS agent. If deletion protection is enabled, an error is returned.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.rcs_agents
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
