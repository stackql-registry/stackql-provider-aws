--- 
title: voice_connector_external_systems_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_connector_external_systems_configurations
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>voice_connector_external_systems_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_connector_external_systems_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_connector_external_systems_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_connector_external_systems_configuration"
    values={[
        { label: 'get_voice_connector_external_systems_configuration', value: 'get_voice_connector_external_systems_configuration' }
    ]}
>
<TabItem value="get_voice_connector_external_systems_configuration">

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
    <td><CopyableCode code="ContactCenterSystemTypes" /></td>
    <td><code>array</code></td>
    <td>The contact center system.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionBorderControllerTypes" /></td>
    <td><code>array</code></td>
    <td>The session border controllers.</td>
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
    <td><a href="#get_voice_connector_external_systems_configuration"><CopyableCode code="get_voice_connector_external_systems_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an external systems configuration for a Voice Connector.</td>
</tr>
<tr>
    <td><a href="#put_voice_connector_external_systems_configuration"><CopyableCode code="put_voice_connector_external_systems_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds an external systems configuration to a Voice Connector.</td>
</tr>
<tr>
    <td><a href="#delete_voice_connector_external_systems_configuration"><CopyableCode code="delete_voice_connector_external_systems_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the external systems configuration for a Voice Connector.</td>
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
<tr id="parameter-voice_connector_id">
    <td><CopyableCode code="voice_connector_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Voice Connector for which to delete the external system configuration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_voice_connector_external_systems_configuration"
    values={[
        { label: 'get_voice_connector_external_systems_configuration', value: 'get_voice_connector_external_systems_configuration' }
    ]}
>
<TabItem value="get_voice_connector_external_systems_configuration">

Gets information about an external systems configuration for a Voice Connector.

```sql
SELECT
ContactCenterSystemTypes,
SessionBorderControllerTypes
FROM aws.chime_sdk_voice.voice_connector_external_systems_configurations
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_voice_connector_external_systems_configuration"
    values={[
        { label: 'put_voice_connector_external_systems_configuration', value: 'put_voice_connector_external_systems_configuration' }
    ]}
>
<TabItem value="put_voice_connector_external_systems_configuration">

Adds an external systems configuration to a Voice Connector.

```sql
REPLACE aws.chime_sdk_voice.voice_connector_external_systems_configurations
SET 
SessionBorderControllerTypes = '{{ SessionBorderControllerTypes }}',
ContactCenterSystemTypes = '{{ ContactCenterSystemTypes }}'
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
RETURNING
ExternalSystemsConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_connector_external_systems_configuration"
    values={[
        { label: 'delete_voice_connector_external_systems_configuration', value: 'delete_voice_connector_external_systems_configuration' }
    ]}
>
<TabItem value="delete_voice_connector_external_systems_configuration">

Deletes the external systems configuration for a Voice Connector.

```sql
DELETE FROM aws.chime_sdk_voice.voice_connector_external_systems_configurations
WHERE voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
