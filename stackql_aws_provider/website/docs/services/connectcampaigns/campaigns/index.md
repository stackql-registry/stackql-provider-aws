--- 
title: campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - campaigns
  - connectcampaigns
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

Creates, updates, deletes, gets or lists a <code>campaigns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="campaigns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaigns.campaigns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_campaign"
    values={[
        { label: 'describe_campaign', value: 'describe_campaign' },
        { label: 'list_campaigns', value: 'list_campaigns' }
    ]}
>
<TabItem value="describe_campaign">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identifier representing a Campaign (pattern: &lt;code&gt;&#91;\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of an Amazon Connect Campaign name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The resource name of an Amazon Connect campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="connect_instance_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Connect Instance Id (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dialer_config" /></td>
    <td><code>object</code></td>
    <td>The possible types of dialer config parameters</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_call_config" /></td>
    <td><code>object</code></td>
    <td>The configuration used for outbound calls.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_campaigns">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identifier representing a Campaign (pattern: &lt;code&gt;&#91;\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of an Amazon Connect Campaign name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The resource name of an Amazon Connect campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="connect_instance_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Connect Instance Id (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-.&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_campaign"><CopyableCode code="describe_campaign" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specific campaign.</td>
</tr>
<tr>
    <td><a href="#list_campaigns"><CopyableCode code="list_campaigns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides summary information about the campaigns under the specified Amazon Connect account.</td>
</tr>
<tr>
    <td><a href="#create_campaign"><CopyableCode code="create_campaign" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-connectInstanceId"><code>connectInstanceId</code></a>, <a href="#parameter-dialerConfig"><code>dialerConfig</code></a>, <a href="#parameter-outboundCallConfig"><code>outboundCallConfig</code></a></td>
    <td></td>
    <td>Creates a campaign for the specified Amazon Connect account. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_dialer_config"><CopyableCode code="update_campaign_dialer_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dialerConfig"><code>dialerConfig</code></a></td>
    <td></td>
    <td>Updates the dialer config of a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_name"><CopyableCode code="update_campaign_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the name of a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#update_campaign_outbound_call_config"><CopyableCode code="update_campaign_outbound_call_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the outbound call config of a campaign. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#delete_campaign"><CopyableCode code="delete_campaign" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a campaign from the specified Amazon Connect account.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
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
    defaultValue="describe_campaign"
    values={[
        { label: 'describe_campaign', value: 'describe_campaign' },
        { label: 'list_campaigns', value: 'list_campaigns' }
    ]}
>
<TabItem value="describe_campaign">

Describes the specific campaign.

```sql
SELECT
id,
name,
arn,
connect_instance_id,
dialer_config,
outbound_call_config,
tags
FROM aws.connectcampaigns.campaigns
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_campaigns">

Provides summary information about the campaigns under the specified Amazon Connect account.

```sql
SELECT
id,
name,
arn,
connect_instance_id
FROM aws.connectcampaigns.campaigns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_campaign"
    values={[
        { label: 'create_campaign', value: 'create_campaign' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_campaign">

Creates a campaign for the specified Amazon Connect account. This API is idempotent.

```sql
INSERT INTO aws.connectcampaigns.campaigns (
name,
connectInstanceId,
dialerConfig,
outboundCallConfig,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ connectInstanceId }}' /* required */,
'{{ dialerConfig }}' /* required */,
'{{ outboundCallConfig }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: campaigns
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the campaigns resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of an Amazon Connect Campaign name.
    - name: connectInstanceId
      value: "{{ connectInstanceId }}"
      description: |
        Amazon Connect Instance Id
    - name: dialerConfig
      description: |
        The possible types of dialer config parameters
      value:
        progressiveDialerConfig:
          bandwidthAllocation: {{ bandwidthAllocation }}
          dialingCapacity: {{ dialingCapacity }}
        predictiveDialerConfig:
          bandwidthAllocation: {{ bandwidthAllocation }}
          dialingCapacity: {{ dialingCapacity }}
        agentlessDialerConfig:
          dialingCapacity: {{ dialingCapacity }}
    - name: outboundCallConfig
      description: |
        The configuration used for outbound calls.
      value:
        connectContactFlowId: "{{ connectContactFlowId }}"
        connectSourcePhoneNumber: "{{ connectSourcePhoneNumber }}"
        connectQueueId: "{{ connectQueueId }}"
        answerMachineDetectionConfig:
          enableAnswerMachineDetection: {{ enableAnswerMachineDetection }}
          awaitAnswerMachinePrompt: {{ awaitAnswerMachinePrompt }}
    - name: tags
      value: "{{ tags }}"
      description: |
        Tag map with key and value.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_campaign_dialer_config"
    values={[
        { label: 'update_campaign_dialer_config', value: 'update_campaign_dialer_config' },
        { label: 'update_campaign_name', value: 'update_campaign_name' },
        { label: 'update_campaign_outbound_call_config', value: 'update_campaign_outbound_call_config' }
    ]}
>
<TabItem value="update_campaign_dialer_config">

Updates the dialer config of a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaigns.campaigns
SET 
dialerConfig = '{{ dialerConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND dialerConfig = '{{ dialerConfig }}' --required;
```
</TabItem>
<TabItem value="update_campaign_name">

Updates the name of a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaigns.campaigns
SET 
name = '{{ name }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
<TabItem value="update_campaign_outbound_call_config">

Updates the outbound call config of a campaign. This API is idempotent.

```sql
UPDATE aws.connectcampaigns.campaigns
SET 
connectContactFlowId = '{{ connectContactFlowId }}',
connectSourcePhoneNumber = '{{ connectSourcePhoneNumber }}',
answerMachineDetectionConfig = '{{ answerMachineDetectionConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_campaign"
    values={[
        { label: 'delete_campaign', value: 'delete_campaign' }
    ]}
>
<TabItem value="delete_campaign">

Deletes a campaign from the specified Amazon Connect account.

```sql
DELETE FROM aws.connectcampaigns.campaigns
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
