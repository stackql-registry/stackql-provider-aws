--- 
title: profiling_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - profiling_groups
  - codeguruprofiler
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

Creates, updates, deletes, gets or lists a <code>profiling_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profiling_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguruprofiler.profiling_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_profiling_group"
    values={[
        { label: 'describe_profiling_group', value: 'describe_profiling_group' },
        { label: 'list_profiling_groups', value: 'list_profiling_groups' }
    ]}
>
<TabItem value="describe_profiling_group">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group. (pattern: &lt;code&gt;^&#91;\w-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_orchestration_config" /></td>
    <td><code>object</code></td>
    <td>Specifies whether profiling is enabled or disabled for a profiling group. It is used by ConfigureAgent to enable or disable profiling for a profiling group.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) identifying the profiling group resource.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_platform" /></td>
    <td><code>string</code></td>
    <td>The compute platform of the profiling group. If it is set to AWSLambda, then the profiled application runs on AWS Lambda. If it is set to Default, then the profiled application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. The default is Default. (Default, AWSLambda)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the profiling group was created. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="profiling_status" /></td>
    <td><code>object</code></td>
    <td>A ProfilingStatus object that includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of the tags that belong to this profiling group.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the profiling group was last updated. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_profiling_groups">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future ListProfilingGroups request. When the results of a ListProfilingGroups request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;^&#91;\w-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profiling_group_names" /></td>
    <td><code>array</code></td>
    <td>A returned list of profiling group names. A list of the names is returned only if includeDescription is false, otherwise a list of ProfilingGroupDescription objects is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="profiling_groups" /></td>
    <td><code>array</code></td>
    <td>A returned list ProfilingGroupDescription objects. A list of ProfilingGroupDescription objects is returned only if includeDescription is true, otherwise a list of profiling group names is returned.</td>
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
    <td><a href="#describe_profiling_group"><CopyableCode code="describe_profiling_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a ProfilingGroupDescription object that contains information about the requested profiling group.</td>
</tr>
<tr>
    <td><a href="#list_profiling_groups"><CopyableCode code="list_profiling_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeDescription"><code>includeDescription</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of profiling groups. The profiling groups are returned as ProfilingGroupDescription objects.</td>
</tr>
<tr>
    <td><a href="#create_profiling_group"><CopyableCode code="create_profiling_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-profilingGroupName"><code>profilingGroupName</code></a></td>
    <td></td>
    <td>Creates a profiling group.</td>
</tr>
<tr>
    <td><a href="#remove_permission"><CopyableCode code="remove_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-action_group"><code>action_group</code></a>, <a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is agentPermission which grants ConfigureAgent and PostAgent permissions. For more information, see Resource-based policies in CodeGuru Profiler in the Amazon CodeGuru Profiler User Guide, ConfigureAgent , and PostAgentProfile .</td>
</tr>
<tr>
    <td><a href="#add_notification_channels"><CopyableCode code="add_notification_channels" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channels"><code>channels</code></a></td>
    <td></td>
    <td>Add up to 2 anomaly notifications channels for a profiling group.</td>
</tr>
<tr>
    <td><a href="#update_profiling_group"><CopyableCode code="update_profiling_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentOrchestrationConfig"><code>agentOrchestrationConfig</code></a></td>
    <td></td>
    <td>Updates a profiling group.</td>
</tr>
<tr>
    <td><a href="#remove_notification_channel"><CopyableCode code="remove_notification_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove one anomaly notifications channel for a profiling group.</td>
</tr>
<tr>
    <td><a href="#put_permission"><CopyableCode code="put_permission" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-action_group"><code>action_group</code></a>, <a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principals"><code>principals</code></a></td>
    <td></td>
    <td>Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the principals parameter. <code>&lt;p&gt;</code> The one supported action group that can be added is <code>&lt;code&gt;</code>agentPermission&lt;/code&gt; which grants <code>&lt;code&gt;</code>ConfigureAgent&lt;/code&gt; and <code>&lt;code&gt;</code>PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html"&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the <code>&lt;i&gt;</code>Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"&gt; <code>&lt;code&gt;</code>ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"&gt; <code>&lt;code&gt;</code>PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; <code>&lt;p&gt;</code> The first time you call <code>&lt;code&gt;</code>PutPermission&lt;/code&gt; on a profiling group, do not specify a <code>&lt;code&gt;</code>revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a <code>&lt;code&gt;</code>revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; <code>&lt;p&gt;</code> The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt;</td>
</tr>
<tr>
    <td><a href="#delete_profiling_group"><CopyableCode code="delete_profiling_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a profiling group.</td>
</tr>
<tr>
    <td><a href="#configure_agent"><CopyableCode code="configure_agent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used by profiler agents to report their current state and to receive remote configuration updates. For example, ConfigureAgent can be used to tell an agent whether to profile or not and for how long to return profiling data.</td>
