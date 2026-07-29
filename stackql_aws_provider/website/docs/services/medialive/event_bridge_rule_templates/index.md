--- 
title: event_bridge_rule_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - event_bridge_rule_templates
  - medialive
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

Creates, updates, deletes, gets or lists an <code>event_bridge_rule_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_bridge_rule_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.event_bridge_rule_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_bridge_rule_template"
    values={[
        { label: 'get_event_bridge_rule_template', value: 'get_event_bridge_rule_template' },
        { label: 'list_event_bridge_rule_templates', value: 'list_event_bridge_rule_templates' }
    ]}
>
<TabItem value="get_event_bridge_rule_template">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An eventbridge rule template's ARN (Amazon Resource Name)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin0Max1024</td>
</tr>
<tr>
    <td><CopyableCode code="event_targets" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOfEventBridgeRuleTemplateTarget</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event to match with the rule. (MEDIALIVE_MULTIPLEX_ALERT, MEDIALIVE_MULTIPLEX_STATE_CHANGE, MEDIALIVE_CHANNEL_ALERT, MEDIALIVE_CHANNEL_INPUT_CHANGE, MEDIALIVE_CHANNEL_STATE_CHANGE, MEDIAPACKAGE_INPUT_NOTIFICATION, MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION, MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION, SIGNAL_MAP_ACTIVE_ALARM, MEDIACONNECT_ALERT, MEDIACONNECT_SOURCE_HEALTH, MEDIACONNECT_OUTPUT_HEALTH, MEDIACONNECT_FLOW_STATUS_CHANGE)</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin7Max11PatternAws097</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin7Max11PatternAws097</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max255PatternS</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_bridge_rule_templates">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An eventbridge rule template's ARN (Amazon Resource Name)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin0Max1024</td>
</tr>
<tr>
    <td><CopyableCode code="event_target_count" /></td>
    <td><code>integer</code></td>
    <td>The number of targets configured to send matching events.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event to match with the rule. (MEDIALIVE_MULTIPLEX_ALERT, MEDIALIVE_MULTIPLEX_STATE_CHANGE, MEDIALIVE_CHANNEL_ALERT, MEDIALIVE_CHANNEL_INPUT_CHANGE, MEDIALIVE_CHANNEL_STATE_CHANGE, MEDIAPACKAGE_INPUT_NOTIFICATION, MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION, MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION, SIGNAL_MAP_ACTIVE_ALARM, MEDIACONNECT_ALERT, MEDIACONNECT_SOURCE_HEALTH, MEDIACONNECT_OUTPUT_HEALTH, MEDIACONNECT_FLOW_STATUS_CHANGE)</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max255PatternS</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#get_event_bridge_rule_template"><CopyableCode code="get_event_bridge_rule_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified eventbridge rule template.</td>
</tr>
<tr>
    <td><a href="#list_event_bridge_rule_templates"><CopyableCode code="list_event_bridge_rule_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-groupIdentifier"><code>groupIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-signalMapIdentifier"><code>signalMapIdentifier</code></a></td>
    <td>Lists eventbridge rule templates.</td>
</tr>
<tr>
    <td><a href="#create_event_bridge_rule_template"><CopyableCode code="create_event_bridge_rule_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventType"><code>EventType</code></a>, <a href="#parameter-GroupIdentifier"><code>GroupIdentifier</code></a></td>
    <td></td>
    <td>Creates an eventbridge rule template to monitor events and send notifications to your targeted resources.</td>
</tr>
<tr>
    <td><a href="#update_event_bridge_rule_template"><CopyableCode code="update_event_bridge_rule_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified eventbridge rule template.</td>
</tr>
<tr>
    <td><a href="#delete_event_bridge_rule_template"><CopyableCode code="delete_event_bridge_rule_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an eventbridge rule template.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>An eventbridge rule template's identifier. Can be either be its id or current name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-groupIdentifier">
    <td><CopyableCode code="groupIdentifier" /></td>
    <td><code>string</code></td>
    <td>An eventbridge rule template group's identifier. Can be either be its id or current name.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to retrieve the next set of results in paginated list responses.</td>
