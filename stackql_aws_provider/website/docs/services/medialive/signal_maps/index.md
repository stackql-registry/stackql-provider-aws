--- 
title: signal_maps
hide_title: false
hide_table_of_contents: false
keywords:
  - signal_maps
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

Creates, updates, deletes, gets or lists a <code>signal_maps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signal_maps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.signal_maps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_signal_map"
    values={[
        { label: 'get_signal_map', value: 'get_signal_map' },
        { label: 'list_signal_maps', value: 'list_signal_maps' }
    ]}
>
<TabItem value="get_signal_map">

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
    <td>A signal map's ARN (Amazon Resource Name)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_watch_alarm_template_group_ids" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__stringMin7Max11PatternAws097</td>
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
    <td><CopyableCode code="discovery_entry_point_arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max2048</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max2048</td>
</tr>
<tr>
    <td><CopyableCode code="event_bridge_rule_template_group_ids" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__stringMin7Max11PatternAws097</td>
</tr>
<tr>
    <td><CopyableCode code="failed_media_resource_map" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin7Max11PatternAws097</td>
</tr>
<tr>
    <td><CopyableCode code="last_discovered_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_monitor_deployment" /></td>
    <td><code>object</code></td>
    <td>Represents the latest successful monitor deployment of a signal map.</td>
</tr>
<tr>
    <td><CopyableCode code="media_resource_map" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_changes_pending_deployment" /></td>
    <td><code>boolean</code></td>
    <td>Placeholder documentation for __boolean</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_deployment" /></td>
    <td><code>object</code></td>
    <td>Represents the latest monitor deployment of a signal map.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max255PatternS</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A signal map's current status which is dependent on its lifecycle actions or associated jobs. (CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, UPDATE_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_REVERTED, UPDATE_FAILED, READY, NOT_READY)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_signal_maps">

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
    <td>A signal map's ARN (Amazon Resource Name)</td>
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
    <td><CopyableCode code="monitor_deployment_status" /></td>
    <td><code>string</code></td>
    <td>A signal map's monitor deployment status. (NOT_DEPLOYED, DRY_RUN_DEPLOYMENT_COMPLETE, DRY_RUN_DEPLOYMENT_FAILED, DRY_RUN_DEPLOYMENT_IN_PROGRESS, DEPLOYMENT_COMPLETE, DEPLOYMENT_FAILED, DEPLOYMENT_IN_PROGRESS, DELETE_COMPLETE, DELETE_FAILED, DELETE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max255PatternS</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A signal map's current status which is dependent on its lifecycle actions or associated jobs. (CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, UPDATE_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_REVERTED, UPDATE_FAILED, READY, NOT_READY)</td>
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
    <td><a href="#get_signal_map"><CopyableCode code="get_signal_map" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified signal map.</td>
</tr>
<tr>
    <td><a href="#list_signal_maps"><CopyableCode code="list_signal_maps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-cloudWatchAlarmTemplateGroupIdentifier"><code>cloudWatchAlarmTemplateGroupIdentifier</code></a>, <a href="#parameter-eventBridgeRuleTemplateGroupIdentifier"><code>eventBridgeRuleTemplateGroupIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists signal maps.</td>
</tr>
<tr>
    <td><a href="#create_signal_map"><CopyableCode code="create_signal_map" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DiscoveryEntryPointArn"><code>DiscoveryEntryPointArn</code></a></td>
    <td></td>
    <td>Initiates the creation of a new signal map. Will discover a new mediaResourceMap based on the provided discoveryEntryPointArn.</td>
</tr>
<tr>
    <td><a href="#delete_signal_map"><CopyableCode code="delete_signal_map" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified signal map.</td>
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
    <td>A signal map's identifier. Can be either be its id or current name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-cloudWatchAlarmTemplateGroupIdentifier">
    <td><CopyableCode code="cloudWatchAlarmTemplateGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template group's identifier. Can be either be its id or current name.</td>
</tr>
<tr id="parameter-eventBridgeRuleTemplateGroupIdentifier">
    <td><CopyableCode code="eventBridgeRuleTemplateGroupIdentifier" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_signal_map"
    values={[
        { label: 'get_signal_map', value: 'get_signal_map' },
        { label: 'list_signal_maps', value: 'list_signal_maps' }
    ]}
>
<TabItem value="get_signal_map">

Retrieves the specified signal map.

```sql
SELECT
arn,
cloud_watch_alarm_template_group_ids,
created_at,
description,
discovery_entry_point_arn,
error_message,
event_bridge_rule_template_group_ids,
failed_media_resource_map,
id,
last_discovered_at,
last_successful_monitor_deployment,
media_resource_map,
modified_at,
monitor_changes_pending_deployment,
monitor_deployment,
name,
status,
tags
FROM aws.medialive.signal_maps
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_signal_maps">

Lists signal maps.

```sql
SELECT
arn,
created_at,
description,
id,
modified_at,
monitor_deployment_status,
name,
status,
tags
FROM aws.medialive.signal_maps
WHERE region = '{{ region }}' -- required
AND cloudWatchAlarmTemplateGroupIdentifier = '{{ cloudWatchAlarmTemplateGroupIdentifier }}'
AND eventBridgeRuleTemplateGroupIdentifier = '{{ eventBridgeRuleTemplateGroupIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_signal_map"
    values={[
        { label: 'create_signal_map', value: 'create_signal_map' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_signal_map">

Initiates the creation of a new signal map. Will discover a new mediaResourceMap based on the provided discoveryEntryPointArn.

```sql
INSERT INTO aws.medialive.signal_maps (
CloudWatchAlarmTemplateGroupIdentifiers,
Description,
DiscoveryEntryPointArn,
EventBridgeRuleTemplateGroupIdentifiers,
Name,
Tags,
RequestId,
region
)
SELECT 
'{{ CloudWatchAlarmTemplateGroupIdentifiers }}',
'{{ Description }}',
'{{ DiscoveryEntryPointArn }}' /* required */,
'{{ EventBridgeRuleTemplateGroupIdentifiers }}',
'{{ Name }}',
'{{ Tags }}',
'{{ RequestId }}',
'{{ region }}'
RETURNING
arn,
cloud_watch_alarm_template_group_ids,
created_at,
description,
discovery_entry_point_arn,
error_message,
event_bridge_rule_template_group_ids,
failed_media_resource_map,
id,
last_discovered_at,
last_successful_monitor_deployment,
media_resource_map,
modified_at,
monitor_changes_pending_deployment,
monitor_deployment,
name,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: signal_maps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the signal_maps resource.
    - name: CloudWatchAlarmTemplateGroupIdentifiers
      value:
        - "{{ CloudWatchAlarmTemplateGroupIdentifiers }}"
      description: |
        Placeholder documentation for __listOf__stringPatternS
    - name: Description
      value: "{{ Description }}"
      description: |
        Placeholder documentation for __stringMin0Max1024
    - name: DiscoveryEntryPointArn
      value: "{{ DiscoveryEntryPointArn }}"
      description: |
        Placeholder documentation for __stringMin1Max2048
    - name: EventBridgeRuleTemplateGroupIdentifiers
      value:
        - "{{ EventBridgeRuleTemplateGroupIdentifiers }}"
      description: |
        Placeholder documentation for __listOf__stringPatternS
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


## `DELETE` examples

<Tabs
    defaultValue="delete_signal_map"
    values={[
        { label: 'delete_signal_map', value: 'delete_signal_map' }
    ]}
>
<TabItem value="delete_signal_map">

Deletes the specified signal map.

```sql
DELETE FROM aws.medialive.signal_maps
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
