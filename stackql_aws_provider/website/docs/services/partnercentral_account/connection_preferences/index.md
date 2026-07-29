--- 
title: connection_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_preferences
  - partnercentral_account
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

Creates, updates, deletes, gets or lists a <code>connection_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.connection_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection_preferences"
    values={[
        { label: 'get_connection_preferences', value: 'get_connection_preferences' }
    ]}
>
<TabItem value="get_connection_preferences">

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
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>The access type setting for connections (e.g., open, restricted, invitation-only). (ALLOW_ALL, DENY_ALL, ALLOW_BY_DEFAULT_DENY_SOME)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection preferences. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:partnercentral:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:catalog/&#91;a-zA-Z&#93;+/connection-preferences&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier for the partner account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="excluded_participant_ids" /></td>
    <td><code>array</code></td>
    <td>A list of participant IDs that are excluded from connection requests or interactions.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>integer (int64)</code></td>
    <td>The revision number of the connection preferences for optimistic locking.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection preferences were last updated.</td>
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
    <td><a href="#get_connection_preferences"><CopyableCode code="get_connection_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the connection preferences for a partner account, including access settings and exclusions.</td>
</tr>
<tr>
    <td><a href="#update_connection_preferences"><CopyableCode code="update_connection_preferences" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessType"><code>AccessType</code></a></td>
    <td></td>
    <td>Updates the connection preferences for a partner account, modifying access settings and exclusions.</td>
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
    defaultValue="get_connection_preferences"
    values={[
        { label: 'get_connection_preferences', value: 'get_connection_preferences' }
    ]}
>
<TabItem value="get_connection_preferences">

Retrieves the connection preferences for a partner account, including access settings and exclusions.

```sql
SELECT
access_type,
arn,
catalog,
excluded_participant_ids,
revision,
updated_at
FROM aws.partnercentral_account.connection_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection_preferences"
    values={[
        { label: 'update_connection_preferences', value: 'update_connection_preferences' }
    ]}
>
<TabItem value="update_connection_preferences">

Updates the connection preferences for a partner account, modifying access settings and exclusions.

```sql
UPDATE aws.partnercentral_account.connection_preferences
SET 
Catalog = '{{ Catalog }}',
Revision = {{ Revision }},
AccessType = '{{ AccessType }}',
ExcludedParticipantIdentifiers = '{{ ExcludedParticipantIdentifiers }}'
WHERE 
region = '{{ region }}' --required
AND AccessType = '{{ AccessType }}' --required
RETURNING
access_type,
arn,
catalog,
excluded_participant_ids,
revision,
updated_at;
```
</TabItem>
</Tabs>
