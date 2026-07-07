--- 
title: event_log_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - event_log_configurations
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists an <code>event_log_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_log_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.event_log_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_log_configuration"
    values={[
        { label: 'get_event_log_configuration', value: 'get_event_log_configuration' },
        { label: 'list_event_log_configurations', value: 'list_event_log_configurations' }
    ]}
>
<TabItem value="get_event_log_configuration">

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
    <td><CopyableCode code="EventLogLevel" /></td>
    <td><code>string</code></td>
    <td>The logging level for the event log configuration. (DEBUG, ERROR, INFO, WARN)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event log configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource for the event log configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+*&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource for the event log configuration. (pattern: &lt;code&gt;&#91;*&#93;$|^(managed-thing|credential-locker|provisioning-profile|ota-task|account-association)&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_log_configurations">

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
    <td><CopyableCode code="EventLogLevel" /></td>
    <td><code>string</code></td>
    <td>The logging level for the event log configuration. (DEBUG, ERROR, INFO, WARN)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event log configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource for the event log configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+*&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource for the event log configuration. (pattern: &lt;code&gt;&#91;*&#93;$|^(managed-thing|credential-locker|provisioning-profile|ota-task|account-association)&lt;/code&gt;)</td>
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
    <td><a href="#get_event_log_configuration"><CopyableCode code="get_event_log_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get an event log configuration.</td>
</tr>
<tr>
    <td><a href="#list_event_log_configurations"><CopyableCode code="list_event_log_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List all event log configurations for an account.</td>
</tr>
<tr>
    <td><a href="#create_event_log_configuration"><CopyableCode code="create_event_log_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-EventLogLevel"><code>EventLogLevel</code></a></td>
    <td></td>
    <td>Set the event log configuration for the account, resource type, or specific resource.</td>
</tr>
<tr>
    <td><a href="#update_event_log_configuration"><CopyableCode code="update_event_log_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventLogLevel"><code>EventLogLevel</code></a></td>
    <td></td>
    <td>Update an event log configuration by log configuration ID.</td>
</tr>
<tr>
    <td><a href="#delete_event_log_configuration"><CopyableCode code="delete_event_log_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an event log configuration.</td>
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
    <td>The identifier of the event log configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_log_configuration"
    values={[
        { label: 'get_event_log_configuration', value: 'get_event_log_configuration' },
        { label: 'list_event_log_configurations', value: 'list_event_log_configurations' }
    ]}
>
<TabItem value="get_event_log_configuration">

Get an event log configuration.

```sql
SELECT
EventLogLevel,
Id,
ResourceId,
ResourceType
FROM aws.iot_managed_integrations.event_log_configurations
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_log_configurations">

List all event log configurations for an account.

```sql
SELECT
EventLogLevel,
Id,
ResourceId,
ResourceType
FROM aws.iot_managed_integrations.event_log_configurations
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_log_configuration"
    values={[
        { label: 'create_event_log_configuration', value: 'create_event_log_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_log_configuration">

Set the event log configuration for the account, resource type, or specific resource.

```sql
INSERT INTO aws.iot_managed_integrations.event_log_configurations (
ResourceType,
ResourceId,
EventLogLevel,
ClientToken,
region
)
SELECT 
'{{ ResourceType }}' /* required */,
'{{ ResourceId }}',
'{{ EventLogLevel }}' /* required */,
'{{ ClientToken }}',
'{{ region }}'
RETURNING
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_log_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_log_configurations resource.
    - name: ResourceType
      value: "{{ ResourceType }}"
    - name: ResourceId
      value: "{{ ResourceId }}"
    - name: EventLogLevel
      value: "{{ EventLogLevel }}"
      valid_values: ['DEBUG', 'ERROR', 'INFO', 'WARN']
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_log_configuration"
    values={[
        { label: 'update_event_log_configuration', value: 'update_event_log_configuration' }
    ]}
>
<TabItem value="update_event_log_configuration">

Update an event log configuration by log configuration ID.

```sql
UPDATE aws.iot_managed_integrations.event_log_configurations
SET 
EventLogLevel = '{{ EventLogLevel }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND EventLogLevel = '{{ EventLogLevel }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_log_configuration"
    values={[
        { label: 'delete_event_log_configuration', value: 'delete_event_log_configuration' }
    ]}
>
<TabItem value="delete_event_log_configuration">

Delete an event log configuration.

```sql
DELETE FROM aws.iot_managed_integrations.event_log_configurations
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