</tr>
<tr>
    <td><a href="#post_agent_profile"><CopyableCode code="post_agent_profile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentProfile"><code>agentProfile</code></a></td>
    <td><a href="#parameter-profileToken"><code>profileToken</code></a></td>
    <td>Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use GetProfile .</td>
</tr>
<tr>
    <td><a href="#submit_feedback"><CopyableCode code="submit_feedback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-anomaly_instance_id"><code>anomaly_instance_id</code></a>, <a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.</td>
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
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>The format of the submitted profiling data. The format maps to the Accept and Content-Type headers of the HTTP request. You can specify one of the following: or the default . <code>&lt;ul&gt;</code> <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> <code>&lt;code&gt;</code>application/json&lt;/code&gt; — standard JSON format &lt;/p&gt; &lt;/li&gt; <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> <code>&lt;code&gt;</code>application/x-amzn-ion&lt;/code&gt; — the Amazon Ion data format. For more information, see &lt;a href="http:​//amzn.github.io/ion-docs/"&gt;Amazon Ion&lt;/a&gt;. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;</td>
</tr>
<tr id="parameter-action_group">
    <td><CopyableCode code="action_group" /></td>
    <td><code>string</code></td>
    <td>Specifies an action group that contains permissions to add to a profiling group resource. One action group is supported, agentPermissions, which grants permission to perform actions required by the profiling agent, ConfigureAgent and PostAgentProfile permissions.</td>
</tr>
<tr id="parameter-anomaly_instance_id">
    <td><CopyableCode code="anomaly_instance_id" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) of the AnomalyInstance object that is included in the analysis data.</td>
</tr>
<tr id="parameter-channel_id">
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The id of the channel that we want to stop receiving notifications.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental creation of duplicate profiling groups if there are failures and retries.</td>
</tr>
<tr id="parameter-profiling_group_name">
    <td><CopyableCode code="profiling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group that is associated with the analysis data.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-revisionId">
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>A universally unique identifier (UUID) for the revision of the resource-based policy from which you want to remove permissions.</td>
</tr>
<tr id="parameter-includeDescription">
    <td><CopyableCode code="includeDescription" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether to include a description. If true, then a list of ProfilingGroupDescription objects that contain detailed information about profiling groups is returned. If false, then a list of profiling group names is returned.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of profiling groups results returned by ListProfilingGroups in paginated output. When this parameter is used, ListProfilingGroups only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListProfilingGroups request with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListProfilingGroups request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
<tr id="parameter-profileToken">
    <td><CopyableCode code="profileToken" /></td>
    <td><code>string</code></td>
    <td>Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental submission of duplicate profiling data if there are failures and retries.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_profiling_group"
    values={[
        { label: 'describe_profiling_group', value: 'describe_profiling_group' },
        { label: 'list_profiling_groups', value: 'list_profiling_groups' }
    ]}
>
<TabItem value="describe_profiling_group">

Returns a ProfilingGroupDescription object that contains information about the requested profiling group.

