--- 
title: connection_recording_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_recording_preferences
  - ssm_guiconnect
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

Creates, updates, deletes, gets or lists a <code>connection_recording_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_recording_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_guiconnect.connection_recording_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection_recording_preferences"
    values={[
        { label: 'get_connection_recording_preferences', value: 'get_connection_recording_preferences' }
    ]}
>
<TabItem value="get_connection_recording_preferences">

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
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>Service-provided idempotency token.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_recording_preferences" /></td>
    <td><code>object</code></td>
    <td>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</td>
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
    <td><a href="#get_connection_recording_preferences"><CopyableCode code="get_connection_recording_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the preferences specified for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#update_connection_recording_preferences"><CopyableCode code="update_connection_recording_preferences" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionRecordingPreferences"><code>ConnectionRecordingPreferences</code></a></td>
    <td></td>
    <td>Updates the preferences for recording RDP connections.</td>
</tr>
<tr>
    <td><a href="#delete_connection_recording_preferences"><CopyableCode code="delete_connection_recording_preferences" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the preferences for recording RDP connections.</td>
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
    defaultValue="get_connection_recording_preferences"
    values={[
        { label: 'get_connection_recording_preferences', value: 'get_connection_recording_preferences' }
    ]}
>
<TabItem value="get_connection_recording_preferences">

Returns the preferences specified for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region.

```sql
SELECT
client_token,
connection_recording_preferences
FROM aws.ssm_guiconnect.connection_recording_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection_recording_preferences"
    values={[
        { label: 'update_connection_recording_preferences', value: 'update_connection_recording_preferences' }
    ]}
>
<TabItem value="update_connection_recording_preferences">

Updates the preferences for recording RDP connections.

```sql
UPDATE aws.ssm_guiconnect.connection_recording_preferences
SET 
ClientToken = '{{ ClientToken }}',
ConnectionRecordingPreferences = '{{ ConnectionRecordingPreferences }}'
WHERE 
region = '{{ region }}' --required
AND ConnectionRecordingPreferences = '{{ ConnectionRecordingPreferences }}' --required
RETURNING
client_token,
connection_recording_preferences;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection_recording_preferences"
    values={[
        { label: 'delete_connection_recording_preferences', value: 'delete_connection_recording_preferences' }
    ]}
>
<TabItem value="delete_connection_recording_preferences">

Deletes the preferences for recording RDP connections.

```sql
DELETE FROM aws.ssm_guiconnect.connection_recording_preferences
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
