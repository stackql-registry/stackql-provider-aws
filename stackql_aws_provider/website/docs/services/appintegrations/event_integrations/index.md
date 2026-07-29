--- 
title: event_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - event_integrations
  - appintegrations
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

Creates, updates, deletes, gets or lists an <code>event_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appintegrations.event_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_integration"
    values={[
        { label: 'get_event_integration', value: 'get_event_integration' },
        { label: 'list_event_integrations', value: 'list_event_integrations' }
    ]}
>
<TabItem value="get_event_integration">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the event integration. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_bridge_bus" /></td>
    <td><code>string</code></td>
    <td>The EventBridge bus. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_filter" /></td>
    <td><code>object</code></td>
    <td>The event filter.</td>
</tr>
<tr>
    <td><CopyableCode code="event_integration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the event integration. (pattern: &lt;code&gt;^arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the event integration. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_integrations">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The event integration description. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_bridge_bus" /></td>
    <td><code>string</code></td>
    <td>The Amazon EventBridge bus for the event integration. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_filter" /></td>
    <td><code>object</code></td>
    <td>The event filter.</td>
</tr>
<tr>
    <td><CopyableCode code="event_integration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event integration. (pattern: &lt;code&gt;^arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the event integration. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#get_event_integration"><CopyableCode code="get_event_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the event integration.</td>
</tr>
<tr>
    <td><a href="#list_event_integrations"><CopyableCode code="list_event_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a paginated list of event integrations in the account.</td>
</tr>
<tr>
    <td><a href="#create_event_integration"><CopyableCode code="create_event_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventFilter"><code>EventFilter</code></a>, <a href="#parameter-EventBridgeBus"><code>EventBridgeBus</code></a></td>
    <td></td>
    <td>Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.</td>
</tr>
<tr>
    <td><a href="#update_event_integration"><CopyableCode code="update_event_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the description of an event integration.</td>
</tr>
<tr>
    <td><a href="#delete_event_integration"><CopyableCode code="delete_event_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the event integration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_integration"
    values={[
        { label: 'get_event_integration', value: 'get_event_integration' },
        { label: 'list_event_integrations', value: 'list_event_integrations' }
    ]}
>
<TabItem value="get_event_integration">

Returns information about the event integration.

```sql
SELECT
description,
event_bridge_bus,
event_filter,
event_integration_arn,
name,
tags
FROM aws.appintegrations.event_integrations
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_integrations">

Returns a paginated list of event integrations in the account.

```sql
SELECT
description,
event_bridge_bus,
event_filter,
event_integration_arn,
name,
tags
FROM aws.appintegrations.event_integrations
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_integration"
    values={[
        { label: 'create_event_integration', value: 'create_event_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_integration">

Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.

```sql
INSERT INTO aws.appintegrations.event_integrations (
Name,
Description,
EventFilter,
EventBridgeBus,
ClientToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ EventFilter }}' /* required */,
'{{ EventBridgeBus }}' /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
event_integration_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_integrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_integrations resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: EventFilter
      description: |
        The event filter.
      value:
        Source: "{{ Source }}"
    - name: EventBridgeBus
      value: "{{ EventBridgeBus }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_integration"
    values={[
        { label: 'update_event_integration', value: 'update_event_integration' }
    ]}
>
<TabItem value="update_event_integration">

Updates the description of an event integration.

```sql
UPDATE aws.appintegrations.event_integrations
SET 
Description = '{{ Description }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_integration"
    values={[
        { label: 'delete_event_integration', value: 'delete_event_integration' }
    ]}
>
<TabItem value="delete_event_integration">

Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.

```sql
DELETE FROM aws.appintegrations.event_integrations
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