```sql
SELECT
name,
agent_orchestration_config,
arn,
compute_platform,
created_at,
profiling_status,
tags,
updated_at
FROM aws.codeguruprofiler.profiling_groups
WHERE profiling_group_name = '{{ profiling_group_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profiling_groups">

Returns a list of profiling groups. The profiling groups are returned as ProfilingGroupDescription objects.

```sql
SELECT
next_token,
profiling_group_names,
profiling_groups
FROM aws.codeguruprofiler.profiling_groups
WHERE region = '{{ region }}' -- required
AND includeDescription = '{{ includeDescription }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_profiling_group"
    values={[
        { label: 'create_profiling_group', value: 'create_profiling_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_profiling_group">

Creates a profiling group.

```sql
INSERT INTO aws.codeguruprofiler.profiling_groups (
agentOrchestrationConfig,
computePlatform,
profilingGroupName,
tags,
clientToken,
region
)
SELECT 
'{{ agentOrchestrationConfig }}',
'{{ computePlatform }}',
'{{ profilingGroupName }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
profiling_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: profiling_groups
  props:
    - name: clientToken
      value: "{{ clientToken }}"
      description: Required parameter for the profiling_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the profiling_groups resource.
    - name: agentOrchestrationConfig
      description: |
        Specifies whether profiling is enabled or disabled for a profiling group. It is used by ConfigureAgent to enable or disable profiling for a profiling group.
      value:
        profilingEnabled: {{ profilingEnabled }}
    - name: computePlatform
      value: "{{ computePlatform }}"
      valid_values: ['Default', 'AWSLambda']
    - name: profilingGroupName
      value: "{{ profilingGroupName }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_permission"
    values={[
        { label: 'remove_permission', value: 'remove_permission' },
        { label: 'add_notification_channels', value: 'add_notification_channels' },
        { label: 'update_profiling_group', value: 'update_profiling_group' },
        { label: 'remove_notification_channel', value: 'remove_notification_channel' }
    ]}
>
<TabItem value="remove_permission">

Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is agentPermission which grants ConfigureAgent and PostAgent permissions. For more information, see Resource-based policies in CodeGuru Profiler in the Amazon CodeGuru Profiler User Guide, ConfigureAgent , and PostAgentProfile .

```sql
UPDATE aws.codeguruprofiler.profiling_groups
SET 
-- No updatable properties
WHERE 
action_group = '{{ action_group }}' --required
AND profiling_group_name = '{{ profiling_group_name }}' --required
AND revisionId = '{{ revisionId }}' --required
AND region = '{{ region }}' --required
RETURNING
policy,
revision_id;
```
</TabItem>
<TabItem value="add_notification_channels">

Add up to 2 anomaly notifications channels for a profiling group.

```sql
UPDATE aws.codeguruprofiler.profiling_groups
SET 
channels = '{{ channels }}'
WHERE 
profiling_group_name = '{{ profiling_group_name }}' --required
AND region = '{{ region }}' --required
AND channels = '{{ channels }}' --required
RETURNING
notification_configuration;
```
</TabItem>
<TabItem value="update_profiling_group">

Updates a profiling group.

```sql
UPDATE aws.codeguruprofiler.profiling_groups
SET 
agentOrchestrationConfig = '{{ agentOrchestrationConfig }}'
WHERE 
profiling_group_name = '{{ profiling_group_name }}' --required
AND region = '{{ region }}' --required
AND agentOrchestrationConfig = '{{ agentOrchestrationConfig }}' --required
RETURNING
profiling_group;
```
</TabItem>
<TabItem value="remove_notification_channel">

Remove one anomaly notifications channel for a profiling group.

```sql
UPDATE aws.codeguruprofiler.profiling_groups
SET 
-- No updatable properties
WHERE 
channel_id = '{{ channel_id }}' --required
AND profiling_group_name = '{{ profiling_group_name }}' --required
AND region = '{{ region }}' --required
RETURNING
notification_configuration;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_permission"
    values={[
        { label: 'put_permission', value: 'put_permission' }
    ]}
>
<TabItem value="put_permission">

Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the principals parameter. <code>&lt;p&gt;</code> The one supported action group that can be added is <code>&lt;code&gt;</code>agentPermission&lt;/code&gt; which grants <code>&lt;code&gt;</code>ConfigureAgent&lt;/code&gt; and <code>&lt;code&gt;</code>PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html"&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the <code>&lt;i&gt;</code>Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"&gt; <code>&lt;code&gt;</code>ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"&gt; <code>&lt;code&gt;</code>PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; <code>&lt;p&gt;</code> The first time you call <code>&lt;code&gt;</code>PutPermission&lt;/code&gt; on a profiling group, do not specify a <code>&lt;code&gt;</code>revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a <code>&lt;code&gt;</code>revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; <code>&lt;p&gt;</code> The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt;

```sql
REPLACE aws.codeguruprofiler.profiling_groups
SET 
principals = '{{ principals }}',
revisionId = '{{ revisionId }}'
WHERE 
action_group = '{{ action_group }}' --required
AND profiling_group_name = '{{ profiling_group_name }}' --required
AND region = '{{ region }}' --required
AND principals = '{{ principals }}' --required
RETURNING
policy,
revision_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_profiling_group"
    values={[
        { label: 'delete_profiling_group', value: 'delete_profiling_group' }
    ]}
>
<TabItem value="delete_profiling_group">

Deletes a profiling group.

```sql
DELETE FROM aws.codeguruprofiler.profiling_groups
WHERE profiling_group_name = '{{ profiling_group_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="configure_agent"
    values={[
        { label: 'configure_agent', value: 'configure_agent' },
        { label: 'post_agent_profile', value: 'post_agent_profile' },
        { label: 'submit_feedback', value: 'submit_feedback' }
    ]}
>
<TabItem value="configure_agent">

Used by profiler agents to report their current state and to receive remote configuration updates. For example, ConfigureAgent can be used to tell an agent whether to profile or not and for how long to return profiling data.

```sql
EXEC aws.codeguruprofiler.profiling_groups.configure_agent 
@profiling_group_name='{{ profiling_group_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"fleetInstanceId": "{{ fleetInstanceId }}", 
"metadata": "{{ metadata }}"
}'
;
```
</TabItem>
<TabItem value="post_agent_profile">

Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use GetProfile .

```sql
EXEC aws.codeguruprofiler.profiling_groups.post_agent_profile 
@Content-Type='{{ Content-Type }}' --required, 
@profiling_group_name='{{ profiling_group_name }}' --required, 
@region='{{ region }}' --required, 
@profileToken='{{ profileToken }}' 
@@json=
'{
"agentProfile": "{{ agentProfile }}"
}'
;
```
</TabItem>
<TabItem value="submit_feedback">

Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.

```sql
EXEC aws.codeguruprofiler.profiling_groups.submit_feedback 
@anomaly_instance_id='{{ anomaly_instance_id }}' --required, 
@profiling_group_name='{{ profiling_group_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"comment": "{{ comment }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
</Tabs>
