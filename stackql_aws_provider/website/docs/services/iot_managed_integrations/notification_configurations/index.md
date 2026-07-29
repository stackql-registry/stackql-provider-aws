--- 
title: notification_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_configurations
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

Creates, updates, deletes, gets or lists a <code>notification_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.notification_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notification_configuration"
    values={[
        { label: 'get_notification_configuration', value: 'get_notification_configuration' },
        { label: 'list_notification_configurations', value: 'list_notification_configurations' }
    ]}
>
<TabItem value="get_notification_configuration">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the notification configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_name" /></td>
    <td><code>string</code></td>
    <td>The name of the destination for the notification configuration. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125; ._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event triggering a device notification to the customer-managed destination. (DEVICE_COMMAND, DEVICE_COMMAND_REQUEST, DEVICE_DISCOVERY_STATUS, DEVICE_EVENT, DEVICE_LIFE_CYCLE, DEVICE_STATE, DEVICE_OTA, DEVICE_WSS, CONNECTOR_ASSOCIATION, ACCOUNT_ASSOCIATION, CONNECTOR_ERROR_REPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of key/value pairs that are used to manage the notification configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the notification configuration was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notification_configurations">

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
    <td><CopyableCode code="destination_name" /></td>
    <td><code>string</code></td>
    <td>The name of the destination for the notification configuration. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125; ._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event triggering a device notification to the customer-managed destination. (DEVICE_COMMAND, DEVICE_COMMAND_REQUEST, DEVICE_DISCOVERY_STATUS, DEVICE_EVENT, DEVICE_LIFE_CYCLE, DEVICE_STATE, DEVICE_OTA, DEVICE_WSS, CONNECTOR_ASSOCIATION, ACCOUNT_ASSOCIATION, CONNECTOR_ERROR_REPORT)</td>
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
    <td><a href="#get_notification_configuration"><CopyableCode code="get_notification_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-event_type"><code>event_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a notification configuration for a specified event type.</td>
</tr>
<tr>
    <td><a href="#list_notification_configurations"><CopyableCode code="list_notification_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>List all notification configurations.</td>
</tr>
<tr>
    <td><a href="#create_notification_configuration"><CopyableCode code="create_notification_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventType"><code>EventType</code></a>, <a href="#parameter-DestinationName"><code>DestinationName</code></a></td>
    <td></td>
    <td>Creates a notification configuration. A configuration is a connection between an event type and a destination that you have already created.</td>
</tr>
<tr>
    <td><a href="#update_notification_configuration"><CopyableCode code="update_notification_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-event_type"><code>event_type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationName"><code>DestinationName</code></a></td>
    <td></td>
    <td>Update a notification configuration.</td>
</tr>
<tr>
    <td><a href="#delete_notification_configuration"><CopyableCode code="delete_notification_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-event_type"><code>event_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a notification configuration.</td>
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
<tr id="parameter-event_type">
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event triggering a device notification to the customer-managed destination.</td>
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
    defaultValue="get_notification_configuration"
    values={[
        { label: 'get_notification_configuration', value: 'get_notification_configuration' },
        { label: 'list_notification_configurations', value: 'list_notification_configurations' }
    ]}
>
<TabItem value="get_notification_configuration">

Get a notification configuration for a specified event type.

```sql
SELECT
created_at,
destination_name,
event_type,
tags,
updated_at
FROM aws.iot_managed_integrations.notification_configurations
WHERE event_type = '{{ event_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_notification_configurations">

List all notification configurations.

```sql
SELECT
destination_name,
event_type
FROM aws.iot_managed_integrations.notification_configurations
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notification_configuration"
    values={[
        { label: 'create_notification_configuration', value: 'create_notification_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notification_configuration">

Creates a notification configuration. A configuration is a connection between an event type and a destination that you have already created.

```sql
INSERT INTO aws.iot_managed_integrations.notification_configurations (
EventType,
DestinationName,
ClientToken,
Tags,
region
)
SELECT 
'{{ EventType }}' /* required */,
'{{ DestinationName }}' /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
event_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notification_configurations resource.
    - name: EventType
      value: "{{ EventType }}"
      valid_values: ['DEVICE_COMMAND', 'DEVICE_COMMAND_REQUEST', 'DEVICE_DISCOVERY_STATUS', 'DEVICE_EVENT', 'DEVICE_LIFE_CYCLE', 'DEVICE_STATE', 'DEVICE_OTA', 'DEVICE_WSS', 'CONNECTOR_ASSOCIATION', 'ACCOUNT_ASSOCIATION', 'CONNECTOR_ERROR_REPORT']
    - name: DestinationName
      value: "{{ DestinationName }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notification_configuration"
    values={[
        { label: 'update_notification_configuration', value: 'update_notification_configuration' }
    ]}
>
<TabItem value="update_notification_configuration">

Update a notification configuration.

```sql
UPDATE aws.iot_managed_integrations.notification_configurations
SET 
DestinationName = '{{ DestinationName }}'
WHERE 
event_type = '{{ event_type }}' --required
AND region = '{{ region }}' --required
AND DestinationName = '{{ DestinationName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notification_configuration"
    values={[
        { label: 'delete_notification_configuration', value: 'delete_notification_configuration' }
    ]}
>
<TabItem value="delete_notification_configuration">

Deletes a notification configuration.

```sql
DELETE FROM aws.iot_managed_integrations.notification_configurations
WHERE event_type = '{{ event_type }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