</tr>
<tr id="parameter-signalMapIdentifier">
    <td><CopyableCode code="signalMapIdentifier" /></td>
    <td><code>string</code></td>
    <td>A signal map's identifier. Can be either be its id or current name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_bridge_rule_template"
    values={[
        { label: 'get_event_bridge_rule_template', value: 'get_event_bridge_rule_template' },
        { label: 'list_event_bridge_rule_templates', value: 'list_event_bridge_rule_templates' }
    ]}
>
<TabItem value="get_event_bridge_rule_template">

Retrieves the specified eventbridge rule template.

```sql
SELECT
arn,
created_at,
description,
event_targets,
event_type,
group_id,
id,
modified_at,
name,
tags
FROM aws.medialive.event_bridge_rule_templates
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_bridge_rule_templates">

Lists eventbridge rule templates.

```sql
SELECT
arn,
created_at,
description,
event_target_count,
event_type,
group_id,
id,
modified_at,
name,
tags
FROM aws.medialive.event_bridge_rule_templates
WHERE region = '{{ region }}' -- required
AND groupIdentifier = '{{ groupIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND signalMapIdentifier = '{{ signalMapIdentifier }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_bridge_rule_template"
    values={[
        { label: 'create_event_bridge_rule_template', value: 'create_event_bridge_rule_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_bridge_rule_template">

Creates an eventbridge rule template to monitor events and send notifications to your targeted resources.

```sql
INSERT INTO aws.medialive.event_bridge_rule_templates (
Description,
EventTargets,
EventType,
GroupIdentifier,
Name,
Tags,
RequestId,
region
)
SELECT 
'{{ Description }}',
'{{ EventTargets }}',
'{{ EventType }}' /* required */,
'{{ GroupIdentifier }}' /* required */,
'{{ Name }}',
'{{ Tags }}',
'{{ RequestId }}',
'{{ region }}'
RETURNING
arn,
created_at,
description,
event_targets,
event_type,
group_id,
id,
modified_at,
name,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_bridge_rule_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_bridge_rule_templates resource.
    - name: Description
      value: "{{ Description }}"
      description: |
        Placeholder documentation for __stringMin0Max1024
    - name: EventTargets
      description: |
        Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
      value:
        - Arn: "{{ Arn }}"
    - name: EventType
      value: "{{ EventType }}"
      description: |
        The type of event to match with the rule.
      valid_values: ['MEDIALIVE_MULTIPLEX_ALERT', 'MEDIALIVE_MULTIPLEX_STATE_CHANGE', 'MEDIALIVE_CHANNEL_ALERT', 'MEDIALIVE_CHANNEL_INPUT_CHANGE', 'MEDIALIVE_CHANNEL_STATE_CHANGE', 'MEDIAPACKAGE_INPUT_NOTIFICATION', 'MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION', 'MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION', 'SIGNAL_MAP_ACTIVE_ALARM', 'MEDIACONNECT_ALERT', 'MEDIACONNECT_SOURCE_HEALTH', 'MEDIACONNECT_OUTPUT_HEALTH', 'MEDIACONNECT_FLOW_STATUS_CHANGE']
    - name: GroupIdentifier
      value: "{{ GroupIdentifier }}"
      description: |
        Placeholder documentation for __stringPatternS
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __stringMin1Max255PatternS
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents the tags associated with a resource.
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __stringMin1Max256PatternS
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_bridge_rule_template"
    values={[
        { label: 'update_event_bridge_rule_template', value: 'update_event_bridge_rule_template' }
    ]}
>
<TabItem value="update_event_bridge_rule_template">

Updates the specified eventbridge rule template.

```sql
UPDATE aws.medialive.event_bridge_rule_templates
SET 
Description = '{{ Description }}',
EventTargets = '{{ EventTargets }}',
EventType = '{{ EventType }}',
GroupIdentifier = '{{ GroupIdentifier }}',
Name = '{{ Name }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
created_at,
description,
event_targets,
event_type,
group_id,
id,
modified_at,
name,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_bridge_rule_template"
    values={[
        { label: 'delete_event_bridge_rule_template', value: 'delete_event_bridge_rule_template' }
    ]}
>
<TabItem value="delete_event_bridge_rule_template">

Deletes an eventbridge rule template.

```sql
DELETE FROM aws.medialive.event_bridge_rule_templates
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
